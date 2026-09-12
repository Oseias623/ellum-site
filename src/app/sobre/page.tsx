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
                "Toda instituição precisa saber duas coisas: por que faz o que faz, e para onde está caminhando."
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

        {/* Por que existimos */}
        <Section>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-gold uppercase tracking-[0.08em] text-xs font-semibold">
                Por que existimos
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-navy mt-4 mb-6">
                É por isso que existimos. É para isso que caminhamos.
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-ink-muted">
              <p className="leading-relaxed mb-6">
                Na ELLUM, essas respostas orientam cada decisão, cada relacionamento e cada prática pedagógica.
              </p>
              <p className="leading-relaxed mb-6">
                Nossa missão define o compromisso que assumimos diariamente diante de Deus e das famílias
                que caminham conosco. Ela expressa aquilo que buscamos construir na vida de cada aluno,
                formando pessoas que unam conhecimento, sabedoria, virtude e fé.
              </p>
              <p className="leading-relaxed mb-6">
                Nossa visão amplia esse horizonte. Ela revela o futuro que desejamos ajudar a construir:
                uma geração de homens e mulheres firmes em sua fé, maduros em caráter, preparados para
                servir à igreja, fortalecer suas famílias, exercer sua vocação com excelência e glorificar
                a Deus em todas as áreas da vida.
              </p>
              <p className="leading-relaxed">
                Não medimos nosso sucesso apenas pelos resultados acadêmicos ou pelo crescimento da escola.
                Nossa maior esperança é que, ao longo das próximas décadas, possamos ver os frutos de uma
                educação fiel florescendo em lares, igrejas, profissões e comunidades, contribuindo para
                o fortalecimento da cultura e para o avanço do Reino de Deus.
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
