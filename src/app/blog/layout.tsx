import ContentCtxProvider from "@/context/ContentContext"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BitSaac | Blog",
  description: "BitSaac curated Blogs",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ContentCtxProvider>{children}</ContentCtxProvider>
}
