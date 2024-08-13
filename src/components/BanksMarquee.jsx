import React from "react";
import Kotak from "./BanksLogo/Kotak.png";
import icici from "./BanksLogo/ICICI.png";
import sbi from "./BanksLogo/SBI.webp";
import hdfc from "./BanksLogo/HDFC.jpg";
import Idbi from "./BanksLogo/IDBI.png";
import UnionBank from "./BanksLogo/UnionBank.jpg";
import BandhanBank from "./BanksLogo/BandhanBank.jpg";
import Incred from "./BanksLogo/Incred.png";
import SriRamBank from "./BanksLogo/ShriRam.webp";
import AnnaPurnaFinance from "./BanksLogo/Anna.jpeg";

function BanksMarquee() {
  return (
    <>
      <h2 className="text-center text-xl font-bold mt-2 mb-4">
        Our Esteemed Partners
      </h2>
      <marquee behavior="scroll" direction="left" className="overflow-hidden mb-8" data-aos="fade-up">
        <div className="flex flex-row justify-center items-center gap-3 w-max lg:w-full text-center">
          <img src={icici} alt="ICICI" className="ml-2 h-12 w-24 lg:h-32 lg:w-32 hover:scale-105 duration-200" />
          <img src={hdfc} alt="HDFC" className="ml-2 h-12 w-24 lg:h-32 lg:w-32 hover:scale-105 duration-200" />
          <img src={AnnaPurnaFinance} alt="AnnaPurnaFinance" className="ml-2 h-12 w-24 lg:h-24 lg:w-28 hover:scale-105 duration-200" />
          <img src={sbi} alt="SBI" className="ml-2 h-12 w-24 lg:h-32 lg:w-32 hover:scale-105 duration-200" />
          <img src={Idbi} alt="IDBI" className="ml-2 h-12 w-24 lg:h-32 lg:w-32 hover:scale-105 duration-200" />
          <img src={Kotak} alt="Kotak" className="ml-2 h-12 w-24 lg:h-32 lg:w-32 hover:scale-105 duration-200" />
          <img src={UnionBank} alt="UnionBank" className="ml-2 h-12 w-24 lg:h-32 lg:w-32 hover:scale-105 duration-200" />
          <img src={BandhanBank} alt="BandhanBank" className="ml-2 h-12 w-24 lg:h-32 lg:w-32 hover:scale-105 duration-200" />
          <img src={SriRamBank} alt="SriRamBank" className="ml-2 h-12 w-24 lg:h-32 lg:w-32 hover:scale-105 duration-200" />
          <img src={Incred} alt="Incred" className="ml-2 h-12 w-24 lg:h-32 lg:w-32 hover:scale-105 duration-200" />
        </div>
      </marquee>
    </>
  );
}

export default BanksMarquee;
