import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { FIVE_WHYS_DATA, FISHBONE_DATA } from '../data/baData';

export const RootCauseAnalysis: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'5whys' | 'fishbone'>('5whys');
  const [selected5Why, setSelected5Why] = useState<number>(0);
  const [activeFishboneCategory, setActiveFishboneCategory] = useState<keyof typeof FISHBONE_DATA>('technology');

  const fishboneCategories: { key: keyof typeof FISHBONE_DATA; label: string; icon: string }[] = [
    { key: 'people', label: 'People / Roles', icon: '👤' },
    { key: 'process', label: 'Process Design', icon: '🔄' },
    { key: 'technology', label: 'Technology / Systems', icon: '💻' },
    { key: 'policy', label: 'Policy & Governance', icon: '📜' },
    { key: 'data', label: 'Data Quality & Intake', icon: '📊' },
    { key: 'controls', label: 'Controls & Monitoring', icon: '🛡️' }
  ];

  return (
    <section id="root-cause" className="space-y-8">
      {/* Section Header */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
          <Search className="w-4 h-4" />
          <span>Root Cause Diagnostics</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              5 Whys & 6M Ishikawa Diagnostic Suite
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-4xl leading-relaxed">
              Multi-tiered root-cause analysis isolating foundational drivers of rework, queue dwell latency, and customer anxiety.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('5whys')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === '5whys'
                  ? 'bg-white text-blue-700 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              5 Whys Reasoning Chains
            </button>
            <button
              onClick={() => setActiveTab('fishbone')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'fishbone'
                  ? 'bg-white text-blue-700 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              6M Ishikawa Fishbone
            </button>
          </div>
        </div>
      </div>

      {/* Experience A: 5 Whys Visual Reasoning Chain */}
      {activeTab === '5whys' && (
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          {/* Chain Selector Buttons */}
          <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-4">
            {FIVE_WHYS_DATA.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setSelected5Why(idx)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                  selected5Why === idx
                    ? 'bg-blue-600 text-white shadow-xs font-bold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Active 5 Whys Chain Tree */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {/* Initial Symptom */}
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-700 block mb-1">
                Observed Problem / Symptom:
              </span>
              <p className="text-sm font-bold text-red-950">
                {FIVE_WHYS_DATA[selected5Why].problem}
              </p>
            </div>

            {/* Step-by-Step Whys */}
            <div className="space-y-2 pl-4 border-l-2 border-blue-200">
              {FIVE_WHYS_DATA[selected5Why].whys.map((why, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    W{idx + 1}
                  </div>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {why}
                  </p>
                </div>
              ))}
            </div>

            {/* Final Root Cause */}
            <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 text-xs space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                ★ Verified Final Root Cause:
              </span>
              <p className="text-sm font-bold text-white">
                {FIVE_WHYS_DATA[selected5Why].rootCause}
              </p>
              <div className="pt-2 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
                <div>
                  <span className="text-slate-400 block">Targeted Solution:</span>
                  <span className="text-emerald-400 font-semibold">{FIVE_WHYS_DATA[selected5Why].solution}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Expected KPI Impact:</span>
                  <span className="text-sky-300 font-semibold">{FIVE_WHYS_DATA[selected5Why].kpi}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Experience B: 6M Fishbone Analysis */}
      {activeTab === 'fishbone' && (
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                6M Ishikawa Cause-and-Effect Breakdown
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Categorical grouping of structural causes contributing to loan origination delays.
              </p>
            </div>
            <span className="text-[11px] text-slate-400">Select category below</span>
          </div>

          {/* Category Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {fishboneCategories.map((cat) => {
              const isActive = activeFishboneCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveFishboneCategory(cat.key)}
                  className={`p-3 rounded-xl border text-xs font-semibold transition-all flex flex-col items-center gap-1.5 text-center ${
                    isActive
                      ? 'border-blue-600 bg-blue-50/90 text-blue-900 shadow-xs font-bold'
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <span className="text-lg">{cat.icon}</span>
                  <span className="leading-tight">{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Category Causes Display */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
              <span>Verified Causes in {activeFishboneCategory.toUpperCase()} Category:</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {FISHBONE_DATA[activeFishboneCategory].map((cause, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed shadow-xs flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{cause}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
