# Use Case Model & Detailed Use Cases

> **Disclaimer:** *Illustrative assumptions for portfolio case study — not real bank data.*

---

## 1. Use Case Model & Actor Hierarchy

The Use Case Model defines the primary business interactions between external actors (Customers, Branch Staff, Compliance Analysts, Underwriters, Core Banking Systems) and the Loan Origination Engine.

```
                               USE CASE DIAGRAM OVERVIEW
  ┌──────────────────┐
  │     CUSTOMER     ├────────┬───────────────────────────► (UC-01: Submit Digital Loan Application)
  │   (Applicant)    │        ├───────────────────────────► (UC-02: Upload Supporting Documents)
  └──────────────────┘        ├───────────────────────────► (UC-08: Track Application Status)
                              └───────────────────────────► (UC-10: Sign Digital Loan Agreement)

  ┌──────────────────┐
  │  BRANCH OPS / RM ├────────────────────────────────────► (UC-03: Intake & Scan Branch Application)
  └──────────────────┘

  ┌──────────────────┐
  │   SYSTEM ENGINE  ├────────┬───────────────────────────► (UC-04: Execute Document Pre-Validation)
  │    (Automated)   │        ├───────────────────────────► (UC-05: Orchestrate KYC & Bureau Checks)
  └──────────────────┘        ├───────────────────────────► (UC-06: Execute Automated Decisioning / STP)
                              └───────────────────────────► (UC-11: Trigger SLA Alerts & Escalations)

  ┌──────────────────┐
  │   KYC ANALYST    ├────────────────────────────────────► (UC-05A: Review KYC / Watchlist Exceptions)
  └──────────────────┘

  ┌──────────────────┐
  │   UNDERWRITER    ├────────┬───────────────────────────► (UC-07: Perform Manual Underwriting Review)
  │ (Credit Officer) │        └───────────────────────────► (UC-09: Request Additional Information)
  └──────────────────┘

  ┌──────────────────┐
  │ DISBURSEMENT OPS ├────────────────────────────────────► (UC-12: Execute Core Banking Funds Release)
  └──────────────────┘
```

---

## 2. Primary Actors Definition

1. **Customer (Applicant):** Initiates loan request, uploads identity and income documentation, tracks progress, and executes digital agreement.
2. **Relationship Manager (RM) / Branch Operations:** Assists walk-in customers, initiates assisted applications, and scans physical paperwork.
3. **KYC / Compliance Analyst:** Handles exceptions flagged during identity matching or sanctions/PEP screening.
4. **Credit Analyst / Underwriter:** Reviews complex, high-risk, or policy-exception loan files that do not qualify for straight-through approval.
5. **Operations Manager:** Monitors pipeline health, analyzes bottleneck queues, and receives SLA escalation alerts.
6. **Disbursement Officer / Automated Payment Service:** Verifies final conditions and releases funds to the customer's account.
7. **External Service Providers (System):** National Identity Registry, Credit Rating Bureaus, Fraud Detection Engine.

---

## 3. Catalog of Core Use Cases

| Use Case ID | Use Case Name | Primary Actor | Trigger | Goal / Outcome |
| :--- | :--- | :--- | :--- | :--- |
| **UC-01** | **Submit Digital Loan Application** | Customer | Applicant clicks "Apply for Personal Loan" on portal/mobile app. | Complete initial application submitted with valid contact, employment, and loan terms. |
| **UC-02** | **Upload Supporting Documents** | Customer / RM | Application moves to Document Stage; checklist is generated. | All mandatory files (ID, Salary Slips, Bank Statements) uploaded in acceptable formats. |
| **UC-03** | **Validate Documents (Automated)** | System Engine | Document upload event triggered by user. | Documents validated for DPI resolution, format, page count, and OCR completeness. |
| **UC-04** | **Verify KYC & Watchlists** | System / KYC Analyst | Successful document pre-validation event. | Identity verified against National Registry; zero AML/PEP flags recorded. |
| **UC-05** | **Ingest Credit Bureau & Compute DTI**| System Engine | Successful KYC verification event. | Credit bureau file pulled, score logged, and Debt-to-Income (DTI) ratio calculated. |
| **UC-06** | **Execute Automated Decisioning (STP)**| System Engine | Credit scoring calculation completed. | Low-risk applications automatically approved; sanction token generated. |
| **UC-07** | **Underwrite Complex/Exception Loan** | Underwriter | Application routed to Underwriter Queue (Score 650–749, DTI 36–50%). | Formal credit decision (Approve / Counter-offer / Decline) recorded with rationale. |
| **UC-08** | **Request Additional Information** | Underwriter / Ops | Ambiguity or deficiency identified during review. | Automated notification dispatched to customer requesting specific document/data. |
| **UC-09** | **Track Application Status** | Customer / RM | User navigates to tracking portal or clicks status link. | Real-time milestone progress and pending action items displayed. |
| **UC-10** | **Execute Digital Loan Agreement (e-Sign)**| Customer | Approval sanction letter issued to applicant. | Loan agreement and repayment mandate digitally signed and legally locked. |
| **UC-11** | **Escalate SLA Breach** | System Engine | Task dwell time reaches 75% of stage SLA timer. | Alert notification sent to Team Lead and task prioritized in worklist. |
| **UC-12** | **Disburse Loan Funds** | System / Disbursement Ops| e-Signature verified and pre-conditions met. | Core Banking API executes fund transfer; customer receives disbursement notice. |

