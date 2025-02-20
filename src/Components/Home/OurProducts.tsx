import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ourProductsData } from '../../Data/main';
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";

const OurProducts = () => {
    
    const slides = [];
    for (let i = 0; i < ourProductsData.length; i += 8) {
        slides.push(ourProductsData.slice(i, i + 8));
    }
    console.log(slides)

    return (
        <div className='px-18'>
            <div>
                <div className='flex items-center gap-3 pb-6'>
                    <div className='w-4 h-9 bg-[#DB4444] rounded'></div>
                    <h2 className='text-[#DB4444] font-medium'>Our Products</h2>
                </div>
                <div className='pb-6'>
                    <h1 className='text-4xl font-semibold'>Explore Our Products</h1>
                </div>
                <div className='py-8'>
                    <Swiper
                    modules={[Pagination, Navigation]}
                    slidesPerView={1}
                    spaceBetween={10}
                    // pagination={{ clickable: true }}
                    >           
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className='grid grid-cols-4 grid-rows-2 space-y-12 gap-x-24'>
                                    {slide.map((data) => (
                                        <div>
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
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default OurProducts
