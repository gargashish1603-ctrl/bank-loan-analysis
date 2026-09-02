import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroExecutive } from './components/HeroExecutive';
import { BusinessProblem } from './components/BusinessProblem';
import { StakeholderMatrix } from './components/StakeholderMatrix';
import { AsIsProcessMap } from './components/AsIsProcessMap';
import { BottleneckAnalysis } from './components/BottleneckAnalysis';
import { RootCauseAnalysis } from './components/RootCauseAnalysis';
import { GapAnalysisView } from './components/GapAnalysisView';
import { RequirementsHub } from './components/RequirementsHub';
import { TraceabilityMatrixView } from './components/TraceabilityMatrixView';
import { ToBeProcessMap } from './components/ToBeProcessMap';
import { BeforeAfterTransformation } from './components/BeforeAfterTransformation';
import { KpiFrameworkView } from './components/KpiFrameworkView';
import { ImplementationRoadmapView } from './components/ImplementationRoadmapView';
import { RiskRegisterView } from './components/RiskRegisterView';
import { ExecutiveRecommendation } from './components/ExecutiveRecommendation';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('executive-summary');

  // IntersectionObserver to dynamically highlight the active section during scroll
  useEffect(() => {
    const sectionIds = [
      'executive-summary',
      'business-problem',
      'stakeholders',
      'as-is-process',
      'bottlenecks',
      'root-cause',
      'gap-analysis',
      'requirements',
      'traceability',
      'to-be-process',
      'before-after',
      'kpi-framework',
      'roadmap',
      'risk-register',
      'recommendation'
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleExploreClick = () => {
    const el = document.getElementById('business-problem');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      {/* Sticky Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* 1. Hero / Executive Summary */}
      <HeroExecutive onExploreClick={handleExploreClick} />

      {/* Main Single-Page Consulting Narrative Flow */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 flex-1 w-full">
        {/* 2. Business Problem */}
        <BusinessProblem />

        {/* 3. Stakeholders Analysis */}
        <StakeholderMatrix />

        {/* 4. AS-IS Process Map */}
        <AsIsProcessMap />

        {/* 5. Bottleneck Analysis */}
        <BottleneckAnalysis />

        {/* 6. Root Cause Diagnostics (5 Whys & 6M Fishbone) */}
        <RootCauseAnalysis />

        {/* 7. Gap Analysis (AS-IS vs Desired State) */}
        <GapAnalysisView />

        {/* 8. Requirements Hub & Business Rules */}
        <RequirementsHub />

        {/* 9. Traceability (RTM Lineage) */}
        <TraceabilityMatrixView />

        {/* 10. TO-BE Process Map (Dual-Track STP) */}
        <ToBeProcessMap />

        {/* 11. Before vs After Transformation */}
        <BeforeAfterTransformation />

        {/* 12. KPI Framework & Simulator */}
        <KpiFrameworkView />

        {/* 13. Implementation Roadmap */}
        <ImplementationRoadmapView />

        {/* 14. Risk Register */}
        <RiskRegisterView />

        {/* 15. Executive Recommendation */}
        <ExecutiveRecommendation />
      </main>

      {/* Executive Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-10 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-bold text-white text-sm">NovaBank Banking Transformation Case Study</div>
            <p className="text-[11px] text-slate-500">
              Personal Loan Origination Process Optimization • Business Analyst Portfolio
            </p>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-center max-w-md">
            <span className="text-[10px] text-amber-300 font-semibold uppercase tracking-wider block">
              PORTFOLIO DATA DISCLAIMER
            </span>
            <span className="text-[10px] text-slate-400">
              Illustrative assumptions for portfolio case study — not real bank data.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gargashish1603-ctrl/bank-loan-analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
