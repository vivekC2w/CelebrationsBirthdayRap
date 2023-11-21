import React, { useState } from "react";
import Input from "../components/utils/Input";
import Button from "../components/utils/Button";
import ProgressBar from "../components/utils/ProgressBar";
// import { validateEmail, validatePhone } from "../commonFunctions";

const Form5 = () => {
  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    email: "",
    terms: "",
    communication: "",
  });

  const [formErrors, setFormErrors] = useState({
    phone: "",
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    let { name, value, type } = e.target;
    if (type === "radio") {
      value = !formData[name];
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFocus = (e) => {
    // Clear validation error when user starts typing
    const { name } = e.target;
    setFormErrors((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formErrors).join("") === "") {
      console.log(formData);
    }
  };

  const checkErrors = (e) => {
    let { name, value } = e.target;

    // if (!value) {
    //   value = `${name[0].toUpperCase() + name.slice(1)} is required`;
    // } else if (name === "phone" && !validatePhone(formData.phone)) {
    //   value = "Invalid phone number";
    // } else if (name === "email" && !validateEmail(formData.email)) {
    //   value = "Invalid email address";
    // } else {
    //   value = "";
    // }

    setFormErrors((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="text-white text-center px-4 h-full bg-cover">
      {/* BG Image with Progress Bar */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <ProgressBar step={5} />

          {/* Celebrations(Bg) Image */}
          <img
            src="/assets/UI_Images/Celebrations(Bg)Copy.png"
            alt="Celebrations (Bg)"
            className="mx-auto max-w-[90%] object-cover"
          />
          <div className="relative -top-6 px-4">
            <div className="mb-2">
              <p className="font-gibson-semibold text-sm">Form5 to create</p>
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
                required={true}
                value={formData.phone}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={checkErrors}
                formErrors={formErrors}
              />

              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Full Name"
                required={true}
                value={formData.name}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={checkErrors}
                formErrors={formErrors}
              />

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email ID"
                required={true}
                value={formData.email}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={checkErrors}
                formErrors={formErrors}
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
        </div>
      </div>
    </div>
  );
};

export default Form5;
