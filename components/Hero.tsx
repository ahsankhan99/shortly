import React from 'react'
import Image from 'next/image';
import Button from './Button';

const Hero = () => {
    return (
        <div className='max-w-[1240px] mx-auto grid sm:grid-cols-2 grid-cols-1 p-4 pb-20'>
            <div className='lg:absolute lg:right-0 sm:order-1'>
                <Image
                    priority
                    src="/images/illustration-working.svg"
                    height={500}
                    width={500}
                    alt="Follow us on Twitter"
                />
            </div>
            <div className='py-5 sm:pr-24'>
                <h1 className='text-2xl sm:text-7xl font-bold text-neutral4'>More than just shorter links!</h1>
                <p className='text-neutral2 mt-2 text-sm'>Build your brand’s recognition and get detailed insights on how your links are performing. Get Started Shorten a link here... Shorten It!</p>
                <Button style='w-32 mt-5 bg-primary1 hover:bg-primary1/70' title="Get Started" />
            </div>
        </div>
    )
}

export default Hero