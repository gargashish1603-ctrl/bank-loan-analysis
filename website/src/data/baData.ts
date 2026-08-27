// Comprehensive Data Store for NovaBank Loan Origination Process Optimization Case Study
// Disclaimer: Illustrative assumptions for portfolio case study — not real bank data.

export interface Stakeholder {
  id: string;
  name: string;
  role: string;
  orgUnit: string;
  interest: 'High' | 'Medium' | 'Low';
  influence: 'High' | 'Medium' | 'Low';
  quadrant: 'Manage Closely' | 'Keep Satisfied' | 'Keep Informed' | 'Monitor';
  responsibilities: string;
  painPoints: string;
  engagement: string;
}

export interface Bottleneck {
  id: string;
  title: string;
  stage: string;
  problem: string;
  rootCause: string;
  idleLatency: string;
  failureRate: string;
  severity: number; // 1-5
  proposedSolution: string;
  relatedReq: string;
}

export interface FiveWhyItem {
  id: string;
  title: string;
  problem: string;
  whys: string[];
  rootCause: string;
  solution: string;
  kpi: string;
}

export interface GapItem {
  id: string;
  dimension: string;
  asIs: string;
  toBe: string;
  gap: string;
  impact: string;
  improvement: string;
  priority: 'Must Have' | 'Should Have' | 'Could Have';
}

export interface Requirement {
  id: string;
  category: string;
  title: string;
  description: string;
  rationale: string;
  priority: 'Must Have' | 'Should Have' | 'Could Have' | 'Won\'t Have';
  relatedProblem: string;
}

export interface BusinessRule {
  id: string;
  name: string;
  category: 'Compliance' | 'Eligibility' | 'Credit Risk' | 'Decisioning' | 'Governance';
  rule: string;
  enforcement: string;
}

export interface UserStory {
  id: string;
  persona: string;
  role: string;
  story: string;
  priority: 'Must Have' | 'Should Have' | 'Could Have';
  relatedFR: string;
  acceptanceCriteria: {
    scenario: string;
    given: string;
    when: string;
    then: string[];
  }[];
}

export interface TraceabilityRow {
  problemId: string;
  problem: string;
  rootCause: string;
  brId: string;
  frId: string;
  usId: string;
  solution: string;
  kpi: string;
  targetImpact: string;
}

export interface KPIItem {
  id: string;
  category: 'Operational' | 'Quality' | 'Customer';
  name: string;
  formula: string;
  baseline: string;
  target: string;
  change: string;
  trend: 'positive' | 'negative';
  rationale: string;
}

export interface RiskItem {
  id: string;
  title: string;
  category: string;
  prob: number; // 1-5
  imp: number;  // 1-5
  score: number;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  mitigation: string;
  owner: string;
}

export const BASELINE_METRICS = {
  monthlyVolume: 10000,
  averageTatDays: 5.0,
  targetTatDays: 1.8,
  reworkRateBaseline: 35.0,
  reworkRateTarget: 8.0,
  ftrBaseline: 48.0,
  ftrTarget: 82.0,
  slaBreachBaseline: 14.0,
  slaBreachTarget: 4.0,
  manualTouchpointsBaseline: 12,
  manualTouchpointsTarget: 4,
  inboundCallsBaseline: 3.2,
  inboundCallsTarget: 0.6,
  stpRateBaseline: 0.0,
  stpRateTarget: 38.0,
  csatBaseline: 61,
  csatTarget: 88,
};

export const STAKEHOLDERS: Stakeholder[] = [
  {
    id: 'STK-01',
    name: 'Retail Loan Applicant',
    role: 'Customer',
    orgUnit: 'External Consumer',
    interest: 'High',
    influence: 'Medium',
    quadrant: 'Keep Informed',
    responsibilities: 'Submits loan application, uploads KYC and income documents, accepts terms, executes agreement.',
    painPoints: 'Opaque 5-day wait times, repetitive document requests, lack of progress tracking.',
    engagement: 'Self-service digital milestone hub, real-time SMS/Email status alerts, dynamic upload checklist.'
  },
  {
    id: 'STK-02',
    name: 'Relationship Manager',
    role: 'Sales & Sourcing',
    orgUnit: 'Retail Sales',
    interest: 'High',
    influence: 'Medium',
    quadrant: 'Keep Informed',
    responsibilities: 'Sources leads, guides walk-in clients, tracks monthly origination conversion quotas.',
    painPoints: 'Spends 40% of time chasing missing customer paperwork rather than advisory selling.',
    engagement: 'Mobile tablet pre-qualification estimator, instant eligibility checks.'
  },
  {
    id: 'STK-03',
    name: 'Branch Operations Officer',
    role: 'Branch Intake',
    orgUnit: 'Retail Branch Network',
    interest: 'Medium',
    influence: 'High',
    quadrant: 'Keep Satisfied',
    responsibilities: 'Receives walk-in physical documents, scans paperwork, re-keys applicant data into CRM.',
    painPoints: 'Repetitive typing across 4 screens, handling frustrated walk-in applicants.',
    engagement: 'High-speed barcode document scanners, assisted digital intake tools.'
  },
  {
    id: 'STK-04',
    name: 'Loan Operations Specialist',
    role: 'Central Backoffice',
    orgUnit: 'Central Operations',
    interest: 'High',
    influence: 'High',
    quadrant: 'Manage Closely',
    responsibilities: 'Manages document indexing, cross-verifies records, coordinates rework with branches.',
    painPoints: '35% rework volume, manual coordination via un-tracked emails, high task backlogs.',
    engagement: 'Centralized workflow management dashboard with automated OCR & pre-validation.'
  },
  {
    id: 'STK-05',
    name: 'KYC / AML Analyst',
    role: 'Compliance Verification',
    orgUnit: 'Compliance Operations',
    interest: 'High',
    influence: 'High',
    quadrant: 'Manage Closely',
    responsibilities: 'Verifies national identity proofs, performs PEP and sanctions watchlist screening.',
    painPoints: 'Manual copy-pasting of IDs into external government portals; high queue dwell times.',
    engagement: 'Automated REST API integrations with National ID Registry and real-time AML screening.'
  },
  {
    id: 'STK-06',
    name: 'Credit Risk Analyst',
    role: 'Risk Assessment',
    orgUnit: 'Credit Risk Directorate',
    interest: 'High',
    influence: 'High',
    quadrant: 'Manage Closely',
    responsibilities: 'Pulls bureau reports, verifies Debt-to-Income (DTI), assesses borrower repayment capacity.',
    painPoints: 'Manually calculating ratios on Excel sheets from un-indexed PDF bank statements.',
    engagement: 'Direct credit bureau API ingestion and algorithmic DTI/FOIR calculation engine.'
  },
  {
    id: 'STK-07',
    name: 'Senior Underwriter',
    role: 'Credit Authority',
    orgUnit: 'Credit Approval Desk',
    interest: 'High',
    influence: 'High',
    quadrant: 'Manage Closely',
    responsibilities: 'Final approval/decline sign-off, policy exception approvals, risk mitigation evaluation.',
    painPoints: 'Mundane low-risk files clutter the queue, creating 9.5 hours of idle queue wait time.',
    engagement: 'Straight-Through Processing (STP) for low-risk Tier 1; unified Underwriter Workbench for exceptions.'
  },
  {
    id: 'STK-08',
    name: 'Disbursement Officer',
    role: 'Funds Release',
    orgUnit: 'Payment Operations',
    interest: 'Medium',
    influence: 'High',
    quadrant: 'Keep Satisfied',
    responsibilities: 'Validates signed contracts and account mandates; triggers payments in Core Banking.',
    painPoints: 'Waiting for paper contracts; manual keying of account numbers into payment batches.',
    engagement: 'Automated e-Sign verification and direct API payment release to Core Banking.'
  },
  {
    id: 'STK-09',
    name: 'Branch Manager',
    role: 'Branch Oversight',
    orgUnit: 'Retail Distribution',
    interest: 'Medium',
    influence: 'Medium',
    quadrant: 'Keep Informed',
    responsibilities: 'Oversees branch sales targets, monitors customer NPS and SLA compliance.',
    painPoints: '14% SLA breaches reflecting poorly on branch performance; customer complaints.',
    engagement: 'Executive dashboard showing real-time pipeline, queue depth, and SLA alert countdowns.'
  },
  {
    id: 'STK-10',
    name: 'Enterprise IT Architect',
    role: 'Technology Systems',
    orgUnit: 'Information Technology',
    interest: 'Medium',
    influence: 'Medium',
    quadrant: 'Keep Satisfied',
    responsibilities: 'Maintains core banking stability, manages APIs, oversees security access controls.',
    painPoints: 'Supporting 4 disconnected legacy architectures without modern REST microservices.',
    engagement: 'API Gateway middleware, event-driven architecture, and secure role-based access.'
  },
  {
    id: 'STK-11',
    name: 'Head of Regulatory Compliance',
    role: 'Risk Directorate',
    orgUnit: 'Governance & Compliance',
    interest: 'High',
    influence: 'High',
    quadrant: 'Manage Closely',
    responsibilities: 'Ensures zero violation of Fair Lending, KYC/AML mandates, and consumer privacy laws.',
    painPoints: 'Risk of non-compliance if automated systems bypass audit trails or regulatory checks.',
    engagement: 'Mandatory compliance gates, immutable 7-year audit logging, algorithmic fairness audits.'
  }
];

