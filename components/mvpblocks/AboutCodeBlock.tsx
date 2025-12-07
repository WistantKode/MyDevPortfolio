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
  status: 'Available',
  passion: 'Building scalable solutions'
};

console.log(developer);`;

    navigator.clipboard.writeText(codeText);
    setCopiedLeft(true);
    setTimeout(() => setCopiedLeft(false), 2000);
  };

  const handleCopyRight = () => {
    const codeText = `const skills = {
  frontend: [
    'React',
    'Next.js', 
    'TypeScript',
    'Tailwind CSS'
  ],
  backend: [
    'NestJS',
    'Node.js',
    'PostgreSQL',
    'Prisma ORM'
  ],
  tools: [
    'Git',
    'Docker',
    'VSCode',
    'Linux'
  ]
};

export default skills;`;

    navigator.clipboard.writeText(codeText);
    setCopiedRight(true);
    setTimeout(() => setCopiedRight(false), 2000);
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 w-full max-w-7xl mx-auto">
      {/* Left Code Block - Developer Info */}
      <div className="relative rounded-2xl p-0.5 bg-gradient-to-br from-primary via-green-500 to-emerald-400 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
        <div className="rounded-2xl bg-black p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-bold text-primary">developer.js</span>
            <button 
              onClick={handleCopyLeft}
              className="px-3 py-1.5 text-xs font-medium bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-all border border-primary/30"
            >
              {copiedLeft ? '✓ Copied!' : 'Copy'}
            </button>
          </div>
          <pre className="text-xs leading-relaxed text-gray-300 overflow-x-auto">
            <code>
              <span className="text-green-400">const</span> <span className="text-emerald-300">developer</span> = {'{'}<br />
              &nbsp;&nbsp;name: <span className="text-yellow-300">&apos;Wistant Kode&apos;</span>,<br />
              &nbsp;&nbsp;role: <span className="text-yellow-300">&apos;Fullstack Developer&apos;</span>,<br />
              &nbsp;&nbsp;experience: <span className="text-yellow-300">&apos;5+ years&apos;</span>,<br />
              &nbsp;&nbsp;location: <span className="text-yellow-300">&apos;Yaoundé, Cameroon&apos;</span>,<br />
              &nbsp;&nbsp;status: <span className="text-green-400 font-bold">&apos;Available&apos;</span>,<br />
              &nbsp;&nbsp;passion: <span className="text-yellow-300">&apos;Building scalable solutions&apos;</span><br />
              {'}'};<br />
              <br />
              <span className="text-purple-400">console</span>.<span className="text-blue-400">log</span>(<span className="text-emerald-300">developer</span>);
            </code>
          </pre>
          
          {/* Fluor Bottom Indicator */}
          <div className="mt-4 h-1 w-full bg-gradient-to-r from-primary via-green-400 to-emerald-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
        </div>
      </div>

      {/* Right Code Block - Skills */}
      <div className="relative rounded-2xl p-0.5 bg-gradient-to-br from-emerald-400 via-green-500 to-primary shadow-[0_0_30px_rgba(34,197,94,0.3)]">
        <div className="rounded-2xl bg-black p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-bold text-primary">skills.js</span>
            <button 
              onClick={handleCopyRight}
              className="px-3 py-1.5 text-xs font-medium bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-all border border-primary/30"
            >
              {copiedRight ? '✓ Copied!' : 'Copy'}
            </button>
          </div>
          <pre className="text-xs leading-relaxed text-gray-300 overflow-x-auto">
            <code>
              <span className="text-green-400">const</span> <span className="text-emerald-300">skills</span> = {'{'}<br />
              &nbsp;&nbsp;frontend: [<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">&apos;React&apos;</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">&apos;Next.js&apos;</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">&apos;TypeScript&apos;</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">&apos;Tailwind CSS&apos;</span><br />
              &nbsp;&nbsp;],<br />
              &nbsp;&nbsp;backend: [<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">&apos;NestJS&apos;</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">&apos;Node.js&apos;</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">&apos;PostgreSQL&apos;</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">&apos;Prisma ORM&apos;</span><br />
              &nbsp;&nbsp;],<br />
              &nbsp;&nbsp;tools: [<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">&apos;Git&apos;</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">&apos;Docker&apos;</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">&apos;VSCode&apos;</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">&apos;Linux&apos;</span><br />
              &nbsp;&nbsp;]<br />
              {'}'};<br />
              <br />
              <span className="text-green-400">export default</span> <span className="text-emerald-300">skills</span>;
            </code>
          </pre>
          
          {/* Fluor Bottom Indicator */}
          <div className="mt-4 h-1 w-full bg-gradient-to-r from-emerald-500 via-green-400 to-primary rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
        </div>
      </div>
    </div>
  );
}
