
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const ProductPage = () => {
    const [images, setImages] = useState({
        img1: "/Image/image 9.png",
        img2: "/Image/image 10.png",
        img3: "/Image/image 11.png",
        img4: "/Image/image 12.png"
    });

    const [activeImg, setActiveImage] = useState(images.img1);
    const [amount, setAmount] = useState(1);

    return (
        <div className='px-6'>
            <div className='py-10 pb-8'><span className="text-[#1d1d1d] text-base font-semibold font-['Manrope'] leading-tight">Feature Product /</span><span className="text-[#7e53d4] text-base font-semibold font-['Manrope'] leading-tight"> New Arrival</span></div>

            <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center mb-10'>
                <div className='rounded-2xl flex flex-col gap-4 lg:w-2/4'>
                    <Image
                        src={activeImg}
                        alt="Product Image"
                        width={580}
                        height={507}
                        className='w-[580px] h-[507px] aspect-square object-cover rounded-xl bg-[#f6f5fd]'
                    />
                    <div className='flex flex-row justify-between h-24 mb-4'>
                        <Image
                            src={images.img1}
                            alt="Thumbnail 1"
                            width={96} // width set for the 24 units (24 * 4 = 96)
                            height={96} // height set for the 24 units (24 * 4 = 96)
                            className='w-24 h-24 rounded-md cursor-pointer bg-[#f6f5fd]'
                            onClick={() => setActiveImage(images.img1)}
                        />
                        <Image
                            src={images.img2}
                            alt="Thumbnail 2"
                            width={96}
                            height={96}
                            className='w-24 h-24 rounded-md cursor-pointer bg-[#f6f5fd]'
                            onClick={() => setActiveImage(images.img2)}
                        />
                        <Image
                            src={images.img3}
                            alt="Thumbnail 3"
                            width={96}
                            height={96}
                            className='w-24 h-24 rounded-md cursor-pointer bg-[#f6f5fd]'
                            onClick={() => setActiveImage(images.img3)}
                        />
                        <Image
                            src={images.img4}
                            alt="Thumbnail 4"
                            width={96}
                            height={96}
                            className='w-24 h-24 rounded-md cursor-pointer bg-[#f6f5fd]'
                            onClick={() => setActiveImage(images.img4)}
                        />
                    </div>
                </div>

                <div className='flex flex-col mt-0 gap-4 lg:w-2/4'>

                    <div className='flex items-center gap-4'>
                        <button className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>New Arrival</button>
                    </div>
                    <h1 className="text-[#1d1d1d] text-[33px] font-semibold font-['Manrope'] leading-[42.90px]">White Hoodie</h1>

                    <div className="flex gap-1">
                        <Image className="w-4 h-4" src="/Image/star (1).png" alt="star" width={16} height={16} />
                        <Image className="w-4 h-4" src="/Image/star (1).png" alt="star" width={16} height={16} />
                        <Image className="w-4 h-4" src="/Image/star (1).png" alt="star" width={16} height={16} />
                        <Image className="w-4 h-4" src="/Image/star (1).png" alt="star" width={16} height={16} />
                        <Image className="w-4 h-4" src="/Image/star.png" alt="star" width={16} height={16} />
                        <span className="text-[#1d1d1d] text-base font-semibold font-['Manrope'] leading-tight">(4.0)</span>
                        <span className="ml-4 text-[#7e53d4] text-base font-semibold font-['Manrope'] leading-tight">121 reviews</span>
                    </div>


                    <h6 className='text-2xl font-semibold'>BDT 2500

                    </h6>

                    <hr />

                    <div className='flex gap-4 justify-between'>
                        <div>
                            <h6 className='text-[#1d1d1d] text-[19px] font-semibold pb-4'>Available Size</h6>
                            <div className='flex gap-2'>
                                <span className='bg-gray-100 px-4 py-2 rounded-md cursor-pointer'>S</span>
                                <span className='bg-gray-100 px-4 py-2 rounded-md cursor-pointer'>M</span>
                                <span className='bg-gray-100 px-4 py-2 rounded-md cursor-pointer'>L</span>
                                <span className='bg-gray-100 px-4 py-2 rounded-md cursor-pointer'>XL</span>
                            </div>
                        </div>

                        <div>
                            <h6 className='text-[#1d1d1d] text-[19px] font-semibold pb-4'>Available Color</h6>
                            <div className='flex gap-2'>
                                <span className='w-6 h-6 rounded-full bg-white border-2 cursor-pointer'></span><span className="text-[#1d1d1d] text-xs">off white</span>
                                <span className='w-6 h-6 rounded-full bg-black border-2 cursor-pointer'></span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='flex flex-row items-center gap-12'>
                        <div className='flex flex-row items-center border rounded-3xl bg-[#ece9fe]'>
                            <button className=' py-2 px-5  text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                            <span className='py-4 px-6 '>{amount}</span>
                            <button className=' py-2 px-4 text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                        </div>

                    </div>
                    <div className='flex flex-col sm:flex-row items-center gap-4'>
                        <button className='w-full bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Buy Now</button>

                        <button className=' w-full text-[#7e53d4] font-semibold py-3 px-16 rounded-xl h-full border border-[#7e53d4]'>Add to Cart</button>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default ProductPage;
