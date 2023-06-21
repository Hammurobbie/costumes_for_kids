import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    // api call to existing note text
    const serverNote = "";
    setNotepadText(serverNote);
  }, []);

  const handleNoteChange = (e) => {
    if (formMessage.message) {
      setFormMessage(initFormMessage);
    }
    setNotepadText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (notepadText) {
      // api call to post note
      console.log("sent");
      setFormMessage({
        type: "success",
        message: "✨ Nice, we got your note! ✨",
      });
      setTimeout(() => {
        setFormMessage(initFormMessage);
      }, 5000);
    } else {
      setFormMessage({
        type: "error",
        message: "⛔ Add a note before submitting ⛔",
      });
    }
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
            {"Tell me about your dream outfit or costume"}
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center h-full"
          >
            <em
              className={cx("h-7 text-success", {
                "opacity-0": !formMessage?.message,
                "text-error": formMessage?.type === "error",
              })}
            >
              {formMessage?.message}
            </em>
            <div className="w-full h-2/3 mb-3">
              <textarea
                onChange={handleNoteChange}
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
