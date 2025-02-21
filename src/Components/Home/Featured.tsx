import React from 'react'
import { FeaturedImage } from "../../Data/imageData";
import { IoArrowForwardOutline } from "react-icons/io5";
import { featuredData } from '../../Data/main';

const Featured = () => {
    return (
        <div className='px-18'>
            <div className=''>
                <div className='flex items-center gap-3 pb-6'>
                    <div className='w-4 h-9 bg-[#DB4444] rounded'></div>
                    <h2 className='text-[#DB4444] font-medium'>Featured</h2>
                </div>
                <h1 className='text-4xl font-semibold pb-6'>New Arrival</h1>
                <div className='grid grid-cols-2 gap-8 py-6'>
                    <div className='bg-black flex items-center justify-center relative rounded-md'>
                        <img src={FeaturedImage.Featured04} alt="" className='pt-20'/>
                        <div className='absolute bottom-10 left-0 pl-8 flex flex-col gap-3'>
                            <h1 className='text-white text-2xl font-medium'>PlayStation 5</h1>
                            <p className='text-[#FAFAFA] leading-5 text-xs font-extralight'>Black and White version of the PS5 <br/> coming out on sale.</p>
                            <button className='flex items-center gap-2 group cursor-pointer text-white text-sm'>
                                Shop Now
                                <IoArrowForwardOutline className='group-hover:translate-x-1 transform duration-200 ease-out'/>
                            </button>
                        </div>
                    </div>
                    <div className='grid grid-rows-2 gap-8'>
                        {/* Content 1 */}
                        <div className='grid grid-cols-2 bg-black items-end rounded-md'>
                            <div className='flex flex-col gap-3 text-white p-6'>
                                <h1 className='text-white text-2xl font-medium'>Women’s Collections</h1>
                                <p className='text-[#FAFAFA] text-xs leading-5 font-extralight'>Featured woman collections that <br/> give you another vibe.</p>
                                <button className='flex items-center gap-2 group cursor-pointer text-white text-sm'>
                                    Shop Now
                                    <IoArrowForwardOutline className='group-hover:translate-x-1 transform duration-200 ease-out'/>
                                </button>
                            </div>
                            <img src={FeaturedImage.Featured03} alt="" />
                        </div>
                        {/* Content 2 */}
                        <div className='grid grid-cols-2 gap-8'>
                            <div className='bg-black rounded-md flex items-center justify-center relative'>
                                <img src={FeaturedImage.Featured02} alt="" />
                                <div className='absolute bottom-0 left-0 flex flex-col gap-3 text-white p-6'>
                                    <h1 className='text-white text-2xl font-medium'>Speakers</h1>
                                    <p className='text-[#FAFAFA] text-xs leading-5 font-extralight'>Amazon wireless speakers</p>
                                    <button className='flex items-center gap-2 group cursor-pointer text-white text-sm'>
                                        Shop Now
                                        <IoArrowForwardOutline className='group-hover:translate-x-1 transform duration-200 ease-out'/>
                                    </button>
                                </div>
                            </div>
                            <div className='bg-black rounded-md flex items-center justify-center relative'>
                                <img src={FeaturedImage.Featured01} alt="" />
                                <div className='absolute bottom-0 left-0 flex flex-col gap-3 text-white p-6'>
                                    <h1 className='text-white text-2xl font-medium'>Perfume</h1>
                                    <p className='text-[#FAFAFA] text-xs leading-5 font-extralight'>GUCCI INTENSE OUD EDP</p>
                                    <button className='flex items-center gap-2 group cursor-pointer text-white text-sm'>
                                        Shop Now
                                        <IoArrowForwardOutline className='group-hover:translate-x-1 transform duration-200 ease-out'/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-24'>
                    <div className='flex justify-center gap-20'>
                        {featuredData.map((data) => (
                            <div key={data.id} className='flex flex-col items-center gap-1'>
                                <div className='pb-4'>
                                    <img src={data.image} alt={data.alt} className='bg-black p-2 rounded-full border-8 border-gray-300'/>
                                </div>
                                <h1 className='text-lg font-semibold'>{data.name}</h1>
                                <p className='text-sm'>{data.discription}</p>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
