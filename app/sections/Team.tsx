import Container from '@/components/Container'
import Intro from '@/components/Intro'
import TeamCard from '@/components/TeamCard'
import { Separator } from '@/components/ui/separator'
import { teambios } from '@/content/teambios'
import React from 'react'

const Team = () => {
  return (
    <div id='our-team' className='flex flex-col gap-5'>
      <Intro title='Meet the team' subtitle='Your Trusted Advisors in Legal Affairs' description='Standing by your side through every legal challenge, our team of dedicated professionals combines extensive experience with a relentless pursuit of excellence.' />
      <Container>
        <Separator className='w-full mb-[40px]' />
        <div className='md:grid md:grid-cols-3 w-full flex flex-col gap-5'>
          {teambios.map((team) => (
            <div className='md:col-span-1' key={team.name}>
              <TeamCard imgsrc={team.image} name={team.name} role={team.role} bio={team.bio} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Team