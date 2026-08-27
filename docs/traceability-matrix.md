# Requirements Traceability Matrix (RTM)

> **Disclaimer:** *Illustrative assumptions for portfolio case study — not real bank data.*

---

## 1. Traceability Architecture & Methodology

A foundational competency of a professional Business Analyst is establishing **unbroken, bi-directional traceability** across the entire lifecycle of a project. 

The Requirements Traceability Matrix (RTM) links every high-level **Business Problem** directly to its underlying **Root Cause**, which guides the **Business Requirement (BR)**, decomposes into a **Functional Requirement (FR)** and **User Story (US)**, manifests in an engineered **Solution Feature**, and is quantified by a target **Key Performance Indicator (KPI)**.

```
                               THE LOGICAL TRACEABILITY CHAIN
  ┌──────────────────┐
  │ BUSINESS PROBLEM │
  └────────┬─────────┘
           ▼
  ┌──────────────────┐
  │    ROOT CAUSE    │  (Diagnosed via 5 Whys & Ishikawa Fishbone)
  └────────┬─────────┘
           ▼
  ┌──────────────────┐
  │ BUSINESS REQ (BR)│  (High-level operational objective & strategic rationale)
  └────────┬─────────┘
           ▼
  ┌──────────────────┐
  │FUNCTIONAL REQ(FR)│  (System capability, data behavior, and user story)
  └────────┬─────────┘
           ▼
  ┌──────────────────┐
  │ TO-BE SOLUTION   │  (Engineered architectural component)
  └────────┬─────────┘
           ▼
  ┌──────────────────┐
  │  TARGETED KPI    │  (Quantifiable baseline-to-target business metric)
  └──────────────────┘
```

---

## 2. Complete Requirements Traceability Matrix

| Business Problem | Root Cause Analysis | Business Req (BR) | Functional Req (FR) | User Story (US) | TO-BE Solution Feature | Target KPI & Expected Impact |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **P-01: High Document Rework (35%)** | Absence of front-end document validation; customers submit blurry, expired, or missing files without knowing requirements. | **BR-03:** Automate document pre-validation.<br>**BR-02:** Improve First-Time-Right rate. | **FR-02:** Dynamic Checklist.<br>**FR-04:** Automated DPI/Format Validation.<br>**FR-07:** Deficiency Alerts. | **US-01:** Customer views checklist.<br>**US-02:** Immediate feedback on bad scan. | **Intelligent Intake & Pre-Validation Engine:** Real-time client-side resolution check + dynamic profile checklist. | **Document Rework Rate:**<br>35.0% Baseline → **8.0% Target** (77% reduction in rework). |
| **P-02: Extended Turnaround Time (5.0 Days)** | Applications queue in undifferentiated FIFO queues; simple low-risk files wait behind complex manual files. | **BR-01:** Reduce loan processing TAT to < 2.0 days.<br>**BR-05:** Segmented Decisioning & STP. | **FR-13:** Credit Decision Engine.<br>**FR-14:** Automated STP for Tier 1.<br>**FR-15:** Exception Queue Routing. | **US-09:** Automated Bureau DTI.<br>**US-10:** Underwriter worklist reserved for exceptions. | **Automated Decision Engine & Tiered STP:** Straight-through approval for Score ≥ 750 / DTI ≤ 35% with zero human touch. | **Average End-to-End TAT:**<br>5.0 Days Baseline → **1.8 Days Target** (64% cycle time acceleration). |
| **P-03: Duplicate Data Entry across 4 Systems** | Disconnected legacy siloed systems (CRM, KYC Portal, LOS, Core Banking) requiring manual copy-pasting by branch staff. | **BR-06:** Eliminate redundant data entry.<br>**BR-01:** Reduce manual operational touchpoints. | **FR-08:** Unified Data Sync.<br>**FR-05:** OCR Extraction Engine.<br>**FR-19:** Core Banking API Release. | **US-06:** Barcode auto-indexing.<br>**US-07:** OCR extraction from salary slip into LOS. | **Unified Microservices Data Orchestrator:** Event-driven RESTful API layer synchronizing Core Banking & CRM. | **Manual System Touchpoints:**<br>12 manual steps → **4 steps** (66% drop in administrative re-keying). |
| **P-04: High Customer Inquiries (3.2 calls/loan)** | Customers have zero visibility into application progress after submission; reliance on branch visits and manual emails. | **BR-04:** Omni-channel status transparency.<br>**BR-09:** Automated customer communication. | **FR-20:** Visual 5-Stage Status Tracker.<br>**FR-07:** Real-time push notifications (SMS/Email). | **US-03:** Customer tracks live milestones.<br>**US-04:** Customer receives e-Sign notification. | **Customer Self-Service Milestone Hub:** Omni-channel SMS/WhatsApp/In-App event-triggered notifications. | **Status Inquiries per Loan:**<br>3.2 calls Baseline → **0.6 calls Target** (81% reduction in branch inquiries). |
| **P-05: Frequent SLA Breaches (14%)** | Lack of real-time pipeline monitoring; applications sit idle in employee inboxes without escalation alerts. | **BR-07:** Proactive SLA monitoring & escalation.<br>**BR-01:** Reduce overall queue dwell time. | **FR-20:** Real-time countdown timers.<br>**FR-15:** Intelligent auto-rebalancing of worklists. | **US-14:** Manager receives 75% SLA warning.<br>**US-11:** Underwriter dashboard with urgency badges. | **Proactive SLA Event Monitor & Alerting Engine:** Automated countdown timers triggering escalation at 50% & 75% thresholds. | **SLA Breach Rate:**<br>14.0% Baseline → **4.0% Target** (71% reduction in SLA violations). |
| **P-06: Manual KYC & AML Screening Bottleneck** | Operations staff manually type applicant ID numbers into government portals and external watchlist search engines. | **BR-08:** Maintain regulatory compliance & KYC.<br>**BR-01:** Reduce operational cycle time. | **FR-09:** National ID API Integration.<br>**FR-10:** Automated AML/PEP Watchlist Screening. | **US-08:** Automated instant clearance of clean KYC profiles. | **Automated Compliance Verification Orchestration:** Direct integration with National ID Registry and real-time AML screening. | **KYC Verification Cycle Time:**<br>4.0 Hours Baseline → **< 5 Minutes Target** (98% reduction for clean profiles). |
| **P-07: Paper Agreement & Disbursement Delay** | Approved loans require physical signing or manual account verification, stalling disbursement by 24–48 hours. | **BR-10:** Streamline e-Sign & instant disbursement.<br>**BR-08:** Enforce pre-disbursement controls. | **FR-17:** Automated Sanction Letter.<br>**FR-18:** Pre-Disbursement Checklist.<br>**FR-19:** Core Banking API Release. | **US-04:** Customer e-Signs via mobile OTP.<br>**US-13:** Disbursement triggered automatically. | **Digital Agreement & Instant Payment Gateway:** Cryptographic e-Sign execution with direct Core Banking payment rails. | **Post-Approval Disbursement Time:**<br>24.0 Hours Baseline → **< 15 Minutes Target** (99% acceleration). |

---

## 3. Bi-Directional Traceability Verification

- **Forward Traceability (Problem → Solution → KPI):** Every diagnosed operational failure point is addressed by at least one specific Functional Requirement and validated by a measurable operational KPI.
- **Backward Traceability (Code / Feature → Business Requirement):** Every technical capability (e.g., OCR extraction, API triggers, SLA timers) is strictly justified by an approved Business Requirement and executive objective, ensuring zero "scope creep".
