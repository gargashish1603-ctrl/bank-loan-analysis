import React, { useState } from 'react';
import { Scale, ShieldCheck, Filter } from 'lucide-react';
import { BUSINESS_RULES, BusinessRule } from '../data/baData';

export const BusinessRulesView: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const categories = ['All', 'Compliance', 'Eligibility', 'Credit Risk', 'Decisioning', 'Governance'];

  const filteredRules = selectedCat === 'All'
    ? BUSINESS_RULES
    : BUSINESS_RULES.filter((r) => r.category === selectedCat);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
          <Scale className="w-4 h-4" />
          <span>Policy & Governance Catalog</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Banking Business Rules Catalog (BR-Rule)</h2>
        <p className="mt-2 text-sm text-slate-600">
          Core regulatory mandates, risk thresholds, and credit decisioning boundaries governing NovaBank's Personal Loan Origination process.
        </p>

        {/* Category Filters */}
        <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-100 text-xs">
          <span className="text-slate-500 font-medium py-1">Filter by Category:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3 py-1 rounded-full font-medium transition-colors ${
                selectedCat === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Rules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        {filteredRules.map((rule) => (
          <div key={rule.id} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[10px] border border-blue-200">
                  {rule.id}
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold text-[10px] border border-slate-200">
                  {rule.category}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-2">{rule.name}</h3>
              <p className="text-slate-700 leading-relaxed mb-3">{rule.rule}</p>
            </div>
            <div className="p-2.5 rounded bg-slate-50 border border-slate-100">
              <span className="font-bold text-slate-700 block text-[10px] uppercase">Enforcement Mechanism:</span>
              <span className="text-slate-600 text-[11px] font-medium">{rule.enforcement}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
