import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import React from 'react'

interface NewsCardProps {
    imgsrc: string;
    title: string;
    description: string;
}

const titleFont = Playfair_Display({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
})

const NewsCard = ({ imgsrc, title, description }: NewsCardProps) => {
  return (
    <div className='flex flex-col'>
        <div className='h-[250px] w-full relative'>
            <Image src={imgsrc} alt='' objectFit='cover' fill className='bg-cover' />
        </div>
        <div className='p-5 flex flex-col gap-2'>
            <p className={`text-[23px] ${titleFont.className}`}>
                {title}
            </p>
            <p className='text-[18px] text-[#8E8E8E]'>
                {description}
            </p>
        </div>
    </div>
  )
}

export default NewsCard