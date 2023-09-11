import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { ThoughtBubble } from "../icons/ThoughtBubble";
import { Scribble } from "../icons/Scribble";
import { Lightning } from "../icons/Lightning";
import { Quote } from "../icons/Quote";
import { Shine } from "../icons/Shine";
import { Dots } from "../icons/Dots";

export default function Dashboard() {
  const { globalUser, setGlobalUser } = useContext(UserContext);
  const { push } = useRouter();

  const handleLogOut = () => {
    push("/");
    setTimeout(() => {
      setGlobalUser(null);
      localStorage.clear();
    }, 100);
  };
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="Dashboard" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="page_container">
        <section className="w-full bg-salmon p-4 py-5 border-dark border-4 shadow-dark shadow-md relative">
          <div className="flex items-center mb-6">
            <h1 className="w-5/6">
              {`Hey, ${globalUser?.name?.split(" ")[0]}`}
              <span className="relative">
                <Scribble className="fill-dark w-10 top-6 right-22 rotate-[20deg] absolute" />
              </span>
            </h1>
            <button
              className="w-32 text-sm py-1 bg-salmon-alt hover:bg-purple-alt focus:bg-purple-alt"
              onClick={handleLogOut}
            >
              Sign out
            </button>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl px-4 py-4 leading-snug">
              {"Let's get those "}
              <span className="relative">
                ideas
                <ThoughtBubble className="fill-dark w-32 -top-7 -right-2 absolute rotate-[20deg]" />
              </span>{" "}
              out!
            </h2>
            <button
              className="h-20 w-full my-6 max-w-[600px] hover:bg-tangerine-alt focus:bg-tangerine-alt relative"
              onClick={() => push("/sketch")}
            >
              Draw it
              <Lightning className="pointer-events-none fill-dark w-5 absolute -top-9 -right-4 -rotate-[25deg]" />
            </button>
            <button
              className="h-20 w-full my-6 max-w-[600px] hover:bg-tangerine-alt focus:bg-tangerine-alt relative"
              onClick={() => push("/notepad")}
            >
              Write it
              <Quote className="pointer-events-none fill-dark w-8 absolute -top-8 -left-3 -scale-x-100 -rotate-12" />
            </button>
            <button
              className="h-20 w-full my-6 max-w-[600px] hover:bg-tangerine-alt focus:bg-tangerine-alt relative"
              onClick={() => push("/gallery")}
            >
              Snap it
              <Shine className="pointer-events-none fill-dark w-9 absolute -top-7 -right-4 -rotate-12" />
            </button>
          </div>
          <Dots className="fill-dark w-9 absolute right-64" />
        </section>
      </main>
    </>
  );
}
