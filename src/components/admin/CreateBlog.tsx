import React from "react";

const CreateBlog = () => {
  return (
    <div className="w-full flex flex-col gap-x-5 mt-10 lg:mt-20">
      <div className="flex w-full justify-between">
        <form className="flex w-[70%] gap-2 items-start">
          <div className="flex w-[80%] flex-col gap-2">
            <label htmlFor="title">
              Title:
              <input
                id="title"
                type="text"
                placeholder="Title"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </label>

            <label htmlFor="sub-title">
              Sub Title:
              <textarea
                id="sub-title"
                placeholder="Title"
                className="w-full border border-gray-300 p-2 rounded resize-none h-[181px]"
              />
            </label>
            <div className="w-full flex justify-end">
              <span>0/50 characters</span>
            </div>
          </div>
          <label htmlFor="category">
            Category
            <select
              id="category"
              required
              name="category"
              className="w-full p-2 outline-none rounded-md  border border-gray-100 py-3 focus:border-primary focus:valid:border-green-400  transition-all duration-300"
            >
              <option value="select" disabled>
                Select Category
              </option>
              <option value="1">Web</option>
              <option value="2">Mobile</option>
              <option value="3">UI/UX</option>
            </select>
          </label>
        </form>

        <div className="flex w-[20%]"></div>
      </div>
      <div className="flex"></div>
    </div>
  );
};

export default CreateBlog;
