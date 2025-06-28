import Container from '@/components/Container'
import Intro from '@/components/Intro'
import ServiceCard from '@/components/ServiceCard'
import { Separator } from '@/components/ui/separator'
import { services } from '@/content/services'
import React from 'react'

const Services = () => {
  return (
    <div id='our-services' className='flex flex-col gap-5'>
        <Intro title='Our services' subtitle='Delivering Excellence: The Hallmark of Our Legal Services' description=' Explore our practice areas to discover how our team of experts can tailor solutions to meet your unique needs and achieve your goals.' />
        <Container>
            <Separator className='w-full mb-[40px]' />
            <div className='md:grid md:grid-cols-3 w-full flex flex-col gap-5'>
                {services.map((service) => (
                    <div className='md:col-span-1' key={service.title}>
                        <ServiceCard imgsrc={service.image} title={service.title} description={service.description} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default Services