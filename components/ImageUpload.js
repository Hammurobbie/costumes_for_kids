import React, { useState } from "react";
import cx from "classnames";
import Image from "next/image";
import { Threadline } from "../icons/Threadline";

const ImageUpload = ({ setUserImages, userImages }) => {
  const initGalleryMessage = {
    type: "",
    message: "",
  };
  const [galleryMessage, setGalleryMessage] = useState(initGalleryMessage);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageHovered, setImageHovered] = useState(false);

  const handleClearImageForm = (e) => {
    setSelectedImage(null);
    document.getElementById("imageUpload").value = "";
  };

  const handleUploadImage = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleImageSubmit = () => {
    setGalleryMessage({
      type: "success",
      message: "✨ We got your image! ✨",
    });
    // setGalleryMessage({
    //   type: "error",
    //   message: "😮 Oops! Please try uploading again 😮",
    // });
    setTimeout(() => {
      setGalleryMessage(initGalleryMessage);
    }, 5000);
    const newImgObj = {
      url: selectedImage,
      alt: selectedImage?.name || "user img",
    };
    setUserImages([newImgObj, ...userImages]);
    setSelectedImage(null);
    document.getElementById("imageUpload").value = "";
  };

  return (
    <div className="relative flex flex-col items-center mt-4">
      <h2>
        Upload an image
        <span className="relative">
          <Threadline className="fill-dark w-40 absolute right-0 -bottom-1.5" />
        </span>
      </h2>
      <div
        className={cx(
          "flex justify-center items-center bg-purple-alt h-28 w-full max-w-[300px] mt-2 border-dark border-4 shadow-dark shadow-sm transition-all overflow-hidden",
          {
            "border-dashed shadow-none": imageHovered,
          }
        )}
      >
        {selectedImage ? (
          <Image
            alt={selectedImage?.name || "not found"}
            width={320}
            height={200}
            src={URL.createObjectURL(selectedImage)}
            className="object-cover object-center"
          />
        ) : imageHovered ? (
          "Drop Image"
        ) : (
          "Click or drag image here"
        )}
      </div>
      <input
        type="file"
        name="imageUpload"
        id="imageUpload"
        onChange={handleUploadImage}
        onDragEnter={() => setImageHovered(true)}
        onDragLeave={() => setImageHovered(false)}
        onDrop={() => setImageHovered(false)}
        className="bg-purple opacity-0 absolute top-7 h-28 w-full cursor-pointer"
      />
      {galleryMessage?.message && !selectedImage ? (
        <em
          className={cx("h-7 text-success mt-3 text-center", {
            "opacity-0": !galleryMessage?.message,
            "text-error": galleryMessage?.type === "error",
          })}
        >
          {galleryMessage?.message}
        </em>
      ) : selectedImage ? (
        <div className="flex justify-between w-full mt-4">
          <button
            className="w-32 hover:bg-salmon"
            onClick={handleClearImageForm}
          >
            Cancel
          </button>
          <button
            className="w-32 hover:bg-lime-alt"
            onClick={handleImageSubmit}
          >
            Submit
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ImageUpload;
