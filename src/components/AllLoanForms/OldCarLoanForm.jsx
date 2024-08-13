import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import oldcar from "/harshit study/google/bank/zoomfinance/ZOOMFIN-master/src/images/oldcar.jpg"
function OldCarLoanForm() {
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
      {/* <ToastContainer />
      <h1 className="text-center font-extrabold my-5 lg:text-3xl">
        Apply for an Old Car Loan
      </h1>
      <form
        action=""
        method="post"
        className="overflow-hidden flex flex-col justify-center items-center gap-5 w-full px-3 lg:px-20 my-4"
      > */}
        {/* Old Car Information */}
        {/* <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">
            Car Make & Model
          </h1>
          <input
            type="text"
            placeholder="Enter Car Make & Model"
            className="w-full lg:w-5/6 h-12 px-5 border border-black outline-none rounded-lg"
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">
            Car Registration Number
          </h1>
          <input
            type="text"
            placeholder="Enter Car Registration Number"
            className="w-full lg:w-5/6 h-12 px-5 border border-black outline-none rounded-lg"
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">
            Car Year of Manufacture
          </h1>
          <input
            type="number"
            placeholder="Enter Car Year of Manufacture"
            className="w-full lg:w-5/6 h-12 px-5 border border-black outline-none rounded-lg"
          />
        </div> */}

        {/* Personal Information */}
        {/* <input
          type="text"
          placeholder="Enter PAN Card Number"
          className="w-full h-12 px-5 border border-black outline-none rounded-lg"
        />
        <input
          type="text"
          placeholder="Enter Aadhar Card Number"
          className="w-full h-12 px-5 border border-black outline-none rounded-lg"
        /> */}

        {/* Documents */}
        {/* <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">
            Old Car Insurance
          </h1>
          <input
            type="file"
            className="w-full lg:w-5/6 h-12 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">
            Car Registration Certificate (RC Book)
          </h1>
          <input
            type="file"
            className="w-full lg:w-5/6 h-12 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">
            Proof of Identity (Aadhar Card, PAN Card)
          </h1>
          <input
            type="file"
            className="w-full lg:w-5/6 h-12 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">
            Proof of Address (Latest Utility Bill)
          </h1>
          <input
            type="file"
            className="w-full lg:w-5/6 h-12 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">
            Salary Slip (3 Months)
          </h1>
          <input
            type="file"
            className="w-full lg:w-5/6 h-12 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 border border-black rounded-lg px-5 py-4">
          <h1 className="whitespace-nowrap text-lg font-medium text-gray-800 lg:mt-0 lg:mb-0">
            Bank Statement (One Year)
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
          Submit
        </button>
      </form> */}

      {/* <!-- Old Car Loan Introduction Content Section --> */}
<main class="container mx-auto my-10">
  <div class="bg-white shadow-lg rounded-lg py-6 px-3 lg:px-20">
    <div class="flex flex-col lg:flex-row items-center lg:space-x-10">
      {/* <!-- Image Section --> */}
      <div data-aos="fade-right" class="w-full lg:w-60 lg:h-58 mb-6 lg:mb-0">
        <img
          src={oldcar}
          alt="Old Car Loan"
          class="w-full lg:w-96 rounded-lg shadow-md"
        />
      </div>

      {/* <!-- Text Section --> */}
      <div data-aos="fade-left" class="text-center lg:text-left overflow-hidden flex flex-col gap-1 justify-center items-center lg:items-start lg:justify-start">
        <h2 class="text-2xl font-bold mb-4">About Old Car Loan</h2>
        <p class="text-gray-700 mb-4 text-justify">
          An old car loan, also known as a used car loan, is a financing option that allows you to purchase a pre-owned vehicle. These loans provide the necessary funds to buy a used car, making it easier to own a vehicle without having to pay the full amount upfront.
        </p>
        <p class="text-gray-700 text-justify">
          Old car loans come with various benefits, such as competitive interest rates, flexible repayment terms, and quick processing. They are designed to make the process of buying a used car convenient and affordable, helping you get on the road with minimal hassle.
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdnKjyST3NS_OtJAcKEQdm_X12kVDGVz1Yq_xsi6H4ok4RywQ/viewform?usp=sf_link" className="bg-blue-400 hover:bg-white hover:text-blue-500 border hover:border-blue-500 duration-500 text-white px-4 py-2 rounded-sm mt-5 w-full lg:w-28">Apply Now</a>
      </div>
    </div>
  </div>
</main>

    </>
  );
}

export default OldCarLoanForm;
