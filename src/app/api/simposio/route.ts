import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

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

    // Montar URL do WhatsApp (sempre retorna, mesmo se Sheets falhar)
    const whatsappDestino = process.env.WHATSAPP_DESTINO || "5532998374676";
    const perfilLabel = PERFIL_LABELS[perfil] || perfil;
    const mensagem = `Oi! Me chamo ${nome}, sou de ${cidade}. Sou ${perfilLabel} e tenho interesse no simpósio.`;
    const whatsappUrl = `https://wa.me/${whatsappDestino}?text=${encodeURIComponent(mensagem)}`;

    // Tentar gravar no Google Sheets (não bloqueia o redirect se falhar)
    try {
      await saveToGoogleSheets({ nome, email, telefone, cidade, perfil });
      console.log("Dados salvos no Google Sheets com sucesso");
    } catch (sheetError: unknown) {
      // Log detalhado para diagnóstico
      const errorDetails = {
        message: sheetError instanceof Error ? sheetError.message : String(sheetError),
        stack: sheetError instanceof Error ? sheetError.stack : undefined,
        hasSheetId: !!process.env.GOOGLE_SHEET_ID,
        hasServiceEmail: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
        privateKeyLength: process.env.GOOGLE_PRIVATE_KEY?.length || 0,
        privateKeyStart: process.env.GOOGLE_PRIVATE_KEY?.substring(0, 50),
      };
      console.error("Erro ao salvar no Google Sheets:", JSON.stringify(errorDetails, null, 2));
      // Continua mesmo com erro - não trava o lead
    }

    return NextResponse.json({ redirectUrl: whatsappUrl });
  } catch (error) {
    console.error("Erro na API do simpósio:", error);

    // Mesmo com erro, tenta redirecionar pro WhatsApp
    const whatsappDestino = process.env.WHATSAPP_DESTINO || "5532998374676";
    const mensagem = "Oi! Tenho interesse no simpósio.";
    const whatsappUrl = `https://wa.me/${whatsappDestino}?text=${encodeURIComponent(mensagem)}`;

    return NextResponse.json({ redirectUrl: whatsappUrl });
  }
}

async function saveToGoogleSheets(data: {
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  perfil: string;
}) {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  // Trata diferentes formatos de quebra de linha da Vercel
  let privateKey = process.env.GOOGLE_PRIVATE_KEY;
  if (privateKey) {
    // Remove aspas extras se existirem no início/fim
    privateKey = privateKey.replace(/^["']|["']$/g, "");
    // Converte literal \n para quebras de linha reais
    privateKey = privateKey.replace(/\\n/g, "\n");
    // Remove \r se existir
    privateKey = privateKey.replace(/\r/g, "");
  }

  if (!sheetId || !serviceAccountEmail || !privateKey) {
    throw new Error("Credenciais do Google Sheets não configuradas");
  }

  const auth = new google.auth.JWT({
    email: serviceAccountEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const now = new Date();
  const dataHora = now.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

  const perfilLabel = PERFIL_LABELS[data.perfil] || data.perfil;

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "A:F",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[dataHora, data.nome, data.email, data.telefone, data.cidade, perfilLabel]],
    },
  });
}
