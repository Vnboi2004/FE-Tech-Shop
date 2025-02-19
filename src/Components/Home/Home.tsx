import React from 'react';
import TitleProducts from './TitleProduct';
import Today from './Today';
import { RefObject } from "react";
import Categories from './Categories';
export interface homeProps {
    currentPage: number;
    setCurrentPage: (page: number) => void;
    prevRef: RefObject<HTMLButtonElement>;
    nextRef: RefObject<HTMLButtonElement>;
}
const Home: React.FC<homeProps> = ({currentPage, setCurrentPage, prevRef, nextRef}) => {


    return (
        <div>
            {/* Components title product website */}
            <TitleProducts currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            {/* Today's */}
            <Today prevRef={prevRef} nextRef={nextRef}/>
            {/* Categories */}
            <Categories/>
        </div>
    )
}

export default Home
