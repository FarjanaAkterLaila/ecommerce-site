import Image from "next/image";
import Header from "./Header";
import "./globals.css"
import Banner from "./Banner";
import Feature from "./Feature";
import Card from "./Card";
import Offer from "./Offer";

import Collectioncloths from "./Collectioncloths";
import Footer from "./Footer";
import Sellcard from "./Sellcard";
import Summersection from "./Summersection";
export default function Home() {
  return (
    <div className="bg-[#f4f8ff]">
      <Header />

      
      <Banner />
      <Feature/>
     <Card/>
     <Offer></Offer>
 {/* <Collectioncloths/> */}
 <Summersection/>
 <Sellcard/>
    <Footer /> 
    </div>
  );
}
