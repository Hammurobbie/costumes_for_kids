import react, { useState } from "react";
import Head from "next/head";
import SketchPad from "../components/SketchPad";
import ColorPalette from "../components/ColorPalette";

export default function Sketch() {
  const [curStrokeColor, setCurStrokeColor] = useState("");
  return (
    <>
      <Head>
        <title>Sketch</title>
        <meta name="Sketch" content="Draw out your idea" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="page_container">
        <div className="mb-5">
          <SketchPad curStrokeColor={curStrokeColor} />
        </div>
        <ColorPalette setCurStrokeColor={setCurStrokeColor} />
      </main>
    </>
  );
}
