import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ELLUM | Escola Cristã Clássica",
  description: "Links oficiais da ELLUM Escola Cristã Clássica - Juiz de Fora, MG",
};

const links = [
  {
    href: "/simposio",
    label: "I Simpósio de Educação Cristã Clássica de Juiz de Fora",
    headline: "Uma conversa necessária sobre a formação das próximas gerações.",
    description: "Pais, educadores e líderes reunidos para pensar uma educação integral, centrada em Cristo e fundamentada na Palavra.",
    action: "Inscrever-se",
    highlight: true,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    href: "/#admissoes",
    label: "Matrículas 2027",
    description: "Agende uma visita e conheça a proposta pedagógica da ELLUM.",
    action: "Tenho interesse",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    href: "/",
    label: "Nosso Site",
    description: "História, educação cristã clássica, admissões e contato.",
    action: "Acessar site",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    href: "https://wa.me/5532999999999",
    label: "Fale Conosco",
    description: "Converse com a nossa equipe pelo WhatsApp.",
    action: "Chamar agora",
    external: true,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    href: "https://instagram.com/escolaellum",
    label: "Instagram",
    description: "Acompanhe registros, avisos e bastidores da escola.",
    action: "Seguir perfil",
    external: true,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    href: "https://maps.google.com/?q=Av.+Pres.+Costa+e+Silva,+1740,+Sao+Pedro,+Juiz+de+Fora+-+MG",
    label: "Localização",
    description: "Av. Pres. Costa e Silva, 1740 - São Pedro, Juiz de Fora.",
    action: "Abrir mapa",
    external: true,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function LinksPage() {
  const featuredLink = links.find((link) => link.highlight);
  const secondaryLinks = links.filter((link) => !link.highlight);

  return (
    <main className="relative min-h-screen overflow-hidden bg-navy px-5 py-8 sm:px-6 sm:py-12">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='72' height='72' viewBox='0 0 72 72' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C4965F' stroke-opacity='1'%3E%3Cpath d='M36 10v52M10 36h52M20 20l32 32M52 20L20 52' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[430px] flex-col items-center">
        <div className="mb-6">
          <Image
            src="/images/logo-gold.png"
            alt="ELLUM"
            width={280}
            height={200}
            priority
            quality={100}
            className="h-auto w-44 sm:w-48 object-contain"
          />
        </div>

        <h1 className="font-serif text-4xl text-white text-center mb-2">
          ELLUM
        </h1>
        <p className="text-gold/80 text-xs tracking-[0.28em] uppercase mb-3">
          Escola Cristã Clássica
        </p>
        <p className="text-white/65 text-sm text-center leading-relaxed max-w-xs mb-8">
          Formando mentes para a verdade, corações para a virtude.
        </p>

        {featuredLink && (
          <Link
            href={featuredLink.href}
            className="group relative mb-4 w-full overflow-hidden rounded-lg bg-gold p-6 text-navy shadow-[0_22px_55px_rgb(0_0_0/0.22)] transition duration-300 hover:-translate-y-1 hover:bg-gold-soft focus-visible:-translate-y-1"
          >
            <span className="absolute -right-8 -top-10 h-36 w-36 rounded-full border border-navy/10" />
            <span className="absolute -right-4 -top-6 h-24 w-24 rounded-full border border-navy/10" />
            <span className="relative flex h-full flex-col gap-5">
              <span className="flex items-start justify-between gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold">
                  {featuredLink.icon}
                </span>
              </span>
              <span>
                <span className="mb-3 block font-serif text-2xl leading-tight">
                  {featuredLink.label}
                </span>
                {featuredLink.headline && (
                  <span className="mb-2 block font-serif text-lg italic leading-snug text-navy/90">
                    {featuredLink.headline}
                  </span>
                )}
                <span className="block text-sm leading-relaxed text-navy/70">
                  {featuredLink.description}
                </span>
              </span>
              <span className="flex items-center justify-between text-sm font-semibold pt-2">
                {featuredLink.action}
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </span>
          </Link>
        )}

        <div className="grid w-full grid-cols-2 gap-3">
          {secondaryLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={`
                group flex min-h-36 flex-col justify-between rounded-lg border border-gold/25
                bg-white/[0.035] p-4 text-white transition duration-300
                hover:-translate-y-1 hover:border-gold/70 hover:bg-gold/[0.08]
                focus-visible:-translate-y-1
                ${index === 0 ? "col-span-2 sm:col-span-1" : ""}
              `}
            >
              <span className="flex items-start justify-between gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold transition duration-300 group-hover:bg-gold group-hover:text-navy">
                  {link.icon}
                </span>
                <svg
                  className="mt-1 h-4 w-4 text-gold/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold group-focus-visible:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <span>
                <span className="mb-1 block font-serif text-xl leading-tight">
                  {link.label}
                </span>
                <span className="block text-[13px] leading-snug text-white/58">
                  {link.description}
                </span>
              </span>
              <span className="pt-4 text-xs font-semibold uppercase tracking-[0.16em] text-gold/75">
                {link.action}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center">
          <div className="w-12 h-px bg-gold/30 mb-5" />
          <p className="text-white/40 text-xs tracking-widest uppercase">
            Juiz de Fora, MG
          </p>
        </div>
      </div>
    </main>
  );
}
