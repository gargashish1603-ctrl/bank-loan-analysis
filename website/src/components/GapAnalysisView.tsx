import React, { useState } from 'react';
import { Columns } from 'lucide-react';
import { GAP_ANALYSIS_DATA } from '../data/baData';

export const GapAnalysisView: React.FC = () => {
  const [selectedPriority, setSelectedPriority] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredGaps = GAP_ANALYSIS_DATA.filter((gap) => {
    const matchesPriority = selectedPriority === 'All' || gap.priority === selectedPriority;
    const matchesSearch = gap.dimension.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          gap.gap.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          gap.improvement.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPriority && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
          <Columns className="w-4 h-4" />
          <span>Operational Gap Assessment</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900">AS-IS vs. TO-BE Operational Gap Matrix</h2>
        <p className="mt-2 text-sm text-slate-600">
          Structured comparative evaluation of 12 critical operational gaps between current capabilities and future-state target operating model.
        </p>

        {/* Filter Toolbar */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-medium">Priority:</span>
            {['All', 'Must Have', 'Should Have'].map((p) => (
              <button
                key={p}
                onClick={() => setSelectedPriority(p)}
                className={`px-3 py-1 rounded-full font-medium transition-colors ${
                  selectedPriority === p
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <div className="w-full sm:w-64">
            <input
              type="text"
              placeholder="Search gaps or improvements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Gap Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
              <th className="p-3 font-bold w-20">ID</th>
              <th className="p-3 font-bold w-36">Process Dimension</th>
              <th className="p-3 font-bold text-red-700">AS-IS State</th>
              <th className="p-3 font-bold">Identified Gap & Impact</th>
              <th className="p-3 font-bold text-emerald-700">Proposed Improvement</th>
              <th className="p-3 font-bold w-24">Priority</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {filteredGaps.map((gap) => (
              <tr key={gap.id} className="hover:bg-slate-50 transition-colors">
                <td className="p-3 font-bold text-blue-600">{gap.id}</td>
                <td className="p-3 font-semibold text-slate-900">{gap.dimension}</td>
                <td className="p-3 bg-red-50/30 text-red-900">{gap.asIs}</td>
                <td className="p-3">
                  <span className="font-semibold text-slate-800 block">{gap.gap}</span>
                  <span className="text-[11px] text-red-600 mt-0.5 block">{gap.impact}</span>
                </td>
                <td className="p-3 bg-emerald-50/30 text-emerald-950 font-medium">{gap.improvement}</td>
                <td className="p-3">
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                    gap.priority === 'Must Have'
                      ? 'bg-red-100 text-red-800 border border-red-200'
                      : 'bg-amber-100 text-amber-800 border border-amber-200'
                  }`}>
                    {gap.priority}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
