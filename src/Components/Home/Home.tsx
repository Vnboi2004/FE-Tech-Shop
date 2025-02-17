import React from 'react'
import TitleProducts from './TitleProduct'
import Today from './Today';

export interface homeProps {
    currentPage: number;
    setCurrentPage: (page: number) => void;
}
const Home: React.FC<homeProps> = ({currentPage, setCurrentPage}) => {
    return (
        <div>
            {/* Components title product website */}
            <TitleProducts currentPage={currentPage} setCurrentPage={setCurrentPage}/>

            {/* Today's */}
            <Today/>
        </div>
    )
}

export default Home
