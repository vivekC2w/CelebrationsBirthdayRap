import { useLocation } from "react-router-dom";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  if (pathname === "/") return children;
  return (
    <div className="bg-bgImg bg-cover bg-center">
      <Header />
      <div className="mt-16">{children}</div>
    </div>
  );
};

export default Layout;
