import Image from "next/image";
import React from 'react';
import localFont from "next/font/local";
import local from 'next/font/local';
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";
import Link from "next/link";


const lato = localFont({
    src: "../../fonts/Lato-Regular.ttf",
})
const futura = local({
    src: "../../fonts/FuturaCMedium.ttf",
})
const futuraHeavy = local({
    src: "../../fonts/FuturaHeavy.ttf",
})
const Footer = () => {
    return (
        <footer >
            <div className="flex justify-center lg:gap-5 mt-10">
              <Link href="">
                <FaFacebook className="text-2xl"/>
              </Link>
              <Link href={""}>
                <FaXTwitter className="text-2xl"/>
              </Link>
              <Link href="">
                <FaTiktok className="text-2xl"/>
              </Link>
              <Link href={""}>
                <FaSnapchat className="text-2xl"/>
              </Link>
              
              
            </div>
            <div className={`h-[320px] footer text-[#666666] mt-10 pt-11 bg-[#EEEEEE] ${futura.className}`}>
                <div className="container">
                    <div className="flex">
                        <div className=" flex-1 flex items-center">
                            <h4 className={`${lato.className} text-3xl font-bold text-black`}> RESELLi.</h4>
                        </div>

                        <div className="flex-1 justify-center mx-6">
                            <h5 className={`${futuraHeavy.className} font-bold text-lg uppercase `}>Buy</h5>
                            <ul className="block mt-3">
                            <li className="block mt-2"><a href="#" className="hover:underline text-sm">Registration</a></li>
                            <li className="block mt-2"><a href="#" className="hover:underline text-sm ">How it works</a></li>
                            <li className="block mt-2"><a href="#" className="hover:underline text-sm ">Money back Guarantee</a></li>
                            {/* <li className="block"><a href="#" className="hover:underline ">Registration</a></li> */}
                            </ul>
                        </div>

                        <div className="flex-1 justify-center mx-6">
                            <h5 className={`${futuraHeavy.className} font-bold text-lg uppercase `}>Sell</h5>
                            <ul className="block mt-3 ">
                            <li className="block mt-2"><a href="#" className="hover:underline text-sm ">Registration</a></li>
                            <li className="block mt-2"><a href="#" className="hover:underline text-sm ">Seller information section</a></li>
                            <li className="block mt-2"><a href="#" className="hover:underline text-sm ">Money back Guarantee</a></li>
                            {/* <li className="block"><a href="#" className="hover:underline ">Registration</a></li> */}
                            </ul>
                        </div>

                        <div className="flex-1 justify-center mx-6">
                            <h5 className={`${futuraHeavy.className} font-bold text-lg uppercase `}>Help & Contact</h5>
                            <ul className="block mt-3 ">
                            <li className="block mt-2"><a href="#" className="hover:underline text-sm ">Company Info</a></li>
                            <li className="block mt-2"><a href="#" className="hover:underline text-sm ">Money back Guarantee</a></li>
                            <li className="block mt-2"><a href="#" className="hover:underline text-sm ">Contact us</a></li>
                            {/* <li className="block"><a href="#" className="hover:underline ">Registration</a></li> */}
                            </ul>
                        </div>

                        <div className="flex-1 justify-center mx-6">
                            <h5 className={`${futuraHeavy.className} font-bold text-lg uppercase `}>Shopping from</h5>
                            <ul className="block mt-3 ">
                            <li className="block mt-2"><a href="#" className="hover:underline text-sm ">You're in <span className="pl-1">🇳🇬</span> <span className="px-1">|</span> <span className={`${futuraHeavy.className} uppercase`}>Change</span></a></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                <div className="container mt-12 py-9 border-t border-[#D3D3D3]">
                    <p className="px-10 text-xs text-center ">Copyright © 1995-2024 Resellly. All Rights Reserved. Accessibility, User Agreement, Privacy, Payments Terms of Use, Cookies.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
