import React from "react";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";

function SubNavBar() {
  return (
    <div data-aos="fade-down" className="bg-slate-100 h-auto py-5 w-full flex-none lg:flex flex-col lg:flex-row items-center justify-between px-3 lg:px-20 mt-14">
      <ul  className="list-none text-gray-500 flex  flex-row flex-wrap justify-start gap-5 items-center ">
        <li><a href="/FDInfo">Investment & Insurance</a></li>
        <li><a href="tel:07314999628">Call Financial Advisors</a></li>
        <li><a href="#Loans">Loans</a></li>
        
        {/* <li><a href="">Tax Rebates</a></li> */}
        <li><a href="#Partners">Our Partners</a></li>
        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSewh5-dBiZKQIGlo5X2ONno1zURKpWGiSGwwS-pSn8_N9Z6xg/viewform?usp=sf_link">Become our Partners</a></li>
      </ul>
      <div className="flex gap-2 pt-4 lg:pt-0 overflow-hidden">
        <a href="tel:07314999628"  className="flex justify-between gap-4 p-2 items-center bg-purple-200 hover:bg-purple-300 hover:scale-95 duration-150 text-black font-semibold rounded-3xl">
          <TfiHeadphoneAlt />
          Help Center{" "}
        </a>
        <a href="#locateus" className="flex justify-between gap-4 p-2 items-center bg-purple-200 hover:bg-purple-300 hover:scale-95 duration-150 text-black font-semibold rounded-3xl">
          <FaLocationDot />
          Locate Us{" "}
        </a>
      </div>
    </div>
  );
}

export default SubNavBar;
