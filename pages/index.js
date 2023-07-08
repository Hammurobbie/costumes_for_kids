import React, { useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { UserContext } from "../contexts/UserContext";

export default function Landing() {
  const { globalUser } = useContext(UserContext);
  const { push } = useRouter();

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="Home" content="Landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col px-4 h-screen justify-center">
        <section className="w-full h-2/3 bg-salmon flex flex-col justify-around items-center p-4 py-5 border-dark border-4 shadow-dark shadow-md">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl mb-2">Howdy 🤠</h1>
            <p>Welcome to DreamWeavers</p>
            <p className="mt-12">_ logo _</p>
          </div>
          <div className="flex flex-col items-center justify-around w-48 h-2/5">
            {/* auth2 login or register */}
            <button
              className="hover:bg-lime-alt focus:bg-lime-alt disabled:hover:bg-gray-200 disabled:active:transform-none disabled:active:shadow-sm disabled:cursor-not-allowed"
              onClick={() => push("/dashboard")}
              disabled={!globalUser?.name ? true : false}
            >
              login
            </button>
            <button
              className="hover:bg-lime-alt focus:bg-lime-alt"
              onClick={() => push("/introduction")}
            >
              register
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
