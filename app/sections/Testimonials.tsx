import Container from '@/components/Container'
import Intro from '@/components/Intro'
import Testimony from '@/components/Testimony'
import { Separator } from '@/components/ui/separator'
import { testimony1, testimony2 } from '@/content/testimony'
import React from 'react'

const Testimonials = () => {
  return (
    <div id='testimonials' className='flex flex-col gap-5'>
      <Intro title='What our clients say' subtitle='Client Success Stories: Their Words, Your Inspiration' description='Our commitment to excellence is reflected in the success stories of our clients. Here is what some of them have to say about their experience with us.' />
      <Container>
        <Separator className='w-full mb-[40px]'/>
        <div className='md:grid md:grid-cols-2 w-full flex flex-col md:gap-20 gap-5 md:mt-20 mt-10'>
          <div className='md:col-span-1'>
            <Testimony text={testimony1.text} name={testimony1.name} company={testimony1.company} role={testimony1.role} />
          </div>
          <div className='md:col-span-1' />
          <div className='md:col-span-1' />
          <div className='md:col-span-1'>
            <Testimony text={testimony2.text} name={testimony2.name} company={testimony2.company} role={testimony2.role} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Testimonials