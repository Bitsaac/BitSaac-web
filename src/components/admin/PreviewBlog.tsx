/* eslint-disable react-hooks/exhaustive-deps */
import { FormData, useFormCtx } from "@/context/FormContext";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { services } from "../../app/(Public-Routes)/services/serviceItem";
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
  const content = formData.content;

  useEffect(() => {
    const local = localStorage.getItem("formData");
    if (local) {
      console.log(true);
      const localData = JSON.parse(local);
      setFormData(localData);
    }
  }, []);

  return (
    <>
      <div className="fixed min-h-screen w-full bg-black/50 top-0 left-0 z-20" />
      <section className="w-[90%] h-[90vh] fixed bg-white z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !overflow-y-scroll">
        <div className="flex flex-col px-4 py-8  w-full bg-black/ relative !overflow-y-auto">
          <div className="flex">
            <Image
              src={coverImg.src ?? ""}
              width={700}
              height={500}
              alt={coverImg.name || "cover"}
            />
          </div>
          {parse(content)}
          <span
            onClick={() => setOpenPreview(false)}
            className="absolute top-1 right-2 cursor-pointer font-bold text-xl bg-surface400 rounded-full h-[30px] w-[30px] flex justify-center items- p-1"
          >
            <MdClose />
          </span>
        </div>
      </section>
    </>
  );
};

export default PreviewBlog;
