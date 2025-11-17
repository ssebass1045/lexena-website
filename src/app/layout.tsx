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
    <html lang="es" className="dark-mode-transition">
      <head>
        {/* Favicons generados */}
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark-mode-transition`}
      >
        {children}
        <GoogleAnalytics />
        <ScrollTracker />
      </body>
    </html>
  );
}