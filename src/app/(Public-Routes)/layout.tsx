import type { Metadata } from "next"
import { Inter, Roboto_Condensed } from "next/font/google"
import "../globals.scss"
// import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import { NavContextProvider } from "@/context/NavContext"
import { Toaster } from "react-hot-toast"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NavContextProvider>
      <Navbar />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      {children}
      <Footer />
    </NavContextProvider>
  )
}
