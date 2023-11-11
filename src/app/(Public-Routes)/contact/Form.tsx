import React from "react"

const Form = () => {
  return (
    <div className="xl:w-[616px] w-full  flex flex-col gap-[24px] items-start">
      <span className="w-full">
        <p>Name</p>
        <input
          type="text"
          placeholder="Enter Full name here ...."
          className="rounded-lg p-[12px] outline-0 border border-black mt-[8px] w-full"
        />
      </span>
      <span className="w-full">
        <p>Email</p>
        <input
          type="text"
          placeholder="Enter Email here ...."
          className="rounded-lg p-[12px] outline-0 border border-black mt-[8px] w-full"
        />
      </span>
      <span className="w-full">
        <p>Name</p>
        <textarea
          rows={4}
          cols={50}
          placeholder="Enter email here ...."
          className="rounded-lg p-[12px] outline-0 border border-black mt-[8px] w-full"
        ></textarea>
      </span>
      <span className="flex items-center gap-[12px]">
        <input type="checkbox" />
        <label htmlFor="checkbox">Radio</label>
      </span>

      <button className="px-[24px] py-[12px] rounded-lg border border-[#4D61F4] bg-[#4D61F4] text-white">
        Submit
      </button>
    </div>
  )
}

export default Form
