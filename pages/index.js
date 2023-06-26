import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/home/hero";
import AmazeNFT from "../components/home/amazenft";
import NFTMarket from "../components/home/nftmarket";
import CollectionNFT from "../components/home/collectionnft";

export default function Home() {
  return (
    <div className={` min-h-screen`}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.container}`}>
        <Hero />
      </div>
      <AmazeNFT />
      <NFTMarket />
      <CollectionNFT />
    </div>
  );
}
