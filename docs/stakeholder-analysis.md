# Stakeholder Analysis & Power-Interest Matrix

> **Disclaimer:** *Illustrative assumptions for portfolio case study — not real bank data.*

---

## 1. Stakeholder Landscape Overview

A successful business analysis engagement in retail banking requires thorough identification and structured engagement with all primary and secondary stakeholders across business, operations, compliance, and technology divisions.

Eleven core stakeholder groups were analyzed across the Personal Loan Origination value stream:

```
                                  STAKEHOLDER MAP
  ┌─────────────────────────┐   ┌──────────────────────────┐   ┌──────────────────────────┐
  │        CUSTOMER         │   │   RELATIONSHIP MANAGER   │   │     BRANCH OPERATIONS    │
  │    (Retail Applicant)   │   │    (Sales & Sourcing)    │   │  (Intake & Verification) │
  └────────────┬────────────┘   └────────────┬─────────────┘   └────────────┬─────────────┘
               │                             │                              │
  ┌────────────┴────────────┐   ┌────────────┴─────────────┐   ┌────────────┴─────────────┐
  │     LOAN OPERATIONS     │   │      KYC/AML ANALYST     │   │       CREDIT ANALYST     │
  │    (Central Backoffice) │   │  (Compliance Screening)  │   │     (Risk Assessment)    │
  └────────────┬────────────┘   └────────────┬─────────────┘   └────────────┬─────────────┘
               │                             │                              │
  ┌────────────┴────────────┐   ┌────────────┴─────────────┐   ┌────────────┴─────────────┐
  │       UNDERWRITER       │   │    DISBURSEMENT TEAM     │   │      BRANCH MANAGER      │
  │    (Credit Authority)   │   │  (Funds Transfer Ops)    │   │   (Commercial Oversight) │
  └────────────┬────────────┘   └────────────┬─────────────┘   └────────────┬─────────────┘
               │                             │
  ┌────────────┴────────────┐   ┌────────────┴─────────────┐
  │     IT / SYS ADMIN      │   │     COMPLIANCE & RISK    │
  │  (Core Banking & Arch)  │   │    (Regulatory Lead)     │
  └─────────────────────────┘   └──────────────────────────┘
```

---

## 2. Detailed Stakeholder Profile Matrix

| Stakeholder ID | Stakeholder Role | Org Unit | Interest Level | Influence Level | Key Responsibilities | Primary Pain Points | Engagement Strategy |
| :--- | :--- | :--- | :---: | :---: | :--- | :--- | :--- |
| **STK-01** | **Retail Customer** | External | **High** | **Medium** | Submits application, provides KYC/income documents, accepts loan sanction terms. | Long 5-day wait times, opaque status tracking, redundant document requests via email. | Self-service digital portal, real-time SMS/Email status milestones, dynamic document checklist. |
| **STK-02** | **Relationship Manager** | Retail Sales | **High** | **Medium** | Sources loan leads, assists customers with initial forms, tracks conversion targets. | Spends 40% of time chasing missing customer paperwork rather than selling; lost commissions. | Provide mobile/tablet lead-intake tool with upfront instant eligibility estimator. |
| **STK-03** | **Branch Operations** | Retail Branch | **Medium** | **High** | Receives physical paperwork, scans documents, enters customer data into branch CRM. | Repetitive manual typing, scanning rejected due to low DPI, customer complaints at branch counters. | Barcode document upload scanner, standardized checklist, automated validation flags. |
| **STK-04** | **Loan Operations** | Central Ops | **High** | **High** | Central review of application files, document indexing, cross-verification with external records. | High rework volume (35%), manual coordination with branches via email, fragmented task queues. | Centralized workflow management dashboard with automated document OCR & pre-validation. |
| **STK-05** | **KYC/AML Analyst** | Compliance Ops | **High** | **High** | Validates identity proofs against government databases, conducts PEP/sanctions watchlist checks. | Manual copy-pasting of applicant IDs across external regulatory portals; duplicate check requests. | Direct API integrations with national ID registry and automated AML watchlist screening. |
| **STK-06** | **Credit Analyst** | Credit Risk | **High** | **High** | Pulls credit bureau reports, verifies Debt-to-Income (DTI), assesses repayment capacity. | Manually recalculating cash flows from paper bank statements; incomplete financial data. | Automated bureau data ingestion, algorithmic DTI computation engine, and scorecards. |
| **STK-07** | **Underwriter** | Credit Authority | **High** | **High** | Final risk approval/rejection based on credit policy, grants policy exceptions and pricing waivers. | Routine low-risk files clutter the queue, slowing down complex corporate or high-ticket reviews. | Automated Straight-Through Processing (STP) for Tier 1 low-risk cases; queue dedicated to exceptions. |
| **STK-08** | **Disbursement Team** | Operations | **Medium** | **High** | Verifies signed agreements, validates bank account details, executes funds release via Core Banking. | Chasing physical signed agreements, manual keying of account numbers into Core Banking payment rails. | Automated e-Sign execution verification and direct API payment trigger to Core Banking. |
| **STK-09** | **Branch Manager** | Retail Branch | **Medium** | **Medium** | Oversees branch operational performance, monitors customer satisfaction and sales SLA adherence. | High SLA breaches (14%) reflecting poorly on branch KPIs; constant escalation handling. | Real-time executive dashboard displaying live pipeline, bottleneck stages, and SLA alert countdowns. |
| **STK-10** | **IT / System Admin** | Enterprise IT | **Medium** | **Medium** | Maintains core banking platforms, manages access control, oversees interface APIs and uptime. | Maintenance burden of 4 disjointed legacy systems; lack of modern REST API orchestration layer. | Architectural engagement via microservices architecture, RESTful webhooks, and secure RBAC. |
| **STK-11** | **Compliance & Risk** | Risk Directorate | **High** | **High** | Ensures adherence to consumer lending regulations, Fair Lending, KYC/AML laws, and data privacy. | Risk of non-compliance if automated systems bypass mandatory risk checks or audit trails. | Include mandatory compliance checkpoints, immutable audit logging, and regular model risk reviews. |

