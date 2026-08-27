import React from 'react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'summary', label: 'Executive Summary' },
    { id: 'context', label: 'Context & Scope' },
    { id: 'stakeholders', label: 'Stakeholders' },
    { id: 'process', label: 'AS-IS vs TO-BE' },
    { id: 'diagnostics', label: 'Root Cause (5 Whys)' },
    { id: 'gaps', label: 'Gap Analysis' },
    { id: 'requirements', label: 'Requirements' },
    { id: 'traceability', label: 'Traceability (RTM)' },
    { id: 'rules', label: 'Business Rules' },
    { id: 'kpis', label: 'KPIs & Simulator' },
    { id: 'roadmap', label: 'Roadmap & Risks' },
    { id: 'recommendation', label: 'Recommendation' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 text-white shadow-md">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/20 to-amber-500/10 border-b border-amber-500/20 px-4 py-1.5 text-xs text-amber-200 text-center flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
        <span className="font-semibold tracking-wide uppercase">Portfolio Case Study:</span>
        <span>Illustrative assumptions for portfolio case study — not real bank data.</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveSection('summary')}>
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-inner font-bold text-lg">
              NB
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base text-slate-100 tracking-tight">NovaBank</span>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded">
                  BA Case Study
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">Personal Loan Origination Optimization</p>
            </div>
          </div>

          {/* Role Badge */}
          <div className="hidden lg:flex items-center gap-4 text-xs">
            <div className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-slate-300 flex items-center gap-1.5">
              <span className="text-slate-400">Role:</span>
              <span className="font-medium text-white">Business Analyst</span>
            </div>
            <div className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-slate-300 flex items-center gap-1.5">
              <span className="text-slate-400">Focus:</span>
              <span className="font-medium text-emerald-400">Process Redesign</span>
            </div>
          </div>
        </div>

        {/* Navigation Bar / Tabs */}
        <nav className="flex space-x-1 overflow-x-auto pb-2 scrollbar-none text-xs border-t border-slate-800/80 pt-1.5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors flex items-center gap-1 ${
                activeSection === item.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};
