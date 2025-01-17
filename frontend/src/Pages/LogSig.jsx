"use client";
import { useState, useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { motion } from "framer-motion";
import axios from "axios";
import { Toaster,toast } from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, loginUser, registerUser } from "../features/userSlice";

const LogSig = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [erro, seterro] = useState("");
  const {error,loading,isAuthenticated}=useSelector((state)=>state.user)
    useEffect(() => {
        if(error){
            toast.error(error);
            dispatch(clearErrors());
        }
        if (isAuthenticated) {
            toast.success("Logged in successfully");
            navigate("/");
        }

    }, [error,loading,isAuthenticated]);
  const location = useLocation();
  const isLogin = location.pathname.includes("/login");

  const handleInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
        if(!isLogin)
      {if (name === "password" || name === "confirmPassword") {
        if (formData.confirmPassword && value !== formData.password) {
          seterro("Password and Confirm Password does not match");
        } else {
          seterro("");
        }
      }}
    },
    [formData.password, formData.confirmPassword]
  );


  const handleSubmit = (e) => {
    e.preventDefault();
   
    seterro("");
    // console.log("Form Data Submitted:", formData);
    if(!isLogin){
        if (formData.password !== formData.confirmPassword) {
            seterro("Passwords do not match");
            return;
          }
        //   console.log("registering")
        dispatch(registerUser(formData));

    }
    else{
        dispatch(loginUser(formData));
    }
    

    
         // Reset form data after submission
    
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="bg-black h-[100vh]">
      <div className="h-auto flex flex-col lg:flex-row items-center justify-center bg-black text-white px-4">
        {/* Left Side: Highlight and Additional Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
          className="lg:w-1/2 w-full h-auto mt-20 flex flex-col space-y-6 text-center lg:text-left lg:pr-10 "
        >
          <HeroHighlight>
            <h1 className="text-3xl md:text-5xl font-bold leading-relaxed">
              Welcome,
              <span className="block pt-7">
                to{"  "}
                <Highlight className="text-black dark:text-white">
                  TESTIMONIALS
                </Highlight>
              </span>
            </h1>

            <p className="text-gray-400 text-sm lg:text-base max-w-lg mx-auto  pt-20 lg:mx-0">
              Whether you have questions, ideas to share, or just want to say
              hello, we&apos;re here to listen. Fill out the form, and
              we&apos;ll get back to you soon. Together, let&apos;s make
              something amazing.
            </p>
            <p className="text-gray-400 text-sm lg:text-base max-w-lg mx-auto lg:mx-0">
              Need immediate assistance? Reach us at{" "}
              <span className="font-bold text-white">support@example.com</span>{" "}
              or call us at{" "}
              <span className="font-bold text-white">+91 222222222</span>.
            </p>
          </HeroHighlight>
        </motion.div>

        {/* Right Side: LogSig Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
          className="lg:w-1/2 w-full bg-black p-8 rounded-md shadow-lg mt-10 lg:mt-0"
        >
          <h2 className="font-bold text-3xl mb-4 text-center lg:text-left inline-block">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          <span className="text-gray-400 text-sm text-center lg:text-left ">
            {isLogin ? (
              <span
                onClick={() => navigate("/signin")}
                className="cursor-pointer"
              >
                {" "}
                Don't have an account?{" "}
              </span>
            ) : (
              <span
                onClick={() => navigate("/login")}
                className="cursor-pointer"
              >
                {" "}
                Already have an account?
              </span>
            )}
          </span>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-wrap gap-6">
              {/* Name */}
              {!isLogin && (
                <div className="flex-1">
                  <Label htmlFor="name" className="text-gray-300">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    type="text"
                    required
                    value={formData.name}
                    className="bg-[#1b15156e] text-white border border-gray-600"
                    onChange={handleInputChange}
                  />
                </div>
              )}

              {/* Email */}
              <div className="flex-1">
                <Label htmlFor="email" className="text-gray-300">
                  Your Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  type="email"
                  required
                  value={formData.email}
                  className="bg-[#1b15156e] text-white border border-gray-600"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password" className="text-gray-300">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                className="bg-[#1b15156e] text-white border border-gray-600"
                onChange={handleInputChange}
              />
            </div>

            {/* Confirm Password */}
            {!isLogin && (
              <div>
                <Label htmlFor="confirmPassword" className="text-gray-300">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.confirmPassword}
                  className="bg-[#1b15156e] text-white border border-gray-600"
                  onChange={handleInputChange}
                />
              </div>
            )}

            {/* Show Password Button */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={toggleShowPassword}
                className="peer hidden"
              />
              <label
                htmlFor="showPassword"
                className="w-5 h-5 border-2 border-white rounded-md cursor-pointer peer-checked:bg-white peer-checked:border-pink-500"
              ></label>
              <span className="text-gray-700">Show Password</span>
            </div>

            {/* Error Message */}
            {erro && <p className="text-red-500">{erro}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-white text-black py-2 rounded-md hover:bg-gray-200 transition-colors"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
        </motion.div>
      </div>
      <Toaster  toastOptions={{
    className: '',
    style: {
      
      background: 'black',
      color: 'white',
      border: '1px solid white',
    },
  }}/>
    </div>
  );
};

export default LogSig;
