
"use client";
import React, { useState } from 'react';
import './Styles/styles.css';
import { FaSearch } from 'react-icons/fa';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa6";
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    // State to control responsive visibility
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-[#F5F3FF] text-black py-4">
            <div className="container mx-auto flex justify-between items-center">

                <div className="flex items-center">
                   
                    <button 
                        className="text-2xl md:hidden mr-4 ml-6"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? (
                           
                            <FaTimes className="w-8 h-8" />
                        ) : (
                            
                            <Image 
    src="/Image/menu-02.png" 
    alt="Menu Icon" 
    width={32} 
    height={32} 
    className="w-8 h-8" 
/>

                        )}
                    </button>

                    {/* Logo */}
                    <div className="logo flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="29" viewBox="0 0 51 29" fill="none">
                            <g clipPath="url(#clip0_134_17)">
                                <path d="M31.2449 28.7856C24.7479 19.2641 18.3025 9.81965 11.7865 0.27124H38.2976C37.7901 1.05464 37.336 1.77429 36.863 2.4822C36.2867 3.34445 35.8773 4.52374 35.0568 4.96157C34.2346 5.40108 32.9961 5.11087 31.9399 5.11255C28.3035 5.11926 24.6671 5.1159 20.8363 5.1159C21.4159 5.99324 21.8856 6.77664 22.4446 7.49629C22.5839 7.67411 23.014 7.68921 23.3098 7.69089C26.2049 7.70431 29.0982 7.69927 31.9932 7.69927H33.2042C32.4835 8.82992 31.7489 9.7341 31.2914 10.7557C30.4416 12.6479 29.1033 13.4582 27.0099 13.0422C26.7914 12.9985 26.5558 13.0371 26.1533 13.0371C26.3683 13.3844 26.5111 13.6343 26.6728 13.8709C28.9692 17.2427 31.2604 20.6178 33.574 23.9779C33.8699 24.4056 33.8923 24.7126 33.5895 25.1538C32.7965 26.313 32.0637 27.5107 31.2449 28.789V28.7856Z" fill="#7436F1" />
                                <path d="M18.8856 28.784C12.5778 19.2474 6.33191 9.80463 0 0.231059C1.75972 0.231059 3.37839 0.207574 4.99534 0.2579C5.21896 0.26461 5.47871 0.598435 5.63868 0.834965C9.9322 7.13571 14.2154 13.4415 18.502 19.7473C18.6431 19.9536 18.7927 20.1549 19.0181 20.4703C19.8558 19.2675 20.6436 18.1335 21.502 16.9039C22.4257 18.1855 23.303 19.3799 24.1407 20.6011C24.2422 20.7487 24.2026 21.096 24.0908 21.2621C22.393 23.7448 20.6729 26.2107 18.8873 28.7857L18.8856 28.784Z" fill="#1D1D1D" />
                                <path d="M34.6148 23.5786C33.7478 22.2601 32.9359 21.0825 32.2048 19.8579C32.0775 19.6449 32.1979 19.1785 32.3631 18.9303C35.2873 14.5335 38.2374 10.1518 41.1823 5.76847C42.2953 4.11276 43.4271 2.47048 44.5125 0.797996C44.7947 0.361842 45.1043 0.207511 45.6221 0.215898C47.2407 0.246094 48.8611 0.225964 50.6122 0.225964C45.2522 8.05157 39.9731 15.7581 34.6148 23.5786Z" fill="#1D1D1D" />
                            </g>
                            <defs>
                                <clipPath id="clip0_134_17">
                                    <rect width="50.6122" height="28.5714" fill="white" transform="translate(0 0.214233)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span className="logo-text text-[29px] leading-[40px] font-bold font-nunito">
                            We<span className="text-[#7436F1] font-nunito text-[29.388px] font-bold leading-normal">5</span>ive
                        </span>
                    </div>
                </div>

                {/* Navigation for larger screens */}
                <nav className="hidden md:flex space-x-6">
                    <Link href="/" className="text-[16px] leading-[20.8px] font-manrope font-semibold hover:text-purple-500 text-[#646464]">Home</Link>
                    <Link href="/shop" className="text-[16px] leading-[20.8px] font-manrope font-semibold hover:text-purple-500 text-[#646464]">Shop</Link> 
                
                    <Link href="/deals" className="text-[16px] leading-[20.8px] font-manrope font-semibold hover:text-purple-500 text-[#646464]">Deals</Link>
                    <Link href="/whats-new" className="text-[16px] leading-[20.8px] font-manrope font-semibold hover:text-purple-500 text-[#646464]">What's New</Link>
                </nav>

                {/* Right Side Icons */}
                <div className="flex items-center space-x-4">
                    {/* Search Bar */}
                    <div className="relative hidden md:block">
                        <button className="absolute left-2 top-3 text-gray-500">
                            <FaSearch />
                        </button>
                        <input
                            type="text"
                            placeholder="Search"
                            className="px-4 py-2 rounded-full text-black pl-8 border focus:outline-none focus:border-black"
                        />
                    </div>

                    {/* Cart Icon */}
                    <button className="relative hover:text-purple-500">
                        <HiOutlineShoppingBag className="text-xl" />
                        {/* Cart Count */}
                        <span className="absolute top-[-7px] right-[-8px] bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                            0
                        </span>
                    </button>

                    {/* User Icon */}
                    <button className="hover:text-purple-500">
                        <FaRegUser className="text-xl mr-4" />
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-4">
                    <nav className="flex flex-col items-start space-y-4">
                        <a href="/" className="text-[16px] leading-[20.8px] font-manrope font-semibold hover:text-purple-500 text-[#646464]">Home</a>
                        <a href="/shop" className="text-[16px] leading-[20.8px] font-manrope font-semibold hover:text-purple-500 text-[#646464]">Shop</a>
                        <a href="/deals" className="text-[16px] leading-[20.8px] font-manrope font-semibold hover:text-purple-500 text-[#646464]">Deals</a>
                        <a href="/whats-new" className="text-[16px] leading-[20.8px] font-manrope font-semibold hover:text-purple-500 text-[#646464]">What's New</a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
