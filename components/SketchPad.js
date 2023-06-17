import React, { useRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import BackButton from "./BackButton";

const canvasStyles = {
  border: "none",
  borderRadius: 0,
  borderWidth: 0,
  height: "100%",
};

const SketchPad = ({ curStrokeColor, curBgColor, penType }) => {
  const canvas = useRef();
  return (
    <div className="relative w-full flex flex-col justify-center bg-salmon p-4 py-5 border-dark border-4 shadow-dark shadow-md">
      <h1 className="text-2xl font-bold text-dark text-center ml-7 sm:ml-0">
        Sketchpad 🎨
      </h1>
      <BackButton />
      <div className=" my-4 border-dark border-2 shadow-dark shadow-sm">
        <ReactSketchCanvas
          ref={canvas}
          canvasStyles={canvasStyles}
          strokeWidth={penType ? penType : 5}
          canvasColor={curBgColor ? curBgColor : "#feeca9"}
          strokeColor={curStrokeColor ? curStrokeColor : "#f58094"}
          height="55vh"
        />
      </div>
      <div className="flex w-full justify-between">
        <button
          onClick={() => {
            canvas.current.clearCanvas();
          }}
          className="w-20 px-1 sm:w-32 bg-salmon-alt border-2 shadow-sm border-dark hover:bg-salmon focus:bg-salmon text-dark font-bold py-2"
        >
          Clear
        </button>
        <button
          onClick={() => {
            canvas.current.undo();
          }}
          className="w-20 px-1 sm:w-32 bg-tangerine-alt border-2 shadow-sm border-dark hover:bg-tangerine focus:bg-tangerine text-dark font-bold py-2"
        >
          Undo
        </button>
        <button
          onClick={() => {
            canvas.current.redo();
          }}
          className="w-20 px-1 sm:w-32 bg-lime border-2 shadow-sm border-dark hover:bg-lime-alt focus:bg-lime-alt text-dark font-bold py-2"
        >
          Redo
        </button>
      </div>
    </div>
  );
};

export default SketchPad;
