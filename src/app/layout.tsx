import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './Footer/footer'
import { Header } from './Header/header'
import { SetColorsByTheme } from './Theme/setColorsByTheme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elnet Pro',
  description: 'A Graph Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <SetColorsByTheme/>
        <Header slug='' />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
