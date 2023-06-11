import React, { useState } from "react";
import Head from "next/head";
import BackButton from "../components/BackButton";
import cx from "classnames";

export default function Notepad() {
  const initFormMessage = {
    type: "",
    message: "",
  };
  const [formMessage, setFormMessage] = useState(initFormMessage);
  const [notepadText, setNotepadText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Head>
        <title>Notepad</title>
        <meta name="Notepad" content="Jot down ideas for your project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="page_container">
        <section className="relative w-full h-full bg-salmon p-4 py-5 border-dark border-4 shadow-dark shadow-md">
          <h1 className="text-center mb-6 ml-7 sm:ml-0">Notepad ✏️</h1>
          <BackButton />
          <p className="text-center">
            {"Tell me all about your dream outfit or costume"}
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center h-full"
          >
            <em
              className={cx("h-7 text-lime", {
                "opacity-0": !formMessage?.message,
                "text-salmon-alt": formMessage?.type === "error",
              })}
            >
              {formMessage?.message}
            </em>
            <div className="w-full h-2/3 mb-3">
              <textarea
                defaultValue={notepadText}
                className="w-full h-full p-2 bg-tangerine border-dark border-4 shadow-dark shadow-sm focus:outline-none"
              />
            </div>
            <button className="w-24 bg-purple-alt hover:bg-salmon-alt focus:bg-salmon-alt">
              Submit
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
