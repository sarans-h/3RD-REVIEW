import React, { useEffect } from 'react';
import LeftProfile from './Leftprofile.jsx';
import { useDispatch, useSelector } from 'react-redux';
import InteractiveHoverButton from '../components/ui/interactive-hover-button';
import { Toaster, toast } from "react-hot-toast";
import { clearberrors, myBusiness } from '../features/businessSlice.js';

function Profile() { // Accept onAddRoom as a prop
    const dispatch=useDispatch();
    const {user}=useSelector((state)=>state.user)
    const {businesss,bLoading,berror}=useSelector((state)=>state.business);
    useEffect(() => {
        
        dispatch(myBusiness())
        if (berror) {
            toast.error(berror);
        }
    }, [berror]);

return (
    <div className="flex w-full flex-col md:flex-row h-screen bg-black justify-center items-center overflow-scroll">
        {/* Left pane with hidden scrollbar */}
        <div
            className="w-full md:w-[70vw] h-[100vh] bg-black  border-r-[1px] border-[#7e7b7b5b]"
            style={{
                scrollbarWidth: 'none', // For Firefox
                msOverflowStyle: 'none', // For IE and Edge
            }}
        >
            <style>
                {`
                    div::-webkit-scrollbar {
                        display: none; /* For Chrome, Safari, and Opera */
                    }
                `}
            </style>
            <div className="p-4">
                <h1 className="text-2xl text-white">My Profile</h1>
                <div className="p-4">
                    <h1 className='text-white font-bold text-4xl mt-5'>Overview</h1>
                <div className="overflow-hidden rounded  mx-auto my-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-4 w-full max-w-4xl">

                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 ">
                    <h3 className="text-xl font-semibold text-white mb-2">My Businesses</h3>
                    <p className="text-gray-400">{user?.businessIds?.length}</p>
                    <div className="-ml-6" >

                    <InteractiveHoverButton className=' text-green-400' text='Add business' />
                    </div>
                </div>
                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 ">
                    <h3 className="text-xl font-semibold text-white mb-2">My Credit</h3>
                    <p className="text-gray-400">{user?.credit}</p>
                    <div className="-ml-6" >

                    <InteractiveHoverButton className=' text-green-400' text='Add Credit' />
                    </div>
                </div>
                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 ">
                    <h3 className="text-xl font-semibold text-white mb-2">Joined</h3>
                    <p className="text-gray-400">{new Date(user?.createdAt).toLocaleDateString()}</p>
                </div>

                </div>
                </div>
                </div>
                <div className="p-4">
                    <h1 className="text-2xl pt-2 text-white">My Business List</h1>
                    <table className="table-auto w-full mt-8 text-white">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Business Name</th>
                                <th className="px-4 py-2">Domain</th>
                                <th className="px-4 py-2">No of products</th>
                            </tr>
                        </thead>
                        <tbody className='gap-14'>
                            {businesss?.map((business) => (
                                <tr className="bg-white/5 backdrop-blur-sm rounded-xl mb-8">
                                <td className="border px-4 py-2 border-transparent rounded-l-xl">{business.name}</td>
                                <td className="border px-4 py-2 border-transparent ">{business.domain}</td>
                                <td className="border px-4 py-2 border-transparent rounded-r-xl">{business.productId.length}</td>
                            </tr>))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div className="bg-[#000000ee] flex md:w-[26vw] w-full h-[100vh] items-center justify-center overflow-auto">
            <LeftProfile />
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
}

export default Profile; // Ensure the component name matches export