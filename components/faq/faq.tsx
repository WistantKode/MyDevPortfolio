'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'I specialize in building modern web applications from scratch. This includes UI/UX design, frontend development with React/Next.js, and robust backend systems using NestJS. I focus on creating clean, useful, and scalable digital experiences.',
  },
  {
    question: 'What is your preferred Tech Stack?',
    answer:
      'My go-to stack is Next.js and React for the frontend, styled with Tailwind CSS for a premium look. For the backend, I rely on NestJS and Node.js to build modular and scalable architectures, often paired with PostgreSQL or MongoDB.',
  },
  {
    question: 'Do you handle UI/UX Design?',
    answer:
      'Yes! I have a strong vision for modern UI/UX. I prioritize simplicity, coherence, and attention to detail to ensure your users have an intuitive and enjoyable experience.',
  },
  {
    question: 'How do you structure your pricing?',
    answer:
      'I offer flexible options: fixed-price quotes for well-scoped projects (like MVPs or landing pages) and hourly rates for ongoing consultancy or complex feature development. Transparency is key—no hidden costs.',
  },
  {
    question: 'What is your typical timeline?',
    answer:
      'I work with a "fast & determined" energy. A standard landing page can be ready in a few days, while a full-stack MVP typically takes 2-4 weeks. I adapt quickly to project needs without compromising quality.',
  },
  {
    question: 'How do we communicate during the project?',
    answer:
      'I believe in a collaborative approach. We will have regular check-ins to track progress. I am honest, responsive, and always open to feedback to ensure we are building exactly what you envision.',
  },
];

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden pb-24">
      <div className="bg-primary/20 absolute top-1/2 -right-20 z-[-1] h-64 w-64 rounded-full opacity-80 blur-3xl select-none"></div>
      <div className="bg-primary/20 absolute top-1/2 -left-20 z-[-1] h-64 w-64 rounded-full opacity-80 blur-3xl select-none"></div>
      <div className="z-10 container">
        <div className="flex justify-center">
          <div className="border-primary/40 text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 uppercase">
            <span>✶</span>
            <span className="text-sm">Faqs</span>
          </div>
        </div>
        <h2 className="mx-auto mt-6 max-w-xl text-center text-4xl font-medium md:text-[54px] md:leading-[60px]">
          Questions? We&apos;ve got{' '}
          <span className="bg-primary from-foreground to-primary via-rose-200 bg-clip-text text-transparent dark:bg-gradient-to-b">
            answers
          </span>
        </h2>

        <div className="mx-auto mt-12 flex max-w-xl flex-col gap-6">
          {faqs.map((faq, faqIndex) => (
            <div
              key={faq.question}
              onClick={() =>
                selectedIndex === faqIndex
                  ? setSelectedIndex(-1)
                  : setSelectedIndex(faqIndex)
              }
              className="from-secondary/40 to-secondary/10 rounded-2xl border border-white/10 bg-gradient-to-b p-6 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset]"
            >
              <div className="flex items-start justify-between">
                <h3 className="m-0 font-medium">{faq.question}</h3>
                <Plus
                  size={30}
                  className={cn(
                    'text-primary flex-shrink-0 transition duration-300',
                    selectedIndex === faqIndex && 'rotate-45',
                  )}
                />
              </div>

              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{
                      height: 0,
                      marginTop: 0,
                    }}
                    animate={{
                      height: 'auto',
                      marginTop: 24,
                    }}
                    exit={{
                      height: 0,
                      marginTop: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-zinc-500">{faq.answer}</p>
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
