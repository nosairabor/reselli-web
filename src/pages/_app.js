import "@/styles/globals.css";
import "rsuite/dist/rsuite-no-reset.min.css";
// import "./index"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { RTkProvider } from "@/store/provider";


export default function App({ Component, pageProps }) {
  return (
    <div className="">
      <RTkProvider>
        <Header/>
        <Component className="bg-gray-50 h-full w-full" {...pageProps} />
        <Footer/>
      </RTkProvider>
    </div>

  );
}


