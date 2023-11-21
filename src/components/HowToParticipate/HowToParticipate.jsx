import React from "react";

const HowToParticipate = ({ onClose }) => {
  return (
    <div className="text-[#51087e] m-auto bg-white w-full p-1 mx-4 rounded-lg pb-4">
      <img
        src="/assets/UI_Images/Cross2.png"
        className="h-5 object-cover ml-auto w-max cursor-pointer"
        onClick={onClose}
      />
      <div>
        <h2 className="font-gibson-semibold text-center py-14 text-xl">
          Tutorial Video
        </h2>
      </div>
    </div>
  );
};

export default HowToParticipate;
