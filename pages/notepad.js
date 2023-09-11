import React, { useState, useEffect } from "react";
import Head from "next/head";
import BackButton from "../components/BackButton";
import cx from "classnames";
import { Sparkles } from "../icons/Sparkles";
import { Scribble } from "../icons/Scribble";
import { ArrowSwirl } from "../icons/ArrowSwirl";
import { Asterisk } from "../icons/Asterisk";
import { Exclamation } from "../icons/Exclamation";
import { Shine } from "../icons/Shine";

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
        message: "Nice, we got your note",
      });
      setTimeout(() => {
        setFormMessage(initFormMessage);
      }, 5000);
    } else {
      setFormMessage({
        type: "error",
        message: "Add a note first",
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
        <section className="relative w-full h-full bg-salmon p-4 py-5 border-dark border-4 shadow-dark shadow-md relative">
          <ArrowSwirl className="fill-dark w-14 absolute left-7 bottom-5 -scale-y-100 -rotate-[25deg]" />
          <Shine className="pointer-events-none fill-dark w-9 absolute bottom-0 -right-3 -rotate-90 -scale-x-100 -scale-y-100" />
          <h1 className="text-center mb-6 ml-7 sm:ml-0">
            Notepad
            <span className="relative">
              <Sparkles className="fill-dark w-12 absolute -right-16 -top-4" />
            </span>
          </h1>
          <BackButton />
          <p className="text-center">
            Tell me about your{" "}
            <span className="relative">
              dream
              <Scribble className="fill-dark w-9 top-3 right-2 -scale-y-100 -rotate-[25deg] absolute" />
            </span>{" "}
            outfit or costume
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center h-full"
          >
            <em
              className={cx("h-7 text-success relative", {
                "opacity-0": !formMessage?.message,
                "text-error": formMessage?.type === "error",
              })}
            >
              <Exclamation
                className={`fill-${
                  formMessage?.type === "error" ? "error" : "success"
                } w-1 absolute -left-2.5 top-1`}
              />
              <Exclamation
                className={`fill-${
                  formMessage?.type === "error" ? "error" : "success"
                } w-1 absolute -right-2.5 top-1`}
              />
              {formMessage?.message}
            </em>
            <div className="w-full mb-3 relative">
              <Asterisk className="fill-dark w-5 absolute left-7 -top-4" />
              <textarea
                onChange={handleNoteChange}
                defaultValue={notepadText}
                className="w-full h-96 p-2 bg-tangerine border-dark !border-4 shadow-dark !shadow-sm focus:outline-none"
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
