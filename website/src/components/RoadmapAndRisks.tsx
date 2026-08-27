import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { ROADMAP_PHASES, RISKS_DATA } from '../data/baData';

export const RoadmapAndRisks: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'roadmap' | 'change' | 'risks'>('roadmap');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
            <Calendar className="w-4 h-4" />
            <span>Implementation & Governance</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Phased Roadmap, Change Management & Risk Matrix</h2>
          <p className="text-xs text-slate-600 mt-1">
            12-month sequential delivery plan avoiding high-risk big-bang rollout, backed by ADKAR change enablement.
          </p>
        </div>

        {/* Sub-Tab Navigation */}
        <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 shrink-0 text-xs font-bold">
          <button
            onClick={() => setActiveSubTab('roadmap')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeSubTab === 'roadmap' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            4-Phase Roadmap
          </button>
          <button
            onClick={() => setActiveSubTab('change')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeSubTab === 'change' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Change Management (ADKAR)
          </button>
          <button
            onClick={() => setActiveSubTab('risks')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeSubTab === 'risks' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            5x5 Risk Register ({RISKS_DATA.length})
          </button>
        </div>
      </div>

      {/* 4-Phase Roadmap View */}
      {activeSubTab === 'roadmap' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {ROADMAP_PHASES.map((p, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[10px] border border-blue-200">
                      {p.phase} • {p.duration}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500">{p.status}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-3">{p.name}</h3>

                  <ul className="space-y-2 text-[11px] text-slate-600 mb-4">
                    {p.deliverables.map((d, didx) => (
                      <li key={didx} className="flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-2.5 rounded bg-slate-50 border border-slate-100 text-[10px]">
                  <span className="font-bold text-slate-700 block uppercase mb-0.5">Milestone Gate:</span>
                  <span className="text-slate-600">{p.gate}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-center justify-between">
            <div>
              <span className="font-bold block">Progressive Rollout Strategy:</span>
              <span>Standardize (M1–3) → Digitize (M3–6) → Automate (M6–9) → Scale & Optimize (M9–12).</span>
            </div>
            <span className="px-3 py-1 bg-blue-600 text-white font-bold rounded text-xs shrink-0">12 Months Horizon</span>
          </div>
        </div>
      )}

      {/* ADKAR Change Management View */}
      {activeSubTab === 'change' && (
        <div className="space-y-6 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {[
              { letter: 'A', name: 'Awareness', desc: 'Bi-weekly executive townhalls explaining business urgency and competitor FinTech benchmarks.' },
              { letter: 'D', name: 'Desire', desc: 'Showcasing how RMs save 2+ hours daily from paperwork to focus on client advisory and bonuses.' },
              { letter: 'K', name: 'Knowledge', desc: 'Role-based simulation training on Underwriter Workbench and branch tablet scanning.' },
              { letter: 'A', name: 'Ability', desc: 'Appointing 2 "Digital Champions" in each of the 45 branches for hands-on peer coaching.' },
              { letter: 'R', name: 'Reinforcement', desc: 'Tying branch operational KPIs to digital adoption and First-Time-Right intake rates.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-sm mb-2">
                    {item.letter}
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs mb-1">{item.name}</h4>
                  <p className="text-slate-600 text-[11px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Role Evolution Matrix */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-4">Staff Role Transition Matrix</h3>
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
                  <th className="p-3 font-bold">Stakeholder Role</th>
                  <th className="p-3 font-bold text-red-700">AS-IS Operational Burden</th>
                  <th className="p-3 font-bold text-emerald-700">TO-BE Evolved High-Value Focus</th>
                  <th className="p-3 font-bold">Key Transition Enabler</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-3 font-bold text-slate-900">Relationship Manager</td>
                  <td className="p-3 text-red-800 bg-red-50/20">40% of time chasing missing customer paperwork</td>
                  <td className="p-3 text-emerald-800 bg-emerald-50/20 font-semibold">Client advisory, cross-selling wealth products</td>
                  <td className="p-3 text-slate-600">Mobile pre-qualification estimator</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-900">Branch Operations</td>
                  <td className="p-3 text-red-800 bg-red-50/20">Manual re-keying across 4 screens; customer complaints</td>
                  <td className="p-3 text-emerald-800 bg-emerald-50/20 font-semibold">Assisted digital onboarding ("Digital Ambassadors")</td>
                  <td className="p-3 text-slate-600">Barcode scanner & tablet intake</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-900">Credit Underwriter</td>
                  <td className="p-3 text-red-800 bg-red-50/20">Reviewing low-risk files in single FIFO backlog</td>
                  <td className="p-3 text-emerald-800 bg-emerald-50/20 font-semibold">Specialized high-ticket risk analysis & policy overrides</td>
                  <td className="p-3 text-slate-600">Unified Underwriter Workbench</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 5x5 Risk Register View */}
      {activeSubTab === 'risks' && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
                <th className="p-3 font-bold w-20">Risk ID</th>
                <th className="p-3 font-bold w-48">Risk Title & Description</th>
                <th className="p-3 font-bold w-28">Category</th>
                <th className="p-3 font-bold text-center w-24">Prob / Imp</th>
                <th className="p-3 font-bold w-24">Severity</th>
                <th className="p-3 font-bold text-emerald-700">Proactive Mitigation Strategy</th>
                <th className="p-3 font-bold w-36">Owner</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {RISKS_DATA.map((r) => (
                <tr key={r.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-3 font-bold text-blue-600">{r.id}</td>
                  <td className="p-3 font-semibold text-slate-900">{r.title}</td>
                  <td className="p-3 text-slate-600">{r.category}</td>
                  <td className="p-3 text-center font-mono font-bold text-slate-700">
                    P:{r.prob} / I:{r.imp} ({r.score})
                  </td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                      r.severity === 'High' ? 'bg-red-100 text-red-800 border border-red-200' :
                      r.severity === 'Medium' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {r.severity}
                    </span>
                  </td>
                  <td className="p-3 text-slate-700 font-medium bg-emerald-50/10">{r.mitigation}</td>
                  <td className="p-3 text-slate-500 font-medium">{r.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
