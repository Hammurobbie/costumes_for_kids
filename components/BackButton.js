import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import back_arrow from "../img/arrow-drawing.png";

const BackButton = () => {
  const { back } = useRouter();
  return (
    <button className="absolute left-6 top-4 w-auto py-0 px-1 shadow-sm hover:bg-tangerine-alt focus:bg-tangerine-alt">
      <Image
        onClick={back}
        src={back_arrow}
        height="auto"
        width={40}
        alt="navigate_back"
      />
    </button>
  );
};

export default BackButton;
