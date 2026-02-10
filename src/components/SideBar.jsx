import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { MdPeopleAlt } from 'react-icons/md';
import { MdOutlinePermContactCalendar } from 'react-icons/md';
import { FaFileWaveform } from 'react-icons/fa6';

function SideBar({ setShow }) {
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <div
      data-aos="fade-left"
      className="
        w-[80%] h-screen lg:hidden
        fixed top-0 right-0 z-50
        bg-blue-100/80 backdrop-blur-md
        shadow-lg shadow-black
        rounded-b-lg
      "
    >
      {/* Close button */}
      <button
        onClick={handleClose}
        className="
          absolute top-4 right-4
          text-red-600 font-extrabold text-2xl
          hover:scale-110 transition
        "
      >
        ✕
      </button>

      <ul className="list-none flex flex-col gap-6 justify-center px-6 mt-[30%] font-bold text-lg">
        <li
          className="flex items-center gap-3 cursor-pointer hover:text-blue-700 transition"
          onClick={() => handleNavigate('/')}
        >
          <FaHome /> Home
        </li>

        <li
          className="flex items-center gap-3 cursor-pointer hover:text-blue-700 transition"
          onClick={() => handleNavigate('/aboutus')}
        >
          <MdPeopleAlt /> About Us
        </li>

        <li
          className="flex items-center gap-3 cursor-pointer hover:text-blue-700 transition"
          onClick={() => handleNavigate('/FormSubmission')}
        >
          <FaFileWaveform /> Form Submission
        </li>

        <li
          className="flex items-center gap-3 cursor-pointer hover:text-blue-700 transition"
          onClick={() => handleNavigate('/FDInfo')}
        >
          <FaFileWaveform /> Fixed Deposit
        </li>

        <li
          className="flex items-center gap-3 cursor-pointer hover:text-blue-700 transition"
          onClick={() => handleNavigate('/contactus')}
        >
          <MdOutlinePermContactCalendar /> Contact Us
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
