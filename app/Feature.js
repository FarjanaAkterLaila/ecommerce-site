import Image from 'next/image';
import React from 'react';

const Feature = () => {
    return (
        <div className="flex justify-between items-center p-8 ml-8">
            <div className='text-left'>

                <h1 className="text-[#7e53d4] text-[19px] font-normal font-['Manrope'] leading-normal">
                    FEATURED PRODUCT
                </h1>


                <h1 className="text-[#1d1d1d] text-[28px] font-bold font-['Manrope'] leading-9 mt-1">
                    New Arrivals
                </h1>
            </div>

            <div className="flex gap-1">
                <div className="w-8 h-8 p-1 origin-top-left rounded-2xl shadow border border-[#7e53d4] justify-center items-center inline-flex">
                    <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                    <Image 
    src="/Image/arrow-right-02.png" 
    alt="Product Image 1" 
    width={50} 
    height={50} 
    layout="responsive" 
    className="object-cover rounded-full" 
/>
                    </div>
                </div>
                <div className="w-8 h-8 p-1 origin-top-left rounded-2xl shadow border border-[#7e53d4] justify-center items-center inline-flex">
                    <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                    <Image 
    src="/Image/arrow-right-02 (1).png" 
    alt="Product Image 1" 
    width={50} 
    height={50} 
    className="w-[50px] h-[50px] object-cover rounded-full" 
/>

                    </div>
                </div>


            </div>

        </div>
    );
}

export default Feature;
