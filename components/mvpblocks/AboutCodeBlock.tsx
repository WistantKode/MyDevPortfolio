"use client";

import { useState } from 'react';

export default function AboutCodeBlock() {
  const [copiedLeft, setCopiedLeft] = useState(false);
  const [copiedRight, setCopiedRight] = useState(false);

  const handleCopyLeft = () => {
    const codeText = `const myJourney = [
  {
    year: 2019,
    milestone: 'Started coding',
    focus: 'HTML, CSS, JS'
  },
  {
    year: 2021,
    milestone: 'First Fullstack Role',
    stack: 'React & Node.js'
  },
  {
    year: 2023,
    milestone: 'Senior Developer',
    passion: 'Architecture & AI'
  },
  {
    current: true,
    goal: 'Building the future',
    status: 'Ready for new challenges'
  }
];`;
    navigator.clipboard.writeText(codeText);
    setCopiedLeft(true);
    setTimeout(() => setCopiedLeft(false), 2000);
  };

  const handleCopyRight = () => {
    const codeText = `const aboutMe = {
  identity: 'Wistant Kode',
  type: 'Creative Technologist',
  mission: 'Turning complex problems into elegant solutions.',
  philosophy: [
    'Clean Code',
    'User-Centric Design',
    'Continuous Learning'
  ],
  loves: ['Open Source', 'Coffee ☕️', 'Innovation'],
  invite: 'Let\\'s build something amazing together!'
};`;
    navigator.clipboard.writeText(codeText);
    setCopiedRight(true);
    setTimeout(() => setCopiedRight(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-7xl mx-auto px-2 md:px-0">
      {/* Left Code Block - Journey */}
      <div className="relative rounded-xl p-0.5 h-full">
        <div className="code-border-anim" />
        <div className="rounded-xl bg-[radial-gradient(at_88%_40%,#181925_0,transparent_85%),radial-gradient(at_49%_30%,#181925_0,transparent_85%),radial-gradient(at_14%_26%,#181925_0,transparent_85%),radial-gradient(at_0%_64%,hsl(var(--primary))_0,transparent_85%),radial-gradient(at_41%_94%,hsl(var(--primary))_0,transparent_85%),radial-gradient(at_100%_99%,#103a42_0,transparent_85%)] p-4 md:p-6 shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.25)_inset] h-full flex flex-col">
          <div className="flex items-center justify-between pb-4">
            <span className="text-sm font-semibold text-white font-mono">journey.ts</span>
            <button 
              onClick={handleCopyLeft}
              className="rounded-full bg-primary/20 border border-primary/50 px-3 py-1 text-[10px] md:text-xs font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {copiedLeft ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className="flex-grow overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm border border-white/5">
            <pre className="m-0 overflow-x-auto p-4 text-[10px] md:text-xs lg:text-sm leading-relaxed font-mono text-blue-100 h-full">
              <code>
                <span className="text-primary">const</span> <span className="text-[#ffd60a]">myJourney</span> = [<br />
                &nbsp;&nbsp;{'{'}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;year: <span className="text-[#f7b731]">2019</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;milestone: <span className="text-[#a5d6ff]">&apos;Started coding&apos;</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;focus: <span className="text-[#a5d6ff]">&apos;HTML, CSS, JS&apos;</span><br />
                &nbsp;&nbsp;{'}'},<br />
                &nbsp;&nbsp;{'{'}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;year: <span className="text-[#f7b731]">2021</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;milestone: <span className="text-[#a5d6ff]">&apos;First Fullstack Role&apos;</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;stack: <span className="text-[#a5d6ff]">&apos;React & Node.js&apos;</span><br />
                &nbsp;&nbsp;{'}'},<br />
                &nbsp;&nbsp;{'{'}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;year: <span className="text-[#f7b731]">2023</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;milestone: <span className="text-[#a5d6ff]">&apos;Senior Developer&apos;</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;passion: <span className="text-[#a5d6ff]">&apos;Architecture & AI&apos;</span><br />
                &nbsp;&nbsp;{'}'},<br />
                &nbsp;&nbsp;{'{'}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;current: <span className="text-primary">true</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;goal: <span className="text-[#a5d6ff]">&apos;Building the future&apos;</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;status: <span className="text-[#a5d6ff]">&apos;Ready for new challenges&apos;</span><br />
                &nbsp;&nbsp;{'}'}<br />
                ];
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Right Code Block - About Me Narrative */}
      <div className="relative rounded-xl p-0.5 h-full">
        <div className="code-border-anim" />
        <div className="rounded-xl bg-[radial-gradient(at_88%_40%,#181925_0,transparent_85%),radial-gradient(at_49%_30%,#181925_0,transparent_85%),radial-gradient(at_14%_26%,#181925_0,transparent_85%),radial-gradient(at_0%_64%,hsl(var(--primary))_0,transparent_85%),radial-gradient(at_41%_94%,hsl(var(--primary))_0,transparent_85%),radial-gradient(at_100%_99%,#103a42_0,transparent_85%)] p-4 md:p-6 shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.25)_inset] h-full flex flex-col">
          <div className="flex items-center justify-between pb-4">
            <span className="text-sm font-semibold text-white font-mono">about.ts</span>
            <button 
              onClick={handleCopyRight}
              className="rounded-full bg-primary/20 border border-primary/50 px-3 py-1 text-[10px] md:text-xs font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {copiedRight ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className="flex-grow overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm border border-white/5">
            <pre className="m-0 overflow-x-auto p-4 text-[10px] md:text-xs lg:text-sm leading-relaxed font-mono text-blue-100 h-full">
              <code>
                <span className="text-primary">const</span> <span className="text-[#ffd60a]">aboutMe</span> = {'{'}<br />
                &nbsp;&nbsp;identity: <span className="text-[#a5d6ff]">&apos;Wistant Kode&apos;</span>,<br />
                &nbsp;&nbsp;type: <span className="text-[#a5d6ff]">&apos;Creative Technologist&apos;</span>,<br />
                &nbsp;&nbsp;mission: <span className="text-[#a5d6ff]">&apos;Turning complex problems into elegant solutions.&apos;</span>,<br />
                &nbsp;&nbsp;philosophy: [<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a5d6ff]">&apos;Clean Code&apos;</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a5d6ff]">&apos;User-Centric Design&apos;</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a5d6ff]">&apos;Continuous Learning&apos;</span><br />
                &nbsp;&nbsp;],<br />
                &nbsp;&nbsp;loves: [<span className="text-[#a5d6ff]">&apos;Open Source&apos;</span>, <span className="text-[#a5d6ff]">&apos;Coffee ☕️&apos;</span>, <span className="text-[#a5d6ff]">&apos;Innovation&apos;</span>],<br />
                &nbsp;&nbsp;invite: <span className="text-[#a5d6ff]">&apos;Let&apos;s build something amazing together!&apos;</span><br />
                {'}'};
              </code>
            </pre>
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
