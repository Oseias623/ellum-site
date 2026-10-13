import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MatriculaForm } from "@/components/forms/MatriculaForm";

export const metadata: Metadata = {
  title: "Matrículas 2027 | ELLUM Escola Cristã Clássica",
  description:
    "Garanta a vaga do seu filho na ELLUM. Educação cristã clássica que forma mentes para a verdade e corações para a virtude. Vagas limitadas para 2027.",
};

const PROCESSO_ETAPAS = [
  {
    numero: "1",
    titulo: "Manifestar Interesse",
    descricao: "Preencha o formulário com seus dados. Nossa equipe entrará em contato em até 24h.",
  },
  {
    numero: "2",
    titulo: "Visita à Escola",
    descricao: "Conheça nossa estrutura, converse com a coordenação e tire todas as suas dúvidas.",
  },
  {
    numero: "3",
    titulo: "Entrevista Familiar",
    descricao: "Uma conversa para conhecermos sua família e alinharmos expectativas sobre a educação.",
  },
  {
    numero: "4",
    titulo: "Matrícula",
    descricao: "Após aprovação, formalize a matrícula e faça parte da família ELLUM.",
  },
];

const ESTATISTICAS = [
  { numero: "15", label: "alunos por turma", sublabel: "(máximo)" },
  { numero: "2027", label: "matrículas abertas", sublabel: "" },
  { numero: "100%", label: "foco na formação", sublabel: "integral" },
];

const DIFERENCIAIS = [
  {
    titulo: "Educação Cristã Clássica",
    descricao: "Método Trivium (Gramática, Lógica, Retórica) que desenvolve o pensamento crítico e a eloquência.",
    icone: "book",
  },
  {
    titulo: "Alfabetização Fônica",
    descricao: "Método comprovado que ensina a decodificar a língua com precisão e solidez.",
    icone: "abc",
  },
  {
    titulo: "Programa Bilíngue",
    descricao: "Familiarização diária com a língua inglesa desde a Educação Infantil.",
    icone: "globe",
  },
  {
    titulo: "Turmas Reduzidas",
    descricao: "Atenção individualizada para cada aluno, respeitando seu ritmo de aprendizado.",
    icone: "users",
  },
  {
    titulo: "Fundamentação Bíblica",
    descricao: "Toda a educação é centrada em Cristo e fundamentada nas Escrituras Sagradas.",
    icone: "cross",
  },
  {
    titulo: "Parceria com a Família",
    descricao: "Trabalhamos junto com os pais na formação completa das crianças.",
    icone: "home",
  },
];

const DEPOIMENTOS = [
  {
    texto: "A ELLUM transformou a forma como meu filho vê o aprendizado. Ele agora ama estudar e questiona o mundo com sabedoria. A educação clássica fez toda a diferença.",
    autor: "Família Silva",
    detalhe: "Pais de aluno do 2º ano",
  },
  {
    texto: "Buscávamos uma escola que compartilhasse nossos valores cristãos sem abrir mão da excelência acadêmica. Na ELLUM encontramos exatamente isso.",
    autor: "Família Oliveira",
    detalhe: "Pais de aluno do Maternal",
  },
  {
    texto: "O cuidado com cada criança é visível. Os professores conhecem cada aluno pelo nome e acompanham de perto seu desenvolvimento.",
    autor: "Família Santos",
    detalhe: "Pais de 2 alunos",
  },
];

