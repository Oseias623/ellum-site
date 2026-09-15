import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Diferenciais | ELLUM Escola Cristã Clássica",
  description:
    "Conheça os diferenciais da ELLUM: educação cristocêntrica, método fônico, programa bilíngue, línguas clássicas, belas artes, música e xadrez.",
};

const diferenciais = [
  {
    title: "Educação Cristocêntrica e Logocêntrica",
    text: "Cristo é o centro de todo conhecimento, e a Palavra orienta a formação da mente, do caráter e dos afetos.",
  },
  {
    title: "Método fônico de alfabetização",
    text: "A alfabetização parte da relação entre sons e letras, fortalecendo leitura, escrita e compreensão desde os primeiros anos.",
  },
  {
    title: "Programa Bilíngue",
    text: "Todos os dias, durante uma hora, as crianças serão expostas ao currículo escolar também na língua inglesa. O programa já está incluso no serviço educacional.",
  },
  {
    title: "Línguas Clássicas: latim e grego",
    text: "O contato com as línguas clássicas fortalece a linguagem, amplia repertório cultural e desenvolve raciocínio analítico.",
  },
  {
    title: "Grandes Livros",
    text: "Os alunos são apresentados a obras que atravessaram o tempo e carregam perguntas, ideias e virtudes permanentes.",
  },
  {
    title: "Belas Artes",
    text: "A contemplação e a prática artística cultivam sensibilidade, atenção, ordem e amor ao que é verdadeiro, bom e belo.",
  },
  {
    title: "Flauta e Piano",
    text: "A educação musical contribui para a formação do coração, da imaginação moral e da disciplina interior da criança.",
  },
  {
    title: "Projeto Autoeducação",
    text: "Para respeitar o interesse individual e incentivar a busca pelo conhecimento, promoveremos projetos autodidatas desenvolvidos e apresentados em sala de aula com a participação da família.",
  },
  {
    title: "Disciplina de Lógica Tradicional",
    text: "A lógica ajuda o aluno a ordenar o pensamento, reconhecer argumentos e buscar a verdade com clareza.",
  },
  {
    title: "Xadrez",
    text: "O xadrez exercita concentração, prudência, estratégia e tomada de decisão.",
  },
];

const extracurriculares = ["Jiu-Jitsu", "Ballet"];

export default function DiferenciaisPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-navy text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-serif leading-tight">
                Diferenciais
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Uma cultura escolar pensada para formar a criança por inteiro:
                inteligência, caráter, afetos, linguagem, corpo e imaginação.
              </p>
            </div>
          </div>
        </section>

        <Section>
          <div className="grid gap-6 md:grid-cols-2">
            {diferenciais.map((item) => (
              <article key={item.title} className="border-t border-gold bg-white p-7">
                <h2 className="font-serif text-2xl leading-tight text-navy">
                  {item.title}
                </h2>
                <p className="mt-4 leading-relaxed text-ink-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section background="parchment">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-navy leading-tight">
                Extracurriculares
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                Atividades complementares ampliam a formação da criança e colaboram
                para disciplina, coordenação, perseverança e beleza no movimento.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {extracurriculares.map((item) => (
                <div key={item} className="bg-white p-8 border border-navy/10">
                  <h3 className="font-serif text-3xl text-navy">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
