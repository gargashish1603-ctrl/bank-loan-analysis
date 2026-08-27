# User Stories Catalog

> **Disclaimer:** *Illustrative assumptions for portfolio case study — not real bank data.*

---

## 1. User Story Framework & Personas

User stories are structured to reflect agile delivery best practices:
> **As a** `[Persona / Role]`,  
> **I want** `[Specific Capability / Feature]`,  
> **So that** `[Clear Business Benefit / Value]`.

### Persona Directory:
- 👤 **Sarah (Retail Loan Customer):** Tech-savvy applicant seeking quick, transparent, low-hassle personal financing.
- 👔 **David (Relationship Manager):** Field sales representative focused on rapid customer onboarding and meeting monthly origination targets.
- 📋 **Priya (Branch Operations Officer):** Front-counter banking officer responsible for document intake and customer assistance.
- 🔍 **Marcus (Loan Operations Specialist):** Backoffice operations analyst managing document verification and exception queues.
- 🛡️ **Elena (KYC / Compliance Officer):** Risk analyst responsible for regulatory compliance, AML checks, and identity assurance.
- 📊 **Rajesh (Credit Analyst):** Risk analyst responsible for credit bureau evaluation and repayment capacity calculations.
- ⚖️ **Victor (Senior Underwriter):** Licensed credit officer with high delegated lending authority for complex applications and policy overrides.
- 📈 **Karen (Operations Manager):** Operational leader tracking department throughput, SLA adherence, and team productivity.

---

## 2. User Stories Catalog (US-01 to US-15)

```
+-----------------------------------------------------------------------------------------------+
|                                    USER STORIES TAXONOMY                                      |
+-----------------------------------------------------------------------------------------------+
|  US-01 to US-04: Customer Digital Intake, Dynamic Checklists & Status Transparency           |
|  US-05 to US-07: Front-Line Operations, Lead Sourcing & Assisted Branch Ingestion             |
|  US-08 to US-10: Automated Compliance, Bureau Ingestion & Underwriting Workbench              |
|  US-11 to US-13: Exception Routing, Policy Waivers & Instant Digital Disbursement            |
|  US-14 to US-15: Operational SLA Governance, Dashboarding & Audit Logging                    |
+-----------------------------------------------------------------------------------------------+
```

| Story ID | Persona / Role | User Story Statement | Priority (MoSCoW) | Related FR / BR |
| :--- | :--- | :--- | :---: | :--- |
| **US-01** | **Customer (Sarah)** | **As a** loan applicant,<br>**I want** to see a clear, dynamic checklist of required documents tailored to my employment profile,<br>**so that** I can upload the exact right files the first time and avoid delays. | **Must Have** | FR-02<br>BR-02 |
| **US-02** | **Customer (Sarah)** | **As a** loan applicant,<br>**I want** immediate feedback if my uploaded document is blurry, corrupt, or missing pages,<br>**so that** I can rectify the issue instantly before final submission. | **Must Have** | FR-04<br>BR-03 |
| **US-03** | **Customer (Sarah)** | **As a** loan applicant,<br>**I want** to track the real-time milestone status of my loan application online or via mobile,<br>**so that** I know exactly which stage it is in without needing to call the branch. | **Must Have** | FR-20<br>BR-04 |
| **US-04** | **Customer (Sarah)** | **As a** loan applicant,<br>**I want** to review my sanction letter and digitally sign my loan agreement using a mobile e-Signature,<br>**so that** I can finalize my loan without printing or visiting a branch. | **Must Have** | FR-17<br>BR-10 |
| **US-05** | **Relationship Manager (David)** | **As a** Relationship Manager,<br>**I want** an instant pre-eligibility estimator on my tablet when meeting prospects,<br>**so that** I can quote realistic loan amounts and interest rates upfront. | **Should Have** | FR-01<br>BR-01 |
| **US-06** | **Branch Operations (Priya)** | **As a** Branch Operations Officer,<br>**I want** document barcode/batch scanning that auto-indexes customer paperwork into the application record,<br>**so that** I do not have to manually re-type customer details into multiple legacy systems. | **Must Have** | FR-05, FR-08<br>BR-06 |
| **US-07** | **Loan Operations (Marcus)** | **As a** Loan Operations Specialist,<br>**I want** an automated OCR data extraction engine to extract salary and employer data from payslips,<br>**so that** I don't have to manually transcribe income figures into credit spreadsheets. | **Should Have** | FR-05<br>BR-03 |
| **US-08** | **KYC / Compliance (Elena)** | **As a** Compliance Officer,<br>**I want** automated real-time verification against national ID registries and AML/PEP watchlists,<br>**so that** standard clean profiles are verified instantly and I only review true compliance flags. | **Must Have** | FR-09, FR-10<br>BR-08 |
| **US-09** | **Credit Analyst (Rajesh)** | **As a** Credit Analyst,<br>**I want** automated credit bureau data ingestion and pre-calculated DTI/FOIR ratios,<br>**so that** I can assess applicant repayment capacity in under 5 minutes. | **Must Have** | FR-11, FR-12<br>BR-01 |
| **US-10** | **Underwriter (Victor)** | **As an** Underwriter,<br>**I want** qualified low-risk Tier 1 applications to be auto-approved via Straight-Through Processing (STP),<br>**so that** my work queue is reserved for complex files and policy exception reviews. | **Must Have** | FR-14<br>BR-05 |
| **US-11** | **Underwriter (Victor)** | **As an** Underwriter,<br>**I want** a unified underwriting decision workbench displaying risk scores, income extractions, and policy flags on one screen,<br>**so that** I can make informed approval/counter-offer decisions rapidly. | **Must Have** | FR-16<br>BR-01 |
| **US-12** | **Underwriter (Victor)** | **As an** Underwriter,<br>**I want** to record mandatory standardized reason codes when declining or modifying a loan request,<br>**so that** adverse action notices comply with Fair Lending regulatory mandates. | **Must Have** | FR-16<br>BR-08 |
| **US-13** | **Disbursement Officer (Marcus)** | **As a** Disbursement Officer,<br>**I want** an automated API payment release to Core Banking once e-Sign and bank account verification conditions are met,<br>**so that** approved loan funds disburse to the customer within 15 minutes. | **Must Have** | FR-18, FR-19<br>BR-10 |
| **US-14** | **Operations Manager (Karen)** | **As an** Operations Manager,<br>**I want** visual SLA countdown timers and automated alerts when applications reach 75% of processing time limits,<br>**so that** our team can intervene proactively before SLA breaches occur. | **Must Have** | FR-20<br>BR-07 |
| **US-15** | **Operations Manager (Karen)** | **As an** Operations Manager,<br>**I want** complete, immutable audit logging of every user action, approval override, and system event,<br>**so that** NovaBank maintains 100% audit readiness for internal and external regulatory examinations. | **Must Have** | FR-16<br>BR-08 |
