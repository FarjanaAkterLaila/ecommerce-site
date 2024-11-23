import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-10">
            <div className="container mx-auto px-4">
                {/* Footer content with flex layout */}
                <div className="flex flex-col lg:flex-row justify-between items-center">

                    {/* Left Section: Logo and Description */}
                    <div className="mb-6 lg:mb-0 lg:w-1/2">
                        <div className="flex items-center">
                            <img src="./Image/wf 1 (1).png" alt="We5ive Logo" className=" h-6 w-10 mr-2" />
                            <span className="logo-text text-[29px] leading-[40px] font-bold font-nunito">
                                We<span className="text-[#7436F1] font-nunito text-[29.388px] font-bold leading-normal">5</span>ive
                            </span>
                        </div>
                        <p className="text-[#f4f8ff] lg:w-[411px]">
                            Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam unde quae qui quasi mollitia tenetur. Dicta explicabo est consequatur maxime quos fugit velit assumenda est.
                        </p>
                    </div>

                    {/* Right Section: Newsletter Subscription */}
                    <div className=" flex justify-end mb-6 lg:mb-0 mr-[80px]">
                        <div className="w-full lg:w-2/3">
                        <h2 className="text-[#f4f8ff] text-[23px] font-bold font-['Manrope'] ">Sign Up For Our Newsletter!</h2>
                        <p className="mt-2 text-[#f4f8ff] text-base font-normal font-['Manrope'] ">Get notified about updates and be the first to get early access to new Podcast episodes.</p>
                        
                            <div className="flex mt-4">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full p-2 rounded-l-md  bg-[#f4f8ff] text-[#1d1d1d] focus:outline-none"
                                />
                                <button className="bg-[#7e53d4] text-[#f4f8ff] px-4 py-2 rounded-r-md">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Links Section */}
                <div className="lg:flex justify-between sm:mt-16  text-left">
                    <div className="lg:w-1/4 mb-6 lg:mb-0">
                        <h3 className="font-semibold mb-4">Contact Us</h3>
                        <p className="text-gray-400">support@we5ive.com</p>
                    </div>
                    <div className="lg:w-1/4 mb-6 lg:mb-0">
                        {/* <h3 className="font-semibold mb-4">About Us</h3> */}
                        <a href="#" className="block text-gray-400 mb-2">About Us</a>
                        <a href="#" className="block text-gray-400 mb-2">Contact Us</a>
                        
                    </div>
                    <div className="lg:w-1/4 mb-6 lg:mb-0">
                        {/* <h3 className="font-semibold mb-4">About Us</h3> */}
                        <a href="#" className="block text-gray-400 mb-2">Privacy Policy</a>
                        <a href="#" className="block text-gray-400 mb-2">Terms & Condition</a>
                        
                    </div>
                    <div className="lg:w-1/4 mb-6 lg:mb-0">
                        <h3 className="font-semibold mb-4">Follow Us</h3>
                        <div className="flex justify-start space-x-4">
                            <a href="#" className="text-gray-400">
                                <img src="./Image/Facebook.png" alt="Facebook" />
                            </a>
                            <a href="#" className="text-gray-400">
                                <img src="./Image/Twitter.png" alt="Twitter" />
                            </a>
                            <a href="#" className="text-gray-400">
                                <img src="./Image/Linkedin.png" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Line */}
      
          
            </div>
            <div className="bg-[#7436F1] mt-10 pt-6 text-center">
  <p className="text-white pb-6">&copy; 2024 | We5ive</p>
</div>
        </footer>

    )
}

export default Footer
