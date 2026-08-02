import React, { useState } from 'react';
import { Plus, Settings, User, Menu } from 'lucide-react';

export default function Sidebar() {
  const [filters, setFilters] = useState({
    beginner: true,
    remote: true,
    hybrid: false,
    inPerson: false,
  });

  const toggleFilter = (key) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside className="w-64 bg-[#1a1f2c] text-slate-300 flex flex-col justify-between p-4 border-r border-slate-800 h-screen sticky top-0">
      <div className="space-y-6">
        {/* Header / Menu */}
        <div className="flex items-center gap-3 text-slate-100">
          <button className="p-1 hover:bg-slate-800 rounded-lg transition">
            <Menu size={20} />
          </button>
        </div>

        {/* New Match Button */}
        <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-indigo-600/20">
          <Plus size={18} />
          <span>New Match</span>
        </button>

        {/* Recent Searches */}
        <div>
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Recent Searches
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-slate-100 cursor-pointer flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span> Django + React
            </li>
            <li className="hover:text-slate-100 cursor-pointer flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span> Python Remote
            </li>
            <li className="hover:text-slate-100 cursor-pointer flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span> ML/AI Global
            </li>
          </ul>
        </div>

        {/* Filters */}
        <div>
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Filters
          </h3>
          <div className="space-y-3 text-sm">
            {[
              { id: 'beginner', label: 'Beginner Friendly' },
              { id: 'remote', label: 'Remote' },
              { id: 'hybrid', label: 'Hybrid' },
              { id: 'inPerson', label: 'In-Person' },
            ].map((item) => (
              <label key={item.id} className="flex items-center justify-between cursor-pointer">
                <span>{item.label}</span>
                <input
                  type="checkbox"
                  checked={filters[item.id]}
                  onChange={() => toggleFilter(item.id)}
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 relative"></div>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Controls */}
      <div className="space-y-2 pt-4 border-t border-slate-800/60">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-300 text-sm transition">
          <Settings size={18} />
          <span>Settings</span>
        </button>
        <div className="flex items-center gap-3 px-3 py-2 text-slate-300 text-sm">
          <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center font-bold text-xs text-indigo-400">
            A
          </div>
          <span className="font-medium">Aiza's Account</span>
        </div>
      </div>
    </aside>
  );
}