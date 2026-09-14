"use client";

import { useState } from "react";

export function SimposioForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrar com backend (Resend, EmailJS, etc)
    setIsSubmitted(true);
  };

  const inputClasses =
    "w-full px-4 py-3 bg-white/10 border border-gold/30 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors";

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 text-gold mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-white mb-2">Inscrição recebida!</h3>
        <p className="text-white/60">
          Sua inscrição foi recebida. Nossa equipe entrará em contato com as próximas informações.
        </p>
      </div>
    );
  }

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
        <label htmlFor="interesse" className="block text-sm font-medium text-white/80 mb-2">
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

      <button
        type="submit"
        className="w-full py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-soft transition-colors"
      >
        Garantir minha inscrição
      </button>

      <p className="text-white/40 text-xs text-center">
        Seus dados estão seguros e não serão compartilhados.
      </p>
    </form>
  );
}
