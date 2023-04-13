import React from 'react'
import Button from './Button'

const Boost = () => {
    return (
        <div className='bg-boost-mobile sm:bg-boost-desktop h-80 bg-primary2 bg-cover p-5 flex flex-col justify-center items-center'>
            <h1 className='text-white text-xl sm:text-3xl font-bold'>Boost you links today</h1>
            <Button style='bg-primary1 hover:bg-primary1/70 mt-5 font-bold' title='Get started' />
        </div>
    )
}

export default Boost