import { useRef, useState } from "react";
import Button from "../utils/Button";
import { useNavigate } from "react-router-dom";
import { getRandom } from "../../commonFunctions";

const OtpModal = ({ onClose }) => {
  const inputRefs = Array.from({ length: 4 }, () => useRef(null));
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigate = useNavigate();
  const [randomOtp, setRandomOtp] = useState(getRandom(0, 9999));

  const handleInputChange = (index, value) => {
    if (value.match(/^\d+$/) && index < 4) {
      const newOtp = [...otp];
      newOtp[index] = value[0];
      setOtp(newOtp);
      if (value.length === 1) {
        inputRefs[index + 1]?.current?.focus();
      }
    } else if (value === "" && index >= 0) {
      const newOtp = [...otp];
      newOtp[index] = value[0];
      setOtp(newOtp);
      inputRefs[index - 1]?.current?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otp1 = otp.join("");
    console.log(otp1);
    if (otp1.length < 4) {
      return;
    }

    if (parseInt(otp1) === randomOtp) {
      onClose(e);
      navigate("/form1");
    } else {
      alert("Wrong OTP");
    }
  };

  const handleResendOtp = () => {
    console.log("Reset OTP");
    setRandomOtp(getRandom(0, 9999));
    alert("OTP Resend Successfully!");
  };

  console.log(randomOtp);

  return (
    <div className="flex w-full h-full">
      <div className="text-[#51087e] m-auto bg-white w-max p-1 px-6 rounded-lg pb-4">
        <h1 className="text-center font-gibson-semibold text-2xl mt-2">
          Enter OTP
        </h1>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="flex items-center justify-center gap-2 text-xl">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="number"
                className="w-10 px-3 py-2 rounded-md bg-[#51087e] text-white font-gibson-semibold text-center remove-arrow"
                min="0"
                max="9"
                maxLength="1"
                value={digit ?? ""}
                onChange={(e) => handleInputChange(index, e.target.value)}
                ref={inputRefs[index]}
              />
            ))}
          </div>
          <p
            className="font-gibson-semibold text-sm underline text-[#51087e] ml-auto w-max mb-6 mt-2 cursor-pointer"
            onClick={handleResendOtp}
          >
            Resend OTP
          </p>
          <div className="flex items-center justify-center">
            <Button
              type="submit"
              text="Submit"
              bgColor="#edb45e"
              color="#51087e"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpModal;
