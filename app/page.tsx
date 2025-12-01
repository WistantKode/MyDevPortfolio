import Layout from "@/components/layout/layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutMe from "@/components/AboutMe";
import MyExperience from "@/components/MyExperience";
import MyStack from "@/components/MyStack";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <Layout>
      <HeroSection/>
      <AboutMe/>
      <ServicesSection/>
      <MyStack />
      <MyExperience/>
      <ContactForm/>
    </Layout>
  );
}
