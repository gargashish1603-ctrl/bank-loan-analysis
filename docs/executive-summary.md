# Executive Summary

> **Disclaimer:** *Illustrative assumptions for portfolio case study — not real bank data.*

---

## 1. Business Context & Engagement Objective

**NovaBank** is a fictional mid-sized retail commercial bank operating an extensive retail branch network alongside emerging digital channels. NovaBank offers personal loans, home mortgages, auto financing, and small business credit facilities. 

Over the preceding three quarters, executive management noted a sharp escalation in customer dissatisfaction regarding the **Personal Loan Origination Process**. While consumer demand for unsecured personal credit grew by 14% year-on-year, loan processing operational cycle times deteriorated, leading to application abandonment, lost customer acquisitions, and an overworked operational staff.

As a **Business Analyst** specializing in lending operations and process optimization, this case study documents a structured business analysis engagement conducted to evaluate the current AS-IS origination lifecycle, diagnose root causes of operational friction, capture stakeholder requirements, and engineer an optimized, exception-based TO-BE future state.

---

## 2. Baseline Operational Findings (AS-IS)

An operational assessment based on an assumed monthly volume of **10,000 personal loan applications** identified significant systemic friction:

```
+-------------------------------------------------------------------------------+
|                        NOVA BANK AS-IS OPERATIONAL BASELINE                   |
+-------------------------------------------------------------------------------+
|  Monthly Volume:             10,000 personal loan applications                |
|  Average End-to-End TAT:     5.0 Business Days (40 working hours)             |
|  Document Rework Rate:       35.0% (3,500 apps/mo require secondary upload)   |
|  Info Request Rate:          18.0% (1,800 apps/mo held for missing fields)    |
|  Manual Handoff Delays:      22.0% of cases stalled at department boundaries  |
|  SLA Breach Rate (>5 Days):  14.0% (1,400 loans/mo miss service commitment)   |
|  First-Time-Right (FTR):     48.0% (over half require rework or clarification)|
|  Customer Status Inquiries:  3.2 calls/emails per active applicant            |
+-------------------------------------------------------------------------------+
```

### Core Operational Bottlenecks Identified:
1. **Unassisted Manual Document Verification:** Intake is decoupled from validation; operations staff spend ~35 minutes per application manually validating income proofs, bank statements, and national IDs.
2. **Fragmented Legacy System Architecture:** Operations teams manually re-key identical applicant data across 4 disparate internal core platforms (CRM, KYC Portal, Loan Origination System, Core Banking).
3. **Reactive Exception Handling & Email-Driven Handoffs:** Document deficiency notices are dispatched manually via unsecured email batches 24–48 hours after submission, leaving applicants uninformed.
4. **Homogeneous Queue Routing:** Low-risk, standard applications queue behind complex, multi-party exception files in an undifferentiated first-in, first-out (FIFO) credit underwriting queue.

---

## 3. Root Cause Diagnostics Summary

A structured diagnostic applying **5 Whys** and **Ishikawa (Fishbone) 6M Analysis** revealed that delays were not primarily driven by staffing deficits, but rather by **architectural and process design flaws**:
- **Front-End Validation Deficit:** Absence of dynamic document checklist and client-side pre-validation at the point of customer submission.
- **Siloed Departmental Queues:** Absence of centralized orchestration and real-time SLA event monitors.
- **All-or-Nothing Underwriting Paradigm:** Lack of credit segmentation to allow automated straight-through processing (STP) for qualified low-risk applicants while preserving dedicated human judgement for exception cases.

---

## 4. Proposed TO-BE Solution & Operating Model

The proposed TO-BE state introduces an **Automation-First, Exception-Based Loan Origination Engine**:

```
+---------------------------------------------------------------------------------------+
|                               TO-BE OPERATING ARCHITECTURE                            |
+---------------------------------------------------------------------------------------+
|  1. Digital Intake & Pre-Validation: Dynamic checklists & format validation at upload |
|  2. Automated Verification & KYC: Automated API calls to Bureau & Identity registries |
|  3. Decisioning Segmentation:                                                         |
|     * Low-Risk / Standard (Tier 1)  --> Automated Straight-Through-Processing (STP)   |
|     * Borderline / Complex (Tier 2) --> Intelligent Queue to Senior Underwriter       |
|  4. Centralized Status Hub & Push Notifications: Multi-channel SMS/Email/Portal updates|
|  5. Proactive SLA Escalation: Automated alerts at 50% and 75% threshold consumption   |
+---------------------------------------------------------------------------------------+
```

> **Important Risk Control Principle:** The redesigned workflow **does not eliminate human underwriting**. Instead, it automates standard data collation and verification, liberating licensed underwriters to focus strictly on complex risk evaluations and policy overrides.

---

## 5. Projected Business Impact & KPI Scorecard

| Performance Metric | AS-IS Baseline | TO-BE Target | Illustrative Expected Impact |
| :--- | :---: | :---: | :--- |
| **Average End-to-End TAT** | 5.0 Days | **1.8 Days** | **64% reduction in loan turnaround time** |
| **Document Rework Rate** | 35.0% | **8.0%** | **77% drop in document re-submissions** |
| **First-Time-Right (FTR) Rate** | 48.0% | **82.0%** | **71% improvement in clean submissions** |
| **SLA Breach Rate** | 14.0% | **4.0%** | **71% decrease in SLA violations** |
| **Manual Touchpoints per App** | 12 tasks | **4 tasks** | **66% decrease in redundant manual effort** |
| **Application Abandonment** | 22.0% | **9.0%** | **59% reduction in drop-offs during intake** |
| **Status Inquiries per Loan** | 3.2 calls | **0.6 calls** | **81% reduction in branch/contact center calls** |

*Note: All projected metrics reflect illustrative target modeling for this case study and are not observed production metrics.*

---

## 6. Strategic BA Recommendations & Roadmap

1. **Adopt a 4-Phase Phased Rollout:** Prevent operational disruption by standardizing document rules and SLAs (Phase 1), deploying digital intake and pre-validation (Phase 2), activating automated routing and decisioning (Phase 3), and establishing continuous analytics monitoring (Phase 4).
2. **Prioritize Requirements Traceability:** Maintain strict alignment between business problems, functional requirements, and measurable KPIs to guarantee value delivery.
3. **Execute Comprehensive Change Management:** Provide branch staff, relationship managers, and underwriters with role-specific transition training and revised operational playbooks.
