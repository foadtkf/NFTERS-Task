import { Toaster } from "react-hot-toast";
import Footer from "../components/shared/footer";
import Navbar from "../components/shared/navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
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
