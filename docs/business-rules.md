# Banking Business Rules (BR-Rule)

> **Disclaimer:** *Illustrative assumptions for portfolio case study — not real bank data.*

---

## 1. Distinction: Business Rules vs. Functional Requirements

In Business Analysis methodology:
- **Functional Requirements (FR):** Define *what the software system shall do* (e.g., "The system shall display a dynamic document checklist").
- **Business Rules (BR-Rule):** Define *the core operational, risk, and regulatory policies that govern banking operations*, regardless of whether the process is manual or automated.

The 12 business rules below dictate the decisioning logic, risk thresholds, and compliance boundaries of NovaBank's Personal Loan Origination process.

---

## 2. Business Rules Catalog

```
+-----------------------------------------------------------------------------------------------+
|                                    BUSINESS RULES HIERARCHY                                   |
+-----------------------------------------------------------------------------------------------+
|  RULE-01 to RULE-04: KYC, Regulatory Compliance & Applicant Eligibility                      |
|  RULE-05 to RULE-08: Credit Risk Thresholds, DTI Ratios & STP Decisioning Boundaries          |
|  RULE-09 to RULE-12: Delegated Underwriting Authority, Exceptions & Audit Compliance          |
+-----------------------------------------------------------------------------------------------+
```

| Rule ID | Rule Name | Category | Exact Business Rule Definition | Enforcement Mechanism |
| :--- | :--- | :--- | :--- | :--- |
| **BR-RULE-01** | **Mandatory KYC Completion Prior to Underwriting** | Regulatory / Compliance | No loan application shall be forwarded to credit evaluation, underwriter review, or automated decisioning until Customer Due Diligence (CDD) and AML/PEP screening have returned a verified, clear status. | **Hard System Block**: Application state is locked at `KYC_PENDING` until all mandatory ID checks pass. |
| **BR-RULE-02** | **Minimum Applicant Age & Residency Eligibility** | Policy / Eligibility | The applicant must be at least 21 years of age at the time of application and not older than 60 years at the scheduled loan maturity date. The applicant must be a citizen or permanent resident of the operating jurisdiction. | Automated pre-qualification logic rejecting out-of-bounds submissions during initial intake. |
| **BR-RULE-03** | **Minimum Net Income Threshold** | Risk Policy | The applicant must demonstrate a verified minimum monthly net take-home income of **$2,500** for salaried applicants, or a minimum verifiable annual net profit of **$40,000** for self-employed individuals. | Income data calculated from OCR-extracted salary slips and tax returns. |
| **BR-RULE-04** | **Employment Stability Mandate** | Risk Policy | Salaried applicants must possess at least 6 months of continuous employment with their current employer, or 12 months total employment history. Self-employed applicants must demonstrate at least 24 months of continuous business operation. | Verified against employer reference data and historical tax return filings. |
| **BR-RULE-05** | **Debt-to-Income (DTI) Hard Ceiling** | Credit Risk | The applicant's total monthly fixed debt repayment obligations (including the proposed NovaBank personal loan installment) must not exceed **50.0%** of verified net monthly income. | System calculates DTI = `(Existing Debt + Proposed EMI) / Net Monthly Income`. DTI > 50% triggers automatic decline. |
| **BR-RULE-06** | **Automated Straight-Through-Processing (STP) Eligibility** | Decisioning Policy | An application is eligible for automated straight-through approval without human review **IF AND ONLY IF**: (a) Credit Score ≥ 750, (b) DTI ≤ 35.0%, (c) Requested Loan Amount ≤ $25,000, (d) Minimum Employment ≥ 12 months, and (e) Zero adverse AML/fraud flags. | Automated Credit Decision Engine executes sanction and issues approval token. |
| **BR-RULE-07** | **Mandatory Human Underwriter Review Thresholds** | Risk Governance | Applications with a Credit Score between 650 and 749, OR a DTI between 35.1% and 50.0%, OR requested loan amounts exceeding $25,000, OR self-employed business profiles MUST be routed to a licensed Underwriter for manual risk assessment. | Workflow engine auto-routes file to Underwriting Worklist with highlighted risk factors. |
| **BR-RULE-08** | **Automatic Hard Decline Criteria** | Credit Risk | An application shall be immediately declined with formal adverse action notice if: (a) Credit Score < 600, (b) Active bankruptcy or severe delinquency (>90 DPD) in the preceding 24 months, (c) DTI > 50.0%, or (d) Unverified/fraudulent documentation. | System transitions state to `DECLINED` and logs specific adverse action codes. |
| **BR-RULE-09** | **Delegated Lending Authority (DLA) Tiers** | Governance & Controls | Loan approval authority is strictly segregated by underwriter seniority level: <br>• **Junior Underwriter:** Loans up to $15,000<br>• **Senior Underwriter:** Loans up to $35,000<br>• **Credit Committee / Head of Credit:** Loans > $35,000 or policy exception overrides. | Role-Based Access Control limits approval action buttons based on user security profile and loan amount. |
| **BR-RULE-10** | **Mandatory Rejection & Exception Rationale** | Regulatory / Compliance | Any manual credit decline or policy exception approval must be accompanied by at least one standardized rejection/exception reason code and documented underwriter commentary in the audit log. | UI form validation requires selection of reason codes and minimum 25-character rationale before submitting decision. |
| **BR-RULE-11** | **Operational SLA Timeframes & Escalation** | Operations Policy | Processing stage service level agreements (SLAs) are strictly defined: <br>• Document Intake Review: 4 Business Hours<br>• KYC/AML Verification: 4 Business Hours<br>• Underwriter Decision: 8 Business Hours<br>• Disbursement Execution: 2 Business Hours.<br>Exceeding 75% of stage SLA triggers automated notification to the Department Team Lead. | Real-time scheduler monitors queue timestamps and issues alerts when timer thresholds breach. |
| **BR-RULE-12** | **Disbursement Lock & Pre-Disbursement Verification** | Financial Controls | Loan funds release is locked until: (a) All parties have executed the electronic loan agreement via verified e-Signature, (b) Direct debit repayment mandate is confirmed active, and (c) Disbursement destination account is verified in the applicant's legal name. | Core Banking API payment release instruction is gated behind all 3 completion flags. |
