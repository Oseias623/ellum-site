import { NextRequest, NextResponse } from "next/server";

const PERFIL_LABELS: Record<string, string> = {
  "pai-mae": "pai/mãe",
  educador: "educador",
  "pastor-lider": "pastor/líder",
  outro: "interessado",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, email, telefone, cidade, perfil } = body;

    // Validação básica
    if (!nome || !email || !telefone || !cidade || !perfil) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    // Montar URL do WhatsApp
    const whatsappDestino = process.env.WHATSAPP_DESTINO || "5532998374676";
    const perfilLabel = PERFIL_LABELS[perfil] || perfil;
    const mensagem = `Oi! Me chamo ${nome}, sou de ${cidade}. Sou ${perfilLabel} e tenho interesse no simpósio.`;
    const whatsappUrl = `https://wa.me/${whatsappDestino}?text=${encodeURIComponent(mensagem)}`;

    // Enviar para n8n (server-side, sem CORS)
    const dataHora = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

    try {
      await fetch("https://n8nwebhook.auraesmalteria.com.br/webhook/simposio_leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          email,
          telefone,
          cidade,
          perfil,
          perfilLabel,
          dataHora,
        }),
      });
      console.log("Lead enviado para n8n com sucesso");
    } catch (n8nError) {
      console.error("Erro ao enviar para n8n:", n8nError);
      // Continua mesmo com erro - o lead vai pro WhatsApp
    }

    return NextResponse.json({ redirectUrl: whatsappUrl });
  } catch (error) {
    console.error("Erro na API do simpósio:", error);

    // Mesmo com erro, redireciona pro WhatsApp
    const whatsappDestino = process.env.WHATSAPP_DESTINO || "5532998374676";
    const mensagem = "Oi! Tenho interesse no simpósio.";
    const whatsappUrl = `https://wa.me/${whatsappDestino}?text=${encodeURIComponent(mensagem)}`;

    return NextResponse.json({ redirectUrl: whatsappUrl });
  }
}
