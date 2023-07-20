import './globals.css'

import { Merriweather } from 'next/font/google'
import { Header } from '@/frontend/components/header'

const merriweather = Merriweather({
  weight: ['400','700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Analog Steff',
  description: 'Photography art gallery',
}

export default function RootLayout( { children, }: { children: React.ReactNode } ) {
  return (
    <html lang="en">
      <body className={merriweather.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}