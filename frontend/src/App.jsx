import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";
import Home from "./Pages/Home";
import Navbar from "./Customs/Navbar";
import Footer from "./Pages/Footer";
import LogSig from "./Pages/LogSig";
import { useDispatch } from "react-redux";
import { loadUser } from "./features/userSlice";
import ProtectedRoute from "./Customs/ProtectedRoute";
import Dashboard from "./Pages/Dashboard";
import Product from "./Pages/Product";
import Form from "./Pages/Form";
import Embed1 from "./Embed/Embed1";
import Success from "./Pages/Success";
import Fail from "./Pages/Fail.jsx";

function App() {
  // Refs for scrollable sections
  const sectionsRef = {
    features: useRef(null),
    pricing: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (section) => {
    sectionsRef[section]?.current.scrollIntoView({ behavior: "smooth" });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath !== "/login" && currentPath !== "/signin") {
      dispatch(loadUser());
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <AppContent sectionsRef={sectionsRef} scrollToSection={scrollToSection} />
    </BrowserRouter>
  );
}

function AppContent({ sectionsRef, scrollToSection }) {
  const location = useLocation(); // Get the current location inside the Router context

  // Check if the current path is "/dashboard" or "/:productid"
  const isDashboardRoute = location.pathname === "/dashboard";
  const isProductRoute = /^\/[^/]+$/.test(location.pathname);
  const isEmbedRoute = /^\/embed\/[^/]+$/.test(location.pathname);
  const isEmbed1Route = /^\/embed\/[^/]+\/embed1$/.test(location.pathname);

  return (
    <>
      {!isDashboardRoute && !isProductRoute && !isEmbed1Route && <Navbar scrollToSection={scrollToSection} />}
      <Routes>
        <Route path="/" element={<Home sectionsRef={sectionsRef} />} />
        <Route path="/:productid" element={<Form />} />
        <Route path="/login" element={<LogSig />} />
        <Route path="/signin" element={<LogSig />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="/product/:productid" element={<Product />} />
        <Route path="/embed/:productid/embed1" element={<Embed1 />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Fail/>}/>
      </Routes>
      {!isDashboardRoute && !isEmbed1Route && !isProductRoute && <Footer />}
    </>
  );
}

export default App;
