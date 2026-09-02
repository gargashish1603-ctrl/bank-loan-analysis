import React from 'react';
import { Award, CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';

export const ExecutiveRecommendation: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'STANDARDIZE',
      subtitle: 'Rules & Intake Governance',
      desc: 'Codify document checklists across all 45 retail branches, standardize intake matrices, and enforce client-side pre-validation (DPI ≥ 300) to stop defective files at ingestion.'
    },
    {
      num: '02',
      title: 'AUTOMATE',
      subtitle: 'STP Decisioning & APIs',
      desc: 'Deploy automated REST API connectors for National ID, AML, and Credit Bureaus, enabling 38% instant Straight-Through Processing (STP) auto-approvals in <10 seconds.'
    },
    {
      num: '03',
      title: 'MONITOR',
      subtitle: 'Proactive Governance & SLAs',
      desc: 'Implement real-time SLA countdown timers with automated pre-breach threshold escalations and an Exception Underwriter Workbench for complex credit files.'
    }
  ];

  return (
    <section id="recommendation" className="space-y-8">
      {/* Section Header */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
          <Award className="w-4 h-4" />
          <span>Executive Synthesis</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Recommendation
        </h2>
        <p className="mt-2 text-base sm:text-lg text-slate-700 font-semibold leading-relaxed max-w-4xl">
          NovaBank should move from a manually coordinated loan origination process toward an automation-first, exception-based operating model.
        </p>
      </div>

      {/* 3 Core Transformation Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((p) => (
          <div
            key={p.num}
            className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl font-extrabold text-blue-600 font-mono">{p.num}</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-800 border border-blue-200">
                  Strategic Pillar
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
              <span className="text-xs font-semibold text-slate-500 block mb-2">{p.subtitle}</span>
              <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Core BA Transformation Lever</span>
            </div>
          </div>
        ))}
      </div>

      {/* Final Memorable Consulting Takeaway */}
      <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white border border-slate-800 shadow-xl text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center mx-auto text-blue-400">
          <Sparkles className="w-6 h-6" />
        </div>

        <blockquote className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-snug">
          "The objective is not to remove human judgment — it is to reserve human judgment for the cases where it creates the most value."
        </blockquote>

        <p className="text-xs text-slate-400 max-w-xl mx-auto leading-relaxed">
          By eliminating 32.6 hours of administrative queue latency and codifying risk policies, NovaBank achieves a 64% TAT reduction while elevating portfolio compliance.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs">
          <a
            href="https://github.com/gargashish1603-ctrl/bank-loan-analysis"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors flex items-center gap-2"
          >
            <span>View Full Specification on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
