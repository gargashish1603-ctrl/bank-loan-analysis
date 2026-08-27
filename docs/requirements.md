# Business, Functional & Non-Functional Requirements

> **Disclaimer:** *Illustrative assumptions for portfolio case study — not real bank data.*

---

## 1. Business Requirements (BR)

Business Requirements define the high-level business objectives, operational goals, and strategic rationale for optimizing the Personal Loan Origination process at NovaBank.

| Requirement ID | Business Requirement Statement | Strategic Business Rationale | Success Measure |
| :--- | :--- | :--- | :--- |
| **BR-01** | **Reduce Loan Cycle Time**<br>The system and revised operational process shall reduce the average end-to-end loan origination turnaround time from 5.0 business days to under 2.0 business days. | Accelerate customer time-to-cash, improve conversion rates against neo-bank competitors, and lower operational cost per funded loan. | End-to-end processing TAT < 48 hours |
| **BR-02** | **Improve First-Time-Right (FTR) Application Rate**<br>The system shall ensure that applicant data and submitted documents are verified for completeness and validity prior to submission. | Drastically reduce downstream rework loops, eliminate redundant operational touchpoints, and relieve backoffice processing congestion. | FTR Rate increases from 48% to ≥ 80% |
| **BR-03** | **Automate Document Verification & Pre-Validation**<br>The system shall automate the upfront validation of mandatory documentation (identity, income, bank statements) at the point of ingestion. | Eliminate the 35% manual rework bottleneck caused by illegible, expired, or missing files. | Document rework rate drops from 35% to ≤ 8% |
| **BR-04** | **Provide Omni-Channel Status Transparency**<br>The system shall provide real-time, self-service tracking of application milestones to applicants and authorized bank personnel. | Reduce high inbound call volumes (3.2 calls/loan) to branches and call centers while increasing customer peace-of-mind. | Status inquiries decrease by ≥ 75% |
| **BR-05** | **Enable Segmented Decisioning & Straight-Through Processing (STP)**<br>The system shall execute automated credit decisioning for qualified low-risk applicants while routing complex/high-risk files to underwriting queues. | Free up credit analysts and licensed underwriters to focus on complex underwriting exceptions and policy overrides. | STP rate achieves 35–45% for eligible low-risk tiers |
| **BR-06** | **Eliminate Redundant Cross-System Data Entry**<br>The system shall maintain a unified data layer that seamlessly synchronizes customer profile, loan, and KYC data across all core banking platforms. | Reduce transcription errors, eliminate manual handoff delays (22% baseline), and improve data integrity. | Zero manual copy-pasting across systems |
| **BR-07** | **Proactive SLA Monitoring & Automated Escalation**<br>The system shall continuously track task processing times against departmental SLAs and automatically escalate stagnating files before breaches occur. | Prevent applications from sitting unnoticed in employee inboxes and reduce customer SLA violations. | SLA breach rate decreases from 14% to ≤ 4% |
| **BR-08** | **Preserve Regulatory Compliance & Auditability**<br>The system shall enforce strict KYC/AML verification, credit risk limits, Fair Lending guidelines, and immutable audit logging for every decision. | Ensure 100% adherence to national banking regulations and prevent financial/reputational compliance penalties. | 100% compliance audit pass rate |
| **BR-09** | **Automate Customer Communications**<br>The system shall automatically trigger clear, contextual notifications (SMS/Email/Push) whenever an application changes status or requires action. | Eliminate opaque waiting periods and ensure applicants rectify document deficiencies immediately. | Average customer document response time < 6 hours |
| **BR-10** | **Streamline Electronic Agreement & Instant Disbursement**<br>The system shall support digital sanction letter issuance, secure e-Signatures, and automated core banking disbursement triggers. | Eliminate physical paperwork courier delays and shorten final funds release from 24 hours to < 15 minutes post-approval. | Post-approval disbursement time < 15 min |

---

## 2. Functional Requirements (FR)

Functional Requirements detail the precise capabilities, behaviors, inputs, workflows, and system interactions required to fulfill the business objectives.

