import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

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
  title: "Abogados en Quito e Ibarra | Divorcios, Alimentos, Violencia Intrafamiliar y Tierras | Paredes & Asociados",
  description:
    "Abogados especialistas en Quito e Ibarra en divorcios, pensión de alimentos, violencia intrafamiliar, violencia psicológica, lesiones, legalización de tierras y sumarios administrativos.",
  keywords: [
    "abogados en quito",
    "abogados en ibarra",
    "abogado divorcios quito",
    "abogado divorcios ibarra",
    "pensión de alimentos ecuador",
    "abogado violencia intrafamiliar quito",
    "abogado violencia psicológica ecuador",
    "abogado penal lesiones ecuador",
    "legalización de tierras quito e ibarra",
    "prescripción adquisitiva de dominio ecuador",
    "sumarios administrativos ecuador",
    "defensa servidor público quito ibarra",
    "abogado de familia quito",
    "abogado de familia ibarra"
  ],
  openGraph: {
    title: "Corporativo Jurídico Paredes & Asociados | Abogados en Quito e Ibarra",
    description:
      "Especialistas en divorcios, pensión de alimentos, defensa en violencia intrafamiliar, violencia psicológica y lesiones, legalización de tierras y sumarios administrativos en Quito e Ibarra.",
    url: "https://www.paredesyasociados.ec",
    siteName: "Paredes & Asociados",
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abogados en Quito e Ibarra | Paredes & Asociados",
    description:
      "Especialistas en divorcios, pensión de alimentos, violencia intrafamiliar, lesiones, legalización de tierras y sumarios administrativos.",
  },
  alternates: {
    canonical: "https://www.paredesyasociados.ec"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LegalService", "Attorney"],
      "@id": "https://www.paredesyasociados.ec/#legalservice",
      "name": "Corporativo Jurídico Paredes & Asociados",
      "image": "https://www.paredesyasociados.ec/logo_transparent.webp",
      "url": "https://www.paredesyasociados.ec",
      "telephone": "+593981324778",
      "priceRange": "$$",
      "founder": {
        "@type": "Person",
        "name": "Ab. Andersson Fernando Paredes Chamorro",
        "jobTitle": "Abogado y Mediador",
        "identifier": {
          "@type": "PropertyValue",
          "name": "Matrícula Profesional Foro de Abogados del Ecuador",
          "value": "04-2018-13"
        }
      },
      "address": [
        {
          "@type": "PostalAddress",
          "addressLocality": "Quito",
          "addressRegion": "Pichincha",
          "addressCountry": "EC"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Ibarra",
          "addressRegion": "Imbabura",
          "addressCountry": "EC"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Tulcán",
          "addressRegion": "Carchi",
          "addressCountry": "EC"
        }
      ],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -0.180653,
        "longitude": -78.467838
      },
      "areaServed": [
        { "@type": "City", "name": "Quito" },
        { "@type": "City", "name": "Ibarra" },
        { "@type": "City", "name": "Tulcán" },
        { "@type": "Country", "name": "Ecuador" }
      ],
      "knowsAbout": [
        "Divorcios por mutuo consentimiento y contenciosos",
        "Pensión de Alimentos, incidentes de aumento y rebaja",
        "Violencia Intrafamiliar",
        "Violencia Psicológica",
        "Delitos y contravenciones por Lesiones",
        "Legalización de Tierras y Prescripción Adquisitiva de Dominio",
        "Sumarios Administrativos y Defensa del Servidor Público"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios Jurídicos Especializados en Quito e Ibarra",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Abogados de Divorcios en Quito e Ibarra",
              "description": "Patrocinio en divorcios por mutuo consentimiento, divorcios contenciosos y liquidación de la sociedad conyugal."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Abogados de Pensión de Alimentos",
              "description": "Demandas de fijación de pensión alimenticia, incidentes de aumento o rebaja, liquidaciones y apremios."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Defensa Técnica en Violencia Intrafamiliar, Violencia Psicológica y Lesiones",
              "description": "Representación penal y medidas de protección en procesos de violencia intrafamiliar, pericias de violencia psicológica y juicios por lesiones."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Legalización de Tierras y Bienes Inmuebles",
              "description": "Juicios de prescripción extraordinaria adquisitiva de dominio, regularización de predios, particiones y escrituración en Quito e Ibarra."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Defensa en Sumarios Administrativos",
              "description": "Defensa técnica para servidores públicos, docentes y funcionarios ante procesos disciplinarios y destituciones."
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.paredesyasociados.ec/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Dónde encontrar un abogado especialista en divorcios y pensión de alimentos en Quito e Ibarra?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El Corporativo Jurídico Paredes & Asociados cuenta con abogados especialistas en Quito e Ibarra para tramitar divorcios de mutuo acuerdo o contenciosos, fijación de pensión de alimentos, incidentes de aumento o rebaja y tenencia."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué hacer en un proceso legal por violencia intrafamiliar, violencia psicológica o lesiones?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Paredes & Asociados brinda patrocinio penal especializado en Quito e Ibarra tanto en la solicitud o contradicción de boletas de auxilio y medidas de protección como en audiencias de juzgamiento por contravenciones y delitos de violencia intrafamiliar, violencia psicológica y lesiones."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cómo realizar la legalización de tierras sin escrituras en Quito o Ibarra?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La legalización de tierras se gestiona mediante juicios de prescripción extraordinaria adquisitiva de dominio o trámites administrativos municipales de regularización, acreditando la posesión pacífica e ininterrumpida del inmueble con asesoría legal especializada."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cómo defenderse en un sumario administrativo en el sector público?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Se requiere contestar técnicamente el auto de llamamiento a sumario administrativo, evacuar prueba documental y pericial, y garantizar el debido proceso para evitar sanciones o la destitución del servidor público."
          }
        }
      ]
    }
  ]
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
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2875929116139555');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2875929116139555&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