export const BOTTLENECKS: Bottleneck[] = [
  {
    id: 'B1',
    title: 'Unassisted Manual Document Verification',
    stage: 'Stage 2: Document Ingestion',
    problem: 'Operations staff manually inspect each uploaded PDF/image. 35% of submissions contain illegible or invalid files.',
    rootCause: 'Lack of dynamic document checklists and client-side resolution/format pre-validation at upload.',
    idleLatency: '+7.3 Hours',
    failureRate: '35.0% Rework',
    severity: 5,
    proposedSolution: 'Automated Document Pre-Validation Engine (DPI ≥ 300) and profile-driven dynamic checklist.',
    relatedReq: 'FR-02, FR-04'
  },
  {
    id: 'B2',
    title: 'Incomplete Applications & Missing Form Data',
    stage: 'Stage 1: Application Capture',
    problem: 'Intake forms permit missing contact numbers, ambiguous expenses, and incomplete employment tenure.',
    rootCause: 'Absence of real-time field-level validation and mandatory dependency rules on digital forms.',
    idleLatency: '+5.2 Hours',
    failureRate: '18.0% Hold Rate',
    severity: 4,
    proposedSolution: 'Intelligent digital form with real-time field validation and address auto-lookup.',
    relatedReq: 'FR-01'
  },
  {
    id: 'B3',
    title: 'Duplicate Manual Data Re-Keying',
    stage: 'Stage 1, 2, 4 & 8: System Handoffs',
    problem: 'Staff manually type identical applicant data across 4 disconnected software platforms (CRM, KYC, LOS, Core).',
    rootCause: 'Siloed legacy enterprise architecture lacking RESTful API middleware or integration bus.',
    idleLatency: '+4.0 Hours',
    failureRate: '11.5% Error Rate',
    severity: 4,
    proposedSolution: 'Unified RESTful API microservices data orchestrator layer synchronizing records.',
    relatedReq: 'FR-08, FR-19'
  },
  {
    id: 'B4',
    title: 'Opaque Status Visibility & Inbound Inquiries',
    stage: 'End-to-End Origination',
    problem: 'Applicants have zero progress visibility, generating 3.2 phone calls and emails per active application.',
    rootCause: 'No customer-facing tracking interface or event-triggered notification service.',
    idleLatency: '+3.0 Hours (Staff Drag)',
    failureRate: '3.2 Calls / App',
    severity: 4,
    proposedSolution: '24/7 Self-Service Milestone Tracker with automated SMS/Email push notifications.',
    relatedReq: 'FR-07, FR-20'
  },
  {
    id: 'B5',
    title: 'Undifferentiated FIFO Underwriting Queues',
    stage: 'Stage 5: Credit Underwriting',
    problem: 'Standard, low-risk salaried applicants sit in the same queue as complex borderline cases (9.5h wait).',
    rootCause: 'Absence of an automated credit decision engine to execute Straight-Through Processing (STP).',
    idleLatency: '+9.5 Hours',
    failureRate: '0% STP Rate',
    severity: 5,
    proposedSolution: 'Automated Credit Decision Engine with STP for Tier 1 low-risk applicants (Score ≥750, DTI ≤35%).',
    relatedReq: 'FR-13, FR-14'
  },
  {
    id: 'B6',
    title: 'Reactive SLA Tracking & Stagnation',
    stage: 'Operations Governance',
    problem: 'Team leads discover delayed applications only after customer complaints or SLA breaches occur.',
    rootCause: 'Absence of real-time task timer monitoring and automated pre-breach escalation triggers.',
    idleLatency: '+4.5 Hours',
    failureRate: '14.0% Breach Rate',
    severity: 4,
    proposedSolution: 'Proactive SLA countdown monitors triggering automated amber (50%) and red (75%) alerts.',
    relatedReq: 'FR-20'
  },
  {
    id: 'B7',
    title: 'Physical Paper Contract Signing',
    stage: 'Stage 7: Agreement & Settlement',
    problem: 'Customers must travel to a branch to sign physical loan contracts, stalling disbursement by 24–48 hours.',
    rootCause: 'Reliance on wet-ink signatures and lack of mobile cryptographic e-Signature integration.',
    idleLatency: '+24.0 Hours',
    failureRate: '24h Delay',
    severity: 4,
    proposedSolution: 'Digital Sanction Letter generation with mobile OTP cryptographic e-Signature gateway.',
    relatedReq: 'FR-17, FR-18'
  }
];

