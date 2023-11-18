import type { Metadata } from "next"
import { Inter, Roboto_Condensed } from "next/font/google"

import GotoTop from "@/components/GotoTop"
import "./globals.scss"
import { NextAuthProvider } from "./providers"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})
const roboto = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Bitsaac Inc.",
  description:
    "BitSaac is an innovative tech agency and community of tech creatives. We offer web and mobile app development, UI/UX design, and more.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto.variable}`}
    >
      <NextAuthProvider>
        <body>
          {children}
          <GotoTop />
        </body>
      </NextAuthProvider>
    </html>
  )
}
