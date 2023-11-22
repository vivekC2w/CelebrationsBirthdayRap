import { useState } from "react";
import Button from "../components/utils/Button";
import ProgressBar from "../components/utils/ProgressBar";
import GenreWrapper from "../components/GenreWrapper/GenreWrapper";
import { genre, mood, singersVoice } from "../constants";
import IconsWrapper from "../components/Icons/IconsWrapper";
import { useNavigate } from "react-router-dom";
import { useFormDataContext } from "../ContextApi/FormDataContext";

const Form2 = () => {
  const [selected, setSelected] = useState({
    mood: "",
    genre: "",
    singersVoice: "",
  });
  const navigate = useNavigate();

  const { handleForms } = useFormDataContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected", selected);
    if (Object.values(selected).some((val) => val === "")) {
      return;
    }
    handleForms("form2", selected);
    navigate("/form3");
  };

  const handleSelected = (key, value) => {
    setSelected((prevState) => ({
      ...prevState,
      [key]: value,
    }));
    console.log("Key", key, value);
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
            <form
              onSubmit={handleSubmit}
              className="flex-col flex gap-4 text-sm"
            >
              <GenreWrapper title="Mood">
                {mood?.map(({ subTitle, imgSrc }) => (
                  <IconsWrapper
                    key={subTitle}
                    subTitle={subTitle}
                    title="mood"
                    imgSrc={imgSrc}
                    selected={selected}
                    handleSelected={handleSelected}
                  />
                ))}
              </GenreWrapper>
              <GenreWrapper title="Genre">
                {genre?.map(({ subTitle, imgSrc }) => (
                  <IconsWrapper
                    key={subTitle}
                    subTitle={subTitle}
                    title="genre"
                    imgSrc={imgSrc}
                    selected={selected}
                    handleSelected={handleSelected}
                  />
                ))}
              </GenreWrapper>
              <GenreWrapper title="Singer's Voice">
                {singersVoice?.map(({ subTitle, imgSrc }) => (
                  <IconsWrapper
                    borderRadius={"rounded-lg"}
                    width={"w-32"}
                    key={subTitle}
                    title="singersVoice"
                    subTitle={subTitle}
                    imgSrc={imgSrc}
                    selected={selected}
                    handleSelected={handleSelected}
                  />
                ))}
              </GenreWrapper>
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
