import { NextRequest, NextResponse } from "next/server";

interface MatriculaData {
  nome: string;
  telefone: string;
  email: string;
  quantidadeFilhos: number;
  filhos: { periodo: string; periodoLabel: string }[];
  mensagem?: string;
  dataHora: string;
  origem: string;
}

const PERIODOS_LABELS: Record<string, string> = {
  "maternal-2": "Maternal 2 anos",
  "maternal-3": "Maternal 3 anos",
  "pre-4": "Pré 4 anos",
  "pre-5": "Pré 5 anos",
  "fundamental-1": "Fundamental 1º ano",
  "fundamental-2": "Fundamental 2º ano",
  "fundamental-3": "Fundamental 3º ano",
  "fundamental-4-acima": "Fundamental 4º ano ou acima",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, telefone, email, quantidadeFilhos, filhosPeriodos, mensagem, origem } = body;

    // Validação básica
    if (!nome || !telefone || !email || !filhosPeriodos?.length) {
      return NextResponse.json(
        { error: "Campos obrigatórios não preenchidos" },
        { status: 400 }
      );
    }

    // Montar dados estruturados
    const dataHora = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

    const filhos = filhosPeriodos.map((periodo: string) => ({
      periodo,
      periodoLabel: PERIODOS_LABELS[periodo] || periodo,
    }));

    const matriculaData: MatriculaData = {
      nome,
      telefone,
      email,
      quantidadeFilhos: Number(quantidadeFilhos) || filhosPeriodos.length,
      filhos,
      mensagem: mensagem || "",
      dataHora,
      origem: origem || "site",
    };

    // Enviar para webhook n8n
    const webhookUrl = process.env.N8N_WEBHOOK_MATRICULAS;

    if (!webhookUrl) {
      console.error("❌ N8N_WEBHOOK_MATRICULAS não configurado!");
      return NextResponse.json(
        { error: "Configuração do servidor incompleta" },
        { status: 500 }
      );
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(matriculaData),
    });

    if (!response.ok) {
      console.error("❌ Erro no webhook n8n:", response.status, await response.text());
      return NextResponse.json(
        { error: "Erro ao registrar solicitação. Tente novamente." },
        { status: 502 }
      );
    }

    console.log("✅ Matrícula enviada para n8n:", matriculaData.nome);

    return NextResponse.json({
      success: true,
      message: "Solicitação recebida com sucesso"
    });
  } catch (error) {
    console.error("Erro na API de matrículas:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
