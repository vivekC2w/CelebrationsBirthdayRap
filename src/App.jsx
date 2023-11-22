import FormDataContextProvider from "./ContextApi/FormDataContext";
import Form1 from "./Pages/Form1";
import Form2 from "./Pages/Form2";
import Form3 from "./Pages/Form3";
import Form4 from "./Pages/Form4";
import Form5 from "./Pages/Form5";
import LoadingPage from "./Pages/LoadingPage";
import LandingPage from "./Pages/LandingPage";
import Layout from "./components/Layout/Layout";
import Register from "./components/RegisterationPage/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <FormDataContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/form1" element={<Form1 />} />
            <Route path="/form2" element={<Form2 />} />
            <Route path="/form3" element={<Form3 />} />
            <Route path="/form4" element={<Form4 />} />
            <Route path="/form5" element={<Form5 />} />
            <Route path="/loading" element={<LoadingPage />} />
          </Routes>
        </Layout>
      </FormDataContextProvider>
    </Router>
  );
};

export default App;
