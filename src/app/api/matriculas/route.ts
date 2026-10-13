const PERIODOS = new Set([
  "maternal-2", "maternal-3", "pre-4", "pre-5", "fundamental-1",
  "fundamental-2", "fundamental-3", "fundamental-4-acima",
]);
const invalid = () => Response.json({ success: false, error: "Confira os dados e o período de cada filho." }, { status: 400 });

export async function POST(request: Request) {
  let body;
  try {
    // Bound the stream, including requests without Content-Length.
    const reader = request.body?.getReader();
    if (!reader) return invalid();
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 16384) {
        await reader.cancel();
        return Response.json({ success: false, error: "Dados muito extensos." }, { status: 413 });
      }
      chunks.push(value);
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
    body = JSON.parse(new TextDecoder().decode(bytes));
  } catch { return invalid(); }
  if (!body || typeof body !== "object" || Array.isArray(body)) return invalid();
  const text = (value: unknown, max: number, required = true): value is string =>
    typeof value === "string" && value.length <= max && (!required || value.trim().length > 0);
  const { nome, email, telefone, filhosPeriodos } = body;
  const quantidade = body.quantidade ?? body.quantidadeFilhos;
  const mensagem = body.mensagem ?? "";
  const origem = body.origem ?? "site";
  if (!text(nome, 150) || !text(email, 254) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
      !text(telefone, 40) || !/^[+\d\s().-]+$/.test(telefone) || !/^\d{10,15}$/.test(telefone.replace(/\D/g, "")) ||
      !text(mensagem, 3000, false) || !Number.isInteger(quantidade) || quantidade < 1 || quantidade > 5 ||
      !Array.isArray(filhosPeriodos) || filhosPeriodos.length !== quantidade ||
      !filhosPeriodos.every((periodo: unknown) => typeof periodo === "string" && PERIODOS.has(periodo)) ||
      (origem !== "site" && origem !== "bio")) return invalid();
  const payload = { nome: nome.trim(), email: email.trim(), telefone: telefone.trim(), quantidade,
    filhosPeriodos, mensagem: mensagem.trim(), origem, dataHora: new Date().toISOString() };
  try {
    const upstream = await fetch("https://n8nwebhook.auraesmalteria.com.br/webhook/matriculas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15000),
      redirect: "error",
      cache: "no-store",
    });
    if (!upstream.ok || (await upstream.json())?.success !== true) {
      throw new Error("Matrícula não confirmada");
    }
    return Response.json({ success: true });
  } catch {
    return Response.json({ success: false, error: "Não foi possível confirmar o envio. Seus dados foram mantidos. Tente novamente ou entre em contato com a escola." }, { status: 502 });
  }
}
