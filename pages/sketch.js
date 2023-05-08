import Head from "next/head";
import styles from "../styles/Home.module.css";

import SketchPad from "../components/SketchPad";

export default function Sketch() {
  return (
    <>
      <Head>
        <title>Sketch</title>
        <meta name="Sketch" content="Draw out your idea" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <SketchPad />
      </main>
    </>
  );
}
