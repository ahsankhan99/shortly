import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Button from './Button';
import Image from 'next/image';

const Header = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (<>
        <div className='max-w-[1240px] mx-auto p-4 items-center pt-5 sm:flex sm:justify-between'>
            <div className='flex items-center justify-between sm:justify-normal sm:space-x-10'>
                <Link href="/">
                    <Image src='/images/logo.svg' height={0} width={150} alt='logo' />
                </Link>
                <ul className='hidden sm:flex space-x-10'>
                    <li className='font-bold text-sm text-neutral2 hover:text-neutral4'>
                        <Link href="/">Features</Link>
                    </li>
                    <li className='font-bold text-sm text-neutral2 hover:text-neutral4'>
                        <Link href="/">Pricing</Link>
                    </li>
                    <li className='font-bold text-sm text-neutral2 hover:text-neutral4'>
                        <Link href="/">Resources</Link>
                    </li>
                </ul>
                {/* Mobile Button */}
                <div onClick={handleNav} className='sm:hidden z-10'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
            </div>

            <div className='sm:flex space-x-4 text-sm font-bold hidden'>
                <Button style='w-20 text-neutral1 hover:text-neutral3' title="Login" />
                <Button style='w-28 bg-primary1 hover:bg-primary1/70' title="Signup" />
            </div>

            {/* Mobile Menu */}
            <div className={nav ? 'rounded-lg mt-5 bg-primary2 text-center ease-in duration-300 sm:hidden px-10 py-5' :
                'absolute top-0 left-[-100%] right-0 bottom-0 w-full h-full sm:hidden'}>
                <ul>
                    <li onClick={handleNav} className='p-4 text-xl text-white font-bold hover:text-neutral2 my-1'>
                        <Link href="/">Features</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-xl text-white font-bold hover:text-neutral2 my-1'>
                        <Link href="/">Pricing</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-xl text-white font-bold hover:text-neutral2 my-1'>
                        <Link href="/">Resources</Link>
                    </li>
                    <hr></hr>
                    <li onClick={handleNav} className='p-4 text-xl text-white font-bold hover:text-neutral2 my-1'>
                        <Link href="/">Login</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-xl text-white font-bold hover:text-neutral2 rounded-3xl mb-4  bg-primary1 hover:bg-primary1/70 cursor-pointer my-1'>
                        <Link href="/" >Signup</Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
    )
}

export default Header