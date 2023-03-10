import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OfferPage from "./Pages/OfferPage/OfferPage";
import Main from "./Pages/Layout/Main";
import Accueil from "./Pages/Accueil/Accueil";
import Contact from "./Pages/Contact/Contact";
import LegalPage from "./Pages/LegalPage/LegalPage";
import CookieConsent from "react-cookie-consent";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Accueil /> },
        { path: "/offer", element: <OfferPage /> },
        { path: "/contact", element: <Contact /> },
        { path: "/legal", element: <LegalPage /> },
      ],
    },

    {
      path: "*",
      element: <div>not found</div>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
     
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
    </div>
  );
}

export default App;
