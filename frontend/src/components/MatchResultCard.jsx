import React from 'react';
import { Calendar, DollarSign, Award, Target, HelpCircle } from 'lucide-react';

export default function MatchResultCard({ match }) {
  const { title, matchPercentage, locationType, dates, prizePool, isBeginnerFriendly, fitReason, skillGap } = match;

  return (
    <div className="bg-[#181d2e] border border-slate-800 rounded-xl p-5 mb-4 hover:border-indigo-500/50 transition-all">
      {/* Header Info */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="flex items-center gap-2">
          <span className="bg-emerald-500/10 text-emerald-400 font-semibold px-3 py-1 rounded-full text-xs border border-emerald-500/20">
            {matchPercentage}% Match
          </span>
          <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs">
            {locationType}
          </span>
        </div>
      </div>

      {/* Tags Row */}
      <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
        <span className="flex items-center gap-1"><Calendar size={14} /> {dates}</span>
        <span className="flex items-center gap-1"><DollarSign size={14} /> {prizePool} Prize Pool</span>
        {isBeginnerFriendly && (
          <span className="text-emerald-400 flex items-center gap-1 font-medium">
            <Award size={14} /> Beginner Friendly
          </span>
        )}
      </div>

      {/* Rationale & Skill Gap */}
      <div className="space-y-2 text-sm bg-[#0f1420] p-3 rounded-lg border border-slate-800/60">
        <div className="flex items-start gap-2 text-slate-300">
          <HelpCircle size={16} className="text-amber-400 shrink-0 mt-0.5" />
          <p><strong className="text-amber-400">Why it fits:</strong> {fitReason}</p>
        </div>
        <div className="flex items-start gap-2 text-slate-300">
          <Target size={16} className="text-rose-400 shrink-0 mt-0.5" />
          <p><strong className="text-rose-400">Skill Gap:</strong> {skillGap}</p>
        </div>
      </div>
    </div>
  );
}