import Image from "next/image";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui";
import { MatriculaForm } from "@/components/forms";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero — full viewport, editorial image dominates */}
        <section className="relative min-h-[calc(100vh-68px)] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-parchment">
            <Image
              src="/images/hero-editorial.jpg"
              alt=""
              fill
              sizes="100vw"
              loading="eager"
              fetchPriority="high"
              className="object-cover object-center"
            />
            <div className="editorial-hero-veil absolute inset-0" />
          </div>

          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-6xl md:text-[80px] lg:text-[96px] font-serif text-navy leading-[0.95] tracking-tight mb-8">
                ELLUM
              </h1>
              <p className="text-2xl md:text-[28px] font-serif italic text-navy/80 leading-snug mb-4 max-w-lg">
                Formação integral para cultivar sabedoria, virtude e amor à verdade.
              </p>
              <p className="text-base text-ink-muted mb-10 max-w-md">
                Escola Cristã Clássica em Juiz de Fora, MG
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="#interesse" size="lg">
                  Conheça a proposta
                </Button>
                <Button href="/contato" variant="outline" size="lg">
                  Fale conosco
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Statement — navy block, centered, impactful */}
        <section className="bg-navy text-white py-28 md:py-36">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-serif leading-[1.1] mb-8 text-center">
                Toda educação forma alguém.
              </h2>
              <p className="text-xl md:text-2xl text-white/70 leading-relaxed text-center max-w-2xl mx-auto">
                Na ELLUM, Cristo é o centro do conhecimento, e a vida escolar é organizada
                para formar mente, corpo e caráter.
              </p>
            </div>
          </div>
        </section>

        {/* Pilares — asymmetric layout, not uniform cards */}
        <section className="bg-ivory py-24 md:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif text-navy mb-16 max-w-xl">
              Uma cultura escolar visível nos detalhes
            </h2>

            <div className="grid md:grid-cols-12 gap-y-16 md:gap-8">
              {/* Verdade */}
              <div className="md:col-span-4 md:col-start-1">
                <div className="border-t-2 border-gold pt-6">
                  <span className="font-serif text-5xl text-navy/20 leading-none block mb-4">I</span>
                  <h3 className="text-2xl font-serif text-navy mb-3">Verdade</h3>
                  <p className="text-ink-muted leading-relaxed">
                    Estudo orientado por uma visão cristã do mundo. Todo conhecimento verdadeiro aponta para Deus e sua criação.
                  </p>
                </div>
              </div>

              {/* Virtude */}
              <div className="md:col-span-4 md:col-start-5">
                <div className="border-t-2 border-gold pt-6">
                  <span className="font-serif text-5xl text-navy/20 leading-none block mb-4">II</span>
                  <h3 className="text-2xl font-serif text-navy mb-3">Virtude</h3>
                  <p className="text-ink-muted leading-relaxed">
                    Rotina, postura e disciplina a serviço do caráter. Formamos pessoas íntegras, não apenas competentes.
                  </p>
                </div>
              </div>

              {/* Beleza */}
              <div className="md:col-span-4 md:col-start-9">
                <div className="border-t-2 border-gold pt-6">
                  <span className="font-serif text-5xl text-navy/20 leading-none block mb-4">III</span>
                  <h3 className="text-2xl font-serif text-navy mb-3">Beleza</h3>
                  <p className="text-ink-muted leading-relaxed">
                    Ambiente, linguagem e hábitos que elevam o olhar. Cultivamos o que é bom, verdadeiro e belo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre — two column with strong visual */}
        <section className="relative overflow-hidden bg-parchment py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 -mx-4 lg:mx-0 lg:order-1 lg:min-h-[620px]">
                <div className="editorial-library relative h-[480px] sm:h-[600px] lg:absolute lg:inset-y-0 lg:left-0 lg:h-auto lg:w-[56%]">
                  <Image
                    src="/images/escola-ambiente.jpg"
                    alt="Imagem ilustrativa de alunos lendo em uma biblioteca clássica com estantes de madeira e poltronas de couro"
                    fill
                    sizes="(min-width: 1024px) 56vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Conteúdo */}
              <div className="relative order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl lg:text-[44px] font-serif text-navy leading-tight mb-8">
                  Uma escola comprometida com a formação integral
                </h2>
                <div className="space-y-6 text-ink-muted text-lg leading-relaxed">
                  <p>
                    Cooperamos com as famílias na formação integral de seus filhos, por meio de uma
                    educação genuinamente cristã que cultiva conhecimento, sabedoria, virtudes e competências.
                  </p>
                  <p>
                    Preparamos os alunos para viver sua vocação com fidelidade, servir ao próximo com
                    responsabilidade e glorificar a Deus em todas as áreas da vida.
                  </p>
                </div>
                <div className="mt-10">
                  <Button href="/sobre" variant="secondary">
                    Conheça nossa história
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metodologia — editorial approach */}
        <section className="bg-ivory py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Conteúdo */}
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-[44px] font-serif text-navy leading-tight mb-8">
                  O Trivium: educação que acompanha o desenvolvimento
                </h2>
                <div className="space-y-6 text-ink-muted text-lg leading-relaxed mb-10">
                  <p>
                    A Educação Clássica utiliza o método do Trivium, que aproveita as fases naturais
                    do desenvolvimento cognitivo da criança para maximizar o aprendizado.
                  </p>
                  <p>
                    Este método tem sido usado por séculos para formar grandes pensadores,
                    líderes e santos.
                  </p>
                </div>
                <Button href="/metodologia" variant="secondary">
                  Saiba mais sobre a metodologia
                </Button>
                <div className="editorial-portrait relative mt-10 aspect-[4/5] w-full">
                  <Image
                    src="/images/aluno-uniforme.jpg"
                    alt="Imagem ilustrativa de uma criança em uniforme azul-marinho e branco segurando um livro no corredor escolar"
                    fill
                    sizes="(min-width: 1180px) 558px, (min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Trivium visual */}
              <div className="bg-white rounded-sm border border-navy/10 p-10 md:p-12">
                <div className="space-y-10">
                  {[
                    {
                      num: "1",
                      name: "Gramática",
                      ages: "4–10 anos",
                      desc: "Fase de absorção: memorização e fundamentos"
                    },
                    {
                      num: "2",
                      name: "Lógica",
                      ages: "10–14 anos",
                      desc: "Fase de questionamento: análise e argumentação"
                    },
                    {
                      num: "3",
                      name: "Retórica",
                      ages: "14–18 anos",
                      desc: "Fase de expressão: comunicação e liderança"
                    },
                  ].map((phase, idx) => (
                    <div key={phase.num} className={`flex gap-6 ${idx !== 2 ? 'pb-10 border-b border-stone/50' : ''}`}>
                      <div className="w-14 h-14 bg-navy text-white rounded-full flex items-center justify-center font-serif text-2xl shrink-0">
                        {phase.num}
                      </div>
                      <div>
                        <div className="flex items-baseline gap-3 mb-1">
                          <h3 className="font-serif text-xl text-navy">{phase.name}</h3>
                          <span className="text-sm text-ink-muted">{phase.ages}</span>
                        </div>
                        <p className="text-ink-muted">{phase.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulário de Interesse */}
        <section className="bg-parchment py-24 md:py-32" id="interesse">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Texto */}
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-[44px] font-serif text-navy leading-tight mb-6">
                  Quer conhecer a ELLUM?
                </h2>
                <p className="text-lg text-ink-muted leading-relaxed mb-8">
                  Preencha o formulário e nossa equipe entrará em contato para agendar uma visita
                  e apresentar nossa proposta de educação cristã clássica.
                </p>
                <div className="space-y-4 text-ink-muted">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Visita guiada à escola</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Apresentação da metodologia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Conversa com a coordenação</span>
                  </div>
                </div>
              </div>

              {/* Formulário */}
              <div className="bg-white rounded-sm border border-navy/10 p-8 md:p-10">
                <MatriculaForm variant="editorial" submitLabel="Quero conhecer a ELLUM" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA — navy, strong */}
        <section className="bg-navy text-white py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
                Educação que forma para a vida.
              </h2>
              <p className="text-lg text-white/70 leading-relaxed max-w-xl mx-auto">
                Na ELLUM, cada detalhe é pensado para cultivar sabedoria, virtude e excelência.
              </p>
            </div>
          </div>
        </section>

        {/* Localização */}
        <section className="bg-ivory py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-navy leading-tight mb-8">
                  Venha nos visitar
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg text-navy font-medium">Endereço</p>
                      <p className="text-ink-muted">
                        Av. Pres. Costa e Silva, 1740<br />
                        São Pedro, Juiz de Fora — MG
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg text-navy font-medium">Horário</p>
                      <p className="text-ink-muted">Segunda a Sexta: 7h às 17h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="aspect-[4/3] bg-stone/30 rounded-sm border border-navy/5 flex items-center justify-center">
                <span className="text-ink-muted/60 text-sm font-medium">Google Maps aqui</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
