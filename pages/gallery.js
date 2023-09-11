import react, { useEffect, useState } from "react";
import Head from "next/head";
import BackButton from "../components/BackButton";
import ImageUpload from "../components/ImageUpload";
import Toggle from "../components/Toggle";
import cx from "classnames";
import { ShineFull } from "../icons/ShineFull";

const userMockImages = [
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

const designerMockImages = [
  {
    url: "https://static.wixstatic.com/media/f82a6c_26922b98f76746cc968a0550d8808b31~mv2.jpg/v1/fit/w_616,h_1304,q_90/f82a6c_26922b98f76746cc968a0550d8808b31~mv2.webpg",
    alt: "dress",
    notes: "Here's the mockup. It's really coming together!",
  },
  {
    url: "https://static.wixstatic.com/media/f82a6c_1573b56751ea42518e0f0d5e0ae0ec6c~mv2.jpg/v1/fit/w_612,h_1304,q_90/f82a6c_1573b56751ea42518e0f0d5e0ae0ec6c~mv2.webp",
    alt: "stalagmites",
    notes: "Take a look at the initial design",
  },
  {
    url: "https://static.wixstatic.com/media/f82a6c_d8b41e0203f54cb185e49de6a3ea51d3~mv2.jpg/v1/fit/w_616,h_1304,q_90/f82a6c_d8b41e0203f54cb185e49de6a3ea51d3~mv2.webp",
    alt: "Ophelia",
    notes: "First fitting 😍",
  },
  {
    url: "https://static.wixstatic.com/media/f82a6c_ac5a455003ae40178fd93e5dd7c28cf2~mv2.jpg/v1/fit/w_228,h_1304,q_90/f82a6c_ac5a455003ae40178fd93e5dd7c28cf2~mv2.webp",
    alt: "bright room",
    notes: "A few different variations I had in mind",
  },
];

export default function Gallery() {
  const [viewToggle, setViewToggle] = useState(false);
  const [designerImages, setDesignerImages] = useState(designerMockImages);
  const [userImages, setUserImages] = useState(userMockImages);
  const [curImage, setCurImage] = useState(userImages[0]);
  const [isFullSizeImage, setIsFullSizeImage] = useState(false);
  const [windowHeight, setWindowHeight] = useState(500);

  useEffect(() => {
    setCurImage(viewToggle ? designerImages[0] : userImages[0]);
  }, [viewToggle, designerImages, userImages]);

  useEffect(() => {
    setWindowHeight(window.screen.height - 300);
  }, []);

  const handleImageChange = (i) => {
    const tarButton = document?.getElementById(`thumbnail-${i}`);
    const thumbnailDiv = document?.getElementById("thumbnail-div");
    const thumbnailPos = tarButton.getBoundingClientRect()?.x;
    if (
      thumbnailPos - thumbnailDiv.getBoundingClientRect()?.x + 85 >
        thumbnailDiv.offsetWidth ||
      thumbnailPos < thumbnailDiv.getBoundingClientRect()?.x
    ) {
      thumbnailDiv.scroll(thumbnailPos, 0);
    }
    setCurImage(viewToggle ? designerImages[i] : userImages[i]);
  };

  const toggleFullSizeImage = () => {
    setIsFullSizeImage(!isFullSizeImage);
    if (!isFullSizeImage) {
      document.body.style.overflow = "hidden";
      scrollTo(0, 0);
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <Head>
        <title>Photo Album</title>
        <meta
          name="Photo Album"
          content="View photos of your project's progress"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="page_container">
        <div
          className={cx(
            "absolute left-0 flex justify-center items-center h-screen w-full transition-all duration-500 px-4",
            {
              "opacity-0 z-0 pointer-events-none": !isFullSizeImage,
              "opacity-100 z-10": isFullSizeImage,
            }
          )}
        >
          <div className="absolute top-0 left-0 h-full w-full bg-purple-alt opacity-95"></div>
          <button
            onClick={toggleFullSizeImage}
            className="absolute z-20 right-4 top-4 w-20 py-1 flex justify-center hover:bg-salmon"
          >
            close
          </button>
          <div
            className="z-20 border-dark border-4 shadow-dark shadow-sm"
            style={{ maxHeight: `${windowHeight}px` }}
          >
            <img
              className="bg-salmon-alt object-contain"
              style={{ maxHeight: `${windowHeight - 10}px` }}
              src={
                typeof curImage?.url !== "string"
                  ? URL.createObjectURL(curImage?.url)
                  : curImage?.url
              }
              alt={curImage?.alt}
            />
          </div>
        </div>
        <section className="relative w-full flex flex-col items-center bg-salmon p-4 py-5 border-dark border-4 shadow-dark shadow-md">
          <h1 className="mb-6 ml-1 sm:ml-0">
            {`${viewToggle ? "Design" : "Your"} Photos`}
            <span className="relative">
              <ShineFull className="fill-dark w-8 absolute -right-10 -top-0" />
            </span>
          </h1>
          <BackButton />
          <Toggle isToggled={viewToggle} setIsToggled={setViewToggle} />
          <div className="flex flex-col w-full max-w-[500px] px-3">
            <button
              onClick={toggleFullSizeImage}
              className="h-[200px] min-h-[310px] mb-3.5 border-dark border-4 shadow-dark shadow-sm p-0 rounded-none"
            >
              <div className="h-full w-full">
                <img
                  className="bg-salmon-alt object-cover object-center h-full w-full"
                  src={
                    typeof curImage?.url !== "string"
                      ? URL.createObjectURL(curImage?.url)
                      : curImage?.url
                  }
                  alt={curImage?.alt}
                />
              </div>
            </button>
            <div
              id="thumbnail-div"
              className="bg-purple-alt h-[110px] scroll-smooth overflow-x-auto flex border-dark border-4 shadow-dark shadow-sm"
            >
              {(viewToggle ? designerImages : userImages)?.map((img, i) => (
                <button
                  key={i}
                  id={`thumbnail-${i}`}
                  onClick={() => handleImageChange(i)}
                  className="min-w-[85px] h-[85px] m-1.5 p-0 overflow-hidden hover:bg-tangerine-alt focus:bg-tangerine-alt"
                >
                  <div className="h-full w-full">
                    <img
                      className="object-cover object-center h-full w-full"
                      src={
                        typeof img?.url !== "string"
                          ? URL.createObjectURL(img?.url)
                          : img?.url
                      }
                      alt={img?.alt}
                    />
                  </div>
                </button>
              ))}
            </div>
            {viewToggle ? (
              <div className="w-full flex flex-col items-center mt-4">
                <h2>Designer Notes</h2>
                <div className="bg-purple-alt p-2 h-36 w-full mt-2 border-dark border-4 shadow-dark shadow-sm overflow-auto">
                  <p className="">{curImage?.notes}</p>
                </div>
              </div>
            ) : (
              <ImageUpload
                setUserImages={setUserImages}
                userImages={userImages}
              />
            )}
          </div>
        </section>
      </main>
    </>
  );
}
