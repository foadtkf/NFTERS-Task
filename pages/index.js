import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/home/hero";
import AmazeNFT from "../components/home/amazenft";
import NFTMarket from "../components/home/nftmarket";
import CollectionNFT from "../components/home/collectionnft";
import CreateAndSellNFT from "../components/home/createandsellnft";
import DiscoverMoreNFT from "../components/home/discovermorenft";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={` min-h-screen`}>
      <Head>
        <title>NFTERS</title>
        <meta
          name="description"
          content="NFTERS Homepage: A place where you can buy and sell NFTs"
        />
        <link rel="icon" href="/li2.png" />
      </Head>
      <div className={`${styles.container}`}>
        <Hero />
      </div>
      <AmazeNFT />
      <NFTMarket />
      <CollectionNFT />
      <CreateAndSellNFT />
      <DiscoverMoreNFT />
    </div>
  );
}
