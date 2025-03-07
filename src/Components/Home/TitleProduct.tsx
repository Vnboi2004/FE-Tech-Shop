import React, { useState } from 'react';
import { advertisementData, titleProducts } from '../../Data/main';
import { FaAngleRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import iphone from '../../assets/Images/iphone.png';
import { IoArrowForwardOutline } from "react-icons/io5";
import LogoApple from '../../assets/Images/logo_Apple.png';
import { homeProps } from './Home';



interface TitleProductsProps extends Pick<homeProps, "currentPage" | "setCurrentPage"> {};


const TitleProducts: React.FC<TitleProductsProps> = ({currentPage, setCurrentPage}) => {

    const totalPages = advertisementData.length;

    return (
        <div className='px-18 pb-20'>
            <div className='grid grid-cols-[auto_1fr]'>
                {/* Title product */}
                <div className='border-r border-gray-300 pr-24 pt-8'>
                    <ul className='flex flex-col gap-3'>
                        {titleProducts.map((data) => (
                            <li key={data.id} className='relative'>
                                <a href="">{data.title}</a>
                                {(data.id === 1 || data.id === 2) ? <FaAngleRight className='absolute top-0 -right-16 translate-y-1/3'/> : ""}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Advertisement product */}
                <div className='pt-8 px-12 overflow-x-hidden relative'>
                    <Swiper 
                        onSlideChange={(swiper) => setCurrentPage(swiper.activeIndex)}
                        spaceBetween={10} 
                        slidesPerView={1} 
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        onSlideChange={(swiper) => setCurrentPage(swiper.realIndex)}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        modules={[Pagination, Autoplay]}
                        className='bg-black'>
                        {advertisementData.map((data) => (
                            <SwiperSlide key={data.id}>
                                <div className='grid grid-cols-2'>
                                    <div className='text-white pl-16'>
                                        <div className='flex items-center gap-6 pt-12'>
                                            <img src={LogoApple} alt="" className=''/>
                                            <p>{data.title}</p>
                                        </div>
                                        <h1 className='pt-8 text-5xl font-medium'>{data.discount}</h1>
                                        <button className='pt-8 flex items-center gap-2 group cursor-pointer'>
                                            Shop Now
                                            <IoArrowForwardOutline className='group-hover:translate-x-1 transform duration-200 ease-out'/>
                                        </button>
                                    </div>
                                    <img src={iphone} alt="Slide 1" className='pt-4'/>
                                </div>
                            </SwiperSlide>
                        ))}
                        
                    </Swiper>
                    <div className='flex justify-center gap-2 absolute bottom-3 left-1/2 -translate-x-1/2 z-[1]'>
                        {Array.from({length: totalPages}).map((_, index) => (
                            <span key={index} className={`h-3 w-3 rounded-full transition-all duration-300 ${currentPage === index ? "bg-[#DB4444] border-2 border-white" : "bg-gray-300"}`}>

                            </span>
                        ))}
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default TitleProducts
