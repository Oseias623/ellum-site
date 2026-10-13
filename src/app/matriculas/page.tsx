import { Metadata } from "next";
import Image from "next/image";
import { MatriculaForm } from "@/components/forms/MatriculaForm";

export const metadata: Metadata = {
  title: "Matrículas 2027 | ELLUM Escola Cristã Clássica",
  description:
    "Garanta a vaga do seu filho na ELLUM. Educação cristã clássica que forma mentes para a verdade e corações para a virtude.",
};

export default function MatriculasPage() {
  return (
    <main className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative bg-navy text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C4965F' stroke-width='1'%3E%3Cpath d='M30 0v60M0 30h60'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
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

            {/* Headline */}
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Educação que forma para a{" "}
              <span className="text-gold">vida inteira</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Na ELLUM, seu filho desenvolve sabedoria, virtude e amor à verdade
              através do método clássico de ensino, fundamentado em princípios cristãos.
            </p>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-2 text-gold text-sm font-medium">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              Matrículas abertas para 2027 — Vagas limitadas
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 100V60C240 20 480 0 720 0C960 0 1200 20 1440 60V100H0Z" fill="#FAF8F3" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Benefits */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-navy mb-8">
                Por que escolher a ELLUM?
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Educação Cristã Clássica",
                    description:
                      "Método Trivium (Gramática, Lógica, Retórica) que desenvolve o pensamento crítico e a eloquência.",
                  },
                  {
                    title: "Formação Integral",
                    description:
                      "Cultivamos não apenas a mente, mas também o caráter, a virtude e o amor pelo belo.",
                  },
                  {
                    title: "Fundamentação Bíblica",
                    description:
                      "Toda a educação é centrada em Cristo e fundamentada nas Escrituras Sagradas.",
                  },
                  {
                    title: "Turmas Reduzidas",
                    description:
                      "Atenção individualizada para cada aluno, respeitando seu ritmo de aprendizado.",
                  },
                  {
                    title: "Parceria com a Família",
                    description:
                      "Trabalhamos junto com os pais na formação completa das crianças.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-gold"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-navy mb-1">
                        {item.title}
                      </h3>
                      <p className="text-ink-muted text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="mt-12 p-6 bg-parchment rounded-sm border-l-4 border-gold">
                <p className="font-serif text-lg text-navy italic mb-4">
                  &ldquo;A ELLUM transformou a forma como meu filho vê o aprendizado.
                  Ele agora ama estudar e questiona o mundo com sabedoria.&rdquo;
                </p>
                <p className="text-ink-muted text-sm">
                  — Mãe de aluno do Fundamental
                </p>
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
                    Preencha o formulário e nossa equipe entrará em contato.
                  </p>
                </div>

                <MatriculaForm
                  variant="editorial"
                  submitLabel="Quero garantir a vaga"
                  origem="site"
                />
              </div>

              {/* Trust badges */}
              <div className="mt-6 flex items-center justify-center gap-6 text-ink-muted text-xs">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Dados protegidos
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Resposta em 24h
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-parchment py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-navy mb-4">
              Venha nos conhecer
            </h2>
            <p className="text-ink-muted mb-2">
              Av. Pres. Costa e Silva, 1740 — São Pedro
            </p>
            <p className="text-ink-muted mb-8">
              Juiz de Fora, MG
            </p>
            <a
              href="https://wa.me/5532998374676"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-soft transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar pelo WhatsApp
            </a>
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
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} ELLUM Escola Cristã Clássica. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
