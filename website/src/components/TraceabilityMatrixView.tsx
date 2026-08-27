import React, { useState } from 'react';
import { Network, Search, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { TRACEABILITY_MATRIX, TraceabilityRow } from '../data/baData';

export const TraceabilityMatrixView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredMatrix = TRACEABILITY_MATRIX.filter((row) => {
    const q = searchQuery.toLowerCase();
    return (
      row.problem.toLowerCase().includes(q) ||
      row.rootCause.toLowerCase().includes(q) ||
      row.solution.toLowerCase().includes(q) ||
      row.kpi.toLowerCase().includes(q) ||
      row.brId.toLowerCase().includes(q) ||
      row.frId.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
          <Network className="w-4 h-4" />
          <span>Core BA Deliverable</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Requirements Traceability Matrix (RTM)</h2>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          Unbroken bi-directional traceability connecting every identified <strong className="text-slate-900">Business Problem</strong> to its diagnosed <strong className="text-slate-900">Root Cause</strong>, corresponding <strong className="text-slate-900">Business & Functional Requirements</strong>, engineered <strong className="text-slate-900">Solution</strong>, and targeted <strong className="text-slate-900">KPI Impact</strong>.
        </p>

        {/* Search */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Displaying {filteredMatrix.length} Traceable Problem-Solution Chains
          </span>
          <div className="w-full sm:w-72">
            <input
              type="text"
              placeholder="Search problem, requirement ID, or KPI..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* RTM Visual Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-200 text-slate-800">
              <th className="p-3 font-bold w-48 text-red-700">Business Problem</th>
              <th className="p-3 font-bold w-48">Root Cause Diagnosed</th>
              <th className="p-3 font-bold w-28 text-blue-700">Req IDs (BR / FR)</th>
              <th className="p-3 font-bold w-28 text-purple-700">User Story</th>
              <th className="p-3 font-bold text-emerald-700">Engineered TO-BE Solution</th>
              <th className="p-3 font-bold w-48 text-slate-900">Targeted KPI Impact</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {filteredMatrix.map((row) => (
              <tr key={row.problemId} className="hover:bg-slate-50 transition-colors">
                {/* Problem */}
                <td className="p-3 font-bold text-slate-900 bg-red-50/20">
                  <span className="text-[10px] text-red-600 block">{row.problemId}</span>
                  <span>{row.problem}</span>
                </td>

                {/* Root Cause */}
                <td className="p-3 text-slate-600 text-[11px]">
                  {row.rootCause}
                </td>

                {/* BR & FR IDs */}
                <td className="p-3">
                  <span className="px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 font-mono text-[10px] block mb-1 font-bold">
                    {row.brId}
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono text-[10px] block font-bold">
                    {row.frId}
                  </span>
                </td>

                {/* User Story */}
                <td className="p-3 font-mono text-[10px] text-purple-800 font-bold">
                  {row.usId}
                </td>

                {/* Solution */}
                <td className="p-3 font-semibold text-emerald-900 bg-emerald-50/20">
                  {row.solution}
                </td>

                {/* KPI */}
                <td className="p-3 bg-slate-50/60">
                  <span className="font-bold text-slate-900 block text-xs">{row.kpi}</span>
                  <span className="text-[11px] text-emerald-600 font-bold block mt-0.5">{row.targetImpact}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Traceability Callout Card */}
      <div className="p-5 rounded-xl bg-gradient-to-r from-blue-900 to-slate-900 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-blue-300 uppercase tracking-wider block mb-1">
            Methodology Principle: Unbroken Bi-Directional Traceability
          </span>
          <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
            Every software feature and process change directly resolves an identified root cause, is justified by an executive business requirement, and is measured by a quantifiable operational KPI.
          </p>
        </div>
        <div className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold shrink-0">
          100% Traceability Verified
        </div>
      </div>
    </div>
  );
};
