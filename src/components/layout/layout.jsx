import { useLocation } from "react-router";
import Footer from "../footer/footer";
import Navigation from "../navigation/navigation";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navigation />

      {children}

      <Footer />
    </>
  );
};

export default Layout;
