import React, { useEffect } from "react";
import { getBusiness } from "../features/businessSlice";
import {useDispatch, useSelector} from "react-redux";
import { Toaster,toast } from "react-hot-toast";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { CrossIcon, X } from "lucide-react";

const Business = ({ id, setActiveComponent, setLinks }) => {
  const handleClose = () => {
    setLinks((prevLinks) => prevLinks.filter(link => link.id !== id));
    setActiveComponent("My Business");
  };
  const {business,berror,bLoading}=useSelector(state=>state.business);
  const dispatch=useDispatch();
  useEffect(()=>{
    if(berror){
      toast.error(berror);
    }
    

  },[berror,business,bLoading]);
  useEffect(() => {

    dispatch(getBusiness(id));
  }, [dispatch, id]);
  return (
    <div className="bg-black h-[100vh] w-[96vw]">
      <div className="p-4">
        <h1 className="text-2xl text-white">My Business</h1>
      </div>

     <div className="px-7 pt-8 w-[auto] flex justify-between border-b-1 border-white/10 mx-3">
     <div className="">
     <h1 >
                    <span className="block ">
             
                      <Highlight className="text-black text-xl font-bold">
                      {business?.name}
                     </Highlight>
                    </span>
                  </h1>
                  <button className="bg-black text-white text-lg underline mt-4" >
                    Add Product
                  </button>
                  </div>

<div className="flex flex-row ">
     <BusinessCard business={business} />
     <X onClick={handleClose} className="text-black rounded cursor-pointer bg-white"/>   

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