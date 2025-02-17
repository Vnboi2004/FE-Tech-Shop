import React from 'react'

const Today = () => {
    return (
        <div className='px-18 py-8'>
            <div>
                {/* Milestone */}
                <div className='flex items-center gap-3 pb-6'>
                    <div className='w-4 h-9 bg-[#DB4444] rounded'></div>
                    <h2 className='text-[#DB4444] font-medium'>Today's</h2>
                </div>
                {/* Time sales */}
                <div className='flex items-center gap-28 pb-6'>
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
                </div>
                {/* View product */}

            </div>
        </div>
    )
}

export default Today
