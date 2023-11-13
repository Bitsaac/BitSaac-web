import React, { useState } from "react";
import { BsCamera } from "react-icons/bs";
import Editor from "./Editor";

type CategoriesProps = {
  category:
    | "select"
    | "marketing"
    | "design"
    | "development"
    | "social"
    | "technology";
};
const categories: CategoriesProps[] = [
  { category: "select" },
  { category: "marketing" },
  { category: "design" },
  { category: "development" },
  { category: "social" },
  { category: "technology" },
];

type FormData = {
  email: string;
  project: string;
  category: string;
  size: string;
  image: string | null;
};

const initialFormData: FormData = {
  email: "",
  project: "",
  category: "select",
  size: "",
  image: null,
};
const CreateBlog = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div className="w-full flex flex-col gap-x-5 mt-10 lg:mt-20">
      <div className="flex w-full justify-between p-1">
        <form className="flex-col-reverse lg:flex-row max-lg:gap-y-7  flex w-full gap-2 items-start  xl:gap-x-10 ">
          <div className="flex w-full min-w-[70%] xl:min-w-[65%] flex-col gap-2 p-2 rounded-xl  transition-all duration-200 focus-within:duration-700  focus-within:shadow-[0_10px_40px_0_rgba(0,0,0,0.23)] shadow-[0_0_10px_0_rgba(0,0,0,0.2)] ">
            <div className=" flex w-full gap-4 justify-between ">
              <div className="[&>label]:font-medium flex w-[80%] flex-col gap-2 gap-y-5">
                <div className="flex gap-y-1 flex-col">
                  <label
                    htmlFor="title"
                    className="font-medium text-gray-800 mb-1"
                  >
                    Title:
                  </label>
                  <input
                    id="title"
                    type="text"
                    placeholder="Title"
                    className="w-full p-2 outline-none rounded-md  border border-gray-200 py-3 focus:border-primary focus:valid:border-primary "
                  />
                </div>

                <div className="flex gap-y-1 flex-col">
                  <label
                    htmlFor="sub-title"
                    className="font-medium text-gray-800 mb-1"
                  >
                    Sub Title:
                  </label>
                  <textarea
                    id="sub-title"
                    placeholder="Sub Title"
                    className="w-full p-2 outline-none rounded-md  border border-gray-200 py-3 focus:border-primary focus:valid:border-primary  resize-none h-[181px]"
                  />
                </div>
              </div>
              <div className="flex gap-y-1 flex-col w-[20%]">
                <label
                  htmlFor="category"
                  className="font-medium text-gray-800 mb-1"
                >
                  Category
                </label>
                <select
                  id="category"
                  required
                  name="category"
                  className="w-full  p-2 outline-none rounded-md  border border-gray-200 py-3 focus:border-primary focus:valid:border-primary  transition-all duration-300 capitalize text-gray-700"
                  defaultValue={"select"}
                >
                  {categories.map((category) => (
                    <option
                      disabled={category.category === "select"}
                      key={category.category}
                      value={category.category}
                    >
                      {category.category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <span>0/50 characters</span>
            </div>
          </div>
          <div className="flex w-full flex-col gap-3 p-2 rounded-xl  transition-all duration-200 hover:duration-700  hover:shadow-[0_10px_40px_0_rgba(0,0,0,0.23)] shadow-[0_0_10px_0_rgba(0,0,0,0.2)] h-full justify-between lg:py-4">
            <p className="font-medium text-gray-800">Add Cover Image</p>

            <div className="flex flex-col w-full items-center justify-center bg-surface400 rounded py-5 px-4 lg:px-6 gap-y-4 h-full">
              <label
                htmlFor="image"
                className="flex h-[70px] w-[70px] bg-surface/200 items-center justify-center rounded-full text-3xl text-gray-600"
              >
                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
                <BsCamera />
              </label>
              <p className="text-gray-600 w-full text-center text-sm">
                Upload photo of the post you want to add to your blog
              </p>
            </div>

            <div className="flex flex-col mt-4">
              <label
                htmlFor="image-alt"
                className="font-medium text-gray-800 mb-2"
              >
                Image ALT text /Credits:
              </label>
              <input
                id="image-alt"
                placeholder="Image alt/credits...."
                className="w-full p-2 outline-none rounded-md  border border-gray-200 py-3 focus:border-primary focus:valid:border-primary "
              />
            </div>
          </div>
        </form>
      </div>
      <div className="flex w-full md:mt-10 justify-center md:min-h-screen">
        <Editor />
        <div className="flex md:hidden w-full justify-center items-center mt-20 border border-gray-900 py-2 sm:text-2xl">
          <p>Please use a bigger screen to use the editor</p>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
