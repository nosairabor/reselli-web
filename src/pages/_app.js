import "@/styles/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { RTkProvider } from "@/store/provider";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps }) {
  const pathname = usePathname();
  return (
    <div className="">
      <RTkProvider>
        <Header/>
        <Component className="bg-gray-50 h-full w-full" {...pageProps} />
        {pathname && !pathname.includes("seller-profile") && <Footer />}
      </RTkProvider>
    </div>

  );
}
