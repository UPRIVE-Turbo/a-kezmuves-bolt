import React from 'react'
import { Bitter, Inter } from 'next/font/google'
import './styles.css'

const bitter = Bitter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bitter',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'A Kézműves Bolt | Veszprém',
  description:
    'Kézzel készült, szívvel adott. Egyedi kézműves termékek, ajándékok és alkotó workshopok Veszprém szívében, a Virág Benedek utcában.',
  openGraph: {
    title: 'A Kézműves Bolt | Veszprém',
    description:
      'Kézzel készült, szívvel adott. Egyedi kézműves termékek, ajándékok és alkotó workshopok Veszprém szívében.',
    locale: 'hu_HU',
    type: 'website',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="hu" className={`${bitter.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
