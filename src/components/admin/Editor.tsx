"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import LoadingSpinner from "../loaders/LoadingSpinner";
import { useFormCtx } from "@/context/FormContext";

import { toast } from "react-toastify";
import { ImageUpload } from "@/utils/image-uploader";

import ReactQuill, { Quill } from "react-quill";

export default function Editor() {
  const [isMounted, setIsMounted] = useState(false);
  const [content, setContent] = useState("");
  const { setFormData } = useFormCtx();

  const quillModules = {
    toolbar: [
      [{ header: "2" }, { header: [3, 4, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      [{ align: [] }],
      [{ color: [] }],
      ["code-block"],

      ["clean"],
    ],
    clipboard: {
      matchVisual: true,
    },
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    // "image",
    "align",
    "color",
    "code-block",
  ];
  const handleEditorChange = (newContent: React.SetStateAction<string>) => {
    setContent(newContent);
  };
  useEffect(() => {
    const contentFromLocal = localStorage.getItem("content");
    if (contentFromLocal) {
      setContent(JSON.parse(contentFromLocal));
    }
  }, []);
  const editorContent = useMemo(() => content, [content]);
  useEffect(() => {
    if (!editorContent) return;
    setFormData((prev) => ({ ...prev, content: editorContent }));

    localStorage.setItem("content", JSON.stringify(editorContent));
  }, [editorContent, setFormData]);

  return (
    <div className="hidden md:flex  flex-col w-full overflow-hidden max-h-[600px] h-[500px] transition-all duration-200 focus-within:duration-700  focus-within:shadow-[0_10px_40px_0_rgba(0,0,0,0.23)] shadow-[0_0_10px_0_rgba(0,0,0,0.2)] rounded-[20px]">
      {" "}
      <ReactQuill
        value={content}
        onChange={handleEditorChange}
        modules={quillModules}
        formats={quillFormats}
        placeholder="Start typing here..."
        className="w-full  "
        style={{
          height: "100%",
          maxHeight: "500px",
          margin: "0",
          padding: "0 ",
          overflowY: "hidden",
        }}
      />
      {/* <div className="flex w-full justify-center flex-wrap">
        <p>{content}</p>
      </div> */}
    </div>
  );
}