export const FIVE_WHYS_DATA: FiveWhyItem[] = [
  {
    id: '5W-1',
    title: 'High Document Rework Rate (35%)',
    problem: '3,500 personal loan applications per month require secondary document uploads.',
    whys: [
      'Why 1: Uploaded salary slips and IDs are blurry, expired, cropped, or from wrong dates.',
      'Why 2: Applicants are unclear about exact requirements and receive no feedback during upload.',
      'Why 3: The intake portal presents a static, generic form that does not adapt to employment type.',
      'Why 4: Document inspection is performed entirely manually by backoffice staff hours/days later.',
      'Why 5 (Root Cause): Absence of an intelligent digital intake layer with dynamic checklists and client-side resolution pre-validation (≥300 DPI).'
    ],
    rootCause: 'Intake decoupled from validation; absence of dynamic checklists & client-side pre-validation.',
    solution: 'Dynamic Checklist (FR-02) + Automated Pre-Validation Engine (FR-04).',
    kpi: 'Document rework rate drops from 35.0% to 8.0% (-77% reduction).'
  },
  {
    id: '5W-2',
    title: 'Underwriting Queue Congestion (9.5h Wait)',
    problem: 'Applications spend an average of 9.5 hours of non-value-add idle queue time in Underwriting.',
    whys: [
      'Why 1: Underwriters face an unmanageable backlog of 150+ applications per queue.',
      'Why 2: Every single loan application, regardless of risk, must be manually reviewed by an underwriter.',
      'Why 3: The bank does not have automated Straight-Through Processing (STP) rules enabled.',
      'Why 4: Credit bureau data and DTI ratios are calculated manually on Excel spreadsheets.',
      'Why 5 (Root Cause): Credit policy rules are not codified into an automated decision engine connected via API to credit bureaus.'
    ],
    rootCause: 'All-or-nothing manual underwriting policy; lack of rule-based automated decisioning.',
    solution: 'Bureau API (FR-11) + Algorithmic DTI Engine (FR-12) + Tier 1 STP Engine (FR-14).',
    kpi: 'Average TAT drops from 5.0 days to 1.8 days; 38% STP volume achieved.'
  },
  {
    id: '5W-3',
    title: 'High Inbound Customer Status Calls (3.2 / loan)',
    problem: 'NovaBank receives 32,000 inbound status inquiry contacts per month regarding loan applications.',
    whys: [
      'Why 1: Customers do not know what stage their application is in or why it is delayed.',
      'Why 2: The bank does not send status updates between initial intake and final loan sanction.',
      'Why 3: Status transitions occur across disconnected internal systems with no notification trigger.',
      'Why 4: The customer web portal has no self-service tracking interface or real-time stepper.',
      'Why 5 (Root Cause): Application state transitions are siloed across 4 legacy databases without a centralized customer event orchestration layer.'
    ],
    rootCause: 'Siloed departmental systems lacking an event-driven customer notification and tracking hub.',
    solution: 'Self-Service 5-Stage Milestone Tracker (FR-20) + Automated Notification Service (FR-07).',
    kpi: 'Status inquiries drop from 3.2 to 0.6 calls/loan (-81% reduction in branch load).'
  }
];

export const FISHBONE_DATA = {
  people: [
    'Branch officers and loan ops communicate via un-tracked manual emails',
    'Relationship managers spend 40% of working time chasing missing paperwork',
    'Underwriters face uneven queue surges with no workload rebalancing'
  ],
  process: [
    'Document verification occurs 24-48h post-intake rather than upfront',
    'Sequential processing of KYC, Bureau, and Underwriting rather than parallel checks',
    'Rework loop sends rejected files back to end of operations queue'
  ],
  technology: [
    '4 disconnected legacy systems (CRM, KYC, LOS, Core) with zero API sync',
    'Lack of a programmable credit decision engine for Straight-Through Processing',
    'No real-time task timer monitors or automated pre-breach SLA alert triggers'
  ],
  data: [
    '11.5% transcription error rate caused by manual re-typing across screens',
    'Unstructured PDF payslips requiring manual Excel data entry',
    'Forms permit submission of incomplete demographic and employment fields'
  ],
  policy: [
    'Historical policy mandating 100% manual underwriter review for all loans',
    'Wet-ink physical contract signing mandate stalling disbursement by 24-48h',
    'Rigid Delegated Lending Authority caps not tailored for low-risk applicants'
  ],
  customer: [
    'Vague instructions cause submission of outdated tax returns or cropped payslips',
    'Applicants upload blurry smartphone photos (<150 DPI) taken in poor lighting',
    'Lack of progress visibility drives high customer anxiety and repeated calls'
  ]
};

export const GAP_ANALYSIS_DATA: GapItem[] = [
  {
    id: 'GAP-01',
    dimension: 'Document Quality & Intake',
    asIs: 'Manual inspection 24-48h post-intake.',
    toBe: 'Real-time client-side pre-validation.',
    gap: 'No client-side DPI (≥300 DPI), format, or completeness check.',
    impact: 'High rework (35%); +7.3h waiting latency.',
    improvement: 'Automated Document Pre-Validation Engine with instant feedback.',
    priority: 'Must Have'
  },
  {
    id: 'GAP-02',
    dimension: 'Checklist Customization',
    asIs: 'Static generic document checklist.',
    toBe: 'Dynamic profile-driven document checklist.',
    gap: 'System does not adapt requirements to applicant employment type.',
    impact: '18% applications stalled for missing info.',
    improvement: 'Dynamic Checklist Engine adapting to Salaried / Self-Employed.',
    priority: 'Must Have'
  },
  {
    id: 'GAP-03',
    dimension: 'Data Integration',
    asIs: 'Manual re-keying across 4 systems.',
    toBe: 'Unified RESTful API microservices sync.',
    gap: 'No API integration bus connecting CRM, LOS, and Core Banking.',
    impact: '11.5% transcription errors; 22% handoff delays.',
    improvement: 'Enterprise API Gateway synchronizing customer data.',
    priority: 'Must Have'
  },
  {
    id: 'GAP-04',
    dimension: 'Credit Assessment',
    asIs: 'Manual bureau downloads & Excel DTI.',
    toBe: 'Direct API ingestion & algorithmic DTI.',
    gap: 'Absence of programmatic credit bureau interface and calculator.',
    impact: '4.5h credit assessment latency; calculation errors.',
    improvement: 'Direct bureau API ingestion and real-time DTI calculation engine.',
    priority: 'Must Have'
  },
  {
    id: 'GAP-05',
    dimension: 'Underwriting Decisioning',
    asIs: '100% manual review in single FIFO queue.',
    toBe: 'Dual-track: Tier 1 STP + Exception Desk.',
    gap: 'Lack of rule-based automated decisioning and risk segmentation.',
    impact: '9.5h queue dwell time; underwriter bandwidth congested.',
    improvement: 'Automated Credit Decision Engine with STP for low-risk files.',
    priority: 'Must Have'
  },
  {
    id: 'GAP-06',
    dimension: 'Customer Transparency',
    asIs: 'Zero tracking; opaque black-box wait.',
    toBe: '24/7 5-stage self-service tracker.',
    gap: 'No customer portal milestone interface or status sync.',
    impact: '3.2 calls/loan; 32,000 inquiries/month to branches.',
    improvement: 'Customer self-service milestone tracking hub.',
    priority: 'Must Have'
  },
  {
    id: 'GAP-07',
    dimension: 'Customer Notifications',
    asIs: 'Manual batch emails sent hours later.',
    toBe: 'Event-driven instant SMS/Email alerts.',
    gap: 'No automated omni-channel messaging notification service.',
    impact: 'Delayed customer response time (average 26 hours).',
    improvement: 'Automated event-triggered notification service.',
    priority: 'Must Have'
  },
  {
    id: 'GAP-08',
    dimension: 'SLA Monitoring',
    asIs: 'Reactive tracking after customer complaints.',
    toBe: 'Proactive countdown monitors & alerts.',
    gap: 'No real-time task timer monitoring or automated pre-breach alerts.',
    impact: '14.0% SLA breach rate (1,400 loans/month).',
    improvement: 'Real-time SLA monitor triggering alerts at 50% & 75% thresholds.',
    priority: 'Should Have'
  },
  {
    id: 'GAP-09',
    dimension: 'Agreement Signing',
    asIs: 'Branch visit & physical wet-ink sign.',
    toBe: 'Mobile OTP cryptographic e-Signature.',
    gap: 'No legal digital e-Signature capability integrated.',
    impact: '24-48 hours post-approval settlement lag.',
    improvement: 'Mobile OTP digital e-Signature integration.',
    priority: 'Must Have'
  },
  {
    id: 'GAP-10',
    dimension: 'Disbursement Release',
    asIs: 'Manual batch payment keying into Core.',
    toBe: 'Automated Core Banking API release.',
    gap: 'Payment release decoupled from agreement verification.',
    impact: '24h funds release delay; risk of manual keying errors.',
    improvement: 'Automated Core Banking payment rail integration (<15 min).',
    priority: 'Must Have'
  },
  {
    id: 'GAP-11',
    dimension: 'KYC Verification',
    asIs: 'Manual copy-pasting into portals.',
    toBe: 'Automated real-time API screening.',
    gap: 'Manual identity matching and compliance search.',
    impact: '4.0h KYC cycle time; compliance backlog.',
    improvement: 'Automated National ID Registry & AML screening APIs.',
    priority: 'Must Have'
  },
  {
    id: 'GAP-12',
    dimension: 'Underwriter UI',
    asIs: '5 open windows across separate systems.',
    toBe: 'Single-screen Unified Decision Workbench.',
    gap: 'Fragmented UI forcing high cognitive load.',
    impact: 'Slower review time (1.5h touch time per file).',
    improvement: 'Unified Underwriter Workbench with pre-calculated ratios.',
    priority: 'Should Have'
  }
];

