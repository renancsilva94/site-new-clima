import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'New Clima Ar | Instalação e Manutenção de Ar Condicionado em SP e ABC Paulista',
  description: 'Instalação e manutenção de ar condicionado em São Paulo e ABC Paulista. 7 anos de experiência, técnicos certificados e visita gratuita. Ligue (11) 96346-2516.',
  metadataBase: new URL('https://www.newclimaar.com.br'),
  alternates: {
    canonical: 'https://www.newclimaar.com.br/',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.newclimaar.com.br/',
    title: 'New Clima Ar | Instalação e Manutenção de Ar Condicionado em SP e ABC Paulista',
    description: 'Instalação e manutenção de ar condicionado em São Paulo e ABC Paulista. 7 anos de experiência, técnicos certificados e visita gratuita. Ligue (11) 96346-2516.',
    images: [{ url: '/images/logo-new-clima.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Clima Ar | Instalação e Manutenção de Ar Condicionado em SP e ABC Paulista',
    description: 'Instalação e manutenção de ar condicionado em São Paulo e ABC Paulista.',
    images: ['/images/logo-new-clima.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-S26Q4YLC2R"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S26Q4YLC2R');
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
