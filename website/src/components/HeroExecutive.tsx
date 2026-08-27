import React from 'react';
import { Clock, RefreshCw, CheckCircle, ShieldAlert, ArrowRight, Sparkles } from 'lucide-react';

interface HeroExecutiveProps {
  onExploreClick: () => void;
}

export const HeroExecutive: React.FC<HeroExecutiveProps> = ({ onExploreClick }) => {
  return (
    <section className="bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-2.5 py-1 rounded text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Retail Banking Case Study
          </span>
          <span className="px-2.5 py-1 rounded text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Process Optimization & Requirements Engineering
          </span>
          <span className="px-2.5 py-1 rounded text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
            NovaBank — Fictional Enterprise Bank
          </span>
        </div>

        {/* Hero Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Banking Loan Origination <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">
                Process Optimization
              </span>
            </h1>
            <p className="mt-2 text-lg text-slate-300 font-medium">
              AS-IS Process Analysis, Gap Assessment & TO-BE Process Design
            </p>
            <p className="mt-4 text-sm text-slate-400 max-w-3xl leading-relaxed">
              A comprehensive Business Analyst engagement addressing acute cycle-time delays, high document rework, and system fragmentation in NovaBank's unsecured personal lending operations.
            </p>

            {/* 60-Second Recruiter Pitch */}
            <div className="mt-6 p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>60-Second Executive Summary</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-2.5 rounded bg-slate-900/60 border border-slate-700/40">
                  <span className="text-slate-400 block font-medium">1. Business Problem</span>
                  <span className="text-slate-200 mt-1 block">5.0-day turnaround, 35% document rework, 14% SLA breaches across 10k apps/month.</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900/60 border border-slate-700/40">
                  <span className="text-slate-400 block font-medium">2. Root Cause Diagnosed</span>
                  <span className="text-slate-200 mt-1 block">Unassisted document intake, 4 disconnected legacy systems, undifferentiated FIFO queues.</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900/60 border border-slate-700/40">
                  <span className="text-slate-400 block font-medium">3. Recommended TO-BE</span>
                  <span className="text-slate-200 mt-1 block">Automation-first STP for low-risk files + Exception Underwriter Workbench + Dynamic intake.</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900/60 border border-slate-700/40">
                  <span className="text-slate-400 block font-medium">4. Expected Impact</span>
                  <span className="text-emerald-400 font-semibold mt-1 block">TAT: 1.8 Days (-64%), Rework: 8% (-77%), FTR: 82% (+71%).</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={onExploreClick}
                className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs flex items-center gap-2 shadow-sm transition-all"
              >
                <span>Explore Full BA Engagement</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Metrics Scorecard */}
          <div className="lg:col-span-4 bg-slate-800/90 border border-slate-700 rounded-2xl p-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-700 pb-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Baseline vs. Target KPI Impact</span>
              <span className="text-[10px] text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">Illustrative Modeling</span>
            </div>

            <div className="space-y-3.5">
              {/* Metric 1 */}
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-700/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Average Loan TAT</span>
                    <span className="text-sm font-bold text-slate-100">5.0 Days <span className="text-slate-500">→</span> <span className="text-emerald-400 font-bold">1.8 Days</span></span>
                  </div>
                </div>
                <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 text-xs font-bold">-64%</span>
              </div>

              {/* Metric 2 */}
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-700/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                    <RefreshCw className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Document Rework Rate</span>
                    <span className="text-sm font-bold text-slate-100">35.0% <span className="text-slate-500">→</span> <span className="text-emerald-400 font-bold">8.0%</span></span>
                  </div>
                </div>
                <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 text-xs font-bold">-77%</span>
              </div>

              {/* Metric 3 */}
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-700/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">First-Time-Right (FTR)</span>
                    <span className="text-sm font-bold text-slate-100">48.0% <span className="text-slate-500">→</span> <span className="text-emerald-400 font-bold">82.0%</span></span>
                  </div>
                </div>
                <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 text-xs font-bold">+71%</span>
              </div>

              {/* Metric 4 */}
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-700/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">SLA Breach Rate</span>
                    <span className="text-sm font-bold text-slate-100">14.0% <span className="text-slate-500">→</span> <span className="text-emerald-400 font-bold">4.0%</span></span>
                  </div>
                </div>
                <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 text-xs font-bold">-71%</span>
              </div>
            </div>

            <div className="mt-3 text-[11px] text-slate-400 text-center">
              Monthly Baseline: 10,000 Personal Loan Applications
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
