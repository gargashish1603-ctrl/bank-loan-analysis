# Project Risk Register

> **Disclaimer:** *Illustrative assumptions for portfolio case study — not real bank data.*

---

## 1. Risk Assessment Methodology

Project risks are evaluated across two dimensions: **Probability of Occurrence (1–5)** and **Operational / Financial Impact (1–5)**, resulting in an overall Risk Severity Score (1–25).

```
                              5x5 RISK SEVERITY MATRIX
  IMPACT
     5 │   Low (5)       Medium (10)     High (15)      Critical (20)    Critical (25)
     4 │   Low (4)       Medium (8)      High (12)      High (16)        Critical (20)
     3 │   Low (3)       Medium (6)      Medium (9)     High (12)        High (15)
     2 │   Low (2)       Low (4)         Medium (6)     Medium (8)       Medium (10)
     1 │   Low (1)       Low (2)         Low (3)        Low (4)          Low (5)
       └──────────────────────────────────────────────────────────────────────────────►
             1               2               3              4                5
                                                                        PROBABILITY
```

---

## 2. Risk Register & Mitigation Matrix

| Risk ID | Risk Title & Description | Category | Prob (1-5) | Imp (1-5) | Score (1-25) | Severity | Proactive Mitigation Strategy | Risk Owner |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: | :--- | :--- |
| **RSK-01** | **Legacy Core Banking Integration Delays**<br>Core Banking legacy system lacks modern RESTful APIs, risking delays in automating disbursement triggers. | Technology / Arch | 4 | 4 | **16** | **High** | Deploy a containerized API Gateway middleware / ESB wrapper; establish early interface mock testing during Phase 1. | Lead IT Enterprise Architect |
| **RSK-02** | **OCR Data Extraction Inaccuracy**<br>Poor scan quality or non-standard salary slip formats lead to incorrect income figures extracted by OCR engine. | Technology / Data | 3 | 4 | **12** | **High** | Implement strict client-side image DPI validation (≥300 DPI); enforce fuzzy-match confidence threshold (<85% routes to human review). | Lead Business Analyst / AI Vendor |
| **RSK-03** | **Employee Adoption & Workflow Resistance**<br>Branch and underwriting staff bypass automated queues and revert to manual email communication and spreadsheets. | People / Org | 4 | 3 | **12** | **High** | Appoint Branch Digital Champions; establish mandatory role-based simulation training; tie SLA adherence to branch performance KPIs. | Head of Change Management |
| **RSK-04** | **Credit Model Risk & Excessive STP Default**<br>Automated Straight-Through Processing rules inadvertently approve borderline risky loans during macroeconomic downturns. | Credit Risk | 2 | 5 | **10** | **High** | Establish conservative Tier 1 STP thresholds (Score ≥750, DTI ≤35%); conduct monthly Credit Committee back-testing; maintain underwriter veto power. | Head of Credit Risk |
| **RSK-05** | **External Regulatory API Outages (National ID/AML)**<br>National identity database or credit bureau API experiences downtime, causing application backlog stagnation. | Operational / Vendor| 3 | 3 | **9** | **Medium** | Build asynchronous queue retry mechanisms with automatic failover to secondary bureau providers and manual verification fallbacks. | IT Infrastructure Lead |
| **RSK-06** | **Customer Digital Onboarding Drop-Off**<br>Elderly or non-digital applicants experience friction navigating mobile document upload and e-Signature. | Customer / CX | 3 | 3 | **9** | **Medium** | Maintain assisted digital branch onboarding where branch officers scan and assist walk-in applicants using branch tablets. | Head of Retail Branches |
| **RSK-07** | **Data Privacy & PII Leakage Risk**<br>Sensitive customer financial records, tax IDs, and bank statements exposed during transmission or storage. | Information Security | 1 | 5 | **5** | **Medium** | Enforce end-to-end AES-256 encryption at rest, TLS 1.3 in transit, strict RBAC permissions, and automated PII masking on UI screens. | Chief Information Security Officer (CISO) |
| **RSK-08** | **Fair Lending & Regulatory Non-Compliance**<br>Automated rule logic unintentionally causes disparate impact across applicant demographics violating lending laws. | Regulatory / Compliance| 1 | 5 | **5** | **Medium** | Conduct quarterly independent algorithmic fairness audits; ensure all decision parameters strictly evaluate financial capacity only. | Chief Compliance Officer |
