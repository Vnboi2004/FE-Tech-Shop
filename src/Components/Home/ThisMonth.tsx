import React from 'react'
import { bestSeleProductsData } from '../../Data/main'
import { TiStarFullOutline } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import categoriesThisMonth from "../../assets/Images/This_month_categories.png";
const ThisMonth = () => {
    return (
        <div className='px-18'>
            <div className=''>
                <div className='flex items-center gap-3 pb-6'>
                    <div className='w-4 h-9 bg-[#DB4444] rounded'></div>
                    <h2 className='text-[#DB4444] font-medium'>This Month</h2>
                </div>
                <div className='flex items-center justify-between pb-6'>
                    <h1 className='text-4xl font-semibold'>Browse By Category</h1>
                    <button className='text-white bg-[#DB4444] px-12 py-3.5 text-sm rounded-md cursor-pointer'>View All</button>
                </div>
                <div className='py-8'>
                    <div className='grid grid-cols-4 gap-24'>
                        {bestSeleProductsData.map((data) => (
                            <div key={data.id} className=''>
                                <div className="bg-gray-100 flex justify-center items-center w-[270px] h-[250px] overflow-hidden rounded-sm relative group">
                                    <img src={data.image} alt={data.alt} className="object-cover group-hover:scale-75 duration-300 transform"/>
                                    <div className='absolute top-2 right-3 p-1 bg-white rounded-full'>
                                        <CiHeart className='text-xl'/>
                                    </div>
                                    <div className='absolute top-1/5 right-3 p-1 bg-white rounded-full'>
                                        <IoEyeOutline className='text-xl'/>
                                    </div>
                                    {/* <div className='absolute bottom-0 w-full bg-black text-center py-2 text-white opacity-0 group-hover:opacity-100 duration-300 transform'>
                                        Add To Cart
                                    </div> */}
                                        <div className="absolute bottom-0 left-0 w-full bg-black text-center py-2 text-white opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 duration-300">
                                        Add To Cart
                                    </div>
                                </div>
                                <div className='py-3 flex flex-col gap-1.5'>
                                    <h2 className='font-semibold'>{data.name}</h2>
                                    <div className='flex items-center gap-4'>
                                        <span className='text-sm text-[#DB4444] font-medium'>{data.price}</span>
                                        <span className='text-sm text-[#7D8184] line-through'>{data.originalPrice}</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <div className='flex items-center'>
                                            {[...Array(5)].map((_, index) => (
                                                <TiStarFullOutline key={index} className={` ${index < data.star ? "text-yellow-300" : "text-gray-300"}`}/>
                                            ))}
                                        </div>
                                        <span className='text-sm text-[#7D8184]'>({data.quantityStar})</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='pt-24 mb-24'>
                    <div className='grid grid-cols-[auto_1fr] bg-black px-14 py-6'>
                        {/* Text content */}
                        <div className='flex flex-col gap-8 py-12'>
                            <h4 className='text-base text-[#00FF66] font-medium'>Categories</h4>
                            <h1 className='text-white text-5xl font-semibold'>Enhance Your <br/> Music Experience</h1>
                            <div className='text-black flex items-center gap-6'>
                                <div className='flex flex-col items-center justify-center w-16 h-16 bg-white rounded-full'>
                                    <span className='text-sm font-bold'>23</span>
                                    <span className='text-xs'>Hours</span>
                                </div>
                                <div className='flex flex-col items-center justify-center w-16 h-16 bg-white rounded-full'>
                                    <span className='text-sm font-bold'>05</span>
                                    <span className='text-xs'>Days</span>
                                </div>
                                <div className='flex flex-col items-center justify-center w-16 h-16 bg-white rounded-full'>
                                    <span className='text-sm font-bold'>59</span>
                                    <span className='text-xs'>minutes</span>
                                </div>
                                <div className='flex flex-col items-center justify-center w-16 h-16 bg-white rounded-full'>
                                    <span className='text-sm font-bold'>35</span>
                                    <span className='text-xs'>seconds</span>
                                </div>
                            </div>
                            <div>
                                <button className='bg-[#00FF66] text-white px-12 py-4 font-semibold rounded-md cursor-pointer'>
                                    Buy Now!
                                </button>
                            </div>
                        </div>
                        {/* Image */}
                        <div className='flex items-center justify-end'>
                            <img src={categoriesThisMonth} alt="" className=''/>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThisMonth
