import React from 'react';
import { ArrowDown, Clock, RefreshCw, ShieldAlert, Sparkles } from 'lucide-react';

interface HeroExecutiveProps {
  onExploreClick: () => void;
}

export const HeroExecutive: React.FC<HeroExecutiveProps> = ({ onExploreClick }) => {
  return (
    <section id="executive-summary" className="bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative overflow-hidden">
      {/* Subtle Background Geometric Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Eyebrow & Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-blue-500/15 text-blue-400 border border-blue-500/30">
            BANKING PROCESS TRANSFORMATION
          </span>
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
            Business Analyst Case Study
          </span>
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-800 text-slate-400 border border-slate-700 hidden sm:inline">
            NovaBank — Fictional Enterprise Bank
          </span>
        </div>

        {/* Main Heading & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Redesigning the Personal Loan <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">
                Origination Journey
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-3xl">
              A Business Analyst case study analyzing the AS-IS loan origination process, identifying operational bottlenecks and root causes, and designing an automation-first TO-BE process.
            </p>

            {/* Core BA Problem & Scope Synthesis */}
            <div className="mt-6 p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Executive Case Synthesis</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                NovaBank personal loan processing required <strong className="text-white font-semibold">5.0 business days</strong> with <strong className="text-amber-300 font-semibold">35% document rework</strong> and <strong className="text-red-300 font-semibold">14% SLA breaches</strong> across 10,000 monthly applications. Through root-cause diagnostics, this project re-architected the journey into a dual-track operating model: <strong className="text-emerald-400 font-semibold">38% Straight-Through Processing (STP)</strong> for low-risk applicants and an <strong className="text-sky-300 font-semibold">Exception Underwriter Workbench</strong> for complex reviews.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreClick}
                className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-2 shadow transition-all"
              >
                <span>Explore Full Case Study</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('as-is-process');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-xs transition-colors"
              >
                Inspect AS-IS BPMN Map
              </button>
            </div>
          </div>

          {/* 3 Prominent Baseline KPI Cards */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-700 pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Baseline Performance</span>
              <span className="text-[10px] text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">Monthly: 10,000 Apps</span>
            </div>

            {/* Card 1: Turnaround Time */}
            <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/15 text-blue-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white">5.0 days</div>
                  <div className="text-[11px] text-slate-400 font-medium">Average Turnaround Time</div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-emerald-400 block">→ 1.8 days</span>
                <span className="text-[10px] text-slate-400">-64% Target</span>
              </div>
            </div>

            {/* Card 2: Document Rework */}
            <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-500/15 text-amber-400">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white">35%</div>
                  <div className="text-[11px] text-slate-400 font-medium">Document Rework</div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-emerald-400 block">→ 8%</span>
                <span className="text-[10px] text-slate-400">-77% Target</span>
              </div>
            </div>

            {/* Card 3: SLA Breach Rate */}
            <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-red-500/15 text-red-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white">14%</div>
                  <div className="text-[11px] text-slate-400 font-medium">SLA Breach Rate</div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-emerald-400 block">→ 5%</span>
                <span className="text-[10px] text-slate-400">-64% Target</span>
              </div>
            </div>

            {/* Mandatory Illustrative Disclaimer */}
            <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
              <span className="text-[10px] text-amber-300/90 font-semibold tracking-wide uppercase">
                ILLUSTRATIVE ASSUMPTIONS FOR PORTFOLIO CASE STUDY — NOT REAL BANK DATA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
