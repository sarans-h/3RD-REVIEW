import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { productDetails } from "../features/productSlice";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

const Form = () => {
  const { productid } = useParams();
  const dispatch = useDispatch();
  const { pLoading, perror, product } = useSelector((state) => state.product);

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
   
  };
  const maxStars = 5;
  const navigate=useNavigate();
  useEffect(() => {
    dispatch(productDetails(productid));
  }, [dispatch, productid]);

  useEffect(() => {
    if (perror) {
      toast.error(perror);
    }
  }, [perror]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const review = {
        stars: rating,
        comment,
        customerName,
        customerEmail,
    };
    try {
        const { data } = await axios.post(`/api/review/${productid}/createreview`, review);
        if (data.success) {
            toast.success("Review added successfully");
            setRating(0);
            setComment("");
            setCustomerName("");
            setCustomerEmail("");
            // navigate('/thankyou')
        }
    } catch (error) {
        // console.log(error);
        toast.error("Failed to add review Try again later");
    }
};


  return (
    <div className="min-h-[100vh] bg-black text-white pb-16">
      <h1 className="text-4xl pt-3 font-bold bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center leading-none tracking-tighter text-transparent mb-4">
        Testimonials
      </h1>
      <div className="bg-black flex flex-col">
        <h1 className="text-2xl font-bold p-8">
          Reviewing Product
          <h2 className="text-sm font-light">Powered by ©Testimonials</h2>
        </h1>
        <div className="w-[96vw] flex">
          <div className="flex flex-col">
            <div className="pb-8 pl-8 w-[64vw]">
              <div className="flex items-center space-x-4">
                <div className="relative w-[30vw]">
                  <label className="block text-sm font-medium text-white mb-1">
                    Product Name
                  </label>
                  <input
                    type="text"
                    value={product?.productName}
                    readOnly
                    className="px-3 py-2 w-full border border-transparent rounded-md bg-white/5 text-white pr-10"
                  />
                </div>
                <div className="relative w-[30vw]">
                  <label className="block text-sm font-medium text-white mb-1">
                    Product URL
                  </label>
                  <input
                    type="text"
                    value={product?.productUrl}
                    readOnly
                    className="px-3 py-2 w-full border border-transparent rounded-md bg-white/5 text-white pr-10"
                  />
                </div>
              </div>
              <div className="flex items-center mt-4 space-x-4">
                <div className="relative w-[30vw]">
                  <label className="block text-sm font-medium text-white mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    value={product?.description}
                    readOnly
                    className="px-3 py-2 w-full border border-transparent rounded-md bg-white/5 text-white pr-10"
                  />
                </div>
              </div>
              <form onSubmit={handleSubmit} className="mt-8">
                <div className="flex items-center space-x-4">
                  <div className="relative w-[30vw]">
                    <label className="block text-sm font-medium text-white mb-1">
                      {" "}
                      Name
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      required
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="px-3 py-2 w-full border border-transparent rounded-md bg-white/5 text-white pr-10"
                    />
                  </div>
                  <div className="relative w-[30vw]">
                    <label className="block text-sm font-medium text-white mb-1">
                      {" "}
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="px-3 py-2 w-full border border-transparent rounded-md bg-white/5 text-white pr-10"
                    />
                  </div>
                </div>
                <div className="flex items-center mt-4 space-x-4">
                  <div className="relative w-[30vw]">
                    <label className="block text-sm font-medium text-white mb-1">
                      Stars
                    </label>
                    <div className="flex flex-col items-center">
                      <div className="flex space-x-1">
                        {Array.from({ length: maxStars }, (_, index) => {
                          const starValue = index + 1;
                          return (
                            <button
                              key={starValue}
                              type="button"
                              className={`text-3xl ${
                                rating >= starValue
                                  ? "text-yellow-500"
                                  : "text-gray-300"
                              }`}
                              onClick={() => handleRatingChange(starValue)}
                            >
                              ★
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="relative w-[30vw]">
                    <label className="block text-sm font-medium text-white mb-1">
                      Comment
                    </label>
                    <textarea
                      value={comment}
                        required
                      onChange={(e) => setComment(e.target.value)}
                      className="px-3 py-2 w-full border border-transparent rounded-md bg-white/5 text-white pr-10"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-4 px-4 py-2 bg-white text-black rounded-md"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="w-[32vw] pl-5">
            <iframe
              src={product?.productUrl}
              title="Website Preview"
              className="w-[32vw] h-[32vw] border border-pink-500 rounded-md"
              style={{ border: "none", overflow: "hidden" }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>
        </div>
      </div>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            height: "40px",
            background: "#151719",
            color: "white",
            border: "1px solid white",
          },
        }}
      />
    </div>
  );
};

export default Form;
