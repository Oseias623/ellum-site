import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SimposioForm } from "@/components/forms";

export const metadata: Metadata = {
  title: "Inscrição | Simpósio de Educação Cristã Clássica",
  description:
    "Garanta sua inscrição no Simpósio de Educação Cristã Clássica: A Paideia de Deus, em Juiz de Fora, MG.",
};

const conversations = [
  {
    title: "O mito da neutralidade pedagógica",
    text: "Toda educação parte de pressupostos sobre o homem, a verdade, o conhecimento e o propósito da vida.",
  },
  {
    title: "Educação cristã clássica e educação moderna",
    text: "Diferentes maneiras de educar nascem de diferentes compreensões sobre a finalidade da educação.",
  },
  {
    title: "A Paideia de Deus",
    text: "Uma educação que busca formar inteligência, caráter, afetos e virtudes sob o senhorio de Cristo.",
  },
];

const audiences = [
  ["Pais e famílias", "Que desejam compreender mais profundamente a educação de seus filhos."],
  ["Educadores", "Que desejam pensar sua vocação a partir de uma cosmovisão verdadeiramente cristã."],
  ["Pastores e líderes", "Que reconhecem a importância da formação das próximas gerações para a Igreja."],
  ["Comunidade cristã", "Que deseja compreender os fundamentos da Educação Cristã Clássica."],
];

const schedule = [
  {
    day: "9 de outubro",
    items: ["Recepção e abertura", "Palestra", "Apresentação da ELLUM", "Encerramento"],
  },
  {
    day: "10 de outubro",
    items: ["Recepção", "Palestras", "Intervalos", "Perguntas e interação", "Encerramento"],
  },
];

const faqs = [
  "Onde acontecerá o simpósio?",
  "Quais serão os horários?",
  "Quem pode participar?",
  "Posso participar mesmo não sendo educador?",
  "Haverá certificado?",
  "A inscrição contempla os dois dias?",
  "Crianças poderão participar?",
  "Como funciona cancelamento ou transferência da inscrição?",
  "Onde posso tirar outras dúvidas?",
];

function CtaButton({ children = "Quero participar do simpósio" }: { children?: string }) {
  return (
    <Link
      href="#inscricao"
      className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-navy transition-colors hover:bg-gold-soft"
    >
      {children}
    </Link>
  );
}

