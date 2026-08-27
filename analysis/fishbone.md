# Ishikawa (Fishbone) Diagram Analysis

> **Disclaimer:** *Illustrative assumptions for portfolio case study — not real bank data.*

---

## 1. Fishbone Framework (6M Banking Adaptation)

The **Ishikawa (Fishbone / Cause-and-Effect) Diagram** provides a structured, multi-dimensional taxonomy to categorize all systemic contributors to the central business problem: **Excessive Personal Loan Turnaround Time (5.0 Days) and Operational Inefficiency**.

The analysis evaluates six core dimensions: **People, Process, Technology, Data, Policy, and Customer**.

```
                           ISHIKAWA (FISHBONE) CAUSE-AND-EFFECT DIAGRAM
  PEOPLE                           PROCESS                          TECHNOLOGY
    │                                 │                                  │
    ├─ Multi-team email handoffs      ├─ Decoupled doc verification     ├─ 4 disconnected legacy systems
    ├─ High branch clerical burden    ├─ Undifferentiated FIFO queues   ├─ Absence of RESTful API layer
    ├─ Lack of digital training       ├─ Sequential processing paths    ├─ No automated pre-validation
    │                                 │                                  │
    └─────────────────────────────────┴──────────────────────────────────┴─────────────┐
                                                                                       │► PROBLEM:
                                                                                       │  Extended 5-Day TAT &
    ┌─────────────────────────────────┬──────────────────────────────────┬─────────────┘  35% Document Rework
    │                                 │                                  │
    ├─ Manual re-keying & typos       ├─ 100% manual underwriting cap    ├─ Unclear document checklists
    ├─ Unstructured PDF payslips      ├─ Lack of STP decision limits    ├─ Unreadable image uploads
    ├─ Fragmented customer records    ├─ Rigid paper signing mandates   ├─ Repeated inbound status calls
    │                                 │                                  │
  DATA                             POLICY                           CUSTOMER
```

---

## 2. Detailed Root Causes by Dimension

### 1. People (Workforce & Roles)
- **Email-Driven Coordination:** Branch officers, KYC analysts, and underwriters communicate document deficiencies via manual, un-tracked email threads.
- **Clerical Burden on Sales RMs:** Relationship managers spend up to 40% of their time chasing missing documents and answering status inquiries rather than sourcing profitable loans.
- **Uneven Workload Distribution:** Underwriter queues experience severe peaks during end-of-month surges with no automated workload rebalancing across teams.

### 2. Process (Workflow & Operations)
- **Decoupled Document Verification:** Document quality checks occur 24–48 hours after customer submission rather than upfront at intake.
- **Strictly Sequential Lifecycle:** KYC verification, credit assessment, and document indexing occur in a rigid serial sequence rather than executing parallel checks.
- **Rework Feedback Loops:** An application returned for a missing document is placed back at the end of the operations queue upon re-submission, restarting idle wait times.

### 3. Technology (Systems & Architecture)
- **Fragmented Legacy Silos:** Core Banking (Finacle), Branch CRM, KYC Portal, and Credit Origination operate as isolated databases without real-time data sync.
- **Absence of Straight-Through Processing (STP):** The Loan Origination System lacks a programmable rule-based credit decision engine.
- **Lack of Real-Time Event Monitors:** Timers do not track individual task duration; systems cannot trigger automated alerts at 50% or 75% SLA thresholds.

### 4. Data (Integrity & Ingestion)
- **Manual Transcription Errors:** Operations staff manually type applicant details across multiple screens, causing an 11.5% transcription error rate.
- **Unstructured Financial Documents:** Salary slips and bank statements arrive as raw, non-OCR searchable PDFs requiring manual spreadsheet calculation.
- **Incomplete Form Submissions:** Intake forms permit users to submit applications with missing employer contacts or ambiguous expense declarations.

### 5. Policy (Governance & Credit Risk)
- **All-or-Nothing Underwriting Policy:** Historical credit risk policy mandated manual licensed underwriter sign-off on 100% of consumer loans regardless of ticket size or credit score.
- **Physical Agreement Requirements:** Mandate requiring wet-ink physical signatures on loan agreements stalled post-approval disbursements by 24–48 hours.
- **Rigid Delegated Authority Limits:** Delegated approval caps were not dynamically adjusted for low-risk salaried applicants.

### 6. Customer (Applicant Behavior & Experience)
- **Ambiguous Document Expectations:** Applicants frequently upload incorrect documents (e.g., tax returns from 3 years prior or incomplete 1-page payslips) due to vague instructions.
- **Low-Quality Scans / Photos:** Applicants upload blurry smartphone photos (<150 DPI) taken under poor lighting, which cannot be verified by operations.
- **Anxiety-Driven Inquiries:** Total lack of progress visibility compels applicants to make 3.2 phone calls per loan to branch staff.