```
+---------------------------------------------------------------------------------------------+
|                               FUNCTIONAL REQUIREMENTS TAXONOMY                              |
+---------------------------------------------------------------------------------------------+
|  FR-01 to FR-04: Digital Intake & Dynamic Checklists                                        |
|  FR-05 to FR-08: Document Pre-Validation & Automated Ingestion                              |
|  FR-09 to FR-12: Automated KYC, AML & Credit Bureau Orchestration                           |
|  FR-13 to FR-16: Decision Engine, STP & Exception Queue Routing                            |
|  FR-17 to FR-20: e-Sign Agreement, Automated Disbursement & Real-Time Tracking             |
+---------------------------------------------------------------------------------------------+
```

| FR ID | Feature Area | Functional Requirement Description | Priority (MoSCoW) | Related BR |
| :--- | :--- | :--- | :---: | :---: |
| **FR-01** | **Digital Application Capture** | The system shall provide an intuitive, responsive web and mobile digital application form that captures applicant demographics, employment, income, and requested loan parameters with real-time field validation. | **Must Have** | BR-01, BR-02 |
| **FR-02** | **Dynamic Document Checklist** | The system shall dynamically generate a tailored checklist of required supporting documents based on the applicant's employment type (Salaried, Self-Employed, Professional), residency status, and loan ticket size. | **Must Have** | BR-02, BR-03 |
| **FR-03** | **Secure Document Upload** | The system shall permit applicants and branch staff to upload documents in PDF, JPEG, and PNG formats (up to 15MB per file) with multi-page batch upload support. | **Must Have** | BR-03 |
| **FR-04** | **Automated Pre-Validation (Quality/Format)** | The system shall inspect uploaded documents in real time for minimum image resolution (≥ 300 DPI), file integrity, page orientation, and document type classification before allowing submission. | **Must Have** | BR-02, BR-03 |
| **FR-05** | **OCR & Data Extraction Engine** | The system shall utilize Optical Character Recognition (OCR) to extract key data fields (National ID number, applicant full name, date of birth, employer name, gross/net salary) from uploaded documents. | **Should Have** | BR-03, BR-06 |
| **FR-06** | **Automated Name & DOB Cross-Match** | The system shall cross-reference extracted OCR data against application form inputs and flag discrepancies exceeding a fuzzy-match tolerance threshold of 90%. | **Must Have** | BR-02, BR-08 |
| **FR-07** | **Document Deficiency Notification** | The system shall automatically send an instant SMS/Email notification containing a secure direct-upload link if an uploaded document is rejected during pre-validation or review. | **Must Have** | BR-03, BR-09 |
| **FR-08** | **Unified Customer Record Synchronization** | The system shall automatically synchronize applicant data with NovaBank's Core Banking and CRM systems without requiring manual re-keying by operations staff. | **Must Have** | BR-06 |
| **FR-09** | **Automated National ID & KYC Verification** | The system shall trigger an automated real-time API call to the National Identity Registry to verify applicant legal identity and biometric/address records. | **Must Have** | BR-08 |
| **FR-10** | **Automated AML & Sanctions Watchlist Screening** | The system shall screen the applicant against global Politically Exposed Persons (PEP), OFAC, and domestic AML sanctions databases in real time. | **Must Have** | BR-08 |
| **FR-11** | **Direct Credit Bureau Ingestion** | The system shall automatically pull the applicant's full credit file and credit score from authorized credit rating bureaus via secure API. | **Must Have** | BR-05, BR-06 |
| **FR-12** | **Automated Debt-to-Income (DTI) Calculation** | The system shall automatically aggregate all existing monthly debt obligations from the credit report and compute the Debt-to-Income (DTI) and Fixed Obligation to Income Ratio (FOIR). | **Must Have** | BR-05 |
| **FR-13** | **Rule-Based Credit Decisioning Engine** | The system shall evaluate the application against NovaBank's automated credit risk policy rules (minimum credit score, maximum DTI cap, minimum employment tenure). | **Must Have** | BR-05, BR-08 |
| **FR-14** | **Straight-Through-Processing (STP) Execution** | For applicants meeting Tier 1 low-risk criteria (Score ≥ 750, DTI ≤ 35%, Loan ≤ $25,000, Clean KYC), the system shall automatically generate a system-approved loan sanction without human intervention. | **Must Have** | BR-01, BR-05 |
| **FR-15** | **Intelligent Exception Queue Routing** | Applications failing automated STP criteria or triggering risk flags (Score 650–749, DTI 36–50%, Self-Employed) shall be automatically routed to a tiered Underwriter queue based on delegated approval authority. | **Must Have** | BR-05, BR-07 |
| **FR-16** | **Underwriter Decisioning Workbench** | The system shall provide underwriters with a unified workbench displaying pre-calculated ratios, OCR extractions, credit bureau highlights, and policy deviation reasons for manual decisioning. | **Must Have** | BR-01, BR-05 |
| **FR-17** | **Automated Sanction Letter & e-Sign Issuance** | Upon approval (STP or manual), the system shall automatically generate a personalized loan sanction letter and loan agreement with digital e-Signature placeholders. | **Must Have** | BR-01, BR-10 |
| **FR-18** | **Disbursement Pre-Condition Checklist** | The system shall verify all pre-disbursement conditions (e-Sign completed, direct debit mandate registered, identity confirmed) before unlocking payment release. | **Must Have** | BR-08, BR-10 |
| **FR-19** | **Automated Payment Rail Trigger to Core Banking** | The system shall trigger an automated funds transfer instruction to the Core Banking platform to credit the loan principal into the applicant's verified bank account. | **Must Have** | BR-01, BR-10 |
| **FR-20** | **Proactive SLA Monitor & Visual Status Tracker** | The system shall provide an applicant-facing real-time visual milestone tracker (5 stages) and an internal operations dashboard with color-coded SLA countdown timers (Amber at 50%, Red at 75%). | **Must Have** | BR-04, BR-07 |

