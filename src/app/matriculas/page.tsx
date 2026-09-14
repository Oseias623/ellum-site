import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Section, SectionHeader } from "@/components/ui";
import { MatriculaForm } from "@/components/forms";

export const metadata: Metadata = {
  title: "Matrículas | Ellum Escola Cristã Clássica",
  description: "Agende uma visita e conheça a Ellum Escola Cristã Clássica. Matrículas abertas em Juiz de Fora, MG.",
};

export default function MatriculasPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-navy text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-gold uppercase tracking-widest text-sm">
                Matrículas
              </span>
              <h1 className="text-4xl md:text-5xl font-serif mt-4">
                Faça parte da família Ellum
              </h1>
              <p className="text-xl text-gray-300 mt-6">
                Agende uma visita e conheça de perto nossa escola, metodologia e equipe.
              </p>
            </div>
          </div>
        </section>

        {/* Processo de Matrícula */}
        <Section>
          <SectionHeader
            title="Processo de Matrícula"
            subtitle="Passos simples para fazer parte da nossa comunidade"
          />
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Agende uma Visita",
                description: "Entre em contato para agendar uma visita à escola.",
              },
              {
                step: "2",
                title: "Conheça a Escola",
                description: "Venha conhecer nossa estrutura, metodologia e equipe.",
              },
              {
                step: "3",
                title: "Entrevista",
                description: "Conversa com a coordenação para alinhamento de valores.",
              },
              {
                step: "4",
                title: "Matrícula",
                description: "Documentação e formalização da matrícula.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 mx-auto bg-gold text-navy rounded-full flex items-center justify-center text-2xl font-serif mb-4">
                  {item.step}
                </div>
                <h3 className="font-serif text-xl text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Formulário de Contato */}
        <Section background="cream">
          <div className="max-w-2xl mx-auto">
            <SectionHeader
              title="Agende sua Visita"
              subtitle="Preencha o formulário e entraremos em contato"
            />
            <MatriculaForm />
          </div>
        </Section>

        {/* FAQ */}
        <Section>
          <SectionHeader
            title="Perguntas Frequentes"
            subtitle="Dúvidas comuns sobre matrículas"
          />
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Qual a faixa etária atendida?",
                answer: "Atendemos da Educação Infantil (a partir de 4 anos) ao Ensino Fundamental.",
              },
              {
                question: "A escola é confessional?",
                answer: "Sim, somos uma escola cristã que ensina a partir de uma cosmovisão bíblica reformada.",
              },
              {
                question: "É necessário ser cristão para matricular meu filho?",
                answer: "Esperamos que as famílias estejam alinhadas com nossos valores e princípios cristãos.",
              },
              {
                question: "Como funciona o período escolar?",
                answer: "Funcionamos em período integral e parcial. Consulte a disponibilidade para cada série.",
              },
            ].map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h4 className="font-serif text-lg text-navy mb-2">{item.question}</h4>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
