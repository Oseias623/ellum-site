import { Metadata } from "next";
import Image from "next/image";
import { SimposioForm } from "@/components/forms/SimposioForm";

export const metadata: Metadata = {
  title: "Simpósio de Educação Cristã Clássica | A Paideia de Deus",
  description: "Participe do Simpósio de Educação Cristã Clássica em Juiz de Fora, MG, realizado pela ELLUM.",
};

export default function SimposioPage() {
  return (
    <main className="min-h-screen bg-navy">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4965F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/images/logo-gold.png"
              alt="ELLUM"
              width={220}
              height={156}
              priority
              quality={100}
              className="h-auto w-36 sm:w-44 md:w-52 object-contain mx-auto"
            />
          </div>

          {/* Event badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-gold text-sm tracking-widest uppercase">
              9 e 10 de outubro
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-4">
            Simpósio de Educação Cristã Clássica
          </h1>
          <p className="text-gold text-xl md:text-2xl font-serif mb-8">
            A Paideia de Deus
          </p>

          {/* Tagline */}
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Uma educação integral, centrada em Cristo e fundamentada na Palavra.
          </p>

          {/* Event details */}
          <div className="flex flex-wrap justify-center gap-8 text-white/60">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>9 e 10 de outubro</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Juiz de Fora — MG</span>
            </div>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </section>

      {/* About Section */}
      <section className="py-20 bg-navy-soft">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              Educar nunca foi apenas transmitir conhecimento. É formar uma pessoa.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-12">
              Vivemos um tempo em que famílias, educadores e igrejas precisam recuperar
              uma pergunta fundamental: que tipo de pessoa estamos formando — e segundo
              qual visão de mundo? O simpósio nasce como um chamado à reflexão sobre uma
              educação que forma mente, caráter e afetos sob o senhorio de Cristo.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ),
                  title: "O mito da neutralidade pedagógica",
                  description: "Toda educação parte de pressupostos sobre o homem, a verdade e o propósito da vida.",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: "Educação cristã clássica e educação moderna",
                  description: "Diferentes maneiras de educar nascem de diferentes compreensões sobre a finalidade da educação.",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  title: "A Paideia de Deus",
                  description: "Formar a pessoa por inteiro — inteligência, caráter, afetos e virtudes — fundamentada na Palavra.",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                Simpósio de Educação Cristã Clássica
              </h2>
              <p className="text-white/60">
                A Paideia de Deus. Uma educação integral, centrada em Cristo e fundamentada na Palavra.
              </p>
              <p className="text-gold/80 text-sm mt-4">
                9 e 10 de outubro | Juiz de Fora — MG
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur border border-gold/20 rounded-2xl p-8">
              <SimposioForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gold/10">
        <div className="container mx-auto px-6 text-center">
          <Image
            src="/images/logo-gold.png"
            alt="ELLUM"
            width={48}
            height={48}
            className="w-12 h-12 object-contain mx-auto mb-4 opacity-50"
          />
          <p className="text-white/40 text-sm">
            ELLUM Escola Cristã Clássica
          </p>
          <p className="text-white/30 text-xs mt-1">
            9 e 10 de outubro | Juiz de Fora — MG
          </p>
        </div>
      </footer>
    </main>
  );
}
