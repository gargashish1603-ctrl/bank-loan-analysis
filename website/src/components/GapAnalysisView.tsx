import React, { useState } from 'react';
import { SplitSquareVertical } from 'lucide-react';
import { GAP_ANALYSIS_DATA } from '../data/baData';

export const GapAnalysisView: React.FC = () => {
  const [priorityFilter, setPriorityFilter] = useState<string>('All');

  const filteredGaps = priorityFilter === 'All'
    ? GAP_ANALYSIS_DATA
    : GAP_ANALYSIS_DATA.filter((g) => g.priority === priorityFilter);

  return (
    <section id="gap-analysis" className="space-y-8">
      {/* Section Header */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
          <SplitSquareVertical className="w-4 h-4" />
          <span>Capability Assessment</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Gap Analysis (AS-IS vs. Desired TO-BE State)
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-4xl leading-relaxed">
              Scannable comparative matrix defining current operational baselines, diagnosed capability gaps, target desired states, and projected business value.
            </p>
          </div>

          {/* Priority Filter */}
          <div className="flex items-center gap-2 shrink-0 text-xs">
            <span className="text-slate-500 font-semibold">Priority:</span>
            {['All', 'Must Have', 'Should Have'].map((p) => (
              <button
                key={p}
                onClick={() => setPriorityFilter(p)}
                className={`px-3 py-1 rounded-full font-semibold transition-all ${
                  priorityFilter === p
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scannable 4-Column Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white font-bold text-[11px] uppercase tracking-wider">
                <th className="p-3.5 border-b border-slate-800">Operational Dimension</th>
                <th className="p-3.5 border-b border-slate-800 bg-red-950/40 text-red-200">Current State (AS-IS)</th>
                <th className="p-3.5 border-b border-slate-800 bg-amber-950/40 text-amber-200">Diagnosed Gap</th>
                <th className="p-3.5 border-b border-slate-800 bg-emerald-950/40 text-emerald-200">Desired State (TO-BE)</th>
                <th className="p-3.5 border-b border-slate-800">Business Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredGaps.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 font-bold text-slate-900">
                    <span className="text-[10px] text-blue-600 block uppercase tracking-wider">{item.id}</span>
                    {item.dimension}
                  </td>
                  <td className="p-3.5 text-slate-700 bg-red-50/30 leading-relaxed font-medium">
                    {item.asIs}
                  </td>
                  <td className="p-3.5 text-amber-900 bg-amber-50/30 leading-relaxed font-medium">
                    {item.gap}
                  </td>
                  <td className="p-3.5 text-emerald-900 bg-emerald-50/30 leading-relaxed font-semibold">
                    {item.toBe}
                  </td>
                  <td className="p-3.5 text-slate-600 leading-relaxed">
                    <span className="text-slate-800 font-semibold block mb-0.5">{item.impact}</span>
                    <span className="text-[10px] text-blue-600 font-medium">{item.improvement}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