export const BUSINESS_REQUIREMENTS: Requirement[] = [
  {
    id: 'BR-01',
    category: 'Operational Cycle Time',
    title: 'Reduce Loan Turnaround Time to < 2.0 Days',
    description: 'The system and revised operational process shall reduce average end-to-end loan processing TAT from 5.0 business days to under 2.0 business days.',
    rationale: 'Accelerate time-to-cash, improve conversion against neo-bank competitors, and lower cost per funded loan.',
    priority: 'Must Have',
    relatedProblem: 'P-02: Extended 5-Day TAT'
  },
  {
    id: 'BR-02',
    category: 'Intake Quality',
    title: 'Elevate First-Time-Right (FTR) Rate to ≥ 80%',
    description: 'The system shall ensure applicant data and uploaded documents are verified for completeness and validity prior to submission.',
    rationale: 'Drastically reduce downstream rework loops and relieve backoffice processing congestion.',
    priority: 'Must Have',
    relatedProblem: 'P-01: High Document Rework'
  },
  {
    id: 'BR-03',
    category: 'Document Management',
    title: 'Automate Document Pre-Validation & Ingestion',
    description: 'The system shall automate upfront inspection of mandatory documentation at the point of ingestion.',
    rationale: 'Eliminate the 35% manual rework bottleneck caused by illegible or incorrect files.',
    priority: 'Must Have',
    relatedProblem: 'P-01: High Document Rework'
  },
  {
    id: 'BR-04',
    category: 'Customer Experience',
    title: 'Provide Omni-Channel Status Transparency',
    description: 'The system shall provide real-time self-service tracking of application milestones to applicants and staff.',
    rationale: 'Reduce high inbound call volumes (3.2 calls/loan) to branches and contact centers.',
    priority: 'Must Have',
    relatedProblem: 'P-04: High Inquiries'
  },
  {
    id: 'BR-05',
    category: 'Credit Decisioning',
    title: 'Enable Segmented Straight-Through Processing (STP)',
    description: 'The system shall execute automated credit decisioning for qualified low-risk applicants while routing complex files to underwriting queues.',
    rationale: 'Free up credit analysts and underwriters to focus on complex risk evaluations and policy overrides.',
    priority: 'Must Have',
    relatedProblem: 'P-02: Extended 5-Day TAT'
  },
  {
    id: 'BR-06',
    category: 'System Integration',
    title: 'Eliminate Redundant Cross-System Data Entry',
    description: 'The system shall maintain a unified data layer synchronizing applicant, loan, and KYC data across all core banking platforms.',
    rationale: 'Reduce transcription errors and eliminate manual handoff delays (22% baseline).',
    priority: 'Must Have',
    relatedProblem: 'P-03: Duplicate Data Entry'
  },
  {
    id: 'BR-07',
    category: 'Governance & Operations',
    title: 'Proactive SLA Monitoring & Automated Escalation',
    description: 'The system shall track task times against departmental SLAs and automatically escalate stagnating files before breaches occur.',
    rationale: 'Prevent applications from sitting unnoticed in employee inboxes and reduce customer SLA violations.',
    priority: 'Must Have',
    relatedProblem: 'P-05: High SLA Breaches'
  },
  {
    id: 'BR-08',
    category: 'Regulatory Compliance',
    title: 'Preserve Regulatory Compliance & Auditability',
    description: 'The system shall enforce strict KYC/AML verification, credit risk limits, Fair Lending guidelines, and immutable audit logging.',
    rationale: 'Ensure 100% adherence to banking regulations and prevent financial/reputational compliance penalties.',
    priority: 'Must Have',
    relatedProblem: 'P-06: KYC Compliance Bottleneck'
  },
  {
    id: 'BR-09',
    category: 'Communication',
    title: 'Automate Event-Driven Customer Communications',
    description: 'The system shall automatically trigger contextual notifications (SMS/Email/Push) whenever an application changes status.',
    rationale: 'Eliminate opaque waiting periods and ensure applicants rectify deficiencies immediately.',
    priority: 'Must Have',
    relatedProblem: 'P-04: High Inquiries'
  },
  {
    id: 'BR-10',
    category: 'Disbursement',
    title: 'Streamline Electronic Agreement & Instant Disbursement',
    description: 'The system shall support digital sanction issuance, mobile OTP e-Signatures, and automated Core Banking payment releases.',
    rationale: 'Shorten post-approval funds release from 24 hours to < 15 minutes.',
    priority: 'Must Have',
    relatedProblem: 'P-07: Paper Agreement Lag'
  }
];

