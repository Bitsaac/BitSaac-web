import { toast } from "react-toastify";

const MAX_SIZE = 2 * 1024 * 1024; // 2MB in bytes
export const ImageUpload = async (file: File) => {
  if (!file) return;
  if (file && file.size > MAX_SIZE) return alert("File size too large");

  const uploadId = toast.loading("Uploading image...");

  const reader = new FileReader();
  reader.readAsDataURL(file);

  const imageData = new FormData();
  imageData.append("file", file as string | Blob);
  imageData.append("upload_preset", "bitsaac");
  imageData.append("cloud_name", process.env.NEXT_PUBLIC_CLOUD_NAME!);
  imageData.append("api_key", process.env.NEXT_PUBLIC_CLOUD_API_KEY!);
  imageData.append("api_secret", process.env.NEXT_PUBLIC_CLOUD_API_SECRET!);
  imageData.append("folder", "content-Image");

  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: imageData,
      },
    );
    const data = await res.json();

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
    return data.url;
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
