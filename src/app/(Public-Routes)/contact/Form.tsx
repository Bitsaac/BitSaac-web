"use client"
import { useState } from "react"
import toast from "react-hot-toast"

const Form = () => {
  const [name, setName] = useState("")
  const BASE_URL = "https://bitsaac-api.onrender.com/api/v1/"
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loadingStatus, setLoadingStatus] = useState<boolean>(false)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const target = e.target as typeof e.target & {
        email: { value: string }
        name: { value: string }
        message: { value: string }
        subject: { value: string }
      }
      const email = target.email.value
      const name = target.name.value
      const message = target.message.value
      const subject = target.subject.value

      setLoadingStatus(true)
      const response = await fetch(`${BASE_URL}contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      })

      if (response.ok) {
        console.log(response)
        toast.success("Subscrition successfull!")
      } else {
        console.error(
          `Failed to subscribe. Server responded with status: ${response.status}`
        )
        toast.error("Failed to subscribe. Please try again.")
      }
      setLoadingStatus(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="xl:w-[616px] w-full  flex flex-col gap-[24px] items-start"
    >
      <span className="w-full">
        <p>Name</p>
        <input
          required
          type="text"
          name="name"
          placeholder="Enter Full name here ...."
          className="rounded-lg p-[12px] outline-0 border border-black mt-[8px] w-full"
        />
      </span>
      <span className="w-full">
        <p>Email</p>
        <input
          required
          type="email"
          name="email"
          placeholder="Enter Email here ...."
          className="rounded-lg p-[12px] outline-0 border border-black mt-[8px] w-full"
        />
      </span>
      <span className="w-full">
        <p>Subject</p>
        <input
          required
          type="text"
          name="subject"
          placeholder="Email Subject ...."
          className="rounded-lg p-[12px] outline-0 border border-black mt-[8px] w-full"
        />
      </span>
      <span className="w-full">
        <p>Message</p>
        <textarea
          required
          rows={4}
          cols={50}
          name="message"
          placeholder="Enter email here ...."
          className="rounded-lg p-[12px] outline-0 border border-black mt-[8px] w-full"
        ></textarea>
      </span>
      <span className="flex items-center gap-[12px]">
        <input
          type="checkbox"
          name="subscribe"
        />
        <label htmlFor="checkbox">Subscribe to our newsletter</label>
      </span>
      {loadingStatus ? (
        <button
          type="button"
          className="px-[24px] py-[12px] rounded-lg border border-[#4D61F4] bg-[#4D61F4] text-white"
        >
          Submitting...
        </button>
      ) : (
        <button
          type="submit"
          className="px-[24px] py-[12px] rounded-lg border border-[#4D61F4] bg-[#4D61F4] text-white"
        >
          Submit
        </button>
      )}
    </form>
  )
}

export default Form
