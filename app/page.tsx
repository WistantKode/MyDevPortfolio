import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutMe from "@/components/home/AboutMe";
import MyExperience from "@/components/MyExperience";
import MyStack from "@/components/MyStack";
import ContactForm from "@/components/contact/ContactForm";
// import Footer from "@/components/footer/Footer";

export default function HomePage() {
  return (
      <>
      <HeroSection/>
      <AboutMe/>
      <ServicesSection/>
      <MyStack />
      <MyExperience/>
      <ContactForm/>
      {/* <Footer/> */}
      </>
  );
}
