import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Section } from "@/components/ui";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contato | Ellum Escola Cristã Clássica",
  description: "Entre em contato com a Ellum Escola Cristã Clássica. Endereço, telefone e formulário de contato.",
};

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-navy text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-gold uppercase tracking-widest text-sm">
                Contato
              </span>
              <h1 className="text-4xl md:text-5xl font-serif mt-4">
                Fale Conosco
              </h1>
              <p className="text-xl text-gray-300 mt-6">
                Estamos à disposição para esclarecer suas dúvidas.
              </p>
            </div>
          </div>
        </section>

        {/* Informações de Contato + Formulário */}
        <Section>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Informações */}
            <div>
              <h2 className="text-2xl font-serif text-navy mb-8">
                Informações de Contato
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-navy">Endereço</h3>
                    <p className="text-gray-600">
                      Av. Pres. Costa e Silva, 1740<br />
                      São Pedro, Juiz de Fora - MG<br />
                      CEP: 36037-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-navy">Telefone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+553200000000" className="hover:text-gold transition-colors">
                        (32) 0000-0000
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-navy">E-mail</h3>
                    <p className="text-gray-600">
                      <a href="mailto:contato@ellumecc.com" className="hover:text-gold transition-colors">
                        contato@ellumecc.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-navy">Horário de Atendimento</h3>
                    <p className="text-gray-600">
                      Segunda a Sexta: 7h às 17h
                    </p>
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="mt-8">
                <h3 className="font-medium text-navy mb-4">Redes Sociais</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/escolaellum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com/escolaellum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="bg-cream p-8 rounded-lg">
              <h2 className="text-2xl font-serif text-navy mb-6">
                Envie uma Mensagem
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent bg-white"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent bg-white"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="assunto"
                    name="assunto"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent bg-white"
                    placeholder="Assunto da mensagem"
                  />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent bg-white"
                    placeholder="Sua mensagem..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </Section>

        {/* Mapa */}
        <Section background="cream">
          <div className="bg-navy-light rounded-lg aspect-video md:aspect-[21/9] flex items-center justify-center text-white">
            <div className="text-center p-8">
              <p className="text-xl mb-4">[Google Maps Embed]</p>
              <p className="text-gray-400">
                Av. Pres. Costa e Silva, 1740 - São Pedro, Juiz de Fora - MG
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
