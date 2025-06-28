'use client'

import { Playfair_Display } from "next/font/google";
import Container from "./Container";

interface IntroProps {
    title?: string;
    history?: string;
    subtitle: string;
    description: string;
}

const titleFont = Playfair_Display({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
})

const Intro = ({ title, subtitle, description, history }: IntroProps) => {
  return (
    <Container>
        <div className="md:grid md:grid-cols-2 flex flex-col md:gap-20 gap-5">
            <div className={`col-span-1 flex flex-col gap-1 md:pr-10 ${titleFont.className}`}>
                <p className="text-[15px] text-[#EDAF0F]">
                    {title}
                </p>
                <h1 className="text-[40px] text-[#00114F] leading-tight tracking-tighter">
                    {subtitle}
                </h1>
            </div>
            <div className="col-span-1 flex flex-col gap-2 text-[#8E8E8E] md:pl-20 text-[18px] leading-snug">
                <p className="text-[#3c3c3c] text-[23px] font-medium leading-8">
                    {history}
                </p>
                <p>
                    {description}
                </p>
            </div>
        </div>
    </Container>
  )
}

export default Intro