export const FUNCTIONAL_REQUIREMENTS: Requirement[] = [
  {
    id: 'FR-01',
    category: 'Intake',
    title: 'Digital Application Capture',
    description: 'The system shall provide a responsive web/mobile form capturing demographics, income, and loan parameters with real-time validation.',
    rationale: 'Prevents incomplete form submissions.',
    priority: 'Must Have',
    relatedProblem: 'P-01'
  },
  {
    id: 'FR-02',
    category: 'Intake',
    title: 'Dynamic Document Checklist',
    description: 'The system shall dynamically display required documents based on employment type (Salaried, Self-Employed) and loan amount.',
    rationale: 'Ensures customers upload correct files first time.',
    priority: 'Must Have',
    relatedProblem: 'P-01'
  },
  {
    id: 'FR-03',
    category: 'Intake',
    title: 'Secure Multi-File Upload',
    description: 'The system shall allow uploads in PDF, JPEG, and PNG (up to 15MB per file) with multi-page batch upload support.',
    rationale: 'Ensures high quality file ingestion.',
    priority: 'Must Have',
    relatedProblem: 'P-01'
  },
  {
    id: 'FR-04',
    category: 'Validation',
    title: 'Automated Document Pre-Validation',
    description: 'The system shall inspect uploaded documents in real time for resolution (≥ 300 DPI), format, and file integrity.',
    rationale: 'Eliminates 35% rework by rejecting bad scans at upload.',
    priority: 'Must Have',
    relatedProblem: 'P-01'
  },
  {
    id: 'FR-05',
    category: 'Automation',
    title: 'OCR & Data Extraction Engine',
    description: 'The system shall extract key data fields (National ID, full name, DOB, employer, salary) from uploaded documents.',
    rationale: 'Accelerates data verification.',
    priority: 'Should Have',
    relatedProblem: 'P-03'
  },
  {
    id: 'FR-06',
    category: 'Validation',
    title: 'Automated Demographic Cross-Match',
    description: 'The system shall cross-reference OCR extractions against form inputs with a 90% fuzzy-match confidence threshold.',
    rationale: 'Detects data entry mismatches automatically.',
    priority: 'Must Have',
    relatedProblem: 'P-03'
  },
  {
    id: 'FR-07',
    category: 'Notification',
    title: 'Document Deficiency Notification',
    description: 'The system shall automatically dispatch SMS/Email alerts with secure direct upload links when documents are rejected.',
    rationale: 'Reduces customer response time from 26h to <6h.',
    priority: 'Must Have',
    relatedProblem: 'P-04'
  },
  {
    id: 'FR-08',
    category: 'Integration',
    title: 'Unified Customer Record Sync',
    description: 'The system shall synchronize applicant data with Core Banking and CRM systems without requiring manual re-keying.',
    rationale: 'Eliminates duplicate manual typing.',
    priority: 'Must Have',
    relatedProblem: 'P-03'
  },
  {
    id: 'FR-09',
    category: 'Compliance',
    title: 'Automated National ID Registry API',
    description: 'The system shall trigger a real-time API call to the National Identity Registry to verify applicant legal identity.',
    rationale: 'Accelerates KYC verification to <3 seconds.',
    priority: 'Must Have',
    relatedProblem: 'P-06'
  },
  {
    id: 'FR-10',
    category: 'Compliance',
    title: 'Automated AML & Watchlist Screening',
    description: 'The system shall screen applicants against global PEP, OFAC, and domestic AML sanctions databases automatically.',
    rationale: 'Guarantees compliance without manual search.',
    priority: 'Must Have',
    relatedProblem: 'P-06'
  },
  {
    id: 'FR-11',
    category: 'Credit Risk',
    title: 'Direct Credit Bureau API Ingestion',
    description: 'The system shall automatically pull applicant credit file and score from credit bureaus via secure REST API.',
    rationale: 'Eliminates manual bureau PDF downloads.',
    priority: 'Must Have',
    relatedProblem: 'P-02'
  },
  {
    id: 'FR-12',
    category: 'Credit Risk',
    title: 'Automated DTI Calculation Engine',
    description: 'The system shall aggregate debt obligations from credit file and compute Debt-to-Income (DTI) and FOIR ratios.',
    rationale: 'Eliminates spreadsheet calculation errors.',
    priority: 'Must Have',
    relatedProblem: 'P-02'
  },
  {
    id: 'FR-13',
    category: 'Decisioning',
    title: 'Rule-Based Credit Decisioning Engine',
    description: 'The system shall evaluate applications against credit policy rules (minimum score, max DTI, minimum tenure).',
    rationale: 'Enables consistent, objective decisioning.',
    priority: 'Must Have',
    relatedProblem: 'P-02'
  },
  {
    id: 'FR-14',
    category: 'Decisioning',
    title: 'Straight-Through Processing (STP) Execution',
    description: 'For Tier 1 applicants (Score ≥750, DTI ≤35%, Loan ≤$25k), the system shall execute automated approval in <10s.',
    rationale: 'Delivers 38% STP volume with zero human touch.',
    priority: 'Must Have',
    relatedProblem: 'P-02'
  },
  {
    id: 'FR-15',
    category: 'Workflow',
    title: 'Intelligent Exception Queue Routing',
    description: 'Applications failing STP shall auto-route to Underwriter queues based on delegated approval limits.',
    rationale: 'Ensures complex files reach licensed officers.',
    priority: 'Must Have',
    relatedProblem: 'P-02'
  },
  {
    id: 'FR-16',
    category: 'Underwriting',
    title: 'Underwriter Decision Workbench',
    description: 'The system shall provide a unified workbench displaying pre-calculated ratios, bureau highlights, and policy flags.',
    rationale: 'Accelerates manual review from 90m to 20m.',
    priority: 'Must Have',
    relatedProblem: 'P-02'
  },
  {
    id: 'FR-17',
    category: 'Disbursement',
    title: 'Digital Sanction Letter & e-Sign Issuance',
    description: 'The system shall generate personalized sanction letters and enable mobile OTP cryptographic e-Signatures.',
    rationale: 'Eliminates branch physical signing visits.',
    priority: 'Must Have',
    relatedProblem: 'P-07'
  },
  {
    id: 'FR-18',
    category: 'Disbursement',
    title: 'Pre-Disbursement Condition Checklist',
    description: 'The system shall verify e-Sign completion, direct debit mandate, and bank account name match before unlocking funds.',
    rationale: 'Safeguards financial controls.',
    priority: 'Must Have',
    relatedProblem: 'P-07'
  },
  {
    id: 'FR-19',
    category: 'Disbursement',
    title: 'Automated Core Banking Payment Trigger',
    description: 'The system shall trigger an automated funds transfer instruction to Core Banking payment rails.',
    rationale: 'Releases funds in <15 minutes post-approval.',
    priority: 'Must Have',
    relatedProblem: 'P-07'
  },
  {
    id: 'FR-20',
    category: 'Governance',
    title: 'Proactive SLA Monitor & Visual Status Tracker',
    description: 'The system shall provide a 5-stage customer tracker and an internal SLA dashboard with amber (50%) and red (75%) alerts.',
    rationale: 'Reduces inquiries and prevents SLA breaches.',
    priority: 'Must Have',
    relatedProblem: 'P-04, P-05'
  }
];

