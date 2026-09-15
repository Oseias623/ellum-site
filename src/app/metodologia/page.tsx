import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Educação Cristã Clássica | ELLUM Escola Cristã Clássica",
  description:
    "Conheça os fundamentos da Educação Cristã Clássica: piedade, artes liberais, Trivium, Quadrivium, ciências, música, ginástica, grandes livros, latim e grego.",
};

const foundations = [
  {
    title: "Piedade: Justos Amores, Justos Temores",
    text: "Apesar de ser praticamente uma palavra perdida na nossa cultura contemporânea, piedade significa dever, amor e respeito devido a Deus, aos pais e às autoridades. Se os alunos não internalizarem um respeito fundamental para com Deus, para com seus pais e para com seus professores, todo o processo de educação colapsa.",
  },
  {
    title: "Artes Liberais",
    text: "As artes liberais são as sete habilidades usadas para criar e justificar a scientia, constituindo-se das artes do trívium e das artes do quadrívium. Elas fornecem caminhos para encontrar a realidade e formar na alma a virtude intelectual necessária para adquirir verdadeira sabedoria.",
  },
  {
    title: "Trivium",
    text: "São as três artes da linguagem: gramática, dialética e retórica. Elas ensinam leitura, escrita, hermenêutica, debate e discurso argumentativo. A gramática fortalece os fundamentos da linguagem; a dialética persegue questões e encontra argumentos; a retórica usa a linguagem de forma criativa, persuasiva e produtiva.",
  },
  {
    title: "Quadrivium",
    text: "São as artes da matemática: aritmética, geometria, música e astronomia. Elas ensinam a contar, calcular, medir, observar e provar teoricamente, ajudando o aluno a perceber a ordem da criação.",
  },
  {
    title: "Ciências",
    text: "Uma vez dominadas as Sete Artes Liberais, o aluno ascende pelas ciências naturais, pelas ciências humanas e pelas ciências filosóficas e teológicas.",
  },
  {
    title: "Educação Musical",
    text: "As músicas que cantamos, as histórias que lemos e a arte que fazemos e admiramos forjam a alma. O treinamento musical, através das canções, flauta e piano, é voltado para a formação do coração e da imaginação moral da criança.",
  },
  {
    title: "Ginástica",
    text: "Treinar o corpo para o bem da alma. A ginástica é mais do que mera educação física, pois compreende o uso correto do corpo como essencial para a vida moral e espiritual. A disciplina física produz autocontrole, perseverança, paciência e coragem.",
  },
  {
    title: "Belas Artes",
    text: "As belas artes educam o olhar, refinam a atenção e ajudam a criança a reconhecer e amar aquilo que é verdadeiro, bom e belo.",
  },
  {
    title: "Grandes Livros",
    text: "Devemos ler coisas antigas que transcenderam o tempo e florescem ao longo do tempo. Oferecemos aos alunos realidades duradouras, e não aquelas que são devoradas pelo tempo.",
  },
  {
    title: "Latim e Grego",
    text: "O estudo das línguas clássicas auxilia o desenvolvimento linguístico, aguça habilidades de raciocínio analítico e abre portas para uma herança intelectual que marcou a formação do Ocidente.",
  },
];

const principles = [
  ["Festina Lente", "Apressar lentamente. Ensinamos visando o domínio: cada passo deve ser dominado antes que os alunos prossigam."],
  ["Multum non Multa", "Muito, não muitas coisas. É melhor dominar poucas coisas do que cobrir superficialmente um conteúdo que será esquecido."],
  ["Repetitio Mater Memoriae", "A repetição é a mãe da memória. A revisão vibrante e significativa torna o aprendizado permanente."],
  ["Música, Rimas, Recitação e Cantigas", "Cantamos quando amamos; e lembramos do que amamos e cantamos."],
  ["Maravilhamento e Curiosidade", "O deslumbramento desperta amor e estudo. Quando um aluno se encanta com algo verdadeiro, bom e belo, nasce o desejo sincero de conhecer."],
  ["Scholé e a Contemplação", "Scholé ordena tempo e espaço para pensamento profundo, estudo prazeroso e contemplação das verdades que estão sendo reveladas."],
  ["Educação Incorporada e Litúrgica", "Ritmos, práticas, liturgias e rotinas corporais cultivam o desejo dos alunos de viver em harmonia com a beleza do mundo."],
  ["Docendo Discimus", "Ao ensinar, aprendemos. Quando os alunos ensinam, a aprendizagem se multiplica e o conhecimento é aprendido duas vezes."],
  ["Optimus Magister Bonus Liber Est", "O melhor professor é um bom livro. Os grandes autores continuam chamando, inspirando e ensinando com paciência."],
  ["Conversa", "Aprendemos em comunidade, com simpatia e companheirismo. A conversa contínua cria amizade da alma e aprendizado profundo."],
];

export default function MetodologiaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-navy text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                Educação Cristã Clássica
              </h1>
              <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-white/70">
                Uma educação que ordena os amores, cultiva virtudes intelectuais e
                forma a pessoa inteira diante de Deus.
              </p>
            </div>
          </div>
        </section>

        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-navy leading-tight">
                As artes que educam para uma vida livre
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted">
                A tradição clássica entende que educar é mais do que transmitir
                conteúdos. É formar a alma para amar o que deve ser amado, temer o
                que deve ser temido e buscar a sabedoria com reverência.
              </p>
            </div>
            <div className="grid gap-5">
              {foundations.map((item) => (
                <article key={item.title} className="border-t border-gold bg-white p-6">
                  <h3 className="font-serif text-2xl text-navy">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-ink-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section background="parchment">
          <div className="mb-12 max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl text-navy leading-tight">
              Princípios Pedagógicos da Educação Clássica
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Esses princípios dão ritmo, profundidade e forma ao cotidiano escolar.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {principles.map(([title, text]) => (
              <article key={title} className="bg-white p-7 border border-navy/10">
                <h3 className="font-serif text-2xl text-navy">{title}</h3>
                <p className="mt-4 leading-relaxed text-ink-muted">{text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section background="navy">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Quer conhecer nossa proposta pedagógica?
            </h2>
            <p className="mb-8 text-white/70 leading-relaxed">
              Agende uma visita e converse com nossa equipe sobre a formação que a
              ELLUM deseja oferecer às famílias de Juiz de Fora.
            </p>
            <Button href="/#interesse" size="lg">
              Agende uma visita
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
