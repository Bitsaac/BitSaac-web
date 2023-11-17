/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useRouter } from "next/navigation";
import React, { createContext, useEffect, useMemo, useState } from "react";

export type CategoriesProps = {
  category:
    | "select"
    | "marketing"
    | "design"
    | "development"
    | "social"
    | "technology";
};
export type FormData = {
  title: string;
  subTitle: string;
  author: string;
  image: string | null;
  credits: string;
  contentType: "blog" | "portfolio" | "newsletter";
  category: CategoriesProps["category"];
  content: string;
};

interface FormContextProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  openPreview: boolean;
  setOpenPreview: React.Dispatch<React.SetStateAction<boolean>>;
  shouldSubmit: boolean;
  setShouldSubmit: React.Dispatch<React.SetStateAction<boolean>>;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  coverImg: { src: string; name: string };
  setCoverImg: React.Dispatch<
    React.SetStateAction<{ src: string; name: string }>
  >;
  isForPreview: boolean;

  BASE_URL: string;
}
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
export const FormContext = createContext<FormContextProps>(
  {} as FormContextProps,
);

const FormContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [openPreview, setOpenPreview] = useState(false);
  const [coverImg, setCoverImg] = useState<{ src: string; name: string }>({
    src: "",
    name: "",
  });
  const BASE_URL = "https://bitsaac-api.onrender.com/api/v1";

  const isForPreview =
    formData.title === "" ||
    formData.subTitle === "" ||
    formData.content === "" ||
    formData.category === "select" ||
    formData.content === "" ||
    formData.subTitle.length > 50 ||
    formData.image === null ||
    !formData.image;
  const router = useRouter();

  useEffect(() => {
    const imgFromLocal = localStorage.getItem("cover-image");
    const contentFromLocal = localStorage.getItem("content");
    const savedForm = localStorage.getItem("formData");

    if (contentFromLocal) {
      setFormData((prev) => ({
        ...prev,
        content: JSON.parse(contentFromLocal),
      }));
    }
    if (imgFromLocal) {
      const parsed: { src: string; name: string } = JSON.parse(imgFromLocal);
      setCoverImg({
        src: parsed.src,
        name: parsed.name,
      });
      setFormData((prev) => ({
        ...prev,
        image: parsed.src,
      }));
    }

    if (savedForm) {
      const newForm: FormData = JSON.parse(savedForm);
      setFormData((prev) => ({
        ...prev,
        title: newForm.title,
        category: newForm.category,
        subTitle: newForm.subTitle,
        credits: newForm.credits,
      }));
    }
  }, []);

  useEffect(() => {
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
  }, [openPreview]);

  const value = useMemo(
    () => ({
      isLoading,
      setIsLoading,
      formData,
      setFormData,
      coverImg,
      setCoverImg,
      isForPreview,
      BASE_URL,
      openPreview,
      setOpenPreview,
      shouldSubmit,
      setShouldSubmit,
    }),
    [
      formData,
      coverImg,
      isLoading,
      isForPreview,
      openPreview,
      setOpenPreview,
      shouldSubmit,
    ],
  );

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useFormCtx = () => {
  const ctx = React.useContext(FormContext);

  if (!ctx)
    throw new Error("useContentCtx must be used within a FormContextProvider");

  return ctx;
};

export default FormContextProvider;
