"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import localFont from "next/font/local";
import ButtonII from "@/components/button/index";
import ReactPlayer from 'react-player';
import Video from 'next-video';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Brands from "@/components/brands";


const lato = localFont({
  src: ".././fonts/Lato-Regular.ttf",
})
const futura = localFont({
  src: ".././fonts/FuturaCMedium.ttf",
})
const spaceMono = localFont({
  src: ".././fonts/SpaceMono-Regular.ttf",
})
const futuraHeavy = localFont({
  src: ".././fonts/FuturaHeavy.ttf",
})

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  

  useEffect(() => {

  }, []);

  return (
    <div className={`${lato.className} h-full flex flex-col gap-4 w-full overflow-x-hidden`}>
      <Video
        src="/videos/hero.mp4"
        width="100%"
        height="auto"
        autoPlay={true}   // Autoplay the video
        loop={true}      // Loop the video infinitely
        muted={true}     // Mute the video
        controls={false} // Optional: hide controls if you don't need them
      />

      <div className="absolute top-1/2 left-1/2 pb-4 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className={`${futuraHeavy.className} uppercase text-center text-[65px] font-bold text-white`}>150+ New fall styles</h2>
        <div className="flex justify-center gap-x-10 mt-3">
          <div>
            <ButtonII
              className={`${futuraHeavy.className} hover:bg-black hover:text-white transition delay-150 duration-300 ease-in-out rounded-[0px] w-[190px] text-base text-black bg-white uppercase`}
              text="shop men's"
            />
            </div>
            
          <div>
            <ButtonII
              className={`${futuraHeavy.className} hover:bg-black hover:text-white transition delay-150 duration-300 ease-in-out rounded-[0px] w-[190px] text-base text-black bg-white uppercase`}
              text="shop women's"
            />
          </div>
        </div>
      </div>

      <div className="-mt-[290px] flex gap-x-5 justify-center px-[70px]">
        <div className="">
          <Image
            src="/image/hero-images/hero-man1.avif"
            alt=""
            className={`w-auto h-[500px]`}
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="mt-3">
            <p className={`text-lg font-black ${futuraHeavy.className}`}>Discover Wrinkle Free</p>
            <p className={`${futuraHeavy.className} text-[#808080] cursor-pointer hover:underline text-[#808080]`}>Shop Now</p>
          </div>
          
          
        </div>
        <div className="">
          <Image
            src="/image/hero-images/hero-man2.avif"
            alt=""
            className={` w-auto h-[500px] `}
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="mt-3">
            <p className={`text-lg font-black ${futuraHeavy.className}`}>Discover Wrinkle Free</p>
            <p className={`${futuraHeavy.className} text-[#808080] cursor-pointer hover:underline text-[#808080]`}>Shop Now</p>
          </div>
          
        </div>
        <div className="">
          <Image
            src="/image/hero-images/hero-man3.avif"
            alt=""
            className={` w-auto h-[500px] `}
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="mt-3">
            <p className={`text-lg font-black ${futuraHeavy.className}`}>Discover Wrinkle Free</p>
            <p className={`${futuraHeavy.className} cursor-pointer hover:underline text-[#808080]`}>Shop Now</p>
          </div>
        </div>
        

      </div>

      <div className="mt-12 flex justify-center">
        <Image
          src="/image/hero-images/hero-women.webp"
          alt=""
          className={`h-full w-full px-[70px]`}
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="  flex flex-col justify-center -translate-y-[330px]">
        <h2 className={`${futuraHeavy.className} uppercase text-center text-[45px] font-bold text-white`}>What's new<br/> for her</h2>
        <div className="flex justify-center gap-x-10 mt-3">
          <div>
            <ButtonII
              className={`${futuraHeavy.className} hover:bg-black hover:text-white transition delay-150 duration-300 ease-in-out rounded-[0px] w-[190px] text-base text-black bg-white uppercase`}
              text="shop now"
            />
            </div>
            
        </div>
      </div>

      
      <div className="-translate-y-[130px] flex justify-center">
        <Image
          src="/image/hero-images/men-hero-pant.webp"
          alt=""
          className={`h-full w-full px-[70px]`}
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="  flex flex-col justify-center -translate-y-[500px]">
        <h2 className={`${futuraHeavy.className} uppercase text-center text-[45px] font-bold text-white tracking-wide`}>4 pants every guy needs</h2>
        <div className="flex justify-center gap-x-10 mt-3">
          <div>
            <ButtonII
              className={`${futuraHeavy.className} hover:bg-black hover:text-white transition delay-150 duration-300 ease-in-out rounded-[0px] w-[190px] text-base text-black bg-white uppercase`}
              text="shop now"
            />
            </div>
            
        </div>
      </div>
      
      
      {/* luxury */}
      <div className="-translate-y-[200px] flex justify-center ">
        <div className="">
          <Image
            src="/image/hero-images/luxury-hero3.png"
            alt=""
            className={`h-full !w-full !min-w-[1280px] `}
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>
      {/* end of luxury */}

      {/* kids */}
      <div className="-translate-y-[100px] flex justify-center px-[70px]">
        <div className="">
          <Image
            src="/image/hero-images/kids-hero1.avif"
            alt=""
            className={`h-full w-full `}
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className="">
          <Image
            src="/image/hero-images/kids-hero2.avif"
            alt=""
            className={`h-full w-full `}
            width={0}
            height={0}
            sizes="100vw"
          />
        </div> 
      </div>
      <div className="flex justify-center -translate-y-[200px]">
        <ButtonII
          className={`${futuraHeavy.className} hover:bg-white hover:text-black transition delay-150 duration-300 ease-in-out rounded-[0px] !min-w-[190px] text-base text-white bg-black uppercase`}
          text="shop kids"
        />
      </div>
      {/* end of kids */}

      {/* carousel */}
      <div className="px-10 bg-gray-100 py-[70px]">
        <h2 className={`${lato.className} text-4xl mb-10`}>Shop by Category</h2>
        <Carousel responsive={responsive} className="">
          
          <div className="">
              <Image
                src="/image/hero-images/hero-man1.avif"
                alt=""
                className={`w-auto h-[500px]`}
                width={0}
                height={0}
                sizes="100vw"
              />
              <div className="mt-3">
                <p className={`text-2xl font-black ${futuraHeavy.className}`}>Polos</p>
                <p className={`${futuraHeavy.className} text-[#808080] cursor-pointer underline text-[#808080]`}>Shop Now</p>
              </div>
              
              
            </div>
            <div className="">
              <Image
                src="/image/hero-images/hero-man2.avif"
                alt=""
                className={` w-auto h-[500px] `}
                width={0}
                height={0}
                sizes="100vw"
              />
              <div className="mt-3">
                <p className={`text-2xl font-black ${futuraHeavy.className}`}>Hoodies</p>
                <p className={`${futuraHeavy.className} text-[#808080] cursor-pointer underline text-[#808080]`}>Shop Now</p>
              </div>
              
            </div>
            <div className="">
              <Image
                src="/image/hero-images/hero-man3.avif"
                alt=""
                className={` w-auto h-[500px] `}
                width={0}
                height={0}
                sizes="100vw"
              />
              <div className="mt-3">
                <p className={`text-2xl font-black ${futuraHeavy.className}`}>Polos</p>
                <p className={`${futuraHeavy.className} cursor-pointer underline text-[#808080]`}>Shop Now</p>
              </div>
            </div>
            <div className="-ml-2">
              <Image
                src="/image/hero-images/hero-man1.avif"
                alt=""
                className={`w-auto h-[500px]`}
                width={0}
                height={0}
                sizes="100vw"
              />
              <div className="mt-3">
                <p className={`text-2xl font-black ${futuraHeavy.className}`}>Discover Wrinkle Free</p>
                <p className={`${futuraHeavy.className} text-[#808080] cursor-pointer underline text-[#808080]`}>Shop Now</p>
              </div>
              
              
            </div>
            <div className="">
              <Image
                src="/image/hero-images/hero-man2.avif"
                alt=""
                className={` w-auto h-[500px] `}
                width={0}
                height={0}
                sizes="100vw"
              />
              <div className="mt-3">
                <p className={`text-lg font-black ${futuraHeavy.className}`}>Discover Wrinkle Free</p>
                <p className={`${futuraHeavy.className} text-[#808080] cursor-pointer underline text-[#808080]`}>Shop Now</p>
              </div>
              
            </div>
        </Carousel>
      </div>
      
      {/* brands */}
      
        <Brands/>
      {/* end of brands */}



    </div>
  );
}
