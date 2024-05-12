"use client"
import React, { useState } from "react"

import { Container } from "../bit-commerce/page"

import toast from "react-hot-toast"

const CTA = () => {
  const BASE_URL = "https://bitsaac-api.onrender.com/api/v1/"
  const [email, setEmail] = useState("")

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address")
      return
    }

    if (!email.includes("@gmail.com")) {
      toast.error("Invalid email address")
      return
    }

    try {
      if (email === "") {
        toast.error("Email can't be blank")
        return
      }

      const response = await fetch(`${BASE_URL}newsletter/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      })

      if (response.ok) {
        console.log("Subscription successful")
        console.log(response)
        toast.success("Subscribed successfully")
        setEmail("")
      } else {
        console.error(
          `Failed to subscribe. Server responded with status: ${response.status}`
        )
        toast.error("Failed to subscribe. Please try again.")
      }
    } catch (error) {
      toast.error("An error occurred during subscription")
      console.error("An error occurred during subscription:", error)
    }
  }

  return (
    <div>
      <div className="xl:px-16 px-4 xl:py-28 md:py-10 bg-[#FAFAFA] py-8 md:gap-10 xl:gap-0  flex sm:flex-row flex-col justify-between items-center">
        <div>
          <h3 className="font-bold sm:text-[48px] font-Ralewa text-[32px] text-[#2A2738] leading-[56px]">
            Transforming Ideas into  <br className="xl:flex hidden" />{" "}
            Tech Solutions
          </h3>
          <p className="text-[18px] leading-[24px] sm:mt-8 my-6 text-[#0A0A0A]">
            Contact us today to discuss your tech needs or start selling online
          </p>
        </div>
        <div>
          <form onSubmit={handleSubscribe}>
            <div className="flex gap-4 items-center">
              <div className="sm:w-[396px] w-[80%] h-[48px] border-[1px] border-[E9EBF8] rounded-[8px]">
                <input
                  type="email"
                  className="h-full w-full bg-transparent px-2 outline-none"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-[#4D61F4]  text-[#FAFAFA]  px-6 py-3 rounded-[8px] sm:rounded-[8px]"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
          <h5 className="text-xs text-[#2A2738] mt-4">
            By clicking submit youre confirming that you agree with our Terms
            and Conditions.
          </h5>
        </div>
      </div>
    </div>
  )
}

export default CTA
