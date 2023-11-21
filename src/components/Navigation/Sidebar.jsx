import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ setShowModal, onClose }) => {
  return (
    <div className="text-white ml-auto h-screen w-[220px] bg-bgImg bg-cover bg-center flex flex-col justify-between">
      <img
        src="/assets/UI_Images/Cross.png"
        className="h-8 object-cover ml-auto w-max cursor-pointer mr-4 mt-6"
        onClick={onClose}
      />
      <ul className="font-gibson-semibold mb-6 w-full text-right">
        <li
          className="py-5 border-b pr-4 cursor-pointer border-t"
          onClick={(e) => {
            onClose(e);
            setShowModal("HowToParticipate");
          }}
        >
          How to Participate
        </li>

        <li className="py-5 border-b pr-4 cursor-pointer" onClick={onClose}>
          Terms & Conditions
        </li>

        <li className="py-5 border-b pr-4 cursor-pointer" onClick={onClose}>
          Privacy Policy
        </li>

        <li className="py-5 border-b pr-4 cursor-pointer" onClick={onClose}>
          Contact Us
        </li>
      </ul>
      <img
        src="/assets/UI_Images/MDLZ_SMR_LogoReversed.png"
        className="h-14 object-contain cursor-pointer px-4 w-full bg-white py-1"
      />
    </div>
  );
};

export default Sidebar;
