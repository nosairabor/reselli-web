"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import LoginModal from "../Modal/LoginModal";
import SignupModal from "../Modal/SignupModal";
import ForgotPasswordModal from "../Modal/forgotPasswordModal";
import { useSelector, useDispatch } from "react-redux";
import { ClearUserInfo } from "@/lib/features/authentication/AuthSlice";
import localFont from "next/font/local";
import { TiHeartOutline } from "react-icons/ti";
import { GrShop } from "react-icons/gr";
import DesktopNavbar from "../navbar/desktopNavbar";
import Link from "next/link";

const lato = localFont({
  src: "../../fonts/Lato-Regular.ttf",
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const [openForgotPasswordModal, setOpenForgotPasswordModal] = useState(false);
  const auth = useSelector((store) => store.auth);
  const { currentUser } = auth;
  const dispatch = useDispatch();
  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const triggerSignupModal = () => {
    setOpenSignupModal(true);
    setOpenLoginModal(false);
  };

  const triggerLoginModal = () => {
    setOpenLoginModal(true);
    setOpenSignupModal(false);
  };

  const triggerForgotPasswordModal = () => {
    setOpenForgotPasswordModal(true);
    setOpenLoginModal(false);
    setOpenSignupModal(false);
  };

  return (
    <header className={`${lato.className}`}>
      <div className="flex justify-between px-[200px]">
        <div className="gap-x-3 flex pt-4 text-[13px]">
          <p onClick={() => setOpenLoginModal(true)}>Sign in</p>
          <div className="w-[1.3px] h-[20px] bg-[#D3D3D3]"></div>
          <p>Create Account</p>
          <div className="w-[1.3px] h-[20px] bg-[#D3D3D3]"></div>
          <div className="flex -translate-y-[14px]">
            <div className="-translate-y-3">
              <Image
                src={"/image/rewards-logo.svg"}
                className="h-[75px] w-[75px]"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <p className="ml-4 translate-y-[14px] text-[13px]">
              Earn points, unlock Rewards.{" "}
              <a className="underline" href="">
                What is Rewards?
              </a>
            </p>
          </div>
        </div>

        <div className="gap-3 flex px-[90px] pt-4 text-[13px]">
          <Link href="">Help</Link>
          <div className="w-[1.3px] h-[20px] bg-[#D3D3D3]"></div>
          <Link href="">Track your order</Link>
          <div className="w-[1.3px] h-[20px] bg-[#D3D3D3]"></div>
          <div className="-translate-y-2">
            <Image
              src={"/image/flag.png"}
              className="-pb-4 h-[35px] w-[37px]"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
      </div>
      <hr className="-mt-11" />
      <div className="mx-[200px] flex justify-between items-center py-5">
        <div className="logo-section flex-none mr-6">
          <h4 className={`text-4xl font-bold text-black ${lato.className}`}>
            RESELLi.
          </h4>
        </div>

        <div className="SearchBoxArea grow">
          <input
            type="text"
            className="w-10/12 rounded bg-gray-100 block px-4 py-2 text-gray-800 placeholder:text-slate-400 border focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm"
            placeholder="Hunt Items..."
          />
        </div>

        <div className="text-base flex items-center px-2 gap-3">
          {!currentUser ? (
            <div
              className="cursor-pointer flex gap-x-2 mt-1"
              onClick={() => setOpenLoginModal(true)}
            >
              <Image
                src={"/image/my-account.svg"}
                className="h-[27px] w-[27px]"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
              <p className="mt-[2px]">Sign in</p>
            </div>
          ) : (
            <div
              className="relative"
              onClick={handleMenuToggle}
              ref={menuRef}
            >
              {/* Avatar image */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#000] text-white text-lg cursor-pointer">
                {currentUser?.firstName?.split("")[0]}
                {currentUser?.lastName?.split("")[0]}
              </div>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  <ul className="py-2">
                    <li>
                      <Link href="/user/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link href="/user/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link href="/user/personalization" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Personalization
                      </Link>
                    </li>
                    <li>
                      <Link href="/user/wallet" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Wallet
                      </Link>
                    </li>
                    <li>
                      <Link href="/user/orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                       My Orders
                      </Link>
                    </li>
                    <li>
                      <Link href="/donations" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Donations
                      </Link>
                    </li>
                    <li>
                    <Link href="/invite" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Invite friends
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => dispatch(ClearUserInfo())}
                        className="block px-4 py-2 bg-inherit text-red-400 hover:bg-gray-100 w-full text-left"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}

          <div className="cursor-pointer flex gap-x-1 mt-[2px]">
            <TiHeartOutline className="w-[32px] h-[38px] text-black" />
            <p className="text-base mt-[6px]">Wishlist</p>
          </div>
          <div className="cursor-pointer flex gap-x-1 mt-[1px]">
            <GrShop className="w-[32px] h-[38px] text-black" />
            <p className="text-base mt-[6px]">N0.00</p>
          </div>
        </div>

        {openLoginModal && (
          <LoginModal
            close={setOpenLoginModal}
            triggerSignupModal={triggerSignupModal}
            triggerForgotPasswordModal={triggerForgotPasswordModal}
          />
        )}
        {openSignupModal && (
          <SignupModal
            close={setOpenSignupModal}
            triggerLoginModal={triggerLoginModal}
          />
        )}

        {openForgotPasswordModal && (
          <ForgotPasswordModal close={setOpenForgotPasswordModal} />
        )}
      </div>

      <DesktopNavbar />
    </header>
  );
};

export default Header;
