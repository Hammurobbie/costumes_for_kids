import React, { useRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

const canvasStyles = {
  border: "none",
  borderRadius: 0,
  borderWidth: 0,
  height: "100%",
};

const SketchPad = ({ curStrokeColor }) => {
  console.log(curStrokeColor);
  const canvas = useRef();
  return (
    <div className="w-full flex flex-col justify-center bg-salmon p-4 py-5 border-dark border-4 shadow-dark shadow-md">
      <h2 className="text-2xl font-bold text-dark text-center">
        Let's Draw 🎨
      </h2>
      <div className="h-full my-4 border-dark border-2 shadow-dark shadow-sm">
        <ReactSketchCanvas
          ref={canvas}
          canvasStyles={canvasStyles}
          strokeWidth={5}
          canvasColor={"#feeca9"}
          strokeColor={curStrokeColor ? curStrokeColor : "#f58094"}
          height="60vh"
        />
      </div>
      <div className="flex w-full justify-between">
        <button
          onClick={() => {
            canvas.current.clearCanvas();
          }}
          className="w-1/4 bg-salmon-alt border-2 shadow-sm border-dark hover:bg-salmon focus:bg-salmon text-dark font-bold py-2"
        >
          Clear
        </button>
        <button
          onClick={() => {
            canvas.current.undo();
          }}
          className="w-1/4 bg-tangerine-alt border-2 shadow-sm border-dark hover:bg-tangerine focus:bg-tangerine text-dark font-bold py-2"
        >
          Undo
        </button>
        <button
          onClick={() => {
            canvas.current.redo();
          }}
          className="w-1/4 bg-lime border-2 shadow-sm border-dark hover:bg-lime-alt focus:bg-lime-alt text-dark font-bold py-2"
        >
          Redo
        </button>
      </div>
    </div>
  );
};

export default SketchPad;
