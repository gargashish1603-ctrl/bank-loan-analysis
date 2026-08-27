# Business Problem & Operational Context

> **Disclaimer:** *Illustrative assumptions for portfolio case study — not real bank data.*

---

## 1. Organizational Background: NovaBank

**NovaBank** is a fictional mid-sized retail commercial financial institution providing a full spectrum of consumer and commercial banking products, including:
- **Personal Loans** (Unsecured consumer credit ranging from $2,000 to $50,000)
- **Home Loans / Residential Mortgages**
- **Vehicle Financing**
- **Small & Medium Business (SME) Working Capital Loans**

Personal loans represent a key growth engine for NovaBank's retail division, generating healthy net interest margins and serving as a gateway product for acquiring new primary banking relationships.

---

## 2. The Business Problem

Despite strong consumer demand, NovaBank's Personal Loan Origination process is plagued by operational friction, extended cycle times, and customer dissatisfaction. 

Recent internal customer satisfaction (CSAT) surveys indicated:
- **Loan Origination CSAT dropped from 84% to 61%** over a 12-month period.
- **68% of negative feedback** cited extended processing delays and lack of visibility into application progress.
- **Competitor Benchmark Disadvantage:** FinTech lenders and digital-first neo-banks process comparable personal credit applications within 24 to 48 hours, whereas NovaBank averages **5 business days (120 elapsed hours)**.

### Core Management Inquiries:
Executive leadership commissioned this Business Analysis engagement to answer eight critical operational questions:
1. Where are the true operational bottlenecks causing application stagnation?
2. What root causes drive the high rate of missing documents and data errors?
3. Where does avoidable rework occur across departmental handoffs?
4. Which activities are unnecessarily manual and repetitive?
5. Where does duplicate data entry occur across internal IT systems?
6. How can workflow orchestration and decision automation be safely introduced without compromising regulatory compliance or credit risk standards?
7. What specific, traceable functional requirements are needed to solve these problems?
8. What does the optimized future-state (TO-BE) operating model look like?

---

## 3. Project Objectives

The project is governed by seven core business objectives:

```
+-----------------------------------------------------------------------------------------+
|                                    PROJECT OBJECTIVES                                   |
+-----------------------------------------------------------------------------------------+
|  OBJ-01: Reduce average end-to-end turnaround time from 5.0 days to < 2.0 business days |
|  OBJ-02: Decrease document rework rate from 35% to < 10% through pre-validation        |
|  OBJ-03: Elevate First-Time-Right (FTR) application submissions from 48% to > 80%       |
|  OBJ-04: Eliminate redundant manual data entry across disparate core banking platforms   |
|  OBJ-05: Provide 100% real-time status transparency to applicants and branch staff      |
|  OBJ-06: Reduce SLA breach rates from 14% to < 5% via proactive alert automation        |
|  OBJ-07: Preserve strict adherence to regulatory KYC/AML mandates and credit risk caps |
+-----------------------------------------------------------------------------------------+
```

---

## 4. Operational Scope Definition

To ensure a targeted and high-impact engagement, the boundary of this case study is strictly defined below:

### In-Scope (Origination Lifecycle)
- **Application Initiation:** Omni-channel application capture (Branch portal, Online banking web portal, Mobile app).
- **Customer Identity & Data Capture:** Demographic, employment, financial, and contact information collection.
- **Document Management:** Upload, dynamic checklist presentation, automated pre-validation, and indexing of identity, income, and bank statement proofs.
- **KYC & Compliance Verification:** Customer Due Diligence (CDD), watchlist screening, and fraud prevention checks.
- **Credit Assessment & Scoring:** Integration with Credit Bureaus, Debt-to-Income (DTI) computation, and internal credit policy scoring.
- **Underwriting & Decisioning:** Standardized rule evaluation, automated Straight-Through Processing (STP) for qualified low-risk tiers, and exception-based manual underwriting for complex/borderline applications.
- **Offer Generation & Acceptance:** Automated sanction letter generation, electronic document signing (e-Sign), and terms acceptance.
- **Disbursement Initiation:** Final disbursement checklist verification and automated funds transfer triggering into customer accounts.
- **Communication & SLA Monitoring:** Automated omni-channel notifications (SMS/Email/In-App) and real-time operational dashboarding.

### Out-of-Scope (Explicit Exclusions)
- **Post-Disbursement Servicing:** Monthly statement generation, payment scheduling, and interest calculation.
- **Collections & Delinquency Management:** Past-due tracking, early-stage collection notices, legal recovery, and debt write-offs.
- **Loan Restructuring & Refinancing:** Hardship concessions, loan tenor extensions, and debt consolidation programs.
- **Secured Lending Specifics:** Property valuation, collateral registration, title search, and mortgage underwriting.
- **Investment Banking & Corporate Syndication:** Large corporate debt facilities, treasury operations, and trade financing.

---

## 5. Illustrative Operational Baseline

The following baseline metrics reflect an annualized operational snapshot based on 120,000 annual applications (**10,000 applications per month**).

| Operational Metric | AS-IS Baseline Figure | Operational Meaning |
| :--- | :---: | :--- |
| **Monthly Applications** | 10,000 | Standard operational intake volume across 45 retail branches and digital web forms. |
| **Average End-to-End TAT** | 5.0 Business Days | Total elapsed working time from initial submission to loan fund disbursement. |
| **Document Rework Rate** | 35.0% | 3,500 applications per month are halted due to illegible, expired, or missing documents. |
| **Information Request Rate** | 18.0% | 1,800 applications per month require manual follow-up to resolve missing form data. |
| **Manual Handoff Delays** | 22.0% | 2,200 applications experience idle queue time exceeding 4 hours during cross-department transfer. |
| **SLA Breach Rate (>5 Days)**| 14.0% | 1,400 applications per month violate the bank's published 5-day SLA guarantee. |
| **First-Time-Right (FTR)** | 48.0% | Fewer than half of submissions proceed through to approval without at least one clarification cycle. |
| **Manual System Touchpoints** | 12 distinct steps | Operations staff manually enter data into 4 disconnected internal legacy applications. |
| **Application Drop-Off** | 22.0% | 2,200 applicants abandon their submission before final document completion. |
| **Status Inquiry Calls** | 3.2 calls / loan | 32,000 inbound customer inquiries per month burdening branch staff and customer service. |

> *Note: These figures serve as the analytical foundation for all root-cause analyses, gap assessments, and business requirements within this portfolio project.*
