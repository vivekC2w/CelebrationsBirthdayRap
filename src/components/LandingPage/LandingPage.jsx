import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const audioRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/register");
      audioRef.current.pause();
    }, 6000);
    // audioRef.current.play();
  }, []);

  return (
    <div className="flex justify-center items-center bg-bgImg h-screen bg-cover bg-center px-6">
      <div className="">
        <div className="flex ">
          <img
            src="/assets/UI_Images/Celebrations(Bg)-hashtag.png"
            className="m-auto object-cover w-full"
            alt="Celebrations Background"
          />
        </div>
        <div className="text-center text-white">
          <p className="font-dairymilk-medium text-lg mb-2">
            A unique birthday song for everyone!
          </p>
          <p className="font-gibson-italic text-sm">
            इस birthday, कुछ अच्छा हो जाए कुछ मीठा हो जाए
          </p>
          <audio src="/audio/dairymilk.mp3" autoPlay ref={audioRef}></audio>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
