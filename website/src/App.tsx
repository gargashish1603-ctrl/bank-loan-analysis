import { useState } from 'react';
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
import { Building2 } from 'lucide-react';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('summary');

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Top Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Hero Section */}
      <HeroExecutive onExploreClick={() => setActiveSection('context')} />

      {/* Main Content Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
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
