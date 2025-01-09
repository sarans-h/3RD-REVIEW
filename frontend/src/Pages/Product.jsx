import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productDetails } from '../features/productSlice';
import { Toaster, toast } from "react-hot-toast";
import { Copy } from 'lucide-react';
import CodePreview from "../components/ui/code-preview";
import CodeComparison from "../components/ui/code-comparison";

const Product = () => {
    const { productid } = useParams();
    const dispatch = useDispatch();
    const { pLoading, perror, products, product } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(productDetails(productid));
    }, [dispatch, productid]);

    useEffect(() => {
        if (perror) {
            toast.error(perror);
        }
    }, [perror, products, pLoading]);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        toast.success('Copied to clipboard!');
    };

    const code = `import React, { useEffect, useState } from "react";

export function Marquee({ className, reverse, pauseOnHover = false, children, vertical = false, repeat = 4, speed = 20, ...props }) {
  return (
    <div
      {...props}
      style={{
        display: "flex",
        flexDirection: vertical ? "column" : "row",
        overflow: "hidden",
        padding: "0.5rem",
        position: "relative",
        width: "100%",
      }}
      className={\`group \${className || ""}\`}
    >
      <div
        style={{
          display: "flex",
          flexDirection: vertical ? "column" : "row",
          gap: "1rem",
          animation: \`marquee \${speed}s linear infinite \${reverse ? "reverse" : "normal"}\`,
          animationPlayState: pauseOnHover ? "paused" : "running",
        }}
        onMouseEnter={(e) => pauseOnHover && (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={(e) => pauseOnHover && (e.currentTarget.style.animationPlayState = "running")}
      >
        {Array(repeat).fill(0).map((_, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "row" }}>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ReviewCard({ img, name, username, body }) {
  return (
    <figure
      style={{
        width: "16rem",
        border: "1px solid #e5e7eb",
        borderRadius: "0.75rem",
        overflow: "hidden",
        padding: "1rem",
        backgroundColor: "#fff",
        boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
        margin: "0.5rem",
        cursor: "pointer",
        transition: "background-color 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f9fafb")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <img
          style={{
            borderRadius: "50%",
            width: "32px",
            height: "32px",
          }}
          alt=""
          src={img}
        />
        <div>
          <figcaption
            style={{
              fontSize: "0.875rem",
              fontWeight: "500",
              color: "#1f2937",
            }}
          >
            {name}
          </figcaption>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: "500",
              color: "#6b7280",
            }}
          >
            {username}
          </p>
        </div>
      </div>
      <blockquote
        style={{
          marginTop: "0.5rem",
          fontSize: "0.875rem",
          color: "#374151",
        }}
      >
        {body}
      </blockquote>
    </figure>
  );
}

function App() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const productid = \`${productid}\`;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          \`http://localhost:8080/api/review/${productid}/getallreviews\`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setReviews(data.reviews || []);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [productid]);

  if (loading) return <div style={{ color: "#fff" }}>Loading reviews...</div>;
  if (error) return <div style={{ color: "#f87171" }}>Error: {error}</div>;
  if (!reviews.length) return <div style={{ color: "#fff" }}>No reviews found</div>;

  const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
  const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

  return (
    <div
      style={{
        height: "500px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #e5e7eb",
        borderRadius: "0.75rem",
        overflow: "hidden",
        backgroundColor: "",
        position: "relative",
      }}
    >
      <style>{\`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      \`}</style>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <Marquee pauseOnHover speed={40}>
          {firstRow.map((review) => (
            <ReviewCard
              key={review._id}
              img={\`https://avatar.vercel.sh/\${review.customerName}\`}
              name={review.customerName}
              username={review.customerEmail}
              body={review.comment}
            />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover speed={40}>
          {secondRow.map((review) => (
            <ReviewCard
              key={review._id}
              img={\`https://avatar.vercel.sh/\${review.customerName}\`}
              name={review.customerName}
              username={review.customerEmail}
              body={review.comment}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default App;
`
    
    
    

    return (
        <div className='min-h-[100vh] bg-black text-white pb-16'>
            <div className="pt-16">
                <div className="bg-black flex flex-col ">
                    <h1 className="text-2xl font-bold p-8">Product Details</h1>
                    <div className="w-[96vw] flex">
                        <div className="flex flex-col ">
                            <div className='pb-8 pl-8 w-[64vw]'>
                                <div className="flex items-center space-x-4">
                                    <div className="relative w-[30vw]">
                                        <label className="block text-sm font-medium text-white mb-1">Product Name</label>
                                        <input
                                            type="text"
                                            value={product?.productName}
                                            readOnly
                                            className="px-3 py-2 w-full border border-transparent rounded-md bg-white/5 text-white pr-10"
                                        />
                                        <Copy size={16} onClick={() => copyToClipboard(product?.productName)} 
                                            className="absolute right-2 top-1/4 text-white"
                                        />
                                    </div>
                                    <div className="relative w-[30vw]">
                                        <label className="block text-sm font-medium text-white mb-1">Product URL</label>
                                        <input
                                            type="text"
                                            value={product?.productUrl}
                                            readOnly
                                            className="px-3 py-2 w-full border border-transparent rounded-md bg-white/5 text-white pr-10"
                                        />
                                        <Copy size={16} onClick={() => copyToClipboard(product?.productUrl)} 
                                            className="absolute right-2 top-1/4 text-white"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center mt-4 space-x-4">
                                    <div className="relative w-[30vw]">
                                        <label className="block text-sm font-medium text-white mb-1">Description</label>
                                        <input
                                            type="text"
                                            value={product?.description}
                                            readOnly
                                            className="px-3 py-2 w-full border border-transparent rounded-md bg-white/5 text-white pr-10"
                                        />
                                        <Copy size={16} onClick={() => copyToClipboard(product?.description)} 
                                            className="absolute right-2 top-1/4 text-white"
                                        />
                                    </div>
                                    <div className="relative w-[30vw]">
                                        <label className="block text-sm font-medium text-white mb-1">Form URL</label>
                                        <input
                                            type="text"
                                            value={product?.formUrl}
                                            readOnly
                                            className="px-3 py-2 w-full border border-transparent rounded-md bg-white/5 text-white pr-10"
                                        />
                                        <Copy size={16} onClick={() => copyToClipboard(product?.formUrl)} 
                                            className="absolute right-2 top-1/4 text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full ">
                                {product?.reviewIds?.length === 0 ? <p className="text-white p-8">No reviews yet</p> :
                                    <>
                                        <h1 className="text-2xl font-bold p-8">Reviews</h1>
                                        <div className="grid grid-cols-3 gap-4 p-8">
                                            {product?.reviewIds?.map((review) => (
                                                <div key={review._id} className="bg-white/5 p-4 rounded-md">
                                                    <h2 className="text-lg font-bold">{review.customerName}</h2>
                                                    <p className="text-sm text-gray-400">{review.customerEmail}</p>
                                                    <p className="mt-2">{review.comment}</p>
                                                    <div className="flex items-center mt-2">
                                                        <span className="text-yellow-500">{'★'.repeat(review.stars)}</span>
                                                        <span className="text-gray-400 ml-2">{'★'.repeat(5 - review.stars)}</span>
                                                    </div>
                                                    <p className="text-xs text-gray-500 mt-2">{new Date(review.createdAt).toLocaleDateString()}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                }
                            </div>
                            <div className=" p-10 bg-black mb-16">
                                <h1 className="text-2xl font-bold p-8">Embed Code</h1>
                                <CodePreview
                                    code={code}
                                    language="javascript"
                                />
                            </div>
                        </div>
                        <div className="w-[32vw]">
                            <iframe
                                src={product.productUrl}

                                title="Website Preview"
                                className='w-[32vw] h-[32vw] border border-pink-500 rounded-md'
                                style={{ border: 'none', overflow: 'hidden' }}
                                sandbox="allow-scripts allow-same-origin"
                            >
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster toastOptions={{
                className: '',
                style: {
                    height: '40px',
                    background: '#151719',
                    color: 'white',
                    border: '1px solid white',
                },
            }} />
        </div>
    )
}

export default Product;
