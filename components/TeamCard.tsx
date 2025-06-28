import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import React from 'react'

interface TeamCardProps {
    imgsrc: string;
    name: string;
    role: string;
    bio: string;
}

const titleFont = Playfair_Display({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
})

const TeamCard = ({ imgsrc, name, role, bio }: TeamCardProps) => {
  return (
    <div className='flex flex-col'>
        <div className='h-[500px] w-full relative'>
            <Image src={imgsrc} alt='' objectFit='cover' fill className='bg-cover' />
        </div>
        <div className='p-5 flex flex-col gap-2'>
            <div className={`w-full flex flex-col ${titleFont.className}`}>
                <p className='text-[23px] text-[#00114F]'>
                    {name}
                </p>
                <p className='text-[15px] text-[#EDAF0F]'>
                    {role}
                </p>
            </div>
            <p className='text-[18px] text-[#8E8E8E]'>
                {bio}
            </p>
        </div>
    </div>
  )
}

export default TeamCard