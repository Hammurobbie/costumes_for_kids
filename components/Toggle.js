import React from "react";
import cx from "classnames";

const Toggle = ({ isToggled, ToggleFunc }) => {
  return (
    <button
      onClick={() => ToggleFunc()}
      className="absolute right-4 top-[22px] w-12 h-7 py-0.5 px-1 shadow-sm rounded-2xl"
    >
      <div
        className={cx(
          "h-4 w-4 bg-purple-alt rounded-2xl border-dark border-2 transition-all",
          {
            "ml-4": isToggled,
          }
        )}
      />
    </button>
  );
};

export default Toggle;
