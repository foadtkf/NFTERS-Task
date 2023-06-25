import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/home/hero";

export default function Home() {
  return (
    <div className={`${styles.container} min-h-screen`}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
}
