import { NextRequest, NextResponse } from "next/server";
import { adicionarLeadNaPlanilha } from "@/lib/google-sheets";

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
    const whatsappDestino = (process.env.WHATSAPP_DESTINO || "5532998374676").trim();
    const perfilLabel = PERFIL_LABELS[perfil] || perfil;
    const mensagem = `Oi! Me chamo ${nome}, sou de ${cidade}. Sou ${perfilLabel} e tenho interesse no simpósio.`;
    const whatsappUrl = `https://wa.me/${whatsappDestino}?text=${encodeURIComponent(mensagem)}`;

    // Enviar para Google Sheets
    const dataHora = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

    try {
      await adicionarLeadNaPlanilha({
        nome,
        email,
        telefone,
        cidade,
        perfil,
        perfilLabel,
        dataHora,
      });
      console.log("✅ Lead enviado para Google Sheets com sucesso");
    } catch (sheetsError) {
      console.error("❌ Erro ao enviar para Google Sheets:", sheetsError);
      // Continua mesmo com erro - o lead vai pro WhatsApp
      // IMPORTANTE: Configure as variáveis de ambiente para ativar a integração
    }

    return NextResponse.json({ redirectUrl: whatsappUrl });
  } catch (error) {
    console.error("Erro na API do simpósio:", error);

    // Mesmo com erro, redireciona pro WhatsApp
    const whatsappDestino = (process.env.WHATSAPP_DESTINO || "5532998374676").trim();
    const mensagem = "Oi! Tenho interesse no simpósio.";
    const whatsappUrl = `https://wa.me/${whatsappDestino}?text=${encodeURIComponent(mensagem)}`;

    return NextResponse.json({ redirectUrl: whatsappUrl });
  }
}
