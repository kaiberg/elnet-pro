import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './Footer/footer'
import { Header } from './Header/header'
import { FallbackStyles, SetColorsByTheme } from './Theme/setColorsByTheme'
import { ThemContextProvider } from './Theme/Theme'
import Script from 'next/script'

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
    <html lang="en" style={FallbackStyles() as React.CSSProperties} suppressHydrationWarning>
      <body className={inter.className}>
        <SetColorsByTheme />
        <ThemContextProvider>
          <Header slug='' />
          <main>
            {children}
          </main>
          <Footer />
        </ThemContextProvider>
      </body>
    </html>
  )
}
