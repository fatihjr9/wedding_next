"use client";

import { useRef, useState, useEffect } from "react";
import Layout from "./layout";
import { Howl } from "howler";
import Carousel from "./components/carousel";

export default function Home() {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const loadingSection = useRef(null);
  const [section1Clicked, setSection1Clicked] = useState(false);
  const [showLoadingSection, setShowLoadingSection] = useState(false);

  const initializeHowler = () => {
    const sound = new Howl({
      src: ["/journey.mp3"],
    });
    return sound;
  };

  const clickAble = () => {
    const sound = initializeHowler();
    sound.play();
    setShowLoadingSection(true);
    setSection1Clicked(true);
    setTimeout(() => {
      setShowLoadingSection(false);
      setTimeout(() => {
        section2.current.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }, 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!section1Clicked) {
        window.scrollTo(0, 0);
      } else if (section2.current && section3.current) {
        const scrollY = window.scrollY;
        const section2Top = section2.current.offsetTop;
        const section3Top = section3.current.offsetTop;

        if (scrollY < section2Top) {
          window.scrollTo(0, section2Top);
        } else if (scrollY >= section2Top && scrollY < section3Top) {
          // Allow scrolling within section 2 and section 3
        } else if (scrollY >= section3Top) {
          window.scrollTo(0, section3Top);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [section1Clicked]);

  return (
    <Layout>
      <div className="flex flex-row">
        <div
          className={`fixed top-0 left-0 bg-[url('/img/left.webp')] md:w-6/12 lg:w-8/12 h-screen bg-cover bg-no-repeat hidden md:block ${section1Clicked ? "hidden" : ""}`}
        >
          <div className="h-screen md:w-6/12 lg:w-8/12 bg-stone-900/75 fixed top-0 left-0"></div>
          <div className="absolute p-8 text-white w-8/12 space-y-4 bottom-10">
            <h5 className="text-xl font-medium">Wedding Announcement</h5>
            <h5 className="text-4xl font-medium">Tiffany & Jared</h5>
            <p className="italic text-justify">
              Aku ingin mencintaimu dengan sederhana; dengan kata yang tak
              sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin
              mencintaimu dengan sederhana; dengan isyarat yang tak sempat
              disampaikan awan kepada hujan yang menjadikannya tiada.
            </p>
            <p className="italic">— Sapardi Djoko Damono</p>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-4/12 md:ml-auto">
          {/* Section 1 */}
          <div
            ref={section1}
            className={`bg-[url('/img/left.webp')] w-full h-screen bg-cover bg-no-repeat transition-opacity duration-500 ${section1Clicked ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            <div className="h-screen md:w-6/12 lg:w-4/12 bg-stone-900/50 absolute top-0 right-0"></div>
            <div className="w-full md:w-6/12 h-full flex flex-col justify-between mx-auto py-20 text-white z-10 relative">
              <h5 className="text-xl font-medium text-center">
                Congratulations to
              </h5>
              <h5 className="text-4xl font-medium text-center">
                Tiffany & Jared
              </h5>
              <button
                onClick={() => {
                  clickAble();
                }}
                className="w-full bg-black text-white py-4 animate-bounce transition-all rounded-lg"
              >
                Click me
              </button>
            </div>
          </div>
          {/* Loading Section */}
          {showLoadingSection && (
            <div
              ref={loadingSection}
              className="w-full h-screen flex items-center justify-center transition-all duration-500 opacity-100"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
                <h2 className="text-center text-gray-500 text-xl font-semibold">
                  Loading...
                </h2>
              </div>
            </div>
          )}
          {/* Section 2 */}
          <div
            ref={section2}
            className={`bg-[url('/img/right.png')] w-full h-screen bg-cover bg-no-repeat transition-opacity duration-500 ${section1Clicked && !showLoadingSection ? "opacity-100" : "opacity-0 hidden pointer-events-none"}`}
          >
            <div className="w-full md:w-6/12 h-full flex flex-col justify-between mx-auto py-20 text-white z-10 relative">
              <h5 className="text-xl font-medium text-center">
                Wedding Announcement
              </h5>
              <h5 className="text-4xl font-medium text-center">
                Tiffany & Jared <br /> #timetoshare
              </h5>
              <h5 className="text-center animate-bounce">Scroll ke bawah</h5>
            </div>
          </div>
          {/* Section 3 */}
          <div
            ref={section3}
            className={`bg-white h-screen transition-opacity duration-500 ${section1Clicked && !showLoadingSection ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <div className="w-full md:w-full h-full flex flex-col justify-between mx-auto py-10 z-10 relative">
              <div className="mb-6 space-y-4">
                <h5 className="text-2xl font-bold text-center leading-snug">
                  Welcome to <br />{" "}
                  <span className="text-pink-500">Tiffany & Jarred`s</span>{" "}
                  <br /> wedding website
                </h5>
                <p className="text-center text-gray-600 w-9/12 mx-auto leading-snug">
                  Together with joyful hearts and the grace of god, we joyfully
                  announce the upcoming of our marriage
                </p>
              </div>

              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
