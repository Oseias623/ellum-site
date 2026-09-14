"use client";

import { useState } from "react";
import { Button } from "@/components/ui";

const PERIODOS_2027 = [
  { value: "maternal-2", label: "Maternal 2 anos" },
  { value: "maternal-3", label: "Maternal 3 anos" },
  { value: "pre-4", label: "Pré 4 anos" },
  { value: "pre-5", label: "Pré 5 anos" },
  { value: "fundamental-1", label: "Fundamental 1º ano" },
  { value: "fundamental-2", label: "Fundamental 2º ano" },
  { value: "fundamental-3", label: "Fundamental 3º ano" },
  { value: "fundamental-4-acima", label: "Fundamental 4º ano ou acima" },
];

type MatriculaFormVariant = "default" | "editorial";

interface MatriculaFormProps {
  variant?: MatriculaFormVariant;
  submitLabel?: string;
}

export function MatriculaForm({
  variant = "default",
  submitLabel = "Enviar Solicitação",
}: MatriculaFormProps) {
  const [quantidadeFilhos, setQuantidadeFilhos] = useState(1);
  const [filhosPeriodos, setFilhosPeriodos] = useState<string[]>([""]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleQuantidadeChange = (novaQuantidade: number) => {
    setQuantidadeFilhos(novaQuantidade);
    setFilhosPeriodos((prev) => {
      if (novaQuantidade > prev.length) {
        return [...prev, ...Array(novaQuantidade - prev.length).fill("")];
      }
      return prev.slice(0, novaQuantidade);
    });
  };

  const handlePeriodoChange = (index: number, value: string) => {
    setFilhosPeriodos((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const labelClasses =
    variant === "editorial"
      ? "block text-sm font-medium text-navy mb-2"
      : "block text-sm font-medium text-gray-700 mb-2";
  const inputClasses =
    variant === "editorial"
      ? "w-full px-4 py-3 bg-ivory border border-stone/50 rounded-sm text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-shadow"
      : "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/15 text-gold mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={`font-serif text-2xl mb-2 ${variant === "editorial" ? "text-navy" : "text-gray-900"}`}>
          Solicitação recebida!
        </h3>
        <p className={variant === "editorial" ? "text-ink-muted" : "text-gray-600"}>
          Nossa equipe entrará em contato para apresentar a proposta e agendar sua visita.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="nome" className={labelClasses}>
          Nome do Responsável
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          className={inputClasses}
          placeholder="Seu nome completo"
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="telefone" className={labelClasses}>
            Telefone
          </label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            className={inputClasses}
            placeholder="(32) 99999-9999"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={inputClasses}
            placeholder="seu@email.com"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="quantidade" className={labelClasses}>
          Quantidade de Filhos
        </label>
        <select
          id="quantidade"
          name="quantidade"
          value={quantidadeFilhos}
          onChange={(e) => handleQuantidadeChange(Number(e.target.value))}
          className={inputClasses}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? "filho" : "filhos"}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-4">
        <p className={variant === "editorial" ? "text-sm font-medium text-navy" : "text-sm font-medium text-gray-700"}>
          Período a cursar em 2027 (por filho)
        </p>
        {Array.from({ length: quantidadeFilhos }).map((_, index) => (
          <div key={index}>
            <label
              htmlFor={`filho-${index + 1}`}
              className={variant === "editorial" ? "block text-sm text-ink-muted mb-1" : "block text-sm text-gray-600 mb-1"}
            >
              {quantidadeFilhos === 1 ? "Seu filho" : `Filho ${index + 1}`}
            </label>
            <select
              id={`filho-${index + 1}`}
              name={`filho-${index + 1}`}
              value={filhosPeriodos[index] || ""}
              onChange={(e) => handlePeriodoChange(index, e.target.value)}
              className={inputClasses}
              required
            >
              <option value="">Selecione o período</option>
              {PERIODOS_2027.map((periodo) => (
                <option key={periodo.value} value={periodo.value}>
                  {periodo.label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="mensagem" className={labelClasses}>
          Mensagem <span className={variant === "editorial" ? "text-ink-muted font-normal" : "text-gray-500 font-normal"}>(opcional)</span>
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={3}
          className={`${inputClasses} resize-none`}
          placeholder="Conte-nos um pouco sobre o que busca na educação do seu filho..."
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className={variant === "editorial" ? "w-full bg-navy text-white hover:bg-navy-soft" : "w-full"}
      >
        {submitLabel}
      </Button>
    </form>
  );
}
