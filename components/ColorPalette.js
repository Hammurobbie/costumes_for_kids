import React, { useState } from "react";

const ColorPalette = ({
  setCurStrokeColor,
  setCurBgColor,
  setPenType,
  curStrokeColor,
}) => {
  const [curSetting, setCurSetting] = useState("fg-color");

  const handleSettingsChange = (e) => {
    setCurSetting(e.target.name);
  };

  console.log(curStrokeColor);

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
  return (
    <div className="w-full flex flex-col justify-around bg-salmon p-4 py-5 border-dark border-4 shadow-dark shadow-md">
      <div className="flex w-full justify-around mb-5">
        <div className="text-xs">
          <label className="mr-2" htmlFor="bg-color">
            Foreground
          </label>
          <input
            type="checkbox"
            name="fg-color"
            checked={curSetting === "fg-color"}
            onChange={handleSettingsChange}
            className="cursor-pointer"
          />
        </div>
        <div className="text-xs">
          <label className="mr-2" htmlFor="bg-color">
            Background
          </label>
          <input
            type="checkbox"
            name="bg-color"
            checked={curSetting === "bg-color"}
            onChange={handleSettingsChange}
            className="cursor-pointer"
          />
        </div>
        <div className="text-xs">
          <label className="mr-2" htmlFor="bg-color">
            Pen Type
          </label>
          <input
            type="checkbox"
            name="pen-type"
            checked={curSetting === "pen-type"}
            onChange={handleSettingsChange}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex justify-around items-center">
        {curSetting === "pen-type" ? (
          <>
            <button
              onClick={() => setPenType(5)}
              aria-label="pen size: small"
              className={`cursor-pointer !bg-[${curStrokeColor}] p-0 h-2 w-2 border-none shadow-none`}
            ></button>
            <button
              onClick={() => setPenType(10)}
              aria-label="pen size: medium"
              className={`cursor-pointer !bg-[${curStrokeColor}] p-0 w-4 h-4 border-none shadow-none`}
            ></button>
            <button
              onClick={() => setPenType(15)}
              aria-label="pen size: large"
              className={`cursor-pointer !bg-[${curStrokeColor}] p-0 w-6 h-6 border-none shadow-none`}
            ></button>
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
              className="w-10 h-10"
              style={{ backgroundColor: c.value }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ColorPalette;
