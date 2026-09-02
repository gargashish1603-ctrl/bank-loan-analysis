import React, { useState } from 'react';
import { Network, ArrowDown } from 'lucide-react';
import { TRACEABILITY_CHAINS } from '../data/baData';
import type { TraceabilityChain } from '../data/baData';

export const TraceabilityMatrixView: React.FC = () => {
  const [selectedChainIndex, setSelectedChainIndex] = useState<number>(0);
  const activeChain: TraceabilityChain = TRACEABILITY_CHAINS[selectedChainIndex];

  const chainSteps = [
    { label: '1. Business Problem', value: activeChain.problem, color: 'bg-red-50 border-red-200 text-red-900', tag: 'Problem Symptom' },
    { label: '2. Root Cause (5 Whys)', value: activeChain.rootCause, color: 'bg-amber-50 border-amber-200 text-amber-900', tag: 'Root Cause' },
    { label: '3. Capability Gap', value: activeChain.gap, color: 'bg-yellow-50 border-yellow-200 text-yellow-900', tag: 'Operational Gap' },
    { label: '4. Business Requirement', value: `${activeChain.brId}: ${activeChain.brTitle}`, color: 'bg-blue-50 border-blue-200 text-blue-900', tag: 'BR' },
    { label: '5. Functional Requirement', value: `${activeChain.frId}: ${activeChain.frTitle}`, color: 'bg-sky-50 border-sky-200 text-sky-900', tag: 'FR' },
    { label: '6. User Story & Persona', value: `${activeChain.usId} (${activeChain.usPersona})`, color: 'bg-indigo-50 border-indigo-200 text-indigo-900', tag: 'BDD Story' },
    { label: '7. Acceptance Criteria (Gherkin)', value: activeChain.acceptanceCriteria, color: 'bg-purple-50 border-purple-200 text-purple-900 font-mono', tag: 'Gherkin Criteria' },
    { label: '8. Engineered Solution', value: activeChain.solution, color: 'bg-teal-50 border-teal-200 text-teal-900', tag: 'TO-BE Architecture' },
    { label: '9. Measured Business KPI', value: `${activeChain.kpi} (${activeChain.targetImpact})`, color: 'bg-emerald-50 border-emerald-300 text-emerald-950 font-bold', tag: 'Target KPI' },
  ];

  return (
    <section id="traceability" className="space-y-8">
      {/* Section Header */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
          <Network className="w-4 h-4" />
          <span>Core BA Differentiator</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Bi-Directional Requirements Traceability Matrix (RTM)
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-4xl leading-relaxed">
          Unbroken 9-stage lineage proving that every functional capability, user story, and automated decision rule directly originates from a diagnosed operational problem and maps directly to a target KPI.
        </p>

        {/* Chain Selector Buttons */}
        <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-100 text-xs">
          <span className="text-slate-500 font-semibold py-1 mr-1">Select Traceability Lineage:</span>
          {TRACEABILITY_CHAINS.map((chain, idx) => (
            <button
              key={chain.id}
              onClick={() => setSelectedChainIndex(idx)}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                selectedChainIndex === idx
                  ? 'bg-blue-600 text-white shadow-xs font-bold'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {chain.title}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive 9-Stage Vertical Traceability Chain */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
              Active Lineage: {activeChain.title}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Visualizing the step-by-step BA reasoning chain from problem to business impact.
            </p>
          </div>
          <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 font-bold text-xs">
            100% Traceable
          </span>
        </div>

        {/* Step-by-Step Chain Flow */}
        <div className="space-y-3 max-w-4xl mx-auto pt-2">
          {chainSteps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className={`p-4 rounded-xl border ${step.color} shadow-xs text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2`}>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold uppercase tracking-wider text-[10px] text-slate-500">
                      {step.label}
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-white/80 border border-current/20 text-[9px] font-bold">
                      {step.tag}
                    </span>
                  </div>
                  <div className="text-slate-900 font-semibold text-xs leading-relaxed">
                    {step.value}
                  </div>
                </div>
              </div>

              {idx < chainSteps.length - 1 && (
                <div className="flex justify-center py-1">
                  <ArrowDown className="w-4 h-4 text-slate-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
