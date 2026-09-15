import Image from "next/image";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui";
import { MatriculaForm } from "@/components/forms";

const diferenciais = [
  "Educação Cristocêntrica e Logocêntrica",
  "Método fônico de alfabetização",
  "Programa Bilíngue diário incluso",
  "Línguas Clássicas: latim e grego",
  "Grandes Livros",
  "Belas Artes",
  "Flauta e Piano",
  "Projeto Autoeducação",
  "Disciplina de Lógica Tradicional",
  "Xadrez",
];

const extracurriculares = [
  {
    title: "Jiu-Jitsu",
    text: "Disciplina, domínio próprio, respeito e perseverança no cuidado do corpo.",
    image: "/images/jiu-jitsu-editorial.webp",
    alt: "Criança praticando Jiu-Jitsu em ambiente escolar clássico",
  },
  {
    title: "Ballet",
    text: "Postura, graça, coordenação e beleza no movimento como parte da formação integral.",
    image: "/images/ballet-editorial.webp",
    alt: "Criança praticando ballet em estúdio clássico",
  },
];

const classicalFoundations = [
  ["Piedade", "Justos amores, justos temores: dever, amor e respeito devido a Deus, aos pais e às autoridades."],
  ["Artes Liberais", "As artes do Trivium e do Quadrivium formam virtudes intelectuais para buscar a sabedoria."],
  ["Trivium", "Gramática, dialética e retórica educam linguagem, leitura, escrita, debate e expressão pública."],
  ["Quadrivium", "Aritmética, geometria, música e astronomia revelam ordem, medida e harmonia na criação."],
  ["Educação Musical", "Canções, flauta e piano colaboram na formação do coração e da imaginação moral."],
  ["Grandes Livros", "Obras antigas e duradouras oferecem aos alunos realidades que resistiram ao tempo."],
];

