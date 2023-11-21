import Input from "../utils/Input";
import RadioInput from "../utils/RadioInput";
import Button from "../utils/Button";
import Portal from "../Portal/Portal";
import OtpModal from "../OTP/OtpModal";
import { useState } from "react";
import ProgressBar from "../utils/ProgressBar";

const Register = () => {
  const [showModal, setShowModal] = useState(false);
  const onModalOpen = (e) => {
    if (e.stopProgation) e.stopProgation();
    document.documentElement.style.overflow = "hidden";
    setShowModal("otp");
  };

  const onModalClose = () => {
    document.documentElement.style.overflow = "";
    setShowModal("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    onModalOpen(e);
  };
  return (
    <div className="text-white text-center px-4 h-full bg-cover">
      {/* BG Image with Progress Bar */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <ProgressBar step={0} />
          {/* <img
            src="/assets/UI_Images/progressBar.png"
            alt="Progress Bar"
            className="mt-4 mx-auto max-w-[70%] object-cover"
          /> */}

          {/* Celebrations(Bg) Image */}
          <img
            src="/assets/UI_Images/Celebrations(Bg)Copy.png"
            alt="Celebrations (Bg)"
            className="mx-auto max-w-[90%] object-cover"
          />
          <div className="relative -top-6 px-4">
            <div className="mb-2">
              <p className="font-gibson-semibold text-sm">Register to create</p>
            </div>

            {/* Input Fields */}
            <form
              onSubmit={handleSubmit}
              className="flex-col flex gap-3 text-sm"
            >
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone Number"
              />
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Full Name"
              />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email ID"
              />
              <RadioInput
                id="terms"
                name="terms"
                label="I accept Terms & Conditions
                and Privacy Policy of Mondelez (Cadbury)"
              />
              <RadioInput
                id="communication"
                name="communication"
                label="I would like to
                receive promotional communication from Mondelez (Cadbury) about
                its products and offers."
              />
              <Button
                type="submit"
                bgColor="#edb45e"
                text="Submit"
                color="#51087e"
              />
            </form>

            <div className="flex justify-between relative -top-10 pointer-events-none">
              <img
                src="/assets/UI_Images/Asset_1.png"
                alt="Asset 1"
                className="object-cover h-16"
              />
              <img
                src="/assets/UI_Images/YellowTone.png"
                alt="Yellow Tone"
                className="object-cover h-10 relative -top-10"
              />
            </div>
          </div>
          {showModal === "otp" && (
            <Portal onClose={onModalClose}>
              <OtpModal onClose={onModalClose} />
            </Portal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
