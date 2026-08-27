# 5 Whys Root Cause Analysis

> **Disclaimer:** *Illustrative assumptions for portfolio case study — not real bank data.*

---

## 1. Diagnostic Framework Overview

The **5 Whys Methodology** is an iterative interrogative technique used in Lean Six Sigma and Business Analysis to explore the cause-and-effect relationships underlying an operational failure. By repeatedly asking *"Why?"*, superficial symptoms are stripped away to reveal the foundational architectural, process, or policy root causes.

Five multi-tier 5-Whys root cause investigations were conducted into NovaBank's primary operational breakdown areas:

```
                               THE 5 WHYS INVESTIGATION SUITE
  ┌────────────────────────┐   ┌────────────────────────┐   ┌────────────────────────┐
  │      5 WHYS #1         │   │       5 WHYS #2        │   │       5 WHYS #3        │
  │   High Document Rework │   │ Extended Underwriting  │   │  High Inbound Customer │
  │        Rate (35%)      │   │      Delays (11.0h)    │   │  Status Calls (3.2/app)│
  └────────────────────────┘   └────────────────────────┘   └────────────────────────┘
```

---

## 2. 5 Whys Deep-Dive Investigations

### 5 Whys #1: Why is the Document Rework Rate so high (35% of all applications)?

```
  PROBLEM: 3,500 personal loan applications per month require secondary document uploads.
  │
  ├─► WHY 1? Why are documents rejected after submission?
  │   └── Because operations staff find that uploaded salary slips and IDs are blurry, expired, 
  │       missing second pages, or from incorrect financial periods.
  │
  ├─► WHY 2? Why do applicants submit low-quality, incomplete, or incorrect documents?
  │   └── Because applicants do not know their specific document requirements, and they receive 
  │       no feedback when uploading files.
  │
  ├─► WHY 3? Why are document requirements not communicated clearly at the point of upload?
  │   └── Because the existing intake portal presents a static, generic upload form that does 
  │       not adapt to the applicant's employment profile (Salaried vs. Self-Employed).
  │
  ├─► WHY 4? Why is there no immediate validation when a user uploads an unreadable file?
  │   └── Because document inspection is performed entirely manually by backoffice staff 
  │       hours or days after the applicant submits the form.
  │
  └─► WHY 5? (ROOT CAUSE) Why is validation decoupled from the point of ingestion?
      └── Because the bank lacks an automated digital intake layer with dynamic profile checklists 
          and client-side image resolution / format pre-validation.
```

- **Fundamental Root Cause:** Absence of dynamic front-end document checklists and real-time pre-validation at the point of intake.
- **Traceable Solution:** Deploy **FR-02 (Dynamic Checklist)** and **FR-04 (Automated Pre-Validation Engine)**.

---

### 5 Whys #2: Why do loan applications spend 11.0 hours idling in Credit Underwriting?

```
  PROBLEM: Applications experience an average of 9.5 hours of non-value-add idle queue time in Underwriting.
  │
  ├─► WHY 1? Why do applications sit so long before an underwriter reviews them?
  │   └── Because underwriters face a daily backlog of 150+ applications per queue.
  │
  ├─► WHY 2? Why is the underwriting queue constantly congested?
  │   └── Because every single loan application, regardless of risk level or ticket size, 
  │       must be manually evaluated by a licensed underwriter.
  │
  ├─► WHY 3? Why are routine, highly creditworthy applications not automated?
  │   └── Because the bank does not have automated Straight-Through Processing (STP) 
  │       rules integrated into its Loan Origination System.
  │
  ├─► WHY 4? Why has automated decisioning not been enabled for low-risk applicants?
  │   └── Because credit bureau data and debt-to-income (DTI) calculations are computed 
  │       manually by credit analysts on spreadsheets rather than via an algorithmic decision engine.
  │
  └─► WHY 5? (ROOT CAUSE) Why are credit bureau data and DTI not automated?
      └── Because credit policy rules are not codified into an automated decision engine 
          connected via API to national credit rating bureaus.
```

- **Fundamental Root Cause:** Absence of an automated credit decisioning engine to segment risk and execute Straight-Through Processing (STP) for qualified low-risk applicants.
- **Traceable Solution:** Deploy **FR-11 (Credit Bureau API)**, **FR-12 (Automated DTI Calculation)**, and **FR-14 (Straight-Through Processing Engine)**.

---

### 5 Whys #3: Why do customers generate 3.2 inbound inquiry calls/emails per application?

```
  PROBLEM: NovaBank receives 32,000 inbound status inquiry contacts per month regarding loan applications.
  │
  ├─► WHY 1? Why are customers repeatedly contacting branches and call centers?
  │   └── Because customers do not know what stage their application is in or why it is delayed.
  │
  ├─► WHY 2? Why do customers lack visibility into their application progress?
  │   └── Because the bank does not send status updates between initial intake and final loan sanction.
  │
  ├─► WHY 3? Why are status updates not sent across intermediate stages?
  │   └── Because status transitions occur across disconnected internal systems with no customer-facing notification trigger.
  │
  ├─► WHY 4? Why cannot customers look up their own application progress online?
  │   └── Because the customer web portal has no self-service tracking interface or real-time milestone stepper.
  │
  └─► WHY 5? (ROOT CAUSE) Why is there no self-service tracking hub?
      └── Because application state transitions are siloed across 4 disparate internal legacy databases 
          without a centralized customer event orchestration layer.
```

- **Fundamental Root Cause:** Siloed departmental systems lacking an event-driven customer notification and real-time self-service milestone tracking hub.
- **Traceable Solution:** Deploy **FR-07 (Deficiency Alerts)** and **FR-20 (Omni-Channel Real-Time Visual Status Tracker)**.

---

### 5 Whys #4: Why do applications experience frequent cross-departmental handoff delays (22%)?

```
  PROBLEM: 2,200 loan files per month stall during transfer between Branch Ops, KYC, and Credit teams.
  │
  ├─► WHY 1? Why do files stall at departmental boundaries?
  │   └── Because handoffs rely on manual batch emails and un-notified task worklists.
  │
  ├─► WHY 2? Why are tasks not routed automatically when a prior stage finishes?
  │   └── Because there is no centralized Business Process Management (BPM) workflow engine routing files.
  │
  ├─► WHY 3? Why do team members manually re-key data at each handoff?
  │   └── Because Branch CRM, KYC Portal, and Credit Origination do not share a synchronized database.
  │
  ├─► WHY 4? Why do systems not communicate via APIs?
  │   └── Because legacy core systems were implemented as point solutions over different decades without an integration bus.
  │
  └─► WHY 5? (ROOT CAUSE) Why has an enterprise data sync not been established?
      └── Because enterprise architecture lacks a unified RESTful API orchestration layer 
          and event-driven workflow engine.
```

- **Fundamental Root Cause:** Absence of an automated enterprise workflow engine and synchronized API data layer connecting core banking systems.
- **Traceable Solution:** Deploy **FR-08 (Unified Record Sync)** and **FR-15 (Intelligent Workflow Routing)**.
