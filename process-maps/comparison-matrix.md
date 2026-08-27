# AS-IS vs. TO-BE Operational Comparison Matrix

> **Disclaimer:** *Illustrative assumptions for portfolio case study — not real bank data.*

---

## 1. Architectural & Operational Comparison

This matrix presents a dimension-by-dimension comparative evaluation between NovaBank's current AS-IS operating baseline and the future-state TO-BE redesigned process.

```
+---------------------------------------------------------------------------------------------------+
|                         TRANSFORMATION DIMENSIONS AT A GLANCE                                     |
+------------------------------------+----------------------------+---------------------------------+
| DIMENSION                          | AS-IS BASELINE STATE       | TO-BE OPTIMIZED STATE           |
+------------------------------------+----------------------------+---------------------------------+
| 1. Customer Intake                 | Static form / Paper        | Dynamic responsive digital form |
| 2. Document Checklist              | Static generic list        | Dynamic profile-driven matrix   |
| 3. Document Pre-Validation         | Manual backoffice review   | Real-time client-side DPI check |
| 4. KYC & AML Screening             | Manual portal copy-pasting | Real-time automated REST APIs   |
| 5. Credit Assessment               | Manual Excel spreadsheets  | Automated bureau DTI engine     |
| 6. Underwriting Model              | 100% manual FIFO queue     | Dual-track STP + Exception Desk |
| 7. Agreement Execution             | Branch visit & wet ink     | Mobile OTP cryptographic e-Sign |
| 8. Disbursement Trigger            | Manual end-of-day batch    | Automated Core Banking API call |
| 9. Status Visibility               | Opaque; 3.2 calls / loan   | 24/7 5-stage self-service hub   |
| 10. SLA Governance                 | Reactive complaint-driven  | Automated 50% & 75% alerts      |
+------------------------------------+----------------------------+---------------------------------+
```

---

## 2. Granular Dimension-by-Dimension Comparison Table

| Operational Dimension | AS-IS Baseline Process | TO-BE Optimized Process | Root Cause Addressed | Expected Business Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Application Intake & Form Entry** | Static online form or physical branch paper; minimal field validation; 18% incomplete forms. | Intelligent digital form with real-time field validation, address lookup, and mandatory dependency rules. | Incomplete application data causing downstream holds. | **First-Time-Right (FTR) rate increases from 48% to 82%**; incomplete forms drop to <3%. |
| **Document Ingestion & Validation** | Documents uploaded without checks; manual inspection by backoffice staff 24–48h later; 35% rework. | Automated client-side pre-validation (format, size, ≥300 DPI resolution) with instant upload feedback. | Decoupled verification causing multi-day email rework loops. | **Document rework rate plummets from 35.0% to 8.0%**; 7.3h idle wait eliminated. |
| **KYC & Watchlist Compliance** | Operations staff manually type applicant details into external government portals and screening tabs. | Automated background API calls to National ID Registry and global AML/PEP watchlist databases. | Manual transcription bottleneck and compliance queue backlogs. | **KYC processing time drops from 4.0 hours to < 5 minutes** for clean profiles. |
| **Credit Assessment & DTI** | Credit analysts manually pull bureau reports and build custom Excel spreadsheets to compute debt ratios. | Direct API ingestion of credit bureau file; automated algorithmic DTI and FOIR calculation engine. | Manual spreadsheet calculation slowing risk analysis. | **Credit scoring latency reduced from 4.5 hours to < 10 seconds**. |
| **Underwriting Decisioning** | 100% of loans sit in a single undifferentiated FIFO queue awaiting licensed underwriter review (9.5h wait). | **Automation-first**: 38% low-risk Tier 1 loans auto-approved via STP; complex files route to Underwriter Workbench. | All-or-nothing manual underwriting policy causing queue congestion. | **Underwriting queue dwell time reduced from 11.0h to 2.5h** for complex files; STP instant. |
| **Contract Execution & Signing** | Branch prints physical sanction letter; customer travels to branch for wet-ink contract signing (24h lag). | Automated sanction letter generation with embedded cryptographic mobile OTP digital e-Signature. | Reliance on physical paper documents and manual branch visits. | **Agreement execution time drops from 24.0 hours to < 10 minutes**. |
| **Loan Disbursement Execution** | Disbursement officer manually verifies signed paper contract and enters batch payment into Core Banking. | Automated payment release instruction triggered to Core Banking payment rails upon e-Sign verification. | Disconnected payment gates requiring end-of-day batch processing. | **Post-approval funds release accelerates from 24 hours to < 15 minutes**. |
| **Customer Progress Transparency** | Customers receive no intermediate updates; generate 3.2 inbound inquiry calls/emails per application. | Omni-channel visual milestone tracker (5 stages) with automated event-triggered SMS/Email alerts. | Siloed internal databases lacking customer notification layer. | **Customer status calls decline by 81%** (3.2 calls → 0.6 calls/loan). |
| **Operational SLA Monitoring** | Supervisors discover stalled files only after customer complaints or SLA breaches occur (14% breach rate). | Real-time Operations Dashboard with automated amber (50%) and red (75%) pre-breach alerts. | Absence of real-time task timer monitors and auto-escalation. | **SLA breach rate drops from 14.0% to 4.0%**; predictable operational throughput. |
| **Enterprise Data Synchronization** | Operations staff manually re-key identical customer data across 4 disparate internal software platforms. | Centralized API microservices orchestration bus keeping CRM, LOS, and Core Banking synchronized. | Disjointed legacy architecture lacking an integration middleware. | **Manual touchpoints per loan drop from 12 to 4**; transcription errors drop from 11.5% to 1.2%. |
