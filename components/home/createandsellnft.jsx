import Image from "next/image";
import React from "react";
import leftimg from "/assets/nftmarketplace/leftimg.png";
import mid2 from "/assets/nftmarketplace/mid2.png";
import hero from "/assets/hero.svg";
import user1 from "/assets/users/user1.png";
import user2 from "/assets/users/user2.png";
const CreateAndSellNFT = () => {
  return (
    <div className="lg:px-[10%] py-[10%] md:grid grid-cols-2 flex flex-col gap-y-8">
      <div className="grid grid-cols-2 gap-x-3 md:gap-x-8 md:px-0 px-4">
        <div className="flex flex-col h-full">
          <div className="indicator flex-1 w-full h-full">
            <div
              className="indicator-item indicator-bottom indicator-end "
              style={{
                zIndex: "1020",
              }}
            >
              <Image
                src={user1}
                className="rounded-full hidden md:block"
                width={65}
                height={65}
                alt=""
              />
              <Image
                src={user1}
                className="rounded-full md:hidden "
                width={35}
                height={35}
                alt=""
              />
            </div>
            <Image
              src={hero}
              width={300}
              height={300}
              className="rounded-lg"
              alt=""
            />
          </div>
          <div className="indicator  flex-1 w-full h-full pt-[20%]  justify-end">
            <div
              className="indicator-item indicator-bottom indicator-end "
              style={{
                zIndex: "1020",
              }}
            >
              <Image
                src={user2}
                className="rounded-full hidden md:block"
                width={65}
                height={65}
                alt=""
              />
              <Image
                src={user2}
                className="rounded-full md:hidden "
                width={35}
                height={35}
                alt=""
              />
            </div>
            <Image
              src={mid2}
              width={194}
              height={214}
              className="rounded-lg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="indicator  max-w-full">
            <div
              className="indicator-item indicator-bottom indicator-end "
              style={{
                zIndex: "1020",
              }}
            >
              <Image
                src={user2}
                className="rounded-full hidden md:block"
                width={65}
                height={65}
                alt=""
              />
              <Image
                src={user2}
                className="rounded-full md:hidden "
                width={35}
                height={35}
                alt=""
              />
            </div>
            <Image
              src={leftimg}
              width={300}
              height={300}
              className="rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 md:gap-y-10 pl-[10%] justify-center">
        <h2 className="text-[24px] font-extrabold md:text-[32px] uppercase">
          Create and sell your NFTs
        </h2>
        <p className="text-sm md:text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
          phasellus placerat a pellentesque tellus sed egestas. Et tristique
          dictum sit tristique sed non. Lacinia lorem id consectetur pretium
          diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
        </p>
        <div>
          <p className="btn btn-primary rounded-full">Sign Up Now</p>
        </div>
      </div>
    </div>
  );
};

export default CreateAndSellNFT;
