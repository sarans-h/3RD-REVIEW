
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Toaster,toast } from "react-hot-toast";
const Success = () => {
  const query = new URLSearchParams(useLocation().search);
  
   const sessionId = query.get("session_id");

const productName = query.get("product_name");
  useEffect(() => {
    if (sessionId) {
      axios.post("/api/payment/paymentSuccess", { sessionId, productName })
        .then((res) => {
            toast.success(res.data.message);
            setTimeout(() => {
                window.location.href = "/dashboard";
            }, 2000);

        })
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen flex items-center justify-center text-white bg-black">
      <h1>Payment Successful! Credits have been updated. Redirecting to Dashboard</h1>
      
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

export default Success;