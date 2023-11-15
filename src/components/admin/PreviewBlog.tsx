/* eslint-disable react-hooks/exhaustive-deps */
import { useFormCtx } from "@/context/FormContext";
import parse from "html-react-parser";
import { useEffect } from "react";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { services } from "../../app/(Public-Routes)/services/serviceItem";

const PreviewBlog = () => {
  const { formData, setOpenPreview, openPreview, coverImg } = useFormCtx();
  const content = formData.content;

  useEffect(() => {
    console.log(openPreview);
    if (openPreview) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenPreview(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openPreview, setOpenPreview]);

  return (
    <>
      <div className="fixed min-h-screen w-full bg-black/50 top-0 left-0 z-20" />
      <section className="w-[90%] min-h-[90vh] fixed bg-white z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !overflow-y-scroll">
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
