import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { productDetails } from '../features/productSlice';
import { Toaster, toast } from "react-hot-toast";
import { Copy } from 'lucide-react'
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

    const code = `&lt;div className=&quot;w-[32vw]&quot;&gt;<br>
        &nbsp;&nbsp;&lt;iframe<br>
        &nbsp;&nbsp;&nbsp;&nbsp;src=&quot;https://portfolio-62hd.onrender.com/&quot;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;title=&quot;Website Preview&quot;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;className=&apos;w-[32vw] h-[32vw] border border-pink-500 rounded-md&apos;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;style=&#123;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; border: &apos;none&apos;, overflow: &apos;hidden&apos; &#125;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;sandbox=&quot;allow-scripts allow-same-origin&quot;<br>
        &nbsp;&nbsp;&gt;<br>
        &nbsp;&nbsp;&lt;/iframe&gt;<br>
        &lt;/div&gt;<br>`;

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
                            <div className="h-[50vh] p-10 bg-black mb-16">
                                <h1 className="text-2xl font-bold p-8">Code</h1>
                                <CodeComparison
                                    beforeCode={code}
                                    language="typescript"
                                    filename="embed.html"
                                    lightTheme="github-light"
                                    darkTheme="github-dark"
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
