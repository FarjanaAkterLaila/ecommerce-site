// components/ReviewRating.js

import Image from 'next/image';
import React from 'react';

const ReviewRating = () => {
    return (

        <div className="flex flex-col md:flex-row px-10 justify-between">
            <div className='w-full md:w-1/2 pr-6' >
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-neutral-500 text-[19px] font-semibold">Details</h2>
                    <h2 className="text-[#7e53d4] text-[19px]  font-semibold">Review & Rating</h2>
                    <h2 className="text-neutral-500 text-[19px] font-semibold">Discussion</h2>

                </div>
                {/* Left side - Button */}
                <div className=" pr-6 mt-8">
                    <button className="flex items-center justify-between border border-[#7e53d4] text-[#1d1d1d] px-3 py-1 rounded-lg mb-4">
                        <span>Newest</span>
                        <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>

                    {/* Single Review Item */}
                    <div className="mb-6">
                        <div className="flex items-center mb-2">
                            <Image
                                src="/Image/Frame 97.png"
                                alt="Reviewer"
                                className="w-10 h-10 rounded-full"
                                width={40}
                                height={40}
                            />

                            <div className="ml-4">
                                <p className="font-medium">Cameron Williamson
                                    <span className="text-sm text-gray-500 ml-2">3 days </span></p>
                                <div className="flex gap-1">
                                    <Image className="w-4 h-4" src="/Image/star (1).png" alt="star" width={16} height={16} />
                                    <Image className="w-4 h-4" src="/Image/star (1).png" alt="star" width={16} height={16} />
                                    <Image className="w-4 h-4" src="/Image/star (1).png" alt="star" width={16} height={16} />
                                    <Image className="w-4 h-4" src="/Image/star (1).png" alt="star" width={16} height={16} />
                                    <Image className="w-4 h-4" src="/Image/star (2).png" alt="star" width={16} height={16} />



                                </div>
                            </div>
                        </div>
                        {/* Rating */}

                        <p className="text-[#1d1d1d] text-base font-bold font-['Manrope'] leading-tight">Very Nice!!</p>
                        <div className="flex items-center mt-2 text-gray-500">
                            <Image className="w-4 h-4" src="/Image/thumbs-up.png" alt="thumbs-up" width={16} height={16} />

                            <span>10</span>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="mb-6 mt-4">
                        <div className="flex items-center mb-2">
                            <Image
                                className="w-10 h-10 rounded-full"
                                src="/Image/Frame 97.png"
                                alt="Reviewer"
                                width={40}
                                height={40}
                            />

                            <div className="ml-4">
                                <p className="font-medium">Cameron Williamson
                                    <span className="text-sm text-gray-500 ml-2">3 days</span></p>
                                <div className="flex gap-1">
                                    <Image className="w-4 h-4" src="/Image/star (1).png" alt="star" width={16} height={16} />
                                    <Image className="w-4 h-4" src="/Image/star (1).png" alt="star" width={16} height={16} />
                                    <Image className="w-4 h-4" src="/Image/star (1).png" alt="star" width={16} height={16} />
                                    <Image className="w-4 h-4" src="/Image/star (1).png" alt="star" width={16} height={16} />
                                    <Image className="w-4 h-4" src="/Image/star (2).png" alt="star" width={16} height={16} />


                                </div>
                            </div>
                        </div>
                        {/* Rating */}

                        <p className="text-[#1d1d1d] text-base font-bold font-['Manrope'] leading-tight">Very Nice!!</p>
                        <div className="flex items-center mt-2 text-gray-500">
                            <Image className="w-4 h-4" src="/Image/thumbs-up.png" alt="thumbs-up" width={16} height={16} />

                            <span>10</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Right Side - Ratings Summary */}
            <div className="mt-16">
                <h2 className="text-xl font-semibold mb-4">Product Review <span className="text-purple-500">(121 reviews)</span></h2>
                <div className="flex items-center mb-2">

                    <div className="flex gap-1">
                        <Image className="w-10 h-10" src="/Image/star (1).png" alt="star" width={40} height={40} />
                        <Image className="w-10 h-10" src="/Image/star (1).png" alt="star" width={40} height={40} />
                        <Image className="w-10 h-10" src="/Image/star (1).png" alt="star" width={40} height={40} />
                        <Image className="w-10 h-10" src="/Image/star (1).png" alt="star" width={40} height={40} />
                        <Image className="w-10 h-10" src="/Image/star (2).png" alt="star" width={40} height={40} />

                        <span className="text-[#1d1d1d] text-[19px] font-semibold font-['Manrope'] leading-normal ml-14 pt-2">(4.0)</span>

                    </div>


                </div>
                <hr />
                {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center mb-2 mt-4">
                        <p className="w-4 font-medium">{rating}</p>
                        <div className="w-64 h-3 mx-2 bg-gray-200 rounded">
                            <div
                                className={`h-3 ${rating === 5 ? 'bg-yellow-500' : rating === 4 ? 'bg-yellow-400' : rating === 3 ? 'bg-yellow-300' : rating === 2 ? 'bg-yellow-200' : 'bg-yellow-100'}`}
                                style={{ width: `${rating === 5 ? '50%' : rating === 4 ? '5%' : rating === 3 ? '10%' : rating === 2 ? '30%' : '2%'}` }}
                            ></div>
                        </div>
                        <span className="text-gray-500">{rating === 5 ? 50 : rating === 4 ? 5 : rating === 3 ? 10 : rating === 2 ? 30 : 2}</span>
                    </div>
                ))}
            </div>
        </div>



    );
};

export default ReviewRating;
