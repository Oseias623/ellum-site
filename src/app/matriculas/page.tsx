import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Section, SectionHeader } from "@/components/ui";
import { Button } from "@/components/ui";

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
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome do Responsável
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="(32) 99999-9999"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="serie" className="block text-sm font-medium text-gray-700 mb-2">
                  Série de Interesse
                </label>
                <select
                  id="serie"
                  name="serie"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                >
                  <option value="">Selecione a série</option>
                  <option value="infantil">Educação Infantil</option>
                  <option value="fundamental1">Fundamental I (1º ao 5º ano)</option>
                  <option value="fundamental2">Fundamental II (6º ao 9º ano)</option>
                </select>
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem (opcional)
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Conte-nos um pouco sobre sua família e o que busca na educação do seu filho..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Enviar Solicitação
              </Button>
            </form>
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
