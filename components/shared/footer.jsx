import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="px-[10%]">
      <div className=" flex flex-wrap justify-between py-[10%] gap-y-4">
        <div className="md:w-[50%] lg:w-[33%]">
          <div className="text-black text-lg md:text-[24px] font-extrabold uppercase">
            NFters{" "}
          </div>
          <p className=" text-xs md:text-[14px] text-justify mt-4">
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
          <div className="flex justify-between w-[30%] mt-4">
            <p>
              <BsFacebook className="link link-hover] no-underline hover:no-underline   text-[30px] text-indigo-700 hover:text-indigo-900" />
            </p>
            <p>
              <AiFillTwitterCircle className="link link-hover] no-underline hover:no-underline rounded-full overflow-hidden text-[35px] text-blue-400 hover:text-blue-500" />
            </p>
            <p>
              <BsLinkedin className="link link-hover] no-underline hover:no-underline rounded-full overflow-hidden text-[32px] text-sky-600 hover:text-sky-800" />
            </p>
          </div>
        </div>
        <div>
          <span className=" text-black text-sm md:text-lg">Market Place</span>
          <div className="flex flex-col gap-y-2 mt-4">
            <p className="link link-hover   text-xs md:text-[14px] no-underline hover:no-underline">
              All NFTs
            </p>
            <p className="link link-hover   text-xs md:text-[14px] no-underline hover:no-underline">
              New
            </p>
            <p className="link link-hover   text-xs md:text-[14px] no-underline hover:no-underline">
              Art
            </p>
            <p className="link link-hover   text-xs md:text-[14px] no-underline hover:no-underline">
              Sports
            </p>
            <p className="link link-hover   text-xs md:text-[14px] no-underline hover:no-underline">
              Utility
            </p>
            <p className="link link-hover   text-xs md:text-[14px] no-underline hover:no-underline">
              Music
            </p>
            <p className="link link-hover   text-xs md:text-[14px] no-underline hover:no-underline">
              Domain Name
            </p>
          </div>
        </div>
        <div>
          <span className=" text-black text-sm md:text-lg">My Account</span>
          <div className="flex flex-col gap-y-2 mt-4">
            <p className="link link-hover  text-xs md:text-[14px] no-underline hover:no-underline">
              Profile
            </p>
            <p className="link link-hover  text-xs md:text-[14px] no-underline hover:no-underline">
              Favorite
            </p>
            <p className="link link-hover  text-xs md:text-[14px] no-underline hover:no-underline">
              My Collections
            </p>
            <p className="link link-hover  text-xs md:text-[14px] no-underline hover:no-underline">
              Settings
            </p>
          </div>
        </div>
        <div className="md:w-[50%] lg:w-[33%] max-[767px]:pb-[10%]">
          <div className="text-black text-sm md:text-lg font-bold ">
            Stay In The Loop{" "}
          </div>
          <p className=" text-xs md:text-[14px] text-justify mt-4">
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating NFTs.
          </p>
          <div className="form-control rounded-full w-full mt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your email address..."
                className="input input-bordered w-full pr-16 rounded-full text-[9px] lg:text-[14px] input-xs md:input-sm focus:outline-none"
              />
              <button className="btn btn-primary btn-xs md:btn-sm  absolute top-[4px] md:top-0 right-2 rounded-full normal-case">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[2%] border border-l-0 border-r-0 border-b-0">
        <p className="text-neutral-400 text-[14px] text-center ">
          Copyright © 2022 Avi Yansah
        </p>
      </div>
    </footer>
  );
};

export default Footer;
