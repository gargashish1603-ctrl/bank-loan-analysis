import React, { useState } from 'react';
import { GitBranch, Clock, AlertTriangle, CheckCircle2, ArrowRight, Zap, RefreshCw, FileCheck } from 'lucide-react';

export const ProcessSwimlanes: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'as-is' | 'to-be'>('to-be');

  return (
    <div className="space-y-8">
      {/* Tab Switcher & Header */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
            <GitBranch className="w-4 h-4" />
            <span>Process Modeling & Swimlanes</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            {activeTab === 'as-is' ? 'Current-State (AS-IS) Process Map' : 'Optimized Future-State (TO-BE) Process Map'}
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            {activeTab === 'as-is'
              ? 'Baseline 8-swimlane manual flow with 35% rework loops and 32.6 hours of idle queue latency.'
              : 'Automation-first, dual-track flow: 38% Straight-Through-Processing (STP) + Underwriter Exception Desk (1.8 Days TAT).'}
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 shrink-0">
          <button
            onClick={() => setActiveTab('as-is')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'as-is'
                ? 'bg-red-600 text-white shadow'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>AS-IS Baseline (5.0 Days)</span>
          </button>
          <button
            onClick={() => setActiveTab('to-be')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'to-be'
                ? 'bg-emerald-600 text-white shadow'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>TO-BE Optimized (1.8 Days)</span>
          </button>
        </div>
      </div>

      {/* Process Map Interactive Visualizer */}
      {activeTab === 'as-is' ? (
        <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-red-100 pb-3">
            <span className="text-xs font-bold text-red-700 uppercase tracking-wider">
              AS-IS Process Flow (100% Manual Underwriting & Sequential Rework)
            </span>
            <span className="px-2.5 py-1 text-xs font-bold rounded bg-red-100 text-red-800">
              Total Elapsed TAT: 40.0 Working Hours (5.0 Business Days)
            </span>
          </div>

          {/* AS-IS Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            {/* Step 1 */}
            <div className="p-4 rounded-xl bg-red-50/60 border border-red-200">
              <span className="text-[10px] font-bold text-red-600 uppercase block mb-1">Stage 1: Intake (1.5h)</span>
              <h4 className="font-bold text-slate-900 mb-1">Static Form & Paper Upload</h4>
              <p className="text-slate-600 text-[11px] mb-2">Customer fills static web or paper form. 18% missing fields.</p>
              <div className="p-1.5 rounded bg-white border border-red-100 text-[10px] text-red-700 font-medium">
                RM manually re-keys into CRM
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl bg-red-50/60 border-2 border-red-400 shadow-sm relative">
              <span className="absolute -top-2 right-2 px-1.5 py-0.5 rounded bg-red-600 text-white text-[9px] font-bold">BOTTLENECK</span>
              <span className="text-[10px] font-bold text-red-600 uppercase block mb-1">Stage 2: Doc Review (8.5h)</span>
              <h4 className="font-bold text-slate-900 mb-1">Manual Document Inspection</h4>
              <p className="text-slate-600 text-[11px] mb-2">Ops staff manually check PDFs. 35% rework loop generated via batch email (+48h lag).</p>
              <div className="p-1.5 rounded bg-white border border-red-200 text-[10px] text-red-700 font-bold">
                Idle Wait Latency: +7.3 Hours
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl bg-red-50/60 border border-red-200">
              <span className="text-[10px] font-bold text-red-600 uppercase block mb-1">Stage 3 & 4: KYC & Credit (10.5h)</span>
              <h4 className="font-bold text-slate-900 mb-1">Portal Search & Excel DTI</h4>
              <p className="text-slate-600 text-[11px] mb-2">Manual typing into government registries; analyst calculates DTI on Excel sheet.</p>
              <div className="p-1.5 rounded bg-white border border-red-100 text-[10px] text-red-700 font-medium">
                11.5% Data Transcription Errors
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-4 rounded-xl bg-red-50/60 border-2 border-red-400 shadow-sm relative">
              <span className="absolute -top-2 right-2 px-1.5 py-0.5 rounded bg-red-600 text-white text-[9px] font-bold">BOTTLENECK</span>
              <span className="text-[10px] font-bold text-red-600 uppercase block mb-1">Stage 5: Underwriting (11.0h)</span>
              <h4 className="font-bold text-slate-900 mb-1">100% FIFO Manual Review</h4>
              <p className="text-slate-600 text-[11px] mb-2">Standard low-risk loans sit behind complex files in an undifferentiated queue.</p>
              <div className="p-1.5 rounded bg-white border border-red-200 text-[10px] text-red-700 font-bold">
                Idle Queue Wait: +9.5 Hours
              </div>
            </div>
          </div>

          {/* Rework Callout */}
          <div className="p-4 rounded-xl bg-red-100/60 border border-red-300 text-xs text-red-900 flex items-center justify-between">
            <div>
              <span className="font-bold block">The 35% Asynchronous Rework Loop:</span>
              <span>When documents fail inspection, backoffice staff dispatch manual emails. The applicant takes ~26 hours to re-upload, and the file is placed back at the end of the queue.</span>
            </div>
            <span className="px-3 py-1 bg-red-600 text-white font-bold rounded text-xs shrink-0">+24 to 48 Hours Added</span>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-emerald-200 shadow-sm p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-emerald-100 pb-3">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
              TO-BE Dual-Track Operating Model (Automation-First + Exception-Based)
            </span>
            <span className="px-2.5 py-1 text-xs font-bold rounded bg-emerald-100 text-emerald-800">
              Total Elapsed TAT: 14.4 Working Hours (1.8 Business Days)
            </span>
          </div>

          {/* TO-BE Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            {/* Step 1 */}
            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200">
              <span className="text-[10px] font-bold text-emerald-600 uppercase block mb-1">1. Digital Intake & Pre-Check</span>
              <h4 className="font-bold text-slate-900 mb-1">Dynamic Checklist & Pre-Validation</h4>
              <p className="text-slate-600 text-[11px] mb-2">Instant client-side DPI resolution check (≥300 DPI). Real-time error alerts.</p>
              <div className="p-1.5 rounded bg-emerald-100 border border-emerald-200 text-[10px] text-emerald-800 font-bold">
                Rework Rate: 35% → 8.0%
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200">
              <span className="text-[10px] font-bold text-emerald-600 uppercase block mb-1">2. Automated Ingestion & KYC</span>
              <h4 className="font-bold text-slate-900 mb-1">National ID & AML REST APIs</h4>
              <p className="text-slate-600 text-[11px] mb-2">Automated identity verification & sanctions screening in &lt; 3.0 seconds.</p>
              <div className="p-1.5 rounded bg-emerald-100 border border-emerald-200 text-[10px] text-emerald-800 font-bold">
                KYC Cycle Time: 4.0h → &lt; 5 mins
              </div>
            </div>

            {/* Step 3: Dual Track Decision */}
            <div className="p-4 rounded-xl bg-gradient-to-b from-amber-50/80 to-emerald-50/80 border-2 border-emerald-400 shadow-sm">
              <span className="text-[10px] font-bold text-amber-700 uppercase block mb-1">3. Decisioning Segmentation</span>
              <h4 className="font-bold text-slate-900 mb-1">★ 38% STP Auto-Approval</h4>
              <p className="text-slate-600 text-[11px] mb-2">Tier 1 low risk approved in &lt; 10s. Complex files route to Underwriter Workbench.</p>
              <div className="p-1.5 rounded bg-white border border-emerald-300 text-[10px] text-emerald-800 font-bold">
                Queue Wait: 9.5h → Instant / 2.5h
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200">
              <span className="text-[10px] font-bold text-emerald-600 uppercase block mb-1">4. e-Sign & Instant Payment</span>
              <h4 className="font-bold text-slate-900 mb-1">Mobile OTP e-Sign & Core API</h4>
              <p className="text-slate-600 text-[11px] mb-2">Digital sanction letter executed via mobile OTP; automated Core Banking release.</p>
              <div className="p-1.5 rounded bg-emerald-100 border border-emerald-200 text-[10px] text-emerald-800 font-bold">
                Settlement Lag: 24h → &lt; 15 mins
              </div>
            </div>
          </div>

          {/* Underwriter Governance Callout */}
          <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-xs text-blue-900 flex items-center justify-between">
            <div>
              <span className="font-bold block text-blue-950">Preserving Human Risk Controls (Exception-Based):</span>
              <span className="text-blue-800">The TO-BE process does NOT eliminate human underwriters. 62% of complex applications (DTI &gt; 35%, Score 650–749, Self-employed, Loans &gt; $25k) are reviewed on the unified Underwriter Workbench with pre-calculated ratios.</span>
            </div>
            <span className="px-3 py-1 bg-blue-600 text-white font-bold rounded text-xs shrink-0">100% Policy Compliance</span>
          </div>
        </div>
      )}

      {/* Side-by-Side Dimension Comparison Table */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm overflow-x-auto">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-4">Granular Process Dimension Comparison</h3>
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
              <th className="p-3 font-bold">Operational Dimension</th>
              <th className="p-3 font-bold text-red-700">AS-IS Current State</th>
              <th className="p-3 font-bold text-emerald-700">TO-BE Future State</th>
              <th className="p-3 font-bold text-slate-900">Expected Business Impact</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-600">
            <tr>
              <td className="p-3 font-bold text-slate-800">1. Intake & Validation</td>
              <td className="p-3 bg-red-50/40 text-red-800">Static form; manual backoffice review 24-48h later</td>
              <td className="p-3 bg-emerald-50/40 text-emerald-800 font-semibold">Dynamic profile checklist + real-time client-side DPI check</td>
              <td className="p-3 font-bold text-slate-900">Document rework drops from 35% to 8%</td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-slate-800">2. Compliance & KYC</td>
              <td className="p-3 bg-red-50/40 text-red-800">Manual copy-pasting into government portals</td>
              <td className="p-3 bg-emerald-50/40 text-emerald-800 font-semibold">Automated real-time REST APIs to National ID & AML databases</td>
              <td className="p-3 font-bold text-slate-900">KYC verification time drops from 4.0h to &lt; 5 mins</td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-slate-800">3. Underwriting Model</td>
              <td className="p-3 bg-red-50/40 text-red-800">100% manual review in single undifferentiated FIFO queue</td>
              <td className="p-3 bg-emerald-50/40 text-emerald-800 font-semibold">Dual-track: 38% automated STP + Exception Underwriter Desk</td>
              <td className="p-3 font-bold text-slate-900">Queue dwell time drops from 9.5h to instant / 2.5h</td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-slate-800">4. Agreement & Signing</td>
              <td className="p-3 bg-red-50/40 text-red-800">Branch physical wet-ink contract signing (24h lag)</td>
              <td className="p-3 bg-emerald-50/40 text-emerald-800 font-semibold">Mobile OTP cryptographic e-Signature</td>
              <td className="p-3 font-bold text-slate-900">Contract execution time drops from 24h to &lt; 10 mins</td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-slate-800">5. Funds Disbursement</td>
              <td className="p-3 bg-red-50/40 text-red-800">Manual batch keying into Core Banking payment batches</td>
              <td className="p-3 bg-emerald-50/40 text-emerald-800 font-semibold">Automated Core Banking API payment trigger upon e-Sign</td>
              <td className="p-3 font-bold text-slate-900">Disbursement released in &lt; 15 mins post-approval</td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-slate-800">6. Customer Tracking</td>
              <td className="p-3 bg-red-50/40 text-red-800">Zero tracking; 3.2 inbound inquiry calls/loan</td>
              <td className="p-3 bg-emerald-50/40 text-emerald-800 font-semibold">24/7 5-stage self-service tracker + SMS/Email push alerts</td>
              <td className="p-3 font-bold text-slate-900">Status calls decline by 81% (3.2 → 0.6 calls)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
