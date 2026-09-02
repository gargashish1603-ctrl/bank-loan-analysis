import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { RISKS_DATA } from '../data/baData';

export const RiskRegisterView: React.FC = () => {
  return (
    <section id="risk-register" className="space-y-8">
      {/* Section Header */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">
          <ShieldAlert className="w-4 h-4" />
          <span>Governance & Risk Management</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Enterprise Risk Register & Mitigation Strategy
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-4xl leading-relaxed">
              5x5 Probability–Impact assessment analyzing operational, architectural, regulatory, and adoption risks across the transformation lifecycle.
            </p>
          </div>
          <div className="shrink-0">
            <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs border border-slate-200">
              8 Managed Risk Items
            </span>
          </div>
        </div>
      </div>

      {/* Risk Register Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between text-xs font-bold uppercase tracking-wider">
          <span>Enterprise Risk Log (5x5 Impact Matrix)</span>
          <span className="text-slate-400 font-normal">Ranked by Severity Score</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 text-[11px] uppercase">
                <th className="p-3.5">Risk Description & Category</th>
                <th className="p-3.5 text-center">Prob (1-5)</th>
                <th className="p-3.5 text-center">Imp (1-5)</th>
                <th className="p-3.5 text-center">Score</th>
                <th className="p-3.5">Severity</th>
                <th className="p-3.5 w-2/5">Planned Mitigation Action</th>
                <th className="p-3.5">Accountable Owner</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {RISKS_DATA.map((risk) => (
                <tr key={risk.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-3.5 font-bold text-slate-900">
                    <span className="text-[10px] text-blue-600 block uppercase">{risk.id} • {risk.category}</span>
                    {risk.title}
                  </td>
                  <td className="p-3.5 text-center font-bold text-slate-700">{risk.prob}</td>
                  <td className="p-3.5 text-center font-bold text-slate-700">{risk.imp}</td>
                  <td className="p-3.5 text-center font-extrabold text-slate-900">{risk.score}</td>
                  <td className="p-3.5">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        risk.severity === 'Critical'
                          ? 'bg-red-600 text-white'
                          : risk.severity === 'High'
                          ? 'bg-red-100 text-red-800 border border-red-200'
                          : risk.severity === 'Medium'
                          ? 'bg-amber-100 text-amber-800 border border-amber-200'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {risk.severity}
                    </span>
                  </td>
                  <td className="p-3.5 text-slate-700 leading-relaxed font-medium">
                    {risk.mitigation}
                  </td>
                  <td className="p-3.5 text-slate-600 text-[11px] font-semibold">
                    {risk.owner}
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