const FAQ = [
  {
    pergunta: "A partir de qual idade vocês aceitam alunos?",
    resposta: "Aceitamos crianças a partir de 2 anos (Maternal 2) até o Ensino Fundamental. Estamos em expansão gradual das séries.",
  },
  {
    pergunta: "O que é a Educação Cristã Clássica?",
    resposta: "É um método de ensino milenar baseado no Trivium (Gramática, Lógica e Retórica), que respeita as fases de desenvolvimento da criança e forma pensadores capazes de discernir a verdade, centrado em Cristo.",
  },
  {
    pergunta: "Preciso ser cristão para matricular meu filho?",
    resposta: "A ELLUM é uma escola confessional cristã reformada. Esperamos que as famílias estejam alinhadas com nossa visão de mundo e valores, participando ativamente da formação espiritual dos filhos.",
  },
  {
    pergunta: "Como funciona o programa bilíngue?",
    resposta: "Os alunos têm contato diário com a língua inglesa através de atividades integradas ao currículo, desenvolvendo familiaridade natural com o idioma desde cedo.",
  },
  {
    pergunta: "Qual o valor da mensalidade?",
    resposta: "Os valores são apresentados durante a visita à escola, pois variam conforme a série. Agende uma visita para conhecer nossa proposta completa.",
  },
];

const CRONOGRAMA = [
  { data: "Agora", evento: "Manifestação de interesse", status: "ativo" },
  { data: "Após contato", evento: "Visita à escola", status: "pendente" },
  { data: "Após visita", evento: "Entrevista familiar", status: "pendente" },
  { data: "Fev/2027", evento: "Início das aulas", status: "pendente" },
];

