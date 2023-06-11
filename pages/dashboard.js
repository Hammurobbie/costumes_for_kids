import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useRouter } from "next/navigation";
import Head from "next/head";

export default function Dashboard() {
  const { globalUser, setGlobalUser } = useContext(UserContext);
  const { push } = useRouter();

  const handleLogOut = () => {
    push("/");
    setTimeout(() => {
      setGlobalUser(null);
      // localStorage.clear();
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
        <section className="w-full h-full bg-salmon p-4 py-5 border-dark border-4 shadow-dark shadow-md">
          <div className="flex items-center mb-10">
            <h1 className="w-5/6">{`What's good, ${
              globalUser?.name?.split(" ")[0]
            }?`}</h1>
            <button
              className="w-32 text-sm py-1 bg-salmon-alt hover:bg-purple-alt focus:bg-purple-alt"
              onClick={handleLogOut}
            >
              Sign out
            </button>
          </div>
          <div className="flex h-1/2 flex-col justify-around items-center">
            <h2>{"Let's get those ideas out!"}</h2>
            <button
              className="w-56 hover:bg-tangerine-alt focus:bg-tangerine-alt"
              onClick={() => push("/sketch")}
            >
              Draw it
            </button>
            <button
              className="w-56 hover:bg-tangerine-alt focus:bg-tangerine-alt"
              onClick={() => push("/notepad")}
            >
              Write it
            </button>
            <button
              className="w-56 hover:bg-tangerine-alt focus:bg-tangerine-alt"
              onClick={() => push("/gallery")}
            >
              snap it
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
