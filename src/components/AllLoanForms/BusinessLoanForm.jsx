
import FormfacadeEmbed from "@formfacade/embed-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BussinessLoan from "@/images/BussinessLoan.jpg"

function BusinessLoanForm() {
  const handleSubmit=()=>{
    toast.success("Thank you for your interest in our business loan program. We will be in touch")
  }
  
  return (

    <>
      {/* <ToastContainer/>
      <div className="bg-blue-50">
      <h1 className="text-center font-extrabold my-5 lg:text-3xl">
        Apply for a Business Loan
      </h1>
      <FormfacadeEmbed  
      formFacadeURL="https://formfacade.com/include/105274761100689174285/form/1FAIpQLSehvyCYrY7Zqxy0Os5SuZPUNHr0ppiFL3cNiVJzDZ6pt6cIug/classic.js/?div=ff-compose" 
      onSubmitForm={handleSubmit} /></div> */}

      {/* <!-- Loan Introduction Content Section --> */}
<main class="container mx-auto my-10">
  <div class="bg-white shadow-lg rounded-lg py-6 px-3 lg:px-20">
    <div class="flex flex-col lg:flex-row items-center lg:space-x-10">
      {/* <!-- Image Section --> */}
      <div data-aos="fade-right" class="w-full lg:w-60 lg:h-58 mb-6 lg:mb-0">
        <img
          src={BussinessLoan}
          alt="Business Loan"
          class="w-full lg:w-96 rounded-lg shadow-md"
        />
      </div>

      {/* <!-- Text Section --> */}
      <div data-aos="fade-left" class="text-center lg:text-left overflow-hidden flex flex-col gap-1 justify-center items-center lg:items-start lg:justify-start">
        <h2 class="text-2xl font-bold mb-4">About Business Loan</h2>
        <p class="text-gray-700 mb-4 text-justify">
          A business loan is a type of financing you can avail to meet the urgent needs of your growing business. Business loans can be availed to expand your business, purchase new machinery, increase working capital, or meet other business needs. Business loans come with flexible repayment options and competitive interest rates.
        </p>
        <p class="text-gray-700 text-justify">
          Business loans provide a quick and easy way to fund your business operations and growth. With minimal documentation and quick disbursal, business loans are an excellent way to ensure the financial stability of your business. They can also help you build your business credit score for future borrowing.
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScBzbAYpG47g_h0jJ49x4bSJ_QOPQO2IrliT7Cw6AOm6OtcEA/viewform?usp=sf_link"  className="bg-blue-400 hover:bg-white hover:text-blue-500 border hover:border-blue-500 duration-500 text-white px-4 py-2 rounded-sm mt-5 w-full lg:w-28">Apply Now</a>
      </div>
    </div>
  </div>
</main>
      


    </>
  );
}

export default BusinessLoanForm;
