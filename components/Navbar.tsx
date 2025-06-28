'use client'

import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const logoFont = Montserrat({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin']
})

const Navbar = () => {
    return ( 
        <div className="sticky top-0 border border-b-primary/10 bg-[#FCFCFE] z-[9999]">
            <div className="max-w-[1400px] w-full mx-auto xl:px-10 px-4 py-2">
                <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                        <h1 className={`text-xl font-extrabold text-[#00114F] ${logoFont.className}`}>
                            Victoria <span className="text-[#EDAF0F]">Partners</span>
                        </h1>
                    </div>
                    <div className={`gap-[30px] hidden lg:flex items-center font-normal text-[18px] tracking-tighter`}>
                        <Link href='#about-us' className="text-[#3c3c3c] hover:text-[#00114F]">
                            About Us
                        </Link>
                        <Link href='#our-services' className="text-[#3c3c3c] hover:text-[#00114F] ">
                           Our Services
                        </Link>
                        <Link href='#our-team' className="text-[#3c3c3c] hover:text-[#00114F] ">
                            Our Team
                        </Link>
                        <Link href='#testimonials' className="text-[#3c3c3c] hover:text-[#00114F] ">
                            Testimonials
                        </Link>
                        <Link href='#news' className="text-[#3c3c3c] hover:text-[#00114F] ">
                            Latest News
                        </Link>
                        <Button className="bg-[#00114F] shadow-lg px-10 py-5 rounded-full">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;