function IconBook() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function MatriculasPage() {
  return (
    <main className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C4965F' stroke-width='1'%3E%3Cpath d='M30 0v60M0 30h60'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Image
                src="/images/logo-gold.png"
                alt="ELLUM Escola Cristã Clássica"
                width={180}
                height={130}
                priority
                className="h-24 md:h-28 w-auto mx-auto"
              />
            </div>

            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Educação construída sobre a{" "}
              <span className="text-gold">Rocha</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Formando mentes para a verdade, corações para a virtude.
              Uma educação integral, centrada em Cristo e fundamentada na Palavra.
            </p>

            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-2 text-gold text-sm font-medium">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              Matrículas 2027 — Vagas limitadas
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 100V60C240 20 480 0 720 0C960 0 1200 20 1440 60V100H0Z" fill="#FAF8F3" />
          </svg>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-12 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {ESTATISTICAS.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-serif text-3xl md:text-4xl text-navy">{stat.numero}</p>
                <p className="text-sm text-ink-muted">{stat.label}</p>
                {stat.sublabel && <p className="text-xs text-ink-muted/70">{stat.sublabel}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - Form + Benefits */}
      <section id="formulario" className="py-16 md:py-24 bg-parchment">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Benefits */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-navy mb-8">
                Por que escolher a ELLUM?
              </h2>

              <div className="space-y-5">
                {DIFERENCIAIS.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <IconCheck />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-navy mb-1">{item.titulo}</h3>
                      <p className="text-ink-muted text-sm leading-relaxed">{item.descricao}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-white rounded-sm border border-navy/10 shadow-xl p-8 md:p-10">
                <div className="text-center mb-8">
                  <h3 className="font-serif text-2xl text-navy mb-2">
                    Garanta a vaga do seu filho
                  </h3>
                  <p className="text-ink-muted">
                    Preencha o formulário e nossa equipe entrará em contato em até 24h.
                  </p>
                </div>

                <MatriculaForm
                  variant="editorial"
                  submitLabel="Quero garantir a vaga"
                  origem="site"
                />
              </div>

              <div className="mt-6 flex items-center justify-center gap-6 text-ink-muted text-xs">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Dados protegidos
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Resposta em 24h
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processo de Matrícula */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-navy text-center mb-4">
              Como funciona o processo?
            </h2>
            <p className="text-ink-muted text-center mb-12">
              Queremos conhecer sua família e caminhar juntos nessa jornada.
            </p>

            <div className="space-y-0">
              {PROCESSO_ETAPAS.map((etapa, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Linha conectora */}
                  {index < PROCESSO_ETAPAS.length - 1 && (
                    <div className="absolute left-5 top-12 w-0.5 h-full bg-gold/20" />
                  )}

                  {/* Número */}
                  <div className="shrink-0 w-10 h-10 rounded-full bg-navy text-gold font-serif text-lg flex items-center justify-center z-10">
                    {etapa.numero}
                  </div>

                  {/* Conteúdo */}
                  <div className="pb-10">
                    <h3 className="font-serif text-xl text-navy mb-1">{etapa.titulo}</h3>
                    <p className="text-ink-muted text-sm">{etapa.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Fotos */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl text-white text-center mb-12">
            Conheça nossa escola
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="aspect-square relative rounded-sm overflow-hidden">
              <Image src="/images/escola-ambiente.jpg" alt="Ambiente escolar" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square relative rounded-sm overflow-hidden">
              <Image src="/images/aluno-uniforme.jpg" alt="Aluno ELLUM" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square relative rounded-sm overflow-hidden">
              <Image src="/images/ballet-editorial.webp" alt="Aula de ballet" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square relative rounded-sm overflow-hidden">
              <Image src="/images/jiu-jitsu-editorial.webp" alt="Aula de jiu-jitsu" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 md:py-24 bg-parchment">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl text-navy text-center mb-12">
            O que as famílias dizem
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {DEPOIMENTOS.map((dep, index) => (
              <div key={index} className="bg-white p-6 rounded-sm border-l-4 border-gold">
                <p className="font-serif text-navy italic mb-4 leading-relaxed">
                  &ldquo;{dep.texto}&rdquo;
                </p>
                <div>
                  <p className="font-medium text-navy text-sm">{dep.autor}</p>
                  <p className="text-ink-muted text-xs">{dep.detalhe}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cronograma */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-navy text-center mb-4">
              Cronograma de Matrículas
            </h2>
            <p className="text-ink-muted text-center mb-10">
              Ano letivo 2027
            </p>

            <div className="bg-white rounded-sm border border-navy/10 p-6 md:p-8">
              <div className="space-y-4">
                {CRONOGRAMA.map((item, index) => (
                  <div key={index} className={`flex items-center gap-4 p-3 rounded ${item.status === "ativo" ? "bg-gold/10" : ""}`}>
                    <div className={`w-3 h-3 rounded-full ${item.status === "ativo" ? "bg-gold" : "bg-navy/20"}`} />
                    <div className="flex-1">
                      <p className={`font-medium ${item.status === "ativo" ? "text-navy" : "text-ink-muted"}`}>
                        {item.evento}
                      </p>
                    </div>
                    <p className={`text-sm ${item.status === "ativo" ? "text-gold font-medium" : "text-ink-muted"}`}>
                      {item.data}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-parchment">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-navy text-center mb-12">
              Perguntas Frequentes
            </h2>

            <div className="space-y-4">
              {FAQ.map((item, index) => (
                <details key={index} className="group bg-white rounded-sm border border-navy/10">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="font-medium text-navy pr-4">{item.pergunta}</span>
                    <svg className="w-5 h-5 text-gold shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-ink-muted leading-relaxed">{item.resposta}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Pronto para conhecer a ELLUM?
            </h2>
            <p className="text-white/70 mb-8">
              Agende uma visita e venha conhecer nossa escola pessoalmente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#formulario"
                className="inline-flex items-center justify-center px-8 py-3 bg-gold text-navy font-semibold rounded-full hover:bg-gold-soft transition-colors"
              >
                Preencher formulário
              </a>
              <a
                href="https://wa.me/5532998374676"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-12 bg-parchment">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-ink-muted mb-1">
              <strong className="text-navy">ELLUM Escola Cristã Clássica</strong>
            </p>
            <p className="text-ink-muted text-sm">
              Av. Pres. Costa e Silva, 1740 — São Pedro, Juiz de Fora/MG
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <Image
            src="/images/logo-gold.png"
            alt="ELLUM"
            width={100}
            height={70}
            className="h-16 w-auto mx-auto mb-4"
          />
          <p className="text-white/60 text-sm mb-4">
            &copy; {new Date().getFullYear()} ELLUM Escola Cristã Clássica. Todos os direitos reservados.
          </p>
          <Link href="/" className="text-gold text-sm hover:text-gold-soft transition-colors">
            Visitar site completo →
          </Link>
        </div>
      </footer>
    </main>
  );
}
