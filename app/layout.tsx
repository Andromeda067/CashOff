import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GXD - Assessoria Empresarial | Marketing, Websites & Mídia',
  description: 'GXD oferece assessoria completa para empresas: marketing digital, desenvolvimento de websites e estratégias de mídia para alavancar seu negócio.',
  keywords: 'assessoria empresarial, marketing digital, desenvolvimento web, gestão de mídia, consultoria empresarial',
  authors: [{ name: 'GXD Assessoria Empresarial' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}