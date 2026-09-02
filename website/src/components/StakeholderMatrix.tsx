import React, { useState } from 'react';
import { Users } from 'lucide-react';
import { STAKEHOLDERS } from '../data/baData';
import type { Stakeholder } from '../data/baData';

export const StakeholderMatrix: React.FC = () => {
  const [selectedQuadrant, setSelectedQuadrant] = useState<string>('All');
  const [selectedStakeholder, setSelectedStakeholder] = useState<Stakeholder>(STAKEHOLDERS[3]); // Loan Ops default

  const filteredStakeholders = selectedQuadrant === 'All'
    ? STAKEHOLDERS
    : STAKEHOLDERS.filter((s) => s.quadrant === selectedQuadrant);

  return (
    <section id="stakeholders" className="space-y-8">
      {/* Section Header */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
          <Users className="w-4 h-4" />
          <span>Stakeholder Governance</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Stakeholder Profile & Power–Interest Matrix
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-4xl leading-relaxed">
          Comprehensive stakeholder analysis across the 8 core roles in business sourcing, operations, compliance verification, credit risk, underwriting, and core technology systems.
        </p>

        {/* Quadrant Filter Bar */}
        <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100 text-xs">
          <span className="text-slate-500 font-semibold py-1">Filter by Quadrant:</span>
          {['All', 'Manage Closely', 'Keep Satisfied', 'Keep Informed', 'Monitor'].map((q) => (
            <button
              key={q}
              onClick={() => setSelectedQuadrant(q)}
              className={`px-3 py-1 rounded-full font-semibold transition-all ${
                selectedQuadrant === q
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Directory & Detail Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Stakeholder Directory List */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Stakeholder Directory ({filteredStakeholders.length})
            </span>
            <span className="text-[11px] text-slate-500">Click a card to inspect BA engagement profile</span>
          </div>

          <div className="divide-y divide-slate-100 overflow-y-auto max-h-[460px]">
            {filteredStakeholders.map((s) => {
              const isSelected = selectedStakeholder.id === s.id;
              return (
                <div
                  key={s.id}
                  onClick={() => setSelectedStakeholder(s)}
                  className={`p-3.5 text-xs transition-colors cursor-pointer flex items-center justify-between ${
                    isSelected ? 'bg-blue-50/90 border-l-4 border-blue-600' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-700 text-xs shrink-0">
                      {s.id.replace('STK-', '')}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">{s.name}</span>
                        <span className="text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 font-medium">
                          {s.role}
                        </span>
                      </div>
                      <span className="text-slate-500 text-[11px] block mt-0.5">{s.orgUnit}</span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span
                      className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded ${
                        s.quadrant === 'Manage Closely'
                          ? 'bg-red-100 text-red-700 border border-red-200'
                          : s.quadrant === 'Keep Satisfied'
                          ? 'bg-amber-100 text-amber-800 border border-amber-200'
                          : s.quadrant === 'Keep Informed'
                          ? 'bg-blue-100 text-blue-800 border border-blue-200'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {s.quadrant}
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      Power: {s.influence} • Int: {s.interest}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Stakeholder Detail Panel */}
        <div className="lg:col-span-5 bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{selectedStakeholder.id}</span>
                <h3 className="text-lg font-bold text-slate-900 leading-tight">{selectedStakeholder.name}</h3>
                <span className="text-xs text-slate-500 font-medium">{selectedStakeholder.role} • {selectedStakeholder.orgUnit}</span>
              </div>
              <span
                className={`px-2.5 py-1 text-xs font-bold rounded-full ${
                  selectedStakeholder.quadrant === 'Manage Closely'
                    ? 'bg-red-100 text-red-700 border border-red-200'
                    : selectedStakeholder.quadrant === 'Keep Satisfied'
                    ? 'bg-amber-100 text-amber-800 border border-amber-200'
                    : selectedStakeholder.quadrant === 'Keep Informed'
                    ? 'bg-blue-100 text-blue-800 border border-blue-200'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                {selectedStakeholder.quadrant}
              </span>
            </div>

            <div className="space-y-3.5 text-xs">
              <div>
                <span className="font-bold text-slate-700 block mb-1">Process Involvement & Responsibility:</span>
                <p className="text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100 leading-relaxed">
                  {selectedStakeholder.responsibilities}
                </p>
              </div>

              <div>
                <span className="font-bold text-red-700 block mb-1">Key AS-IS Concern / Pain Point:</span>
                <p className="text-slate-700 bg-red-50/60 p-3 rounded-lg border border-red-100 leading-relaxed">
                  {selectedStakeholder.painPoints}
                </p>
              </div>

              <div>
                <span className="font-bold text-emerald-700 block mb-1">BA Engagement Approach & Solution:</span>
                <p className="text-slate-700 bg-emerald-50/60 p-3 rounded-lg border border-emerald-100 leading-relaxed">
                  {selectedStakeholder.engagement}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex justify-between">
            <span>Power / Influence: <strong className="text-slate-800">{selectedStakeholder.influence}</strong></span>
            <span>Interest Level: <strong className="text-slate-800">{selectedStakeholder.interest}</strong></span>
          </div>
        </div>
      </div>

      {/* 2x2 Power-Interest Visual Governance Grid */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
          2x2 Power–Interest Governance Matrix
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {/* Top-Left: Keep Satisfied */}
          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
            <div className="flex items-center justify-between font-bold text-amber-900 border-b border-amber-200/80 pb-2">
              <span>KEEP SATISFIED (High Power / Medium Interest)</span>
              <span className="text-[10px] bg-amber-200/60 px-2 py-0.5 rounded font-bold">2 Roles</span>
            </div>
            <ul className="space-y-1 text-slate-700 leading-relaxed">
              <li>• <strong>Branch Operations Officer (STK-03):</strong> Consult on assisted tablet scanners & UI.</li>
              <li>• <strong>Disbursement Officer (STK-08):</strong> Align on Core Banking automated payment release.</li>
            </ul>
          </div>

          {/* Top-Right: Manage Closely */}
          <div className="p-4 rounded-xl bg-red-50/60 border border-red-200 space-y-2">
            <div className="flex items-center justify-between font-bold text-red-900 border-b border-red-200/80 pb-2">
              <span>MANAGE CLOSELY (High Power / High Interest)</span>
              <span className="text-[10px] bg-red-200/60 px-2 py-0.5 rounded font-bold">4 Roles</span>
            </div>
            <ul className="space-y-1 text-slate-700 leading-relaxed">
              <li>• <strong>Loan Operations Specialist (STK-04):</strong> Co-design dynamic intake pre-validation.</li>
              <li>• <strong>KYC / AML Analyst (STK-05):</strong> Validate automated registry screening rules.</li>
              <li>• <strong>Credit Risk Analyst (STK-06):</strong> Codify algorithmic DTI formulas and bureau scores.</li>
              <li>• <strong>Senior Underwriter (STK-07):</strong> Calibrate Straight-Through-Processing (STP) thresholds.</li>
            </ul>
          </div>

          {/* Bottom-Left: Monitor */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between font-bold text-slate-700 border-b border-slate-200 pb-2">
              <span>MONITOR (Low Power / Low Interest)</span>
              <span className="text-[10px] bg-slate-200 px-2 py-0.5 rounded font-bold">External</span>
            </div>
            <ul className="space-y-1 text-slate-600 leading-relaxed">
              <li>• <strong>General Branch Support Staff:</strong> Periodic email release notices on rollout dates.</li>
              <li>• <strong>Hardware Infrastructure Vendors:</strong> Standard SLA review meetings.</li>
            </ul>
          </div>

          {/* Bottom-Right: Keep Informed */}
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 space-y-2">
            <div className="flex items-center justify-between font-bold text-blue-900 border-b border-blue-200/80 pb-2">
              <span>KEEP INFORMED (Medium Power / High Interest)</span>
              <span className="text-[10px] bg-blue-200/60 px-2 py-0.5 rounded font-bold">2 Roles</span>
            </div>
            <ul className="space-y-1 text-slate-700 leading-relaxed">
              <li>• <strong>Retail Loan Applicant (STK-01):</strong> 24/7 self-service tracker & SMS event updates.</li>
              <li>• <strong>Relationship Manager (STK-02):</strong> Provide tablet pre-qualification tool & sales roadshows.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