export const BUSINESS_RULES: BusinessRule[] = [
  {
    id: 'BR-RULE-01',
    name: 'Mandatory KYC Completion Prior to Underwriting',
    category: 'Compliance',
    rule: 'No application shall proceed to credit scoring, underwriting, or decisioning until Customer Due Diligence (CDD) and AML/PEP screening have passed.',
    enforcement: 'Hard system state lock at KYC_PENDING.'
  },
  {
    id: 'BR-RULE-02',
    name: 'Minimum Age & Residency Eligibility',
    category: 'Eligibility',
    rule: 'Applicant must be between 21 and 60 years of age at loan maturity and a citizen or permanent resident of the operating jurisdiction.',
    enforcement: 'Automated pre-qualification form validation.'
  },
  {
    id: 'BR-RULE-03',
    name: 'Minimum Net Monthly Income Threshold',
    category: 'Credit Risk',
    rule: 'Applicant must demonstrate verified net monthly income of ≥ $2,500 (Salaried) or annual net profit of ≥ $40,000 (Self-Employed).',
    enforcement: 'Calculated from OCR salary slips / tax returns.'
  },
  {
    id: 'BR-RULE-04',
    name: 'Employment Stability Mandate',
    category: 'Credit Risk',
    rule: 'Salaried applicants must have ≥ 6 months continuous tenure with current employer; self-employed must have ≥ 24 months operating history.',
    enforcement: 'Cross-referenced against employer reference data.'
  },
  {
    id: 'BR-RULE-05',
    name: 'Debt-to-Income (DTI) Hard Ceiling',
    category: 'Credit Risk',
    rule: 'Total monthly debt obligations (including proposed NovaBank personal loan EMI) must not exceed 50.0% of verified net monthly income.',
    enforcement: 'DTI > 50% triggers automatic decline.'
  },
  {
    id: 'BR-RULE-06',
    name: 'Automated Straight-Through Processing (STP) Eligibility',
    category: 'Decisioning',
    rule: 'STP Approval granted IF AND ONLY IF: Score ≥ 750, DTI ≤ 35.0%, Loan Amount ≤ $25,000, Employment ≥ 12 months, and zero adverse AML flags.',
    enforcement: 'Decision Engine executes instant sanction token.'
  },
  {
    id: 'BR-RULE-07',
    name: 'Mandatory Human Underwriter Review Thresholds',
    category: 'Decisioning',
    rule: 'Score 650–749, OR DTI 36–50%, OR Loan Amount > $25,000, OR Self-Employed profiles MUST route to licensed Underwriter.',
    enforcement: 'Workflow engine routes to Underwriter Worklist.'
  },
  {
    id: 'BR-RULE-08',
    name: 'Automatic Hard Decline Criteria',
    category: 'Credit Risk',
    rule: 'Automatic decline if: Credit Score < 600, active bankruptcy / >90 DPD delinquency in 24 months, DTI > 50%, or fraudulent documentation.',
    enforcement: 'System transitions to DECLINED with adverse codes.'
  },
  {
    id: 'BR-RULE-09',
    name: 'Delegated Lending Authority (DLA) Tiers',
    category: 'Governance',
    rule: 'Junior Underwriter: up to $15k; Senior Underwriter: up to $35k; Credit Committee / Head of Credit: > $35k or policy waivers.',
    enforcement: 'Role-Based Access Control limits approval buttons.'
  },
  {
    id: 'BR-RULE-10',
    name: 'Mandatory Rejection & Adverse Action Codes',
    category: 'Compliance',
    rule: 'Any credit decline or policy exception approval must record standardized reason codes and min 25-character underwriter commentary.',
    enforcement: 'Form validation enforces reason code selection.'
  },
  {
    id: 'BR-RULE-11',
    name: 'Operational SLA Timeframes & Escalation',
    category: 'Governance',
    rule: 'Doc Review: 4h; KYC: 4h; Underwriting: 8h; Disbursement: 2h. Reaching 75% of SLA triggers automatic Team Lead escalation.',
    enforcement: 'Real-time daemon monitors timer thresholds.'
  },
  {
    id: 'BR-RULE-12',
    name: 'Disbursement Lock & Pre-Disbursement Verification',
    category: 'Governance',
    rule: 'Funds release locked until e-Sign verified, direct debit active, and destination account confirmed in applicant legal name.',
    enforcement: 'Core Banking API release gated behind 3 flags.'
  }
];

export const TRACEABILITY_MATRIX: TraceabilityRow[] = [
  {
    problemId: 'P-01',
    problem: 'High Document Rework (35% of applications)',
    rootCause: 'Intake decoupled from validation; static generic checklist.',
    brId: 'BR-03, BR-02',
    frId: 'FR-02, FR-04, FR-07',
    usId: 'US-01, US-02',
    solution: 'Dynamic Checklist & Client-Side DPI Pre-Validation Engine',
    kpi: 'Document Rework Rate',
    targetImpact: '35.0% -> 8.0% (-77% reduction)'
  },
  {
    problemId: 'P-02',
    problem: 'Extended Turnaround Time (5.0 Business Days)',
    rootCause: 'Undifferentiated FIFO manual underwriting queue.',
    brId: 'BR-01, BR-05',
    frId: 'FR-13, FR-14, FR-15',
    usId: 'US-09, US-10',
    solution: 'Credit Decision Engine & Tier 1 STP Auto-Approval',
    kpi: 'Average End-to-End TAT',
    targetImpact: '5.0 Days -> 1.8 Days (-64% reduction)'
  },
  {
    problemId: 'P-03',
    problem: 'Duplicate Data Entry across 4 Systems (11.5% errors)',
    rootCause: 'Siloed legacy architecture without API middleware bus.',
    brId: 'BR-06, BR-01',
    frId: 'FR-08, FR-05, FR-19',
    usId: 'US-06, US-07',
    solution: 'Unified RESTful API Microservices Orchestrator',
    kpi: 'Manual System Touchpoints',
    targetImpact: '12 steps -> 4 steps (-66% reduction)'
  },
  {
    problemId: 'P-04',
    problem: 'High Customer Inquiries (3.2 calls / loan)',
    rootCause: 'Opaque black-box wait; zero progress updates.',
    brId: 'BR-04, BR-09',
    frId: 'FR-20, FR-07',
    usId: 'US-03, US-04',
    solution: '24/7 Self-Service Milestone Hub & Event Push Alerts',
    kpi: 'Status Inquiries per Loan',
    targetImpact: '3.2 calls -> 0.6 calls (-81% reduction)'
  },
  {
    problemId: 'P-05',
    problem: 'Frequent SLA Breaches (14% of volume)',
    rootCause: 'Reactive tracking; lack of pre-breach threshold alerts.',
    brId: 'BR-07, BR-01',
    frId: 'FR-20, FR-15',
    usId: 'US-14, US-11',
    solution: 'Proactive SLA Countdown Engine (50% & 75% Alerts)',
    kpi: 'SLA Breach Rate',
    targetImpact: '14.0% -> 4.0% (-71% reduction)'
  },
  {
    problemId: 'P-06',
    problem: 'Manual KYC & AML Verification Bottleneck',
    rootCause: 'Manual copy-pasting into external government portals.',
    brId: 'BR-08, BR-01',
    frId: 'FR-09, FR-10',
    usId: 'US-08',
    solution: 'Direct National ID & Real-Time AML API Screening',
    kpi: 'KYC Cycle Time',
    targetImpact: '4.0h -> <5 min (-98% for clean files)'
  },
  {
    problemId: 'P-07',
    problem: 'Paper Contract Signing & Disbursement Delay',
    rootCause: 'Physical branch wet-ink signing mandates.',
    brId: 'BR-10, BR-08',
    frId: 'FR-17, FR-18, FR-19',
    usId: 'US-04, US-13',
    solution: 'Mobile OTP e-Signature & Core Banking Payment Rails',
    kpi: 'Post-Approval Disbursement Latency',
    targetImpact: '24.0h -> <15 min (-99% acceleration)'
  }
];

