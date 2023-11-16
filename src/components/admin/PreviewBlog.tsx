/* eslint-disable react-hooks/exhaustive-deps */
import { FormData, useFormCtx } from "@/context/FormContext";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { services } from "../../app/(Public-Routes)/services/serviceItem";
import LoadingSpinner from "../loaders/LoadingSpinner";
import PreviewSkeleton from "../skeleton/PreviewSkeleton";
import cn from "@/utils/tailwind";
import { BiLinkAlt } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
export const initialFormData: FormData = {
  title: "",
  subTitle: "",
  category: "select",
  credits: "",
  image: null,
  content: "",
  author: "Avi Chukwu",
  contentType: "blog",
};
const PreviewBlog = () => {
  const { openPreview, setOpenPreview, coverImg } = useFormCtx();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [contentLoadin, setContentLoadin] = useState(true);
  const [imgLoading, setImgLoading] = useState(true);
  const content = formData.content;

  useEffect(() => {
    const local = localStorage.getItem("formData");
    if (local) {
      const localData = JSON.parse(local);
      setFormData(localData);
    }
    const isLoaded = localStorage.getItem("contentloaded");
    if (isLoaded && isLoaded === "loaded") {
      setContentLoadin(false);
      return;
    }
    if (!isLoaded) {
      setTimeout(() => {
        setContentLoadin(false);
        localStorage.setItem("contentloaded", "loaded");
      }, 4000);
    }
  }, []);

  return (
    <>
      <div className="fixed min-h-screen w-full bg-black/10 top-0 left-0 z-20 backdrop-blur-md" />
      <section className="w-full h-screen fixed flex justify-center items-center  z-30 max-container top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <span
          onClick={() => setOpenPreview(false)}
          className="fixed top-0 right-1 min-[1440px]:-right-4 min-[1440px]:top-1 min-[1440px]:text-5xl  cursor-pointer  text-4xl rounded-full  flex justify-center items- p-1 text-black z-40 flex-col  items-center"
        >
          <MdClose />
          <span className="text-sm -mt-2 min-[1440px]:text-lg min-[1440px]:-mt-3 max-sm:opacity-0">
            esc
          </span>
        </span>
        <div className="sm:w-[93%] sm:h-[90vh] h-screen w-full flex flex-col px-4 py-8 lg:bg-white/70 bg-white/90  !overflow-y-auto shadow-[0_1px_40px_0_rgba(0,0,0,0.23)] ">
          <div className=" w-full flex flex-col lg:flex-row justify-between  gap-x-4 gap-y-6">
            <div className="flex flex-col  items-start justify-between w-full lg:w-1/2    lg:min-h-[400px] lg:max-h-[500px] gap-y-5 ">
              <p className="text-sm font-medium">
                Latest {">"}{" "}
                <span className="capitalize">{formData.category}</span>
              </p>

              <h1
                className={cn(
                  " uppercase font-Inter max-lg:w-full max-lg:text-center max-sm:mt-6",
                  formData.title.length > 20
                    ? "text-xl lg:text-3xl max-[585px]:text-lg "
                    : "text-xl sm:text-3xl lg:text-4xl",
                )}
              >
                {formData.title}
              </h1>

              <div className="flex lg:flex-col max-sm:hidden lg:gap-y-5 max-lg:w-full max-lg:justify-between gap-y-2 mt-5 lg:mt-0">
                <div>
                  <p>
                    By <b>{formData.author}</b>
                  </p>
                  <p>
                    Oct 10, 2023 • <span>5min read</span>
                  </p>
                </div>
                <div className="flex flex-col md:gap-y-5 gap-y-2">
                  <strong>Share this post</strong>
                  <div className="flex items-center gap-x-5">
                    <BiLinkAlt />
                    <FaLinkedinIn />
                    <RiTwitterXLine />
                    <FaFacebookF />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center my-4 mb-8 lg:my-12 items-center relative w-full lg:w-1/2 h-full sm:min-h-[450px]">
              {!contentLoadin && (
                <div>
                  <Image
                    src={coverImg.src ?? ""}
                    width={700}
                    height={500}
                    alt={coverImg.name || "cover"}
                    className="rounded-xl"
                    onLoad={() => setImgLoading(false)}
                  />
                  <strong className="border-l-2 border-gray-800 pl-2 mt-2 text-sm text-gray-700">
                    {formData.credits}
                  </strong>
                  <div className="flex sm:hidden w-full justify-between gap-y-2 mt-5 ">
                    <div className="flex flex-col gap-y-2">
                      <p className="text-base">
                        By <b>{formData.author}</b>
                      </p>
                      <p className="text-sm">
                        Oct 10, 2023 • <b>5min read</b>
                      </p>
                    </div>
                    <div className="flex flex-col md:gap-y-5 gap-y-2">
                      <span>Share this post</span>
                      <div className="flex items-center gap-x-3 text-lg">
                        <BiLinkAlt />
                        <FaLinkedinIn />
                        <RiTwitterXLine />
                        <FaFacebookF />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {imgLoading && (
                <div
                  className="w-full max-h-[500px] h-full max-w-[700px] rounded-xl bg-gradient-to-r from-transparent via-black/before:via-black/20 to-transparent absolute  before:absolute before:inset-0
    before:-translate-x-full
    before:animate-shimmer
    before:bg-gradient-to-r
    before:from-transparent before:via-black/20 before:to-transparent isolate overflow-hidden shadow-lg shadow-black/20 before:border-t-2 before:border-b-2 before:border-primary"
                />
              )}
            </div>
          </div>

          {contentLoadin && <PreviewSkeleton />}

          {!contentLoadin && (
            <div className="flex w-full flex-col my-10 lg:my-20">
              <div className="flex w-full justify-center mb-8">
                <h2 className="text-2xl">{formData.subTitle}</h2>
              </div>
              {parse(content)}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PreviewBlog;
