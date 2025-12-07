"use client";

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Marquee } from '@/components/ui/marquee';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'bg-primary/10 p-1 py-0.5 font-bold text-primary',
        className,
      )}
    >
      {children}
    </span>
  );
}

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function TestimonialCard({
  description,
  name,
  img,
  role,
  className,
  ...props // Capture the rest of the props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4',
        // theme styles
        'border-border bg-card/50 border shadow-sm',
        // hover effect
        'transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-primary/30',
        className,
      )}
      {...props}
    >
      <div className="text-muted-foreground text-sm font-normal select-none">
        {description}
        <div className="flex flex-row py-1 mt-2">
          <Star className="size-4 fill-primary text-primary" />
          <Star className="size-4 fill-primary text-primary" />
          <Star className="size-4 fill-primary text-primary" />
          <Star className="size-4 fill-primary text-primary" />
          <Star className="size-4 fill-primary text-primary" />
        </div>
      </div>

      <div className="flex w-full items-center justify-start gap-5 select-none">
        <Avatar className="size-10 ring-1 ring-primary/20 ring-offset-2">
            <AvatarImage src={img} alt={name} className="object-cover" />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>

        <div>
          <p className="text-foreground font-medium">{name}</p>
          <p className="text-muted-foreground text-xs font-normal">{role}</p>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Manager at TechFlow',
    img: 'https://randomuser.me/api/portraits/women/12.jpg',
    description: (
      <p>
        Wistant is an exceptional developer.
        <Highlight>
          His ability to translate complex requirements into clean, scalable code
        </Highlight>{' '}
        is unmatched. He delivered our MVP weeks ahead of schedule.
      </p>
    ),
  },
  {
    name: 'David Miller',
    role: 'CTO at StartupX',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    description: (
      <p>
        Working with Wistant was a game-changer.
        <Highlight>
          He doesn't just write code; he thinks about the product.
        </Highlight>{' '}
        His insights on architecture saved us from major technical debt.
      </p>
    ),
  },
  {
    name: 'Elena Rodriguez',
    role: 'Lead Designer at CreativeStudio',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    description: (
      <p>
        Rarely do you find a developer with such a keen eye for design.
        <Highlight>
          He implemented our designs with pixel-perfect precision
        </Highlight>{' '}
        and even improved the UX with smooth micro-interactions.
      </p>
    ),
  },
  {
    name: 'James Wilson',
    role: 'Founder at NextGen Apps',
    img: 'https://randomuser.me/api/portraits/men/22.jpg',
    description: (
      <p>
        Wistant's expertise in React and Next.js is top-tier.
        <Highlight>
          The performance optimization he applied to our platform
        </Highlight>{' '}
        increased our conversion rates by 40%. Highly recommended!
      </p>
    ),
  },
  {
    name: 'Sophie Martin',
    role: 'Engineering Manager',
    img: 'https://randomuser.me/api/portraits/women/67.jpg',
    description: (
      <p>
        A true professional.
        <Highlight>
          Excellent communication and problem-solving skills.
        </Highlight>{' '}
        He integrated seamlessly with our team and raised the bar for code quality.
      </p>
    ),
  },
  {
    name: 'Michael Chang',
    role: 'Backend Lead',
    img: 'https://randomuser.me/api/portraits/men/55.jpg',
    description: (
      <p>
        I was impressed by his fullstack capabilities.
        <Highlight>
          He handles database design and API security
        </Highlight>{' '}
        just as comfortably as frontend animations. A complete package.
      </p>
    ),
  },
  {
    name: 'Thomas Anderson',
    role: 'Security Specialist',
    img: 'https://randomuser.me/api/portraits/men/11.jpg',
    description: (
      <p>
        Security is often an afterthought, but not for Wistant.
        <Highlight>
          He implements robust security practices by default.
        </Highlight>{' '}
        Our audit found zero critical vulnerabilities in his code.
      </p>
    ),
  },
  {
    name: 'Jessica Lee',
    role: 'Marketing Director',
    img: 'https://randomuser.me/api/portraits/women/28.jpg',
    description: (
      <p>
        Our SEO rankings skyrocketed after the rebuild.
        <Highlight>
          The site is blazing fast and perfectly optimized.
        </Highlight>{' '}
        He understands the technical side of marketing better than anyone.
      </p>
    ),
  },
  {
    name: 'Robert Taylor',
    role: 'SaaS Founder',
    img: 'https://randomuser.me/api/portraits/men/45.jpg',
    description: (
      <p>
        We needed a scalable solution for our growing user base.
        <Highlight>
          The architecture he designed handled our 10x growth
        </Highlight>{' '}
        without a single hiccup. Truly enterprise-grade work.
      </p>
    ),
  },
  {
    name: 'Emily White',
    role: 'QA Lead',
    img: 'https://randomuser.me/api/portraits/women/33.jpg',
    description: (
      <p>
        It's a pleasure testing his releases.
        <Highlight>
          His code is clean, well-tested, and reliable.
        </Highlight>{' '}
        The number of bugs we find is consistently lower than with other devs.
      </p>
    ),
  },
  {
    name: 'Daniel Brown',
    role: 'DevOps Engineer',
    img: 'https://randomuser.me/api/portraits/men/76.jpg',
    description: (
      <p>
        He knows his way around CI/CD pipelines.
        <Highlight>
          Automated deployments and containerization were set up perfectly.
        </Highlight>{' '}
        Makes my job so much easier.
      </p>
    ),
  },
  {
    name: 'Lisa Garcia',
    role: 'Mobile Product Owner',
    img: 'https://randomuser.me/api/portraits/women/90.jpg',
    description: (
      <p>
        The mobile experience is flawless.
        <Highlight>
          Responsive design that actually feels native.
        </Highlight>{' '}
        Our mobile engagement metrics have never been better.
      </p>
    ),
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative container py-24 overflow-hidden">
      {/* Decorative elements */}
      {/* <div className="absolute top-20 -left-20 z-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" /> */}
      {/* <div className="absolute -right-20 bottom-20 z-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" /> */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center mb-12"
      >
        <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">Testimonials</p>
        <h2 className="text-foreground mb-4 text-4xl leading-[1.2] font-bold tracking-tighter md:text-5xl">
          Client Feedback
        </h2>
        <h3 className="text-muted-foreground mx-auto mb-8 max-w-lg text-lg font-medium tracking-tight text-balance">
          Don&apos;t just take my word for it. Here&apos;s what{' '}
          <span className="bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
            professionals
          </span>{' '}
          say about working with me.
        </h3>
      </motion.div>

      <div className="relative mt-6 max-h-[600px] overflow-hidden z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  '[--duration:30s]': i === 1,
                  '[--duration:25s]': i === 2,
                  '[--duration:50s]': i === 3,
                  '[--duration:35s]': i === 0,
                })}
              >
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                  <TestimonialCard key={idx} {...card} />
                ))}
              </Marquee>
            ))}
        </div>
        <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-20%"></div>
        <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-20%"></div>
      </div>
    </section>
  );
}
