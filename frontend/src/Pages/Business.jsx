import React, { useEffect } from "react";
import { getBusiness } from "../features/businessSlice";
import { useDispatch, useSelector } from "react-redux";
import { Toaster, toast } from "react-hot-toast";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { CrossIcon, X } from "lucide-react";
import { AddProductModal } from "../components/AddProductModal";
import { getProducts } from "../features/productSlice";
import { useNavigate } from "react-router-dom";

const Business = ({ id, setActiveComponent, setLinks }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    setLinks((prevLinks) => prevLinks.filter(link => link.id !== id));
    setActiveComponent("My Business");
  };

  const { business, berror, bLoading } = useSelector(state => state.business);
  const dispatch = useDispatch();
  const { pLoading, perror, products, product } = useSelector(state => state.product);

  useEffect(() => {
    if (berror) {
      toast.error(berror);
    }
  }, [berror, business, bLoading]);

  useEffect(() => {
    dispatch(getBusiness(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (perror) {
      toast.error(perror);
    }
  }, [perror, products, pLoading]);

  useEffect(() => {
    dispatch(getProducts(id));
  }, [dispatch, id]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="bg-black h-[100vh] w-[96vw]">
      <div className="p-4">
        <h1 className="text-2xl text-white">My Business</h1>
      </div>

      <div className="px-7 pt-8 w-[auto] flex justify-between border-b-1 border-white/10 mx-3">
        <div className="">
          <h1>
            <span className="block ">
              <Highlight className="text-black text-xl font-bold">
                {business?.name}
              </Highlight>
            </span>
          </h1>
          <AddProductModal businessid={id} />
        </div>

        <div className="flex flex-row ">
          <BusinessCard business={business} />
          <X onClick={handleClose} className="text-black rounded cursor-pointer bg-white" />
        </div>
      </div>

      <div className="overflow-y-scroll h-[63vh] mb-9 ">
        <style>
          {`
            div::-webkit-scrollbar {
              display: none; /* For Chrome, Safari, and Opera */
            }
          `}
        </style>
        {products.length === 0 ? (
          <p className="text-white p-4">No products Added</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {products?.map((product) => (
              <div
                key={product.id}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-1 cursor-pointer"
                onClick={() => handleProductClick(product._id)}
              >
                <h3 className="text-xl font-semibold text-white mb-2">{product.productName}</h3>
                <p className="text-gray-400"><strong>Description:</strong> {product.description}</p>
                <p className="text-gray-400"><strong>Url:</strong> {product.productUrl}</p>
              </div>
            ))}
          </div>
        )}
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
  );
};

const BusinessCard = ({ business }) => {
  return (
    <div className="bg-white/5 text-white p-4 rounded-lg shadow-md m-4 w-[30vw]">
      <h2 className="text-xl font-bold">{business?.name}</h2>
      <p><strong>Desc:</strong> {business?.description}</p>
      <p><strong>Domain:</strong> {business?.domain}</p>
    </div>
  );
};

export default Business;