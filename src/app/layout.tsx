import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from '@/components/GoogleAnalytics';
import ScrollTracker from '@/components/ScrollTracker';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LexENA - Firma de Abogados en Urabá Antioquia | Asesoría Legal Especializada",
  description: "LexENA: Firma de abogados expertos en Urabá Antioquia. Asesoría legal en derecho minero ambiental, aduanero, insolvencia empresarial y más. Consulta gratuita.",
  keywords: "abogados Urabá, asesoría legal Antioquia, derecho minero ambiental, abogados Apartadó, insolvencia empresarial, legislación aduanera, LexENA",
  authors: [{ name: "LexENA Firma de Abogados" }],
  creator: "LexENA",
  publisher: "LexENA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lexena.co'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "LexENA - Firma de Abogados Especializados en Urabá Antioquia",
    description: "Expertos en derecho minero ambiental, aduanero e insolvencia empresarial. Consulta legal gratuita en Urabá Antioquia.",
    url: 'https://lexena.co',
    siteName: 'LexENA',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LexENA - Firma de Abogados',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LexENA - Firma de Abogados en Urabá Antioquia',
    description: 'Expertos en derecho minero ambiental, aduanero e insolvencia empresarial',
    images: ['/twitter-image.jpg'],
  },
  verification: {
    google: 'tu-codigo-de-verificacion-google',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "LexENA Firma de Abogados",
              "description": "Firma de abogados especializados en derecho minero ambiental, aduanero e insolvencia empresarial en Urabá Antioquia",
              "url": "https://lexena.co",
              "telephone": "+573105302619",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Antioquia",
                "addressLocality": "Urabá"
              },
              "areaServed": ["Arboletes", "Necoclí", "Turbo", "Apartadó", "Chigorodó", "Mutatá", "Dabeiba"],
              "serviceType": [
                "Derecho Minero Ambiental",
                "Legislación Aduanera", 
                "Insolvencia Empresarial",
                "Asesoría Tributaria",
                "Derecho Inmobiliario"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GoogleAnalytics />
        <ScrollTracker />
      </body>
    </html>
  );
}

