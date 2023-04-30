import "./App.css";
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import OfferPage from "./Pages/OfferPage/OfferPage";

import Accueil from "./Pages/Accueil/Accueil";
import Contact from "./Pages/Contact/Contact";
import LegalPage from "./Pages/LegalPage/LegalPage";
import CookieConsent from "react-cookie-consent";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Aos from "aos";
import "aos/dist/aos.css";
import GoToTop from "./Components/GoToTop/GoToTop";
import { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  Aos.init();

  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/offer" element={<OfferPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/legal" element={<LegalPage />} />
      </Routes>
      <Footer />
      {/* <CookieConsent debug={true} enableDeclineButton flipButtons>
        This website uses cookies to enhance the user experience.
        <span
          style={{
            fontSize: "10px",
          }}
        >
          This bit of text is smaller :O
        </span>
      </CookieConsent> */}
      <GoToTop />
    </div>
  );
}

export default App;
