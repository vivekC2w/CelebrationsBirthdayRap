import LandingPage from "./components/LandingPage/LandingPage";
import Layout from "./components/Layout/Layout";
import Register from "./components/RegisterationPage/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
