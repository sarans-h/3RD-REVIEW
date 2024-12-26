import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Home from "./Pages/Home";
import Navbar from "./Customs/Navbar";
import Footer from "./Pages/Footer";
import LogSig from "./Pages/LogSig";
import { useDispatch } from 'react-redux';
// import store from './store';
import { loadUser } from "./features/userSlice";
import ProtectedRoute from "./Customs/ProtectedRoute";
function App() {
  // Function to get the cookie value


  const sectionsRef = {
    features: useRef(null),
    pricing: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (section) => {
    sectionsRef[section]?.current.scrollIntoView({ behavior: "smooth" });
  };
  const dispatch=useDispatch(); 

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath !== "/login" && currentPath != "/signin") {
      dispatch(loadUser())
    }

    
  }, []); 


  return (
    <>
        {/* <Provider store={store}> */}
      <BrowserRouter>
        <Navbar
          scrollToSection={scrollToSection}/>
        <Routes>
          <Route
            path="/"
            element={<Home sectionsRef={sectionsRef} />} 
          />
          <Route
            path="/login"
            element={<LogSig  />}
          />
          <Route
            path="/signin"
            element={<LogSig/>}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* </Provider> */}
    </>
  );
}

export default App;
