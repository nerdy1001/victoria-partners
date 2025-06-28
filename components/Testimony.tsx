import React from 'react'
import { Playfair_Display } from 'next/font/google';

interface TestimonyProps {
    text: string;
    name: string;
    role: string;
    company: string;
}

const titleFont = Playfair_Display({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
})

const Testimony = ({
    text,
    name,
    role,
    company
}: TestimonyProps) => {
  return (
    <div className='flex flex-col gap-2'>
        <h1 className='font-normal text-[23px] leading-snug'>
            &quot;{text}&quot;
        </h1>
        <p className={`text-[#8e8e8e] text-[15px] ${titleFont.className}`}>
            {name}, {role}, {company}
        </p>
    </div>
  )
}

export default Testimony