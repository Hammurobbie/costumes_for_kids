import React, { useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import BackButton from "./BackButton";
import cx from "classnames";
import { DarkStars } from "../icons/DarkStars";
import { ZigZag } from "../icons/ZigZag";

const canvasStyles = {
  border: "none",
  borderRadius: 0,
  borderWidth: 0,
  height: "100%",
};

const SketchPad = ({ curStrokeColor, curBgColor, curPenType }) => {
  const initGalleryMessage = {
    type: "",
    message: "",
  };
  const [galleryMessage, setGalleryMessage] = useState(initGalleryMessage);
  const canvas = useRef();

  const handleSave = () => {
    setGalleryMessage({
      type: "success",
      message: "✨ We saved your sketch! ✨",
    });
    // setGalleryMessage({
    //   type: "error",
    //   message: "😮 Oops! Please try uploading again 😮",
    // });
    setTimeout(() => {
      setGalleryMessage(initGalleryMessage);
    }, 5000);
  };

  return (
    <div className="relative w-full flex flex-col justify-center bg-salmon p-4 py-5 border-dark border-4 shadow-dark shadow-md relative">
      <ZigZag className="fill-dark w-20 absolute -left-8 bottom-52 rotate-90" />
      <h1 className="text-2xl font-bold text-dark text-center ml-7 sm:ml-0">
        Sketchpad
        <span className="relative">
          <DarkStars className="fill-dark w-11 absolute -right-14 -top-4" />
        </span>
      </h1>
      <BackButton />
      <em
        className={cx("h-7 text-success text-center", {
          "opacity-0": !galleryMessage?.message,
          "text-error": galleryMessage?.type === "error",
        })}
      >
        {galleryMessage?.message}
      </em>
      <div className=" mb-4 border-dark border-2 shadow-dark shadow-sm">
        <ReactSketchCanvas
          ref={canvas}
          canvasStyles={canvasStyles}
          strokeWidth={curPenType}
          canvasColor={curBgColor}
          strokeColor={curStrokeColor}
          height="45vh"
        />
      </div>
      <div className="flex w-full justify-between">
        <button
          onClick={() => {
            canvas.current.clearCanvas();
          }}
          className="w-16 px-1 sm:w-32 bg-salmon-alt border-2 shadow-sm border-dark hover:bg-salmon focus:bg-salmon text-dark font-bold py-2"
        >
          Clear
        </button>
        <button
          onClick={() => {
            canvas.current.undo();
          }}
          className="w-16 px-1 sm:w-32 bg-tangerine-alt border-2 shadow-sm border-dark hover:bg-tangerine focus:bg-tangerine text-dark font-bold py-2"
        >
          Undo
        </button>
        <button
          onClick={() => {
            canvas.current.redo();
          }}
          className="w-16 px-1 sm:w-32 bg-lime border-2 shadow-sm border-dark hover:bg-lime-alt focus:bg-lime-alt text-dark font-bold py-2"
        >
          Redo
        </button>
        <button
          onClick={handleSave}
          className="w-16 px-1 sm:w-32 bg-lime-alt border-2 shadow-sm border-dark hover:bg-lime-alt focus:bg-lime-alt text-dark font-bold py-2"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SketchPad;
