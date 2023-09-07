import React, { useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { UserContext } from "../contexts/UserContext";

import logo from "../img/logo.png";
import { Shock } from "../icons/Shock.js";
import { Swirl } from "../icons/Swirl.js";
import { Stars } from "../icons/Stars.js";
import { Shine } from "../icons/Shine.js";
import { ShineFull } from "../icons/ShineFull.js";
import { Threadline } from "../icons/Threadline";

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
      <main className="flex flex-col px-4 h-[90vh] justify-center items-center">
        <section className="w-full h-2/3 max-w-2xl max-h-[600px] bg-salmon flex flex-col justify-center items-center p-4 py-5 border-dark border-4 shadow-dark shadow-md">
          <div className="flex flex-col items-center relative">
            <Swirl className="fill-dark w-4 absolute left-0 -bottom-3" />
            <Stars className="fill-dark w-8 absolute -right-2 top-16 -rotate-12" />
            <h1 className="text-2xl mb-2">
              Howdy
              <span className="relative">
                <ShineFull className="fill-dark w-36 absolute -top-14 -right-10 -rotate-12" />
              </span>
            </h1>
            <p className="mt-14 text-xs flex flex-col items-center">
              Welcome to
              <span>
                <Threadline className="fill-dark w-20" />
              </span>
            </p>
            <Image
              priority
              src={logo}
              height="auto"
              width={350}
              alt="logo"
              className="mb-5"
            />
          </div>
          <div className="flex flex-col items-center justify-around w-48 h-2/6 max-h-44 min-h-[120px]">
            {/* auth2 login or register */}
            <button
              className="hover:bg-lime-alt focus:bg-lime-alt disabled:hover:bg-gray-200 disabled:active:transform-none disabled:active:shadow-sm disabled:cursor-not-allowed"
              onClick={() => push("/dashboard")}
              disabled={!globalUser?.name ? true : false}
              suppressHydrationWarning
            >
              login
              <span className="relative">
                <Shine className="pointer-events-none fill-dark w-7 absolute -top-8 left-16" />
              </span>
            </button>
            <button
              className="hover:bg-lime-alt focus:bg-lime-alt"
              onClick={() => push("/introduction")}
            >
              register
              <span className="relative">
                <Shock className="pointer-events-none fill-dark w-7 absolute -bottom-9 right-[120px] -scale-y-100 rotate-12" />
              </span>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
