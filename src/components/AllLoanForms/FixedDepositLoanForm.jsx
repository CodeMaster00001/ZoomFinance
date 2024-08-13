import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fd from "/harshit study/google/bank/zoomfinance/ZOOMFIN-master/src/images/fd.jpg" 
function FixedDepositLoanForm() {
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
        Apply for a Fixed Deposit Loan
      </h1>
      <form
        action=""
        method="post"
        className="overflow-hidden flex flex-col justify-center items-center gap-5 w-full px-3 lg:px-20 my-4"
      >
        <input
          type="text"
          placeholder="Enter PAN Card Number"
          className="w-full h-12 px-5 border border-black outline-none rounded-lg"
        />
        <input
          type="text"
          placeholder="Enter Aadhar Card Number"
          className="w-full h-12 px-5 border border-black outline-none rounded-lg"
        /> */}
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
      {/* Passport Photo */}
      {/* <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">
            Passport Photo
          </h1>
          <input
            type="file"
            className="w-full lg:w-5/6 h-12 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div> */}
      {/* Driving License */}
      {/* <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">
            Driving License
          </h1>
          <input
            type="file"
            className="w-full lg:w-5/6 h-12 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div> */}
      {/* Ration Card/KYC Doc */}
      {/* <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">
            Ration Card/KYC Doc
          </h1>
          <input
            type="file"
            className="w-full lg:w-5/6 h-12 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div> */}
      {/* Telephone Bill */}
      {/* <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">
            Telephone Bill
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
          className="w-full lg:w-[20%] px-5 py-2 text-center rounded-lg text-green-500 bg-white border-2 border-green-500 hover:text-white hover:scale-105 hover:bg-green-500 hover:border-green-500 duration-200"
        >
          {" "}
          Submit
        </button>
      </form> */}

      {/* Fixed Deposit Loan Form */}
      {/* <!-- Loan Introduction Content Section --> */}
      <main class="container mx-auto my-10">
        <div class="bg-white shadow-lg rounded-lg py-6 px-3 lg:px-20">
          <div class="flex flex-col lg:flex-row items-center lg:space-x-10">
            {/* <!-- Image Section --> */}
            <div data-aos="fade-right" class="w-full lg:w-60 lg:h-58 mb-6 lg:mb-0">
              <img
                src={fd}
                alt="Fixed Deposit"
                class="w-full lg:w-96 rounded-lg shadow-md"
              />
            </div>

            {/* <!-- Text Section --> */}
            <div
              data-aos="fade-left"
              class="text-center lg:text-left overflow-hidden flex flex-col gap-1 justify-center items-center lg:items-start lg:justify-start"
            >
              <h2 class="text-2xl font-bold mb-4">About Fixed Deposit</h2>
              <p class="text-gray-700 mb-4 text-justify">
                A Fixed Deposit (FD) is a financial instrument provided by banks
                or NBFCs which provides investors with a higher rate of interest
                than a regular savings account, until the given maturity date.
                It is one of the safest investment options available, offering
                guaranteed returns.
              </p>
              <p class="text-gray-700 text-justify">
                Fixed Deposits come with a variety of tenures, ranging from a
                few days to several years. They are ideal for risk-averse
                investors looking for stable and secure returns. Additional
                benefits include tax-saving options, easy renewal, and the
                ability to take a loan against your fixed deposit.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSehff_2kFrBZ3LTFfSU1Pp8DyHK9P53qa4jYCtigPWrzA6wJg/viewform?usp=sf_link"
                className="bg-blue-400 hover:bg-white hover:text-blue-500 border hover:border-blue-500 duration-500 text-white px-4 py-2 rounded-sm mt-5 w-full lg:w-28"
              >Apply Now
              
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default FixedDepositLoanForm;
