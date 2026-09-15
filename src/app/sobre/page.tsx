import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Section, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Sobre | ELLUM Escola Cristã Clássica",
  description: "Conheça a história, missão e valores da ELLUM Escola Cristã Clássica em Juiz de Fora, MG.",
};

export default function SobrePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-navy text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-gold uppercase tracking-[0.08em] text-xs font-semibold">
                Sobre Nós
              </span>
              <h1 className="text-4xl md:text-5xl font-serif mt-4 leading-tight">
                Nossa História e Missão
              </h1>
            </div>
          </div>
        </section>

        {/* Missão e Visão */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xl md:text-2xl text-ink-muted leading-relaxed font-serif italic">
                &ldquo;Toda instituição precisa saber duas coisas: por que faz o que faz, e para onde está caminhando.&rdquo;
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Missão */}
              <div className="bg-parchment p-8 md:p-10 rounded-lg">
                <div className="w-12 h-[2px] bg-gold mb-6" />
                <h2 className="text-2xl font-serif text-navy mb-4">Nossa Missão</h2>
                <p className="text-ink-muted leading-relaxed">
                  Cooperar com as famílias na formação integral de seus filhos, por meio de uma educação
                  genuinamente cristã que cultiva conhecimento, sabedoria, virtudes e competências,
                  preparando-os para viver sua vocação com fidelidade, servir ao próximo com
                  responsabilidade e glorificar a Deus em todas as áreas da vida.
                </p>
              </div>

              {/* Visão */}
              <div className="bg-parchment p-8 md:p-10 rounded-lg">
                <div className="w-12 h-[2px] bg-gold mb-6" />
                <h2 className="text-2xl font-serif text-navy mb-4">Nossa Visão</h2>
                <p className="text-ink-muted leading-relaxed">
                  Ser uma instituição de referência em Educação Cristã, formando uma geração de homens e
                  mulheres que vivam no temor do Senhor, glorifiquem a Deus em todas as áreas da vida e
                  sirvam com fidelidade em suas famílias, vocações e comunidades, promovendo o bem
                  comum e a glória de Cristo.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Statement */}
        <section className="bg-navy text-white py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
                Toda educação forma alguém.
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Na ELLUM, Cristo é o centro do conhecimento, e a vida escolar é organizada
                para formar mente, corpo e caráter.
              </p>
            </div>
          </div>
        </section>

        {/* Pilares */}
        <Section background="cream">
          <SectionHeader
            title="Uma cultura escolar visível nos detalhes"
            subtitle="Nossos pilares fundamentais"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Verdade",
                description: "Estudo orientado por uma visão cristã do mundo. Todo conhecimento aponta para Deus.",
              },
              {
                title: "Virtude",
                description: "Rotina, postura e disciplina a serviço do caráter. Formamos pessoas íntegras.",
              },
              {
                title: "Beleza",
                description: "Ambiente, linguagem e hábitos que elevam o olhar. Cultivamos o que é bom e belo.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-navy/10"
              >
                <div className="w-12 h-[2px] bg-gold mb-6" />
                <h3 className="text-xl font-serif text-navy mb-3">{item.title}</h3>
                <p className="text-ink-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Nossa História */}
        <Section>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-gold uppercase tracking-[0.08em] text-xs font-semibold">
                Nossa História
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-navy mt-4 mb-6">
                Sejam bem-vindos à Ellum Escola Cristã Clássica!
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-ink-muted">
              <p className="leading-relaxed mb-6">
                Nascemos como fruto do profundo senso de dever e responsabilidade diante de
                Deus e das próximas gerações, incluindo nossos próprios filhos. Somos uma
                comunidade de famílias e educadores que desejam avançar o Reino de Deus,
                movidos por um senso de urgência pela presença fiel de cristãos no contexto
                educacional da cidade de Juiz de Fora.
              </p>
              <p className="leading-relaxed mb-6">
                Nossa crença central reside na Soberania de Deus sobre todas as áreas da vida.
                Não há divisão entre &ldquo;mundo cristão&rdquo; e &ldquo;mundo secular&rdquo;. Há
                somente um mundo, o mundo que Deus fez. Como afirmou Abraham Kuyper, um dos
                primeiros-ministros da Holanda e fundador da Universidade Livre de Amsterdã,
                Deus olha para toda a criação e declara que não há nada, nem mesmo do tamanho
                de um átomo, que não seja Dele.
              </p>
              <p className="leading-relaxed">
                Certamente, não há nada no mundo físico, no mundo espiritual, na história, na
                ciência ou na ortografia; nem na literatura, na arte ou na matemática; nem em
                governos, culturas ou sociedades. É tudo Dele.
              </p>
            </div>
          </div>
        </Section>

        {/* Equipe */}
        <Section background="cream">
          <SectionHeader
            title="Nossa Equipe"
            subtitle="Educadores comprometidos com a excelência"
          />
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 mx-auto bg-parchment rounded-full mb-4 flex items-center justify-center border border-navy/10">
                  <span className="text-4xl text-gold">👤</span>
                </div>
                <h4 className="font-serif text-lg text-navy">Nome do Professor</h4>
                <p className="text-sm text-ink-muted">Área de atuação</p>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
