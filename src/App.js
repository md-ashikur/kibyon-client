import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OfferPage from "./Pages/OfferPage/OfferPage";
import Main from "./Pages/Layout/Main";
import Accueil from "./Pages/Accueil/Accueil";
import Contact from "./Pages/Contact/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Accueil /> },
        { path: "/offer", element: <OfferPage /> },
        { path: "/contact", element: <Contact /> },
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
    </div>
  );
}

export default App;
