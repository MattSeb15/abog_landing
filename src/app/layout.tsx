import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const outfitHeading = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Corporativo Jurídico Paredes & Asociados | Abogados en Ecuador",
  description:
    "Estudio jurídico especializado en Derecho de Familia, Civil, Penal y Laboral. Más de 10 años de experiencia. Atendemos en Tulcán, Ibarra, Quito y a nivel nacional.",
  keywords: ["abogado ecuador", "derecho de familia", "divorcio ecuador", "abogado tulcán", "abogado ibarra", "abogado quito"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${outfitHeading.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}