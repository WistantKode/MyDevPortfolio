"use client";

import { useState } from 'react';

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
    passion: 'Building scalable solutions',
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

      <div className="grid grid-cols-3 gap-4">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3>{category}</h3>
            {items.map(item => <div key={item}>{item}</div>)}
          </div>
        ))}
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
        className="flip-card-container w-full max-w-6xl mx-auto"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
          {/* Front - Code */}
          <div className="flip-card-face flip-card-front">
            <div className="relative w-full rounded-xl p-0.5">
              <div className="code-border-anim" />
              <div className="rounded-xl bg-[radial-gradient(at_88%_40%,#181925_0,transparent_85%),radial-gradient(at_49%_30%,#181925_0,transparent_85%),radial-gradient(at_14%_26%,#181925_0,transparent_85%),radial-gradient(at_0%_64%,#015c6e_0,transparent_85%),radial-gradient(at_41%_94%,#00b7e9_0,transparent_85%),radial-gradient(at_100%_99%,#103a42_0,transparent_85%)] p-4 shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.25)_inset]">
                <div className="flex items-center justify-between pb-3">
                  <span className="text-sm font-semibold text-white">AboutWistant.tsx</span>
                  <button 
                    onClick={handleCopy}
                    className="rounded-full bg-[#1fcdfc] px-3 py-1.5 text-xs font-medium text-[#181925] transition hover:bg-[#00b7e9]"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="m-0 overflow-x-auto rounded-lg bg-transparent p-0 text-xs leading-snug whitespace-pre text-blue-100 max-h-[450px]">
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
                    &nbsp;&nbsp;&nbsp;&nbsp;frontend: [<span className="text-[#f7b731]">&apos;React&apos;</span>, <span className="text-[#f7b731]">&apos;Next.js&apos;</span>, <span className="text-[#f7b731]">&apos;TypeScript&apos;</span>],<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;backend: [<span className="text-[#f7b731]">&apos;NestJS&apos;</span>, <span className="text-[#f7b731]">&apos;Node.js&apos;</span>, <span className="text-[#f7b731]">&apos;PostgreSQL&apos;</span>],<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;tools: [<span className="text-[#f7b731]">&apos;Git&apos;</span>, <span className="text-[#f7b731]">&apos;Docker&apos;</span>, <span className="text-[#f7b731]">&apos;VSCode&apos;</span>],<br />
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
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ffd60a]">&lt;/div&gt;</span><br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ffd60a]">&lt;p</span>{' '}
                    <span className="text-[#36ffb1]">className</span>=<span className="text-[#f7b731]">&quot;text-green-500&quot;</span>
                    <span className="text-[#ffd60a]">&gt;</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅ Available for projects<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ffd60a]">&lt;/p&gt;</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ffd60a]">&lt;/div&gt;</span><br />
                    &nbsp;&nbsp; );<br />
                    {'}'};<br />
                    <br />
                    <span className="text-[#1fcdfc]">export</span>{' '}
                    <span className="text-[#1fcdfc]">default</span> AboutWistant;
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Back - Info */}
          <div className="flip-card-face flip-card-back">
            <div className="relative w-full h-full rounded-xl p-0.5">
              <div className="code-border-anim" />
              <div className="rounded-xl bg-gradient-to-br from-[#181925] via-[#015c6e] to-[#103a42] p-8 h-full flex items-center justify-center shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.25)_inset]">
                <div className="text-center space-y-6">
                  <h2 className="text-4xl font-bold text-white mb-4">
                    👋 Hi, I&apos;m Wistant!
                  </h2>
                  <p className="text-[#1fcdfc] text-lg">
                    Fullstack Developer specializing in building scalable web applications
                  </p>
                  <div className="grid grid-cols-3 gap-4 mt-6 text-white">
                    <div>
                      <div className="text-2xl font-bold text-[#1fcdfc]">5+</div>
                      <div className="text-sm">Years Exp</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#1fcdfc]">20+</div>
                      <div className="text-sm">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#1fcdfc]">✅</div>
                      <div className="text-sm">Available</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mt-6">
                    📍 Based in Yaoundé, Cameroon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .flip-card-container {
          perspective: 1500px;
          height: 500px;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
          transform-style: preserve-3d;
        }
        
        .flip-card-inner.flipped {
          transform: rotateY(180deg);
        }
        
        .flip-card-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
        }

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
