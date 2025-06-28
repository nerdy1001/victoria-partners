import Container from '@/components/Container'
import Intro from '@/components/Intro'
import NewsCard from '@/components/NewsCard'
import { Separator } from '@/components/ui/separator'
import { news } from '@/content/news'
import React from 'react'

const News = () => {
  return (
    <div id='news' className='flex flex-col gap-5'>
        <Intro title='Stay Informed' subtitle='Latest News and Insights from Victoria Partners' description='Share updates on legal developments, industry trends, and insights from our team of experts.' />
        <Container>
            <Separator className='w-full mb-[40px]' />
            <div className='md:grid md:grid-cols-3 w-full flex flex-col gap-5'>
                {news.map((newsItem) => (
                    <div key={newsItem.title} className='md:col-span-1'>
                        <NewsCard imgsrc={newsItem.image} title={newsItem.title} description={newsItem.description} />
                    </div>
                ))}  
            </div>
        </Container>
    </div>
  )
}

export default News