import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ELLUM | Escola Cristã Clássica",
  description: "Formação integral para cultivar sabedoria, virtude e amor à verdade. Educação Cristã Clássica em Juiz de Fora, MG.",
  keywords: ["educação cristã", "escola clássica", "Juiz de Fora", "educação clássica", "trivium", "ELLUM"],
  authors: [{ name: "ELLUM Escola Cristã Clássica" }],
  openGraph: {
    title: "ELLUM | Escola Cristã Clássica",
    description: "Formação integral para cultivar sabedoria, virtude e amor à verdade.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
