"use client";

import React, { useEffect, useMemo, useState } from "react";
import { BsArrowRight, BsCamera } from "react-icons/bs";

import { MdClose } from "react-icons/md";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CategoriesProps, useFormCtx } from "@/context/FormContext";
import cn from "@/utils/tailwind";
import dynamic from "next/dynamic";
import LoadingSpinner from "../loaders/LoadingSpinner";
import PreviewBlog from "./PreviewBlog";

const Editor = dynamic(() => import("./Editor"), {
  ssr: false,
  loading: () => <LoadingSpinner />,
});

const categories: CategoriesProps[] = [
  { category: "select" },
  { category: "marketing" },
  { category: "design" },
  { category: "development" },
  { category: "social" },
  { category: "technology" },
];

const MAX_SIZE = 2 * 1024 * 1024; // 2MB in bytes
const CreateBlog = () => {
  const [isError, setIsError] = useState(false);
  const {
    formData,
    setFormData,
    coverImg,
    setCoverImg,
    isDisabled,
    openPreview,
    isLoading,
    setIsLoading,
    setOpenPreview,
  } = useFormCtx();
  const subTitleLength = formData.subTitle.length;

  const handleImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file && file.size > MAX_SIZE) return alert("File size too large");

    const uploadId = toast.loading("Uploading image...");

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setCoverImg({
        src: reader.result as string,
        name: file.name,
      });
    };
    const imageData = new FormData();
    imageData.append("file", file as string | Blob);
    imageData.append("upload_preset", "bitsaac");
    imageData.append("cloud_name", process.env.NEXT_PUBLIC_CLOUD_NAME!);
    imageData.append("api_key", process.env.NEXT_PUBLIC_CLOUD_API_KEY!);
    imageData.append("api_secret", process.env.NEXT_PUBLIC_CLOUD_API_SECRET!);
    imageData.append("folder", "Cover-Image");

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: imageData,
        },
      );
      const data = await res.json();
      setFormData({ ...formData, image: data.url });
      const imgDetail = {
        src: data.url,
        name: file.name,
      };

      localStorage &&
        localStorage.setItem("cover-image", JSON.stringify(imgDetail));
      if (res.ok) {
        toast.update(uploadId, {
          render: "Image uploaded successfully!",
          type: "success",
          isLoading: false,
        });
      } else {
        toast.update(uploadId, {
          render: "Error uploading image",
          type: "error",
          isLoading: false,
        });
      }
    } catch (error: any) {
      toast.update(uploadId, {
        render: "Error uploading image",
        type: "error",
        isLoading: false,
      });
      console.log(error);
    } finally {
      window?.setTimeout(() => {
        toast.dismiss(uploadId);
      }, 2000);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formId = toast.loading("Publishing post...");

    try {
      const res = await fetch("/api/blog-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          title: formData.title,
          subTitle: formData.subTitle,
          author: formData.author,
          coverImage: formData.image,
          imageCredit: formData.credits,
          contentType: formData.contentType,
          category: formData.category,
          content: formData.content,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.status);
          console.log(data);
          if (data.status === 201) {
            toast.update(formId, {
              render: "Post published successfully!",
              type: "success",
              isLoading: false,
              autoClose: 5000,
            });
            setIsLoading(false);
          }
        });
    } catch (error: any) {
      toast.update(formId, {
        render: "Error publishing post",
        type: "error",
        isLoading: false,
        progress: 1,
      });
      setIsLoading(false);
      console.log(error);
    } finally {
      window?.setTimeout(() => {
        toast.dismiss(formId);
      }, 5000);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-x-5 mt-10 lg:mt-20">
      {openPreview && <PreviewBlog />}
      <ToastContainer />
      <div className="flex w-full justify-between p-1">
        <form
          onSubmit={handleSubmit}
          className=" flex-col max-lg:gap-y-7  flex w-full gap-2 items-start  xl:gap-x-10 "
        >
          <div className="flex-col-reverse lg:flex-row max-lg:gap-y-7  flex w-full gap-2 items-start  xl:gap-x-10 ">
            <div className="flex w-full min-w-[70%] xl:min-w-[65%] flex-col gap-2 p-2 rounded-xl  transition-all duration-200 focus-within:duration-700  focus-within:shadow-[0_10px_40px_0_rgba(0,0,0,0.23)] shadow-[0_0_10px_0_rgba(0,0,0,0.2)] h-full ">
              <div className=" flex w-full gap-4 justify-between max-md:w-full  flex-col h-full">
                <div className="[&>label]:font-medium flex w-full   gap-2 gap-y-5  max-[450px]:flex-col">
                  <div className="flex gap-y-1 flex-col  w-[80%] max-[450px]:w-full ">
                    <label
                      htmlFor="title"
                      className="font-medium text-gray-800 mb-1"
                    >
                      Title:
                    </label>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      required
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                      placeholder="Title"
                      className="w-full p-2 outline-none rounded-md  border border-gray-200 py-3 focus:border-primary focus:valid:border-primary "
                    />
                  </div>

                  <div className="flex gap-y-1 flex-col  max-[450px]:w-full ">
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
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
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
                <div className="flex gap-y-1 flex-col w-full">
                  <label
                    htmlFor="subTitle"
                    className="font-medium text-gray-800 mb-1"
                  >
                    Sub Title:
                  </label>
                  <textarea
                    id="subTitle"
                    name="subTitle"
                    required
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }
                    maxLength={50}
                    placeholder="Sub Title"
                    className={cn(
                      "w-full p-2 outline-none rounded-md  border border-gray-200 py-3     resize-none h-[120px] sm:h-[181px] transition-all duration-300",
                      subTitleLength > 50 ||
                        (subTitleLength < 10 && subTitleLength > 0)
                        ? "border-red-500"
                        : subTitleLength > 10 && subTitleLength <= 50
                        ? "border-green-500"
                        : "focus:valid:border-primary focus:border-primary",
                    )}
                  />
                </div>
                <div className="w-full flex justify-end">
                  <div className="flex justify-center items-center gap-x-2 font-medium text-gray-800  [&>span]:transition-all [&>span]:duration-500">
                    <span
                      className={cn(
                        subTitleLength > 50
                          ? "text-red-500"
                          : subTitleLength > 0 && subTitleLength <= 50
                          ? "text-green-500"
                          : "",
                      )}
                    >
                      {formData?.subTitle?.length}
                    </span>
                    <span className="bg-gray-600 w-[2px] h-[20px]" />
                    <span> 50 characters</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-3 p-2 rounded-xl  transition-all duration-200 hover:duration-700  hover:shadow-[0_10px_40px_0_rgba(0,0,0,0.23)] shadow-[0_0_10px_0_rgba(0,0,0,0.2)] h-full justify-between lg:py-4">
              <p className="font-medium text-gray-800">
                {coverImg.name ? coverImg.name : "Add Cover Image"}
              </p>

              <div className="flex flex-col w-full items-center justify-center bg-surface400 rounded py-5 px-4 lg:px-6 gap-y-4 h-full">
                {coverImg.src ? (
                  <div className="relative z-10">
                    <Image
                      src={coverImg.src}
                      height={500}
                      width={500}
                      alt="cover"
                    />
                    <span
                      onClick={() => {
                        setCoverImg({
                          src: "",
                          name: "",
                        });

                        localStorage && localStorage.removeItem("cover-image");
                      }}
                      className="absolute top-1 right-2 cursor-pointer font-bold text-xl bg-surface400 rounded-full h-[30px] w-[30px] flex justify-center items- p-1"
                    >
                      <MdClose />
                    </span>
                  </div>
                ) : (
                  <>
                    <label
                      htmlFor="image"
                      className="flex h-[70px] w-[70px] bg-surface/200 items-center justify-center rounded-full text-3xl text-gray-600 cursor-pointer"
                    >
                      <input
                        id="image"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImage}
                      />
                      <BsCamera />
                    </label>
                    <p className="text-gray-600 w-full text-center text-sm">
                      Upload photo of the post you want to add to your blog
                    </p>
                  </>
                )}
              </div>

              <div className="flex flex-col mt-4">
                <label
                  htmlFor="credits"
                  className="font-medium text-gray-800 mb-2"
                >
                  Image ALT text /Credits:
                </label>
                <input
                  id="credits"
                  name="credits"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="Image alt/credits...."
                  className="w-full p-2 outline-none rounded-md  border border-gray-200 py-3 focus:border-primary focus:valid:border-primary "
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex w-full md:mt-10 justify-center ">
            <Editor />
            <div className="flex md:hidden w-full justify-center items-center my-20 border border-gray-900 py-2 sm:text-2xl">
              <p>Please use a bigger screen to use the editor</p>
            </div>
          </div>
          <div className="hidden md:flex my-10 lg:my-20 w-full justify-center gap-x-8 [&>*]:text-2xl [&>*]:p-4 [&>*]:px-12 [&>*]:rounded-xl font-Inter">
            <button
              type="button"
              onClick={() => setOpenPreview(true)}
              role="dialog"
              aria-modal="true"
              disabled={formData.content.length === 0}
              className="border-[1.2px] px-16 border-[#181818]"
            >
              Preview
            </button>
            <button
              type="submit"
              disabled={isDisabled}
              className={cn(
                "bg-[#6248ff] text-white flex items-center justify-center gap-x-2 ",
                isDisabled
                  ? "!cursor-not-allowed opacity-80"
                  : "cursor-pointer",
              )}
            >
              {isLoading && (
                <div className="flex items-center justify-center">
                  <LoadingSpinner color="border-white" />
                </div>
              )}
              <span> {isLoading ? "Publishing..." : "Publish"}</span>
              {!isLoading && <BsArrowRight />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
