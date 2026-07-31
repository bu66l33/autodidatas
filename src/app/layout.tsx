import type { Metadata } from "next";
import { Playfair_Display, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Autodidatas — comunidade para quem pensa fora da curva",
  description:
    "Comunidade no Discord sobre matemática, direct response, xadrez, filosofia e inteligência artificial. Para quem aprende sozinho e se recusa a ser mediano.",
  openGraph: {
    title: "Autodidatas — comunidade para quem pensa fora da curva",
    description:
      "Matemática, direct response, xadrez, filosofia e IA. Para quem aprende sozinho e se recusa a ser mediano.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable} ${plexMono.variable} antialiased`}
    >
      <body className="grain vignette bg-ink text-ivory">{children}</body>
    </html>
  );
}