---

## 3. Power-Interest Matrix (2x2)

The Power-Interest Matrix groups stakeholders into four distinct quadrants to establish governance and communication cadence:

```
  HIGH POWER
       ▲
       │ ┌───────────────────────────────────────┐ ┌───────────────────────────────────────┐
       │ │            KEEP SATISFIED             │ │             MANAGE CLOSELY            │
       │ │                                       │ │                                       │
       │ │ • Branch Operations (STK-03)          │ │ • Loan Operations Lead (STK-04)       │
       │ │ • Disbursement Team (STK-08)          │ │ • KYC/AML Compliance (STK-05)         │
       │ │ • IT / System Administrators (STK-10) │ │ • Credit Analysts & Risk (STK-06)     │
       │ │                                       │ │ • Underwriting Authority (STK-07)     │
       │ │                                       │ │ • Compliance & Risk Directorate (STK-11)
       │ └───────────────────────────────────────┘ └───────────────────────────────────────┘
       │ ┌───────────────────────────────────────┐ ┌───────────────────────────────────────┐
       │ │               MONITOR                 │ │             KEEP INFORMED             │
       │ │                                       │ │                                       │
       │ │ • General Branch Staff                │ │ • Retail Customer (STK-01)            │
       │ │ • External IT Vendors                 │ │ • Relationship Managers (STK-02)      │
       │ │                                       │ │ • Branch Managers (STK-09)            │
       │ └───────────────────────────────────────┘ └───────────────────────────────────────┘
       └───────────────────────────────────────────────────────────────────────────────────►
         LOW INTEREST                                                        HIGH INTEREST
```

### Strategic Engagement Rationale by Quadrant:

1. **Manage Closely (High Power / High Interest):**
   - *Stakeholders:* Loan Ops, KYC/AML, Credit Analysts, Underwriters, Compliance Directorate.
   - *Tactic:* Weekly working-group workshops, joint requirements JAD sessions, sign-off authority on Business Rules and TO-BE workflows.

2. **Keep Satisfied (High Power / Medium Interest):**
   - *Stakeholders:* Branch Ops, Disbursement Team, IT / Enterprise Architecture.
   - *Tactic:* Involve in technical architecture reviews, user interface acceptance testing, and operational readiness rehearsals.

3. **Keep Informed (Medium Power / High Interest):**
   - *Stakeholders:* Customers, Relationship Managers, Branch Managers.
   - *Tactic:* User journey feedback surveys, branch demonstration roadshows, multi-channel customer status notifications.

4. **Monitor (Low Power / Low Interest):**
   - *Stakeholders:* Peripheral branch support staff, external infrastructure vendors.
   - *Tactic:* Periodic bulletin updates, standard project newsletters.
