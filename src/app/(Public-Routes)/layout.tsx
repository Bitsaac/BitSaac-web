import type { Metadata } from "next"
import { Inter, Roboto_Condensed } from "next/font/google"
import "../globals.scss"
// import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import { NavContextProvider } from "@/context/NavContext"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NavContextProvider>
      <Navbar />
      {children}
      <Footer />
    </NavContextProvider>
  )
}
