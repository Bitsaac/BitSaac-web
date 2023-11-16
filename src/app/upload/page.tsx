"use client"

import CreateBlog from "@/components/admin/CreateBlog"
import CreateNewsletter from "@/components/admin/CreateNewsletter"
import CreatePortfolio from "@/components/admin/CreatePortfolio"
import cn from "@/utils/tailwind"
import { handleMouse } from "@/utils/text-effect"

import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"

type Props = {
  id?: number
  tag: string
  title: string
}

const tabs: Props[] = [
  {
    id: 1,
    tag: "blog",
    title: "blog",
  },
  {
    id: 2,
    tag: "portfolio",
    title: "portfolio",
  },
  {
    id: 3,
    tag: "newsletter",
    title: "newsletter",
  },
]

const UploadPgae = () => {
  const [activeTag, setActiveTag] = useState("" as string)
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchTab = searchParams.get("tab")

  useEffect(() => {
    const tab = localStorage.getItem("activeTag")
    if (searchTab) {
      setActiveTag(searchParams.get("tab") as string)
      return
    }
    if (tab) {
      setActiveTag(localStorage.getItem("activeTag") as string)
      return
    }
    setActiveTag("blog")
  }, [searchTab, searchParams])

  useEffect(() => {
    router.push(`/upload?tab=${activeTag}`)
    if (!activeTag) return
    localStorage.setItem("activeTag", activeTag)
  }, [activeTag, router])

  return (
    <section className="mt-10 lg:mt-20 px-3 sm:px-8 w-full flex flex-col ">
      <div className="flex-col flex md:flex-row w-full justify-between items-center">
        <div className="felx">
          <h1
            className="text-3xl max-md:uppercase"
            data-value="Upload"
            onMouseEnter={handleMouse}
          >
            Upload
          </h1>
        </div>
        <div className="flex justify-between md:pr-8 w-full md:w-[80%] max-md:mt-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={cn(
                "py-2 w-full capitalize font-medium sm:font-semibold text-lg sm:text-xl max-[400px]:text-base",
                tab.tag === activeTag
                  ? "text-primary border-primary  border-b-4 "
                  : "text-gray-800/40"
              )}
              onClick={() => setActiveTag(tab.tag)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {activeTag === "blog" && <CreateBlog />}
      {activeTag === "portfolio" && <CreatePortfolio />}
      {activeTag === "newsletter" && <CreateNewsletter />}
    </section>
  )
}

export default UploadPgae
