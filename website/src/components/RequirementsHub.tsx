import React, { useState } from 'react';
import { FileCode } from 'lucide-react';
import {
  BUSINESS_REQUIREMENTS,
  FUNCTIONAL_REQUIREMENTS,
  NON_FUNCTIONAL_REQUIREMENTS,
  BUSINESS_RULES,
  USER_STORIES_DATA
} from '../data/baData';
import type { Requirement } from '../data/baData';

export const RequirementsHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'BR' | 'FR' | 'NFR' | 'BRULE' | 'US' | 'AC'>('BR');
  const [selectedReq, setSelectedReq] = useState<Requirement | null>(BUSINESS_REQUIREMENTS[0]);
  const [priorityFilter, setPriorityFilter] = useState<string>('All');

  const tabs = [
    { id: 'BR', label: 'BR — Business Requirements', count: BUSINESS_REQUIREMENTS.length },
    { id: 'FR', label: 'FR — Functional Requirements', count: FUNCTIONAL_REQUIREMENTS.length },
    { id: 'NFR', label: 'NFR — Non-Functional Requirements', count: NON_FUNCTIONAL_REQUIREMENTS.length },
    { id: 'BRULE', label: 'BRULE — Banking Business Rules', count: BUSINESS_RULES.length },
    { id: 'US', label: 'US — Agile User Stories', count: USER_STORIES_DATA.length },
    { id: 'AC', label: 'AC — Gherkin Acceptance Criteria', count: USER_STORIES_DATA.length }
  ];

  const currentReqList = activeTab === 'BR'
    ? BUSINESS_REQUIREMENTS
    : activeTab === 'FR'
    ? FUNCTIONAL_REQUIREMENTS
    : NON_FUNCTIONAL_REQUIREMENTS;

  const filteredReqList = priorityFilter === 'All'
    ? currentReqList
    : currentReqList.filter((r) => r.priority === priorityFilter);

  return (
    <section id="requirements" className="space-y-8">
      {/* Section Header */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
          <FileCode className="w-4 h-4" />
          <span>Requirements Engineering</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Requirements Specification & Business Rules Hub
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-4xl leading-relaxed">
              Complete requirements catalog covering Business Requirements (BR), Functional Requirements (FR), Non-Functional Requirements (NFR), codified Banking Business Rules (BRULE), and testable Gherkin Acceptance Criteria (AC).
            </p>
          </div>
        </div>

        {/* Requirements Tab Navigation */}
        <div className="mt-6 flex space-x-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-100 text-xs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any);
                setPriorityFilter('All');
                if (tab.id === 'BR') setSelectedReq(BUSINESS_REQUIREMENTS[0]);
                if (tab.id === 'FR') setSelectedReq(FUNCTIONAL_REQUIREMENTS[0]);
                if (tab.id === 'NFR') setSelectedReq(NON_FUNCTIONAL_REQUIREMENTS[0]);
              }}
              className={`px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-xs font-bold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`px-1.5 py-0.5 text-[10px] rounded-full font-bold ${
                activeTab === tab.id ? 'bg-blue-700 text-white' : 'bg-slate-200 text-slate-700'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 1. BR / FR / NFR View */}
      {(activeTab === 'BR' || activeTab === 'FR' || activeTab === 'NFR') && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Requirements List */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            <div className="p-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700">
              <span>{activeTab} Specifications ({filteredReqList.length})</span>
              <span className="text-[11px] text-slate-400 font-normal">Click a card to inspect details</span>
            </div>

            <div className="divide-y divide-slate-100 overflow-y-auto max-h-[440px]">
              {filteredReqList.map((req) => {
                const isSelected = selectedReq?.id === req.id;
                return (
                  <div
                    key={req.id}
                    onClick={() => setSelectedReq(req)}
                    className={`p-3.5 text-xs transition-colors cursor-pointer flex items-center justify-between ${
                      isSelected ? 'bg-blue-50/90 border-l-4 border-blue-600' : 'hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-blue-600 font-mono">{req.id}</span>
                        <span className="font-bold text-slate-900">{req.title}</span>
                      </div>
                      <span className="text-slate-500 text-[11px] block mt-0.5">{req.category}</span>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">
                        {req.priority}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Requirement Detail Drawer */}
          {selectedReq && (
            <div className="lg:col-span-5 bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest font-mono">{selectedReq.id}</span>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">{selectedReq.title}</h3>
                    <span className="text-xs text-slate-500">{selectedReq.category}</span>
                  </div>
                  <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                    {selectedReq.priority}
                  </span>
                </div>

                <div className="space-y-3 mt-4 text-xs">
                  <div>
                    <span className="font-bold text-slate-700 block mb-1">Requirement Specification:</span>
                    <p className="text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100 leading-relaxed font-medium">
                      {selectedReq.description}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-slate-700 block mb-1">Business Rationale:</span>
                    <p className="text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100 leading-relaxed">
                      {selectedReq.rationale}
                    </p>
                  </div>

                  {selectedReq.businessValue && (
                    <div>
                      <span className="font-bold text-emerald-700 block mb-1">Projected Business Value:</span>
                      <p className="text-slate-700 bg-emerald-50/60 p-3 rounded-lg border border-emerald-100 leading-relaxed font-semibold">
                        {selectedReq.businessValue}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex justify-between">
                <span>Source Problem: <strong className="text-slate-800 font-mono">{selectedReq.relatedProblem}</strong></span>
                {selectedReq.relatedProcessStep && (
                  <span>Stage: <strong className="text-slate-800">{selectedReq.relatedProcessStep}</strong></span>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 2. BRULE — Banking Business Rules View */}
      {activeTab === 'BRULE' && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
              12 Codified Banking Business Rules & Policy Thresholds
            </h3>
            <span className="text-xs text-slate-500">Enforced across STP & Underwriting Desks</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {BUSINESS_RULES.map((rule) => (
              <div key={rule.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-blue-600 text-[11px] font-mono">{rule.id}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-800">
                      {rule.category}
                    </span>
                  </div>
                  <h4 className="font-bold text-xs text-slate-900 mb-1.5">{rule.name}</h4>
                  <p className="text-slate-700 leading-relaxed bg-white p-2.5 rounded border border-slate-200/80 mb-2 font-medium">
                    {rule.rule}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200 text-[10px] text-slate-600">
                  <span className="font-bold text-slate-700">Enforcement:</span> {rule.enforcement}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. US — Agile User Stories View */}
      {activeTab === 'US' && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                Persona-Driven Agile User Stories
              </h3>
              <span className="text-xs text-slate-500">Persona & Stakeholder Perspectives</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {USER_STORIES_DATA.map((us) => (
                <div key={us.id} className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-blue-600 text-xs font-mono">{us.id} • {us.persona}</span>
                      <span className="text-[10px] text-slate-500 font-semibold">{us.role}</span>
                    </div>
                    <p className="text-slate-800 font-medium leading-relaxed bg-white p-3 rounded-lg border border-slate-200">
                      "{us.story}"
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-200 text-[10px] text-slate-500 flex justify-between">
                    <span>Mapped FR: <strong className="text-blue-600 font-mono">{us.relatedFR}</strong></span>
                    <span className="font-bold text-emerald-700">{us.priority}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. AC — Gherkin Acceptance Criteria View */}
      {activeTab === 'AC' && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                Testable Acceptance Criteria (Gherkin Given-When-Then Syntax)
              </h3>
              <span className="text-xs text-slate-500">Behavior-Driven Development (BDD) Specifications</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {USER_STORIES_DATA.map((us) => (
                <div key={us.id} className="p-5 rounded-xl border border-slate-200 bg-slate-900 text-white space-y-3 font-mono">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-blue-400 font-bold">{us.id} • {us.persona} ({us.role})</span>
                    <span className="text-[10px] text-slate-400 font-normal">Mapped: {us.relatedFR}</span>
                  </div>

                  <div className="space-y-2 text-[11px] leading-relaxed">
                    <div className="text-amber-400 font-bold">Scenario: {us.acceptanceCriteria[0]?.scenario}</div>
                    <div className="text-slate-300"><span className="text-blue-400 font-bold">GIVEN</span> {us.acceptanceCriteria[0]?.given}</div>
                    <div className="text-slate-300"><span className="text-sky-400 font-bold">WHEN</span> {us.acceptanceCriteria[0]?.when}</div>
                    <div className="text-slate-300"><span className="text-emerald-400 font-bold">THEN</span> {us.acceptanceCriteria[0]?.then.join('; ')}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
