import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { productTodayData } from '../../Data/main';
import { TiStarFullOutline } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { homeProps } from './Home';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

interface TodayProductProps extends Pick<homeProps, "prevRef" | "nextRef"> {};

const Today: React.FC<TodayProductProps> = ({prevRef, nextRef}) => {
    
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    return (
        <div className='px-18 py-8'>
            <div className='border-b border-gray-300'>
                {/* Milestone */}
                <div className='flex items-center gap-3 pb-6'>
                    <div className='w-4 h-9 bg-[#DB4444] rounded'></div>
                    <h2 className='text-[#DB4444] font-medium'>Today's</h2>
                </div>
                {/* Time sales */}
                <div className='flex items-center gap-28 pb-6 relative'>
                    <h1 className='text-4xl font-semibold'>Flash Sales</h1>
                    <div className='flex items-center gap-2'>
                        {/* Days */}
                        <div className='flex flex-col items-center relative pr-8'>
                            <span className='text-sm'>Days</span>
                            <span className='text-3xl font-bold'>03</span>
                            <div className='absolute top-4 right-2 text-[#DB4444] text-3xl'>:</div>
                        </div>
                        {/* Hours */}
                        <div className='flex flex-col items-center relative pr-8'>
                            <span className='text-sm'>Hours</span>
                            <span className='text-3xl font-bold'>23</span>
                            <div className='absolute top-4 right-2 text-[#DB4444] text-3xl'>:</div>
                        </div>
                        {/* Minutes */}
                        <div className='flex flex-col items-center relative pr-8'>
                            <span className='text-sm'>Minutes</span>
                            <span className='text-3xl font-bold'>19</span>
                            <div className='absolute top-4 right-2 text-[#DB4444] text-3xl'>:</div>
                        </div>
                        {/* Seconds */}
                        <div className='flex flex-col items-center'>
                            <span className='text-sm'>Seconds</span>
                            <span className='text-3xl font-bold'>56</span>
                        </div>
                    </div>

                    <div className='absolute top-2 right-4 -translate-x-1/2 flex items-center gap-2'>
                        {/* Left row */}
                        <button
                            ref={prevRef}
                            className={`bg-gray-200 text-black p-2 rounded-full z-10 ${isBeginning ? "opacity-50 cursor-not-allowed" : "opacity-100  cursor-pointer"}`}
                            disabled={isBeginning}
                        >
                            <GoArrowLeft/>
                        </button>
                        {/* Right row */}
                        <button
                            ref={nextRef}
                            className={`bg-gray-200 text-black p-2 rounded-full z-10 ${isEnd ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-pointer"}`}
                            disabled={isEnd}
                        >
                            <GoArrowRight/>
                        </button>
                    </div>
                </div>
                {/* View product */}
                <div className='py-2'>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30} // Khoảng cách giữa các slide
                        slidesPerView={4} // Hiển thị ảnh mỗi lần
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => {
                            setIsBeginning(swiper.isBeginning);
                            setIsEnd(swiper.isEnd);
                            setTimeout(() => {
                                if (swiper.params.navigation) {
                                    if (typeof swiper.params.navigation !== "boolean") {
                                        swiper.params.navigation.prevEl = prevRef.current;
                                        swiper.params.navigation.nextEl = nextRef.current;
                                    }
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }
                            })
                        }}
                        onSlideChange={(swiper) => {
                            setIsBeginning(swiper.isBeginning);
                            setIsEnd(swiper.isEnd);
                        }}
                    >
                        {productTodayData.map((data) => (
                            <SwiperSlide>
                                <div>
                                    <div className="bg-gray-100 flex justify-center items-center w-[270px] h-[250px] overflow-hidden rounded-sm relative group">
                                        <img src={data.imgae} alt={data.alt} className="object-cover group-hover:scale-75 duration-300 transform"/>
                                        <div className='absolute top-2 right-3 p-1 bg-white rounded-full'>
                                            <CiHeart className='text-xl'/>
                                        </div>
                                        <div className='absolute top-1/5 right-3 p-1 bg-white rounded-full'>
                                            <IoEyeOutline className='text-xl'/>
                                        </div>
                                        <div className='absolute bg-[#DB4444] text-xs text-white px-3.5 py-1 rounded-sm top-0 left-0'>
                                            {data.discount}
                                        </div>
                                        {/* <div className='absolute bottom-0 w-full bg-black text-center py-2 text-white opacity-0 group-hover:opacity-100 duration-300 transform'>
                                            Add To Cart
                                        </div> */}
                                         <div className="absolute bottom-0 left-0 w-full bg-black text-center py-2 text-white opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 duration-300">
                                            Add To Cart
                                        </div>
                                    </div>
                                    <div className='py-3 flex flex-col gap-1'>
                                        <h2 className='font-semibold'>{data.nameProduct}</h2>
                                        <div className='flex items-center gap-4'>
                                            <span className='text-sm text-[#DB4444] font-medium'>{data.priceProduct}</span>
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
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='flex justify-center py-10'>
                        <button className='bg-[#DB4444] text-white px-12 py-3 rounded-sm cursor-pointer'>
                            View All Products
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Today
