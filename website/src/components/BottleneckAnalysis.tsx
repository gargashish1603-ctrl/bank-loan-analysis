import React from 'react';
import { AlertOctagon } from 'lucide-react';
import { BOTTLENECKS_RANKED } from '../data/baData';

export const BottleneckAnalysis: React.FC = () => {
  const metricCards = [
    { value: '35%', label: 'Document Rework Rate', note: '3,500 apps/mo require secondary uploads', color: 'border-red-200 bg-red-50/50 text-red-900' },
    { value: '18%', label: 'Additional Information Requests', note: '1,800 apps held in pending status', color: 'border-amber-200 bg-amber-50/50 text-amber-900' },
    { value: '22%', label: 'Manual Handoff Delays', note: 'Handoff drag between CRM, LOS & Core', color: 'border-blue-200 bg-blue-50/50 text-blue-900' },
    { value: '14%', label: 'SLA Breach Rate', note: '1,400 loans exceed 5-day SLA limits', color: 'border-purple-200 bg-purple-50/50 text-purple-900' },
  ];

  return (
    <section id="bottlenecks" className="space-y-8">
      {/* Section Header */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">
          <AlertOctagon className="w-4 h-4" />
          <span>Friction Diagnostics</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Bottleneck Analysis & Ranked Friction Points
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-4xl leading-relaxed">
          Quantitative diagnosis of operational failure points across the origination lifecycle, measuring failure rates, idle latency drag, and root causes.
        </p>
      </div>

      {/* 4 Prominent Metric Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metricCards.map((card, idx) => (
          <div key={idx} className={`p-5 rounded-xl border ${card.color} shadow-xs flex flex-col justify-between`}>
            <div>
              <div className="text-3xl font-extrabold text-slate-900">{card.value}</div>
              <div className="text-xs font-bold text-slate-800 mt-1">{card.label}</div>
              <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">{card.note}</p>
            </div>
            <div className="mt-3 pt-2 border-t border-current/15 text-[10px] text-slate-500 italic">
              Illustrative assumption
            </div>
          </div>
        ))}
      </div>

      {/* Ranked Bottleneck Cards */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
            Ranked Bottlenecks by Operational Severity
          </h3>
          <span className="text-xs text-slate-500">Ranked 1 to 4 by Cycle Time Impact</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {BOTTLENECKS_RANKED.map((bn, idx) => (
            <div
              key={bn.id}
              className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-800 font-bold text-[10px]">
                    Rank #{idx + 1} • {bn.stage}
                  </span>
                  <span className="font-bold text-red-600 text-[11px]">{bn.idleLatency}</span>
                </div>

                <h4 className="font-bold text-sm text-slate-900 mb-1.5">{bn.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-3">{bn.problem}</p>

                <div className="space-y-2 p-3 rounded-lg bg-white border border-slate-200/80 mb-3">
                  <div>
                    <span className="font-bold text-slate-700 block text-[10px] uppercase">Likely Root Cause:</span>
                    <span className="text-slate-600 text-[11px] leading-relaxed">{bn.rootCause}</span>
                  </div>
                  <div className="pt-1.5 border-t border-slate-100">
                    <span className="font-bold text-emerald-700 block text-[10px] uppercase">Targeted Solution:</span>
                    <span className="text-slate-700 text-[11px] font-medium leading-relaxed">{bn.proposedSolution}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-[10px] text-slate-500">
                <span>Related Reqs: <strong className="text-slate-700">{bn.relatedReq}</strong></span>
                <span className="font-bold text-amber-700">{bn.failureRate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
