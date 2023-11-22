import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const LoadingPage = () => {
  const navigate = useNavigate();
  const audioRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.pause();
      navigate("/form5");
    }, 5000);
  }, []);

  return (
    <div className="relative h-screen ">
      <div className="relative flex w-full justify-center items-center px-6 top-60">
        <div className="">
          <div className="flex flex-col w-full items-center justify-center gap-4">
            <div className="text-center text-white">
              <h1 className="font-gibson-semibold text-xl mb-2">Please Wait</h1>
              <p className="font-gibson-semibold text-lg mb-2">
                while we compose your song...
              </p>
            </div>
            <img
              src="/assets/UI_Images/Guitar.png"
              className="m-auto object-cover w-[40vw] animate-zoomInOut drop-shadow-md"
              alt="Guitar"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between relative -top-28 pointer-events-none px-10">
        <img
          src="/assets/UI_Images/Asset_1.png"
          alt=""
          className="object-cover h-16 animate-ping drop-shadow-md duration-1000"
        />
      </div>

      <div className="w-full flex justify-between relative pointer-events-none px-10">
        <img
          src="/assets/UI_Images/PurpleMusicTone.png"
          alt=""
          className="object-cover h-10 animate-bounce transition-all drop-shadow-md delay-100"
        />
        <img
          src="/assets/UI_Images/YellowTone.png"
          alt=""
          className="object-cover h-14 relative -top-10 animate-bounce transition-all drop-shadow-md delay-200"
        />
      </div>

      <div className="w-full flex justify-between relative pointer-events-none top-44 px-20">
        <img
          src="/assets/UI_Images/PurpleTone.png"
          alt=""
          className="object-cover h-16 animate-bounce transition-all drop-shadow-md delay-300"
        />
        <img
          src="/assets/UI_Images/Asset_1.png"
          alt=""
          className="object-cover h-14 relative -top-10 animate-ping drop-shadow-md delay-500"
        />
      </div>
      <audio src="/audio/dairymilk.mp3" autoPlay ref={audioRef}></audio>
    </div>
  );
};

export default LoadingPage;
