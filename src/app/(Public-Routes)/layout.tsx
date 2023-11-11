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
