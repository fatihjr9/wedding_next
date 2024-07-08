"use client";

import { useRef, useState, useEffect } from "react";
import Layout from "./layout";
import { Howl } from "howler";

export default function Home() {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const [section1Clicked, setSection1Clicked] = useState(false);
  const [canScrollToSection2, setCanScrollToSection2] = useState(false);

  const initializeHowler = () => {
    const sound = new Howl({
      src: ["/journey.mp3"],
    });
    return sound;
  };

  const clickAble = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      const sound = initializeHowler();
      sound.play();
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
      setSection1Clicked(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!canScrollToSection2) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [canScrollToSection2]);

  return (
    <Layout>
      <div className="flex flex-row">
        <div
          className={`fixed top-0 left-0 bg-[url('/img/left.png')] md:w-6/12 lg:w-8/12 h-screen bg-cover bg-no-repeat hidden md:block ${section1Clicked ? "hidden" : ""}`}
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
            className={`bg-[url('/img/left.png')] w-full h-screen bg-cover bg-no-repeat ${section1Clicked ? "hidden" : ""}`}
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
                  clickAble(section2);
                  setCanScrollToSection2(true);
                }}
                className="w-full bg-black text-white py-4 animate-bounce transition-all rounded-lg"
              >
                Click me
              </button>
            </div>
          </div>
          {/* Section 2 */}
          <div
            ref={section2}
            className={`bg-[url('/img/left.png')] w-full h-screen bg-cover bg-no-repeat ${section1Clicked ? "" : "hidden"}`}
          >
            <div className="w-full md:w-6/12 h-full flex flex-col justify-between mx-auto py-20 text-white z-10 relative">
              <h5 className="text-xl font-medium text-center">
                Congratulations to
              </h5>
              <h5 className="text-4xl font-medium text-center">
                Tiffany & Jared
              </h5>
            </div>
          </div>
          {/* Section 3 */}
          <div
            ref={section3}
            className={`bg-[url('/img/left.png')] w-full h-screen bg-cover bg-no-repeat ${section1Clicked ? "" : "hidden"}`}
          >
            <div className="w-full md:w-6/12 h-full flex flex-col justify-between mx-auto py-20 text-white z-10 relative">
              <h5 className="text-xl font-medium text-center">
                Congratulations to
              </h5>
              <h5 className="text-4xl font-medium text-center">
                Tiffany & Jared
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
