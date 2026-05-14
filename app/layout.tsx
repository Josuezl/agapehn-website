import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Ministerio Internacional Ágape | En esta casa, cabemos todos',
    template: '%s | Ministerio Internacional Ágape',
  },
  description:
    'Ministerio Internacional Ágape — una iglesia cristiana en Honduras. Servicios domingos y martes. "En esta casa, cabemos todos."',
  keywords: [
    'iglesia',
    'Honduras',
    'Ministerio Ágape',
    'cristiano',
    'Tegucigalpa',
    'REMA',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_HN',
    siteName: 'Ministerio Internacional Ágape',
    title: 'Ministerio Internacional Ágape | En esta casa, cabemos todos',
    description:
      'Una iglesia que te da la bienvenida con los brazos abiertos. Muchos años sirviendo a Honduras y las naciones.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ministerio Internacional Ágape',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ministerio Internacional Ágape',
    description: 'En esta casa, cabemos todos. Dios es bueno, Dios es fiel.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