---

## 4. Deep-Dive Use Case Specifications

### Detailed Specification: UC-06 — Execute Automated Decisioning / Straight-Through Processing (STP)

- **Use Case ID:** UC-06
- **Use Case Name:** Execute Automated Decisioning / Straight-Through Processing (STP)
- **Primary Actor:** System Decisioning Engine (Automated)
- **Secondary Actor:** Credit Risk Directorate (Policy Owner)
- **Pre-Conditions:**
  1. Application status is `KYC_VERIFIED`.
  2. Bureau credit file and credit score have been ingested successfully.
  3. DTI and FOIR ratios have been calculated by the calculation engine.
- **Post-Conditions:**
  1. Application state updated to `SANCTION_APPROVED` (for STP pass) OR `UNDERWRITER_QUEUE` (for manual review) OR `AUTO_DECLINED` (for hard rule failure).
  2. Audit event logged with all policy rule evaluation scores.

#### Main Success Scenario (STP Approval Flow):
1. Decision engine retrieves applicant profile, credit score, DTI ratio, and KYC verification token.
2. System evaluates Tier 1 STP Eligibility Rules (BR-RULE-06):
   - *Check 1:* Credit Score ≥ 750 (Passed: e.g., 782).
   - *Check 2:* DTI Ratio ≤ 35.0% (Passed: e.g., 28.4%).
   - *Check 3:* Requested Loan Amount ≤ $25,000 (Passed: e.g., $15,000).
   - *Check 4:* Employment Stability ≥ 12 months (Passed: e.g., 36 months).
   - *Check 5:* Clean Fraud/AML screening (Passed).
3. System generates approval sanction token and determines standardized interest rate tier.
4. System automatically triggers UC-10 (Generate Sanction Letter & e-Sign Agreement).
5. System transmits status update to applicant via SMS and Email (`"Your NovaBank Personal Loan is pre-approved!"`).

#### Extension / Alternative Flows:
- **6a. Tier 2 Exception Routing (Manual Review Required):**
  - If Credit Score is between 650 and 749, OR DTI is between 35.1% and 50.0%, OR Loan Amount > $25,000:
    1. System tags application with specific review reason code (e.g., `FLAG_DTI_ELEVATED_38PCT`).
    2. System routes application to Senior Underwriter Queue (UC-07).
    3. System updates status to `UNDERWRITER_REVIEW`.
- **6b. Hard Rule Failure (Automatic Decline):**
  - If Credit Score < 600 OR DTI > 50.0% OR Severe Delinquency flag detected:
    1. System transitions state to `DECLINED`.
    2. System logs specific Adverse Action reason codes (e.g., `REASON_DTI_EXCEEDS_50PCT`).
    3. System generates and emails formal adverse action regulatory notice to applicant.

---

### Detailed Specification: UC-03 — Execute Document Pre-Validation

- **Use Case ID:** UC-03
- **Use Case Name:** Execute Automated Document Pre-Validation
- **Primary Actor:** System Ingestion Engine
- **Pre-Conditions:** Applicant or branch staff has initiated document upload via portal.
- **Post-Conditions:** Documents accepted and indexed, or immediate deficiency feedback rendered on-screen.

#### Main Flow:
1. User selects document category (e.g., "Salary Slip - Last 3 Months") and uploads file.
2. System immediately performs technical file validation:
   - Format check: PDF, JPEG, PNG only.
   - File size check: ≤ 15MB.
   - Resolution check: Image density ≥ 300 DPI.
3. System executes OCR character extraction to detect date of issuance, employer header, and currency markers.
4. If document meets all quality criteria, system renders green "Validated" indicator and updates checklist.

#### Exception Flow (Document Rejected at Intake):
- 2a. File is blurry, low resolution (<200 DPI), or corrupt:
  1. System rejects file immediately before backend storage.
  2. System displays on-screen prompt: *"Document is blurry or illegible. Please upload a clear scan with at least 300 DPI."*
  3. Applicant re-uploads corrected file without generating backoffice rework.
