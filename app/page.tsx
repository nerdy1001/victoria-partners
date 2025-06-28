import Hero from "@/app/sections/Hero";
import Intro from "@/components/Intro";
import Services from "./sections/Services";
import Team from "./sections/Team";
import Testimonials from "./sections/Testimonials";
import News from "./sections/News";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col lg:gap-[200px] gap-[100px] pt-[80px]">
      <Hero />
      <Intro title="About Us" subtitle="Cameroon's Legacy of Legal Excellence: A Tradition of Success Continues." history="Established in 2000, Victoria Partners is a leading law firm in Cameroon, providing comprehensive legal services to a diverse clientele." description="Our team of experienced and dedicated lawyers possesses a deep understanding of Cameroonian law and extensive experience across various sectors. We are committed to providing our clients with insightful legal advice, strategic solutions, and unwavering representation to achieve their goals." />
      <Services />
      <Team />
      <Testimonials />
      <News />
      <Footer />
    </main>
  );
}
