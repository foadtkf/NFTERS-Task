import Head from "next/head";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div
      className={`md:min-h-[80vh] min-h-screen flex justify-center items-center bg-white text-black`}
    >
      <Head>
        <title>NFTERS:404</title>
      </Head>
      <div>
        <h1 className="text-2xl md:text-4xl font-extrabold">Oooops...</h1>
        <h2 className="text-xl md:text-2xl font-extrabold">
          Looks like the page could not be found!
        </h2>
        <p className="text-md md:text-xl font-light">
          Go back to{" "}
          <Link
            href="/"
            className="btn btn-primary btn-sm text-white roudned-full"
          >
            NFTERS
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
