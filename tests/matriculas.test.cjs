/* eslint-disable @typescript-eslint/no-require-imports -- Node CJS harness transpiles the real route with the existing TypeScript dependency. */
const { test, afterEach } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText, filename);
const routePath = '../src/app/api/matriculas/route.ts';
const originalFetch = global.fetch;
const originalTimeout = AbortSignal.timeout;
afterEach(() => { AbortSignal.timeout = originalTimeout; });
for (const [label, response] of [
  ['HTTP error', () => Response.json({success: true}, {status: 500})],
  ['default n8n response', () => Response.json({message: 'Workflow was started'})],
  ['explicit failure', () => Response.json({success: false})],
  ['string success', () => Response.json({success: 'true'})],
  ['invalid JSON', () => new Response('OK')],
  ['network failure', () => { throw new Error('offline'); }],
]) test(`fails closed on ${label}`, async () => {
  global.fetch = async () => response();
  const result = await post(request());
  assert.equal(result.status, 502);
  assert.equal((await result.json()).success, false);
});
test('aborts slow upstream with a bounded timeout', async () => {
  AbortSignal.timeout = (ms) => { assert.equal(ms, 15000); return originalTimeout(5); };
  global.fetch = async (_, options) => new Promise((resolve, reject) => {
    const timer = setTimeout(() => resolve(Response.json({success: true})), 50);
    options.signal?.addEventListener('abort', () => { clearTimeout(timer); reject(options.signal.reason); });
  });
  const result = await post(request());
  assert.equal(result.status, 502);
});
afterEach(() => { global.fetch = originalFetch; });
const valid = { nome: ' Maria Teste ', email: 'maria@example.com', telefone: '(32) 99999-1234', quantidade: 2, filhosPeriodos: ['maternal-2', 'pre-5'], mensagem: 'Visita', origem: 'bio' };
const request = (body = valid) => new Request('http://localhost/api/matriculas', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
for (const patch of [
  {nome: ''}, {nome: 'x'.repeat(151)}, {email: 'bad'}, {email: 'a'.repeat(255)+'@a.co'},
  {telefone: 'abc'}, {telefone: '1'.repeat(41)}, {mensagem: 'x'.repeat(3001)},
  {quantidade: 0}, {quantidade: 6}, {quantidade: 1.5}, {quantidade: '2'},
  {filhosPeriodos: ['pre-5']}, {filhosPeriodos: ['pre-5', 'unknown']},
  {filhosPeriodos: 'pre-5'}, {origem: 'other'}, {nome: {}},
]) test(`rejects invalid fields ${JSON.stringify(patch).slice(0,90)}`, async () => {
  let calls = 0;
  global.fetch = async () => { calls++; return Response.json({success:true}); };
  const response = await post(request({...valid, ...patch}));
  assert.equal(response.status, 400);
  assert.equal((await response.json()).success, false);
  assert.equal(calls, 0);
});
test('rejects malformed JSON, non-object and oversized bodies before forwarding', async () => {
  global.fetch = async () => { assert.fail('must not forward invalid body'); };
  for (const body of ['{', 'null', '[]', '"str"']) {
    assert.equal((await post(new Request('http://localhost', {method:'POST',body}))).status, 400);
  }
  assert.equal((await post(new Request('http://localhost', {method:'POST',body:' '.repeat(16385)}))).status, 413);
});
test('defaults origem to site and ignores client timestamp/extra fields', async () => {
  let payload;
  global.fetch = async (_, options) => { payload = JSON.parse(options.body); return Response.json({success:true}); };
  const body = {...valid};
  delete body.origem;
  assert.equal((await post(request({...body, dataHora:'fake', extra:'drop'}))).status, 200);
  assert.equal(payload.origem, 'site');
  assert.notEqual(payload.dataHora, 'fake');
  assert.equal(payload.extra, undefined);
});
test('accepts boundary lengths matching the n8n contract', async()=>{
 global.fetch=async()=>Response.json({success:true});
 assert.equal((await post(request({...valid,nome:'n'.repeat(150),telefone:' '.repeat(25)+'123456789012345',mensagem:'m'.repeat(3000)}))).status,200);
});
test('supports cached form using quantidadeFilhos and normalizes the n8n contract', async () => {
 let payload;
 global.fetch=async(_,options)=>{payload=JSON.parse(options.body);return Response.json({success:true});};
 const {quantidade,...legacy}=valid;
 assert.equal((await post(request({...legacy,quantidadeFilhos:quantidade}))).status,200);
 assert.equal(payload.quantidade,2);
 assert.deepEqual(payload.filhosPeriodos,valid.filhosPeriodos);
});
async function post(req) {
  assert.ok(fs.existsSync(require('node:path').resolve(__dirname, routePath)), 'POST /api/matriculas must exist instead of losing leads');
  return require(routePath).POST(req);
}
test('forwards all lead fields and confirms only after upstream acknowledgement', async () => {
  let sent;
  global.fetch = async (url, options) => { sent = { url, options }; return Response.json({success: true}); };
  const response = await post(request());
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), {success: true});
  assert.equal(sent.url, 'https://n8nwebhook.auraesmalteria.com.br/webhook/matriculas');
  assert.equal(sent.options.method, 'POST');
  const payload = JSON.parse(sent.options.body);
  assert.deepEqual(payload, { ...valid, nome: 'Maria Teste', dataHora: payload.dataHora });
  assert.ok(Number.isFinite(Date.parse(payload.dataHora)));
});
