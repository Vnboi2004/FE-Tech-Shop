import React from 'react';
import { navbarData } from '../../Data/Navbar';
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className='border-b border-gray-200'>
        <div className='px-18 py-8 flex items-center justify-between'>
            {/* Logo */}
            <a href="" className='text-2xl font-bold'>Exclusive</a>
            
            {/* Menu */}
            <ul className='flex items-center gap-12'>
                {navbarData.map((data) => (
                    <li key={data.id}>
                        <a 
                        href={data.link}
                        className='text-base hover:border-b hover:border-gray-500 duration-150 transform'>
                            {data.title}    
                        </a>
                    </li>
                ))}  
            </ul>

            <ul className='flex items-center gap-6'>
                 {/* Search */}
                <div className='flex items-center gap-2 bg-gray-100 p-2 rounded-md'>
                    <input 
                    type="text" 
                    placeholder='What are you looking for?'
                    className='outline-none text-sm px-3 w-full'/>
                    <CiSearch className='cursor-pointer text-2xl'/>
                </div>

                {/* info user */}
                <li>
                    <a href="" className='text-xl'>
                        <CiHeart/>
                    </a>
                </li>
                <li>
                    <a href="" className='text-xl'>
                        <IoCartOutline/>
                    </a>
                </li>
                <li>
                    <a href="" className='text-xl'>
                        <FiUser/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
