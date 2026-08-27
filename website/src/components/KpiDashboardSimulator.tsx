import React, { useState } from 'react';
import { BarChart3, Sliders } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { KPI_ITEMS } from '../data/baData';

export const KpiDashboardSimulator: React.FC = () => {
  // Scenario Simulator State (Illustrative modeling)
  const [monthlyVolume, setMonthlyVolume] = useState<number>(10000);
  const [stpRate, setStpRate] = useState<number>(38);
  const [reworkReduction, setReworkReduction] = useState<number>(77);

  // Derived Scenario Metrics
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
    { name: 'CSAT Score (%)', Baseline: 61.0, Target: 88.0 },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
          <BarChart3 className="w-4 h-4" />
          <span>Operational Analytics & Performance</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900">KPI Measurement Framework & Scenario Simulator</h2>
        <p className="mt-2 text-sm text-slate-600">
          Multi-dimensional lending scorecard measuring operational velocity, submission quality, and borrower customer satisfaction.
        </p>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        {KPI_ITEMS.map((kpi) => (
          <div key={kpi.id} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{kpi.category}</span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                  kpi.trend === 'positive' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {kpi.change}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-xs mb-2">{kpi.name}</h3>
              <div className="space-y-1 my-2 p-2 rounded bg-slate-50 border border-slate-100">
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-500">Baseline:</span>
                  <span className="font-bold text-slate-700">{kpi.baseline}</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-500">TO-BE Target:</span>
                  <span className="font-bold text-emerald-600">{kpi.target}</span>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-slate-400 mt-2">{kpi.rationale}</p>
          </div>
        ))}
      </div>

      {/* Recharts Visual Comparison */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-4">
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
      <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 rounded-xl p-6 text-white border border-slate-800 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-blue-400" />
            <h3 className="text-base font-bold text-white">Interactive Operational Scenario Simulator</h3>
          </div>
          <span className="text-[10px] text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
            Illustrative Scenario Model
          </span>
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
                onChange={(e) => setMonthlyVolume(Number(e.target.value))}
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
                min="10"
                max="60"
                step="2"
                value={stpRate}
                onChange={(e) => setStpRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>10% (Conservative)</span>
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
                min="30"
                max="90"
                step="5"
                value={reworkReduction}
                onChange={(e) => setReworkReduction(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>30%</span>
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
    </div>
  );
};
