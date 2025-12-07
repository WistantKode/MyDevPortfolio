'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'I provide end-to-end development services: from UI/UX design and frontend development (React, Next.js) to robust backend architecture (Node.js, NestJS) and mobile apps (React Native). I can build your MVP, landing page, or complex SaaS platform.',
  },
  {
    question: 'What is your preferred Tech Stack?',
    answer:
      'My core stack includes React, Next.js, TypeScript, and Tailwind CSS for the frontend. For the backend, I use Node.js, NestJS, and PostgreSQL or MongoDB. I also have extensive experience with cloud services like AWS and Vercel.',
  },
  {
    question: 'How do you structure your pricing?',
    answer:
      'I offer both fixed-price quotes for well-defined projects and hourly rates for ongoing support or consultancy. I believe in transparent pricing with no hidden costs.',
  },
  {
    question: 'What is the typical timeline for a project?',
    answer:
      'Timelines vary based on complexity. A standard landing page might take 3-5 days, while a full MVP usually takes 2-4 weeks. I prioritize delivering high-quality code within agreed deadlines.',
  },
  {
    question: 'Do you provide support after launch?',
    answer:
      'Yes! I offer post-launch support and maintenance packages to ensure your application runs smoothly. I can also help with future feature updates and scaling.',
  },
];

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden py-24">
      {/* Decorative elements matching the theme */}
      <div className="bg-primary/10 absolute top-1/2 -right-20 z-[-1] h-64 w-64 rounded-full blur-3xl select-none pointer-events-none"></div>
      <div className="bg-primary/10 absolute top-1/2 -left-20 z-[-1] h-64 w-64 rounded-full blur-3xl select-none pointer-events-none"></div>
      
      <div className="z-10 container mx-auto px-4">
        <div className="flex justify-center">
          <div className="border-primary/40 text-primary bg-primary/5 inline-flex items-center gap-2 rounded-full border px-3 py-1 uppercase tracking-wider">
            <span className="text-xs font-bold">FAQ</span>
          </div>
        </div>
        <h2 className="mx-auto mt-6 max-w-xl text-center text-4xl font-bold md:text-5xl tracking-tighter text-foreground">
          Common{' '}
          <span className="bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-muted-foreground text-lg">
            Everything you need to know about working with me.
        </p>

        <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-4">
          {faqs.map((faq, faqIndex) => (
            <div
              key={faq.question}
              onClick={() =>
                selectedIndex === faqIndex
                  ? setSelectedIndex(-1)
                  : setSelectedIndex(faqIndex)
              }
              className={cn(
                "group cursor-pointer rounded-2xl border p-6 transition-all duration-300",
                selectedIndex === faqIndex 
                    ? "border-primary/50 bg-primary/5 shadow-lg shadow-primary/5" 
                    : "border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card"
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className={cn(
                    "m-0 font-medium text-lg transition-colors duration-300",
                    selectedIndex === faqIndex ? "text-primary" : "text-foreground"
                )}>
                    {faq.question}
                </h3>
                <Plus
                  size={24}
                  className={cn(
                    'text-primary flex-shrink-0 transition-transform duration-300',
                    selectedIndex === faqIndex && 'rotate-45',
                  )}
                />
              </div>

              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                      marginTop: 0,
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                      marginTop: 16,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      marginTop: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
