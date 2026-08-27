# Key Performance Indicator (KPI) Framework

> **Disclaimer:** *Illustrative assumptions for portfolio case study — not real bank data.*

---

## 1. Measurement Architecture & Governance

The KPI Framework establishes a balanced, multi-dimensional scorecard to evaluate the operational performance, quality standards, and customer satisfaction of NovaBank's Personal Loan Origination process before and after optimization.

```
                                BALANCED LENDING SCORECARD
  ┌─────────────────────────────────┐   ┌─────────────────────────────────┐   ┌─────────────────────────────────┐
  │         OPERATIONAL KPIS        │   │           QUALITY KPIS          │   │          CUSTOMER KPIS          │
  │ • Average Turnaround Time (TAT) │   │ • First-Time-Right (FTR) Rate   │   │ • Customer Satisfaction (CSAT)  │
  │ • Touch Time vs Wait Time       │   │ • Document Rework Rate          │   │ • Application Abandonment Rate  │
  │ • SLA Compliance Rate           │   │ • Data Transcription Error Rate │   │ • Status Inquiries per Loan     │
  │ • Straight-Through Rate (STP)   │   │ • Underwriter Policy Override % │   │ • Net Promoter Score (NPS)      │
  └─────────────────────────────────┘   └─────────────────────────────────┘   └─────────────────────────────────┘
```

---

## 2. Operational Efficiency KPIs

| KPI ID | KPI Name | Mathematical Formula / Calculation | AS-IS Baseline | TO-BE Target | Business Rationale & Data Source |
| :--- | :--- | :--- | :---: | :---: | :--- |
| **KPI-OP-01** | **Average End-to-End Turnaround Time (TAT)** | $\frac{\sum (\text{Disbursement Timestamp} - \text{Intake Timestamp})}{\text{Total Funded Loans}}$ | **5.0 Business Days** (40.0 working hrs) | **1.8 Business Days** (14.4 working hrs) | Directly drives customer conversion against neo-bank competitors and reduces operational carrying costs.<br>*Source: Workflow Audit Timestamps.* |
| **KPI-OP-02** | **Touch Time vs. Wait Time Ratio** | $\frac{\text{Active Staff Processing Time (Hours)}}{\text{Total Elapsed In-Process Time (Hours)}} \times 100$ | **18.5%** (81.5% idle queue time) | **65.0%** (35.0% idle queue time) | Exposes idle queue dwell time across departmental handoffs.<br>*Source: User Action Audit Logs.* |
| **KPI-OP-03** | **SLA Compliance Rate** | $\frac{\text{Applications Completed within Stage SLA}}{\text{Total Processed Applications}} \times 100$ | **86.0%** (14% SLA breach rate) | **96.0%** (4% SLA breach rate) | Measures operational discipline and predictability of service delivery.<br>*Source: SLA Event Monitoring Engine.* |
| **KPI-OP-04** | **Straight-Through-Processing (STP) Rate** | $\frac{\text{Loans Approved without Human Intervention}}{\text{Total Completed Applications}} \times 100$ | **0.0%** (100% manual review) | **38.0%** (low-risk Tier 1 applications) | Measures degree of safe decision automation, liberating underwriting bandwidth for complex cases.<br>*Source: Credit Decision Engine Logs.* |
| **KPI-OP-05** | **Manual System Touchpoints per Loan** | $\text{Count of unique manual data entry / re-keying screens across all systems}$ | **12 discrete steps** | **4 discrete steps** | Measures administrative burden and efficiency gains from system integration.<br>*Source: Time-and-Motion Study.* |

---

## 3. Quality & Risk Governance KPIs

