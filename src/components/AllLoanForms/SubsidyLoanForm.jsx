import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import msme from "/harshit study/google/bank/zoomfinance/ZOOMFIN-master/src/images/MSME.png"

function SubsidyLoanForm() {
  const [agree, setAgree] = useState(false);
  const handleTermsAndCondition = () => {
    setAgree(!agree);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (agree) {
      // अगर user ने agree कर दिया है तोह पहले 1sec तक toast दिखेगा
      toast.success("We will contact you within 24hrs");
      setTimeout(() => {
        // फिर backend में data भेज देंगे admin के पास
      }, 1000);
    } else {
      // alert("Please agree to the terms and conditions.");
      toast.warn("Please agree to the terms and conditions first.");
    }
  };
  return (
    <>
      <ToastContainer />
      {/* <h1 className="text-center font-extrabold my-5 lg:text-3xl">
        Apply for a Subsidy Loan
      </h1> */}
      {/* <form
        action=""
        method="post"
        className="overflow-hidden flex flex-col justify-center items-center gap-5 w-full px-3 lg:px-20 my-4"
      > */}
        {/* PAN Card */}
        {/* <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">
            PAN Card
          </h1>
          <input
            type="text"
            placeholder="Enter PAN Card Number"
            className="w-full lg:w-5/6 h-12 px-5 border border-black outline-none rounded-lg"
          />
        </div> */}
        {/* Aadhar Card */}
        {/* <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">
            Aadhar Card
          </h1>
          <input
            type="text"
            placeholder="Enter Aadhar Card Number"
            className="w-full lg:w-5/6 h-12 px-5 border border-black outline-none rounded-lg"
          />
        </div> */}
        {/* Electricity Bill */}
        {/* <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">
            Electricity Bill
          </h1>
          <input
            type="file"
            className="w-full lg:w-5/6 h-12 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div> */}
        {/* Rent Agreement */}
        {/* <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">
            Rent Agreement
          </h1>
          <input
            type="file"
            className="w-full lg:w-5/6 h-12 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div> */}
        {/* Bank Statement */}
        {/* <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">
            Bank Statement
          </h1>
          <input
            type="file"
            className="w-full lg:w-5/6 h-12 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div> */}
        {/* Terms And Condition Box */}
        {/* <div className="w-full flex flex-col lg:flex-row justify-start gap-2">
          <input
            onClick={handleTermsAndCondition}
            type="checkbox"
            className="inline form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
          />
          <p>
            By applying, you agree to all the{" "}
            <a className="text-blue-400" href="">
              {" "}
              terms and conditions
            </a>
          </p>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-[30%] lg:w-[20%] px-5 py-2 text-center rounded-lg text-green-500 bg-white border-2 border-green-500 hover:text-white hover:scale-105 hover:bg-green-500 hover:border-green-500 duration-200"
        >
          Submit
        </button>
      </form> */}

      {/* <!-- Loan Introduction Content Section --> */}
<main class="container mx-auto my-10">
  <div class="bg-white shadow-lg rounded-lg py-6 px-3 lg:px-20">
    <div class="flex flex-col lg:flex-row items-center lg:space-x-10">
      {/* <!-- Image Section --> */}
      <div data-aos="fade-right" class="w-full lg:w-60 lg:h-58 mb-6 lg:mb-0">
        <img
          src={msme}
          alt="Subsidy Loan"
          class="w-full lg:w-96 rounded-lg shadow-md"
        />
      </div>

      {/* <!-- Text Section --> */}
      <div data-aos="fade-left" class="text-center lg:text-left overflow-hidden flex flex-col gap-1 justify-center items-center lg:items-start lg:justify-start">
        <h2 class="text-2xl font-bold mb-4">About MSME Loan</h2>
        <p class="text-gray-700 mb-4 text-justify">
        MSME loans in India support Micro, Small, and Medium Enterprises with financial needs like working capital and expansion. They cater to businesses with specific investment and turnover limits, offering flexible terms and favorable interest rates to promote growth, modernization, and infrastructure development within these sectors.
        </p>
        <p class="text-gray-700 text-justify">
        MSME loans also provide various government-backed schemes and subsidies, making them more accessible and affordable. They play a crucial role in boosting the economy by fostering entrepreneurship and creating job opportunities in diverse sectors.
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPBGEoAj7ZXBvjk0T2n-RtRXW1xrRiswiuIaqIGdCC0EEZ2g/viewform?usp=sf_link" className="bg-blue-400 hover:bg-white hover:text-blue-500 border hover:border-blue-500 duration-500 text-white px-4 py-2 rounded-sm mt-5 w-full lg:w-28">Apply Now</a>
      </div>
    </div>
  </div>
</main>

    </>
  );
}

export default SubsidyLoanForm;
