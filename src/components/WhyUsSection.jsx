import React from "react";
import Footer from "../components/Footer";
import cash from "../images/cash.png";
import cibil from "../images/cibil.png";
import documents from "../images/document.png";
import money from "../images/money.png";
import percentage from "../images/percentage.png";
import rename from "../images/rename.jpg";

function WhyUsSection() {
  return (
    <>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-3 lg:px-20 text-center">
          <h2 className="text-2xl font-bold text-black mb-12">Why Choose Us?</h2>
          <div className="whyus flex flex-nowrap overflow-x-auto overflow-y-hidden justify-start lg:justify-between items-center space-x-6 lg:space-x-12 ">
            {/* Convenient Payment Options */}
            <div className="flex-shrink-0 flex flex-col items-center overflow-hidden">
              <div className="mb-4" data-aos="fade-up">
                <img className="border-2 rounded-full p-10 h-48 w-48" src={cash} alt="Convenient payment options"/>
              </div>
              <p className="text-blue-300">Convenient Payment Options</p>
            </div>
            {/* Suits The Need of Every Individual */}
            <div className="flex-shrink-0 flex flex-col items-center overflow-hidden">
              <div className="mb-4" data-aos="fade-up">
                <img
                  className="border-2 rounded-full p-10 h-48 w-48"
                  src={money}
                  alt="Suits the need of every individual"
                />
              </div>
              <p className="text-blue-300">Suits The Need of Every Individual</p>
            </div>
            {/* Attractive Intrest Rates */}
            <div className="flex-shrink-0 flex flex-col items-center overflow-hidden">
              <div className="mb-4" data-aos="fade-up">
                <img
                  className="border-2 rounded-full p-10 h-48 w-48"
                  src={rename}
                  alt="Attractive interest rates"
                />
              </div>
              <p className="text-blue-300">Attractive Intrest Rates</p>
            </div>
            {/* Simplified Documentation */}
            <div className="flex-shrink-0 flex flex-col items-center overflow-hidden">
              <div className="mb-4" data-aos="fade-up">
                <img
                  className="border-2 rounded-full p-10 h-48 w-48"
                  src={documents}
                  alt="Simplified documentation"
                />
              </div>
              <p className="text-blue-300">Simplified Documentation</p>
            </div>
            {/* 2% waiver */}
            <div className="flex-shrink-0 flex flex-col items-center overflow-hidden">
              <div className="mb-4" data-aos="fade-up">
                <img
                  className="border-2 rounded-full p-10 h-48 w-48"
                  src={percentage}
                  alt="Simplified documentation"
                />
              </div>
              <p className="text-blue-300">2% waiver</p>
            </div>
            {/* Free Cibil Score */}
            <div className="flex-shrink-0 flex flex-col items-center overflow-hidden">
              <div className="mb-4" data-aos="fade-up">
                <img
                  className="border-2 rounded-full p-10 h-48 w-48"
                  src={cibil}
                  alt="Simplified documentation"
                />
              </div>
              <p className="text-blue-300">Free Cibil Score</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyUsSection;
