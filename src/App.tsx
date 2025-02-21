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
    prevRefCategories,
    nextRefCategories,
    prevRefOurProducts,
    nextRefOurProducts,
  } = useMain();

  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Home 
        currentPage={currentPage} setCurrentPage={setCurrentPage} 
        prevRef={prevRef} nextRef={nextRef}
        prevRefCategories={prevRefCategories} nextRefCategories={nextRefCategories}
        prevRefOurProducts={prevRefOurProducts} nextRefOurProducts={nextRefOurProducts}
      />
      
    </div>
  )
}

export default App
