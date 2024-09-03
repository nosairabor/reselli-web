import React from 'react';
import localFont from "next/font/local";


const lato = localFont({
    src: "../../fonts/Lato-Regular.ttf",
})

const Footer = () => {
    return (
        <footer className={`footer text-black pt-32 bg-[#EEEEEE] ${lato.className}`}>
            <div className="container">
                <div className="flex">
                    <div className=" flex-1 flex items-center">
                        <h4 className="uppercase text-3xl font-bold "> RESELLi.</h4>
                    </div>

                    <div className="flex-1 justify-center mx-6">
                        <h5 className=" font-bold text-lg uppercase">Buy</h5>
                        <ul className="block mt-6">
                        <li className="block mt-2"><a href="#" className="hover:underline text-sm">Registration</a></li>
                        <li className="block mt-2"><a href="#" className="hover:underline text-sm ">How it works</a></li>
                        <li className="block mt-2"><a href="#" className="hover:underline text-sm ">Money back Guarantee</a></li>
                        {/* <li className="block"><a href="#" className="hover:underline ">Registration</a></li> */}
                        </ul>
                    </div>

                    <div className="flex-1 justify-center mx-6">
                        <h5 className=" font-bold text-lg uppercase">Sell</h5>
                        <ul className="block mt-6">
                        <li className="block mt-2"><a href="#" className="hover:underline text-sm ">Registration</a></li>
                        <li className="block mt-2"><a href="#" className="hover:underline text-sm ">Seller information section</a></li>
                        <li className="block mt-2"><a href="#" className="hover:underline text-sm ">Money back Guarantee</a></li>
                        {/* <li className="block"><a href="#" className="hover:underline ">Registration</a></li> */}
                        </ul>
                    </div>

                    <div className="flex-1 justify-center mx-6">
                        <h5 className=" font-bold text-lg uppercase">Help & Contact</h5>
                        <ul className="block mt-6">
                        <li className="block mt-2"><a href="#" className="hover:underline text-sm ">Company Info</a></li>
                        <li className="block mt-2"><a href="#" className="hover:underline text-sm ">Money back Guarantee</a></li>
                        <li className="block mt-2"><a href="#" className="hover:underline text-sm ">Contact us</a></li>
                        {/* <li className="block"><a href="#" className="hover:underline ">Registration</a></li> */}
                        </ul>
                    </div>
                    </div>
                </div>
            <div className="container mt-16 py-10 border-t border-[#D3D3D3]">
                <p className="px-10 text-xs text-center ">Copyright © 1995-2024 Resellly. All Rights Reserved. Accessibility, User Agreement, Privacy, Payments Terms of Use, Cookies.</p>
            </div>
        </footer>
    );
}

export default Footer;
