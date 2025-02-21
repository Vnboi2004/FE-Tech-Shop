import React from 'react';
import TitleProducts from './TitleProduct';
import Today from './Today';
import { RefObject } from "react";
import Categories from './Categories';
import ThisMonth from './ThisMonth';
import OurProducts from './OurProducts';
import Featured from './Featured';
export interface homeProps {
    currentPage: number;
    setCurrentPage: (page: number) => void;
    prevRef: RefObject<HTMLButtonElement>;
    nextRef: RefObject<HTMLButtonElement>;
    prevRefCategories: RefObject<HTMLButtonElement>;
    nextRefCategories: RefObject<HTMLButtonElement>;
    prevRefOurProducts: RefObject<HTMLButtonElement>;
    nextRefOurProducts: RefObject<HTMLButtonElement>;
}
const Home: React.FC<homeProps> = ({
    currentPage, setCurrentPage, 
    prevRef, nextRef, 
    prevRefCategories, nextRefCategories, 
    prevRefOurProducts, nextRefOurProducts,
}) => {


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
            <OurProducts prevRefOurProducts={prevRefOurProducts} nextRefOurProducts={nextRefOurProducts}/>
            {/* Featured */}
            <Featured/>
        </div>
    )
}

export default Home