export const KPI_ITEMS: KPIItem[] = [
  {
    id: 'KPI-01',
    category: 'Operational',
    name: 'Average End-to-End TAT',
    formula: 'Avg hours from intake submission to disbursement',
    baseline: '5.0 Business Days (40.0h)',
    target: '1.8 Business Days (14.4h)',
    change: '-64%',
    trend: 'positive',
    rationale: 'Directly drives customer conversion and competitive parity.'
  },
  {
    id: 'KPI-02',
    category: 'Quality',
    name: 'Document Rework Rate',
    formula: '(Applications requiring re-upload / Total apps) * 100',
    baseline: '35.0% (3,500 apps/mo)',
    target: '8.0% (800 apps/mo)',
    change: '-77%',
    trend: 'positive',
    rationale: 'Eliminates the largest single source of operational delay.'
  },
  {
    id: 'KPI-03',
    category: 'Quality',
    name: 'First-Time-Right (FTR) Rate',
    formula: '(Applications processed with zero rework / Total apps) * 100',
    baseline: '48.0%',
    target: '82.0%',
    change: '+71%',
    trend: 'positive',
    rationale: 'Measures front-end data and document intake precision.'
  },
  {
    id: 'KPI-04',
    category: 'Operational',
    name: 'SLA Breach Rate',
    formula: '(Applications exceeding 5-day SLA / Total apps) * 100',
    baseline: '14.0% (1,400 apps/mo)',
    target: '4.0% (400 apps/mo)',
    change: '-71%',
    trend: 'positive',
    rationale: 'Guarantees service commitment and operational discipline.'
  },
  {
    id: 'KPI-05',
    category: 'Operational',
    name: 'Straight-Through Processing %',
    formula: '(Loans approved with zero human touch / Total apps) * 100',
    baseline: '0.0%',
    target: '38.0% (Tier 1 Low Risk)',
    change: '+38% STP',
    trend: 'positive',
    rationale: 'Frees up underwriter capacity for complex files.'
  },
  {
    id: 'KPI-06',
    category: 'Customer',
    name: 'Inbound Status Inquiries',
    formula: 'Total status calls & emails / Total applications',
    baseline: '3.2 calls / loan',
    target: '0.6 calls / loan',
    change: '-81%',
    trend: 'positive',
    rationale: 'Relieves branch staff from routine inquiry handling.'
  },
  {
    id: 'KPI-07',
    category: 'Customer',
    name: 'Application Drop-Off Rate',
    formula: '(Abandoned applications / Total intake starts) * 100',
    baseline: '22.0%',
    target: '9.0%',
    change: '-59%',
    trend: 'positive',
    rationale: 'Recovers lost customer acquisitions during intake.'
  },
  {
    id: 'KPI-08',
    category: 'Customer',
    name: 'Customer CSAT Score',
    formula: '% positive ratings (4 & 5 stars) post-disbursement',
    baseline: '61.0%',
    target: '88.0%',
    change: '+44%',
    trend: 'positive',
    rationale: 'Restores borrower trust and net promoter sentiment.'
  }
];

export const USER_STORIES_DATA: UserStory[] = [
  {
    id: 'US-01',
    persona: 'Sarah',
    role: 'Retail Loan Applicant',
    story: 'As a loan applicant, I want to see a clear, dynamic checklist of required documents tailored to my employment profile, so that I can upload the exact right files the first time and avoid delays.',
    priority: 'Must Have',
    relatedFR: 'FR-02',
    acceptanceCriteria: [
      {
        scenario: 'Salaried applicant views checklist',
        given: 'An applicant selects "Salaried Employee" on the initial form',
        when: 'The applicant navigates to the Document Upload screen',
        then: [
          'The system displays mandatory items: Photo ID, Last 3 Months Salary Slips, Last 6 Months Bank Statement, Proof of Address',
          'The "Submit" button is disabled until all mandatory categories contain valid uploads'
        ]
      }
    ]
  },
  {
    id: 'US-02',
    persona: 'Sarah',
    role: 'Retail Loan Applicant',
    story: 'As a loan applicant, I want immediate feedback if my uploaded document is blurry, corrupt, or low-resolution, so that I can rectify the issue instantly before final submission.',
    priority: 'Must Have',
    relatedFR: 'FR-04',
    acceptanceCriteria: [
      {
        scenario: 'Low-resolution document rejected at upload',
        given: 'An applicant is on the document upload screen',
        when: 'The applicant uploads an image below 200 DPI resolution',
        then: [
          'The system rejects the file immediately prior to storage',
          'Displays inline alert: "Document is blurry. Please upload a clear scan (minimum 300 DPI)"',
          'Checklist status remains "Pending Upload"'
        ]
      }
    ]
  },
  {
    id: 'US-03',
    persona: 'Sarah',
    role: 'Retail Loan Applicant',
    story: 'As a loan applicant, I want to track the real-time milestone status of my loan application online or on mobile, so that I know exactly which stage it is in without needing to call the branch.',
    priority: 'Must Have',
    relatedFR: 'FR-20',
    acceptanceCriteria: [
      {
        scenario: 'Applicant views 5-stage milestone stepper',
        given: 'An active applicant logs into the tracking portal',
        when: 'The applicant views the Loan Tracker dashboard',
        then: [
          'The system displays a 5-stage stepper (Intake, KYC, Underwriting, Sanction/e-Sign, Disbursement)',
          'Displays active stage progress and estimated completion date based on SLA'
        ]
      }
    ]
  },
  {
    id: 'US-04',
    persona: 'Sarah',
    role: 'Retail Loan Applicant',
    story: 'As a loan applicant, I want to review my sanction letter and digitally sign my loan agreement using mobile OTP e-Signature, so that I can finalize my loan without printing or visiting a branch.',
    priority: 'Must Have',
    relatedFR: 'FR-17',
    acceptanceCriteria: [
      {
        scenario: 'Applicant signs agreement via mobile OTP',
        given: 'A loan application is approved with active sanction token',
        when: 'The applicant reviews the agreement and enters the 6-digit SMS OTP',
        then: [
          'The system stamps the contract with a cryptographic digital signature and timestamp',
          'Application state updates to AGREEMENT_EXECUTED',
          'Disbursement Queue is automatically unlocked'
        ]
      }
    ]
  },
  {
    id: 'US-05',
    persona: 'David',
    role: 'Relationship Manager',
    story: 'As a Relationship Manager, I want an instant pre-eligibility estimator on my tablet when meeting prospects, so that I can quote realistic loan amounts and interest rates upfront.',
    priority: 'Should Have',
    relatedFR: 'FR-01',
    acceptanceCriteria: [
      {
        scenario: 'RM calculates instant eligibility quote',
        given: 'RM inputs prospect monthly income $5,000 and existing debt $800',
        when: 'RM clicks "Estimate Eligibility"',
        then: [
          'System calculates max allowable loan amount at 50% DTI ceiling',
          'Displays indicative monthly installment and interest rate tier within 1.0 second'
        ]
      }
    ]
  },
  {
    id: 'US-08',
    persona: 'Elena',
    role: 'KYC / Compliance Analyst',
    story: 'As a Compliance Officer, I want automated real-time verification against national ID registries and AML/PEP watchlists, so that standard clean profiles are verified instantly and I only review true compliance flags.',
    priority: 'Must Have',
    relatedFR: 'FR-09, FR-10',
    acceptanceCriteria: [
      {
        scenario: 'Automated KYC returns clean match',
        given: 'Application has passed document pre-validation',
        when: 'System transmits ID data to National Registry API and AML screening',
        then: [
          'System verifies identity authenticity in < 3.0s',
          'Confirms zero hits against PEP / sanctions databases',
          'Transitions application state directly to KYC_VERIFIED'
        ]
      }
    ]
  },
  {
    id: 'US-10',
    persona: 'Victor',
    role: 'Senior Underwriter',
    story: 'As an Underwriter, I want qualified low-risk Tier 1 applications to be auto-approved via Straight-Through Processing (STP), so that my work queue is reserved for complex files and policy exception reviews.',
    priority: 'Must Have',
    relatedFR: 'FR-14',
    acceptanceCriteria: [
      {
        scenario: 'Tier 1 applicant qualifies for instant STP approval',
        given: 'Applicant with Credit Score 780, DTI 28%, and requested loan $15,000',
        when: 'Credit Decision Engine evaluates Tier 1 STP policy rules',
        then: [
          'System verifies all STP eligibility criteria are satisfied',
          'Transitions application state to SANCTION_APPROVED in < 10 seconds without human queue assignment',
          'Dispatches approval notification to applicant'
        ]
      }
    ]
  },
  {
    id: 'US-14',
    persona: 'Karen',
    role: 'Operations Manager',
    story: 'As an Operations Manager, I want visual SLA countdown timers and automated alerts when applications reach 75% of processing time limits, so that our team can intervene proactively before SLA breaches occur.',
    priority: 'Must Have',
    relatedFR: 'FR-20',
    acceptanceCriteria: [
      {
        scenario: 'Task reaches 75% SLA threshold',
        given: 'An underwriting task has been in queue for 6.0 business hours (SLA = 8.0h)',
        when: 'Background SLA daemon evaluates queue timestamps',
        then: [
          'System changes task badge to "Red Warning"',
          'Dispatches escalation alert email to Credit Operations Team Lead',
          'Elevates task position to top of worklist'
        ]
      }
    ]
  }
];

