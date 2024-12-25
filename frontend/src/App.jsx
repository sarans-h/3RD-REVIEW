import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Home from "./Pages/Home";
import Navbar from "./Customs/Navbar";
import Footer from "./Pages/Footer";
import LogSig from "./Pages/LogSig";
import Cookies from "js-cookie";

function App() {
  // Function to get the cookie value


  // Initialize authentication state based on the cookie
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const sectionsRef = {
    features: useRef(null),
    pricing: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (section) => {
    sectionsRef[section]?.current.scrollIntoView({ behavior: "smooth" });
  };
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  useEffect(() => {
    
    // Update isAuthenticated if the cookies change
    const token = getCookie("access_token");
    console.log(token)
    if(token)
    setIsAuthenticated(true);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar
          scrollToSection={scrollToSection}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
        <Routes>
          <Route
            path="/"
            element={<Home sectionsRef={sectionsRef} />}
          />
          <Route
            path="/login"
            element={<LogSig isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/signin"
            element={<LogSig isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
