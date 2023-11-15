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
    <div className="bg-[#03236C]">
      <Container className="max-w-[100%] place-content-start gap-7 py-[70px]">
        <div>
          <h4 className="font-Inter font-semibold md:font-bold text-[1.5rem] md:text-[2.2rem] md:leading-[40px] text-[#fff]">
            Transforming Ideas into Tech Solutions
          </h4>
          <p className="font-Inter mt-1 text-white">
            Contact us today to discuss your tech needs or start selling online
          </p>
        </div>
        <form
          onSubmit={handleSubscribe}
          className="flex gap-2 items-end flex-col w-full"
        >
          <div className="w-full flex gap-2">
            <input
              type="text"
              placeholder="Enter email here..."
              className="w-[80%] placeholder-[#505050] outline-none pl-3 h-[45px] rounded-lg font-Inter"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <button
              type="submit"
              className="bg-[#FFC80B] font-Inter text-[15px] h-[45px] rounded-lg min-w-[90px] max-w-[120px]"
            >
              Submit
            </button>
          </div>
          <p className="self-start text-[13px] text-white">
            By clicking submit you&lsquo;re confirming that you agree with our
            Terms and Conditions.
          </p>
        </form>
      </Container>
    </div>
  )
}

export default CTA
