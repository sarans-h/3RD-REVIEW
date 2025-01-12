"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import axios from "axios";
import { loadUser } from "../features/userSlice";

import { Toaster, toast } from "react-hot-toast";
import { addBusiness, clearberrors, clearBusiness } from "../features/businessSlice";

function AddBusiness({setActiveComponent}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {business,bLoading,berror}=useSelector((state)=>state.business);
    useEffect(() => {
        
        
        if(business.success){
            toast.success("Business added successfully");
        dispatch(clearBusiness())    
        dispatch(loadUser());

        }
        if (berror) {
            toast.error(berror);
            dispatch(clearberrors());
        }
    }, [business,bLoading,berror]);
    const [formData, setFormData] = useState({
        name: "",
        domain: "",
        description: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: formData.name,
            domain: formData.domain,
            description: formData.description,
        };
         dispatch(addBusiness(data));    
        setFormData({
            name: "",
            domain: "",
            description: "",
        }); 
        
    };

    return (
        <div className="bg-black h-[100vh] w-[96vw]">
            <div className="p-4">
                <h1 className="text-2xl text-white">Add Business</h1>
            </div>
            <div className="flex flex-row">
                <div className="container w-[50vw]  p-16 bg-black text-white">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="name">Business Name</Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                className="bg-white/5"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="domain">Domain</Label>
                            <Input
                                id="domain"
                                name="domain"
                                type="text"
                                className="bg-white/5"
                                value={formData.domain}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="description">Description</Label>
                            <Input
                                type="text"
                                id="description"
                                name="description"
                                className="bg-white/5"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="flex items-center w-full justify-center">

                        <button type="submit" className="bg-white text-black p-2 w-full rounded">Add Business</button>
                        </div>
                    </form>
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
                <div className="h-[80vh] bg-black w-[40vw] p-4 text-white rounded-lg max-w-sm mx-auto">
                    <h2 className="text-xl">{formData.name||"Your Business"}</h2>
                    <div className="mt-4">
                        {console.log(formData.domain)}
                        {formData.domain && (
                            <iframe
                                src={`https://${formData.domain}`}
                                title="Website Preview"
                                className="w-full h-[30vh] border border-white/10 rounded-lg"
                            />
                        )}
                        <div className="mt-4">
                            <div className="mb-2">
                                <label className="block text-sm font-medium">Name:</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    readOnly
                                    className="w-full px-3 py-2 border border-transparent rounded-md bg-white/5 text-white"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-sm font-medium">domain:</label>
                                <input
                                    type="text"
                                    value={formData.domain}
                                    readOnly
                                    className="w-full px-3 py-2 border border-transparent rounded-md bg-white/5 text-white"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-sm font-medium">Description:</label>
                                <input
                                    type="text"
                                    value={formData.description}
                                    readOnly
                                    className="w-full px-3 py-2 border border-transparent rounded-md bg-white/5 text-white"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AddBusiness;
