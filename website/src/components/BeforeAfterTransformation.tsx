import React from 'react';
import { CheckCircle2, TrendingDown, Clock, RefreshCw, ShieldAlert, Sparkles, TrendingUp } from 'lucide-react';

export const BeforeAfterTransformation: React.FC = () => {
  const metricComparisons = [
    {
      title: 'Average Turnaround Time (TAT)',
      asIs: '5.0 Days',
      toBe: '1.8 Days',
      change: '-64% Cycle Time',
      trend: 'positive',
      icon: Clock,
      description: 'Total elapsed time from application submission to fund disbursement.'
    },
    {
      title: 'Document Rework Rate',
      asIs: '35.0%',
      toBe: '8.0%',
      change: '-77% Rework Volume',
      trend: 'positive',
      icon: RefreshCw,
      description: 'Percentage of applications requiring secondary customer document uploads.'
    },
    {
      title: 'SLA Breach Rate',
      asIs: '14.0%',
      toBe: '4.0%',
      change: '-71% SLA Breaches',
      trend: 'positive',
      icon: ShieldAlert,
      description: 'Percentage of files exceeding standard 5.0-day SLA limits.'
    },
    {
      title: 'Straight-Through Processing (STP)',
      asIs: '0.0%',
      toBe: '38.0%',
      change: '+38% Zero-Touch',
      trend: 'positive',
      icon: Sparkles,
      description: 'Percentage of low-risk applications approved automatically in <10 seconds.'
    },
    {
      title: 'First-Time-Right (FTR) Rate',
      asIs: '48.0%',
      toBe: '82.0%',
      change: '+71% Quality',
      trend: 'positive',
      icon: CheckCircle2,
      description: 'Percentage of applications passing through intake with zero document deficiencies.'
    },
    {
      title: 'Inbound Status Calls / Loan',
      asIs: '3.2 Calls',
      toBe: '0.6 Calls',
      change: '-81% Call Load',
      trend: 'positive',
      icon: TrendingDown,
      description: 'Average phone inquiries and branch visits per active applicant.'
    }
  ];

  const processComparisons = [
    { dimension: 'Document Intake & Inspection', asIs: 'Manual inspection 24-48h post-intake by backoffice staff', toBe: 'Automated client-side pre-validation (DPI ≥ 300) at upload' },
    { dimension: 'Document Checklist Design', asIs: 'Static generic checklist for all applicant profiles', toBe: 'Dynamic context-sensitive checklist adapting to employment profile' },
    { dimension: 'System Data Handoffs', asIs: 'Manual copy-pasting across 4 disconnected software screens', toBe: 'Enterprise RESTful API Gateway real-time data synchronization' },
    { dimension: 'Credit Assessment Method', asIs: 'Manual bureau PDF downloads & Excel spreadsheet DTI', toBe: 'Direct credit bureau API ingestion & algorithmic DTI calculation' },
    { dimension: 'Underwriting Operating Model', asIs: '100% manual review in an undifferentiated FIFO queue', toBe: 'Dual-track: 38% STP auto-sanction + Exception Underwriter Desk' },
    { dimension: 'Contract Execution', asIs: 'Mandatory physical branch visit for wet-ink contract signing', toBe: 'Mobile OTP two-factor cryptographic digital e-Signature' },
    { dimension: 'Payment Disbursement', asIs: 'Manual batch keying into Core Banking payment files', toBe: 'Automated Core Banking API funds release within <15 minutes' },
    { dimension: 'Operational SLA Governance', asIs: 'Reactive tracking identified only after customer complaints', toBe: 'Proactive countdown timers triggering alerts at 50% & 75% thresholds' }
  ];

  return (
    <section id="before-after" className="space-y-8">
      {/* Section Header */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
          <TrendingUp className="w-4 h-4" />
          <span>Operational Transformation</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Before vs. After Transformation Benchmarks
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-4xl leading-relaxed">
              Side-by-side performance transformation comparing AS-IS operational friction against target TO-BE operating benchmarks.
            </p>
          </div>
          <div className="shrink-0">
            <span className="text-[10px] text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200 font-bold uppercase tracking-wider block">
              ILLUSTRATIVE TARGET-STATE ASSUMPTIONS
            </span>
          </div>
        </div>
      </div>

      {/* 6 Metric Comparison Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {metricComparisons.map((card, idx) => (
          <div key={idx} className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-sm transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-800">{card.title}</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  {card.change}
                </span>
              </div>

              {/* Side-by-Side Values */}
              <div className="grid grid-cols-2 gap-2 my-3 p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">AS-IS Baseline</span>
                  <span className="text-base font-extrabold text-red-600">{card.asIs}</span>
                </div>
                <div className="border-l border-slate-200 pl-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">TO-BE Target</span>
                  <span className="text-base font-extrabold text-emerald-600">{card.toBe}</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 leading-relaxed">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Process Characteristics Comparison Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between text-xs font-bold uppercase tracking-wider">
          <span>Operational Characteristics: AS-IS vs. TO-BE Operating Model</span>
          <span className="text-slate-400 font-normal">8 Core Dimensions</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <th className="p-3.5 w-1/4">Operating Dimension</th>
                <th className="p-3.5 w-3/8 text-red-900 bg-red-50/50">AS-IS Operating Model</th>
                <th className="p-3.5 w-3/8 text-emerald-900 bg-emerald-50/50">TO-BE Operating Model</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {processComparisons.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 font-bold text-slate-900">{item.dimension}</td>
                  <td className="p-3.5 text-slate-700 bg-red-50/20 leading-relaxed font-medium">
                    {item.asIs}
                  </td>
                  <td className="p-3.5 text-slate-900 bg-emerald-50/20 leading-relaxed font-semibold">
                    {item.toBe}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
