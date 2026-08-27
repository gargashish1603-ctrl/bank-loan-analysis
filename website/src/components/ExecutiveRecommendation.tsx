import React from 'react';
import { Award, CheckCircle2, TrendingUp, ShieldCheck, ArrowRight, BookOpen } from 'lucide-react';

export const ExecutiveRecommendation: React.FC = () => {
  const baCompetencies = [
    { title: '1. Problem Scoping & Baseline', desc: 'Quantified baseline friction (10k volume, 5.0d TAT, 35% rework) with strict in/out of scope boundaries.' },
    { title: '2. Stakeholder Governance', desc: 'Engaged 11 stakeholder groups with a 2x2 Power-Interest matrix and tailored communication plans.' },
    { title: '3. BPMN Process Modeling', desc: 'Constructed 8-swimlane AS-IS vs TO-BE process models detailing idle queue dwell times.' },
    { title: '4. Root-Cause Diagnostics', desc: 'Conducted multi-tier 5 Whys and 6M Ishikawa Fishbone analyses to pinpoint structural failure points.' },
    { title: '5. Operational Gap Analysis', desc: 'Built a 12-point Gap Matrix evaluating current vs future state with MoSCoW prioritization.' },
    { title: '6. Requirements Engineering', desc: 'Authored 10 Business Reqs, 20 Functional Reqs, 8 Non-Functional Reqs, and 12 Banking Business Rules.' },
    { title: '7. Agile User Stories & Gherkin', desc: 'Created 15 persona-driven User Stories with testable Given/When/Then Acceptance Criteria.' },
    { title: '8. Requirements Traceability (RTM)', desc: 'Maintained unbroken bi-directional linkage: Problem → Root Cause → BR → FR → US → Solution → KPI.' },
    { title: '9. KPI Scorecard & Modeling', desc: 'Formulated operational, quality, and customer metrics with mathematical definitions and target baselines.' },
    { title: '10. Risk & Change Management', desc: 'Formulated the ADKAR change transition framework, 5x5 Risk Register, and 4-Phase Phased Roadmap.' },
  ];

  return (
    <div className="space-y-8">
      {/* Executive Strategic Recommendation Card */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 rounded-2xl p-8 text-white border border-slate-800 shadow-xl space-y-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
          <Award className="w-5 h-5 text-emerald-400" />
          <span>Strategic Executive Recommendation</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
          Transforming NovaBank Personal Lending into an Automation-First, Exception-Based Operating Model
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
            <span className="text-slate-400 block font-semibold mb-1">1. Strategic Diagnosis</span>
            <p className="text-slate-300 leading-relaxed">
              Origination delays are not driven by under-staffing, but by decoupled document validation, 4 disconnected legacy systems, and an undifferentiated FIFO underwriting queue.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
            <span className="text-slate-400 block font-semibold mb-1">2. Engineered Target State</span>
            <p className="text-slate-300 leading-relaxed">
              Deploy client-side pre-validation (DPI ≥ 300), API microservices sync, 38% Straight-Through-Processing (STP) for Tier 1 low risk, and a Unified Decision Workbench for licensed underwriters.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
            <span className="text-slate-400 block font-semibold mb-1">3. Phased Execution</span>
            <p className="text-slate-300 leading-relaxed">
              Execute a progressive 4-Phase Roadmap (Standardize → Digitize → Automate → Optimize) over 12 months, avoiding big-bang risk and ensuring 100% compliance adherence.
            </p>
          </div>
        </div>

        {/* Expected Impact Banner */}
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="font-bold text-emerald-300 block">Projected Operational Impact:</span>
              <span className="text-slate-300">TAT reduced from 5.0 to 1.8 Days (-64%), Rework slashed from 35% to 8% (-77%), and CSAT elevated to 88%.</span>
            </div>
          </div>
          <span className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold shrink-0">
            High-Impact ROI
          </span>
        </div>
      </div>

      {/* Core Business Analyst Competencies Demonstrated */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>Professional Portfolio Competencies</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900">Key Business Analysis Competencies Demonstrated</h3>
        <p className="text-xs text-slate-600">
          This case study exemplifies end-to-end consulting rigor and industry-standard Business Analysis techniques.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {baCompetencies.map((comp, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0 text-[11px]">
                ✓
              </span>
              <div>
                <h4 className="font-bold text-slate-900 text-xs mb-0.5">{comp.title}</h4>
                <p className="text-slate-600 text-[11px] leading-relaxed">{comp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
