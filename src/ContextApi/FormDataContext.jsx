import { createContext, useContext, useState } from "react";

const FormDataContext = createContext();

const FormDataContextProvider = ({ children }) => {
  const [forms, setForms] = useState({
    form1: {},
    form2: {},
    form3: {},
    form4: {},
    form5: {},
  });

  const handleForms = (key, value) => {
    setForms((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <FormDataContext.Provider value={{ forms, handleForms }}>
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataContextProvider;

export const useFormDataContext = () => {
  return useContext(FormDataContext);
};
