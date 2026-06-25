import type { Metadata } from 'next'
import './globals.css'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.newclimaar.com.br'),
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  name: 'New Clima Ar Condicionado',
  url: 'https://www.newclimaar.com.br',
  logo: 'https://www.newclimaar.com.br/images/logo-new-clima.png',
  image: 'https://www.newclimaar.com.br/images/logo-new-clima.png',
  description: 'Instalação, manutenção, limpeza e conserto de ar condicionado em São Paulo e ABC Paulista.',
  telephone: '+55-11-96346-2516',
  email: 'contato@newclimaar.com.br',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'R. Santa Cruz, 2187 - Sala 10',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    postalCode: '04121-002',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -23.5955,
    longitude: -46.6394,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'São Paulo' },
    { '@type': 'City', name: 'Santo André' },
    { '@type': 'City', name: 'São Bernardo do Campo' },
    { '@type': 'City', name: 'São Caetano do Sul' },
    { '@type': 'City', name: 'Diadema' },
    { '@type': 'City', name: 'Mauá' },
  ],
  priceRange: '$$',
  sameAs: [
    'https://www.instagram.com/newclimaar',
    'https://www.facebook.com/newclimaar',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WDWKVBVP');`
        }}/>
        {/* GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S26Q4YLC2R"/>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S26Q4YLC2R');
          `
        }}/>
        {/* Schema.org LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WDWKVBVP"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }}/>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
