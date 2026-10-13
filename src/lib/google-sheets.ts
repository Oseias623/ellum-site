import { google } from "googleapis";

/**
 * Interface para dados do lead do simpósio
 */
export interface SimposioLead {
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  perfil: string;
  perfilLabel: string;
  dataHora: string;
}

/**
 * Adiciona um lead à planilha do Google Sheets
 */
export async function adicionarLeadNaPlanilha(lead: SimposioLead): Promise<void> {
  try {
    // Verifica se as variáveis de ambiente estão configuradas
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    const sheetName = process.env.GOOGLE_SHEETS_NAME || "Leads";
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;

    if (!spreadsheetId || !privateKey || !clientEmail) {
      throw new Error(
        "Variáveis de ambiente do Google Sheets não configuradas. " +
        "Configure: GOOGLE_SHEETS_ID, GOOGLE_PRIVATE_KEY, GOOGLE_CLIENT_EMAIL"
      );
    }

    // Autenticação com Service Account
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey.replace(/\\n/g, "\n"), // Corrige quebras de linha
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Dados a serem inseridos
    const values = [
      [
        lead.dataHora,
        lead.nome,
        lead.email,
        lead.telefone,
        lead.cidade,
        lead.perfilLabel,
      ],
    ];

    // Adiciona a linha na planilha
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:F`, // Colunas A até F
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });

    console.log(`✅ Lead ${lead.nome} adicionado à planilha com sucesso`);
  } catch (error) {
    console.error("❌ Erro ao adicionar lead na planilha:", error);
    throw error; // Re-lança o erro para tratamento no caller
  }
}
