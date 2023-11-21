import React, { useState } from "react";
import Input from "../components/utils/Input";
import Button from "../components/utils/Button";
import ProgressBar from "../components/utils/ProgressBar";
import Select from "../components/utils/Select";
import { useNavigate } from "react-router-dom";
// import { validateEmail, validatePhone } from "../commonFunctions";

const Form1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "23 Years",
    gender: "male",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    age: "",
    gender: "",
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
      navigate("/form2");
    }
  };

  const setAge = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      age: parseInt(prevState.age) + value + ` Years`,
    }));
  };

  const checkErrors = (e) => {
    let { name, value } = e.target;

    if (!value) {
      value = `${name[0].toUpperCase() + name.slice(1)} is required`;
    } else {
      value = "";
    }

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
          <ProgressBar step={1} title="Tell us about your loved one..." />

          {/* Celebrations(Bg) Image */}
          <img
            src="/assets/UI_Images/Cap&Gift.png"
            alt="Cap&Gift"
            className="mx-auto max-w-[90%] object-cover"
          />

          <div className="flex justify-between relative -top-28 pointer-events-none">
            <img
              src="/assets/UI_Images/Asset_1.png"
              alt="Asset 1"
              className="object-cover h-16"
            />
            <img
              src="/assets/UI_Images/Balloon.png"
              alt="Balloon"
              className="object-cover h-14 relative -top-10"
            />
          </div>

          <div className="relative -top-20 px-4">
            {/* Input Fields */}
            <form
              onSubmit={handleSubmit}
              className="flex-col flex gap-4 text-sm "
            >
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="xxxxx xxxxxxxxxx"
                label="Their name"
                required={true}
                value={formData.name}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={checkErrors}
                formErrors={formErrors}
              />

              <Input
                id="age"
                name="age"
                type="text"
                placeholder="23 Years"
                label="How old they'll be this birthday"
                setAge={setAge}
                numberArrows={true}
                required={true}
                value={formData.age}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={checkErrors}
                formErrors={formErrors}
                readOnly
              />

              <Select
                id="gender"
                name="gender"
                type="gender"
                placeholder="Gender"
                label="Gender"
                required={true}
                value={formData.gender}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={checkErrors}
                formErrors={formErrors}
              />
              <div className="flex items-center justify-center gap-4">
                <Button
                  type="submit"
                  bgColor="#edb45e"
                  text="Proceed"
                  color="#51087e"
                />
              </div>
            </form>

            <div className="flex justify-between relative -top-10 pointer-events-none">
              <img
                src="/assets/UI_Images/PurpleTone.png"
                alt="Asset 1"
                className="object-cover h-16"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form1;
