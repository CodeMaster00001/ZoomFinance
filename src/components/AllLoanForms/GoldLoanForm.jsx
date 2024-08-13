import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import goldloan from "/harshit study/google/bank/zoomfinance/ZOOMFIN-master/src/images/GoldLoan.webp"

function GoldLoanForm() {
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
        <ToastContainer/>
     {/* <!-- Gold Loan Introduction Content Section --> */}
<main class="container mx-auto my-10">
  <div class="bg-white shadow-lg rounded-lg py-6 px-3 lg:px-20">
    <div class="flex flex-col lg:flex-row items-center lg:space-x-10">
      {/* <!-- Image Section --> */}
      <div data-aos="fade-right" class="w-full lg:w-60 lg:h-58 mb-6 lg:mb-0">
        <img
          src={goldloan}
          alt="Gold Loan"
          class="w-full lg:w-96 rounded-lg shadow-md"
        />
      </div>

      {/* <!-- Text Section --> */}
      <div data-aos="fade-left" class="text-center lg:text-left overflow-hidden flex flex-col gap-1 justify-center items-center lg:items-start lg:justify-start">
        <h2 class="text-2xl font-bold mb-4">About Gold Loan</h2>
        <p class="text-gray-700 mb-4 text-justify">
          A gold loan is a type of secured loan where you can pledge your gold jewelry or coins as collateral to obtain a loan. Gold loans offer several advantages, such as lower interest rates, quick processing, and minimal paperwork. They are a great option if you need immediate funds and have gold assets to secure the loan.
        </p>
        <p class="text-gray-700 text-justify">
          By opting for a gold loan, you can access funds while keeping your gold assets safe. The loan amount is determined based on the value of the gold pledged, and you can repay the loan over a flexible period. Additionally, gold loans often come with the benefit of no prepayment penalties and competitive interest rates.
        </p>
        <a onClick={toast.warn("For Gold Loan But Contact to us")} className="bg-blue-400 hover:bg-white hover:text-blue-500 border hover:border-blue-500 duration-500 text-white px-4 py-2 rounded-sm mt-5 w-full lg:w-28">Apply Now</a>
      </div>
    </div>
  </div>
</main>

    </>
  );
}

export default GoldLoanForm;
