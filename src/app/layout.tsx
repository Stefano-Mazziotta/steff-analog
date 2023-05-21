import './globals.css'
import { Inter } from 'next/font/google'

import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'steff-analog',
  description: 'Photography art gallery',
}

export default function RootLayout( { children, }: { children: React.ReactNode } ) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}