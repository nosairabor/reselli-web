"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import localFont from "next/font/local";


const lato = localFont({
  src: ".././fonts/Lato-Regular.ttf",
})

export default function Home() {
  const [tabindex, setTabIndex] = useState(0);
  const HandleGalleryTabIndex = () => {
    // setTabIndex(tabindex + 1);
    if (tabindex === 2) {
      setTabIndex(0);
    } else {
      setTabIndex(tabindex + 1);
    }
  };
  const bannerList = [
    {
      Title: "Explore",
      image: " /image/image4.jpg",
      subtext: "Discover your next slaying item ",
      buttontext: "Let's explore",
    },

    {
      Title: "Engage",
      image: "/image/image6.jpg",
      subtext: "Hunt for your prefered products",
      buttontext: "Engage",
    },

    {
      Title: "Connect",
      image: "/image/image9.jpg",
      subtext: "Connect with your favourite sellers",
      buttontext: "Connect",
    },
  ];

  useEffect(() => {
    const interval = setTimeout(() => {
      HandleGalleryTabIndex();
    }, 10000);
    return () => clearTimeout(interval);
  }, [setTabIndex, tabindex]);
  const gallerytab = -tabindex * 100;
  // console.log(tabindex);
  return (
    <div className={`${lato.className} bg-gray-50 h-full flex flex-col gap-4 w-full`}>
      <section className="bannerSection relative">
        <img
          alt="Banner"
          src="/image/image11.jpg"
          className="absolute z-[10] w-full h-full object-cover "
        />
        {/* <div className="container z-20 relative">
          <div className="">
            <div className="my-8 max-w-96 inline-block p-8 bg-slate-50 rounded-lg">
              <h4 className="text-3xl text-primary">Let's Get Started!</h4>
              <p className="mt-6 text-wrap">
                Fusce non lorem euismod, scelerisque diam vitae, interdum est.
                Morbi convallis ullamcorper pretium. Ut ut eros tempus, congue
                ipsum vel, consequat nibh.
              </p>
              <button className="w-full mt-6 px-6 py-1.5 bg-primary text-white rounded-md">
                Sell Now!{" "}
              </button>
            </div>
          </div>
        </div> */}
      </section>

      <div>
        <section
          style={{
            gridTemplateColumns: "repeat(3, 100%)",
          }}
          className="relative grid overflow-hidden h-72 w-[80%] max-w-[1100px] mx-auto"
        >
          {bannerList?.map((banner, index) => {
            return (
              <div
                style={{
                  transform: `translateX(${gallerytab}%)`,
                  transition: "all .6s ease",
                }}
                key={index}
                className="h-full w-full relative"
              >
                <div className="w-full h-full z-20 absolute bg-[rgba(0,0,0,.4)]"></div>
                <img
                  src={banner.image}
                  className="h-full z-[10] w-full absolute object-cover"
                ></img>
                <div className="z-40 relative w-full h-full p-8 flex flex-col gap-4">
                  <div className="flex h-full justify-end flex-col gap-4">
                    {/* <h4 className="text-4xl text-white">{banner?.Title}</h4> */}
                    <div className="flex flex-col items-center gap-4">
                      {/* <h4 className="text-2xl text-white">{banner?.subtext}</h4> */}
                      <button className="px-4 py-3 max-w-[150px] bg-white rounded-md text-sm font-bold">{banner?.buttontext}</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
      {/* <section className="trendingArticles">
        <div className="container py-12 ">
          <h4 className="uppercase text-2xl font-bold text-center">
            {" "}
            Trending Items
          </h4>
          <div className="cardSection mt-12 flex">
            <a
              href="#"
              className="individualCard flex-1 mx-4 border rounded-lg"
            >
              <img src="" className="h-64 w-full" />
              <div className="cardDetails">
                <div className="sellerDetails flex items-center justify-between px-4 py-2 border-b">
                  User1233
                  <div className="border rounded-full w-12 h-12">
                    <img className="p-2 w-full" alt="" />
                  </div>
                </div>
                <div className="px-4 py-2">
                  <p>Label</p>
                  <p>2 / XS</p>
                  <p className="mt-1 text-sky-400">$30</p>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="individualCard flex-1 mx-4 border rounded-lg"
            >
              <img src="" className="h-64 w-full" />
              <div className="cardDetails">
                <div className="sellerDetails flex items-center justify-between px-4 py-2 border-b">
                  User1233
                  <div className="border rounded-full w-12 h-12">
                    <img className="p-2 w-full" alt="" />
                  </div>
                </div>
                <div className="px-4 py-2">
                  <p>Label</p>
                  <p>2 / XS</p>
                  <p className="mt-1 text-sky-400">$30</p>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="individualCard flex-1 mx-4 border rounded-lg"
            >
              <img src="" className="h-64 w-full" />
              <div className="cardDetails">
                <div className="sellerDetails flex items-center justify-between px-4 py-2 border-b">
                  User1233
                  <div className="border rounded-full w-12 h-12">
                    <img className="p-2 w-full" alt="" />
                  </div>
                </div>
                <div className="px-4 py-2">
                  <p>Label</p>
                  <p>2 / XS</p>
                  <p className="mt-1 text-sky-400">$30</p>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="individualCard flex-1 mx-4 border rounded-lg"
            >
              <img src="" className="h-64 w-full" />
              <div className="cardDetails">
                <div className="sellerDetails flex items-center justify-between px-4 py-2 border-b">
                  User1233
                  <div className="border rounded-full w-12 h-12">
                    <img className="p-2 w-full" alt="" />
                  </div>
                </div>
                <div className="px-4 py-2">
                  <p>Label</p>
                  <p>2 / XS</p>
                  <p className="mt-1 text-sky-400">$30</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
}
