import React, { useEffect, useState } from "react";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "./ui/animated-modal";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, clearperrors, getProducts } from "../features/productSlice";
import { Toaster,toast } from "react-hot-toast";

export function AddProductModal(businessid) {
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [productUrl, setProductUrl] = useState("");
    const dispatch=useDispatch();
    const{pLoading,perror,product}=useSelector(state=>state.product);
    useEffect(()=>{
        if(product.success){
            toast.success("Product added successfully");
        }
        if(perror){
            toast.error(perror);
            dispatch(clearperrors());
        }
    },[perror,product,pLoading]);
    const handleAddProduct = () => {
        
        dispatch(addProduct({productName,description,productUrl},businessid));
        dispatch(getProducts(businessid.businessid));
        setProductName("");
        setDescription("");
        setProductUrl("");
        
    };

    return (
        <Modal>
            <ModalTrigger className="text-white text-lg underline mt-4">
                Add Product
            </ModalTrigger>
            <ModalBody className="bg-black border border-white/5">
                <ModalContent>
                    <h4 className="text-lg md:text-2xl text-white font-bold text-center mb-8">
                        Add New Product
                    </h4>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-white">
                                Product Name
                            </label>
                            <input
                                type="text"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                className="mt-1 block w-full rounded-md bg-white/5 border-white/5 text-white focus:border-white/20 focus:ring-white/20"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">
                                Description
                            </label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="mt-1 block w-full rounded-md bg-white/5 border-white/5 text-white focus:border-white/20 focus:ring-white/20"
                                rows={3}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">
                                Product URL
                            </label>
                            <input
                                type="url"
                                value={productUrl}
                                onChange={(e) => setProductUrl(e.target.value)}
                                className="mt-1 block w-full rounded-md bg-white/5 border-white/5 text-white focus:border-white/20 focus:ring-white/20"
                            />
                        </div>
                    </form>
                </ModalContent>
                <ModalFooter className="gap-4 bg-black">
                    <button className="px-4 py-2 bg-white text-black border border-white/5 rounded-md hover:bg-white/90">
                        Cancel
                    </button>
                    <button
                        onClick={handleAddProduct}
                        className="px-4 py-2 bg-white text-black rounded-md hover:bg-white/90"
                    >
                        Add Product
                    </button>
                </ModalFooter>
            </ModalBody>
            
                   <Toaster  toastOptions={{
                      className: '',
                      style: {
                        height: '40px',
                        
                        background: '#151719',
                        color: 'white',
                        border: '1px solid white',
                      },
                    }}/>
        </Modal>
    );
}
