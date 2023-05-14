"use client"

import HeroSection from "@/components/HeroSection"
import AboutUs from "@/components/AboutUs"
import Services from "@/components/Services"
import Pricing from "@/components/Pricing"
import Statistics from "@/components/Statistics"
import JobsSlideshow from "@/components/JobsSlideshow"
import Values from "@/components/Values"
import Testimonials from "@/components/Testimonials"

export default function Home() {
  return (
    <>
      <HeroSection/>
      <AboutUs/>
      <Values/>
      <Services/>
      <Pricing/>
      <Statistics/>
      <Testimonials/>
      <JobsSlideshow/>
    </>
  )
}
