import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutMe from "@/components/home/AboutMe";
import MyExperience from "@/components/MyExperience";
import MyStack from "@/components/myskills/MyStack";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
// import ContactForm from "@/components/contact/ContactForm";

export default function HomePage() {
  return (
      <>
      <HeroSection/>
      <AboutMe/>
      <ServicesSection/>
      <MyStack />
      <MyExperience/>
      <MyExperience/>
      <FaqSection />
      <TestimonialsSection />
      {/* <ContactForm/> */}
      </>
  );
}
