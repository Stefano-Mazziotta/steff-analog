import { EmbeddedSandbox } from '@/components/EmbeddedSandbox'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Steff_Analog',
  description: 'Photography art gallery',
}

export default function RootLayout( { children, }: { children: React.ReactNode } ) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <EmbeddedSandbox />
    </html>
  )
}
