"use client";

import { useState } from "react";

export function SimposioForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      nome: formData.get("nome") as string,
      email: formData.get("email") as string,
      telefone: formData.get("telefone") as string,
      cidade: formData.get("cidade") as string,
      perfil: formData.get("perfil") as string,
    };

    const perfilLabels: Record<string, string> = {
      "pai-mae": "pai/mãe",
      educador: "educador",
      "pastor-lider": "pastor/líder",
      outro: "interessado",
    };
    const perfilLabel = perfilLabels[data.perfil] || data.perfil;

    // Monta URL do WhatsApp
    const mensagem = `Oi! Me chamo ${data.nome}, sou de ${data.cidade}. Sou ${perfilLabel} e tenho interesse no simpósio.`;
    const whatsappUrl = `https://wa.me/5532998374676?text=${encodeURIComponent(mensagem)}`;

    // Envia para n8n (fire and forget - não espera resposta)
    fetch("https://n8nwebhook.auraesmalteria.com.br/webhook/simposio_leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        perfilLabel,
        dataHora: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
      }),
    }).catch(() => {
      // Ignora erros - o lead vai pro WhatsApp de qualquer forma
    });

    // Redireciona imediatamente pro WhatsApp
    window.location.href = whatsappUrl;
  };

  const inputClasses =
    "w-full px-4 py-3 bg-white/10 border border-gold/30 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-white/80 mb-2">
          Nome completo
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          required
          className={inputClasses}
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={inputClasses}
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <label htmlFor="telefone" className="block text-sm font-medium text-white/80 mb-2">
          WhatsApp
        </label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          required
          className={inputClasses}
          placeholder="(32) 99999-9999"
        />
      </div>

      <div>
        <label htmlFor="cidade" className="block text-sm font-medium text-white/80 mb-2">
          Cidade
        </label>
        <input
          type="text"
          id="cidade"
          name="cidade"
          required
          className={inputClasses}
          placeholder="Sua cidade"
        />
      </div>

      <div>
        <label htmlFor="perfil" className="block text-sm font-medium text-white/80 mb-2">
          Perfil
        </label>
        <select
          id="perfil"
          name="perfil"
          required
          className={inputClasses}
        >
          <option value="" className="bg-navy">Selecione</option>
          <option value="pai-mae" className="bg-navy">Pai ou mãe</option>
          <option value="educador" className="bg-navy">Educador</option>
          <option value="pastor-lider" className="bg-navy">Pastor/líder</option>
          <option value="outro" className="bg-navy">Outro</option>
        </select>
      </div>

      {error && (
        <p className="text-red-400 text-sm text-center">{error}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-soft transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Enviando..." : "Garantir minha inscrição"}
      </button>

      <p className="text-white/40 text-xs text-center">
        Seus dados estão seguros e não serão compartilhados.
      </p>
    </form>
  );
}
