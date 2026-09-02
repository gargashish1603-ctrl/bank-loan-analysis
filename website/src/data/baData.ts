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

export interface ProcessNodeDetail {
  id: string;
  name: string;
  lane: string;
  owner: string;
  stage: string;
  input: string;
  output: string;
  painPoint: string;
  observedIssue: string;
  duration: string;
  isBottleneck?: boolean;
  isRework?: boolean;
  isSTP?: boolean;
  isException?: boolean;
  automationType?: string;
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
  relatedProcessStep?: string;
  businessValue?: string;
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

export interface TraceabilityChain {
  id: string;
  title: string;
  problem: string;
  rootCause: string;
  gap: string;
  brId: string;
  brTitle: string;
  frId: string;
  frTitle: string;
  usId: string;
  usPersona: string;
  acceptanceCriteria: string;
  solution: string;
  kpi: string;
  targetImpact: string;
}

export interface KPIItem {
  id: string;
  category: 'Operational' | 'Quality' | 'Customer';
  name: string;
  definition: string;
  formula: string;
  baseline: string;
  target: string;
  change: string;
  proposedSource: string;
  owner: string;
  frequency: string;
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

export interface RoadmapPhase {
  phaseNumber: string;
  title: string;
  duration: string;
  focus: string;
  objectives: string[];
  keyDeliverables: string[];
  dependencies: string[];
  successMeasures: string[];
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

// ---------------------------------------------------------
// 8 Core Stakeholders & 2x2 Matrix
// ---------------------------------------------------------
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
    orgUnit: 'Retail Sales Network',
    interest: 'High',
    influence: 'Medium',
    quadrant: 'Keep Informed',
    responsibilities: 'Sources leads, guides walk-in clients, tracks monthly origination conversion quotas.',
    painPoints: 'Spends 40% of time chasing missing customer paperwork rather than advisory selling.',
    engagement: 'Mobile tablet pre-qualification estimator, instant eligibility checks, lead tracking dashboard.'
  },
  {
    id: 'STK-03',
    name: 'Branch Operations Officer',
    role: 'Branch Intake Staff',
    orgUnit: 'Retail Branch Network',
    interest: 'Medium',
    influence: 'High',
    quadrant: 'Keep Satisfied',
    responsibilities: 'Receives walk-in physical documents, scans paperwork, re-keys applicant data into CRM.',
    painPoints: 'Repetitive manual typing across 4 screens, handling frustrated walk-in applicants.',
    engagement: 'High-speed barcode document scanners, assisted digital intake tablet tools.'
  },
  {
    id: 'STK-04',
    name: 'Loan Operations Specialist',
    role: 'Central Backoffice',
    orgUnit: 'Central Lending Operations',
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
    orgUnit: 'Financial Crime & Compliance',
    interest: 'High',
    influence: 'High',
    quadrant: 'Manage Closely',
    responsibilities: 'Verifies national identity proofs, performs PEP and sanctions watchlist screening.',
    painPoints: 'Manual copy-pasting of IDs into external government portals; 4h verification latency.',
    engagement: 'Automated REST API integrations with National ID Registry and real-time AML screening.'
  },
  {
    id: 'STK-06',
    name: 'Credit Risk Analyst',
    role: 'Risk Assessment',
    orgUnit: 'Credit Risk Division',
    interest: 'High',
    influence: 'High',
    quadrant: 'Manage Closely',
    responsibilities: 'Calculates Debt-to-Income (DTI), analyzes bureau reports, sets risk-based pricing.',
    painPoints: 'Manually calculating ratios on Excel sheets from un-indexed PDF statements; 11.5% transcription errors.',
    engagement: 'Automated credit bureau API ingestion and algorithmic DTI calculation engine.'
  },
  {
    id: 'STK-07',
    name: 'Senior Underwriter',
    role: 'Credit Authority',
    orgUnit: 'Credit Underwriting Desk',
    interest: 'High',
    influence: 'High',
    quadrant: 'Manage Closely',
    responsibilities: 'Reviews credit policy exceptions, approves loans within Delegated Lending Authority (DLA).',
    painPoints: 'Mundane low-risk files clutter the queue, creating 9.5 hours of idle queue wait time.',
    engagement: 'Unified Underwriter Workbench with pre-calculated ratios and automated Tier 1 STP.'
  },
  {
    id: 'STK-08',
    name: 'Disbursement Officer',
    role: 'Funds Release',
    orgUnit: 'Payments & Settlement',
    interest: 'Medium',
    influence: 'High',
    quadrant: 'Keep Satisfied',
    responsibilities: 'Executes loan agreements, verifies disbursement conditions, initiates Core Banking payout.',
    painPoints: 'Waiting for physical wet-ink contracts; manual batch payment keying resulting in 24h lag.',
    engagement: 'Mobile OTP digital e-Signature and automated Core Banking API payment rails.'
  }
];

// ---------------------------------------------------------
// AS-IS Process BPMN Swimlane Nodes
// ---------------------------------------------------------
export const AS_IS_PROCESS_NODES: ProcessNodeDetail[] = [
  {
    id: 'ASIS-01',
    name: 'Application Intake & Static Capture',
    lane: 'Customer / RM',
    owner: 'Retail Applicant / Relationship Manager',
    stage: '1. Application',
    input: 'Applicant generic form fields',
    output: 'Unvalidated digital or paper application',
    painPoint: 'Static form lacks dynamic guidance; 18% missing fields',
    observedIssue: 'Customer submits incomplete profile; RM manually re-keys into CRM',
    duration: '1.5 Hours'
  },
  {
    id: 'ASIS-02',
    name: 'Physical Paper & PDF Upload',
    lane: 'Branch Operations',
    owner: 'Branch Operations Officer',
    stage: '2. Doc Collection',
    input: 'Physical documents / photo uploads',
    output: 'Unindexed document repository files',
    painPoint: 'No point-of-upload image resolution checks',
    observedIssue: 'Blurry, cropped smartphone photos accepted without immediate validation',
    duration: '2.0 Hours'
  },
  {
    id: 'ASIS-03',
    name: 'Manual Document Inspection & Rework Loop',
    lane: 'Loan Operations',
    owner: 'Central Backoffice Specialist',
    stage: '3. Doc Validation',
    input: 'Unindexed document batch',
    output: 'Deficiency notification email or validated file',
    painPoint: '35% rework loop; manual email dispatch',
    observedIssue: 'Applicant takes 26h to respond; rejected file loses queue priority (+48h lag)',
    duration: '8.5 Hours (+7.3h idle)',
    isBottleneck: true,
    isRework: true
  },
  {
    id: 'ASIS-04',
    name: 'Manual Government Portal Search',
    lane: 'KYC / AML',
    owner: 'Compliance Analyst',
    stage: '4. KYC Verification',
    input: 'Scanned ID card copy',
    output: 'Manual PDF compliance certificate',
    painPoint: 'Manual copy-pasting of national ID into external portals',
    observedIssue: 'Disconnected compliance silo creates 4.0h processing delay',
    duration: '4.0 Hours'
  },
  {
    id: 'ASIS-05',
    name: 'Manual Bureau Pull & Excel DTI Calculation',
    lane: 'Credit Risk',
    owner: 'Credit Risk Analyst',
    stage: '5. Credit Assessment',
    input: 'Applicant income statements & bureau pull',
    output: 'Manual Excel DTI assessment sheet',
    painPoint: 'Manual calculation on spreadsheets; 11.5% copy-paste errors',
    observedIssue: 'Risk assessment takes 4.5h per application without automated scoring',
    duration: '4.5 Hours'
  },
  {
    id: 'ASIS-06',
    name: '100% Manual FIFO Underwriting Queue',
    lane: 'Underwriting',
    owner: 'Senior Underwriter',
    stage: '6. Underwriting',
    input: 'Aggregated credit dossier',
    output: 'Underwriter credit sanction / decline',
    painPoint: 'Zero Straight-Through Processing; 9.5h queue dwell time',
    observedIssue: 'Standard low-risk files sit behind complex edge cases in a single queue',
    duration: '11.0 Hours (+9.5h idle)',
    isBottleneck: true
  },
  {
    id: 'ASIS-07',
    name: 'Branch Physical Wet-Ink Contract Signing',
    lane: 'Customer / Branch',
    owner: 'Applicant & Branch Officer',
    stage: '7. Approval & Agreement',
    input: 'Printed physical sanction letter',
    output: 'Signed physical paper loan contract',
    painPoint: 'Mandatory branch visit for physical wet-ink signing',
    observedIssue: 'Adds 24 to 48 hours post-approval lag while waiting for applicant appointment',
    duration: '24.0 Hours'
  },
  {
    id: 'ASIS-08',
    name: 'Manual Batch Keying to Core Banking',
    lane: 'Disbursement',
    owner: 'Disbursement Officer',
    stage: '8. Disbursement',
    input: 'Physical signed agreement',
    output: 'Batch payment file instruction',
    painPoint: 'Manual re-keying into Core Banking payment files',
    observedIssue: 'Funds credited 24 hours after signing due to end-of-day batch settlement',
    duration: '24.0 Hours'
  }
];

// ---------------------------------------------------------
// TO-BE Process BPMN Swimlane Nodes (Dual Track)
// ---------------------------------------------------------
export const TO_BE_PROCESS_NODES: ProcessNodeDetail[] = [
  {
    id: 'TOBE-01',
    name: 'Digital Omni-Channel Capture & Pre-Validation',
    lane: 'Customer / RM',
    owner: 'Applicant / Assisted Branch Tablet',
    stage: '1. Digital Intake',
    input: 'Dynamic applicant profile inputs',
    output: 'Pre-validated application packet with DPI ≥ 300',
    painPoint: 'Replaces static forms with dynamic profile-driven checklists',
    observedIssue: 'Real-time client-side checks eliminate 77% of intake document errors',
    duration: '< 15 Minutes',
    automationType: 'Automated Client-Side Validation'
  },
  {
    id: 'TOBE-02',
    name: 'Automated National ID & AML API Screening',
    lane: 'KYC / AML',
    owner: 'Automated Compliance Microservice',
    stage: '2. Automated KYC',
    input: 'National ID & biometric hash',
    output: 'Instant KYC clearance token & AML audit log',
    painPoint: 'Replaces manual portal lookup with sub-3s REST API calls',
    observedIssue: '92% of standard applicants verified in <3 seconds; edge flags route to AML analyst',
    duration: '< 3.0 Seconds',
    automationType: 'RESTful API Orchestration'
  },
  {
    id: 'TOBE-03',
    name: 'Bureau Ingestion & Algorithmic DTI Computation',
    lane: 'Credit Risk Engine',
    owner: 'Credit Decision Engine',
    stage: '3. Credit Scoring',
    input: 'Direct credit bureau file & verified income data',
    output: 'Algorithmic DTI, FOIR, and Risk Tier score',
    painPoint: 'Eliminates Excel spreadsheets and manual ratio transcription',
    observedIssue: 'Consistent mathematical computation in <5 seconds with zero human error',
    duration: '< 5.0 Seconds',
    automationType: 'Rule-Based Computation Engine'
  },
  {
    id: 'TOBE-04',
    name: '★ Track A: Straight-Through-Processing (STP)',
    lane: 'Credit Decision Engine',
    owner: 'Automated STP Engine',
    stage: '4. Decisioning (Track A)',
    input: 'Tier 1 Low-Risk Dossier (Score ≥750, DTI ≤35%, Loan ≤$25k)',
    output: 'Automated Sanction Approval & Terms Generation',
    painPoint: 'Bypasses human underwriting queue for ~38% of qualified applicants',
    observedIssue: 'Approved in <10 seconds with 100% compliance audit trail',
    duration: '< 10.0 Seconds',
    isSTP: true,
    automationType: 'Automated STP Decision Engine'
  },
  {
    id: 'TOBE-05',
    name: 'Track B: Unified Underwriter Exception Workbench',
    lane: 'Underwriting',
    owner: 'Licensed Underwriter',
    stage: '4. Decisioning (Track B)',
    input: 'Complex / Edge-Case Dossier (Score 650–749, DTI 36–50%, >$25k)',
    output: 'Underwriter adverse action / conditional approval',
    painPoint: 'Human review reserved exclusively for high-ticket and policy exceptions',
    observedIssue: 'Single-screen workbench with pre-calculated ratios cuts review touch time to 25 mins',
    duration: '2.5 Hours (Avg)',
    isException: true,
    automationType: 'Unified Decision Workbench'
  },
  {
    id: 'TOBE-06',
    name: 'Digital Sanction & Mobile OTP Cryptographic e-Sign',
    lane: 'Customer',
    owner: 'Borrower (Mobile / Web)',
    stage: '5. Execution',
    input: 'Digital Sanction Letter',
    output: 'Cryptographically signed legal agreement',
    painPoint: 'Eliminates mandatory branch visit and 24h wet-ink signing lag',
    observedIssue: 'Executed instantly on smartphone via secure two-factor SMS OTP',
    duration: '< 10 Minutes',
    automationType: 'Cryptographic e-Signature Service'
  },
  {
    id: 'TOBE-07',
    name: 'Automated Core Banking API Payment Release',
    lane: 'Core Banking',
    owner: 'Payment Rail Microservice',
    stage: '6. Disbursement',
    input: 'e-Signed contract event trigger',
    output: 'Immediate account credit & customer SMS notification',
    painPoint: 'Replaces manual batch keying with automated API payment release',
    observedIssue: 'Funds disbursed into borrower account within <15 minutes post-signing',
    duration: '< 15 Minutes',
    automationType: 'Real-Time Payment API Trigger'
  }
];

// ---------------------------------------------------------
// 4 Primary Bottlenecks (Ranked)
// ---------------------------------------------------------
export const BOTTLENECKS_RANKED: Bottleneck[] = [
  {
    id: 'BN-01',
    title: 'Document Intake Rework Loop',
    stage: 'Document Validation',
    problem: '35% of all loan applications require secondary document submissions due to blurry or incomplete uploads.',
    rootCause: 'Intake decoupled from validation; generic static document checklist without point-of-upload image resolution checks.',
    idleLatency: '+7.3 Hours Average Latency',
    failureRate: '35.0% Document Rework Rate',
    severity: 5,
    proposedSolution: 'Client-side DPI resolution pre-validation (≥300 DPI) and dynamic employment-tailored checklists.',
    relatedReq: 'BR-03, FR-02, FR-04'
  },
  {
    id: 'BN-02',
    title: 'Undifferentiated FIFO Underwriting Backlog',
    stage: 'Credit Underwriting',
    problem: '100% of loans routed into a single manual queue regardless of credit profile, generating 9.5 hours of idle dwell time.',
    rootCause: 'Absence of an automated Credit Decision Engine with codified policy thresholds for low-risk Straight-Through-Processing.',
    idleLatency: '+9.5 Hours Idle Queue Wait',
    failureRate: '0% STP Adoption Baseline',
    severity: 5,
    proposedSolution: 'Dual-track decision engine enabling 38% Straight-Through-Processing (STP) for Tier 1 low-risk applicants.',
    relatedReq: 'BR-01, BR-05, FR-14'
  },
  {
    id: 'BN-03',
    title: 'Manual System Handoffs & Data Transcription',
    stage: 'System Integration',
    problem: 'Staff manually re-key applicant data across 4 legacy platforms, causing 11.5% copy-paste errors and handoff drag.',
    rootCause: 'Fragmented siloed databases lacking a centralized RESTful API enterprise integration bus.',
    idleLatency: '+4.0 Hours Handoff Latency',
    failureRate: '11.5% Data Transcription Errors',
    severity: 4,
    proposedSolution: 'Enterprise API Gateway synchronizing applicant state across CRM, LOS, and Core Banking.',
    relatedReq: 'BR-06, FR-08, FR-19'
  },
  {
    id: 'BN-04',
    title: 'Incomplete Initial Submissions',
    stage: 'Application Capture',
    problem: '18% of applications held in pending status due to missing mandatory disclosures or mismatched income data.',
    rootCause: 'Static application forms that do not enforce progressive field validation or context-sensitive prompts.',
    idleLatency: '+5.2 Hours Idle Wait',
    failureRate: '18.0% Additional Info Requests',
    severity: 4,
    proposedSolution: 'Responsive progressive intake portal with real-time field validation and context guidance.',
    relatedReq: 'BR-02, FR-01, FR-03'
  }
];

// ---------------------------------------------------------
// 5 Whys Root Cause Chains
// ---------------------------------------------------------
export const FIVE_WHYS_DATA: FiveWhyItem[] = [
  {
    id: '5W-1',
    title: 'Root Cause: High Document Rework (35%)',
    problem: '35% of all loan applications fail initial review and require secondary document uploads.',
    whys: [
      'Why? Uploaded salary slips and IDs are blurry, expired, cropped, or from outdated statement months.',
      'Why? Applicants are unclear about exact requirements and receive zero feedback during upload.',
      'Why? The intake portal presents a static, generic form that does not adapt to employment type.',
      'Why? Document inspection is performed entirely manually by backoffice staff hours or days later.',
      'Why? Absence of an intelligent digital intake layer with dynamic checklists and client-side resolution pre-validation (≥300 DPI).'
    ],
    rootCause: 'Lack of dynamic, rules-driven document pre-validation at the point of customer upload.',
    solution: 'Dynamic Checklist (FR-02) + Automated Pre-Validation Engine with DPI ≥ 300 enforcement (FR-04).',
    kpi: 'Document Rework Rate drops from 35.0% to 8.0% (-77%).'
  },
  {
    id: '5W-2',
    title: 'Root Cause: 9.5h Underwriting Idle Queue Dwell Time',
    problem: 'Applications spend an average of 9.5 hours of non-value-add idle queue wait in Underwriting.',
    whys: [
      'Why? Underwriters face an unmanageable daily backlog of 150+ applications per queue.',
      'Why? Every single loan application, regardless of risk, must be manually reviewed by an underwriter.',
      'Why? The bank does not have automated Straight-Through Processing (STP) rules enabled.',
      'Why? Credit bureau data and DTI ratios are calculated manually on Excel spreadsheets.',
      'Why? Credit policy rules are not codified into an automated decision engine connected via API to credit bureaus.'
    ],
    rootCause: 'Undifferentiated manual underwriting queue without automated Straight-Through-Processing for qualified low-risk profiles.',
    solution: 'Credit Bureau API (FR-11) + Algorithmic DTI Engine (FR-12) + Tier 1 STP Decision Engine (FR-14).',
    kpi: 'Average TAT drops from 5.0 to 1.8 days (-64%); 38% STP volume achieved.'
  },
  {
    id: '5W-3',
    title: 'Root Cause: High Inbound Inquiries (3.2 Calls / Loan)',
    problem: 'NovaBank receives 32,000 inbound status inquiry contacts per month regarding loan progress.',
    whys: [
      'Why? Customers do not know what stage their application is in or why it is delayed.',
      'Why? The bank does not send status updates between initial intake and final loan sanction.',
      'Why? Status transitions occur across disconnected internal systems with no notification trigger.',
      'Why? The customer web portal has no self-service tracking interface or real-time stepper.',
      'Why? Application state transitions are siloed across 4 legacy databases without a centralized customer event orchestration layer.'
    ],
    rootCause: 'Opaque black-box processing without centralized milestone tracking or automated event notifications.',
    solution: '24/7 Self-Service Milestone Hub (FR-20) + Automated Event Notification Service (FR-07).',
    kpi: 'Status inquiries drop from 3.2 to 0.6 calls/loan (-81%).'
  }
];

// ---------------------------------------------------------
// 6M Fishbone Cause-and-Effect Categories
// ---------------------------------------------------------
export const FISHBONE_DATA = {
  people: [
    'RMs spend 40% of working hours chasing missing paperwork rather than advisory selling.',
    'Underwriters burdened with manual review of pristine low-risk files.',
    'Manual email coordination between branch staff and central operations.'
  ],
  process: [
    'Document verification decoupled from point-of-intake upload.',
    'Rejected applications sent back to beginning of sequential queue (+48h lag).',
    'Mandatory physical branch visits for wet-ink contract execution.'
  ],
  technology: [
    '4 disconnected legacy banking systems requiring duplicate data entry.',
    'Absence of an automated Credit Decisioning Engine (STP).',
    'Lack of real-time REST APIs for national identity and AML screening.'
  ],
  policy: [
    '100% manual underwriting mandate regardless of credit bureau score.',
    'Rigid Delegated Lending Authority (DLA) limits creating approval bottlenecks.',
    'Physical paper contract retention policies.'
  ],
  data: [
    '11.5% data transcription errors from manual copy-pasting across screens.',
    'Unstructured PDF bank statements requiring manual Excel re-keying.',
    'Low-resolution (<150 DPI) smartphone document photos accepted at intake.'
  ],
  controls: [
    'Reactive SLA tracking identified only after customer complaint escalation.',
    'Lack of automated pre-breach alerts at 50% and 75% queue thresholds.',
    'Fragmented audit logs scattered across 4 separate legacy system databases.'
  ]
};

// ---------------------------------------------------------
// 12 Operational Gaps
// ---------------------------------------------------------
export const GAP_ANALYSIS_DATA: GapItem[] = [
  {
    id: 'GAP-01',
    dimension: 'Document Intake Quality',
    asIs: 'Manual inspection 24-48h post-intake by backoffice staff',
    toBe: 'Real-time client-side pre-validation (DPI ≥ 300) at upload',
    gap: 'Intake decoupled from validation',
    impact: 'High rework rate (35%); +7.3h idle wait',
    improvement: 'Deploy automated Pre-Validation Engine with instant error prompts (FR-04)',
    priority: 'Must Have'
  },
  {
    id: 'GAP-02',
    dimension: 'Checklist Personalization',
    asIs: 'Static generic document checklist for all loan applicants',
    toBe: 'Dynamic checklist adapting to Salaried / Self-Employed',
    gap: 'No applicant-specific document rules',
    impact: '18% applications held for additional information',
    improvement: 'Context-sensitive Dynamic Checklist Engine (FR-02)',
    priority: 'Must Have'
  },
  {
    id: 'GAP-03',
    dimension: 'System Integration',
    asIs: 'Manual data re-keying across 4 disconnected legacy systems',
    toBe: 'Unified RESTful API microservices data synchronization',
    gap: 'Siloed databases without middleware bus',
    impact: '11.5% copy-paste errors; handoff latency',
    improvement: 'Enterprise API Gateway connecting CRM, LOS & Core (FR-08)',
    priority: 'Must Have'
  },
  {
    id: 'GAP-04',
    dimension: 'Credit Assessment',
    asIs: 'Manual credit bureau downloads & Excel spreadsheet DTI',
    toBe: 'Direct bureau API ingestion & algorithmic DTI computation',
    gap: 'Manual ratio calculation on spreadsheets',
    impact: '4.5h credit latency; calculation errors',
    improvement: 'Direct Credit Bureau API connector & Algorithmic DTI Engine (FR-11, FR-12)',
    priority: 'Must Have'
  },
  {
    id: 'GAP-05',
    dimension: 'Underwriting Decisioning',
    asIs: '100% manual review in single undifferentiated FIFO queue',
    toBe: 'Dual-track: 38% Tier 1 STP + Underwriter Exception Desk',
    gap: 'No automated credit decisioning rules',
    impact: '9.5h idle queue dwell time',
    improvement: 'Automated Credit Decision Engine with codified policy rules (FR-14)',
    priority: 'Must Have'
  },
  {
    id: 'GAP-06',
    dimension: 'Customer Transparency',
    asIs: 'Zero tracking; black-box wait for applicant',
    toBe: '24/7 5-stage self-service milestone tracker',
    gap: 'Opaque status visibility',
    impact: '3.2 inbound inquiry calls per loan (32k calls/mo)',
    improvement: 'Customer Self-Service Milestone Tracking Hub (FR-20)',
    priority: 'Must Have'
  },
  {
    id: 'GAP-07',
    dimension: 'Agreement Signing',
    asIs: 'Physical branch visit for wet-ink contract signature',
    toBe: 'Mobile OTP cryptographic digital e-Signature',
    gap: 'Paper contract dependency',
    impact: '24-48 hours post-approval settlement lag',
    improvement: 'Mobile OTP Digital e-Signature Service (FR-17)',
    priority: 'Must Have'
  },
  {
    id: 'GAP-08',
    dimension: 'Payment Disbursement',
    asIs: 'Manual batch keying into Core Banking payment files',
    toBe: 'Automated Core Banking API release upon e-Sign verification',
    gap: 'Batch payment processing delay',
    impact: '24h settlement delay post-signing',
    improvement: 'Real-time Core Banking Payment Release API (FR-19)',
    priority: 'Must Have'
  },
  {
    id: 'GAP-09',
    dimension: 'KYC & AML Verification',
    asIs: 'Manual copy-pasting of IDs into external government portals',
    toBe: 'Automated real-time REST API registry screening in <3s',
    gap: 'Manual compliance portal lookups',
    impact: '4.0h KYC cycle time',
    improvement: 'National ID & AML Watchlist REST API Connectors (FR-09, FR-10)',
    priority: 'Must Have'
  },
  {
    id: 'GAP-10',
    dimension: 'SLA Monitoring & Governance',
    asIs: 'Reactive tracking identified only after customer complaints',
    toBe: 'Proactive countdown timers with 50% & 75% alerts',
    gap: 'No proactive pre-breach alerts',
    impact: '14.0% SLA breach rate',
    improvement: 'Real-time SLA Monitoring Daemon with automated lead escalations (FR-20)',
    priority: 'Should Have'
  }
];

// ---------------------------------------------------------
// Requirements Hub (BR, FR, NFR, Business Rules)
// ---------------------------------------------------------
export const BUSINESS_REQUIREMENTS: Requirement[] = [
  {
    id: 'BR-01',
    category: 'Cycle Time',
    title: 'Turnaround Time (TAT) Reduction',
    description: 'The loan origination lifecycle from intake to disbursement shall be reduced from an average of 5.0 business days to under 2.0 business days (target: 1.8 days).',
    rationale: 'Accelerate time-to-cash, match neo-bank competitor benchmarks, and reduce applicant drop-off.',
    priority: 'Must Have',
    relatedProblem: 'P-02 (5-Day Delay)',
    relatedProcessStep: 'End-to-End Origination',
    businessValue: '64% reduction in cycle time; higher origination conversion rate.'
  },
  {
    id: 'BR-02',
    category: 'Intake Quality',
    title: 'First-Time-Right (FTR) Submission Rate',
    description: 'The system shall elevate First-Time-Right (FTR) complete application submissions from 48.0% to at least 80.0% (target: 82.0%).',
    rationale: 'Prevent downstream rework loops and eliminate unnecessary backoffice processing touches.',
    priority: 'Must Have',
    relatedProblem: 'P-01 (35% Rework)',
    relatedProcessStep: 'Application Intake',
    businessValue: '77% reduction in rework files; significant operational capacity liberation.'
  },
  {
    id: 'BR-03',
    category: 'Document Management',
    title: 'Point-of-Ingestion Pre-Validation',
    description: 'The system shall automate document completeness and image resolution verification at the point of customer upload before file ingestion.',
    rationale: 'Eliminate manual backoffice document inspection queues and 48-hour email rework lag.',
    priority: 'Must Have',
    relatedProblem: 'P-01 (35% Rework)',
    relatedProcessStep: 'Document Collection',
    businessValue: 'Instant feedback to applicant; clean data handover to underwriting.'
  },
  {
    id: 'BR-04',
    category: 'Customer Transparency',
    title: 'Real-Time Milestone Tracking & Notifications',
    description: 'The system shall provide 24/7 self-service application milestone tracking and automated event-triggered SMS/Email alerts to applicants.',
    rationale: 'Reduce 3.2 inbound inquiry calls per application and elevate customer satisfaction.',
    priority: 'Must Have',
    relatedProblem: 'P-04 (Inquiry Overload)',
    relatedProcessStep: 'Customer Experience',
    businessValue: '81% reduction in branch inquiry calls (32,000 to 6,000 calls/month).'
  },
  {
    id: 'BR-05',
    category: 'Credit Decisioning',
    title: 'Automated Straight-Through Processing (STP)',
    description: 'The system shall enable automated credit sanctioning (Straight-Through Processing) for qualified low-risk Tier 1 applications without human queue intervention.',
    rationale: 'Liberate licensed underwriter capacity to focus on complex, high-risk, and policy-exception reviews.',
    priority: 'Must Have',
    relatedProblem: 'P-02 (Queue Wait)',
    relatedProcessStep: 'Credit Underwriting',
    businessValue: '38% of applications approved in <10 seconds; queue dwell time eliminated.'
  },
  {
    id: 'BR-06',
    category: 'System Integration',
    title: 'Enterprise RESTful Data Synchronization',
    description: 'The system shall eliminate duplicate manual data entry across CRM, LOS, Credit Bureau, and Core Banking through an enterprise API microservices bus.',
    rationale: 'Eliminate 11.5% copy-paste errors and manual handoff latency between departments.',
    priority: 'Must Have',
    relatedProblem: 'P-03 (System Fragmentation)',
    relatedProcessStep: 'System Handoffs',
    businessValue: 'Manual touchpoints reduced from 12 to 4; zero data transcription errors.'
  }
];

export const FUNCTIONAL_REQUIREMENTS: Requirement[] = [
  {
    id: 'FR-01',
    category: 'Digital Intake',
    title: 'Responsive Omni-Channel Application Capture',
    description: 'The system shall provide a responsive web and mobile application interface with real-time field validation, format masking, and auto-save capability.',
    rationale: 'Enable frictionless applicant intake across branch tablet and consumer web channels.',
    priority: 'Must Have',
    relatedProblem: 'P-01',
    relatedProcessStep: 'Step 1: Intake'
  },
  {
    id: 'FR-02',
    category: 'Intake Quality',
    title: 'Dynamic Profile-Driven Document Checklist',
    description: 'The system shall dynamically generate required document checklists based on applicant employment profile (Salaried vs. Self-Employed) and loan tier.',
    rationale: 'Ensure applicants receive and upload only mandatory documents relevant to their profile.',
    priority: 'Must Have',
    relatedProblem: 'P-01',
    relatedProcessStep: 'Step 1: Intake'
  },
  {
    id: 'FR-04',
    category: 'Document Management',
    title: 'Automated Client-Side Image & Resolution Pre-Validation',
    description: 'The system shall inspect uploaded files in real time for DPI resolution (≥300 DPI), file size (<10MB), and readable format before permitting submission.',
    rationale: 'Reject blurry or cropped scans immediately with inline corrective prompts.',
    priority: 'Must Have',
    relatedProblem: 'P-01',
    relatedProcessStep: 'Step 1: Ingestion'
  },
  {
    id: 'FR-08',
    category: 'Integration',
    title: 'Enterprise Data Synchronization via REST API',
    description: 'The system shall synchronize applicant demographic, financial, and loan status data across CRM, LOS, and Core Banking in real time via JSON REST APIs.',
    rationale: 'Eliminate manual re-keying and ensure a single source of truth across all banking systems.',
    priority: 'Must Have',
    relatedProblem: 'P-03',
    relatedProcessStep: 'Step 2: Handoffs'
  },
  {
    id: 'FR-09',
    category: 'Compliance',
    title: 'National Identity Registry Real-Time API Integration',
    description: 'The system shall transmit applicant ID credentials to the National Identity Registry API and receive real-time authentication tokens in < 3.0 seconds.',
    rationale: 'Automate identity verification without manual compliance portal searching.',
    priority: 'Must Have',
    relatedProblem: 'P-06',
    relatedProcessStep: 'Step 2: KYC'
  },
  {
    id: 'FR-11',
    category: 'Credit Risk',
    title: 'Direct Credit Rating Bureau API Ingestion',
    description: 'The system shall ingest applicant credit scores, active trade-lines, and delinquency history directly from the Credit Bureau via secure REST API in < 3.0 seconds.',
    rationale: 'Eliminate manual bureau PDF downloads and spreadsheet extraction.',
    priority: 'Must Have',
    relatedProblem: 'P-02',
    relatedProcessStep: 'Step 3: Credit'
  },
  {
    id: 'FR-12',
    category: 'Credit Risk',
    title: 'Algorithmic Debt-to-Income (DTI) Computation Engine',
    description: 'The system shall compute DTI, Fixed Obligation to Income Ratio (FOIR), and Disposable Income algorithmically using verified income and bureau obligations.',
    rationale: 'Replace manual Excel computations and eliminate calculation errors.',
    priority: 'Must Have',
    relatedProblem: 'P-02',
    relatedProcessStep: 'Step 3: Credit'
  },
  {
    id: 'FR-14',
    category: 'Decisioning',
    title: 'Automated Straight-Through Processing (STP) Decision Engine',
    description: 'The system shall auto-approve Tier 1 low-risk applications (Score ≥750, DTI ≤35%, Loan ≤$25k) in <10 seconds without routing to a human underwriter queue.',
    rationale: 'Deliver instant decisions for pristine credit files and eliminate 9.5h queue dwell time.',
    priority: 'Must Have',
    relatedProblem: 'P-02',
    relatedProcessStep: 'Step 4: Decision'
  },
  {
    id: 'FR-16',
    category: 'Underwriting',
    title: 'Unified Decision Workbench for Underwriter Exceptions',
    description: 'The system shall provide licensed underwriters with a single-screen workbench displaying risk highlights, pre-calculated ratios, and adverse action tools.',
    rationale: 'Accelerate review of complex/high-risk files by eliminating 5 disconnected open windows.',
    priority: 'Must Have',
    relatedProblem: 'P-02',
    relatedProcessStep: 'Step 4: Decision'
  },
  {
    id: 'FR-17',
    category: 'Execution',
    title: 'Mobile OTP Digital Cryptographic e-Signature',
    description: 'The system shall issue digital sanction letters with secure mobile OTP two-factor cryptographic e-Signatures compliant with legal electronic signature standards.',
    rationale: 'Eliminate physical branch visits and 24-hour wet-ink signing delays.',
    priority: 'Must Have',
    relatedProblem: 'P-07',
    relatedProcessStep: 'Step 5: Execution'
  },
  {
    id: 'FR-19',
    category: 'Disbursement',
    title: 'Automated Core Banking Payment Release API Trigger',
    description: 'Upon verification of valid e-Sign and active direct debit, the system shall trigger automated payment release into the applicant account within <15 minutes.',
    rationale: 'Eliminate manual batch keying and end-of-day settlement delays.',
    priority: 'Must Have',
    relatedProblem: 'P-07',
    relatedProcessStep: 'Step 6: Settlement'
  },
  {
    id: 'FR-20',
    category: 'Governance',
    title: 'Proactive Real-Time SLA Monitor & Escalation Engine',
    description: 'The system shall track elapsed processing time against SLA thresholds and dispatch automated escalation alerts to team leads when tasks reach 75% of limit.',
    rationale: 'Reduce SLA breaches from 14.0% to under 4.0% through proactive intervention.',
    priority: 'Must Have',
    relatedProblem: 'P-05',
    relatedProcessStep: 'End-to-End Governance'
  }
];

export const NON_FUNCTIONAL_REQUIREMENTS: Requirement[] = [
  {
    id: 'NFR-01',
    category: 'Security & Access Control',
    title: 'Role-Based Access Control (RBAC) & AES-256 Encryption',
    description: 'The system shall enforce granular RBAC, multi-factor authentication (MFA) for staff, AES-256 encryption at rest, and TLS 1.3 encryption in transit for all applicant PII.',
    rationale: 'Statutory compliance with banking data protection mandates and zero unauthorized access.',
    priority: 'Must Have',
    relatedProblem: 'P-06'
  },
  {
    id: 'NFR-02',
    category: 'System Performance',
    title: 'Sub-3-Second API Latency',
    description: 'The system shall execute external API calls (National ID, Credit Bureau, AML Watchlist) within 3.0 seconds (95th percentile) and page load times under 1.5 seconds.',
    rationale: 'High operational throughput and frictionless customer experience.',
    priority: 'Must Have',
    relatedProblem: 'P-02'
  },
  {
    id: 'NFR-03',
    category: 'Availability',
    title: '99.9% Production Uptime',
    description: 'The digital intake portal and workflow engine shall maintain 99.9% availability during business operating hours (24/7 digital intake availability).',
    rationale: 'Ensure uninterrupted customer application submissions.',
    priority: 'Must Have',
    relatedProblem: 'P-04'
  },
  {
    id: 'NFR-04',
    category: 'Auditability',
    title: 'Immutable 7-Year Audit Trail',
    description: 'The system shall maintain an immutable, tamper-evident audit log recording every system action, credit pull, score query, underwriter note, and approval for 7 years.',
    rationale: '100% regulatory examination compliance and Fair Lending defense.',
    priority: 'Must Have',
    relatedProblem: 'P-06'
  }
];

export const BUSINESS_RULES: BusinessRule[] = [
  {
    id: 'BR-RULE-01',
    name: 'Mandatory KYC Completion Prior to Underwriting',
    category: 'Compliance',
    rule: 'No application shall proceed to credit scoring, decisioning, or sanction until Customer Due Diligence (CDD) and AML/PEP screening have passed with zero active flags.',
    enforcement: 'Hard system lock in workflow engine at state KYC_PENDING; bypass impossible without compliance officer override.'
  },
  {
    id: 'BR-RULE-02',
    name: 'Minimum Age & Residency Eligibility',
    category: 'Eligibility',
    rule: 'Applicant must be at least 21 years of age at origination and no older than 60 years at loan maturity, and must be a citizen or verified permanent resident.',
    enforcement: 'Automated field validation against verified date of birth and national identity registry data.'
  },
  {
    id: 'BR-RULE-03',
    name: 'Minimum Net Monthly Income Threshold',
    category: 'Credit Risk',
    rule: 'Applicant must demonstrate verified net monthly income of ≥ $2,500 (Salaried) or net annual profit of ≥ $40,000 (Self-Employed) over the preceding financial year.',
    enforcement: 'Algorithmic calculation from OCR bank statements and verified tax filings; shortfall triggers auto-decline code INC_MIN_FAIL.'
  },
  {
    id: 'BR-RULE-05',
    name: 'Debt-to-Income (DTI) Hard Ceiling',
    category: 'Credit Risk',
    rule: 'Total monthly debt service obligations (existing loans + proposed loan EMI) must not exceed 50.0% of verified net monthly income under any circumstance.',
    enforcement: 'DTI > 50.0% triggers automatic decline code DTI_EXCEEDS_CAP without manual waiver option.'
  },
  {
    id: 'BR-RULE-06',
    name: 'Automated Straight-Through Processing (STP) Eligibility',
    category: 'Decisioning',
    rule: 'STP Auto-Approval granted IF AND ONLY IF: Credit Score ≥ 750, DTI ≤ 35.0%, Loan Amount ≤ $25,000, Employment Tenor ≥ 12 months, clean KYC, and zero active delinquencies.',
    enforcement: 'Credit Decision Engine executes instant state transition to SANCTION_APPROVED in < 10 seconds.'
  },
  {
    id: 'BR-RULE-07',
    name: 'Mandatory Human Underwriter Review Thresholds',
    category: 'Decisioning',
    rule: 'Applications with Credit Score 650–749, OR DTI 36.0%–50.0%, OR Loan Amount > $25,000, OR Self-Employed status MUST be routed to the Underwriter Exception Workbench.',
    enforcement: 'Workflow engine routes task to Underwriter Worklist; STP execution disabled.'
  },
  {
    id: 'BR-RULE-08',
    name: 'Automatic Hard Decline Criteria',
    category: 'Credit Risk',
    rule: 'System shall auto-decline applications with: Credit Score < 600, active bankruptcy, >90 Days Past Due (DPD) delinquency in past 24 months, or fraudulent documents.',
    enforcement: 'State transitions immediately to DECLINED; adverse action notification dispatched with regulatory reason codes.'
  },
  {
    id: 'BR-RULE-09',
    name: 'Delegated Lending Authority (DLA) Tiers',
    category: 'Governance',
    rule: 'Junior Underwriter: approval up to $15,000; Senior Underwriter: approval up to $35,000; Credit Committee: approvals > $35,000 or policy exception waivers.',
    enforcement: 'Role-Based Access Control (RBAC) gates approval action buttons based on user credentials and ticket size.'
  },
  {
    id: 'BR-RULE-10',
    name: 'Mandatory Adverse Action & Rejection Reason Codes',
    category: 'Compliance',
    rule: 'Every credit decline or policy override must record standardized Fair Lending adverse action reason codes and a minimum 25-character underwriter justification note.',
    enforcement: 'Form submission blocked if reason code dropdown is unselected or justification text is below character limit.'
  },
  {
    id: 'BR-RULE-11',
    name: 'Operational SLA Timeframes & Escalation',
    category: 'Governance',
    rule: 'Target SLAs: Doc Review ≤ 4h; KYC ≤ 4h; Underwriting ≤ 8h; Disbursement ≤ 2h. Breaching 75% of limit triggers automated email alert to Operations Team Lead.',
    enforcement: 'Background SLA daemon evaluates queue timestamps every 60 seconds.'
  },
  {
    id: 'BR-RULE-12',
    name: 'Disbursement Lock & Pre-Disbursement Verification',
    category: 'Governance',
    rule: 'Loan funds shall remain locked until cryptographic e-Sign is verified, direct debit mandate is active, and destination account name matches applicant ID exactly.',
    enforcement: 'Core Banking API disbursement endpoint rejected if preconditions return FALSE.'
  }
];

export const USER_STORIES_DATA: UserStory[] = [
  {
    id: 'US-01',
    persona: 'Sarah',
    role: 'Retail Loan Applicant',
    story: 'As a loan applicant, I want to see a dynamic, personalized document checklist based on my employment type, so that I only upload the exact documents required and avoid submission errors.',
    priority: 'Must Have',
    relatedFR: 'FR-02',
    acceptanceCriteria: [
      {
        scenario: 'Salaried applicant views checklist',
        given: 'An applicant selects "Salaried Employee" in the digital intake portal',
        when: 'The applicant navigates to the Document Upload step',
        then: [
          'The system displays mandatory items: Photo ID, Last 3 Months Salary Slips, Last 6 Months Bank Statement',
          'The system hides Self-Employed tax return upload fields',
          'The "Submit" button remains disabled until all mandatory items have valid uploads'
        ]
      }
    ]
  },
  {
    id: 'US-02',
    persona: 'Sarah',
    role: 'Retail Loan Applicant',
    story: 'As a loan applicant, I want instant feedback if my uploaded document is blurry, cropped, or unreadable, so that I can rectify it immediately during submission rather than waiting days for a rejection email.',
    priority: 'Must Have',
    relatedFR: 'FR-04',
    acceptanceCriteria: [
      {
        scenario: 'Low-resolution image rejected at upload',
        given: 'An applicant is on the document upload screen',
        when: 'The applicant uploads a camera photo with resolution below 200 DPI',
        then: [
          'The system rejects the file immediately prior to server transmission',
          'Displays inline warning: "Document resolution is too low. Please upload a clear scan (minimum 300 DPI)"',
          'Prompts applicant to re-upload before proceeding'
        ]
      }
    ]
  },
  {
    id: 'US-10',
    persona: 'Victor',
    role: 'Senior Underwriter',
    story: 'As an Underwriter, I want qualified low-risk Tier 1 applications to be auto-approved via Straight-Through Processing (STP), so that my queue is reserved for complex files and policy exception reviews.',
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

// ---------------------------------------------------------
// 10-Step Interactive Traceability Chains (Problem → KPI)
// ---------------------------------------------------------
export const TRACEABILITY_CHAINS: TraceabilityChain[] = [
  {
    id: 'TR-01',
    title: 'Chain 1: Document Rework Elimination',
    problem: 'P-01: 35% of all applications generate rework loops due to blurry or incomplete document uploads.',
    rootCause: 'Intake decoupled from validation; generic static document checklist without point-of-upload pre-checks.',
    gap: 'GAP-01: Absence of client-side resolution and completeness pre-validation.',
    brId: 'BR-03',
    brTitle: 'Point-of-Ingestion Pre-Validation',
    frId: 'FR-04',
    frTitle: 'Client-Side DPI & Completeness Pre-Validation',
    usId: 'US-02',
    usPersona: 'Retail Loan Applicant (Sarah)',
    acceptanceCriteria: 'Given low-res upload (<200 DPI), When submitted, Then reject immediately with inline prompt.',
    solution: 'Deploy client-side pre-validation (DPI ≥ 300) and context-sensitive dynamic checklists.',
    kpi: 'Document Rework Rate',
    targetImpact: 'Slashed from 35.0% to 8.0% (-77% rework reduction)'
  },
  {
    id: 'TR-02',
    title: 'Chain 2: Turnaround Time (TAT) Acceleration',
    problem: 'P-02: 5.0 business days average processing turnaround time creates applicant drop-off.',
    rootCause: '100% manual review in an undifferentiated FIFO underwriting queue with 9.5 hours idle wait.',
    gap: 'GAP-05: Absence of automated Straight-Through Processing (STP) rules for low-risk files.',
    brId: 'BR-05',
    brTitle: 'Automated Straight-Through Processing (STP)',
    frId: 'FR-14',
    frTitle: 'Credit Decision Engine & Tier 1 STP Auto-Approval',
    usId: 'US-10',
    usPersona: 'Senior Underwriter (Victor)',
    acceptanceCriteria: 'Given Score ≥750 & DTI ≤35%, When decisioned, Then auto-sanction in <10s with zero human touch.',
    solution: 'Credit Decisioning Engine executing 38% automated Straight-Through Processing (STP).',
    kpi: 'Average End-to-End TAT',
    targetImpact: 'Reduced from 5.0 to 1.8 Business Days (-64% cycle time)'
  },
  {
    id: 'TR-03',
    title: 'Chain 3: System Handoff & Data Transcription',
    problem: 'P-03: 4 disconnected legacy platforms require manual copy-pasting, causing 11.5% errors.',
    rootCause: 'Siloed legacy databases lacking a centralized RESTful API enterprise integration bus.',
    gap: 'GAP-03: Duplicate data entry across CRM, LOS, Credit Bureau, and Core Banking.',
    brId: 'BR-06',
    brTitle: 'Enterprise RESTful Data Synchronization',
    frId: 'FR-08',
    frTitle: 'Enterprise API Gateway & Real-Time Sync',
    usId: 'US-06',
    usPersona: 'Branch Operations Officer (David)',
    acceptanceCriteria: 'Given applicant record update in CRM, When saved, Then sync to LOS and Core in <1.0s.',
    solution: 'Centralized RESTful API microservices gateway synchronizing all banking systems.',
    kpi: 'Manual System Touchpoints & Error Rate',
    targetImpact: 'Touchpoints reduced from 12 to 4 (-66%); zero transcription errors'
  },
  {
    id: 'TR-04',
    title: 'Chain 4: Customer Status Transparency',
    problem: 'P-04: High customer anxiety resulting in 3.2 inbound status inquiry calls per loan (32,000 calls/mo).',
    rootCause: 'Opaque black-box wait times with zero automated progress updates between intake and decision.',
    gap: 'GAP-06: Absence of customer self-service status portal and event notification triggers.',
    brId: 'BR-04',
    brTitle: 'Real-Time Milestone Tracking & Notifications',
    frId: 'FR-20',
    frTitle: '24/7 Customer Milestone Hub & Push Alerts',
    usId: 'US-03',
    usPersona: 'Retail Loan Applicant (Sarah)',
    acceptanceCriteria: 'Given state transition to UNDERWRITING, When event fires, Then dispatch SMS alert with tracking link.',
    solution: '24/7 Self-Service Milestone Tracking Portal with automated SMS/Email event triggers.',
    kpi: 'Inbound Status Inquiry Calls',
    targetImpact: 'Declines from 3.2 to 0.6 calls per loan (-81% branch call load)'
  },
  {
    id: 'TR-05',
    title: 'Chain 5: Operational SLA Governance',
    problem: 'P-05: 14.0% SLA breach rate due to reactive queue tracking and lack of early warning alerts.',
    rootCause: 'Lack of automated queue countdown monitors and pre-breach threshold triggers.',
    gap: 'GAP-10: Absence of real-time SLA countdown engine and automated lead escalations.',
    brId: 'BR-07',
    brTitle: 'Proactive SLA Monitoring & Governance',
    frId: 'FR-20',
    frTitle: 'Real-Time SLA Monitor & Escalation Daemon',
    usId: 'US-14',
    usPersona: 'Operations Manager (Karen)',
    acceptanceCriteria: 'Given queue time reaches 75% of limit, When evaluated, Then alert Team Lead and elevate priority.',
    solution: 'Proactive SLA countdown daemon triggering warnings at 50% and 75% thresholds.',
    kpi: 'SLA Breach Rate',
    targetImpact: 'SLA violations reduced from 14.0% to 4.0% (-71% breach reduction)'
  }
];

// ---------------------------------------------------------
// Comprehensive KPI Framework & Measurement Sources
// ---------------------------------------------------------
export const KPI_FRAMEWORK_DATA: KPIItem[] = [
  {
    id: 'KPI-01',
    category: 'Operational',
    name: 'Average Loan Turnaround Time (TAT)',
    definition: 'Total elapsed business hours from initial application submission to fund disbursement.',
    formula: 'Σ (Timestamp_Disbursed - Timestamp_Submitted) / Total Disbursed Loans',
    baseline: '5.0 Days (40.0h)',
    target: '1.8 Days (14.4h)',
    change: '-64% Cycle Time',
    proposedSource: 'Loan Origination System (LOS) Event Timestamps',
    owner: 'Head of Lending Operations',
    frequency: 'Daily & Monthly Scorecard',
    trend: 'positive',
    rationale: 'Core operational velocity metric measuring origination throughput.'
  },
  {
    id: 'KPI-02',
    category: 'Quality',
    name: 'Document Rework Rate',
    definition: 'Percentage of total submitted applications requiring secondary document upload requests.',
    formula: '(Applications with ≥1 Document Rejection / Total Applications Submitted) * 100',
    baseline: '35.0% (3,500 apps)',
    target: '8.0% (800 apps)',
    change: '-77% Rework Volume',
    proposedSource: 'Document Management System (DMS) Deficiency Logs',
    owner: 'Central Operations Lead',
    frequency: 'Weekly Quality Review',
    trend: 'positive',
    rationale: 'Primary indicator of intake data quality and process friction.'
  },
  {
    id: 'KPI-03',
    category: 'Quality',
    name: 'First-Time-Right (FTR) Intake Rate',
    definition: 'Percentage of applications progressing through intake and verification without any correction loops.',
    formula: '(Applications Approved Without Rework / Total Applications Processed) * 100',
    baseline: '48.0%',
    target: '82.0%',
    change: '+71% Quality Improvement',
    proposedSource: 'Workflow Audit Trail & Deficiency Logs',
    owner: 'Branch Operations Lead',
    frequency: 'Monthly Scorecard',
    trend: 'positive',
    rationale: 'Reflects effectiveness of dynamic checklists and pre-validation.'
  },
  {
    id: 'KPI-04',
    category: 'Operational',
    name: 'Straight-Through Processing (STP) Rate',
    definition: 'Percentage of approved personal loans sanctioned and disbursed with zero manual underwriter touch.',
    formula: '(Automated STP Approved Loans / Total Approved Loans) * 100',
    baseline: '0.0% (100% Manual)',
    target: '38.0% (Tier 1 Low-Risk)',
    change: '+38% Automation Ratio',
    proposedSource: 'Credit Decision Engine (CDE) Execution Logs',
    owner: 'Head of Credit Risk',
    frequency: 'Monthly Governance',
    trend: 'positive',
    rationale: 'Measures decision automation for pristine credit profiles.'
  },
  {
    id: 'KPI-05',
    category: 'Operational',
    name: 'SLA Breach Rate (> 5 Business Days)',
    definition: 'Percentage of total applications exceeding established stage and end-to-end SLA limits.',
    formula: '(Applications Exceeding Stage SLA / Total Processed Applications) * 100',
    baseline: '14.0% (1,400 loans)',
    target: '4.0% (400 loans)',
    change: '-71% SLA Breaches',
    proposedSource: 'Workflow SLA Countdown Daemon',
    owner: 'Operations Governance Lead',
    frequency: 'Daily Live Monitor',
    trend: 'positive',
    rationale: 'Operational governance metric ensuring consistent delivery standards.'
  },
  {
    id: 'KPI-06',
    category: 'Customer',
    name: 'Inbound Status Inquiry Calls',
    definition: 'Average number of customer status check telephone calls and branch inquiries per application.',
    formula: 'Total Inbound Loan Status Contacts / Total Active Applications',
    baseline: '3.2 Calls / Loan',
    target: '0.6 Calls / Loan',
    change: '-81% Call Volume',
    proposedSource: 'Contact Center CRM & Branch Ticketing System',
    owner: 'Customer Experience Lead',
    frequency: 'Monthly Customer Metric',
    trend: 'positive',
    rationale: 'Direct proxy for customer anxiety and process transparency.'
  },
  {
    id: 'KPI-07',
    category: 'Customer',
    name: 'Customer Satisfaction (CSAT) Score',
    definition: 'Percentage of applicants rating their loan origination experience as 4 or 5 out of 5 stars.',
    formula: '(Positive Survey Responses (4 & 5 Stars) / Total Survey Responses) * 100',
    baseline: '61.0%',
    target: '88.0%',
    change: '+44% Satisfaction',
    proposedSource: 'Post-Disbursement Automated Digital Survey',
    owner: 'Head of Retail Banking',
    frequency: 'Monthly Executive Scorecard',
    trend: 'positive',
    rationale: 'Holistic measure of customer sentiment and brand loyalty.'
  }
];

// Alias for backward compatibility
export const KPI_ITEMS = KPI_FRAMEWORK_DATA;

// ---------------------------------------------------------
// 3-Phase Implementation Roadmap
// ---------------------------------------------------------
export const ROADMAP_3_PHASES: RoadmapPhase[] = [
  {
    phaseNumber: 'Phase 1',
    title: 'Process Standardization & Operational Governance',
    duration: 'Months 1–3',
    focus: 'Foundation & Rules Codification',
    objectives: [
      'Eliminate policy ambiguity across all 45 retail branch networks',
      'Codify standardized document matrices and Delegated Lending Authority limits',
      'Establish departmental operating level agreement (OLA) contracts'
    ],
    keyDeliverables: [
      'Standardized Document Requirement Matrix across all retail branches',
      'Formalized Departmental Operating SLA Contracts with automated triggers',
      'Codified Delegated Lending Authority (DLA) approval limits matrix',
      'Standardized Fair Lending adverse action reason code catalog'
    ],
    dependencies: [
      'Credit Risk & Compliance policy alignment sign-off',
      'Branch operations executive committee mandate'
    ],
    successMeasures: [
      '100% branch compliance on document intake checklists',
      'Formal sign-off on credit decision policy rules'
    ]
  },
  {
    phaseNumber: 'Phase 2',
    title: 'Workflow & Validation Automation',
    duration: 'Months 3–6',
    focus: 'Intake Modernization & Core Integrations',
    objectives: [
      'Deploy responsive digital intake portal with client-side pre-validation',
      'Integrate real-time REST APIs for National ID registry and credit bureau ingestion',
      'Launch automated customer milestone tracking hub and SMS/Email push alerts'
    ],
    keyDeliverables: [
      'Responsive Web & Mobile Application Capture Portal with DPI ≥ 300 checks',
      'RESTful API Connectors to National Identity Registry and AML watchlists',
      'Credit Bureau API connector & Algorithmic DTI computation engine',
      'Customer 24/7 Self-Service Milestone Tracker'
    ],
    dependencies: [
      'Phase 1 standardized business rules and data models',
      'API Gateway security infrastructure & external vendor contracts'
    ],
    successMeasures: [
      'Document rework rate drops from 35% to < 18% in pilot branches',
      'Bureau ingestion completes in < 3.0 seconds'
    ]
  },
  {
    phaseNumber: 'Phase 3',
    title: 'Optimization & Continuous Monitoring',
    duration: 'Months 6–12',
    focus: 'Decision Engine, STP & Full Scale Rollout',
    objectives: [
      'Activate automated Straight-Through Processing (STP) for Tier 1 low-risk loans',
      'Deploy Unified Underwriter Exception Workbench and mobile OTP e-Signature',
      'Automate Core Banking API payment release and proactive SLA monitors'
    ],
    keyDeliverables: [
      'Credit Decision Engine executing 38% automated STP approvals',
      'Unified Underwriter Decision Workbench with risk highlight cards',
      'Mobile OTP cryptographic digital e-Signature service',
      'Real-time Core Banking API disbursement trigger (<15 min release)',
      'Operations Dashboard with proactive 75% SLA countdown alerts'
    ],
    dependencies: [
      'Phase 2 API integrations and data validation stability',
      'Underwriting staff simulation training and change enablement'
    ],
    successMeasures: [
      'Steady-state Turnaround Time (TAT) reaches 1.8 Business Days (-64%)',
      '38% STP volume achieved with zero manual touch',
      'SLA breach rate falls to ≤ 4.0%'
    ]
  }
];

// Alias for backward compatibility
export const ROADMAP_PHASES = ROADMAP_3_PHASES.map(p => ({
  phase: p.phaseNumber,
  name: p.title,
  duration: p.duration,
  status: p.focus,
  deliverables: p.keyDeliverables,
  gate: p.successMeasures[0]
}));

// ---------------------------------------------------------
// 5x5 Risk Register
// ---------------------------------------------------------
export const RISKS_DATA: RiskItem[] = [
  {
    id: 'RSK-01',
    title: 'Legacy Core Banking API Integration Delays',
    category: 'Technology / Architecture',
    prob: 4,
    imp: 4,
    score: 16,
    severity: 'High',
    mitigation: 'Deploy containerized API Gateway / ESB wrapper; perform early interface contract mocking and load tests.',
    owner: 'Lead Enterprise IT Architect'
  },
  {
    id: 'RSK-02',
    title: 'OCR Data Extraction & Resolution Inaccuracy',
    category: 'Technology / Data Quality',
    prob: 3,
    imp: 4,
    score: 12,
    severity: 'High',
    mitigation: 'Enforce client-side DPI validation (≥300 DPI); route OCR extractions with <85% confidence to human review.',
    owner: 'Lead Business Analyst'
  },
  {
    id: 'RSK-03',
    title: 'Staff Workflow Adoption & Change Resistance',
    category: 'People / Organization',
    prob: 4,
    imp: 3,
    score: 12,
    severity: 'High',
    mitigation: 'Appoint Branch Digital Champions in all 45 branches; execute role-based simulation training; tie branch KPIs to digital adoption.',
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
    mitigation: 'Set conservative Tier 1 STP criteria (Score ≥750, DTI ≤35%); perform monthly Credit Committee back-testing.',
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
    mitigation: 'Build asynchronous queue retry handlers with automatic failover to secondary certified bureau/registry providers.',
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
    mitigation: 'Provide assisted digital onboarding where branch officers guide walk-ins on branch tablets.',
    owner: 'Head of Retail Branches'
  },
  {
    id: 'RSK-07',
    title: 'Data Privacy & PII Leakage Risk',
    category: 'Information Security',
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
    category: 'Regulatory Compliance',
    prob: 1,
    imp: 5,
    score: 5,
    severity: 'Medium',
    mitigation: 'Quarterly independent algorithmic fairness audits; decision parameters strictly evaluate financial capacity only.',
    owner: 'Chief Compliance Officer'
  }
];
