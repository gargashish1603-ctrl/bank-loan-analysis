import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { BOTTLENECKS, FIVE_WHYS_DATA, FISHBONE_DATA } from '../data/baData';

export const DiagnosticSuite: React.FC = () => {
  const [activeDiagnosticTab, setActiveDiagnosticTab] = useState<'5whys' | 'bottlenecks' | 'fishbone'>('5whys');
  const [expanded5Why, setExpanded5Why] = useState<string>('5W-1');
  const [activeFishboneCategory, setActiveFishboneCategory] = useState<keyof typeof FISHBONE_DATA>('process');

  const fishboneCategories: { id: keyof typeof FISHBONE_DATA; label: string; count: number }[] = [
    { id: 'process', label: 'Process', count: FISHBONE_DATA.process.length },
    { id: 'technology', label: 'Technology', count: FISHBONE_DATA.technology.length },
    { id: 'people', label: 'People', count: FISHBONE_DATA.people.length },
    { id: 'data', label: 'Data', count: FISHBONE_DATA.data.length },
    { id: 'policy', label: 'Policy', count: FISHBONE_DATA.policy.length },
    { id: 'customer', label: 'Customer', count: FISHBONE_DATA.customer.length },
  ];

  return (
    <div className="space-y-8">
      {/* Navigation Header */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
            <Search className="w-4 h-4" />
            <span>Root-Cause Diagnostics</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Diagnostic Suite & Failure Analysis</h2>
          <p className="text-xs text-slate-600 mt-1">
            Structured analysis isolating systemic root causes rather than treating superficial symptoms.
          </p>
        </div>

        {/* Diagnostic Tabs */}
        <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 shrink-0">
          <button
            onClick={() => setActiveDiagnosticTab('5whys')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeDiagnosticTab === '5whys' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            5 Whys Analysis
          </button>
          <button
            onClick={() => setActiveDiagnosticTab('bottlenecks')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeDiagnosticTab === 'bottlenecks' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            7 Primary Bottlenecks
          </button>
          <button
            onClick={() => setActiveDiagnosticTab('fishbone')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeDiagnosticTab === 'fishbone' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            6M Fishbone Diagram
          </button>
        </div>
      </div>

      {/* 5 Whys Accordion Suite */}
      {activeDiagnosticTab === '5whys' && (
        <div className="space-y-4">
          {FIVE_WHYS_DATA.map((item) => {
            const isExpanded = expanded5Why === item.id;
            return (
              <div key={item.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all">
                <div
                  onClick={() => setExpanded5Why(isExpanded ? '' : item.id)}
                  className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between cursor-pointer hover:bg-slate-100/80 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center">
                      {item.id}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                      <span className="text-xs text-slate-500 font-medium">{item.problem}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400 font-semibold">{isExpanded ? 'Collapse' : 'Expand 5 Steps'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                  </div>
                </div>

                {isExpanded && (
                  <div className="p-6 space-y-4 text-xs">
                    <div className="space-y-2 border-l-2 border-blue-400 pl-4">
                      {item.whys.map((why, idx) => (
                        <div key={idx} className="py-1">
                          <span className="font-semibold text-slate-800">{why}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                      <div className="p-3 rounded-lg bg-red-50/80 border border-red-200">
                        <span className="font-bold text-red-700 block mb-1">Diagnosed Root Cause:</span>
                        <p className="text-slate-700 leading-relaxed">{item.rootCause}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-emerald-50/80 border border-emerald-200">
                        <span className="font-bold text-emerald-700 block mb-1">Engineered Solution:</span>
                        <p className="text-slate-700 leading-relaxed">{item.solution}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-blue-50/80 border border-blue-200">
                        <span className="font-bold text-blue-700 block mb-1">Targeted KPI Impact:</span>
                        <p className="text-slate-700 font-semibold leading-relaxed">{item.kpi}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* 7 Bottlenecks Cards */}
      {activeDiagnosticTab === 'bottlenecks' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {BOTTLENECKS.map((b) => (
            <div key={b.id} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold text-[10px] border border-red-200">
                    {b.id} • {b.stage}
                  </span>
                  <span className="text-red-600 font-bold">{b.idleLatency}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">{b.title}</h3>
                <p className="text-slate-600 text-xs mb-3 leading-relaxed">{b.problem}</p>
                
                <div className="p-2.5 rounded bg-slate-50 border border-slate-100 mb-3">
                  <span className="font-bold text-slate-700 block text-[10px] uppercase">Root Cause:</span>
                  <span className="text-slate-600 text-[11px]">{b.rootCause}</span>
                </div>
              </div>

              <div>
                <div className="p-2.5 rounded bg-emerald-50/70 border border-emerald-100">
                  <span className="font-bold text-emerald-800 block text-[10px] uppercase">Proposed Improvement:</span>
                  <span className="text-slate-700 text-[11px]">{b.proposedSolution}</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-100">
                  <span>Related Reqs: <strong>{b.relatedReq}</strong></span>
                  <span className="text-amber-600 font-bold">{b.failureRate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 6M Fishbone Diagram Explorer */}
      {activeDiagnosticTab === 'fishbone' && (
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-6">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
              Ishikawa Cause-and-Effect Analysis (6M Framework)
            </span>
            <h3 className="text-lg font-bold text-slate-900">Root Cause Categories Driving 5-Day Processing Delays</h3>
          </div>

          {/* Category Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {fishboneCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFishboneCategory(cat.id)}
                className={`p-3 rounded-lg text-xs font-bold text-left border transition-all ${
                  activeFishboneCategory === cat.id
                    ? 'bg-blue-600 text-white border-blue-600 shadow'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span className="block text-sm">{cat.label}</span>
                <span className="text-[10px] opacity-80">{cat.count} Primary Causes</span>
              </button>
            ))}
          </div>

          {/* Selected Category Details */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              Identified Causes in Dimension: <span className="text-blue-600">{activeFishboneCategory.toUpperCase()}</span>
            </h4>
            <div className="space-y-2 text-xs">
              {FISHBONE_DATA[activeFishboneCategory].map((cause, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-white border border-slate-200 flex items-start gap-2">
                  <span className="text-red-500 font-bold">↳</span>
                  <span className="text-slate-800 font-medium">{cause}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
