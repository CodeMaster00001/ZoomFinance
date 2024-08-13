import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { SiMoneygram } from "react-icons/si";
import { MdMenu } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import SideBar from "./SideBar";
import FDInfo from '../components/FDInfo';
import logo from "../images/logo.png";

function NavBar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();


  const handleShow = () => {
    setShow(!show);
  };
  
  const handleSearchButton = (e)=>{
    e.preventDefault();
    navigate("/FormSubmission");
  }

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  return (
    <>
      <nav className="w-full flex lg:flex-row justify-between items-center font-semibold px-3 lg:px-20 bg-blue-300 h-14 z-40 fixed">
        <div className="flex justify-start gap-1 items-center">
        <NavLink
        to="/"
        style={(e) => ({ color: e.isActive ? "black" : " " })}
        className="flex items-center"
      >
        <img className="h-6 w-6 mr-2" src={logo} alt="Logo" />
        <h1 className="text-blue-700 font-extrabold lg:text-lg text-sm mr-2">
          ZOOM FINANCE
        </h1>
        
      </NavLink>
          
          
        </div>
        <div className="hidden lg:flex lg:flex-row gap-4 text-white font-medium">
          <NavLink
            style={(e) => ({ color: e.isActive ? "black" : " " })}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={(e) => ({ color: e.isActive ? "black" : " " })}
            to="/aboutus"
          >
            About Us
          </NavLink>
          <NavLink
            style={(e) => ({ color: e.isActive ? "black" : " " })}
            to="/FormSubmission"
          >
            Form Submission
          </NavLink>
          <NavLink
            style={(e) => ({ color: e.isActive ? "black" : " " })}
            to="/FDInfo"
          >
            Fixed Deposit
          </NavLink>
          <NavLink
            style={(e) => ({ color: e.isActive ? "black" : " " })}
            to="/contactus"
          >
            Contact Us
          </NavLink>
        </div>
        <div className="flex flex-row justify-between items-center gap-5">
        {/* Search BAR */}
          <div className="hidden lg:flex flex-row items-center">
            <input
              type="text"
              className="h-[38px] rounded-l-full font-medium outline-none px-4"
              placeholder="Search Loans..."
            />
            <button
            onClick={handleSearchButton}
              type="submit"
              className="items-center bg-black p-1.5 rounded-r-full "
              
            >
              <CiSearch style={{ color: "white", fontSize: "26" }} />
            </button>
          </div>
          {/* Inquiry Button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfpZ1SHcKzxeTBxt8yMNP1xQ2aFoM-3jOLXF9QC4CqjIPMHuQ/viewform?usp=sf_link"
            target="_parent"
          >
            <div className="hidden lg:flex justify-between gap-2 items-center h-10 w-auto px-5 rounded-3xl bg-green-500 text-white font-semibold hover:bg-green-700 hover:scale-95 duration-150 ">
              <FaUserAlt style={{ color: "white", fontSize: "17" }} />
              <button>Enquiry</button>
            </div>
          </a>
          {/* Hamberget Menu Button for Mobile Screen */}
          <div className="block lg:hidden">
            <MdMenu onClick={handleShow} style={{ fontSize: "30" }} />
          </div>
        </div>
      </nav>
      {show && <SideBar show={show} setShow={setShow} />}
    </>
  );
}

export default NavBar;
