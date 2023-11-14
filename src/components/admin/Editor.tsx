"use client";

import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import LoadingSpinner from "../loaders/LoadingSpinner";

const QuillEditor = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <LoadingSpinner />,
});

export default function Home() {
  const [content, setContent] = useState("");

  const quillModules = {
    toolbar: [
      [{ header: "1" }, { header: [2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
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
    "image",
    "align",
    "color",
    "code-block",
  ];

  const handleEditorChange = (newContent: React.SetStateAction<string>) => {
    setContent(newContent);
  };
  const editorContent = useMemo(() => content, [content]);
  useEffect(() => {
    if (!editorContent) return;

    localStorage.setItem("content", JSON.stringify(editorContent));
  }, [editorContent]);
  console.log(content);

  return (
    <div className="hidden md:flex items-center flex-col w-full overflow-x-hidden ">
      <div className="min-h-[500px] w-[90%]">
        {" "}
        <QuillEditor
          value={content}
          onChange={handleEditorChange}
          modules={quillModules}
          formats={quillFormats}
          placeholder="Start typing here..."
          className="w-full h-full mt-10 bg-white"
        />
      </div>
      {/* <div className="flex w-full justify-center flex-wrap">
        <p>{content}</p>
      </div> */}
    </div>
  );
}
