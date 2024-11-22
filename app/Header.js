import React from 'react';
import './Styles/styles.css';
import { FaSearch } from 'react-icons/fa'; 
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa6";
const Header = () => {
    return (
        <header className="bg-[#F5F3FF] text-black py-4">
            <div className="container mx-auto flex justify-between items-center">

                <div className="logo flex items-center space-x-2">

                    <img
                        src="./Image/we-logo-vector-260nw-1241498959.jpg"
                        alt="Logo"
                        className="h-10 w-10"
                    />

                    <span className="logo-text text-[29px] leading-[40px] font-bold font-nunito">We5ive</span>
                </div>

                {/* Navigation */}
                <nav className="flex space-x-6 ">
                    <a href="/" className="text-[16px] leading-[20.8px] font-manrope font-semibold hover:text-purple-500 text-[#646464]">Home</a>
                    <a href="/shop" className="text-[16px] leading-[20.8px] font-manrope font-semibold hover:text-purple-500 text-[#646464]">Shop</a>
                    <a href="/contact" className="text-[16px] leading-[20.8px] font-manrope font-semibold hover:text-purple-500 text-[#646464]">Deals</a>
                    <a href="/contact" className="text-[16px] leading-[20.8px] font-manrope font-semibold hover:text-purple-500 text-[#646464]">What's New</a>
                </nav>

                {/* Right Side Icons: Search, Cart, User */}
                <div className="flex items-center space-x-4">
                    {/* Search Bar */}
                    <div className="relative">
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
                        <FaRegUser className="text-xl" />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
