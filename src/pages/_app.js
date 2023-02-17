import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import TopPanel from "@/app/components/toppanel";
import './../app/globals.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <>
    <TopPanel/>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </>
  }