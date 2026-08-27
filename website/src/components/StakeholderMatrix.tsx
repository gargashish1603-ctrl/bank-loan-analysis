import React, { useState } from 'react';
import { Users } from 'lucide-react';
import { STAKEHOLDERS } from '../data/baData';
import type { Stakeholder } from '../data/baData';

export const StakeholderMatrix: React.FC = () => {
  const [selectedQuadrant, setSelectedQuadrant] = useState<string>('All');
  const [selectedStakeholder, setSelectedStakeholder] = useState<Stakeholder>(STAKEHOLDERS[0]);

  const filteredStakeholders = selectedQuadrant === 'All'
    ? STAKEHOLDERS
    : STAKEHOLDERS.filter(s => s.quadrant === selectedQuadrant);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
          <Users className="w-4 h-4" />
          <span>Stakeholder Analysis & Governance</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Stakeholder Profile Matrix & Power-Interest Grid</h2>
        <p className="mt-2 text-sm text-slate-600">
          Analysis of 11 key stakeholder groups across business, operations, compliance, and enterprise technology units involved in the Personal Loan Origination lifecycle.
        </p>

        {/* Filter Badges */}
        <div className="mt-4 flex flex-wrap gap-2 pt-4 border-t border-slate-100 text-xs">
          <span className="text-slate-500 font-medium py-1">Filter by Quadrant:</span>
          {['All', 'Manage Closely', 'Keep Satisfied', 'Keep Informed', 'Monitor'].map((q) => (
            <button
              key={q}
              onClick={() => setSelectedQuadrant(q)}
              className={`px-3 py-1 rounded-full font-medium transition-colors ${
                selectedQuadrant === q
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Grid View & 2x2 Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Stakeholder Directory */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Stakeholder Directory ({filteredStakeholders.length})</span>
            <span className="text-xs text-slate-500">Click a row to inspect profile</span>
          </div>
          <div className="divide-y divide-slate-100 overflow-y-auto max-h-[480px]">
            {filteredStakeholders.map((s) => {
              const isSelected = selectedStakeholder.id === s.id;
              return (
                <div
                  key={s.id}
                  onClick={() => setSelectedStakeholder(s)}
                  className={`p-3.5 text-xs transition-colors cursor-pointer flex items-center justify-between ${
                    isSelected ? 'bg-blue-50/80 border-l-4 border-blue-600' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-700 text-xs">
                      {s.id.replace('STK-', '')}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">{s.name}</span>
                        <span className="text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">{s.role}</span>
                      </div>
                      <span className="text-slate-500 text-[11px] block mt-0.5">{s.orgUnit}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-2 py-0.5 text-[10px] font-semibold rounded ${
                      s.quadrant === 'Manage Closely' ? 'bg-red-100 text-red-700' :
                      s.quadrant === 'Keep Satisfied' ? 'bg-amber-100 text-amber-800' :
                      s.quadrant === 'Keep Informed' ? 'bg-blue-100 text-blue-800' :
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {s.quadrant}
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Inf: {s.influence} | Int: {s.interest}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Stakeholder Detail Card */}
        <div className="lg:col-span-5 bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{selectedStakeholder.id}</span>
                <h3 className="text-lg font-bold text-slate-900">{selectedStakeholder.name}</h3>
                <span className="text-xs text-slate-500">{selectedStakeholder.role} • {selectedStakeholder.orgUnit}</span>
              </div>
              <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${
                selectedStakeholder.quadrant === 'Manage Closely' ? 'bg-red-100 text-red-700 border border-red-200' :
                selectedStakeholder.quadrant === 'Keep Satisfied' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                selectedStakeholder.quadrant === 'Keep Informed' ? 'bg-blue-100 text-blue-800 border border-blue-200' :
                'bg-slate-100 text-slate-700'
              }`}>
                {selectedStakeholder.quadrant}
              </span>
            </div>

            <div className="space-y-3.5 text-xs">
              <div>
                <span className="font-bold text-slate-700 block mb-1">Key Responsibilities:</span>
                <p className="text-slate-600 bg-slate-50 p-2.5 rounded border border-slate-100 leading-relaxed">
                  {selectedStakeholder.responsibilities}
                </p>
              </div>

              <div>
                <span className="font-bold text-red-700 block mb-1">Current AS-IS Pain Points:</span>
                <p className="text-slate-700 bg-red-50/60 p-2.5 rounded border border-red-100 leading-relaxed">
                  {selectedStakeholder.painPoints}
                </p>
              </div>

              <div>
                <span className="font-bold text-emerald-700 block mb-1">BA Engagement & Solution Strategy:</span>
                <p className="text-slate-700 bg-emerald-50/60 p-2.5 rounded border border-emerald-100 leading-relaxed">
                  {selectedStakeholder.engagement}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex justify-between">
            <span>Power / Influence: <strong>{selectedStakeholder.influence}</strong></span>
            <span>Interest Level: <strong>{selectedStakeholder.interest}</strong></span>
          </div>
        </div>
      </div>

      {/* 2x2 Visual Power-Interest Grid */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-4">Visual 2x2 Power-Interest Governance Grid</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {/* Top-Left: Keep Satisfied */}
          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200">
            <div className="flex items-center justify-between font-bold text-amber-900 border-b border-amber-200/80 pb-2 mb-2">
              <span>KEEP SATISFIED (High Power / Med Interest)</span>
              <span className="text-[10px] bg-amber-200/60 px-2 py-0.5 rounded">3 Stakeholders</span>
            </div>
            <ul className="space-y-1.5 text-slate-700">
              <li>• <strong>Branch Operations (STK-03):</strong> Involve in scanner testing & UI walkthroughs.</li>
              <li>• <strong>Disbursement Team (STK-08):</strong> Align on Core Banking payment automation.</li>
              <li>• <strong>Enterprise IT / SysAdmin (STK-10):</strong> Involve in API architecture and security reviews.</li>
            </ul>
          </div>

          {/* Top-Right: Manage Closely */}
          <div className="p-4 rounded-xl bg-red-50/60 border border-red-200">
            <div className="flex items-center justify-between font-bold text-red-900 border-b border-red-200/80 pb-2 mb-2">
              <span>MANAGE CLOSELY (High Power / High Interest)</span>
              <span className="text-[10px] bg-red-200/60 px-2 py-0.5 rounded">5 Stakeholders</span>
            </div>
            <ul className="space-y-1.5 text-slate-700">
              <li>• <strong>Loan Operations Lead (STK-04):</strong> JAD sessions on intake pre-validation & OCR.</li>
              <li>• <strong>KYC / AML Analyst (STK-05):</strong> Direct sign-off on automated registry screening rules.</li>
              <li>• <strong>Credit Risk Analyst (STK-06):</strong> Codify DTI formulas and bureau score thresholds.</li>
              <li>• <strong>Senior Underwriter (STK-07):</strong> Calibrate Straight-Through Processing (STP) rules.</li>
              <li>• <strong>Compliance & Risk Directorate (STK-11):</strong> Ensure Fair Lending compliance & audit logs.</li>
            </ul>
          </div>

          {/* Bottom-Left: Monitor */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between font-bold text-slate-700 border-b border-slate-200 pb-2 mb-2">
              <span>MONITOR (Low Power / Low Interest)</span>
              <span className="text-[10px] bg-slate-200 px-2 py-0.5 rounded">External Support</span>
            </div>
            <ul className="space-y-1.5 text-slate-600">
              <li>• <strong>General Branch Support Staff:</strong> Periodic newsletter updates on rollout dates.</li>
              <li>• <strong>Infrastructure Vendors:</strong> Standard SLA reviews and monitoring.</li>
            </ul>
          </div>

          {/* Bottom-Right: Keep Informed */}
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200">
            <div className="flex items-center justify-between font-bold text-blue-900 border-b border-blue-200/80 pb-2 mb-2">
              <span>KEEP INFORMED (Med Power / High Interest)</span>
              <span className="text-[10px] bg-blue-200/60 px-2 py-0.5 rounded">3 Stakeholders</span>
            </div>
            <ul className="space-y-1.5 text-slate-700">
              <li>• <strong>Retail Loan Applicant (STK-01):</strong> Deliver 24/7 self-service tracker & SMS push updates.</li>
              <li>• <strong>Relationship Manager (STK-02):</strong> Provide tablet pre-qualification tool & sales roadshows.</li>
              <li>• <strong>Branch Manager (STK-09):</strong> Deliver real-time branch pipeline & SLA dashboard.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
