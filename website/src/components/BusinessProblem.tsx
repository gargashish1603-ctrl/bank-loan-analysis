import React from 'react';
import { AlertTriangle, Layers, CheckCircle2 } from 'lucide-react';

export const BusinessProblem: React.FC = () => {
  const processChainSteps = [
    { name: '1. Application', sub: 'Generic static form', delay: '1.5h touch', isIssue: false },
    { name: '2. Doc Collection', sub: 'Unindexed photo uploads', delay: '2.0h lag', isIssue: false },
    { name: '3. Manual Validation', sub: '35% Rework Loop', delay: '+7.3h wait', isIssue: true, highlight: '35% REWORK LOOP' },
    { name: '4. Handoffs', sub: '4 Disconnected systems', delay: '+4.0h lag', isIssue: true, highlight: '11.5% ERRORS' },
    { name: '5. Credit Review', sub: '100% FIFO Queue', delay: '+9.5h wait', isIssue: true, highlight: 'NO AUTOMATION' },
    { name: '6. Disbursement', sub: 'Wet-ink contract signing', delay: '+24h lag', isIssue: true, highlight: 'BATCH DELAYS' },
  ];

  const impactAreas = [
    {
      title: 'CUSTOMER',
      badge: 'Experience Friction',
      color: 'border-amber-300 bg-amber-50/50 text-amber-900',
      headline: 'Longer waiting time & black-box status',
      description: 'Applicants endure an average 5.0 business days turnaround compared to 24–48 hour FinTech alternatives, resulting in 3.2 inbound anxiety calls per loan and high drop-off.'
    },
    {
      title: 'OPERATIONS',
      badge: 'Manual Overhead',
      color: 'border-red-300 bg-red-50/50 text-red-900',
      headline: 'High manual workload & rework churn',
      description: 'Relationship Managers spend 40% of their working hours chasing missing paperwork, while backoffice staff manually re-key data across 4 disconnected software screens.'
    },
    {
      title: 'RISK',
      badge: 'Governance Vulnerability',
      color: 'border-purple-300 bg-purple-50/50 text-purple-900',
      headline: 'Delayed exception handling & spreadsheet risk',
      description: 'Underwriters are buried under pristine low-risk files in a single FIFO queue, leaving less time for nuanced risk assessment and policy exception reviews.'
    },
    {
      title: 'BUSINESS',
      badge: 'Commercial Drag',
      color: 'border-blue-300 bg-blue-50/50 text-blue-900',
      headline: 'Lower process efficiency & customer churn',
      description: '14.0% SLA breach rate damages brand reputation and drives elevated cost-per-origination while losing prospective borrowers to digital competitors.'
    }
  ];

  return (
    <section id="business-problem" className="space-y-8">
      {/* Section Header */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
          <Layers className="w-4 h-4" />
          <span>Operational Diagnosis</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">The Problem</h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
          NovaBank’s unsecured personal loan origination process suffered from structural operational friction. The workflow was characterized by <strong>repeated document validation loops</strong>, <strong>manual cross-departmental handoffs</strong>, <strong>fragmented legacy software workflows</strong>, <strong>frequent additional-information requests</strong>, <strong>reactive SLA tracking</strong>, and <strong>unnecessary manual intervention on low-risk applications</strong>.
        </p>
      </div>

      {/* Visual Process Chain with Highlighted Friction Points */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
              AS-IS Process Chain & Accumulation of Delays
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Highlighting where rework loops, handoffs, and idle queue dwell time accumulate into a 5-day cycle time.
            </p>
          </div>
          <span className="hidden md:inline-block px-2.5 py-1 text-[11px] font-bold rounded bg-red-100 text-red-800 border border-red-200">
            Total Elapsed TAT: 40.0h (32.6h Idle)
          </span>
        </div>

        {/* Process Chain Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 pt-2">
          {processChainSteps.map((step, idx) => (
            <div
              key={idx}
              className={`p-3.5 rounded-xl border relative flex flex-col justify-between transition-all ${
                step.isIssue
                  ? 'border-red-300 bg-red-50/40 shadow-xs'
                  : 'border-slate-200 bg-slate-50/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">{step.name}</span>
                  {step.isIssue && (
                    <span className="px-1.5 py-0.5 rounded bg-red-600 text-white font-bold text-[8px] uppercase">
                      Friction
                    </span>
                  )}
                </div>
                <div className="font-bold text-xs text-slate-900 mt-0.5">{step.sub}</div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px]">
                <span className="text-slate-500 font-medium">Latency:</span>
                <span className={`font-bold ${step.isIssue ? 'text-red-700' : 'text-slate-700'}`}>
                  {step.delay}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Rework Loop Callout */}
        <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>The 35% Asynchronous Rework Loop:</strong> Unassisted intake results in 3,500 monthly applications failing initial inspection. Re-upload follow-up adds 26–48 hours of queue latency.
            </span>
          </div>
          <span className="px-2.5 py-0.5 rounded bg-amber-200/80 text-amber-900 font-bold text-[10px] shrink-0">
            Primary Cycle-Time Driver
          </span>
        </div>
      </div>

      {/* 4 Core Impact Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {impactAreas.map((area, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-xl border ${area.color} shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-extrabold tracking-wider text-xs uppercase">{area.title}</span>
                <span className="text-[10px] font-semibold opacity-80">{area.badge}</span>
              </div>
              <h4 className="font-bold text-sm text-slate-900 mb-2 leading-snug">{area.headline}</h4>
              <p className="text-xs text-slate-700 leading-relaxed">{area.description}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-current/15 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Addressed in TO-BE Design</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
