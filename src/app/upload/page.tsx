"use client"

import CreateBlog from "@/components/admin/CreateBlog"
import cn from "@/utils/tailwind"
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
  const [activeTab, setActiveTab] = useState(tabs[0].tag)

  return (
    <section className="mt-10 lg:mt-20 px-8 w-full flex flex-col">
      <div className="flex w-full justify-between items-center">
        <div className="felx">
          <h1 className="text-3xl">Upload</h1>
        </div>
        <div className="flex justify-between pr-8 w-[80%]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={cn(
                "py-2 w-full capitalize font-semibold text-sm sm:text-lg lg:text-xl",
                tab.tag === activeTab
                  ? "text-primary border-primary  border-b-4 "
                  : "text-gray-800/40"
              )}
              onClick={() => setActiveTab(tab.tag)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "blog" && <CreateBlog />}
    </section>
  )
}

export default UploadPgae
