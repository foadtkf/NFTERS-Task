import Image from "next/image";
import React from "react";
import hero from "/assets/hero.svg";
import hero2 from "/assets/hero2.svg";
import hero3 from "/assets/hero3.svg";
import herobadge from "/assets/herobadge.svg";
import { useRouter } from "next/router";
import { FaEthereum } from "react-icons/fa";
const Hero = () => {
  const router = useRouter();
  return (
    <div
      className=" pt-[40%] md:pt-[20%] lg:pt-[10%] pb-[6%] "
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <style jsx>
        {`
          .glassbg {
            background: rgba(54, 185, 226, 0.43);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border: 1px solid rgba(54, 185, 226, 0.3);
          }
        `}
      </style>
      <div className="md:flex md:flex-row-reverse xl:mx-[7%] gap-6 ">
        <div className="w-full md:w-[50%] lg:flex lg:flex-col lg:justify-center indicator">
          <div
            className="indicator-item indicator-middle indicator-start hidden md:block"
            style={{
              zIndex: "1020",
            }}
          >
            <Image src={herobadge} className="rounded-full" alt="" />
          </div>
          <div className="stack" style={{ position: "relative" }}>
            <div className="image-container relative">
              <Image src={hero} className="rounded-lg" alt="" />
              <div className="image-text top-[0%] left-[0%] w-full md:w-[80%] md:left-[10%] lg:left-[5%] lg:w-[65%]">
                <div className="pt-[5%] pl-[5%]">
                  <div className="  text-left text-white text-sm md:text-[28px] font-bold">
                    Abstr Gradient NFT
                  </div>
                  <div className="flex">
                    <img
                      className="w-6  rounded-full"
                      src="https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg"
                    />
                    <p>Arkhan17</p>
                  </div>
                </div>
                <div className="glassbg rounded-lg  flex justify-between mt-[40%] md:mt-[70%]  lg:mt-[85%] px-[24px] py-[14px]">
                  <div>
                    <p className="text-xs">Current Bid</p>
                    <p className="flex text-xs md:text-[20px]">
                      <span className="my-auto">
                        <FaEthereum />
                      </span>
                      0.25 ETH
                    </p>
                  </div>
                  <div>
                    <p className="text-xs">Ends in</p>
                    <p className="text-xs md:text-[20px]">12h 43m 42s</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:mr-[-160px] lg:mb-[50px]  ">
              <Image src={hero2} className="rounded-lg" alt="" />
            </div>
            <div className="lg:ml-[300px] lg:mb-[90px]  ">
              <Image src={hero3} className="rounded-lg" alt="" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%] px-[1%] md:px-0">
          <h1 className="text-[30px] lg:text-[40px] font-extrabold text-black">
            Discover, and collect Digital Art NFTs
          </h1>
          <p className="pt-4 pb-7 pr-[3%] text-xs md:text-xl text-[#565656]">
            Digital marketplace for crypto collectibles and non-fungible tokens
            (NFTs). Buy, Sell, and discover exclusive digital assets.
          </p>
          <button
            className="btn btn-primary rounded-full normal-case btn-sm"
            onClick={() => router.push("#explore")}
          >
            Explore Now{" "}
          </button>
          <div>
            <div className="stats servicecards flex md:stats-horizontal overflow-x-scroll mt-7 md:hidden lg:flex">
              <div className="stat">
                <div className="stat-value">98K+</div>
                <div className="stat-desc">Artwork</div>
              </div>

              <div className="stat">
                <div className="stat-value">12K+</div>
                <div className="stat-desc">Auction</div>
              </div>

              <div className="stat">
                <div className="stat-value">15K+</div>
                <div className="stat-desc">Artist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="stats servicecards md:flex hidden lg:hidden md:stats-horizontal overflow-x-scroll mt-7">
        <div className="stat">
          <div className="stat-value">98K+</div>
          <div className="stat-desc">Artwork</div>
        </div>

        <div className="stat">
          <div className="stat-value">12K+</div>
          <div className="stat-desc">Auction</div>
        </div>

        <div className="stat">
          <div className="stat-value">15K+</div>
          <div className="stat-desc">Artist</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
