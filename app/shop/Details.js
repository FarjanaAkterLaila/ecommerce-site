import React from 'react'

const Details = () => {
  return (
    <div >
       <div className="flex justify-between items-center p-8 ml-8">
            <div className='text-left'>

                <h1 className="text-[#1d1d1d] text-[28px] font-bold font-['Manrope'] leading-9 mt-1">
                    Related Products
                </h1>
            </div>

            <div className="flex gap-1">
                <div className="w-8 h-8 p-1 origin-top-left rounded-2xl shadow border border-[#7e53d4] justify-center items-center inline-flex">
                    <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                        <img
                            src="./Image/arrow-right-02.png"
                            alt="Product Image 1"
                            className="w-[50px] h-[50px] object-cover rounded-full"
                        />
                    </div>
                </div>
                <div className="w-8 h-8 p-1 origin-top-left rounded-2xl shadow border border-[#7e53d4] justify-center items-center inline-flex">
                    <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                        <img
                            src="./Image/arrow-right-02 (1).png"
                            alt="Product Image 1"
                            className="w-[50px] h-[50px] object-cover rounded-full"
                        />
                    </div>
                </div>


            </div>

        </div>
    </div>
  )
}

export default Details
