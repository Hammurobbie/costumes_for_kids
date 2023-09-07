import React, { useState } from "react";
import cx from "classnames";
import { Dots2 } from "../icons/Dots2";
import { Lines } from "../icons/Lines";

const ColorPalette = ({
  setCurStrokeColor,
  setCurBgColor,
  setPenType,
  curStrokeColor,
  curBgColor,
  curPenType,
}) => {
  const [curSetting, setCurSetting] = useState("fg-color");

  const colors = [
    {
      name: "lavender",
      value: "#b5d1fa",
    },
    {
      name: "lime",
      value: "#b0f7d5",
    },
    {
      name: "salmon",
      value: "#f58094",
    },
    {
      name: "lemon",
      value: "#feeca9",
    },
  ];

  const handleSettingsChange = (e) => {
    setCurSetting(e.target.name);
  };

  const handlePenChange = (size) => {
    setPenType(size);
    setCurSetting("fg-color");
  };

  return (
    <div className="w-full flex flex-col justify-around bg-salmon p-4 py-5 border-dark border-4 shadow-dark shadow-md relative">
      <Dots2 className="fill-dark w-8 absolute -right-1 -bottom-1" />
      <Lines className="fill-dark w-8 absolute -left-3 bottom-12" />
      <div className="flex w-full justify-around mb-5">
        <div className="text-xs flex items-center">
          <label className="mr-3" htmlFor="bg-color">
            Color
          </label>
          <input
            type="checkbox"
            name="fg-color"
            checked={curSetting === "fg-color"}
            onChange={handleSettingsChange}
            className="cursor-pointer accent-lime-alt scale-150 m-1 outline"
          />
        </div>
        <div className="text-xs flex items-center">
          <label className="mr-2" htmlFor="bg-color">
            Background
          </label>
          <input
            type="checkbox"
            name="bg-color"
            checked={curSetting === "bg-color"}
            onChange={handleSettingsChange}
            className="cursor-pointer accent-lime-alt scale-150 m-1 outline"
          />
        </div>
        <div className="text-xs flex items-center">
          <label className="mr-2" htmlFor="bg-color">
            Pen Type
          </label>
          <input
            type="checkbox"
            name="pen-type"
            checked={curSetting === "pen-type"}
            onChange={handleSettingsChange}
            className="cursor-pointer accent-lime-alt scale-150 m-1 outline"
          />
        </div>
      </div>
      <div className="flex justify-around items-center">
        {curSetting === "pen-type" ? (
          <>
            <button
              onClick={() => handlePenChange(5)}
              aria-label="pen size: small"
              className={cx("w-10 h-10 flex justify-center items-center", {
                "translate-y-1 translate-x-1 shadow-none": curPenType === 5,
              })}
              style={{ backgroundColor: curStrokeColor }}
            >
              <span className="absolute rounded-xl bg-dark w-1.5 h-1.5" />
            </button>
            <button
              onClick={() => handlePenChange(10)}
              aria-label="pen size: medium"
              className={cx("w-10 h-10 flex justify-center items-center", {
                "translate-y-1 translate-x-1 shadow-none": curPenType === 10,
              })}
              style={{ backgroundColor: curStrokeColor }}
            >
              <span className="absolute rounded-xl bg-dark w-2.5 h-2.5" />
            </button>
            <button
              onClick={() => handlePenChange(15)}
              aria-label="pen size: large"
              className={cx("w-10 h-10 flex justify-center items-center", {
                "translate-y-1 translate-x-1 shadow-none": curPenType === 15,
              })}
              style={{ backgroundColor: curStrokeColor }}
            >
              <span className="absolute rounded-xl bg-dark w-4 h-4" />
            </button>
          </>
        ) : (
          colors.map((c, i) => (
            <button
              key={i}
              onClick={() =>
                curSetting === "fg-color"
                  ? setCurStrokeColor(c.value)
                  : setCurBgColor(c.value)
              }
              className={cx("w-10 h-10 flex justify-center items-center", {
                "translate-y-1 translate-x-1 shadow-none":
                  (curSetting === "fg-color" && curStrokeColor === c.value) ||
                  (curSetting === "bg-color" && curBgColor === c.value),
              })}
              style={{ backgroundColor: c.value }}
            >
              <span
                className={cx(
                  "transition-all text-2xl",
                  curBgColor === c.value && curSetting === "fg-color"
                    ? "opacity-1"
                    : "opacity-0"
                )}
              >
                🧽
              </span>
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default ColorPalette;
