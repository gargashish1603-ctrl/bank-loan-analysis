import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroExecutive } from './components/HeroExecutive';
import { BusinessContext } from './components/BusinessContext';
import { StakeholderMatrix } from './components/StakeholderMatrix';
import { ProcessSwimlanes } from './components/ProcessSwimlanes';
import { DiagnosticSuite } from './components/DiagnosticSuite';
import { GapAnalysisView } from './components/GapAnalysisView';
import { RequirementsHub } from './components/RequirementsHub';
import { TraceabilityMatrixView } from './components/TraceabilityMatrixView';
import { BusinessRulesView } from './components/BusinessRulesView';
import { KpiDashboardSimulator } from './components/KpiDashboardSimulator';
import { RoadmapAndRisks } from './components/RoadmapAndRisks';
import { ExecutiveRecommendation } from './components/ExecutiveRecommendation';
import { Building2, ChevronRight, Home } from 'lucide-react';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('summary');

  // Scroll to top whenever active tab changes for immediate visual feedback
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const getSectionTitle = () => {
    switch (activeSection) {
      case 'context': return { title: 'Business Context & Scope', desc: 'NovaBank background, 10,000 monthly application baseline, and operational boundaries' };
      case 'stakeholders': return { title: 'Stakeholder Analysis & Governance', desc: '11 Stakeholder profile matrix and 2x2 Power-Interest Grid' };
      case 'process': return { title: 'Process Modeling (AS-IS vs. TO-BE)', desc: '8-Swimlane BPMN flowcharts, idle wait times, and Straight-Through Processing (STP)' };
      case 'diagnostics': return { title: 'Root-Cause Diagnostics (5 Whys & Fishbone)', desc: '7 Primary bottlenecks, multi-tier 5 Whys trees, and 6M Ishikawa analysis' };
      case 'gaps': return { title: 'Operational Gap Assessment', desc: '12-point structured comparison between AS-IS friction and TO-BE target capabilities' };
      case 'requirements': return { title: 'Requirements & User Stories', desc: 'Business Requirements (BR), Functional (FR), Non-Functional (NFR), and Gherkin User Stories' };
      case 'traceability': return { title: 'Requirements Traceability Matrix (RTM)', desc: 'Unbroken bi-directional linkage: Problem → Root Cause → BR → FR → US → Solution → KPI' };
      case 'rules': return { title: 'Banking Business Rules Catalog', desc: '12 core lending rules governing KYC, credit risk caps, DLA limits, and STP gates' };
      case 'kpis': return { title: 'KPI Framework & Scenario Simulator', desc: 'Balanced lending scorecards and interactive operational impact modeling' };
      case 'roadmap': return { title: 'Implementation Roadmap & Risk Register', desc: '12-month 4-phase delivery timeline, ADKAR change plan, and 5x5 Risk Matrix' };
      case 'recommendation': return { title: 'Strategic Recommendation & Business Case', desc: 'Executive conclusion, expected transformation ROI, and BA competencies demonstrated' };
      default: return { title: 'Executive Summary & Project Overview', desc: 'High-level consulting case study synthesis and key findings' };
    }
  };

  const currentMeta = getSectionTitle();

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Top Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Show Full Hero ONLY on Executive Summary / Home tab */}
      {activeSection === 'summary' ? (
        <HeroExecutive onExploreClick={() => setActiveSection('context')} />
      ) : (
        /* Compact Page Header for All Other Tabs */
        <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white border-b border-slate-800 py-6 px-4 sm:px-6 lg:px-8 shadow-inner">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              {/* Breadcrumb */}
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1.5">
                <button
                  onClick={() => setActiveSection('summary')}
                  className="hover:text-blue-400 flex items-center gap-1 transition-colors"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </button>
                <ChevronRight className="w-3 h-3 text-slate-600" />
                <span className="text-blue-400 font-medium">{currentMeta.title}</span>
              </div>

              {/* Title & Description */}
              <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{currentMeta.title}</h1>
              <p className="text-xs text-slate-400 mt-0.5">{currentMeta.desc}</p>
            </div>

            {/* Quick Navigation Dropdown / Badge */}
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold">
                NovaBank BA Engagement
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dynamic Section Rendering */}
        {activeSection === 'summary' && (
          <div className="space-y-10">
            <ExecutiveRecommendation />
            <ProcessSwimlanes />
            <TraceabilityMatrixView />
            <KpiDashboardSimulator />
          </div>
        )}

        {activeSection === 'context' && <BusinessContext />}
        {activeSection === 'stakeholders' && <StakeholderMatrix />}
        {activeSection === 'process' && <ProcessSwimlanes />}
        {activeSection === 'diagnostics' && <DiagnosticSuite />}
        {activeSection === 'gaps' && <GapAnalysisView />}
        {activeSection === 'requirements' && <RequirementsHub />}
        {activeSection === 'traceability' && <TraceabilityMatrixView />}
        {activeSection === 'rules' && <BusinessRulesView />}
        {activeSection === 'kpis' && <KpiDashboardSimulator />}
        {activeSection === 'roadmap' && <RoadmapAndRisks />}
        {activeSection === 'recommendation' && <ExecutiveRecommendation />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs py-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-slate-200 font-bold text-sm">
              <Building2 className="w-4 h-4 text-blue-400" />
              <span>NovaBank Personal Loan Origination Case Study</span>
            </div>
            <p className="text-slate-500 text-[11px] mt-1">
              Portfolio Business Analysis Case Study — Illustrative assumptions; not real bank data.
            </p>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Role: <strong>Business Analyst</strong></span>
            <span>•</span>
            <span>Focus: <strong>Process Redesign & Optimization</strong></span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
