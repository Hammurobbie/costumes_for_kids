import Head from "next/head";

export default function Notepad() {
  return (
    <>
      <Head>
        <title>Notepad</title>
        <meta name="Notepad" content="Jot down ideas for your project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="page_container">
        <section className="w-full h-full bg-salmon p-4 py-5 border-dark border-4 shadow-dark shadow-md">
          <h1 className="text-center mb-6">Notepad ✏️</h1>
          <p>Jot down ideas for your project</p>
          <div className="w-full h-1/3 mt-2">
            <textarea className="w-full h-full p-2 bg-tangerine border-dark border-4 shadow-dark shadow-sm" />
          </div>
        </section>
      </main>
    </>
  );
}
