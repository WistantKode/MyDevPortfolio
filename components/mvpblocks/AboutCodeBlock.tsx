"use client";

import { useState } from 'react';

export default function AboutCodeBlock() {
  const [copiedLeft, setCopiedLeft] = useState(false);
  const [copiedRight, setCopiedRight] = useState(false);

  const handleCopyLeft = () => {
    const codeText = `export const stack = {
  languages: ['TypeScript', 'Python', 'Rust'],
  frontend: ['Next.js 15', 'React 19', 'Tailwind', 'Framer Motion'],
  backend: ['NestJS', 'PostgreSQL', 'Redis', 'Docker'],
  devOps: ['CI/CD', 'AWS', 'Vercel'],
  focus: 'Building AI-powered apps'
};`;
    navigator.clipboard.writeText(codeText);
    setCopiedLeft(true);
    setTimeout(() => setCopiedLeft(false), 2000);
  };

  const handleCopyRight = () => {
    const codeText = `interface Developer {
  name: string;
  role: string;
  bio: string;
  stats: {
    experience: string;
    projects: number;
    coffee: string;
  };
  hireable: boolean;
}

const me: Developer = {
  name: 'Wistant Kode',
  role: 'Fullstack Engineer',
  bio: 'Crafting pixel-perfect web experiences.',
  stats: {
    experience: '5+ Years',
    projects: 50,
    coffee: 'Infinite ☕️'
  },
  hireable: true
};`;
    navigator.clipboard.writeText(codeText);
    setCopiedRight(true);
    setTimeout(() => setCopiedRight(false), 2000);
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 w-full max-w-7xl mx-auto">
      {/* Left Code Block - Tech Stack */}
      <div className="relative rounded-xl p-0.5">
        <div className="code-border-anim" />
        <div className="rounded-xl bg-[radial-gradient(at_88%_40%,#181925_0,transparent_85%),radial-gradient(at_49%_30%,#181925_0,transparent_85%),radial-gradient(at_14%_26%,#181925_0,transparent_85%),radial-gradient(at_0%_64%,hsl(var(--primary))_0,transparent_85%),radial-gradient(at_41%_94%,hsl(var(--primary))_0,transparent_85%),radial-gradient(at_100%_99%,#103a42_0,transparent_85%)] p-5 shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.25)_inset] h-full">
          <div className="flex items-center justify-between pb-3">
            <span className="text-sm font-semibold text-white">stack.ts</span>
            <button 
              onClick={handleCopyLeft}
              className="rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition hover:opacity-90"
            >
              {copiedLeft ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <pre className="m-0 overflow-x-auto rounded-lg bg-transparent p-0 text-sm leading-relaxed whitespace-pre text-blue-100">
            <code>
              <span className="text-primary">export const</span> <span className="text-[#ffd60a]">stack</span> = {'{'}<br />
              &nbsp;&nbsp;languages: [<span className="text-[#f7b731]">&apos;TypeScript&apos;</span>, <span className="text-[#f7b731]">&apos;Python&apos;</span>, <span className="text-[#f7b731]">&apos;Rust&apos;</span>],<br />
              &nbsp;&nbsp;frontend: [<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#f7b731]">&apos;Next.js 15&apos;</span>, <span className="text-[#f7b731]">&apos;React 19&apos;</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#f7b731]">&apos;Tailwind&apos;</span>, <span className="text-[#f7b731]">&apos;Framer Motion&apos;</span><br />
              &nbsp;&nbsp;],<br />
              &nbsp;&nbsp;backend: [<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#f7b731]">&apos;NestJS&apos;</span>, <span className="text-[#f7b731]">&apos;PostgreSQL&apos;</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#f7b731]">&apos;Redis&apos;</span>, <span className="text-[#f7b731]">&apos;Docker&apos;</span><br />
              &nbsp;&nbsp;],<br />
              &nbsp;&nbsp;devOps: [<span className="text-[#f7b731]">&apos;CI/CD&apos;</span>, <span className="text-[#f7b731]">&apos;AWS&apos;</span>, <span className="text-[#f7b731]">&apos;Vercel&apos;</span>],<br />
              &nbsp;&nbsp;focus: <span className="text-[#f7b731]">&apos;Building AI-powered apps&apos;</span><br />
              {'}'};
            </code>
          </pre>
        </div>
      </div>

      {/* Right Code Block - About Me (Solid TypeScript) */}
      <div className="relative rounded-xl p-0.5">
        <div className="code-border-anim" />
        <div className="rounded-xl bg-[radial-gradient(at_88%_40%,#181925_0,transparent_85%),radial-gradient(at_49%_30%,#181925_0,transparent_85%),radial-gradient(at_14%_26%,#181925_0,transparent_85%),radial-gradient(at_0%_64%,hsl(var(--primary))_0,transparent_85%),radial-gradient(at_41%_94%,hsl(var(--primary))_0,transparent_85%),radial-gradient(at_100%_99%,#103a42_0,transparent_85%)] p-5 shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.25)_inset] h-full">
          <div className="flex items-center justify-between pb-3">
            <span className="text-sm font-semibold text-white">profile.ts</span>
            <button 
              onClick={handleCopyRight}
              className="rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition hover:opacity-90"
            >
              {copiedRight ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <pre className="m-0 overflow-x-auto rounded-lg bg-transparent p-0 text-sm leading-relaxed whitespace-pre text-blue-100">
            <code>
              <span className="text-primary">interface</span> <span className="text-[#ffd60a]">Developer</span> {'{'}<br />
              &nbsp;&nbsp;name: <span className="text-primary">string</span>;<br />
              &nbsp;&nbsp;role: <span className="text-primary">string</span>;<br />
              &nbsp;&nbsp;bio: <span className="text-primary">string</span>;<br />
              &nbsp;&nbsp;stats: {'{'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;experience: <span className="text-primary">string</span>;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;projects: <span className="text-primary">number</span>;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;coffee: <span className="text-primary">string</span>;<br />
              &nbsp;&nbsp;{'}'};<br />
              &nbsp;&nbsp;hireable: <span className="text-primary">boolean</span>;<br />
              {'}'}<br />
              <br />
              <span className="text-primary">const</span> <span className="text-[#ffd60a]">me</span>: <span className="text-[#ffd60a]">Developer</span> = {'{'}<br />
              &nbsp;&nbsp;name: <span className="text-[#f7b731]">&apos;Wistant Kode&apos;</span>,<br />
              &nbsp;&nbsp;role: <span className="text-[#f7b731]">&apos;Fullstack Engineer&apos;</span>,<br />
              &nbsp;&nbsp;bio: <span className="text-[#f7b731]">&apos;Crafting pixel-perfect web experiences.&apos;</span>,<br />
              &nbsp;&nbsp;stats: {'{'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;experience: <span className="text-[#f7b731]">&apos;5+ Years&apos;</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;projects: <span className="text-[#f7b731]">50</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;coffee: <span className="text-[#f7b731]">&apos;Infinite ☕️&apos;</span><br />
              &nbsp;&nbsp;{'}'},<br />
              &nbsp;&nbsp;hireable: <span className="text-primary">true</span><br />
              {'}'};
            </code>
          </pre>
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
            hsl(var(--primary)) 40%,
            hsl(var(--primary)) 60%,
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
    </div>
  );
}
