import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navSections = [
    { id: 'executive-summary', label: 'Summary' },
    { id: 'business-problem', label: 'The Problem' },
    { id: 'stakeholders', label: 'Stakeholders' },
    { id: 'as-is-process', label: 'AS-IS Process' },
    { id: 'bottlenecks', label: 'Bottlenecks' },
    { id: 'root-cause', label: 'Root Cause' },
    { id: 'gap-analysis', label: 'Gap Analysis' },
    { id: 'requirements', label: 'Requirements' },
    { id: 'traceability', label: 'Traceability (RTM)' },
    { id: 'to-be-process', label: 'TO-BE Process' },
    { id: 'before-after', label: 'Before vs After' },
    { id: 'kpi-framework', label: 'KPI Impact' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'risk-register', label: 'Risks' },
    { id: 'recommendation', label: 'Recommendation' }
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 text-white shadow-md transition-all">
      {/* Top Disclaimer Banner */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/20 to-amber-500/10 border-b border-amber-500/20 px-4 py-1.5 text-[11px] text-amber-200 text-center flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
        <span className="font-bold tracking-wider uppercase">PORTFOLIO CASE STUDY:</span>
        <span className="text-amber-100 font-medium">Illustrative assumptions for portfolio case study — not real bank data.</span>
      </div>

      {/* Reading Progress Line */}
      <div
        className="h-0.5 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Project Title */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollTo('executive-summary')}
          >
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-inner font-bold text-sm tracking-tight group-hover:bg-blue-500 transition-colors">
              NB
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-slate-100 tracking-tight">NovaBank</span>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded">
                  BA Case Study
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">Personal Loan Origination Optimization</p>
            </div>
          </div>

          {/* Role & GitHub Badges */}
          <div className="hidden lg:flex items-center gap-3 text-xs">
            <div className="px-3 py-1 bg-slate-800/90 border border-slate-700/80 rounded-full text-slate-300 flex items-center gap-1.5">
              <span className="text-slate-400">Role:</span>
              <span className="font-semibold text-white">Business Analyst</span>
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
              <span>GitHub Repo</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Desktop Sticky Quick-Jump Navigation Bar */}
        <nav className="hidden lg:flex space-x-1 overflow-x-auto pb-2 scrollbar-none text-xs border-t border-slate-800/80 pt-1.5">
          {navSections.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className={`px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-all flex items-center gap-1 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm font-bold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/90'
                }`}
              >
                {sec.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-4 pt-3 pb-6 space-y-1 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
            Narrative Sections
          </div>
          {navSections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between transition-colors ${
                activeSection === sec.id
                  ? 'bg-blue-600 text-white font-bold'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span>{sec.label}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
