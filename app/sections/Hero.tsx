import Intro from '@/components/Intro'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col md:gap-20 gap-10'>
        <Intro subtitle='Your advocates for Success in Cameroon and Beyond' description='We are dedicated to serving our clients with strategic legal counsel, creative solutions, and unwavering advocacy to help them achieve their goals and navigate the complexities of the Cameroonian legal landscape.' />
        <div className='md:h-screen h-[50vh] w-full relative'>
          <Image src='/law-banner3.jpg' fill alt='banner-img' objectFit='cover' className='bg-cover' />
        </div>
    </div>
  )
}

export default Hero