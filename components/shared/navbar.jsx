import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import useWindowScroll from "@react-hook/window-scroll";
import Link from "next/link";

const Navbar = ({ showDD, setShowDD }) => {
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const boxShadow = 0;

  const scrollY = useWindowScroll(5);
  useEffect(() => {
    if (scrollY > 0) {
      setBackgroundTransparacy(0.82);
    } else setBackgroundTransparacy(0);
  }, [scrollY]);
  const [drop, setDrop] = useState(false);
  const handledrop = () => {
    if (!drop) {
      setDrop(true);
    } else {
      setDrop(false);
    }
  };
  return (
    <div
      className="fixed w-full top-0 z-50"
      style={{
        background: `rgba(0, 0, 0, ${backgroundTransparacy})`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        zIndex: "1030",
      }}
    >
      <div class={` flex lg:justify-center  `}>
        <div className="  my-auto">
          <div class="navbar  hidden lg:block">
            <div class="navbar-center">
              <ul className="menu menu-horizontal px-1">
                <Link
                  href="/"
                  className={` text-[24px] font-extrabold btn-sm my-auto  ${
                    scrollY > 0 ? "text-white" : "text-violet-800"
                  }`}
                >
                  NFTERS
                </Link>
                <Link
                  href="/marketplace"
                  className={`btn btn-ghost text-xs px-2 btn-sm xl:btn-sm xl:px-4 xl:text-xl my-auto normal-case rounded-full ${
                    scrollY > 0 && "text-white btn-outline"
                  }`}
                >
                  Marketplace
                </Link>
                <Link
                  href="/resources"
                  className={`btn btn-ghost text-xs px-2 btn-sm xl:btn-sm xl:px-4 xl:text-xl my-auto normal-case rounded-full ${
                    scrollY > 0 && "text-white btn-outline"
                  }`}
                >
                  Resource
                </Link>
                <Link
                  href="/about"
                  className={`btn btn-ghost text-xs px-2 btn-sm xl:btn-sm xl:px-4 xl:text-xl my-auto normal-case rounded-full ${
                    scrollY > 0 && "text-white btn-outline"
                  }`}
                >
                  About
                </Link>
                <div class="pt-2 xl:pt-0  relative  text-gray-600">
                  <input
                    class="border-2 border-gray-300 bg-white h-10 xl:h-8 px-5 pr-16 rounded-full text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Search"
                  />
                  <button
                    type="submit"
                    class="absolute right-0 top-0 mt-4 xl:mt-2 mr-4"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                        fill="#757575"
                      />
                      <path
                        d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z"
                        fill="#757575"
                      />
                    </svg>
                  </button>
                </div>
                <Link
                  href="/upload"
                  className="btn btn-primary rounded-full xl:ml-5 text-xs px-2 btn-sm xl:btn-sm xl:px-4 xl:text-xl my-auto normal-case"
                >
                  Upload
                </Link>
                <Link
                  href="/wallet"
                  className="btn btn-outline btn-primary rounded-full   xl:ml-5 text-xs px-2 btn-sm xl:btn-sm xl:px-4 xl:text-xl my-auto normal-case"
                >
                  Connect Wallet
                </Link>
              </ul>
            </div>
          </div>
          <div className="block lg:hidden">
            <button onClick={handledrop} className="text-[1.5rem] mx-2">
              <AiOutlineMenu
                className={`${scrollY > 0 ? "text-white" : "text-black"}`}
              />
            </button>
            <ul
              tabindex={0}
              className={` text-sm font-thin font-serif md:text-base fixed h-full leftt-0 top-0 p-5 overflow-auto shadow bg-black  text-white w-[80%]  space-y-2  ${
                drop ? "flex flex-col" : "hidden"
              }`}
            >
              <button
                onClick={handledrop}
                className="text-[1rem] absolute right-0 pr-5"
              >
                <ImCross />
              </button>
              <li className="flex justify-center">
                <div class="p-0  relative mx-auto text-gray-600 lg:hidden btn btn-link no-underline md:flex ">
                  <input
                    class="border-2 border-gray-300 bg-white h-6 px-2  rounded-full text-xs md:w-full "
                    placeholder="Search"
                  />
                  <button
                    type="submit"
                    class="absolute -right-[20px] top-[6px] mt-2 mr-6 no-underline "
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                        fill="#757575"
                      />
                      <path
                        d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z"
                        fill="#757575"
                      />
                    </svg>
                  </button>
                </div>
              </li>
              <Link
                href="/marketplace"
                className="mb-1 text-[10px] btn btn-sm btn-ghost rounded-none normal-case "
              >
                Marketplace
              </Link>
              <Link
                href="/resources"
                className="my-1 text-[10px] btn btn-sm btn-ghost rounded-none normal-case "
              >
                Resource
              </Link>
              <Link
                href="about"
                className="my-1 text-[10px] btn btn-sm btn-ghost rounded-none normal-case "
              >
                About
              </Link>
              <Link
                href="upload"
                className="my-1 text-[10px] btn btn-sm btn-primary rounded-none normal-case"
              >
                Upload
              </Link>
              <Link
                href="/wallet"
                className="my-1 text-[10px] btn btn-sm btn-outline btn-primary rounded-none normal-case "
              >
                Connect Wallet
              </Link>
            </ul>
          </div>
        </div>
        <Link
          href="/"
          className={`text-[18px] mr-1 font-extrabold lg:hidden p-[5%] ${
            scrollY > 0 ? "text-white" : "text-violet-800"
          }`}
        >
          NFTERS
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
