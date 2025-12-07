import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutMe from "@/components/home/AboutMe";
import MyExperience from "@/components/MyExperience";
import MyStack from "@/components/myskills/MyStack";
// import ContactForm from "@/components/contact/ContactForm";

export default function HomePage() {
  return (
      <>
      <HeroSection/>
      <AboutMe/>
      <ServicesSection/>
      <MyStack />
      <MyExperience/>
      {/* <ContactForm/> */}
      </>
  );
}