---

## 3. Non-Functional Requirements (NFR)

Non-Functional Requirements establish system quality attributes, security boundaries, performance constraints, and regulatory standards.

| NFR ID | Category | Requirement Statement | Target Metric / Standard |
| :--- | :--- | :--- | :--- |
| **NFR-01** | **Security & Access Control** | The system shall enforce Role-Based Access Control (RBAC) and Multi-Factor Authentication (MFA) for all internal banking staff. Sensitive applicant PII and financial records shall be encrypted using AES-256 at rest and TLS 1.3 in transit. | Zero unauthorized data access; 100% encrypted PII |
| **NFR-02** | **System Performance & Latency** | The system shall process automated API calls (Credit Bureau, National ID Registry, AML Screening) within 3.0 seconds under peak load, and digital application UI page response times shall not exceed 1.5 seconds. | API response ≤ 3.0s (95th percentile); UI load ≤ 1.5s |
| **NFR-03** | **Availability & High Availability** | The customer portal and workflow engine shall maintain an operational availability of 99.9% uptime during standard retail banking service windows (24/7/365 for digital submission). | Maximum unscheduled downtime < 8.76 hours/year |
| **NFR-04** | **Scalability** | The system architecture shall support horizontal scaling capable of handling a 300% surge in concurrent applicant submissions (up to 3,000 concurrent sessions) during marketing campaigns without degradation. | Concurrent sessions: 3,000+ without latency increase |
| **NFR-05** | **Auditability & Traceability** | The system shall maintain an immutable, tamper-evident audit log recording every system action, user login, document view, credit score pull, underwriter comment, approval override, and status transition. | 100% audit coverage with 7-year regulatory retention |
| **NFR-06** | **Data Privacy & Compliance** | The system shall comply with national banking privacy laws, GDPR/CCPA consumer data protection principles, and Fair Lending regulations ensuring zero discriminatory bias in automated decision rules. | Full regulatory compliance; zero non-conformances |
| **NFR-07** | **Data Integrity & Consistency** | The system shall utilize ACID-compliant transactional state management to prevent orphaned records or duplicate disbursements across distributed services. | 100% transactional consistency across Core Banking |
| **NFR-08** | **Usability & Accessibility** | The digital customer application interface shall conform to WCAG 2.1 Level AA accessibility guidelines and achieve a System Usability Scale (SUS) score of at least 80. | WCAG 2.1 AA compliant; SUS Score ≥ 80 |
