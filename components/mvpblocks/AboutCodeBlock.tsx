"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function AboutCodeBlock() {
  const [copied, setCopied] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCopy = () => {
    const codeText = `import React from 'react';

const AboutWistant = () => {
  const developer = {
    name: 'Wistant Kode',
    title: 'Fullstack Developer',
    experience: '5+ years',
    location: 'Yaoundé, Cameroon',
  };

  const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    backend: ['NestJS', 'Node.js', 'PostgreSQL', 'Prisma'],
    tools: ['Git', 'Docker', 'VSCode', 'Linux'],
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1>{developer.name}</h1>
        <p>{developer.title} • {developer.experience}</p>
        <span>📍 {developer.location}</span>
      </div>
      <p className="text-green-500">
        ✅ Available for projects
      </p>
    </div>
  );
};

export default AboutWistant;`;

    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div
        className="group relative h-[520px] w-full max-w-6xl mx-auto [perspective:2000px]"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div
          className={cn(
            'relative h-full w-full',
            '[transform-style:preserve-3d]',
            'transition-all duration-700',
            isFlipped
              ? '[transform:rotateY(180deg)]'
              : '[transform:rotateY(0deg)]',
          )}
        >
          {/* Front - Code Block */}
          <div
            className={cn(
              'absolute inset-0 h-full w-full',
              '[transform:rotateY(0deg)] [backface-visibility:hidden]',
              'overflow-hidden rounded-2xl',
              isFlipped ? 'opacity-0' : 'opacity-100',
            )}
          >
            <div className="relative w-full h-full rounded-xl p-0.5">
              <div className="code-border-anim" />
              <div className="h-full rounded-xl bg-[radial-gradient(at_88%_40%,#181925_0,transparent_85%),radial-gradient(at_49%_30%,#181925_0,transparent_85%),radial-gradient(at_14%_26%,#181925_0,transparent_85%),radial-gradient(at_0%_64%,#015c6e_0,transparent_85%),radial-gradient(at_41%_94%,#00b7e9_0,transparent_85%),radial-gradient(at_100%_99%,#103a42_0,transparent_85%)] p-4 shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.25)_inset]">
                <div className="flex items-center justify-between pb-3">
                  <span className="text-sm font-semibold text-white">AboutWistant.tsx</span>
                  <button 
                    onClick={handleCopy}
                    className="rounded-full bg-[#1fcdfc] px-3 py-1.5 text-xs font-medium text-[#181925] transition hover:bg-[#00b7e9] z-10"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="m-0 overflow-y-auto rounded-lg bg-transparent p-0 text-xs leading-snug whitespace-pre text-blue-100 max-h-[450px]">
                  <code>
                    <span className="text-[#1fcdfc]">import</span>{' '}
                    <span className="text-[#e0e0e0]">React</span>{' '}
                    <span className="text-[#1fcdfc]">from</span>{' '}
                    <span className="text-[#f7b731]">&apos;react&apos;</span>;<br />
                    <br />
                    <span className="text-[#1fcdfc]">const</span>{' '}
                    <span className="text-[#ffd60a]">AboutWistant</span> = () =&gt; {'{'}<br />
                    &nbsp;&nbsp;<span className="text-[#1fcdfc]">const</span> developer = {'{'}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;name: <span className="text-[#f7b731]">&apos;Wistant Kode&apos;</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;title: <span className="text-[#f7b731]">&apos;Fullstack Developer&apos;</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;experience: <span className="text-[#f7b731]">&apos;5+ years&apos;</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;location: <span className="text-[#f7b731]">&apos;Yaoundé, Cameroon&apos;</span>,<br />
                    &nbsp;&nbsp;{'}'};<br />
                    <br />
                    &nbsp;&nbsp;<span className="text-[#1fcdfc]">const</span> skills = {'{'}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;frontend: [<span className="text-[#f7b731]">&apos;React&apos;</span>, <span className="text-[#f7b731]">&apos;Next.js&apos;</span>, <span className="text-[#f7b731]">&apos;TypeScript&apos;</span>, <span className="text-[#f7b731]">&apos;Tailwind&apos;</span>],<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;backend: [<span className="text-[#f7b731]">&apos;NestJS&apos;</span>, <span className="text-[#f7b731]">&apos;Node.js&apos;</span>, <span className="text-[#f7b731]">&apos;PostgreSQL&apos;</span>, <span className="text-[#f7b731]">&apos;Prisma&apos;</span>],<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;tools: [<span className="text-[#f7b731]">&apos;Git&apos;</span>, <span className="text-[#f7b731]">&apos;Docker&apos;</span>, <span className="text-[#f7b731]">&apos;VSCode&apos;</span>, <span className="text-[#f7b731]">&apos;Linux&apos;</span>],<br />
                    &nbsp;&nbsp;{'}'};<br />
                    <br />
                    &nbsp;&nbsp;<span className="text-[#1fcdfc]">return</span> (<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ffd60a]">&lt;div</span>{' '}
                    <span className="text-[#36ffb1]">className</span>=<span className="text-[#f7b731]">&quot;space-y-6&quot;</span>
                    <span className="text-[#ffd60a]">&gt;</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ffd60a]">&lt;div</span>{' '}
                    <span className="text-[#36ffb1]">className</span>=<span className="text-[#f7b731]">&quot;text-center&quot;</span>
                    <span className="text-[#ffd60a]">&gt;</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ffd60a]">&lt;h1&gt;</span>
                    {'{'}developer.name{'}'}
                    <span className="text-[#ffd60a]">&lt;/h1&gt;</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ffd60a]">&lt;p&gt;</span>
                    {'{'}developer.title{'}'} • {'{'}developer.experience{'}'}
                    <span className="text-[#ffd60a]">&lt;/p&gt;</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ffd60a]">&lt;span&gt;</span>
                    📍 {'{'}developer.location{'}'}
                    <span className="text-[#ffd60a]">&lt;/span&gt;</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ffd60a]">&lt;/div&gt;</span><br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ffd60a]">&lt;p</span>{' '}
                    <span className="text-[#36ffb1]">className</span>=<span className="text-[#f7b731]">&quot;text-green-500&quot;</span>
                    <span className="text-[#ffd60a]">&gt;</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅ Available for projects<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ffd60a]">&lt;/p&gt;</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ffd60a]">&lt;/div&gt;</span><br />
                    &nbsp;&nbsp;);<br />
                    {'}'};<br />
                    <br />
                    <span className="text-[#1fcdfc]">export</span>{' '}
                    <span className="text-[#1fcdfc]">default</span> AboutWistant;
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Back - Personal Info */}
          <div
            className={cn(
              'absolute inset-0 h-full w-full',
              '[transform:rotateY(180deg)] [backface-visibility:hidden]',
              'rounded-2xl p-8',
              'bg-gradient-to-br from-white via-slate-50 to-slate-100',
              'dark:from-zinc-900 dark:via-zinc-900/95 dark:to-zinc-800',
              'border border-slate-200 dark:border-zinc-800',
              'shadow-lg dark:shadow-xl',
              'flex flex-col justify-center',
              !isFlipped ? 'opacity-0' : 'opacity-100',
            )}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10" />

            <div className="relative z-10 text-center space-y-6">
              <div
                style={{
                  opacity: isFlipped ? 1 : 0,
                  transform: isFlipped ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'all 0.5s 0.2s',
                }}
              >
                <h2 className="text-5xl font-bold text-zinc-900 dark:text-white mb-3">
                  👋 Hi, I&apos;m Wistant!
                </h2>
                <p className="text-xl text-primary font-semibold">
                  Fullstack Developer
                </p>
              </div>

              <div 
                className="grid grid-cols-3 gap-6 py-6"
                style={{
                  opacity: isFlipped ? 1 : 0,
                  transform: isFlipped ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'all 0.5s 0.3s',
                }}
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">Years Exp</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-500 mb-1">✅</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">Available</div>
                </div>
              </div>

              <div
                style={{
                  opacity: isFlipped ? 1 : 0,
                  transform: isFlipped ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'all 0.5s 0.4s',
                }}
              >
                <p className="text-zinc-700 dark:text-zinc-300 text-base">
                  Specializing in building <span className="font-semibold text-primary">scalable web applications</span>
                  <br />with modern technologies
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-4">
                  📍 Based in Yaoundé, Cameroon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .code-border-anim {
          position: absolute;
          z-index: -10;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: calc(100% + 2px);
          height: calc(100% + 2px);
          border-radius: 1rem;
          overflow: hidden;
          pointer-events: none;
        }
        .code-border-anim::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200%;
          height: 10rem;
          background: linear-gradient(
            0deg,
            hsla(0,0%,100%,0) 0%,
            hsl(189,100%,50%) 40%,
            hsl(189,100%,50%) 60%,
            hsla(0,0%,40%,0) 100%
          );
          transform: translate(-50%, -50%) rotate(0deg);
          transform-origin: left;
          animation: border-rotate 8s linear infinite;
          z-index: 2;
          pointer-events: none;
        }
        @keyframes border-rotate {
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}
