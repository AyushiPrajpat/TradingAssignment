import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LayoutWrapper from './components/LayoutWrapper'
import './globals.css' 

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TradingStudio',
  description: 'Dynamic Returns Calculator - Trading Analytics UI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}

