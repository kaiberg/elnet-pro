import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {FallbackStyles, SetColorsByTheme} from "@/UI/Tokens/Theme/setColorsByTheme";
import ThemContextProvider from "@/UI/Tokens/Theme";
import SkipToContent from "@/UI/Components/SkipToContent/SkipToContent";
import Footer from './Footer/footer'
import Header from './Header/header'
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";
import {BODY_LARGE} from "@/UI/Tokens/Typography";

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
      <body className={ConcatClasses(inter.className, BODY_LARGE)}>
        <SetColorsByTheme />
        <ThemContextProvider>
          <SkipToContent/>
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
