import react, { useState } from "react";
import Head from "next/head";

const mockImgs = [
  {
    url: "",
    alt: "foo",
  },
  {
    url: "",
    alt: "bar",
  },
  {
    url: "",
    alt: "get",
  },
  {
    url: "",
    alt: "sum",
  },
];

export default function Gallery() {
  const [images, setImages] = useState(mockImgs);
  const [curImage, setCurImage] = useState(images[0]);

  const handleImageChange = (i) => {
    setCurImage(images[i]);
  };

  return (
    <>
      <Head>
        <title>Photo Gallery</title>
        <meta
          name="Photo Gallery"
          content="View photos of your project's progress"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="page_container">
        <section className="w-full h-full flex flex-col items-center bg-salmon p-4 py-5 border-dark border-4 shadow-dark shadow-md">
          <h1 className="mb-6">Photo Gallery 📷</h1>
          <div className="flex flex-col h-full w-full px-3">
            <div className="h-1/2 mb-3.5 border-dark border-4 shadow-dark shadow-sm">
              <img
                className="h-full bg-salmon-alt"
                src={curImage?.url}
                alt={curImage?.alt}
              />
            </div>
            <div className="bg-purple-alt h-[110px] overflow-x-auto flex border-dark border-4 shadow-dark shadow-sm">
              {images?.map((img, i) => (
                <button
                  key={i}
                  onClick={() => handleImageChange(i)}
                  className="min-w-[85px] h-[85px] m-1.5"
                >
                  <img src={img?.url} alt={img?.alt} />
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
