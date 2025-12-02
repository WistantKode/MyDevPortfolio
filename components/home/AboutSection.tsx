"use client";

import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Mail} from "lucide-react";
import {AppearOnSrollToLeft, AppearOnSrollToRight} from "@/components/ScrollEffect"

const AboutSection = () => {
  return (
    <section className="py-20 bg-background-alt relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AppearOnSrollToLeft>
            <div className="relative w-full h-96">
              <Image 
                src="/me.png" 
                className="rounded-xl object-cover" 
                alt="Modjo victor dévellopeur" 
                fill
              />
            </div>
          </AppearOnSrollToLeft>
          
          <div className="space-y-8">
            <AppearOnSrollToRight>
            <div>
              <p className="text-primary font-medium mb-2 title1">about me</p>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 title3">
                Who am I?
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-text-secondary text-lg leading-relaxed title2">
                I am a web developer and IT student, passionate about creating innovative digital solutions. 
                Specializing in Backend Development, high-performance websites tailored to various needs, 
                I focus on providing smooth and intuitive user experiences.
              </p>
              
              <p className="text-text-secondary text-lg leading-relaxed title2">
                My goal is to transform your ideas into concrete projects, whether for professional or 
                personal use. If you have a project in mind, I would be happy to collaborate with you!
              </p>
            </div>
            
            <div className="pt-6">
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:opacity-90 border-0 shadow-primary hover:shadow-glow transition-smooth"
              >
                <a href="mailto:yvankamsu88@gmail.com">
                  <Mail className="mr-2 w-5 h-5" />
                  Let's Work Together
                </a>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border title1">
              <div>
                <h3 className="text-3xl font-bold text-primary">10+</h3>
                <p className="text-text-secondary">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary">2+</h3>
                <p className="text-text-secondary">Years Experience</p>
              </div>
            </div>
            </AppearOnSrollToRight>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutSection;
