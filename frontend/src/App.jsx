import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Customs/Navbar";
import Footer from "./Pages/Footer";
import { useRef } from "react";

function App() {
  const sectionsRef = {
    features: useRef(null),
    pricing: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (section) => {
    sectionsRef[section]?.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <BrowserRouter>
        <Navbar scrollToSection={scrollToSection} />
        <Routes>
          <Route
            path="/"
            element={<Home sectionsRef={sectionsRef} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
