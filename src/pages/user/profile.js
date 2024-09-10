import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Setting } from "@rsuite/icons";
// import { Link } from "react-router-dom";
import Link from "next/link";

export default function Profile() {
  return (
    <div>
      <TopProfile />
      <BottomProfile />
    </div>
  );
}

function TopProfile() {
  const auth = useSelector((store) => store.auth);
  const { currentUser } = auth;

  // {image:"", firstname:""}
  return (
    <div className="w-full max-w-[1350px] ms-24 p-24">
      <div className="flex items-center justify-between gap-4">
        <div className="flex- flex items-center gap-4">
          {/* image */}
          {currentUser?.img && currentUser?.image ? (
            <img className="w-52 h-52 rounded-full" src="" />
          ) : (
            <div className="w-52 h-52 flex items-center justify-center rounded-full bg-[#000] text-white text-4xl md:text-5xl">
              {currentUser?.firstName?.split("")[0]}
              {currentUser?.lastName?.split("")[0]}
            </div>
          )}

          {/* profile and username */}
          <div className="flex flex-col gap-4 items-start">
            <div className="flex-4 gap-4 text-4xl">
              {currentUser?.firstName}
              {" "}
              {/* Add middle name and username to auth, pull later */}
              {currentUser?.lastName}
            </div>

            <div className="flex gap-40 text-center justify-between">
              <div className="text-gray-600">About:</div>
              <div className="text-gray-600">Verified:</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-center border-solid">
          
          <Link
            href="./settings"
            className="rounded-md bg-inherit border-1 text-black items-center"
          >
            <Setting className="rs-icon" /> {/* Settings Icon from React Suite */}

            Profile settings
          </Link>
          {/* button */}
        </div>
      </div>
    </div>
  );
}

function BottomProfile() {
  const [activeTab, setActiveTab] = useState("wardrobe");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-4/5 mx-auto p-4 items-center">
      {/* Tab navigation */}
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-6 py-2 rounded-lg ${
            activeTab === "wardrobe" ? " text-white" : "bg-gray-200 text-black"
          }`}
          onClick={() => handleTabChange("wardrobe")}
        >
          Wardrobe
        </button>
        <button
          className={`px-6 py-2 rounded-lg ${
            activeTab === "review" ? "bg text-white" : "bg-gray-200 text-black"
          }`}
          onClick={() => handleTabChange("review")}
        >
          Review
        </button>
      </div>

      {/* Content Area */}
      <div className="flex flex-col gap-4 min-h-[35rem] border border-gray-300 rounded-lg p-6">
        {activeTab === "wardrobe" && (
          <div>
            {/* Wardrobe Filter Buttons */}
            <div className="flex justify-end space-x-4 mb-6">
              <button className="px-4 py-2 border bg-gray-200 text-black hover:bg-gray-600 hover:text-white transition duration-300 rounded">
                Active
              </button>
              <button className="px-4 py-2 border bg-gray-200 text-black hover:bg-gray-600 hover:text-white transition duration-300 rounded">
                Reserved
              </button>
              <button className="px-4 py-2 border bg-gray-200 text-black hover:bg-gray-600 hover:text-white transition duration-300 rounded">
                Drafts
              </button>
              <button className="px-4 py-2 border bg-gray-200 text-black hover:bg-gray-600 hover:text-white transition duration-300 rounded">
                Sold
              </button>
              <button className="px-4 py-2 border bg-gray-200 text-black hover:bg-gray-600 hover:text-white transition duration-300 rounded">
                Hidden
              </button>
            </div>

            {/* wardrobe placeholder */}
            <div className="text-gray-700">
              <p>Your wardrobe items will appear here</p>
            </div>
          </div>
        )}

        {activeTab === "review" && (
          <div className="text-gray-700">
            <p>Your reviews will appear here...</p>
          </div>
        )}
      </div>
    </div>
  );
}
