import React from "react";

const ColorPalette = ({ setCurStrokeColor }) => {
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
  ];
  return (
    <div className="w-full flex justify-around bg-salmon p-4 py-5 border-dark border-4 shadow-dark shadow-md">
      {colors.map((c, i) => (
        <button
          key={i}
          onClick={() => setCurStrokeColor(c.value)}
          className="w-10 h-10"
          style={{ backgroundColor: c.value }}
        />
      ))}
    </div>
  );
};

export default ColorPalette;
