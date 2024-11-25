import React from 'react'
import './Styles/styles.css';
import Image from 'next/image';
const Offer = () => {
  return (

<div className="h-auto relative bg-white m-8 mt-8 lg:h-[450px]">
  <div className="flex flex-col gap-6 items-start p-4 sm:p-6 lg:absolute lg:left-[10%] lg:top-[133px] lg:h-[184px]">
    <div className="flex flex-col gap-2">
      <div className="text-[#6f42c1] text-xl sm:text-2xl font-normal font-['Pacifico']">Big Deal</div>
      <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.2]">
        <span className="text-[#6f42c1] font-['Manrope']">30%</span>
        <span className="text-[#1d1d1d]"> Off for New Customers</span>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <div className="w-[120px] h-10 p-2 bg-[#8f71e1] rounded-[28px] flex justify-center items-center sm:w-[149px] sm:h-12">
        <div className="text-white text-[16px] sm:text-[19px] font-normal font-['Manrope']">Shop Now</div>
      </div>
      <div className="w-10 h-10 p-2 bg-[#8f71e1] rounded-full flex justify-center items-center sm:w-12 sm:h-12">
        <img 
          className="w-5 h-5 sm:w-6 sm:h-6" 
          src="./Image/arrow-up-right-01.svg" 
          alt="icon" 
        />
      </div>
    </div>
  </div>
  <Image 
    className="w-full h-auto mt-6 lg:mt-0 lg:w-[427px] lg:h-[495px] lg:left-[765px] lg:top-[12px] lg:absolute" 
    src="/Image/image 2.png" 
    alt="Promotion" 
    width={427} 
    height={495} 
/>

</div>


  )
}

export default Offer

