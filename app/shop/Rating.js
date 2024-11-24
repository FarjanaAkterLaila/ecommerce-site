// components/ReviewRating.js

import React from 'react';

const ReviewRating = () => {
  return (
    // <div className="flex flex-col md:flex-row items-start px-10">
     
    //   <div className="w-full md:w-1/2 pr-6">
    //     <div className="flex items-center justify-between mb-4">
    //       <h2 className="text-neutral-500 text-[19px] font-semibold">Details</h2>
    //       <h2 className="text-[#7e53d4] text-[19px]  font-semibold">Review & Rating</h2>
    //       <h2 className="text-neutral-500 text-[19px] font-semibold">Descussion</h2>
         
    //     </div>
        
    //     <button className="flex items-center border border-[#7e53d4] text-[#1d1d1d] px-3 py-1 rounded-lg mb-4">
    //         <span>Newest</span>
    //         <svg
    //           className="w-4 h-4 ml-2"
    //           fill="none"
    //           stroke="currentColor"
    //           viewBox="0 0 24 24"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={2}
    //             d="M19 9l-7 7-7-7"
    //           />
    //         </svg>
    //       </button>
    //     {/* Single Review Item */}
    //     <div className="mb-6">
    //       <div className="flex items-center mb-2">
    //         <img
    //           className="w-10 h-10 rounded-full"
    //           src="https://via.placeholder.com/40"
    //           alt="Reviewer"
    //         />
    //         <div className="ml-4">
    //           <p className="font-medium">Cameron Williamson</p>
    //           <p className="text-sm text-gray-500">3 days ago</p>
    //         </div>
    //       </div>
    //       {/* Rating */}
    //       <div className="flex items-center mb-2">
    //         {[...Array(4)].map((_, index) => (
    //           <svg
    //             key={index}
    //             className="w-5 h-5 text-yellow-500"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //           >
    //             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.951a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.442a1 1 0 00-.364 1.118l1.286 3.95c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.358 2.443c-.785.57-1.838-.196-1.54-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.667 9.38c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.951z" />
    //           </svg>
    //         ))}
    //         <svg
    //           className="w-5 h-5 text-gray-300"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //         >
    //           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.951a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.442a1 1 0 00-.364 1.118l1.286 3.95c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.358 2.443c-.785.57-1.838-.196-1.54-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.667 9.38c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.951z" />
    //         </svg>
    //       </div>
    //       <p className="text-gray-700">Very Nice!!</p>
    //       <div className="flex items-center mt-2 text-gray-500">
    //         <svg
    //           className="w-5 h-5 mr-1"
    //           fill="none"
    //           stroke="currentColor"
    //           viewBox="0 0 24 24"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={2}
    //             d="M14 9l6 6m0 0l-6 6m6-6H3"
    //           />
    //         </svg>
    //         <span>10</span>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Right Side - Ratings Summary */}
    //   <div className="w-full md:w-1/2 mt-6 md:mt-0 sm:pt-12 ">
    //     <h2 className="text-xl font-semibold mb-4">Product Review <span className="text-purple-500">(121 reviews)</span></h2>
    //     <div className="flex items-center mb-2">
    //       <div className="flex items-center">
    //         <svg
    //           className="w-6 h-6 text-yellow-500"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //         >
    //           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.951a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.442a1 1 0 00-.364 1.118l1.286 3.95c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.358 2.443c-.785.57-1.838-.196-1.54-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.667 9.38c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.951z" />
    //         </svg>
    //         <p className="text-gray-700 font-semibold ml-2 text-lg">(4.0)</p>
    //       </div>
    //     </div>
    //     {[5, 4, 3, 2, 1].map((rating) => (
    //       <div key={rating} className="flex items-center mb-2">
    //         <p className="w-4 font-medium">{rating}</p>
    //         <div className="w-64 h-3 mx-2 bg-gray-200 rounded">
    //           <div
    //             className={`h-3 ${rating === 5 ? 'bg-yellow-500' : rating === 4 ? 'bg-yellow-400' : rating === 3 ? 'bg-yellow-300' : rating === 2 ? 'bg-yellow-200' : 'bg-yellow-100'}`}
    //             style={{ width: `${rating === 5 ? '50%' : rating === 4 ? '5%' : rating === 3 ? '10%' : rating === 2 ? '30%' : '2%'}` }}
    //           ></div>
    //         </div>
    //         <span className="text-gray-500">{rating === 5 ? 50 : rating === 4 ? 5 : rating === 3 ? 10 : rating === 2 ? 30 : 2}</span>
    //       </div>
    //     ))}
    //   </div>
    // </div>
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
                <img
                    className="w-10 h-10 rounded-full"
                    src="./Image/Frame 97.png"
                    alt="Reviewer"
                />
                <div className="ml-4">
                    <p className="font-medium">Cameron Williamson
                    <span className="text-sm text-gray-500 ml-2">3 days </span></p>
                    <div className="flex gap-1">
                            <img className="w-4 h-4" src="./Image/star (1).png" alt="star" />
                            <img className="w-4 h-4" src="./Image/star (1).png" alt="star" />
                            <img className="w-4 h-4" src="./Image/star (1).png" alt="star" />
                            <img className="w-4 h-4" src="./Image/star (1).png" alt="star" />
                            <img className="w-4 h-4" src="./Image/star (2).png" alt="star" />
                            
                            
                        </div>
                </div>
            </div>
            {/* Rating */}
            
            <p className="text-[#1d1d1d] text-base font-bold font-['Manrope'] leading-tight">Very Nice!!</p>
            <div className="flex items-center mt-2 text-gray-500">
            <img className="w-4 h-4" src="./Image/thumbs-up.png" alt="star" />
                <span>10</span>
            </div>
        </div>
        <hr></hr>
        <div className="mb-6 mt-4">
            <div className="flex items-center mb-2">
                <img
                    className="w-10 h-10 rounded-full"
                    src="./Image/Frame 97.png"
                    alt="Reviewer"
                />
                <div className="ml-4">
                    <p className="font-medium">Cameron Williamson
                    <span className="text-sm text-gray-500 ml-2">3 days</span></p>
                    <div className="flex gap-1">
                            <img className="w-4 h-4" src="./Image/star (1).png" alt="star" />
                            <img className="w-4 h-4" src="./Image/star (1).png" alt="star" />
                            <img className="w-4 h-4" src="./Image/star (1).png" alt="star" />
                            <img className="w-4 h-4" src="./Image/star (1).png" alt="star" />
                            <img className="w-4 h-4" src="./Image/star (2).png" alt="star" />
                            
                            
                        </div>
                </div>
            </div>
            {/* Rating */}
            
            <p className="text-[#1d1d1d] text-base font-bold font-['Manrope'] leading-tight">Very Nice!!</p>
            <div className="flex items-center mt-2 text-gray-500">
            <img className="w-4 h-4" src="./Image/thumbs-up.png" alt="star" />
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
                            <img className="w-10 h-10" src="./Image/star (1).png" alt="star" />
                            <img className="w-10 h-10" src="./Image/star (1).png" alt="star" />
                            <img className="w-10 h-10" src="./Image/star (1).png" alt="star" />
                            <img className="w-10 h-10" src="./Image/star (1).png" alt="star" />
                            <img className="w-10 h-10 " src="./Image/star (2).png" alt="star" />
                            <span className="text-[#1d1d1d] text-[19px] font-semibold font-['Manrope'] leading-normal ml-14 pt-2">(4.0)</span>
                            
                        </div>
               
            
        </div>
        <hr/>
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
