import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GXD - Assessoria Empresarial | Marketing Digital, Web & Mídia',
  description: 'Assessoria completa em marketing digital, desenvolvimento web e gestão de mídia para empresas que querem resultados extraordinários.',
  keywords: 'assessoria empresarial, marketing digital, desenvolvimento web, gestão de mídia, GXD',
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