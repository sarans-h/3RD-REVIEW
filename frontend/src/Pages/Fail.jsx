
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Toaster,toast } from "react-hot-toast";
const Fail = () => {
  const query = new URLSearchParams(useLocation().search);
  
   const sessionId = query.get("session_id");

const productName = query.get("product_name");
  useEffect(() => {
  
            toast.fail(res.data.message);
            setTimeout(() => {
                window.location.href = "/dashboard";
            }, 2000);


  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center text-white bg-black">
      <h1>Payment Failed! Redirecting to Dashboard</h1>
      
                         <Toaster  toastOptions={{
                            className: '',
                            style: {
                              height: '40px',
                              
                              background: '#151719',
                              color: 'white',
                              border: '1px solid white',
                            },
                          }}/>
    </div>
  );
};

export default Fail;