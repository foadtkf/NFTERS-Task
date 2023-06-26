import React from "react";
import { AiOutlineTransaction } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
const AmazeNFT = () => {
  return (
    <div className="flex md:flex-row flex-col mx-[10%] gap-x-5 gap-y-5 justify-center py-[15%] lg:py-[7%]  bg-zinc-200 bg-opacity-20">
      <div className="md:w-[50%] md:py-[2%] ">
        <h2 className="uppercase font-extrabold text-[20px] md:text-[25px] text-black">
          The amazing NFT art of the world here
        </h2>
      </div>
      <div className="md:w-[30%]">
        <h3 className="text-[20px] md:text-xl font-bold flex">
          <AiOutlineTransaction className="my-auto mr-2" /> Fast Transaction
        </h3>
        <p className="text-xs text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque
          atque itaque cum at eaque?
        </p>
      </div>
      <div className="md:w-[30%]">
        <h3 className="text-[20px] md:text-xl font-bold flex">
          <BsGraphUp className="my-auto mr-2" /> Growth Transaction
        </h3>
        <p className="text-xs text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque
          atque itaque cum at eaque?
        </p>
      </div>
    </div>
  );
};

export default AmazeNFT;
