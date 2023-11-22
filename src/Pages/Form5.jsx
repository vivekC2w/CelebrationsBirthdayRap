import { useFormDataContext } from "../ContextApi/FormDataContext";
import DownloadIcon from "../components/Icons/DownloadIcon";
import ShareIcon from "../components/Icons/ShareIcon";
import Button from "../components/utils/Button";
import ProgressBar from "../components/utils/ProgressBar";

const Form5 = () => {
  const { forms } = useFormDataContext();

  console.log("Forms", forms);

  return (
    <div className="text-white text-center px-4 h-full bg-cover">
      <div className="flex flex-col items-center">
        <div className="relative">
          <ProgressBar step={5} title="Your unique song is ready!" />

          <div className="flex justify-between absolute top-24 left-0 right-0 pointer-events-none">
            <img
              src="/assets/UI_Images/Asset_1.png"
              alt=""
              className="object-cover h-16 -top-10 animate-ping"
            />
            <img
              src="/assets/UI_Images/Balloon2.png"
              alt=""
              className="object-cover h-14 relative"
            />
          </div>

          <div className="flex justify-between absolute top-1/2 left-0 right-0 pointer-events-none">
            <img
              src="/assets/UI_Images/PurpleMusicTone.png"
              alt=""
              className="object-cover h-10  -top-10"
            />
            <img
              src="/assets/UI_Images/YellowTone.png"
              alt=""
              className="object-cover h-10 relative"
            />
          </div>
          <div className="flex justify-between absolute bottom-24 left-0 right-0 pointer-events-none">
            <img
              src="/assets/UI_Images/Balloon.png"
              alt=""
              className="object-cover h-10  -top-10"
            />
            <img
              src="/assets/UI_Images/Asset_1.png"
              alt=""
              className="object-cover h-14 relative animate-ping"
            />
          </div>

          <div className="relative px-2 ">
            <div className="relative bg-bgImg bg-cover bg-center flex-col flex gap-4 h-[60vh] mx-10 text-sm border rounded-3xl my-4 overflow-hidden border-[#edb45e]">
              <div className="text-[#edb45e] font-gibson-semibold">
                <h1 className="pt-6 text-lg">Happy Birthday</h1>
                <h2 className="text-xl">Vivek!</h2>
                <img
                  src="/assets/UI_Images/Celebrations(Bg)-hashtag.png"
                  alt=""
                  className="object-cover relative -top-4 opacity-90"
                />
                <img
                  src="/assets/UI_Images/PlayButton.png"
                  alt=""
                  className="absolute object-cover h-20 drop-shadow left-1/2 -translate-x-1/2 top-1/3 cursor-pointer"
                />
                <div className="text-xs relative -top-4 text-white">
                  <p className=" font-gibson-light ">A song for you made by </p>
                  <h4 className=" font-gibson-semibold">Chetan</h4>
                </div>

                <p className="text-xl sm:pt-4 text-white px-4">
                  It's your boy. gotta give a shoutout to Vivek.
                </p>
              </div>

              <div className="absolute flex items-center justify-center bottom-0 left-0 right-0">
                <Button
                  type="button"
                  bgColor="#edb45e"
                  text="Share"
                  color="#51087e"
                  rounded="none"
                  icon={<ShareIcon />}
                  border="border-r border-[#51087e]"
                  width="w-full"
                />

                <Button
                  type="submit"
                  bgColor="#edb45e"
                  text="Download"
                  color="#51087e"
                  rounded="none"
                  icon={<DownloadIcon />}
                  border="border-l border-[#51087e]"
                  width="w-full"
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Button
                type="submit"
                bgColor="#edb45e"
                text="Redeem Gift"
                color="#51087e"
              />

              <Button
                type="submit"
                bgColor="#edb45e"
                text="Create Again"
                color="#51087e"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form5;
