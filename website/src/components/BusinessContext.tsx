import React from 'react';
import { Check, X, Layers, AlertCircle } from 'lucide-react';

export const BusinessContext: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Overview Section */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
          <Layers className="w-4 h-4" />
          <span>Operational Context & Scenario</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900">NovaBank Personal Lending Problem Statement</h2>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          NovaBank is a mid-sized commercial bank with 45 retail branches and digital web portals. Over the past 12 months, loan application volume grew by 14%, but operational cycle times deteriorated. While competitors disburse personal loans within 24–48 hours, NovaBank averages <strong className="text-slate-900">5.0 business days (40 working hours)</strong>, leading to customer drop-off and front-line branch congestion.
        </p>

        {/* 8 Management Inquiries Grid */}
        <div className="mt-6 border-t border-slate-100 pt-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Key Inquiries Investigated by the Business Analyst:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            {[
              '1. Where are the true operational bottlenecks?',
              '2. What causes application delays and idle wait times?',
              '3. What drives the 35% document rework rate?',
              '4. Which activities are unnecessarily manual and repetitive?',
              '5. Where does duplicate data entry occur across systems?',
              '6. Where can automated Straight-Through Processing be safely applied?',
              '7. What traceable functional requirements solve these issues?',
              '8. What does the optimized TO-BE operating model look like?'
            ].map((q, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                {q}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Baseline Metrics Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <span className="text-[11px] text-slate-500 font-medium block">Monthly Volume</span>
          <span className="text-xl font-bold text-slate-900 mt-1 block">10,000</span>
          <span className="text-[10px] text-slate-400">Applications / month</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <span className="text-[11px] text-slate-500 font-medium block">Average TAT</span>
          <span className="text-xl font-bold text-red-600 mt-1 block">5.0 Days</span>
          <span className="text-[10px] text-slate-400">40.0 working hours</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <span className="text-[11px] text-slate-500 font-medium block">Doc Rework Rate</span>
          <span className="text-xl font-bold text-amber-600 mt-1 block">35.0%</span>
          <span className="text-[10px] text-slate-400">3,500 apps / month</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <span className="text-[11px] text-slate-500 font-medium block">SLA Breach Rate</span>
          <span className="text-xl font-bold text-red-600 mt-1 block">14.0%</span>
          <span className="text-[10px] text-slate-400">1,400 loans breach SLA</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <span className="text-[11px] text-slate-500 font-medium block">First-Time-Right</span>
          <span className="text-xl font-bold text-slate-700 mt-1 block">48.0%</span>
          <span className="text-[10px] text-slate-400">&gt; half require rework</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <span className="text-[11px] text-slate-500 font-medium block">Status Calls / App</span>
          <span className="text-xl font-bold text-slate-700 mt-1 block">3.2 Calls</span>
          <span className="text-[10px] text-slate-400">32,000 calls / month</span>
        </div>
      </div>

      {/* Scope Boundaries: In-Scope vs Out-of-Scope */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* In-Scope */}
        <div className="bg-white rounded-xl p-6 border border-emerald-200 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-3">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>In-Scope (Origination Lifecycle)</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-700">
            {[
              'Omni-channel application capture (Branch & Web Portal)',
              'Dynamic document checklists and client-side pre-validation',
              'Automated KYC identity registry & AML watchlist screening',
              'Credit Bureau API ingestion & automated Debt-to-Income (DTI) engine',
              'Credit risk decisioning (Straight-Through Processing for Tier 1)',
              'Licensed Underwriter exception workbench and adverse action logging',
              'Digital sanction letter issuance and mobile OTP cryptographic e-Sign',
              'Automated payment release instruction to Core Banking rails',
              'Real-time customer status tracker & proactive SLA monitors'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Out-of-Scope */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm bg-slate-50/50">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
            <X className="w-4 h-4 text-slate-400" />
            <span>Out-of-Scope (Explicit Exclusions)</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-600">
            {[
              'Post-disbursement loan servicing and monthly statement billing',
              'Collections, delinquent loan tracking, and legal debt recovery',
              'Loan restructuring, tenor extensions, and hardship refinancing',
              'Mortgage and secured asset lending (property valuation, title registry)',
              'Small business working capital and corporate syndicated debt facilities',
              'Treasury management and capital adequacy reserve reporting'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-slate-400 font-bold">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200 text-[11px] text-amber-800 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span><strong>BA Governance Note:</strong> Strictly bounding scope prevents scope creep and ensures deliverable focus on origination friction.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
