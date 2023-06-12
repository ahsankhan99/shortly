import React, { useState } from 'react'
import Button from './Button'
import Link from 'next/link'

interface Link {
    link: string
    short: string
    active: boolean
}

const Form = () => {
    const [links, setLinks] = useState<Link[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState('');

    const handleCopying = (link: any, index: any) => {
        setLinks(links.map((item, i) => i === index ? { ...item, active: true } : { ...item, active: false }))
        navigator.clipboard.writeText(link.short);
    }

    const handleShorten = () => {
        if (loading) {
            console.log('hello')
            return;
        }

        if (url === '') {
            setError('Please enter a URL');
            return;
        }
        fetch(`https://api.shrtco.de/v2/shorten?url=${url}`).
            then(res => res.json()).
            then(({ result }) => {
                console.log(result);
                setError('')
                setLinks(prev => [...prev, { link: url, short: result.full_short_link, active: false }])
                setUrl('');
            }).
            catch(err => {
                console.log(err)
                setError('Please enter a valid URL');
            }).finally(() => setLoading(false))
        setLoading(true);

    }

    return (
        <section className="mt-40 bg-neutral1 pb-2 px-5 sm:px-0">
            <div className='max-w-[1240px] mx-auto relative top-[-50px]' >
                <div className='p-5 py-10 rounded-lg mx-auto bg-shorten-mobile sm:bg-shorten-desktop bg-cover
                                    bg-primary2 grid grid-cols-1 place-items-center'>
                    <div className='sm:w-[70%] w-[80%] flex flex-col sm:flex-row items-center justify-center'>
                        <input type='text' className='outline-none rounded-sm h-10 px-2 w-full mb-3 sm:mb-0' value={url} onChange={(e) => { setUrl(e.target.value) }} placeholder='Shorten a link here...' />
                        <Button onClick={handleShorten} style='bg-primary1 hover:bg-primary1/70 sm:w-52 w-full rounded-sm ml-0 sm:ml-5' title='Shorten it!' />
                    </div>
                    {error && <p className='w-[90%] sm:w-[70%] text-sm text-secondary'>{error}</p>}
                </div>
                <div className='max-w-[1240px] w-full'>
                    {links.map((link, index) => {
                        return (<div key={index} className='bg-white sm:text-left text-center my-3 px-5 py-5 grid sm:grid-cols-2 items-center place-content-center rounded-md'>
                            <p><Link href={link.short} target="_blank" className='cursor-pointer'>{link?.link}</Link></p>
                            <div className='grid sm:grid-cols-2 py-4 gap-4 items-center justify-items-end'>
                                <p><Link href={link.short} target="_blank" className='cursor-pointer text-primary1'>{link?.short}</Link></p>
                                <Button onClick={() => handleCopying(link, index)} style={link.active ? 'bg-primary2 rounded-md w-full sm:w-[50%]' : 'bg-primary1 hover:bg-primary1/70 rounded-md w-full sm:w-[50%]'} title={link.active ? 'Copied!' : 'Copy'} />
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        </section>
    )
}

export default Form