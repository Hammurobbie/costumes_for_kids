import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import back_arrow from "../img/arrow-drawing.png";

const BackButton = () => {
  const { back } = useRouter();
  return (
    <button className="absolute left-4 top-[21px] w-auto py-0.5 px-1 shadow-sm rounded-lg hover:bg-tangerine-alt focus:bg-tangerine-alt">
      <Image
        onClick={() => back()}
        src={back_arrow}
        height="auto"
        width={25}
        alt="navigate_back"
        className="-scale-y-100"
      />
    </button>
  );
};

export default BackButton;
