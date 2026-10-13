/* eslint-disable @typescript-eslint/no-require-imports -- Node CJS harness transpiles the real TSX with the existing TypeScript dependency. */
const {test, afterEach} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const Module = require('node:module');
const resolve = Module._resolveFilename;
Module._resolveFilename = function(name, ...args) { return resolve.call(this, name.startsWith('@/') ? path.resolve(__dirname, '../src', name.slice(2)) : name, ...args); };
for (const ext of ['.ts','.tsx']) require.extensions[ext] = (mod, file) => mod._compile(ts.transpileModule(fs.readFileSync(file,'utf8'), {compilerOptions:{module:ts.ModuleKind.CommonJS, jsx:ts.JsxEmit.ReactJSX, esModuleInterop:true,target:ts.ScriptTarget.ES2022}}).outputText,file);
const {JSDOM} = require('jsdom');
const dom = new JSDOM('<div id="root"></div>', {url:'http://localhost/?origem=bio'});
global.window = dom.window;
global.document = dom.window.document;
global.FormData = dom.window.FormData;
global.IS_REACT_ACT_ENVIRONMENT = true;
const React = require('react');
const {act} = React;
const {createRoot} = require('react-dom/client');
const {MatriculaForm} = require('../src/components/forms/MatriculaForm.tsx');
let root;
const originalFetch = global.fetch;
afterEach(async () => { if(root) await act(async () => root.unmount()); root = null; global.fetch = originalFetch; });
async function mount() {
 root = createRoot(document.getElementById('root'));
 await act(async () => root.render(React.createElement(MatriculaForm)));
 for(const [name,value] of Object.entries({nome:'Maria Teste',email:'maria@example.com',telefone:'32999991234',mensagem:'Quero visitar'})) document.querySelector(`[name=${name}]`).value = value;
 await act(async () => { const select = document.querySelector('[name=filho-1]'); select.value='pre-5'; select.dispatchEvent(new window.Event('change',{bubbles:true})); });
}
for(const [label, result] of [
 ['HTTP error',()=>Response.json({success:true},{status:500})],
 ['unconfirmed',()=>Response.json({success:false})],
 ['empty acknowledgement',()=>Response.json({})],
 ['string true',()=>Response.json({success:'true'})],
 ['bad JSON',()=>new Response('OK')],
 ['offline',()=>{throw new Error('offline');}],
]) test(`preserves all data, shows error and allows retry after ${label}`, async()=>{
 window.history.replaceState({},'', '/');
 let payload;
 global.fetch=async(_,options)=>{payload=JSON.parse(options.body); return result();};
 await mount();
 await act(async()=>submit());
 assert.ok(document.querySelector('[role=alert]'));
 assert.doesNotMatch(document.body.textContent,/Solicitação recebida!/);
 assert.equal(document.querySelector('[name=nome]').value,'Maria Teste');
 assert.equal(document.querySelector('[name=mensagem]').value,'Quero visitar');
 assert.equal(document.querySelector('[name=filho-1]').value,'pre-5');
 assert.equal(document.querySelector('button[type=submit]').disabled,false);
 assert.equal(payload.origem,'site');
 global.fetch=async()=>Response.json({success:true});
 await act(async()=>submit());
 assert.match(document.body.textContent,/Solicitação recebida!/);
});
test('links matrícula destination carries bio origin without changing symposium link',()=>{
 const {renderToStaticMarkup}=require('react-dom/server');
 const LinksPage=require('../src/app/links/page.tsx').default;
 const html=new JSDOM(renderToStaticMarkup(React.createElement(LinksPage)));
 const links=[...html.window.document.querySelectorAll('a')];
 assert.equal(links.find(a=>a.textContent.includes('Matrículas 2027')).getAttribute('href'),'/?origem=bio#admissoes');
 assert.equal(links.filter(a=>a.textContent.includes('Simpósio')).length,0);
});
test('browser times out stalled API and restores retry without losing data',async()=>{
 const originalTimeout = global.setTimeout;
 let observed;
 global.setTimeout=(fn,ms,...args)=>{ if(ms===20000) {observed=ms; return originalTimeout(fn,5,...args);} return originalTimeout(fn,ms,...args); };
 global.fetch=async(_,options)=>new Promise((resolve,reject)=>{
   const timer=originalTimeout(()=>resolve(Response.json({success:true})),50);
   options.signal?.addEventListener('abort',()=>{clearTimeout(timer);reject(options.signal.reason);});
 });
 try {
   await mount();
   await act(async()=>{submit();await new Promise(resolve=>originalTimeout(resolve,70));});
   assert.equal(observed,20000);
   assert.ok(document.querySelector('[role=alert]'));
   assert.equal(document.querySelector('[name=nome]').value,'Maria Teste');
   assert.equal(document.querySelector('button').disabled,false);
 } finally {global.setTimeout=originalTimeout;}
});
test('browser exposes matching field length limits',async()=>{
 await mount();
 for(const [name,max] of Object.entries({nome:150,email:254,telefone:40,mensagem:3000})) assert.equal(document.querySelector(`[name=${name}]`).maxLength,max);
});
function submit() { document.querySelector('form').dispatchEvent(new window.Event('submit',{bubbles:true,cancelable:true})); }
test('pending submission blocks duplicate clicks and only confirmed response shows success', async () => {
 let finish, calls=0, payload;
 window.history.replaceState({},'', '/?origem=bio');
 global.fetch = async (url,options) => { calls++; assert.equal(url,'/api/matriculas'); payload=JSON.parse(options.body); return new Promise(resolve=>{finish=resolve;}); };
 await mount();
 await act(async()=> { submit(); submit(); });
 assert.equal(calls,1);
 assert.equal(document.querySelector('button[type=submit]').disabled,true);
 assert.doesNotMatch(document.body.textContent,/Solicitação recebida!/);
 assert.deepEqual(payload,{nome:'Maria Teste',email:'maria@example.com',telefone:'32999991234',mensagem:'Quero visitar',quantidade:1,filhosPeriodos:['pre-5'],origem:'bio'});
 await act(async()=>finish(Response.json({success:true})));
 assert.match(document.body.textContent,/Solicitação recebida!/);
});
