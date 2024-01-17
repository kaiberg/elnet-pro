import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemContextProvider from "@/UI/Tokens/Theme";
import SkipToContent from "@/UI/Components/SkipToContent/SkipToContent";
import Footer from './Footer/footer'
import Header from './Header/header'
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";
import {BODY_LARGE} from "@/UI/Tokens/Typography";
import {DarkModeVariableName} from "@/UI/Tokens/Theme/constants";
import {cookies} from "next/headers";
import styles from './layout.module.css';
import getUserDetails from "@/UI/Components/Authorization";
import NotLoggedIn from "@/UI/Components/NotLoggedIn";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elnet Pro',
  description: 'A Graph Dashboard',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const user = await getUserDetails();

  return (
    <html lang="en" data-color-mode={cookies().get(DarkModeVariableName)?.value}>
      <body className={ConcatClasses(inter.className, BODY_LARGE, styles.animation)}>
        <ThemContextProvider>
          <SkipToContent/>
          <Header slug='' user={user} />
          <main>
            {user === undefined ? <NotLoggedIn/> : children}
          </main>
          <Footer />
        </ThemContextProvider>
      </body>
    </html>
  )
}
