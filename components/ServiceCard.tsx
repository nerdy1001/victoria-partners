import { Playfair_Display } from 'next/font/google';
import Image from 'next/image'
import React from 'react'

interface ServiceCardProps {
    imgsrc: string;
    title: string;
    description: string;
}

const titleFont = Playfair_Display({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
})

const ServiceCard = ({ imgsrc, title, description }: ServiceCardProps) => {
  return (
    <div className='h-[350px] p-10 flex flex-col justify-center gap-2 bg-[#F3F4F8]'>
        <Image src={imgsrc} alt='' height='50' width='50' />
        <h1 className={`${titleFont.className} text-[#00114F] text-[23px]`}>
            {title}
        </h1>
        <p className='text-[#8E8E8E]'>
            {description}
        </p>
    </div>
  )
}

export default ServiceCard