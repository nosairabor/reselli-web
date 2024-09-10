import { Women, Men, Designer, Kids } from "@/data/navbarDropdownInfo";
import Link from "next/link";
import { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import localFont from "next/font/local";



const categories = { Women, Men, Designer, Kids };

const lato = localFont({
  src: "../../fonts/Lato-Regular.ttf",
})


const DesktopNavbar = () => {
  const [activeSubMenu, setActiveSubMenu] = useState('web-development');
  return (
    // <nav className="bg-black">
    //   <ul className="z-40 flex justify-center items-center gap-x-12 text-[14px]">
    //     <li className="text-[14px] text-white hover:bg-white hover:text-black hover:underline p-2  hover:transition-all hover:duration-150 hover:delay-150">Women</li>
    //     <li className="text-[14px] text-white hover:bg-white hover:text-black hover:underline p-2  hover:transition-all hover:duration-150 hover:delay-150">Men</li>
    //     <li className="text-[14px] text-white hover:bg-white hover:text-black hover:underline p-2  hover:transition-all hover:duration-150 hover:delay-150">Kids</li>
    //     <li className="text-[14px] text-white hover:bg-white hover:text-black hover:underline p-2  hover:transition-all hover:duration-150 hover:delay-150">Designer</li>
    //     <li className="text-[14px] text-white hover:bg-white hover:text-black hover:underline p-2  hover:transition-all hover:duration-150 hover:delay-150">VIP Wardrobe</li>
    //     <li className="text-[14px] text-white hover:bg-white hover:text-black hover:underline p-2  hover:transition-all hover:duration-150 hover:delay-150">Aso-Ebi</li>
    //     <li className="text-[14px] text-white hover:bg-white hover:text-black hover:underline p-2  hover:transition-all hover:duration-150 hover:delay-150">Hair</li>
    //     <li className="text-[14px] text-white hover:bg-white hover:text-black hover:underline p-2  hover:transition-all hover:duration-150 hover:delay-150">Clearance sales</li>

    //   </ul>
    // </nav>
    <div className={`bg-black ${lato.className} text-white`}>
      <div className="relative dropdown z-40 flex justify-center items-center gap-x-12 text-[14px] py-2">
        <h2 className=" text-white">Women</h2>
        <div className="bg-white  top-9 dropdown-content">
          <div
            className={`has-sub ${
              activeSubMenu === 'web-development' ? 'default' : ''
            }`}
            onClick={() => setActiveSubMenu('web-development')}
          >
            <a href="#web-development">Web Development</a>
            <div className="sub-dropdown-content">
              <a href="#frontend">Frontend Development</a>
              <a href="#backend">Backend Development</a>
              <a href="#fullstack">Fullstack Development</a>
            </div>
          </div>
          <div
            className="has-sub"
            onClick={() => setActiveSubMenu('app-development')}
          >
            <a href="#app-development">App Development</a>
            <div className="sub-dropdown-content">
              <a href="#android">Android Development</a>
              <a href="#ios">iOS Development</a>
              <a href="#cross-platform">Cross-Platform</a>
            </div>
          </div>
          <div
            className="has-sub"
            onClick={() => setActiveSubMenu('seo')}
          >
            <a href="#seo">SEO</a>
            <div className="sub-dropdown-content">
              <a href="#onpage">On-Page SEO</a>
              <a href="#offpage">Off-Page SEO</a>
              <a href="#technical">Technical SEO</a>
            </div>
          </div>
        </div>
        <h2>Men</h2>
        <h2>Kids</h2>
        <h2>Designer</h2>
        <h2>VIP Wardrobe</h2>
        <h2>Aso-Ebi</h2>
        <h2>Hair</h2>
        <h2>Clearance Sales</h2>
      </div>
    </div>
  );
};

export default DesktopNavbar;
