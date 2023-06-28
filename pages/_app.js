import { Toaster } from "react-hot-toast";
import Footer from "../components/shared/footer";
import Navbar from "../components/shared/navbar";
import "../styles/globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import ScrollToTop from "react-scroll-to-top";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      delay: 0,
      duration: 800,
    });
  });
  return (
    <>
      <ScrollToTop
        smooth
        component={
          <div
            className="indicator text-white   normal-case rounded-full py-[9px] px-[9px] btnnav bg-[#1a1b1b] "
            data-aos="zoom-out"
          >
            <BiSolidUpArrowCircle />
          </div>
        }
        className=" rounded-full "
      />
      <Navbar />
      <Component {...pageProps} />
      <div>
        <Toaster position="top-right" />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
