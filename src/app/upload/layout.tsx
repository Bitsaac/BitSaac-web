import type { Metadata } from "next"

import GotoTop from "@/components/GotoTop"
import AdminNav from "@/components/admin/AdminNav"

import FormContextProvider from "@/context/FormContext"
import { NextAuthProvider } from "../providers"
import { getServerSession } from "next-auth"
import { authOptions } from "@/utils/auth"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Create",
  description: "Write a Story",
}

export default async function UploadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  console.log(session)
  if (!session) {
    return redirect("/")
  }
  return (
    <FormContextProvider>
      <AdminNav session={session} />
      <main className="max-container relative ">{children}</main>
    </FormContextProvider>
  )
}
