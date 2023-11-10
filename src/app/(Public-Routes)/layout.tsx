import type { Metadata } from "next"
import { Inter, Roboto_Condensed } from "next/font/google"
import "./globals.scss"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
