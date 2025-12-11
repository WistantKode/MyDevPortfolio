"use client";

import {cn} from '@/lib/utils';
import {ArrowRight, Code, Database, Globe, Monitor, Palette, Smartphone} from "lucide-react";
import {AppearOnScroll, ScaleTextEffect} from "@/components/ScrollEffects/ScrollEffect";
import GridBackground from "@/components/ui/GridBackground";
import React from "react";

interface BentoGridItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const BentoGridItem = ({
  title,
  description,
  icon,
  className,
}: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        'group border-primary/10 bg-background hover:border-primary/30 relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border px-6 pt-6 pb-10 shadow-md transition-all duration-500',
        className,
      )}
    >
      <div className="absolute top-0 -right-1/2 z-0 size-full cursor-pointer bg-[linear-gradient(to_right,#3d16165e_1px,transparent_1px),linear-gradient(to_bottom,#3d16165e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px]"></div>

      <div className="text-primary/5 group-hover:text-primary/10 absolute right-1 bottom-3 scale-[6] transition-all duration-700 group-hover:scale-[6.2]">
        {icon}
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="bg-primary/10 text-primary shadow-primary/10 group-hover:bg-primary/20 group-hover:shadow-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-full shadow transition-all duration-500">
            {icon}
          </div>
          <h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
        <div className="text-primary mt-4 flex items-center text-sm font-medium">
          <span className="mr-1">Learn more</span>
          <ArrowRight className="size-4 transition-all duration-500 group-hover:translate-x-2" />
        </div>
      </div>
      <div className="from-primary to-primary/30 absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r blur-2xl transition-all duration-500 group-hover:blur-lg" />
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Database className="size-6" />,
      title: "Backend Solutions",
      description: "Robust backend architecture design and implementation to support your applications with reliable data management.",
      size: 'large' as const,
    },
    {
      icon: <Code className="size-6" />,
      title: "Coding",
      description: "Clean, efficient, and optimized code to deliver reliable results.",
      size: 'small' as const,
    },
    {
      icon: <Globe className="size-6" />,
      title: "Web Development",
      description: "Full-stack web development using cutting-edge technologies to build scalable applications.",
      size: 'medium' as const,
    },
    {
      icon: <Monitor className="size-6" />,
      title: "Desktop Development",
      description: "Powerful and reliable desktop applications tailored to user needs.",
      size: 'medium' as const,
    },
    {
      icon: <Smartphone className="size-6" />,
      title: "Mobile Development",
      description: "Creating responsive mobile applications with modern frameworks.",
      size: 'small' as const,
    },
    {
      icon: <Palette className="size-6" />,
      title: "UI/UX Design",
      description: "Intuitive and aesthetically pleasing interfaces, providing a smooth and engaging user experience for your projects.",
      size: 'large' as const,
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Grid Background */}
      <GridBackground variant="default" withFade={true} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">my services</p>

          <ScaleTextEffect>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              What I do?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Passionate about creating innovative digital solutions. Here&apos;s
              what I can do for you.
            </p>
          </ScaleTextEffect>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6 auto-rows-[minmax(280px,auto)]">
            {services.map((service, index) => (
              <div
                key={index}
                className={cn(
                  service.size === 'large'
                    ? 'md:col-span-4'
                    : service.size === 'medium'
                      ? 'md:col-span-3'
                      : 'md:col-span-2',
                  'h-full'
                )}
              >
                <AppearOnScroll>
                  <BentoGridItem
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    size={service.size}
                    className="h-full"
                  />
                </AppearOnScroll>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
