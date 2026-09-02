import React from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { ROADMAP_3_PHASES } from '../data/baData';

export const ImplementationRoadmapView: React.FC = () => {
  return (
    <section id="roadmap" className="space-y-8">
      {/* Section Header */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
          <Calendar className="w-4 h-4" />
          <span>Transformation Schedule</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              3-Phase Implementation Roadmap & Milestones
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-4xl leading-relaxed">
              Structured 12-month transformation trajectory balancing early governance quick-wins with core workflow automation and enterprise-scale monitoring.
            </p>
          </div>
          <div className="shrink-0">
            <span className="px-3 py-1.5 rounded-lg bg-blue-100 text-blue-800 font-bold text-xs border border-blue-200">
              Total Duration: 12 Months
            </span>
          </div>
        </div>
      </div>

      {/* 3-Phase Horizontal / Responsive Vertical Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {ROADMAP_3_PHASES.map((phase) => (
          <div
            key={phase.phaseNumber}
            className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between hover:border-slate-300 transition-colors"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                    {phase.phaseNumber} • {phase.duration}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 leading-tight mt-0.5">{phase.title}</h3>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
                  {phase.focus}
                </span>
              </div>

              {/* Objectives */}
              <div className="space-y-3 text-xs mb-4">
                <div>
                  <span className="font-bold text-slate-700 block mb-1 text-[11px] uppercase tracking-wider">
                    Core Objectives:
                  </span>
                  <ul className="space-y-1 text-slate-600">
                    {phase.objectives.map((obj, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Deliverables */}
                <div className="pt-2 border-t border-slate-100">
                  <span className="font-bold text-slate-700 block mb-1 text-[11px] uppercase tracking-wider">
                    Key BA Deliverables:
                  </span>
                  <ul className="space-y-1 text-slate-600">
                    {phase.keyDeliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium text-slate-800">{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dependencies */}
                <div className="pt-2 border-t border-slate-100">
                  <span className="font-bold text-slate-500 block text-[10px] uppercase tracking-wider mb-1">
                    Prerequisites & Dependencies:
                  </span>
                  <p className="text-[11px] text-slate-500 italic">
                    {phase.dependencies.join(' • ')}
                  </p>
                </div>
              </div>
            </div>

            {/* Stage Gate & Success Measure */}
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-950">
              <span className="font-bold text-emerald-800 text-[10px] uppercase block mb-0.5">
                Stage-Gate Success Measure:
              </span>
              <span className="font-semibold text-[11px]">
                {phase.successMeasures.join('; ')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
