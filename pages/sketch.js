import react, { useState } from "react";
import Head from "next/head";
import SketchPad from "../components/SketchPad";
import ColorPalette from "../components/ColorPalette";

export default function Sketch() {
  const [curStrokeColor, setCurStrokeColor] = useState("#f58094");
  const [curBgColor, setCurBgColor] = useState("#feeca9");
  const [curPenType, setPenType] = useState(5);
  return (
    <>
      <Head>
        <title>Sketch</title>
        <meta name="Sketch" content="Draw out your idea" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="page_container">
        <section>
          <div className="mb-5">
            <SketchPad
              curStrokeColor={curStrokeColor}
              curBgColor={curBgColor}
              curPenType={curPenType}
            />
          </div>
          <ColorPalette
            setCurStrokeColor={setCurStrokeColor}
            setCurBgColor={setCurBgColor}
            setPenType={setPenType}
            curStrokeColor={curStrokeColor}
            curBgColor={curBgColor}
            curPenType={curPenType}
          />
        </section>
      </main>
    </>
  );
}
