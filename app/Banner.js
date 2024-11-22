
const Banner = () => {
    return (
        <section
            className="relative bg-cover bg-center h-[500px] flex justify-center items-center  shrink-0"
            style={{
                background: "linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url('Image/9d972fb25b5ad899dca00d131d9f310c.png') lightgray 0px -59.879px / 100% 191.952% no-repeat",
            }}
        >

            <div className="px-[35px] py-[167px] ">
                <div className="w-[635px] h-[160px] flex-col justify-start  items-center gap-6 inline-flex">
                    <div className="self-stretch h-[95px] flex-col justify-start items-center gap-2 flex">
                        <div className="self-stretch text-white text-5xl font-bold font-['Manrope'] leading-[62.40px]">Elevate Your Everyday Style</div>
                        <div className="self-stretch text-center text-violet-50 text-[19px] font-normal font-['Manrope'] leading-normal">Discover the Latest Trends in Sustainable Fashion</div>
                    </div>
                    <div className="justify-start items-center inline-flex">
                        <div className="w-[149px] h-12 p-2 bg-[#8f71e1] rounded-[28px] justify-center items-center gap-2 flex">
                            <div className="text-white text-[19px] font-normal font-['Manrope'] leading-normal">Shop Now</div>
                        </div>
                        <div className="w-12 h-12 p-3 bg-[#8f71e1] rounded-3xl justify-center items-center flex">
                            <div className="w-6 h-6 relative flex-col justify-start items-start flex" >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="arrow-up-right-01">
                                        <path id="Vector" d="M17 7L6 18" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                        <path id="Vector_2" d="M11 6.13153C11 6.13153 16.6335 5.65664 17.4885 6.51155C18.3434 7.36647 17.8684 13 17.8684 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            <div className="absolute bottom-0 w-full h-[66.36px] bg-[#6340c2]/90 shadow justify-center items-start gap-[64.72px] inline-flex ml-0 py-[12.94px]">
    <div className="justify-start items-start gap-[12.94px] flex">
       
        <div className="w-8 h-8 relative">
            <img 
                src="./Image/truck-delivery.png"
                alt="Free Shipping Icon" 
                className="w-full h-full object-contain"
            />
        </div>
        <div className="flex-col justify-start items-start gap-[6.47px] inline-flex">
            <div className="text-white text-base font-semibold font-['Manrope'] leading-tight">FREE SHIPPING</div>
            <div className="text-white text-[10.52px] font-normal font-['Manrope'] leading-[13.67px]">BUY BDT 3000+ & GET FREE DELIVERY</div>
        </div>
    </div>
    
    <div className="justify-start items-start gap-[12.94px] flex">
        
        <div className="w-[25.89px] h-[25.89px] relative">
            <img 
                src="./Image/exchange-01.png" 
                alt="Exchange Icon" 
                className="w-full h-full object-contain"
            />
        </div>
        <div className="flex-col justify-start items-start gap-[6.47px] inline-flex">
            <div className="text-white text-base font-semibold font-['Manrope'] leading-tight">7 DAYS EXCHANGE</div>
            <div className="text-white text-[10.52px] font-normal font-['Manrope'] leading-[13.67px]">EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS</div>
        </div>
    </div>
    
    <div className="justify-start items-start gap-[12.94px] flex">
        
        <div className="w-[25.89px] h-[25.89px] relative">
            <img 
                src="./Image/payment-02.png" 
                alt="Payment Secure Icon" 
                className="w-full h-full object-contain"
            />
        </div>
        <div className="flex-col justify-start items-start gap-[6.47px] inline-flex">
            <div className="text-white text-base font-semibold font-['Manrope'] leading-tight">100% PAYMENT SECURE</div>
            
        </div>
    </div>
</div>

        </section>
    );
};

export default Banner;
