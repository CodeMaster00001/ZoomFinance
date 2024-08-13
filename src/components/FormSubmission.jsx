import React, { useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import PersonalLoanForm from "./AllLoanForms/PersonalLoanForm";
import HomeLoanForm from "./AllLoanForms/HomeLoanForm";
import CarLoanForm from "./AllLoanForms/CarLoanForm";
import OldCarLoanForm from "./AllLoanForms/OldCarLoanForm";
import CreditCardLoanForm from "./AllLoanForms/CreditCardLoanForm";
import MudraLoanForm from "./AllLoanForms/MudraLoanForm";
import PropertyLoanForm from "./AllLoanForms/PropertyLoanForm";
import BusinessLoanForm from "./AllLoanForms/BusinessLoanForm";
import ODLLoanForm from "./AllLoanForms/ODLLoanForm";
import SubsidyLoanForm from "./AllLoanForms/SubsidyLoanForm";
import FixedDepositLoanForm from "./AllLoanForms/FixedDepositLoanForm";
import EducationLoanForm from "./AllLoanForms/EducationLoanForm";
import GoldLoanForm from "./AllLoanForms/GoldLoanForm";

function FormSubmission() {
  const [showGif, setShowGif] = useState(true);

  const handleNavClick = () => {
    setShowGif(false);  // Hide the GIF
  };

  return (
    <>
      <div data-aos="fade-down" className="bg-slate-100 py-5 w-full flex flex-row gap-3.5 lg:gap-6 flex-wrap items-center justify-start px-3 lg:px-20 mt-14">
        <NavLink onClick={handleNavClick} style={(e) => ({ color: e.isActive ? "red" : "" })} to="PersonalLoanForm"> Personal Loan </NavLink>
        <NavLink onClick={handleNavClick} style={(e) => ({ color: e.isActive ? "red" : "" })} to="HomeLoanForm"> Home Loan </NavLink>
        <NavLink onClick={handleNavClick} style={(e) => ({ color: e.isActive ? "red" : "" })} to="EducationLoanForm"> Education Loan </NavLink>
        <NavLink onClick={handleNavClick} style={(e) => ({ color: e.isActive ? "red" : "" })} to="CarLoanForm"> Car Loan </NavLink>
        <NavLink onClick={handleNavClick} style={(e) => ({ color: e.isActive ? "red" : "" })} to="MudraLoanForm"> Mudra Loan Form</NavLink>
        <NavLink onClick={handleNavClick} style={(e) => ({ color: e.isActive ? "red" : "" })} to="CreditCardLoanForm"> Credit Card</NavLink>
        <NavLink onClick={handleNavClick} style={(e) => ({ color: e.isActive ? "red" : "" })} to="OldCarLoanForm"> Old Car Loan </NavLink>
        <NavLink onClick={handleNavClick} style={(e) => ({ color: e.isActive ? "red" : "" })} to="PropertyLoanForm"> Property Loan </NavLink>
        <NavLink onClick={handleNavClick} style={(e) => ({ color: e.isActive ? "red" : "" })} to="ODLLoanForm"> OD Limit </NavLink>
        <NavLink onClick={handleNavClick} style={(e) => ({ color: e.isActive ? "red" : "" })} to="BusinessLoanForm"> Business Loan </NavLink>
        <NavLink onClick={handleNavClick} style={(e) => ({ color: e.isActive ? "red" : "" })} to="SubsidyLoanForm"> MSME Loan </NavLink>
        <NavLink onClick={handleNavClick} style={(e) => ({ color: e.isActive ? "red" : "" })} to="FixedDepositLoanForm"> Fixed Deposit</NavLink>
        <NavLink onClick={handleNavClick} style={(e) => ({ color: e.isActive ? "red" : "" })} to="GoldLoanForm"> Gold Loan </NavLink>
      </div> 

      {/* Conditionally Render the GIF */}
      {showGif && (
        <div className="flex justify-center mt-10">
          <img
            src="https://s.wsj.net/public/resources/images/OG-CD365_201812_SOC_20181227121928.gif"
            alt="Loading"
            className="h-40 w-3/4 lg:h-auto lg:w-auto mt-4"
          />
        </div>
      )}

      <Routes>
        <Route path="PersonalLoanForm" element={<PersonalLoanForm />} />
        <Route path="HomeLoanForm" element={<HomeLoanForm />} />
        <Route path="CarLoanForm" element={<CarLoanForm />} />
        <Route path="OldCarLoanForm" element={<OldCarLoanForm />} />
        <Route path="CreditCardLoanForm" element={<CreditCardLoanForm />} />
        <Route path="MudraLoanForm" element={<MudraLoanForm />} />
        <Route path="PropertyLoanForm" element={<PropertyLoanForm />} />
        <Route path="BusinessLoanForm" element={<BusinessLoanForm />} />
        <Route path="ODLLoanForm" element={<ODLLoanForm />} />
        <Route path="SubsidyLoanForm" element={<SubsidyLoanForm />} />
        <Route path="FixedDepositLoanForm" element={<FixedDepositLoanForm />} />
        <Route path="EducationLoanForm" element={<EducationLoanForm />} />
        <Route path="GoldLoanForm" element={<GoldLoanForm />} />
      </Routes>
      <div className="h-14 lg:h-40"></div>
    </>
  );
}

export default FormSubmission;
