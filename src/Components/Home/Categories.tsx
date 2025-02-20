import React, { useState } from 'react'
import { categoriesData } from '../../Data/main'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { homeProps } from './Home';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

interface categoriesProps extends Pick<homeProps, "prevRefCategories" | "nextRefCategories"> {};

const Categories: React.FC<categoriesProps> = ({prevRefCategories, nextRefCategories}) => {

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    return (
        <div className='px-18 mb-20'>
            <div className='border-b border-gray-300 py-8'>
                <div className='flex items-center gap-3 pb-6'>
                    <div className='w-4 h-9 bg-[#DB4444] rounded'></div>
                    <h2 className='text-[#DB4444] font-medium'>Categories</h2>
                </div>
                <div className='relative pb-6'>
                    <h1 className='text-4xl font-semibold'>Browse By Category</h1>
                    <div className='absolute top-0 right-0 flex items-center gap-2'>
                        {/* Left row */}
                        <button
                            ref={prevRefCategories}
                            className={`bg-gray-200 text-black p-2 rounded-full z-10 ${isBeginning ? "opacity-50 cursor-not-allowed" : "opacity-100  cursor-pointer"}`}
                            disabled={isBeginning}
                        >
                            <GoArrowLeft/>
                        </button>
                        {/* Right row */}
                        <button
                            ref={nextRefCategories}
                            className={`bg-gray-200 text-black p-2 rounded-full z-10 ${isEnd ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-pointer"}`}
                            disabled={isEnd}
                        >
                            <GoArrowRight/>
                        </button>
                    </div>
                </div>
                <div className='py-8'>
                    <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30} // Khoảng cách giữa các slide
                    slidesPerView={6} // Hiển thị ảnh mỗi lần
                    // pagination={{ clickable: true }}
                    navigation={{
                        prevEl: prevRefCategories.current,
                        nextEl: nextRefCategories.current,
                    }}
                    onSwiper={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                        setTimeout(() => {
                            if (swiper.params.navigation) {
                                if (typeof swiper.params.navigation !== "boolean") {
                                    swiper.params.navigation.prevEl = prevRefCategories.current;
                                    swiper.params.navigation.nextEl = nextRefCategories.current;
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
                        {categoriesData.map((data) => (
                            <SwiperSlide key={data.id} className='group'>
                                <div className='border border-gray-300 rounded-md group-hover:bg-[#DB4444] duration-200 transform ease-linear'>
                                    <div className='flex flex-col justify-center items-center gap-3 py-8 group-hover:text-white'>
                                        <data.icon className='text-5xl'/>
                                        <span className='text-base'>{data.name}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>


                    
                </div>
            </div>
        </div>
    )
}

export default Categories
