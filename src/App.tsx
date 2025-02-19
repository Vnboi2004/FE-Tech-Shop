import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import useMain from './Hooks/main';

const App = () => {

  const {
    currentPage,
    setCurrentPage,
    prevRef,
    nextRef,
  } = useMain();

  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Home currentPage={currentPage} setCurrentPage={setCurrentPage} prevRef={prevRef} nextRef={nextRef}/>
      
    </div>
  )
}

export default App
