import Image from "next/image";
import React from "react";
import leftimg from "/assets/nftmarketplace/leftimg.png";
import mid2 from "/assets/nftmarketplace/mid2.png";
import hero from "/assets/hero.svg";
import user1 from "/assets/users/user1.png";
import cf1 from "/assets/collectionfeaturednfts/cf1.png";
import cf2 from "/assets/collectionfeaturednfts/cf2.png";
import cf3 from "/assets/collectionfeaturednfts/cf3.png";
import cf4 from "/assets/collectionfeaturednfts/cf4.png";
import cf5 from "/assets/collectionfeaturednfts/cf5.png";
import cf6 from "/assets/collectionfeaturednfts/cf6.png";

const CollectionNFT = () => {
  const collections = [
    {
      collectionName: "Amazing Collection",
      img1: leftimg,
      img2: cf6,
      img3: cf4,
      img4: cf2,
      username: "Arkhan",
    },
    {
      collectionName: "Amazing Collection",
      img1: hero,
      img2: cf5,
      img3: cf2,
      img4: cf3,
      username: "Arkhan",
    },
    {
      collectionName: "Amazing Collection",
      img1: mid2,
      img2: cf1,
      img3: cf6,
      img4: cf4,
      username: "Arkhan",
    },
  ];
  return (
    <div className="pb-[10%] pt-[5%] bg-zinc-200 bg-opacity-20 ">
      <h2 className="uppercase font-extrabold text-[20px] md:text-[25px] text-black py-[3%] max-[767px]:px-[5%] md:px-[10%] ">
        Collection featured nfts
      </h2>
      <div className="scroller-x-axes flex max-[1023px]:overflow-x-scroll   md:flex-row flex-col md:gap-x-4 gap-y-4 md:px-[10%] ">
        {collections.map((collection, index) => (
          <div
            key={index}
            className="lg:w-[33%] max-[1023px]:min-w-[50%] max-[767px]:w-full md:mx-0 px-[5%] md:px-0"
          >
            <div className="flex  gap-x-2">
              <div className="max-w-[75%] flex flex-col justify-center">
                <Image
                  src={collection.img1}
                  width={265}
                  height={272}
                  className="rounded-lg my-auto"
                  alt=""
                  data-aos="zoom-in-down"
                />
              </div>
              <div className="min-w-[25%] flex flex-col gap-y-2 justify-center ">
                <div className="flex">
                  <Image
                    src={collection.img2}
                    height={85}
                    width={103}
                    className="rounded-lg"
                    alt=""
                    data-aos="zoom-out"
                  />
                </div>
                <div className="flex ">
                  <Image
                    src={collection.img3}
                    height={85}
                    width={103}
                    className="rounded-lg"
                    alt=""
                    data-aos="zoom-out"
                  />
                </div>
                <div className="flex">
                  <Image
                    src={collection.img4}
                    height={85}
                    width={103}
                    className="rounded-lg"
                    alt=""
                    data-aos="zoom-out"
                  />
                </div>
              </div>
            </div>
            <div className="pt-[5%]  flex justify-between">
              <div className=" w-full">
                <p className="  text-left text-sm md:text-[15px] lg:text-[20px] font-bold">
                  {collection.collectionName}
                </p>
                <div className="flex justify-between">
                  <div className="flex gap-x-2">
                    <Image
                      src={user1}
                      width={25}
                      height={25}
                      className="rounded-full"
                      alt=""
                      style={{ position: "relative", zIndex: 1 }}
                    />
                    <p className="text-xs">by {collection.username}</p>
                  </div>{" "}
                  <div>
                    <p className="flex text-xs  badge badge-primary badge-outline  rounded-lg">
                      Total 54 Items
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionNFT;
