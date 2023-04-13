import React from 'react'
import Form from './Form'
import Image from 'next/image'

const Statistics = () => {
    return (
        <section className='bg-neutral1 px-10 sm:px-0 pt-10 pb-20'>
            <div className='max-w-[1240px] mx-auto'>
                <h3 className='text-center text-3xl font-bold'>Advanced Statistics</h3>
                <p className='text-center text-neutral2 text-md'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 relative justify-center place-items-center'>
                    <span
                        className="h-4/5 w-2 lg:w-4/5 lg:h-2 absolute bg-primary1 left-18 top-48"
                    ></span>
                    <div className='rounded-md bg-white p-5 w-72 h-60 mt-10 z-10'>
                        <div className='bg-primary2 rounded-full inline-block p-3 relative top-[-50px]'>
                            <Image src='/images/icon-brand-recognition.svg' height={30} width={30} alt='Brand recognition icon' />
                        </div>
                        <h4 className=' text-md font-bold'>Brand Recognition</h4>
                        <p className='text-sm mt-3 text-neutral2'>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                    </div>
                    <div className='rounded-md bg-white p-5 w-72 h-60 mt-20 z-10'>
                        <div className='bg-primary2 rounded-full inline-block p-3 relative top-[-50px]'>
                            <Image src='/images/icon-detailed-records.svg' height={30} width={30} alt='Brand recognition icon' />
                        </div>
                        <h4 className=' text-md font-bold'>Detailed Records</h4>
                        <p className='text-sm mt-3 text-neutral2'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    </div>
                    <div className='rounded-md bg-white p-5 w-72 h-60 mt-32 z-10'>
                        <div className='bg-primary2 rounded-full inline-block p-3 relative top-[-50px]'>
                            <Image src='/images/icon-fully-customizable.svg' height={30} width={30} alt='Brand recognition icon' />
                        </div>
                        <h4 className=' text-md font-bold'>Fully Customizable</h4>
                        <p className='text-sm mt-3 text-neutral2'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Statistics