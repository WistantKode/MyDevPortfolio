import {
  AppearOnScroll,
  ScaleTextEffect
} from "@/components/ScrollEffect";
import {
  AppearOnScroll,
  ScaleTextEffect
} from "@/components/ScrollEffect";
import { Card, CardContent } from "@/components/ui/card";
import { Card, CardContent } from "@/components/ui/card";
import { ServicesSection, services } from "@/lib/servicesData";
import { ServicesSection, services } from "@/lib/servicesData";
import { services, ServicesSection } from "@/lib/servicesData";
import {cn} from "@/lib/utils";
import {ReactNode} from "react";
import { ScaleTextEffect, AppearOnScroll } from "../ScrollEffect";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}

export function GlassCard({
                              children,
                              className,
                              hover = false,
                          }: GlassCardProps) {
    return (
        <div
            className={cn(
                "relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl",
                hover &&
                "transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:shadow-cyan-500/25",
                className
            )}
        >
            <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none"/>
            <div className="relative z-10">{children}</div>
        </div>
    );
}
const ServicesSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Fade Overlays */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 title1">my services</p>

          <ScaleTextEffect>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 title3">
              What I do?
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto title2">
              Passionate about creating innovative digital solutions. Here's
              what I can do for you.
            </p>
          </ScaleTextEffect>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AppearOnScroll>
                <Card
                  key={index}
                  className="bg-gradient-card border-border-light hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group"
                >
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-primary">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-text-primary mb-3 title3">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-text-secondary leading-relaxed title2">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </AppearOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
  ;

  export default ServicesSection;
};
