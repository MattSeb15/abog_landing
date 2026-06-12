import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
  metadataBase: new URL("https://www.paredesyasociados.ec"),
  title: "Abogados en Ecuador: Familia, Civil, Penal y Laboral | Paredes & Asociados",
  description:
    "Estudio jurídico experto en divorcio mutuo consentimiento, pensión de alimentos, despido intempestivo, accidentes de tránsito y sumarios administrativos. Abogado en Quito, Ibarra y Tulcán.",
  keywords: [
    "abogado ecuador", "derecho de familia", "divorcio mutuo consentimiento ecuador", 
    "pensión de alimentos ecuador", "liquidación sociedad conyugal", "abogado familia quito", 
    "abogado familia ibarra", "abogado familia tulcán", "abogado civil ecuador", 
    "prescripción adquisitiva dominio", "sucesión causa de muerte", "abogado penal quito", 
    "violencia intrafamiliar ecuador", "accidentes tránsito ecuador", "abogado laboral quito", 
    "despido intempestivo ecuador", "sumario administrativo ecuador", "defensa servidor público"
  ],
  openGraph: {
    title: "Corporativo Jurídico Paredes & Asociados | Abogados en Ecuador",
    description: "Estudio jurídico experto en divorcio mutuo consentimiento, pensión de alimentos, despido intempestivo, accidentes de tránsito y sumarios administrativos. Abogado en Quito, Ibarra y Tulcán.",
    url: "https://www.paredesyasociados.ec",
    siteName: "Paredes & Asociados",
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abogados en Ecuador: Familia, Civil, Penal y Laboral",
    description: "Expertos en divorcio, alimentos, despidos, y accidentes de tránsito en Quito, Ibarra y Tulcán.",
  },
  alternates: {
    canonical: "https://www.paredesyasociados.ec"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Corporativo Jurídico Paredes & Asociados",
  "image": "https://www.paredesyasociados.ec/logo_transparent.webp",
  "@id": "https://www.paredesyasociados.ec",
  "url": "https://www.paredesyasociados.ec",
  "telephone": "+593981324778",
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "Quito",
      "addressCountry": "EC"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Ibarra",
      "addressCountry": "EC"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Tulcán",
      "addressCountry": "EC"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -0.180653,
    "longitude": -78.467838
  },
  "areaServed": "Ecuador",
  "priceRange": "$$"
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
      <head>
        <Script
          id="local-business-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}