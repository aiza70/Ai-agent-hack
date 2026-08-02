import React from 'react';
import { FileText, Zap, Globe } from 'lucide-react';

export default function ActionCards() {
  const cards = [
    {
      title: 'Upload Resume (PDF)',
      subtitle: 'Analyze skills and experience automatically',
      icon: <FileText size={22} className="text-indigo-300" />,
      bg: 'bg-indigo-900/30 border-indigo-500/40 hover:border-indigo-400',
    },
    {
      title: 'Match by Key Skills',
      subtitle: 'e.g., React, Django, Python, TensorFlow',
      icon: <Zap size={22} className="text-purple-300" />,
      bg: 'bg-purple-900/30 border-purple-500/40 hover:border-purple-400',
    },
    {
      title: 'Find Remote / Hybrid',
      subtitle: 'International & National opportunities',
      icon: <Globe size={22} className="text-emerald-300" />,
      bg: 'bg-emerald-900/30 border-emerald-500/40 hover:border-emerald-400',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`p-5 rounded-2xl border transition-all cursor-pointer backdrop-blur-sm ${card.bg}`}
        >
          <div className="mb-3">{card.icon}</div>
          <h3 className="font-semibold text-slate-100 text-base">{card.title}</h3>
          <p className="text-xs text-slate-400 mt-1">{card.subtitle}</p>
        </div>
      ))}
    </div>
  );
}