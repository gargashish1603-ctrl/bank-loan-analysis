import React, { useState } from 'react';
import { BarChart3, Sliders } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { KPI_FRAMEWORK_DATA } from '../data/baData';

export const KpiFrameworkView: React.FC = () => {
  // Scenario Simulator State
  const [monthlyVolume, setMonthlyVolume] = useState<number>(10000);
  const [stpRate, setStpRate] = useState<number>(38);
  const [reworkReduction, setReworkReduction] = useState<number>(77);
  const [activePreset, setActivePreset] = useState<'target' | 'baseline' | 'aggressive'>('target');

  const applyPreset = (preset: 'baseline' | 'target' | 'aggressive') => {
    setActivePreset(preset);
    if (preset === 'baseline') {
      setMonthlyVolume(10000);
      setStpRate(0);
      setReworkReduction(0);
    } else if (preset === 'target') {
      setMonthlyVolume(10000);
      setStpRate(38);
      setReworkReduction(77);
    } else if (preset === 'aggressive') {
      setMonthlyVolume(20000);
      setStpRate(50);
      setReworkReduction(85);
    }
  };

  // Derived Metrics
  const baselineReworkFiles = Math.round(monthlyVolume * 0.35);
  const projectedReworkFiles = Math.round(monthlyVolume * (0.35 * (1 - reworkReduction / 100)));
  const reworkSaved = baselineReworkFiles - projectedReworkFiles;
  const projectedStpLoans = Math.round(monthlyVolume * (stpRate / 100));
  const hoursSavedPerMonth = Math.round(monthlyVolume * (40.0 - 14.4));

  // Chart Comparison Data
  const chartData = [
    { name: 'TAT (Days)', Baseline: 5.0, Target: 1.8 },
    { name: 'Rework (%)', Baseline: 35.0, Target: 8.0 },
    { name: 'FTR Rate (%)', Baseline: 48.0, Target: 82.0 },
    { name: 'SLA Breach (%)', Baseline: 14.0, Target: 4.0 },
    { name: 'Status Calls', Baseline: 3.2, Target: 0.6 },
    { name: 'CSAT (%)', Baseline: 61.0, Target: 88.0 },
  ];

  return (
    <section id="kpi-framework" className="space-y-8">
      {/* Section Header */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
          <BarChart3 className="w-4 h-4" />
          <span>Measurement Framework</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              KPI Governance Framework & Scenario Simulator
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-4xl leading-relaxed">
              Multi-dimensional lending scorecard measuring operational velocity, submission quality, governance compliance, and borrower sentiment.
            </p>
          </div>
          <div className="shrink-0">
            <span className="text-[10px] text-slate-500 bg-slate-100 px-2.5 py-1 rounded border border-slate-200 font-medium block">
              Proposed measurement sources for portfolio case study
            </span>
          </div>
        </div>
      </div>

      {/* Comprehensive KPI Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between text-xs font-bold uppercase tracking-wider">
          <span>Balanced Lending Scorecard & Mathematical Formulas</span>
          <span className="text-slate-400 font-normal">7 Multi-Dimensional KPIs</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 text-[11px] uppercase">
                <th className="p-3">KPI Name & Category</th>
                <th className="p-3">Definition & Mathematical Formula</th>
                <th className="p-3">Baseline</th>
                <th className="p-3">Target</th>
                <th className="p-3">Proposed Data Source</th>
                <th className="p-3">Governance Owner</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {KPI_FRAMEWORK_DATA.map((kpi) => (
                <tr key={kpi.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-3 font-bold text-slate-900">
                    <span className="text-[10px] text-blue-600 block uppercase">{kpi.category}</span>
                    {kpi.name}
                  </td>
                  <td className="p-3 text-slate-600 max-w-xs">
                    <span className="text-slate-800 font-medium block mb-1">{kpi.definition}</span>
                    <code className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 font-mono block">
                      {kpi.formula}
                    </code>
                  </td>
                  <td className="p-3 font-bold text-red-600">{kpi.baseline}</td>
                  <td className="p-3 font-bold text-emerald-600">{kpi.target}</td>
                  <td className="p-3 text-slate-600 text-[11px]">{kpi.proposedSource}</td>
                  <td className="p-3 text-slate-600 text-[11px]">{kpi.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Visual Chart Comparison */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4">
          Baseline (AS-IS) vs. Target (TO-BE) Visual Benchmark
        </h3>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#64748b' }} />
              <YAxis tick={{ fontSize: 11, fill: '#64748b' }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '11px' }}
                itemStyle={{ color: '#fff' }}
              />
              <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
              <Bar dataKey="Baseline" fill="#ef4444" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Target" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Interactive Scenario Simulator */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 rounded-xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-3 gap-3">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-blue-400" />
            <h3 className="text-base font-bold text-white">Interactive Operational Scenario Simulator</h3>
          </div>
          
          {/* Preset Buttons */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-slate-400 text-[11px] mr-1 hidden md:inline">Quick Presets:</span>
            <button
              onClick={() => applyPreset('baseline')}
              className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
                activePreset === 'baseline' ? 'bg-red-600 text-white font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Baseline AS-IS
            </button>
            <button
              onClick={() => applyPreset('target')}
              className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
                activePreset === 'target' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Target 2026 Plan
            </button>
            <button
              onClick={() => applyPreset('aggressive')}
              className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
                activePreset === 'aggressive' ? 'bg-blue-600 text-white font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Scale Stress-Test
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Sliders */}
          <div className="lg:col-span-6 space-y-5 text-xs">
            {/* Volume Slider */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-slate-300">Monthly Application Volume:</span>
                <span className="font-bold text-blue-400 text-sm">{monthlyVolume.toLocaleString()} apps/mo</span>
              </div>
              <input
                type="range"
                min="2000"
                max="25000"
                step="1000"
                value={monthlyVolume}
                onChange={(e) => {
                  setMonthlyVolume(Number(e.target.value));
                  setActivePreset('target');
                }}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>2,000</span>
                <span>10,000 (Baseline)</span>
                <span>25,000</span>
              </div>
            </div>

            {/* STP Adoption Slider */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-slate-300">Straight-Through Processing (STP) Rate:</span>
                <span className="font-bold text-emerald-400 text-sm">{stpRate}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="60"
                step="2"
                value={stpRate}
                onChange={(e) => {
                  setStpRate(Number(e.target.value));
                  setActivePreset('target');
                }}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>0% (AS-IS)</span>
                <span>38% (Target)</span>
                <span>60% (Aggressive)</span>
              </div>
            </div>

            {/* Document Rework Reduction Slider */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-slate-300">Pre-Validation Rework Elimination:</span>
                <span className="font-bold text-purple-400 text-sm">{reworkReduction}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="90"
                step="5"
                value={reworkReduction}
                onChange={(e) => {
                  setReworkReduction(Number(e.target.value));
                  setActivePreset('target');
                }}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>0% (No Pre-Check)</span>
                <span>77% (Target: 35%→8%)</span>
                <span>90%</span>
              </div>
            </div>
          </div>

          {/* Simulated Impact Output Cards */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3 text-xs">
            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
              <span className="text-slate-400 block text-[11px]">Rework Files Eliminated</span>
              <span className="text-2xl font-bold text-emerald-400 mt-1 block">
                {reworkSaved.toLocaleString()}
              </span>
              <span className="text-[10px] text-slate-400">files/mo saved from rework loops</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
              <span className="text-slate-400 block text-[11px]">Instant STP Approvals</span>
              <span className="text-2xl font-bold text-amber-400 mt-1 block">
                {projectedStpLoans.toLocaleString()}
              </span>
              <span className="text-[10px] text-slate-400">loans/mo approved in &lt;10 seconds</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
              <span className="text-slate-400 block text-[11px]">Operational Hours Saved</span>
              <span className="text-2xl font-bold text-sky-400 mt-1 block">
                {hoursSavedPerMonth.toLocaleString()}h
              </span>
              <span className="text-[10px] text-slate-400">capacity hours liberated per month</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
              <span className="text-slate-400 block text-[11px]">Customer Inquiry Reduction</span>
              <span className="text-2xl font-bold text-purple-400 mt-1 block">
                {(Math.round(monthlyVolume * (3.2 - 0.6))).toLocaleString()}
              </span>
              <span className="text-[10px] text-slate-400">branch calls avoided per month</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
