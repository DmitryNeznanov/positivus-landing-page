import Cases from "./components/home/Cases"
import Contact from "./components/home/Contact"
import Hero from "./components/home/Hero"
import Process from "./components/home/Process"
import Services from "./components/home/Services"
import Team from "./components/home/Team"
import Testimonials from "./components/home/Testimonials"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Positivus Landing Page",
  description: "Positivus Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.",
}


export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Services></Services>
      <Cases></Cases>
      <Process></Process>
      <Team></Team>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </>
  )
}
