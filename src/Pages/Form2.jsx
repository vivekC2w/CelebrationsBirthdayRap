import { useState } from "react";
import Input from "../components/utils/Input";
import Button from "../components/utils/Button";
import ProgressBar from "../components/utils/ProgressBar";
import { useNavigate } from "react-router-dom";

const Form2 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
  });

  const [formErrors, setFormErrors] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
  });

  const handleInputChange = (e) => {
    let { name, value } = e.target;
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
      navigate("/form4");
    }
  };

  const checkErrors = (e) => {
    let { name, value } = e.target;

    if (!value) {
      value = `This Field is required`;
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
      <div className="flex flex-col items-center">
        <div className="relative">
          <ProgressBar
            step={2}
            title="What would you like their song's vibe to be?"
          />

          <img
            src="/assets/UI_Images/Headphone.png"
            alt="Headphone"
            className="mx-auto max-w-[90%] object-cover"
          />

          <div className="flex justify-between relative -top-28 pointer-events-none">
            <img
              src="/assets/UI_Images/PurpleMusicTone.png"
              alt="Asset 1"
              className="object-cover h-8"
            />
            <img
              src="/assets/UI_Images/Balloon2.png"
              alt="Balloon"
              className="object-cover h-14 relative -top-20"
            />
          </div>

          <div className="relative -top-20 px-4">
            {/* Input Fields */}
            <form
              onSubmit={handleSubmit}
              className="flex-col flex gap-4 text-sm"
            >
              <div className="h-[280px] overflow-y-auto flex flex-col gap-4">
                <Input
                  id="q1"
                  name="q1"
                  type="text"
                  placeholder="xxxxxxxxxxxxxxx"
                  label="What's your pet name for them?"
                  required={true}
                  value={formData.q1}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  onBlur={checkErrors}
                  formErrors={formErrors}
                />
                <Input
                  id="q2"
                  name="q2"
                  type="text"
                  placeholder="xxxxxxxxxxxxxxx"
                  label="What makes them angry?"
                  required={true}
                  value={formData.q2}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  onBlur={checkErrors}
                  formErrors={formErrors}
                />
                <Input
                  id="q3"
                  name="q3"
                  type="text"
                  placeholder="xxxxxxxxxxxxxxx"
                  label="What is the funniest thing they do?"
                  required={true}
                  value={formData.q3}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  onBlur={checkErrors}
                  formErrors={formErrors}
                />
                <Input
                  id="q4"
                  name="q4"
                  type="text"
                  placeholder="xxxxxxxxxxxxxxx"
                  label="What makes them smile?"
                  required={true}
                  value={formData.q4}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  onBlur={checkErrors}
                  formErrors={formErrors}
                />
                <Input
                  id="q5"
                  name="q5"
                  type="text"
                  placeholder="xxxxxxxxxxxxxxx"
                  label="What is their favorite movie?"
                  required={true}
                  value={formData.q5}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  onBlur={checkErrors}
                  formErrors={formErrors}
                />
                <Input
                  id="q6"
                  name="q6"
                  type="text"
                  placeholder="xxxxxxxxxxxxxxx"
                  label="Their favorite sport."
                  required={true}
                  value={formData.q6}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  onBlur={checkErrors}
                  formErrors={formErrors}
                />
              </div>
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
                src="/assets/UI_Images/Asset_1.png"
                alt="Asset 1"
                className="object-cover h-16 pl-56"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form2;
