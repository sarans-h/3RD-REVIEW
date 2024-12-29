import React, { useEffect } from 'react';
import { Toaster, toast } from "react-hot-toast";
import InteractiveHoverButton from '../components/ui/interactive-hover-button';
import { useDispatch, useSelector } from 'react-redux';
import { clearberrors, myBusiness } from '../features/businessSlice';

const MyBusiness = () => {
    const dispatch=useDispatch();
    const {berror,businesss}=useSelector((state)=>state.business);
    useEffect(() => {
        dispatch(myBusiness())
        if(berror){
            toast.error(berror);
            dispatch(clearberrors());
        }


    }, []);
    return (
        <div className="bg-black h-[100vh] w-[96vw]">
            <div className="p-4">
                <h1 className="text-2xl text-white">My Business</h1>
            </div>
            <p className='text-xl text-white p-7 '>Select Businness To View Added Products</p>
            <div className="grid grid-cols-4 gap-6 mt-10 px-16 w-full cursor-pointer">
                {businesss.map(business => (
                    <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <h3 className="text-xl font-semibold text-white mb-2 break-words">{business.name}</h3>
                        <p className="text-gray-400 break-words">{business.productId.length} products</p>
                        <div className="-ml-6">
                            <InteractiveHoverButton className="text-green-400" text="Add Products" />
                        </div>
                    </div>
                ))}
            </div>
            <Toaster
                toastOptions={{
                    className: "",
                    style: {
                        background: "black",
                        color: "white",
                        border: "1px solid white",
                    },
                }}
            />
        </div>
    );
};

export default MyBusiness;