export const RISKS_DATA: RiskItem[] = [
  {
    id: 'RSK-01',
    title: 'Legacy Core Banking Integration Delays',
    category: 'Technology / Arch',
    prob: 4,
    imp: 4,
    score: 16,
    severity: 'High',
    mitigation: 'Deploy containerized API Gateway / ESB wrapper; perform early interface mock testing.',
    owner: 'Lead IT Architect'
  },
  {
    id: 'RSK-02',
    title: 'OCR Data Extraction Inaccuracy',
    category: 'Technology / Data',
    prob: 3,
    imp: 4,
    score: 12,
    severity: 'High',
    mitigation: 'Enforce client-side DPI validation (≥300 DPI); route extractions with <85% confidence to human review.',
    owner: 'Lead Business Analyst'
  },
  {
    id: 'RSK-03',
    title: 'Staff Workflow Adoption & Resistance',
    category: 'People / Org',
    prob: 4,
    imp: 3,
    score: 12,
    severity: 'High',
    mitigation: 'Appoint Branch Digital Champions; execute role-based simulation training; align branch KPIs to digital adoption.',
    owner: 'Head of Change Management'
  },
  {
    id: 'RSK-04',
    title: 'Credit Model Risk & Excessive STP Default',
    category: 'Credit Risk',
    prob: 2,
    imp: 5,
    score: 10,
    severity: 'High',
    mitigation: 'Set conservative Tier 1 STP rules (Score ≥750, DTI ≤35%); monthly Credit Committee back-testing.',
    owner: 'Head of Credit Risk'
  },
  {
    id: 'RSK-05',
    title: 'External Regulatory API Outages (National ID/AML)',
    category: 'Operational / Vendor',
    prob: 3,
    imp: 3,
    score: 9,
    severity: 'Medium',
    mitigation: 'Build asynchronous queue retry handlers with automatic failover to secondary bureau providers.',
    owner: 'IT Infrastructure Lead'
  },
  {
    id: 'RSK-06',
    title: 'Customer Digital Onboarding Drop-Off',
    category: 'Customer Experience',
    prob: 3,
    imp: 3,
    score: 9,
    severity: 'Medium',
    mitigation: 'Provide assisted digital branch onboarding where branch officers guide walk-ins on branch tablets.',
    owner: 'Head of Retail Branches'
  },
  {
    id: 'RSK-07',
    title: 'Data Privacy & PII Leakage Risk',
    category: 'InfoSec',
    prob: 1,
    imp: 5,
    score: 5,
    severity: 'Medium',
    mitigation: 'End-to-end AES-256 encryption at rest, TLS 1.3 in transit, strict RBAC, and automated UI PII masking.',
    owner: 'Chief Information Security Officer'
  },
  {
    id: 'RSK-08',
    title: 'Fair Lending & Algorithmic Bias Risk',
    category: 'Regulatory',
    prob: 1,
    imp: 5,
    score: 5,
    severity: 'Medium',
    mitigation: 'Quarterly independent algorithmic fairness audits; decision parameters strictly evaluate financial capacity only.',
    owner: 'Chief Compliance Officer'
  }
];

export const ROADMAP_PHASES = [
  {
    phase: 'Phase 1',
    name: 'Process Standardization & Governance',
    duration: 'Months 1–3',
    status: 'Foundation',
    deliverables: [
      'Standardized Document Requirement Matrix across all 45 retail branches',
      'Formalized Departmental Operating SLA Contracts',
      'Codified Delegated Lending Authority (DLA) approval limits',
      'Standardized Fair Lending adverse action reason codes'
    ],
    gate: 'Credit Risk & Compliance sign-off on standardized business rules'
  },
  {
    phase: 'Phase 2',
    name: 'Digital Enablement & Intake Modernization',
    duration: 'Months 3–6',
    status: 'Core Intake',
    deliverables: [
      'Responsive web & mobile Digital Application Portal',
      'Automated Document Pre-Validation Engine (DPI ≥ 300)',
      'Customer Self-Service Milestone Tracker & notification triggers',
      'Branch document barcode indexing tool'
    ],
    gate: 'Pilot launch in 5 high-volume branches; document rework drops to < 20%'
  },
  {
    phase: 'Phase 3',
    name: 'Workflow Automation & STP Decisioning',
    duration: 'Months 6–9',
    status: 'Decision Engine',
    deliverables: [
      'Automated REST API connectors for National ID Registry & AML Watchlists',
      'Credit Rating Bureau API integration & algorithmic DTI calculator',
      'Credit Decisioning Engine executing automated STP for low-risk Tier 1',
      'Unified Underwriter Decision Workbench and mobile OTP e-Signature'
    ],
    gate: 'First 500 Straight-Through-Processed (STP) loans executed with zero touch'
  },
  {
    phase: 'Phase 4',
    name: 'Continuous Optimization & Real-Time Analytics',
    duration: 'Months 9–12',
    status: 'Enterprise Scale',
    deliverables: [
      'Real-time Operations Dashboard with queue depth & bottleneck monitors',
      'Proactive SLA countdown timers triggering alerts at 50% & 75% thresholds',
      'Automated Core Banking API disbursement trigger (<15 min funds release)',
      'Post-disbursement customer satisfaction survey automation'
    ],
    gate: 'Full rollout across all 45 branches; achievement of steady-state 1.8-day TAT'
  }
];
