import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsFilter } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import leftimg from "/assets/nftmarketplace/leftimg.png";
import user1 from "/assets/users/user1.png";
import user2 from "/assets/users/user2.png";
import user5 from "/assets/users/user5.png";
import user3 from "/assets/users/user3.png";
import user4 from "/assets/users/user4.png";
import cf1 from "/assets/morenfts/cf1.png";
import cf2 from "/assets/morenfts/cf2.png";
import cf3 from "/assets/morenfts/cf3.png";
import cf4 from "/assets/morenfts/cf4.png";
import cf5 from "/assets/morenfts/cf1.png";
import cf6 from "/assets/morenfts/cf2.png";
import { useMediaQuery } from "@react-hook/media-query";
import { toast } from "react-hot-toast";

const DiscoverMoreNFT = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [filterary, setFilterary] = useState([]);
  const handleFilter = (value) => {
    if (filterary.includes(value)) {
      setFilterary(filterary.filter((item) => item !== value));
    } else {
      setFilterary([...filterary, value]);
    }
  };
  const filters = [
    {
      name: "All Categories",
      value: "all",
    },
    {
      name: "Art",
      value: "art",
    },
    {
      name: "Celebrities",
      value: "celebrities",
    },
    {
      name: "Gaming",
      value: "gaming",
    },
    {
      name: "Sport",
      value: "sport",
    },
    {
      name: "Music",
      value: "music",
    },
    {
      name: "Crypto",
      value: "crypto",
    },
  ];
  const nfts = [
    {
      name: "ArtCrypto",
      contributors: [
        {
          name: "user1",
          img: user1,
        },
        {
          name: "user2",
          img: user2,
        },
        {
          name: "user3",
          img: user3,
        },
        {
          name: "user4",
          img: user4,
        },
      ],
      price: 0.25,
      quantity: 1,
      total: 321,
      timeLeft: "2h 10m 20s",
      img: cf1,
    },
    {
      name: "This NFT",
      contributors: [
        {
          name: "user2",
          img: user2,
        },
        {
          name: "user5",
          img: user5,
        },
        {
          name: "user3",
          img: user3,
        },
        {
          name: "user4",
          img: user4,
        },
      ],
      price: 0.25,
      quantity: 10,
      total: 321,
      timeLeft: "10h 4m 2s",
      img: cf2,
    },
    {
      name: "NameCrypto",
      contributors: [
        {
          name: "user3",
          img: user3,
        },
        {
          name: "user1",
          img: user1,
        },
        {
          name: "user3",
          img: user3,
        },
        {
          name: "user4",
          img: user4,
        },
      ],
      price: 0.25,
      quantity: 2,
      total: 321,
      timeLeft: "4h 4m 4s",
      img: cf3,
    },
    {
      name: "KingCrypto",
      contributors: [
        {
          name: "user5",
          img: user5,
        },
        {
          name: "user1",
          img: user1,
        },
        {
          name: "user3",
          img: user3,
        },
        {
          name: "user4",
          img: user4,
        },
      ],
      price: 0.25,
      quantity: 13,
      total: 320,
      timeLeft: "2h 4m 40s",
      img: cf4,
    },
    {
      name: "QueenCrypto",
      contributors: [
        {
          name: "user2",
          img: user2,
        },
        {
          name: "user5",
          img: user5,
        },
        {
          name: "user3",
          img: user3,
        },
        {
          name: "user4",
          img: user4,
        },
      ],
      price: 0.75,
      quantity: 10,
      total: 21,
      timeLeft: "5h 40m 7s",
      img: cf5,
    },
    {
      name: "ArtCrypto",
      contributors: [
        {
          name: "user1",
          img: user1,
        },
        {
          name: "user2",
          img: user2,
        },
        {
          name: "user3",
          img: user3,
        },
        {
          name: "user4",
          img: user4,
        },
      ],
      price: 0.45,
      quantity: 17,
      total: 450,
      timeLeft: "15h 30m 7s",
      img: cf1,
    },
    {
      name: "This NFT",
      contributors: [
        {
          name: "user2",
          img: user2,
        },
        {
          name: "user5",
          img: user5,
        },
        {
          name: "user3",
          img: user3,
        },
        {
          name: "user4",
          img: user4,
        },
      ],
      price: 0.25,
      quantity: 4,
      total: 210,
      timeLeft: "3h 50m 2s",
      img: cf2,
    },
    {
      name: "NameCrypto",
      contributors: [
        {
          name: "user3",
          img: user3,
        },
        {
          name: "user1",
          img: user1,
        },
        {
          name: "user3",
          img: user3,
        },
        {
          name: "user4",
          img: user4,
        },
      ],
      price: 0.25,
      quantity: 70,
      total: 125,
      timeLeft: "6h 3m 7s",
      img: cf3,
    },
    {
      name: "KingCrypto",
      contributors: [
        {
          name: "user5",
          img: user5,
        },
        {
          name: "user1",
          img: user1,
        },
        {
          name: "user3",
          img: user3,
        },
        {
          name: "user4",
          img: user4,
        },
      ],
      price: 0.25,
      quantity: 31,
      total: 60,
      timeLeft: "9h 37m 7s",
      img: cf4,
    },
    {
      name: "QueenCrypto",
      contributors: [
        {
          name: "user2",
          img: user2,
        },
        {
          name: "user5",
          img: user5,
        },
        {
          name: "user3",
          img: user3,
        },
        {
          name: "user4",
          img: user4,
        },
      ],
      price: 0.75,
      quantity: 21,
      total: 34,
      timeLeft: "19h 6m 37s",
      img: cf5,
    },
    {
      name: "OtherCrypto",
      contributors: [
        {
          name: "user5",
          img: user5,
        },
        {
          name: "user2",
          img: user2,
        },
        {
          name: "user3",
          img: user3,
        },
        {
          name: "user4",
          img: user4,
        },
      ],
      price: 0.25,
      quantity: 6,
      total: 347,
      timeLeft: "3h 50m 2s",
      img: cf1,
    },
    {
      name: "New NFT",
      contributors: [
        {
          name: "user1",
          img: user1,
        },
        {
          name: "user2",
          img: user2,
        },
        {
          name: "user3",
          img: user3,
        },
        {
          name: "user4",
          img: user4,
        },
      ],
      price: 0.25,
      quantity: 8,
      total: 745,
      timeLeft: "1h 24m 20s",
      img: cf6,
    },
  ];
  return (
    <div className="md:px-[10%] py-[5%]  bg-zinc-200   bg-opacity-20">
      <h2 className="text-[22px] font-extrabold md:text-[32px] uppercase px-[10%] md:px-0 ">
        discover more nfts
      </h2>
      <div className="md:flex md:flex-row  md:flex-row-reverse md:justify-between py-[5%] md:py-[40px] px-[10%] md:px-0 ">
        <p
          className={`btn btn-xs md:btn-sm normal-case btn-ghost md:flex
            `}
        >
          <span>
            <BsFilter className="my-auto mr-1" />
          </span>
          All Filters
        </p>
        <div className="flex flex-wrap gap-x-2 ">
          {filters.map((item, index) => (
            <p
              key={index}
              className={`btn btn-xs md:btn-sm normal-case ${
                filterary.includes(item.value) ? " btn-primary" : "btn-ghost"
              }`}
              onClick={() => handleFilter(item.value)}
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-8 md:gap-6 mx-0">
        {isMobile &&
          nfts.slice(0, 4).map((item, index) => (
            <div
              className="shadow-lg rounded-xl relative mx-[10%] md:mx-0 bg-white my-[5%]"
              key={index}
            >
              <Image
                src={item.img}
                width={247}
                height={222}
                className="rounded-lg p-[3%] md:p-[10px] mx-auto"
                alt=""
              />
              <div className="absolute  bottom-[110px] left-[30px] md:bottom-[130px] md:left-[55px] lg:bottom-[115px] lg:left-[25px]">
                <div className="relative flex flex-row">
                  <div className="relative">
                    <Image
                      src={item.contributors[0].img}
                      width={40}
                      height={40}
                      className="rounded-full"
                      alt=""
                      style={{ position: "relative", zIndex: 1 }}
                    />
                  </div>
                  <div className="relative -ml-[10px]">
                    <Image
                      src={item.contributors[1].img}
                      width={40}
                      height={40}
                      className="rounded-full"
                      alt=""
                      style={{ position: "relative", zIndex: 2 }}
                    />
                  </div>
                  <div className="relative -ml-[10px]">
                    <Image
                      src={item.contributors[2].img}
                      width={40}
                      height={40}
                      className="rounded-full"
                      alt=""
                      style={{ position: "relative", zIndex: 3 }}
                    />
                  </div>
                  <div className="relative -ml-[10px]">
                    <Image
                      src={item.contributors[3].img}
                      width={40}
                      height={40}
                      className="rounded-full"
                      alt=""
                      style={{ position: "relative", zIndex: 4 }}
                    />
                  </div>
                </div>
              </div>
              <div className=" px-[5%] md:px-[20px]">
                <p className="  text-left text-sm md:text-[15px] lg:text-[20px] font-bold  py-[2%]">
                  {item.name}
                </p>
                <div className="flex justify-between  pb-[5%]">
                  <p className="flex text-[6px] md:text-[10px] text-green-600">
                    <span className="my-auto">
                      <FaEthereum />
                    </span>
                    {item.price} ETH
                  </p>
                  <p className=" text-[6px] md:text-[10px]">
                    {item.quantity} of {item.total}
                  </p>
                </div>
                <div className="flex justify-between  py-[10%]">
                  <p className="flex text-[6px] md:text-[10px] text-violet-800 my-auto">
                    {item.timeLeft} left
                  </p>
                  <p
                    className=" text-[12px] md:text-[15px] text-violet-800 link no-underline "
                    onClick={() => toast.error("Working on that!")}
                  >
                    Place a bid
                  </p>
                </div>
              </div>
            </div>
          ))}
        {!isMobile &&
          nfts.map((item, index) => (
            <div
              className="shadow-lg rounded-xl relative mx-[10%] md:mx-0 bg-white"
              key={index}
            >
              <Image
                src={item.img}
                width={247}
                height={222}
                className="rounded-lg p-[3%] md:p-[10px] mx-auto"
                alt=""
              />
              <div className="absolute  bottom-[110px] left-[30px] md:bottom-[130px] md:left-[55px] lg:bottom-[115px] lg:left-[25px]">
                <div className="relative flex flex-row">
                  <div className="relative">
                    <Image
                      src={item.contributors[0].img}
                      width={40}
                      height={40}
                      className="rounded-full"
                      alt=""
                      style={{ position: "relative", zIndex: 1 }}
                    />
                  </div>
                  <div className="relative -ml-[10px]">
                    <Image
                      src={item.contributors[1].img}
                      width={40}
                      height={40}
                      className="rounded-full"
                      alt=""
                      style={{ position: "relative", zIndex: 2 }}
                    />
                  </div>
                  <div className="relative -ml-[10px]">
                    <Image
                      src={item.contributors[2].img}
                      width={40}
                      height={40}
                      className="rounded-full"
                      alt=""
                      style={{ position: "relative", zIndex: 3 }}
                    />
                  </div>
                  <div className="relative -ml-[10px]">
                    <Image
                      src={item.contributors[3].img}
                      width={40}
                      height={40}
                      className="rounded-full"
                      alt=""
                      style={{ position: "relative", zIndex: 4 }}
                    />
                  </div>
                </div>
              </div>
              <div className=" px-[5%] md:px-[20px]">
                <p className="  text-left text-sm md:text-[15px] lg:text-[20px] font-bold  py-[2%]">
                  {item.name}
                </p>
                <div className="flex justify-between  pb-[5%]">
                  <p className="flex text-[6px] md:text-[10px] text-green-600">
                    <span className="my-auto">
                      <FaEthereum />
                    </span>
                    {item.price} ETH
                  </p>
                  <p className=" text-[6px] md:text-[10px]">
                    {item.quantity} of {item.total}
                  </p>
                </div>
                <div className="flex justify-between  py-[10%]">
                  <p className="flex text-[6px] md:text-[10px] text-violet-800 my-auto">
                    {item.timeLeft} left
                  </p>
                  <p
                    className=" text-[12px] md:text-[15px] text-violet-800 link no-underline "
                    onClick={() => toast.error("Working on that!")}
                  >
                    Place a bid
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-center pt-[5%]">
        <li
          className="btn btn-outline btn-primary rounded-full   xl:ml-5 text-xs px-2 btn-sm xl:btn-sm xl:px-4 xl:text-xl my-auto normal-case"
          onClick={() => toast.error("Working on that!")}
        >
          More NFTs
        </li>
      </div>
    </div>
  );
};

export default DiscoverMoreNFT;
