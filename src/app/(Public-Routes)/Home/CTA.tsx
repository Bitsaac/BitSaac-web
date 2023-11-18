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
      <div className="sm:px-16 px-4 sm:py-28 py-8 bg-[#03236C] flex sm:flex-row flex-col justify-between items-center">
        <div>
          <h3 className="font-bold sm:text-[40px] text-[32px] text-white leading-[48px]">
            Transforming Ideas into Tech <br className="sm:flex hidden" />{" "}
            Solutions
          </h3>
          <p className="text-[18px] leading-[24px] sm:mt-8 my-6 text-white">
            Contact us today to discuss your tech needs or start selling online
          </p>
        </div>
        <div>
          <form onSubmit={handleSubscribe}>
            <div className="flex gap-4 items-center">
              <div className="sm:w-[396px] w-[80%] h-[48px] bg-white rounded-[8px]">
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
                  className="bg-[#FFC80B] hover:bg-black text-black shadow shadow-black-600/25 hover:shadow-black-600/75 px-6 py-3 rounded-[8px] sm:rounded-[8px]"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
          <h5 className="text-xs text-white mt-4">
            By clicking submit youre confirming that you agree with our Terms
            and Conditions.
          </h5>
        </div>
      </div>
    </div>
  )
}

export default CTA
