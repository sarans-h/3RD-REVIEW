import React, { useState, useRef, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ChevronDown, Menu } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";
import { Toaster,toast } from "react-hot-toast";
import { logoutUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
const Navbar = ({ scrollToSection}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isop,setIsop]=useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const {user,isAuthenticated}=useSelector((state)=>state.user)

  const navigate=useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const dispatch=useDispatch();
  const handleLogout=()=>{
    // console.log("logingout")
    dispatch(logoutUser());
    toast.success("Logged out successfully");
    navigate("/");
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-[#040405]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => navigate("/") }
              className="text-2xl font-bold bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center leading-none tracking-tighter text-transparent mb-4 hover:opacity-80 transition-opacity cursor-pointer"
            >
              Testimonials
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={()=>{
                if (window.location.pathname !== "/") {
                  navigate("/");
                  setTimeout(() => {
                    scrollToSection("features");
                    setIsop(false);
                  }, 100);
                } else {
                  scrollToSection("features");
                  setIsop(false);
                }}
              }
              className="relative text-gray-300 hover:text-white px-4 py-2 rounded-full transition-all duration-200 overflow-hidden group cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={()=>{
                if (window.location.pathname !== "/") {
                  navigate("/");
                  setTimeout(() => {
                    scrollToSection("pricing");
                    setIsop(false);
                  }, 100);
                } else {
                  scrollToSection("pricing");
                  setIsop(false);
                }}
              }
              className="relative text-gray-300 hover:text-white px-4 py-2 rounded-full transition-all duration-200 overflow-hidden group cursor-pointer"
            >
              Pricing
            </button>
            <button
              onClick={()=>{
                if (window.location.pathname !== "/") {
                  navigate("/");
                  setTimeout(() => {
                    scrollToSection("contact");
                    setIsop(false);
                  }, 100);
                } else {
                  scrollToSection("contact");
                  setIsop(false);
                }}
              }
              className="relative text-gray-300 hover:text-white px-4 py-2 rounded-full transition-all duration-200 overflow-hidden group cursor-pointer"
            >
              Contact
            </button>
            {isAuthenticated?
            
            
            //  <button  className="  bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-l font-bold leading-none tracking-tighter text-transparent">LogOut</button>
            <div className="relative">
            <img
              src="https://placehold.co/150x150.png"
              alt="Profile"
              className="w-8 h-8 rounded-full cursor-pointer"
              onClick={() => setIsop(!isop)}
            />
            {isop && (
              <div className="absolute right-0 mt-2 w-48 backdrop-blur-xl transform transition-all duration-200 origin-top-right">
                <button
                  onClick={() => {
                    navigate("/dashboard");
                    setIsop(false);
                  }}
                  className="block text-gray-300 hover:text-white px-4 py-2 rounded-xl hover:bg-white/10 transition-all duration-200 cursor-pointer"
                >
                  {user?.name}
                  Dashboard
                </button>
                
                <button
                  onClick={() => {
                    handleLogout();
                    setIsop(false);
                  }}
                  className="block text-gray-300 hover:text-white px-4 py-2 rounded-xl hover:bg-white/10 transition-all duration-200 cursor-pointer"
                >
                  LogOut
                </button>
              </div>
            )}
          </div>  

            :
            
            <button className="bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-l font-bold leading-none tracking-tighter text-transparent" onClick={()=>navigate("/login")} >
              Login/Signup
            </button>}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 text-gray-300 hover:text-white px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              <Menu size={24} />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 backdrop-blur-xl transform transition-all duration-200 origin-top-right">
                <button
                  onClick={()=>{
                    if (window.location.pathname !== "/") {
                      navigate("/");
                      setIsOpen(false);
                      setTimeout(() => {
                        scrollToSection("features");
                      }, 100);
                    } else {
                      scrollToSection("features");
                      setIsOpen(false);
                    }}
                  }
                  className="block text-gray-300 hover:text-white px-4 py-2 rounded-xl hover:bg-white/10 transition-all duration-200 cursor-pointer"
                >
                  Features
                </button>
                <button
                  onClick={()=>{
                    if (window.location.pathname !== "/") {
                      navigate("/");
                      setIsOpen(false);
                      setTimeout(() => {
                        scrollToSection("pricing");
                      }, 100);
                    } else {
                      scrollToSection("pricing");
                      setIsOpen(false);
                    }}
                  }
                  className="block text-gray-300 hover:text-white px-4 py-2 rounded-xl hover:bg-white/10 transition-all duration-200 cursor-pointer"
                >
                  Pricing
                </button>
                <button
                 onClick={()=>{
                  if (window.location.pathname !== "/") {
                    navigate("/");
                    setIsOpen(false);
                    setTimeout(() => {
                      scrollToSection("contact");
                    }, 100);
                  } else {
                    scrollToSection("contact");
                    setIsOpen(false);
                  }}
                }
                  className="block text-gray-300 hover:text-white px-4 py-2 rounded-xl hover:bg-white/10 transition-all duration-200 cursor-pointer"
                >
                  Contact
                </button>
                
                
                <button onClick={()=>{handleLogout()}} className="  bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-l font-bold leading-none tracking-tighter text-transparent">LogOut</button>
                
                

              </div>
            )
            }
          </div>
        </div>
      </div>
      <Toaster  toastOptions={{
    className: '',
    style: {
      height: '40px',
      
      background: '#151719',
      color: 'white',
      border: '1px solid white',
    },
  }}/>
    </nav>
  );
};

export default Navbar;
