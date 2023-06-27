import React from "react";

const Navbar = () => {
  return (
    <div
      className="navbar  fixed  bg-base-100"
      style={{
        zIndex: "1030",
      }}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-xs lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60"
          >
            <li>
              <div class="pt-0 relative mx-auto text-gray-600 lg:hidden btn btn-link no-underline">
                <input
                  class="border-2 border-gray-300 bg-white h-6 px-2  rounded-full text-xs  "
                  placeholder="Search"
                />
                <button
                  type="submit"
                  class="absolute right-0 top-0 mt-2 mr-6 no-underline "
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
            <li className="my-1 text-[10px] btn btn-sm btn-ghost rounded-none ">
              Marketplace
            </li>
            <li className="my-1 text-[10px] btn btn-sm btn-ghost rounded-none ">
              Resource
            </li>
            <li className="my-1 text-[10px] btn btn-sm btn-ghost rounded-none ">
              About
            </li>
            <li className="my-1 text-[10px] btn btn-sm btn-primary rounded-none">
              Upload
            </li>
            <li className="my-1 text-[10px] btn btn-sm btn-outline btn-primary rounded-none ">
              Connect Wallet
            </li>
          </ul>
        </div>
        <a className="text-violet-800 text-[18px] mr-1 font-extrabold lg:hidden">
          NFTERS
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-violet-800 text-[24px] font-extrabold btn-sm my-auto ">
              NFTERS
            </a>
          </li>
          <li className="btn btn-ghost text-xs px-2 btn-sm xl:btn-sm xl:px-4 xl:text-xl my-auto normal-case rounded-full">
            Marketplace
          </li>
          <li className=" btn btn-ghost text-xs px-2 btn-sm xl:btn-sm xl:px-4 xl:text-xl my-auto normal-case rounded-full">
            Resource
          </li>
          <li className="btn btn-ghost text-xs px-2 btn-sm xl:btn-sm xl:px-4 xl:text-xl my-auto normal-case rounded-full">
            About
          </li>
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
          <li className="btn btn-primary rounded-full xl:ml-5 text-xs px-2 btn-sm xl:btn-sm xl:px-4 xl:text-xl my-auto normal-case">
            Upload
          </li>
          <li className="btn btn-outline btn-primary rounded-full   xl:ml-5 text-xs px-2 btn-sm xl:btn-sm xl:px-4 xl:text-xl my-auto normal-case">
            Connect Wallet
          </li>
        </ul>
      </div>
      <div className="navbar-end">{/* <a className="btn">Button</a> */}</div>
    </div>
  );
};

export default Navbar;
