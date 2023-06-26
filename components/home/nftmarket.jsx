import Image from "next/image";
import React from "react";
import leftimg from "/assets/nftmarketplace/leftimg.png";
import mid from "/assets/nftmarketplace/mid1.png";
import mid2 from "/assets/nftmarketplace/mid2.png";
import mid3 from "/assets/nftmarketplace/mid3.png";
import user1 from "/assets/users/user1.png";
import li1 from "/assets/nftmarketplace/list/li1.png";
import li2 from "/assets/nftmarketplace/list/li2.png";
import li3 from "/assets/nftmarketplace/list/li3.png";
import li4 from "/assets/nftmarketplace/list/li4.png";
import li5 from "/assets/nftmarketplace/list/li5.png";
import { FaEthereum } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { toast } from "react-hot-toast";
const NFTMarket = () => {
  const collections = [
    {
      name: "CryptoFunks",
      bid: "19,769.39",
      percentage: 26.52,
      Ppercentage: 20,
      img: li1,
      verified: true,
    },
    {
      name: "Cryptix",
      bid: "2,769.39",
      percentage: 10.52,
      Ppercentage: 11,
      img: li2,
      verified: false,
    },
    {
      name: "Frensware",
      bid: "9,232.39",
      percentage: 2.52,
      Ppercentage: 2,
      img: li3,
      verified: false,
    },
    {
      name: "PunkArt",
      bid: "3,769.39",
      percentage: 1.52,
      Ppercentage: 1,
      img: li4,
      verified: true,
    },
    {
      name: "Art Crypto",
      bid: "10,769.39",
      percentage: 2.52,
      Ppercentage: 3,
      img: li5,
      verified: true,
    },
  ];
  const nftlist = [
    {
      name: "The Futr Abstr",
      img: mid,
      user: {
        name: "user1",
        img: user1,
      },
      price: 0.25,
      qty: 1,
      total: 8,
    },
    {
      name: "Second NFT",
      img: mid2,
      user: {
        name: "user1",
        img: user1,
      },
      price: 0.15,
      qty: 2,
      total: 6,
    },
    {
      name: "Art Crypto",
      img: mid3,
      user: {
        name: "user3",
        img: user1,
      },
      price: 0.45,
      qty: 1,
      total: 5,
    },
  ];
  return (
    <div className="flex flex-wrap lg:flex-nowrap  md:flex-row flex-col lg:px-[10%] gap-x-4 gap-y-4 py-[10%]">
      <div className="lg:w-[33%] md:mx-0 px-[5%] md:px-0">
        <Image src={leftimg} className="rounded-lg" alt="" />
        <div className="pt-[5%]  flex justify-between">
          <div className="flex gap-x-2">
            <Image
              src={user1}
              width={40}
              height={40}
              className="rounded-full"
              alt=""
              style={{ position: "relative", zIndex: 1 }}
            />
            <div>
              <p className="  text-left text-sm md:text-[15px] lg:text-[20px] font-bold">
                The Futr Abstr
              </p>
              <p className="text-xs">Arkhan17</p>
            </div>
          </div>
          <div>
            <p className="text-xs">Highest Bid</p>
            <p className="flex text-xs md:text-[20px]">
              <span className="my-auto">
                <FaEthereum />
              </span>
              0.25 ETH
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-[33%] flex flex-col gap-y-2">
        {nftlist.map((item, index) => (
          <div className="flex" key={index}>
            <Image
              src={item.img}
              height={147}
              width={147}
              className="rounded-lg"
              alt=""
            />
            <div className="ml-2 flex flex-col gap-y-2 justify-center">
              <p className="  text-left text-sm md:text-[20px] font-bold">
                {item.name}
              </p>
              <div className="flex md:gap-x-2">
                <Image
                  src={item.user.img}
                  width={25}
                  height={25}
                  className="rounded-full"
                  alt=""
                  style={{ position: "relative", zIndex: 1 }}
                />
                <p className="flex text-xs  badge badge-accent badge-outline  rounded-sm">
                  <span className="my-auto">
                    <FaEthereum />
                  </span>
                  {item.price} ETH
                </p>
                <p className="text-xs my-auto">
                  {item.qty} of {item.total}
                </p>
              </div>
              <div>
                <p
                  className="  btn btn-outline btn-primary btn-sm rounded-full normal-case"
                  onClick={() => toast.error("Working on that!")}
                >
                  Place a bid
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:w-[33%] pl-[3%]  border border-r-0 border-b-0 border-t-0">
        <h3 className="text-[20px] uppercase md:text-xl font-extrabold flex">
          Top collections over
        </h3>
        <h4 className="text-[15px] md:text-lg text-violet-800 mb-4">
          Last 7 days
        </h4>
        <div className="flex flex-col gap-y-4">
          {collections.map((collection, index) => (
            <div key={index} className="flex ">
              <h3 className="text-lg my-auto mr-2">{index + 1}</h3>
              <div className="indicator mr-2">
                {collection.verified && (
                  <span className="indicator-item-verified badge  p-0">
                    <MdVerified />
                  </span>
                )}
                <Image
                  src={collection.img}
                  width={60}
                  height={60}
                  className="rounded-full"
                  alt=""
                />
              </div>
              <div className="my-auto mr-2 min-w-[120px] max-w-[120px]">
                <p className="text-xs md:text-[20px]">{collection.name}</p>
                <p className="flex text-[10px] md:text-[15px]">
                  <span className="my-auto">
                    <FaEthereum />
                  </span>
                  {collection.bid}
                </p>
              </div>
              <div className="my-auto mr-2">
                {collection.percentage > collection.Ppercentage && (
                  <p className="text-teal-500 "> +{collection.percentage}%</p>
                )}

                {collection.percentage < collection.Ppercentage && (
                  <p className="text-rose-600  ">+{collection.percentage}%</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NFTMarket;