export default function SimposioVendasPage() {
  return (
    <main className="min-h-screen bg-ivory text-ink">
      <section className="relative min-h-screen overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='84' height='84' viewBox='0 0 84 84' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C4965F' stroke-opacity='1'%3E%3Cpath d='M42 8v68M8 42h68M22 22l40 40M62 22L22 62' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
          <header className="flex items-center justify-between gap-6">
            <Image
              src="/images/logo-gold.png"
              alt="ELLUM"
              width={180}
              height={128}
              priority
              quality={100}
              className="h-auto w-28 sm:w-36"
            />
            <Link
              href="/simposio"
              className="hidden text-sm font-medium text-white/70 transition-colors hover:text-gold sm:inline"
            >
              Ver página do evento
            </Link>
          </header>

          <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-gold">
                Juiz de Fora | 9 e 10 de outubro
              </p>
              <h1 className="max-w-4xl font-serif text-5xl leading-[0.96] md:text-7xl lg:text-[88px]">
                Simpósio de Educação Cristã Clássica
              </h1>
              <p className="mt-8 max-w-2xl font-serif text-2xl italic leading-snug text-gold md:text-3xl">
                A Paideia de Deus
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/72 md:text-xl">
                Uma educação integral, centrada em Cristo e fundamentada na Palavra.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <CtaButton />
                <p className="max-w-xs text-sm leading-relaxed text-white/55">
                  Realização: ELLUM — Escola Cristã Clássica.
                </p>
              </div>
            </div>

            <div className="border border-gold/25 bg-white/[0.04] p-6">
              <p className="font-serif text-3xl leading-tight text-white">
                Nossos filhos serão formados.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-white/68">
                A questão é: por quem, segundo qual visão de mundo e para qual propósito?
              </p>
              <div className="mt-8 grid gap-3 text-sm text-white/62">
                <div className="border-t border-gold/20 pt-4">Dois dias de reflexão</div>
                <div className="border-t border-gold/20 pt-4">Para pais, educadores e líderes cristãos</div>
                <div className="border-t border-gold/20 pt-4">Com Pr. Rodrigo Brotto</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-parchment py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <h2 className="font-serif text-4xl leading-tight text-navy md:text-5xl">
              Educar nunca foi apenas transmitir conhecimento. É formar uma pessoa.
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-ink-muted">
              <p>
                Vivemos um tempo em que famílias, educadores e igrejas precisam recuperar uma
                pergunta fundamental: que tipo de pessoa estamos formando — e segundo qual visão
                de mundo?
              </p>
              <p>
                O Simpósio de Educação Cristã Clássica nasce como um chamado à reflexão e à
                responsabilidade sobre a formação das próximas gerações.
              </p>
              <p>
                Queremos apresentar a proposta da paideia: uma educação que considera o ser
                humano por inteiro e busca formar mente, caráter e afetos sob o senhorio de Cristo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-2xl font-serif text-4xl leading-tight text-navy md:text-5xl">
              Três conversas que ajudam a recolocar a educação no centro da vocação cristã.
            </h2>
            <CtaButton>Garantir minha inscrição</CtaButton>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {conversations.map((item) => (
              <article key={item.title} className="border-t-2 border-gold bg-white p-7">
                <h3 className="font-serif text-2xl leading-tight text-navy">{item.title}</h3>
                <p className="mt-5 text-ink-muted leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-soft py-24 text-white md:py-32">
        <div className="container mx-auto px-6">
          <h2 className="mx-auto max-w-4xl text-center font-serif text-4xl leading-tight md:text-5xl">
            Uma conversa para aqueles que carregam a responsabilidade de formar a próxima geração.
          </h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map(([title, text]) => (
              <div key={title} className="border border-gold/20 p-6">
                <h3 className="font-serif text-2xl text-gold">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-parchment py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative aspect-[4/5] overflow-hidden bg-navy">
              <Image
                src="/images/escola-ambiente.jpg"
                alt="Ambiente clássico de estudo representando formação cristã clássica"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover opacity-45"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                <div>
                  <p className="font-serif text-4xl text-gold">Pr. Rodrigo Brotto</p>
                  <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/60">
                    Foto oficial em breve
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-gold">
                Palestrante
              </p>
              <h2 className="font-serif text-4xl leading-tight text-navy md:text-5xl">
                Pr. Rodrigo Brotto
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-ink-muted">
                Presidente da Associação de Escolas Cristãs Clássicas no Brasil e uma das
                referências brasileiras no movimento de Educação Cristã Clássica.
              </p>
              <p className="mt-5 text-ink-muted leading-relaxed">
                A bio oficial curta será inserida assim que recebida, preservando precisão sobre
                atuação, experiência, instituições e projetos relevantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="font-serif text-4xl leading-tight text-navy md:text-5xl">
              Dois dias para pensar profundamente a educação das próximas gerações.
            </h2>
            <p className="mt-5 text-ink-muted">
              Horários detalhados serão atualizados quando a programação estiver fechada.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {schedule.map((day) => (
              <div key={day.day} className="border border-navy/10 bg-white p-8">
                <h3 className="font-serif text-3xl text-navy">{day.day}</h3>
                <div className="mt-7 space-y-4">
                  {day.items.map((item) => (
                    <div key={item} className="flex items-center justify-between border-b border-stone/60 pb-4">
                      <span className="text-ink-muted">{item}</span>
                      <span className="text-sm text-gold">Horário em breve</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-24 text-white md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mx-auto max-w-4xl font-serif text-5xl leading-tight md:text-6xl">
            Nossos filhos serão formados.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/70">
            A questão é: por quem, segundo qual visão de mundo e para qual propósito?
          </p>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/62">
            O simpósio é um convite para recuperarmos juntos uma visão de educação na qual Cristo
            não ocupa apenas uma parte do currículo, mas o centro a partir do qual toda a realidade
            é compreendida.
          </p>
          <div className="mt-10">
            <CtaButton>Quero participar</CtaButton>
          </div>
        </div>
      </section>

      <section className="bg-parchment py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="font-serif text-4xl leading-tight text-navy md:text-5xl">
                Uma nova Escola Cristã Clássica em Juiz de Fora.
              </h2>
              <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink-muted">
                <p>
                  A ELLUM — Escola Cristã Clássica iniciará suas atividades em 2027, atendendo
                  inicialmente da Educação Infantil ao 3º ano do Ensino Fundamental.
                </p>
                <p>
                  Nascemos com o propósito de servir às famílias por meio de uma educação de
                  verdadeira excelência, comprometida com a formação intelectual, moral e espiritual.
                </p>
                <p className="font-serif text-2xl text-navy">Cristo é o centro de todo conhecimento.</p>
              </div>
              <div className="mt-9">
                <Link
                  href="/"
                  className="inline-flex rounded-full border border-gold px-7 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold"
                >
                  Conheça a ELLUM
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/aluno-uniforme.jpg"
                alt="Aluno em ambiente escolar clássico"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="inscricao" className="bg-navy-soft py-24 text-white md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-gold">
                Inscrição
              </p>
              <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                Garanta sua inscrição no Simpósio de Educação Cristã Clássica.
              </h2>
              <div className="mt-8 space-y-4 text-white/68">
                <p>A Paideia de Deus</p>
                <p>9 e 10 de outubro | Juiz de Fora — MG</p>
                <p>Preço e condições serão informados assim que as inscrições forem abertas.</p>
              </div>
            </div>
            <div className="border border-gold/20 bg-white/5 p-8">
              <SimposioForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 font-serif text-4xl leading-tight text-navy md:text-5xl">
            Perguntas frequentes
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map((question) => (
              <div key={question} className="border-b border-stone pb-5">
                <h3 className="font-serif text-xl text-navy">{question}</h3>
                <p className="mt-2 text-sm text-ink-muted">Resposta em breve.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-navy py-12 text-white">
        <div className="container mx-auto flex flex-col items-center px-6 text-center">
          <Image
            src="/images/logo-gold.png"
            alt="ELLUM"
            width={120}
            height={85}
            className="h-auto w-24"
          />
          <p className="mt-6 text-gold">9 e 10 de outubro | Juiz de Fora — MG</p>
          <p className="mt-3 text-sm text-white/45">Realização: ELLUM — Escola Cristã Clássica</p>
        </div>
      </footer>
    </main>
  );
}