const pedagogicalPrinciples = [
  "Festina Lente",
  "Multum non Multa",
  "Repetitio Mater Memoriae",
  "Música, Rimas, Recitação e Cantigas",
  "Maravilhamento e Curiosidade",
  "Scholé e a Contemplação",
  "Educação Incorporada e Litúrgica",
  "Docendo Discimus",
  "Optimus Magister Bonus Liber Est",
  "Conversa",
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero — full viewport, editorial image dominates */}
        <section className="relative min-h-[calc(100vh-96px)] flex items-center overflow-hidden">
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
                Servindo as famílias de Juiz de Fora com uma educação cristã clássica centrada em Cristo.
              </p>
              <p className="text-base text-ink-muted mb-10 max-w-md">
                Educação Infantil ao 3º ano do Ensino Fundamental | 2027
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="#quem-somos" size="lg">
                  Conheça a ELLUM
                </Button>
                <Button href="#admissoes" variant="outline" size="lg">
                  Agende uma visita
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
        <section id="quem-somos" className="relative overflow-hidden bg-parchment py-16 md:py-24 lg:py-32 scroll-mt-24">
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
                <div className="mt-10 border-t border-gold/40 pt-8">
                  <h3 className="mb-4 font-serif text-2xl text-navy">Nossa História</h3>
                  <div className="space-y-5 text-ink-muted leading-relaxed">
                    <p>
                      Sejam bem-vindos à Ellum Escola Cristã Clássica. Nascemos como fruto
                      do profundo senso de dever e responsabilidade diante de Deus e das
                      próximas gerações, incluindo nossos próprios filhos.
                    </p>
                    <p>
                      Somos uma comunidade de famílias e educadores que desejam avançar o
                      Reino de Deus, movidos por um senso de urgência pela presença fiel de
                      cristãos no contexto educacional da cidade de Juiz de Fora.
                    </p>
                    <p>
                      Nossa crença central reside na Soberania de Deus sobre todas as áreas
                      da vida. Não há divisão entre &ldquo;mundo cristão&rdquo; e
                      &ldquo;mundo secular&rdquo;. Há somente um mundo, o mundo que Deus fez.
                      É tudo Dele.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metodologia — editorial approach */}
        <section id="educacao-crista-classica" className="bg-ivory py-24 md:py-32 scroll-mt-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Conteúdo */}
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-[44px] font-serif text-navy leading-tight mb-8">
                  Educação Cristã Clássica
                </h2>
                <div className="space-y-6 text-ink-muted text-lg leading-relaxed mb-10">
                  <p>
                    A Educação Cristã Clássica ordena os amores, cultiva virtudes
                    intelectuais e forma a pessoa inteira diante de Deus.
                  </p>
                  <p>
                    As artes liberais, o Trivium, o Quadrivium, a música, a ginástica,
                    as belas artes, os grandes livros, o latim e o grego compõem uma
                    formação que busca sabedoria, não apenas desempenho.
                  </p>
                </div>
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

              {/* Fundamentos */}
              <div className="bg-white rounded-sm border border-navy/10 p-10 md:p-12">
                <div className="space-y-8">
                  {classicalFoundations.map(([title, text]) => (
                    <div key={title} className="border-b border-stone/50 pb-7 last:border-b-0 last:pb-0">
                      <h3 className="font-serif text-2xl text-navy">{title}</h3>
                      <p className="mt-3 text-ink-muted leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 border-t border-gold/40 pt-10">
              <h3 className="mb-8 font-serif text-3xl text-navy">
                Princípios Pedagógicos da Educação Clássica
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {pedagogicalPrinciples.map((principle) => (
                  <div key={principle} className="bg-parchment px-5 py-4 text-sm font-medium text-navy">
                    {principle}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="diferenciais" className="bg-parchment py-24 md:py-32 scroll-mt-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-[44px] font-serif text-navy leading-tight mb-6">
                  Diferenciais
                </h2>
                <p className="text-lg leading-relaxed text-ink-muted">
                  Uma cultura escolar pensada para formar a criança por inteiro:
                  inteligência, caráter, afetos, linguagem, corpo e imaginação.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {diferenciais.map((item) => (
                  <div key={item} className="border-t border-gold bg-white p-5">
                    <p className="font-serif text-xl leading-tight text-navy">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {extracurriculares.map((item) => (
                <article key={item.title} className="overflow-hidden bg-white">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="border-t border-gold p-7">
                    <h3 className="font-serif text-3xl text-navy">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-ink-muted">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="simposio" className="bg-navy-soft py-24 text-white md:py-32 scroll-mt-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-[44px] font-serif leading-tight mb-6">
                  I Simpósio de ECC de JF
                </h2>
                <p className="font-serif text-2xl italic text-gold mb-6">
                  A Paideia de Deus
                </p>
                <p className="max-w-2xl text-lg leading-relaxed text-white/70">
                  Dois dias de reflexão para famílias, educadores e líderes cristãos
                  sobre uma educação integral, centrada em Cristo e fundamentada na Palavra.
                </p>
              </div>
              <div className="border border-gold/20 p-8">
                <p className="text-gold">9 e 10 de outubro | Juiz de Fora — MG</p>
                <p className="mt-5 text-white/65">
                  A página de captura do simpósio reúne programação, inscrição e detalhes do evento.
                </p>
                <div className="mt-8">
                  <Button href="/simposio" size="lg" className="bg-gold text-navy hover:bg-gold-soft">
                    Ir para inscrição
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulário de Interesse */}
        <section className="bg-parchment py-24 md:py-32 scroll-mt-24" id="admissoes">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Texto */}
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-[44px] font-serif text-navy leading-tight mb-6">
                  Quer conhecer a ELLUM?
                </h2>
                <p className="text-lg text-ink-muted leading-relaxed mb-8">
                  Preencha o formulário e nossa equipe entrará em contato para agendar uma visita
                  e apresentar nossa proposta pedagógica.
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
        <section id="contato" className="bg-ivory py-24 md:py-32 scroll-mt-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-navy leading-tight mb-8">
                  NO CORAÇÃO DA CIDADE ALTA
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
