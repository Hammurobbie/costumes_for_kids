import react, { useState } from "react";
import Head from "next/head";
import BackButton from "../components/BackButton";

const mockImgs = [
  {
    url: "https://www.highsnobiety.com/static-assets/thumbor/Q1Pu2XhtpeqMg-fPzo4hUNrPOQ8=/1600x2400/www.highsnobiety.com/static-assets/wp-content/uploads/2023/02/12185956/lizzo-brit-awards-2023-outfit1.jpg",
    alt: "lizzo",
  },
  {
    url: "https://cdna.artstation.com/p/assets/images/images/034/963/634/large/brandon-russell-cap-iconic-final.jpg?1613716734",
    alt: "captain america",
  },
  {
    url: "https://www.brides.com/thmb/fYMnRW3g15dp2VI-ol8tuBWCG-s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GemmaChanLouisVuitton-97a76571e94941dfb2d9040ec8bdfbb0.jpg",
    alt: "emma chan",
  },
  {
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fakns-images.eonline.com%2Feol_images%2FEntire_Site%2F20191116%2Frs_600x600-191216132221-600-Kumail-Nanjiani--disney-me-121519.jpg%3Ffit%3Daround%257C1080%3A1080%26output-quality%3D90%26crop%3D1080%3A1080%3Bcenter%2Ctop&f=1&nofb=1&ipt=130e4ef8ce7cd20fe47dc435dc4b71782259970b99b3fe9077eda0bfeaf4b59b&ipo=images",
    alt: "kumail nanjiani",
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
        <section className="relative w-full h-full flex flex-col items-center bg-salmon p-4 py-5 border-dark border-4 shadow-dark shadow-md">
          <h1 className="mb-6 ml-7 sm:ml-0">Photo Album 📷</h1>
          <BackButton />
          <div className="flex flex-col h-full w-full px-3">
            <div className="h-1/2 mb-3.5 border-dark border-4 shadow-dark shadow-sm">
              <div className="h-full w-full">
                <img
                  className="bg-salmon-alt object-cover object-center h-full w-full"
                  src={curImage?.url}
                  alt={curImage?.alt}
                />
              </div>
            </div>
            <div className="bg-purple-alt h-[110px] overflow-x-auto flex border-dark border-4 shadow-dark shadow-sm">
              {images?.map((img, i) => (
                <button
                  key={i}
                  onClick={() => handleImageChange(i)}
                  className="min-w-[85px] h-[85px] m-1.5 hover:bg-tangerine-alt focus:bg-tangerine-alt"
                >
                  <img
                    className="object-center h-full w-full"
                    src={img?.url}
                    alt={img?.alt}
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
