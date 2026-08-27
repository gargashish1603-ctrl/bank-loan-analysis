import React, { useState } from 'react';
import { FileText, CheckCircle2, User, Search, ChevronDown, ChevronUp } from 'lucide-react';
import {
  BUSINESS_REQUIREMENTS,
  FUNCTIONAL_REQUIREMENTS,
  USER_STORIES_DATA,
  Requirement,
  UserStory
} from '../data/baData';

export const RequirementsHub: React.FC = () => {
  const [reqTab, setReqTab] = useState<'br' | 'fr' | 'nfr' | 'stories'>('br');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const nfrData: Requirement[] = [
    {
      id: 'NFR-01',
      category: 'Security & Access Control',
      title: 'Role-Based Access Control (RBAC) & AES-256 Encryption',
      description: 'The system shall enforce RBAC and MFA for all bank staff. Sensitive applicant PII shall be encrypted using AES-256 at rest and TLS 1.3 in transit.',
      rationale: 'Zero unauthorized access and statutory customer data security.',
      priority: 'Must Have',
      relatedProblem: 'P-06'
    },
    {
      id: 'NFR-02',
      category: 'System Performance',
      title: 'Sub-3-Second API Latency',
      description: 'The system shall execute external API calls (National ID, Credit Bureau, AML Watchlist) within 3.0s (95th percentile) and page load < 1.5s.',
      rationale: 'High throughput preventing system bottlenecking.',
      priority: 'Must Have',
      relatedProblem: 'P-02'
    },
    {
      id: 'NFR-03',
      category: 'Availability',
      title: '99.9% Production Uptime',
      description: 'The digital customer intake portal and workflow engine shall maintain 99.9% availability during operating hours (24/7 digital intake).',
      rationale: 'Uninterrupted customer onboarding.',
      priority: 'Must Have',
      relatedProblem: 'P-04'
    },
    {
      id: 'NFR-04',
      category: 'Auditability',
      title: 'Immutable 7-Year Audit Trail',
      description: 'The system shall maintain an immutable audit log recording every system action, credit pull, underwriter comment, and approval override for 7 years.',
      rationale: '100% regulatory examination compliance.',
      priority: 'Must Have',
      relatedProblem: 'P-06'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Navigation Header */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
            <FileText className="w-4 h-4" />
            <span>Requirements Engineering</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Requirements Specification & User Stories</h2>
          <p className="text-xs text-slate-600 mt-1">
            Complete business, functional, and non-functional specifications alongside persona-driven user stories.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 shrink-0 text-xs font-bold">
          <button
            onClick={() => setReqTab('br')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              reqTab === 'br' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Business Reqs ({BUSINESS_REQUIREMENTS.length})
          </button>
          <button
            onClick={() => setReqTab('fr')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              reqTab === 'fr' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Functional Reqs ({FUNCTIONAL_REQUIREMENTS.length})
          </button>
          <button
            onClick={() => setReqTab('nfr')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              reqTab === 'nfr' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Non-Functional ({nfrData.length})
          </button>
          <button
            onClick={() => setReqTab('stories')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              reqTab === 'stories' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            User Stories (Gherkin)
          </button>
        </div>
      </div>

      {/* Business Requirements View */}
      {reqTab === 'br' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {BUSINESS_REQUIREMENTS.map((br) => (
            <div key={br.id} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[10px] border border-blue-200">
                    {br.id} • {br.category}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold text-[10px]">{br.priority}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">{br.title}</h3>
                <p className="text-slate-700 leading-relaxed mb-3">{br.description}</p>
              </div>
              <div className="p-2.5 rounded bg-slate-50 border border-slate-100">
                <span className="font-bold text-slate-700 block text-[10px] uppercase">Business Rationale:</span>
                <span className="text-slate-600 text-[11px]">{br.rationale}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Functional Requirements View */}
      {reqTab === 'fr' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {FUNCTIONAL_REQUIREMENTS.map((fr) => (
            <div key={fr.id} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px] border border-emerald-200">
                    {fr.id} • {fr.category}
                  </span>
                  <span className="text-slate-400 font-medium text-[10px]">{fr.priority}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-xs mb-1.5">{fr.title}</h3>
                <p className="text-slate-600 text-[11px] leading-relaxed mb-3">{fr.description}</p>
              </div>
              <div className="p-2 rounded bg-slate-50 border border-slate-100 text-[10px] text-slate-500">
                Rationale: <strong className="text-slate-700">{fr.rationale}</strong>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Non-Functional Requirements View */}
      {reqTab === 'nfr' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {nfrData.map((nfr) => (
            <div key={nfr.id} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-bold text-[10px] border border-purple-200">
                  {nfr.id} • {nfr.category}
                </span>
                <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold text-[10px]">{nfr.priority}</span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-2">{nfr.title}</h3>
              <p className="text-slate-700 leading-relaxed mb-3">{nfr.description}</p>
              <div className="p-2.5 rounded bg-purple-50/60 border border-purple-100 text-[11px] text-purple-950 font-medium">
                Standard / Target: {nfr.rationale}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* User Stories with Given-When-Then Acceptance Criteria */}
      {reqTab === 'stories' && (
        <div className="space-y-4">
          {USER_STORIES_DATA.map((us) => (
            <div key={us.id} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-4 text-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                    {us.id.replace('US-', '')}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{us.persona} ({us.role})</h3>
                    <span className="text-[11px] text-slate-500">Related Requirement: <strong>{us.relatedFR}</strong></span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-800 font-bold text-[10px] border border-blue-200">
                  {us.priority}
                </span>
              </div>

              {/* User Story Box */}
              <div className="p-3.5 rounded-lg bg-blue-50/60 border border-blue-100 text-slate-900 text-xs leading-relaxed font-medium">
                "{us.story}"
              </div>

              {/* Acceptance Criteria */}
              <div className="space-y-2">
                <span className="font-bold text-slate-700 uppercase tracking-wider text-[10px] block">
                  Acceptance Criteria (Gherkin Given / When / Then):
                </span>
                {us.acceptanceCriteria.map((ac, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-slate-900 text-slate-200 font-mono text-[11px] space-y-1">
                    <div className="text-amber-400 font-bold">Scenario: {ac.scenario}</div>
                    <div className="text-slate-300"><span className="text-sky-400 font-bold">Given</span> {ac.given}</div>
                    <div className="text-slate-300"><span className="text-yellow-400 font-bold">When</span> {ac.when}</div>
                    {ac.then.map((t, tidx) => (
                      <div key={tidx} className="text-emerald-400"><span className="text-emerald-300 font-bold">Then</span> {t}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
