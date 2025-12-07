"use client";

import { useState } from 'react';

export default function AboutCodeBlock() {
  const [copiedLeft, setCopiedLeft] = useState(false);
  const [copiedRight, setCopiedRight] = useState(false);

  const handleCopyLeft = () => {
    const codeText = `const developer = {
  name: 'Wistant Kode',
  role: 'Fullstack Developer',
  experience: '5+ years',
  location: 'Yaoundé, Cameroon',
  status: 'Available'
};`;
    navigator.clipboard.writeText(codeText);
    setCopiedLeft(true);
    setTimeout(() => setCopiedLeft(false), 2000);
  };

  const handleCopyRight = () => {
    const codeText = `const skills = {
  frontend: ['React', 'Next.js', 'TypeScript'],
  backend: ['NestJS', 'Node.js', 'PostgreSQL'],
  tools: ['Git', 'Docker', 'VSCode']
};`;
    navigator.clipboard.writeText(codeText);
    setCopiedRight(true);
    setTimeout(() => setCopiedRight(false), 2000);
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 w-full max-w-7xl mx-auto">
      {/* Left Code Block */}
      <div className="relative rounded-xl p-0.5">
        <div className="code-border-anim" />
        <div className="rounded-xl bg-[radial-gradient(at_88%_40%,#181925_0,transparent_85%),radial-gradient(at_49%_30%,#181925_0,transparent_85%),radial-gradient(at_14%_26%,#181925_0,transparent_85%),radial-gradient(at_0%_64%,hsl(var(--primary))_0,transparent_85%),radial-gradient(at_41%_94%,hsl(var(--primary))_0,transparent_85%),radial-gradient(at_100%_99%,#103a42_0,transparent_85%)] p-5 shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.25)_inset]">
          <div className="flex items-center justify-between pb-3">
            <span className="text-sm font-semibold text-white">developer.js</span>
            <button 
              onClick={handleCopyLeft}
              className="rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition hover:opacity-90"
            >
              {copiedLeft ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <pre className="m-0 overflow-x-auto rounded-lg bg-transparent p-0 text-sm leading-relaxed whitespace-pre text-blue-100">
            <code>
              <span className="text-primary">const</span>{' '}
              <span className="text-[#ffd60a]">developer</span> = {'{'}<br />
              &nbsp;&nbsp;name: <span className="text-[#f7b731]">&apos;Wistant Kode&apos;</span>,<br />
              &nbsp;&nbsp;role: <span className="text-[#f7b731]">&apos;Fullstack Developer&apos;</span>,<br />
              &nbsp;&nbsp;experience: <span className="text-[#f7b731]">&apos;5+ years&apos;</span>,<br />
              &nbsp;&nbsp;location: <span className="text-[#f7b731]">&apos;Yaoundé, Cameroon&apos;</span>,<br />
              &nbsp;&nbsp;status: <span className="text-primary">&apos;Available&apos;</span><br />
              {'}'};<br />
            </code>
          </pre>
        </div>
      </div>

      {/* Right Code Block */}
      <div className="relative rounded-xl p-0.5">
        <div className="code-border-anim" />
        <div className="rounded-xl bg-[radial-gradient(at_88%_40%,#181925_0,transparent_85%),radial-gradient(at_49%_30%,#181925_0,transparent_85%),radial-gradient(at_14%_26%,#181925_0,transparent_85%),radial-gradient(at_0%_64%,hsl(var(--primary))_0,transparent_85%),radial-gradient(at_41%_94%,hsl(var(--primary))_0,transparent_85%),radial-gradient(at_100%_99%,#103a42_0,transparent_85%)] p-5 shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.25)_inset]">
          <div className="flex items-center justify-between pb-3">
            <span className="text-sm font-semibold text-white">skills.js</span>
            <button 
              onClick={handleCopyRight}
              className="rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition hover:opacity-90"
            >
              {copiedRight ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <pre className="m-0 overflow-x-auto rounded-lg bg-transparent p-0 text-sm leading-relaxed whitespace-pre text-blue-100">
            <code>
              <span className="text-primary">const</span>{' '}
              <span className="text-[#ffd60a]">skills</span> = {'{'}<br />
              &nbsp;&nbsp;frontend: [<span className="text-[#f7b731]">&apos;React&apos;</span>, <span className="text-[#f7b731]">&apos;Next.js&apos;</span>, <span className="text-[#f7b731]">&apos;TypeScript&apos;</span>],<br />
              &nbsp;&nbsp;backend: [<span className="text-[#f7b731]">&apos;NestJS&apos;</span>, <span className="text-[#f7b731]">&apos;Node.js&apos;</span>, <span className="text-[#f7b731]">&apos;PostgreSQL&apos;</span>],<br />
              &nbsp;&nbsp;tools: [<span className="text-[#f7b731]">&apos;Git&apos;</span>, <span className="text-[#f7b731]">&apos;Docker&apos;</span>, <span className="text-[#f7b731]">&apos;VSCode&apos;</span>]<br />
              {'}'};<br />
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
