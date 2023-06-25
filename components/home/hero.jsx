import Image from "next/image";
import React from "react";
import hero from "/assets/hero.svg";
import hero2 from "/assets/hero2.svg";
import hero3 from "/assets/hero3.svg";
import { useRouter } from "next/router";
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
      <div className="md:flex md:flex-row-reverse xl:mx-[7%] gap-6 ">
        <div className="w-full md:w-[50%] lg:flex lg:flex-col lg:justify-center">
          <div className="stack" style={{ position: "relative" }}>
            <div className="">
              <Image src={hero} className="rounded-lg" alt="" />
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
            <div className="stats servicecards flex md:stats-horizontal overflow-x-scroll mt-7">
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
    </div>
  );
};

export default Hero;
