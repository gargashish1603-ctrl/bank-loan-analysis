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

          {/* Role Badge & GitHub Link */}
          <div className="flex items-center gap-3 text-xs">
            <div className="hidden lg:flex items-center gap-2">
              <div className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-slate-300 flex items-center gap-1.5">
                <span className="text-slate-400">Role:</span>
                <span className="font-medium text-white">Business Analyst</span>
              </div>
            </div>

            <a
              href="https://github.com/gargashish1603-ctrl/bank-loan-analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium text-xs flex items-center gap-1.5 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span className="hidden sm:inline">GitHub Repo</span>
            </a>
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
                  ? 'bg-blue-600 text-white shadow-sm font-bold'
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
