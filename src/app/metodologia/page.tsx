import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Section, SectionHeader } from "@/components/ui";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Metodologia | Ellum Escola Cristã Clássica",
  description: "Conheça o método do Trivium: Gramática, Lógica e Retórica. Educação Cristã Clássica em Juiz de Fora, MG.",
};

export default function MetodologiaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-navy text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-gold uppercase tracking-widest text-sm">
                Metodologia
              </span>
              <h1 className="text-4xl md:text-5xl font-serif mt-4">
                O Trivium: Gramática, Lógica e Retórica
              </h1>
            </div>
          </div>
        </section>

        {/* Introdução */}
        <Section>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-600 leading-relaxed">
              A Educação Clássica utiliza o método do <strong>Trivium</strong>, que
              aproveita as fases naturais do desenvolvimento cognitivo da criança
              para maximizar o aprendizado. Este método tem sido usado por séculos
              para formar grandes pensadores, líderes e santos.
            </p>
          </div>
        </Section>

        {/* As Três Fases */}
        <Section background="cream">
          <SectionHeader
            title="As Três Fases do Trivium"
            subtitle="Cada fase corresponde a uma etapa natural do desenvolvimento"
          />
          <div className="space-y-16">
            {[
              {
                phase: "1",
                name: "Gramática",
                ages: "4-10 anos",
                color: "bg-blue-100 text-blue-800",
                description:
                  "Nesta fase, as crianças têm uma capacidade natural de memorização. Aproveitamos isso para ensinar os 'blocos de construção' de cada disciplina: fatos, regras, vocabulário, datas, definições. É a fase de absorver informação.",
                skills: [
                  "Memorização de fatos e conceitos",
                  "Aprendizado de idiomas (Português, Inglês, Latim)",
                  "Fundamentos de Matemática",
                  "Memorização de Escrituras",
                  "História e Geografia factual",
                ],
              },
              {
                phase: "2",
                name: "Lógica",
                ages: "10-14 anos",
                color: "bg-amber-100 text-amber-800",
                description:
                  "Os pré-adolescentes começam a questionar e a querer entender o 'porquê' das coisas. Ensinamos raciocínio lógico, argumentação e análise crítica. É a fase de organizar e conectar a informação.",
                skills: [
                  "Lógica formal e informal",
                  "Análise de argumentos",
                  "Pensamento crítico",
                  "Debate estruturado",
                  "Álgebra e raciocínio matemático",
                ],
              },
              {
                phase: "3",
                name: "Retórica",
                ages: "14-18 anos",
                color: "bg-green-100 text-green-800",
                description:
                  "Os jovens desejam expressar suas opiniões e ideias. Ensinamos a arte da comunicação persuasiva, escrita eloquente e apresentação. É a fase de aplicar e comunicar o conhecimento.",
                skills: [
                  "Escrita persuasiva e eloquente",
                  "Oratória e apresentação",
                  "Defesa de teses e argumentos",
                  "Liderança e influência",
                  "Aplicação prática do conhecimento",
                ],
              },
            ].map((item) => (
              <div
                key={item.phase}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={item.phase === "2" ? "md:order-2" : ""}>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${item.color} mb-4`}>
                    Fase {item.phase} • {item.ages}
                  </span>
                  <h3 className="text-3xl font-serif text-navy mb-4">{item.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.skills.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-white p-12 rounded-lg shadow-sm ${item.phase === "2" ? "md:order-1" : ""}`}>
                  <div className="text-center">
                    <span className="text-8xl font-serif text-gold">{item.phase}</span>
                    <p className="text-2xl font-serif text-navy mt-4">{item.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Fundamento Cristão */}
        <Section>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-navy mb-6">
              Educação Fundamentada na Fé
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Na Ellum, a fé cristã não é apenas uma disciplina — ela permeia todo
              o currículo. Ensinamos cada matéria a partir de uma cosmovisão bíblica,
              mostrando aos alunos que toda verdade é verdade de Deus.
            </p>
            <blockquote className="text-xl italic text-gold border-l-4 border-gold pl-6 text-left">
              &ldquo;O temor do Senhor é o princípio da sabedoria, e o conhecimento do
              Santo é entendimento.&rdquo;
              <footer className="text-sm text-gray-500 mt-2 not-italic">
                — Provérbios 9:10
              </footer>
            </blockquote>
          </div>
        </Section>

        {/* CTA */}
        <Section background="navy">
          <div className="text-center">
            <h2 className="text-3xl font-serif mb-6">
              Quer saber mais sobre nossa metodologia?
            </h2>
            <Button href="/matriculas" size="lg">
              Agende uma Visita
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