| KPI ID | KPI Name | Mathematical Formula / Calculation | AS-IS Baseline | TO-BE Target | Business Rationale & Data Source |
| :--- | :--- | :--- | :---: | :---: | :--- |
| **KPI-QL-01** | **First-Time-Right (FTR) Submission Rate** | $\frac{\text{Applications Processed without any Rework Loop}}{\text{Total Initial Submissions}} \times 100$ | **48.0%** | **82.0%** | Measures effectiveness of upfront intake validation and dynamic document checklists.<br>*Source: Stage Transition History.* |
| **KPI-QL-02** | **Document Rework Rate** | $\frac{\text{Applications with at least 1 Document Re-upload Request}}{\text{Total Submissions}} \times 100$ | **35.0%** (3,500 apps/mo) | **8.0%** (800 apps/mo) | Eliminates the largest single operational bottleneck in the origination lifecycle.<br>*Source: Document Repository Rejection Logs.* |
| **KPI-QL-03** | **Data Transcription Error Rate** | $\frac{\text{Applications with Detected Data Mismatches}}{\text{Total Processed Applications}} \times 100$ | **11.5%** | **1.2%** | Tracks data entry accuracy improvements achieved through automated OCR and API sync.<br>*Source: Post-Approval Quality Audits.* |
| **KPI-QL-04** | **Regulatory Compliance Pass Rate** | $\frac{\text{Audited Files Meeting 100% KYC/AML/FairLending Rules}}{\text{Total Sampled Loan Files}} \times 100$ | **98.2%** | **100.0%** | Verifies that process acceleration does not compromise risk governance or regulatory integrity.<br>*Source: Internal Compliance Audit Sample.* |

---

## 4. Customer Experience & Commercial KPIs

| KPI ID | KPI Name | Mathematical Formula / Calculation | AS-IS Baseline | TO-BE Target | Business Rationale & Data Source |
| :--- | :--- | :--- | :---: | :---: | :--- |
| **KPI-CX-01** | **Customer Satisfaction (CSAT) - Origination** | $\frac{\sum \text{Positive Ratings (4 & 5 stars)}}{\text{Total Post-Disbursement Survey Responses}} \times 100$ | **61.0%** | **88.0%** | Measures customer sentiment regarding processing speed, transparency, and ease of effort.<br>*Source: Post-Disbursement Automated Survey.* |
| **KPI-CX-02** | **Inbound Status Inquiries per Application** | $\frac{\text{Total Status Calls/Emails to Branches & Call Center}}{\text{Total Active Applications}}$ | **3.2 inquiries / loan** (32,000 inquiries/mo) | **0.6 inquiries / loan** (6,000 inquiries/mo) | Quantifies the operational relief on front-line branch staff delivered by self-service tracking.<br>*Source: Contact Center CRM Inbound Logs.* |
| **KPI-CX-03** | **Application Funnel Abandonment Rate** | $\frac{\text{Applications Initiated but Unfinished}}{\text{Total Application Starts}} \times 100$ | **22.0%** | **9.0%** | Measures reduction in customer friction during initial form entry and document upload.<br>*Source: Web Analytics Funnel Metrics.* |
| **KPI-CX-04** | **Post-Approval Disbursement Latency** | $\text{Elapsed time from Final Loan Agreement e-Sign to Funds Release}$ | **24.0 Hours** | **< 15 Minutes** | Delivers immediate gratification to borrowers and eliminates settlement delays.<br>*Source: Core Banking Payment Rail Gateway.* |

---

## 5. Summary KPI Comparison Scorecard

```
+-----------------------------------------------------------------------------------------------+
|                            NOVA BANK KPI TRANSFORMATION SUMMARY                               |
+------------------------------------+------------------+------------------+--------------------+
| METRIC DIMENSION                   | AS-IS BASELINE   | TO-BE TARGET     | EXPECTED CHANGE    |
+------------------------------------+------------------+------------------+--------------------+
| 1. Average Turnaround Time (TAT)   | 5.0 Days         | 1.8 Days         | -64% Reduction     |
| 2. Document Rework Rate            | 35.0%            | 8.0%             | -77% Reduction     |
| 3. First-Time-Right (FTR) Rate     | 48.0%            | 82.0%            | +71% Improvement   |
| 4. SLA Breach Rate                 | 14.0%            | 4.0%             | -71% Reduction     |
| 5. Straight-Through Processing %   | 0.0%             | 38.0%            | +38% STP Volume    |
| 6. Status Calls per Application    | 3.2 calls        | 0.6 calls        | -81% Reduction     |
| 7. Application Funnel Drop-off     | 22.0%            | 9.0%             | -59% Reduction     |
| 8. Customer CSAT Score             | 61.0%            | 88.0%            | +44% Improvement   |
+------------------------------------+------------------+------------------+--------------------+
```
