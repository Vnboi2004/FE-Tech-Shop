import React from 'react';
import TitleProducts from './TitleProduct';
import Today from './Today';
import { RefObject } from "react";
import Categories from './Categories';
import ThisMonth from './ThisMonth';
import OurProducts from './OurProducts';
export interface homeProps {
    currentPage: number;
    setCurrentPage: (page: number) => void;
    prevRef: RefObject<HTMLButtonElement>;
    nextRef: RefObject<HTMLButtonElement>;
    prevRefCategories: RefObject<HTMLButtonElement>;
    nextRefCategories: RefObject<HTMLButtonElement>;
}
const Home: React.FC<homeProps> = ({currentPage, setCurrentPage, prevRef, nextRef, prevRefCategories, nextRefCategories}) => {


    return (
        <div>
            {/* Components title product website */}
            <TitleProducts currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            {/* Today's */}
            <Today prevRef={prevRef} nextRef={nextRef}/>
            {/* Categories */}
            <Categories prevRefCategories={prevRefCategories} nextRefCategories={nextRefCategories}/>
            {/* This month */}
            <ThisMonth/>
            {/* Our product */}
            <OurProducts/>
        </div>
    )
}

export default Home
