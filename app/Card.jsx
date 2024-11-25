"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const Card = () => {
    return (
        <div className="flex flex-wrap gap-6 justify-center items-center pl-8">
            {/* Card 1 */}
            <div className="w-[302px] h-[400px] p-2 bg-white rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
                <div className="h-[287px] px-[17px] bg-[#f6f5fd] rounded-lg flex-col justify-start items-center flex">
                <Image 
    src="/Image/Pexels Photo by Muneeb Malhotra.png" 
    alt="Pexels Photo by Muneeb Malhotra" 
    width={252} 
    height={379} 
    className="w-[252px] h-[379px] origin-top-left" 
/>

                </div>
                <div className="self-stretch h-[25px] px-2 flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-[#1d1d1d] text-base font-normal font-['Manrope'] leading-tight">Indian Sharee</div>
                        <div className="text-[#1d1d1d] text-[19px] font-semibold font-['Manrope'] leading-normal">BDT 2,300</div>
                    </div>
                </div>
                <div className="self-stretch h-10 px-6 py-2 rounded-lg border border-[#7e53d4] justify-center items-center gap-4 inline-flex">
                    <div className="text-[#7e53d4] text-base font-semibold font-['Manrope'] leading-tight">Add to Cart</div>
                </div>
            </div>
            {/* Card 2 */}
            <div className="w-[302px] h-[400px] p-2 bg-white rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
                <div className="h-[287px] bg-[#f6f5fd] rounded-lg flex-col justify-end items-center flex">
                <Image 
    src="/Image/Pexels Photo by Bruno Palace.jpg" 
    alt="Pexels Photo by Bruno Palace" 
    width={286} 
    height={320} 
    className="w-[286px] h-80" 
/>

                </div>
                <div className="self-stretch h-[25px] px-2 flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-[#1d1d1d] text-base font-normal font-['Manrope'] leading-tight">Hoodie</div>
                        <div className="text-[#1d1d1d] text-[19px] font-semibold font-['Manrope'] leading-normal">BDT 2,300</div>
                    </div>
                </div>
                <div className="self-stretch h-10 px-6 py-2 rounded-lg border border-[#7e53d4] justify-center items-center gap-4 inline-flex">
                    <div className="text-[#7e53d4] text-base font-semibold font-['Manrope'] leading-tight">Add to Cart</div>
                </div>
            </div>

            {/* Card 3 */}
            <div className="w-[302px] h-[400px] p-2 bg-white rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
                <div className="h-[287px] px-[42px] bg-[#f6f5fd] rounded-lg flex-col justify-center items-center flex">
                <Image 
    src="/Image/Pexels Photo by Bruno Palace.png" 
    alt="Pexels Photo by Bruno Palace" 
    width={202} 
    height={303} 
    className="w-[202px] h-[303px] origin-top-left" 
/>

                </div>
                <div className="self-stretch h-[25px] px-2 flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-[#1d1d1d] text-base font-normal font-['Manrope'] leading-tight">Plazu</div>
                        <div className="text-[#1d1d1d] text-[19px] font-semibold font-['Manrope'] leading-normal">BDT 2,300</div>
                    </div>
                </div>
                <div className="self-stretch h-10 px-6 py-2 rounded-lg border border-[#7e53d4] justify-center items-center gap-4 inline-flex">
                    <div className="text-[#7e53d4] text-base font-semibold font-['Manrope'] leading-tight">Add to Cart</div>
                </div>
            </div>

            {/* Card 4 */}
            <div className="w-[302px] h-[400px] p-2 bg-white rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
                <div className="h-[287px] px-[42px] bg-[#f6f5fd] rounded-lg flex-col justify-center items-center flex">
                <Image 
    src="/Image/Pexels Photo by Ron Lach.png" 
    alt="Pexels Photo by Ron Lach" 
    width={202} 
    height={303} 
    className="w-[202px] h-[303px] origin-top-left" 
/>

                </div>
                <div className="self-stretch h-[25px] px-2 flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-[#1d1d1d] text-base font-normal font-['Manrope'] leading-tight">Jacket</div>
                        <div className="text-[#1d1d1d] text-[19px] font-semibold font-['Manrope'] leading-normal">BDT 2,300</div>
                    </div>
                </div>
                <div className="self-stretch h-10 px-6 py-2 rounded-lg border border-[#7e53d4] justify-center items-center gap-4 inline-flex">
                    <div className="text-[#7e53d4] text-base font-semibold font-['Manrope'] leading-tight">Add to Cart</div>
                </div>
            </div>

            {/* See More Button */}
            <div className="w-full flex justify-center my-6">
                <button className="bg-[#7e53d4] text-white py-3 px-8 rounded-md hover:bg-[#5a38b8]">
                    See More
                </button>
            </div>
        </div>
    );
}

export default Card;
