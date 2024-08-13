import React from 'react';

const FDInfo = () => {
  return (
    <>
     <div data-aos="zoom-in" className='text-left mt-20 flex flex-col items-start  px-6 py-6 mx-3 lg:mx-20 bg-purple-100 rounded-xl'>
      <h1 className='text-center text-xl '>Fixed Deposit</h1>
      <p>
      The Zoom Finance Fixed Deposit has the highest safety and credibility ratings, assuring the security of your invested amount. Apart from the regular interest rates, we offer higher interest rates on special tenures of 18, 22, 33, 42, and 44 months. Just as increasing FD rates impact your earnings, your investment tenure does too. A longer tenure for your fixed deposit means you invest for a longer time to enjoy the power of compounding returns.
      </p>
      
     </div>
      <div className="container lg:px-20 px-3 py-8">
      <div className="text-center  mb-6">
        <h2 className="text-lg font-semibold">Highest Credit Ratings | Trusted with 1.4 million Deposits | Assured Returns on FD</h2>
      </div>
      <div className="grid grid-cols-1   gap-6">
        <div data-aos="fade-left" className="bg-gray-200 shadow-md rounded-lg p-6">
          <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded mb-4 inline-block">
            Only our on Website 
          </div>
          <h3 className="text-lg font-semibold mb-2">Zoom Finance FD*</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-gray-700">Interest Rate*</p>
              <p className="text-xl font-bold">Up to 10-14% p.a.</p>
            </div>
            <div>
              <p className="text-gray-700">Tenure</p>
              <p className="text-xl font-bold">42 months</p>
            </div>
            <div>
              <p className="text-gray-700">Deposit Amount</p>
              <p className="text-xl font-bold">₹10,000 - ₹5 cr</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="bg-gray-200 shadow-md rounded-lg p-6">
          <div className="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded mb-4 inline-block">
            Regular FDs
          </div>
          <h3 className="text-lg font-semibold mb-2">Interest Rate*</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-gray-700">Interest Rate*</p>
              <p className="text-xl font-bold">Up to 8.50% p.a.</p>
            </div>
            <div>
              <p className="text-gray-700">Flexible Tenure</p>
              <p className="text-xl font-bold">12-60 months</p>
            </div>
            <div>
              <p className="text-gray-700">Deposit Amount</p>
              <p className="text-xl font-bold">₹15,000 to ₹5 cr</p>
            </div>
            
          </div>
          
        </div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSevCRpTae909GA6rlZsGebKsO2uPhOtJhgz1TZJh-fF632NPQ/viewform?usp=sf_link">
        <div className='flex items-center justify-center overflow-hidden  '>
        <button data-aos="zoom-in" className='w-full lg:w-[10%] bg-green-400 hover:bg-green-500 hover:scale-95 duration-300  rounded-xl text-center text-white h-10 font-bold text-lg '>OPEN FD</button>
        </div></a>   
      </div>
    </div>
    </>
  );
};

export default FDInfo;