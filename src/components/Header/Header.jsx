import cadburyLogo from "/assets/UI_Images/Cadbury_Logo.png";
import twoDLogo from "/assets/UI_Images/2d_logo_.png";
import hamburger from "/assets/UI_Images/Hamburger.png";
import Portal from "../Portal/Portal";
import Sidebar from "../Navigation/Sidebar";
import { useState } from "react";
import HowToParticipate from "../HowToParticipate/HowToParticipate";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const onModalOpen = (e) => {
    if (e.stopProgation) e.stopProgation();
    document.documentElement.style.overflow = "hidden";
    setShowModal("menu");
  };

  const onModalClose = () => {
    document.documentElement.style.overflow = "";
    setShowModal("");
  };

  return (
    <>
      <div className="flex justify-between items-center bg-[#2b1755] px-4 h-16 fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center gap-1">
          <img
            src={cadburyLogo}
            alt="Cadbury Logo"
            className="object-cover w-20"
          />
          <img src={twoDLogo} alt="2D Logo" className="object-cover h-20" />
        </div>
        <img
          src={hamburger}
          onClick={onModalOpen}
          alt="Hamburger"
          className="h-6 object-cover cursor-pointer"
        />
      </div>
      {showModal === "menu" && (
        <Portal onClose={onModalClose}>
          <Sidebar onClose={onModalClose} setShowModal={setShowModal} />
        </Portal>
      )}
      {showModal === "HowToParticipate" && (
        <Portal onClose={onModalClose}>
          <HowToParticipate onClose={onModalClose} />
        </Portal>
      )}
    </>
  );
};

export default Header;
