import { useState } from "react";
import { useFormDataContext } from "../ContextApi/FormDataContext";
import Button from "../components/utils/Button";
import ProgressBar from "../components/utils/ProgressBar";
import { useNavigate } from "react-router-dom";

const Form4 = () => {
  const navigate = useNavigate();
  const [lyrics, setLyrics] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Estvoluptatum deserunt rerum, dolorum sit illo harum incidunt  error quae autem voluptatibus accusantium quis vel. Assumend  molestiae dolores reiciendis voluptatibus tempora doloribus  similique, accusantium placeat corrupti, architecto culpa iure   sequi ducimus animi, in omnis nesciunt. Molestias nulla   deleniti illum exercitationem? Dolorum impedit quis autem   explicabo adipisci deserunt nobis accusantium eveniet, quaerat   id, asperiores assumenda quae? Odit impedit odio corporis sunt dicta eaque facilis magnam facere harum eveniet, voluptate  reprehenderit quo pariatur quaerat id laudantium, et quisquam  doloremque non sequi ducimus neque architecto fugit ullam.  Excepturi fugiat dolore minus optio. Repellat, quae."
  );
  const { handleForms, forms } = useFormDataContext();

  console.log(forms);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleForms("form4", lyrics);

    navigate("/loading");
  };

  return (
    <div className="text-white text-center px-4 h-full bg-cover">
      <div className="flex flex-col items-center">
        <div className="relative">
          <ProgressBar step={4} title="Your song's lyrics are ready!" />

          <div className="relative px-4">
            {/* Input Fields */}
            <form
              onSubmit={handleSubmit}
              className="flex-col flex gap-4 text-sm"
            >
              <div className=" flex flex-col gap-4 bg-white rounded-xl text-[#51087e] p-4 ">
                <p className="h-[60vh] overflow-y-auto text-left font-medium text-lg p-4">
                  {lyrics}
                </p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <Button
                  type="button"
                  bgColor="#b191e9"
                  text="Recreate Lyrics"
                  color="#fff"
                  disabled
                />

                <Button
                  type="submit"
                  bgColor="#edb45e"
                  text="Create Song"
                  color="#51087e"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form4;