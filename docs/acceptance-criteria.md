# Acceptance Criteria (Given / When / Then)

> **Disclaimer:** *Illustrative assumptions for portfolio case study — not real bank data.*

---

## 1. Acceptance Criteria Standards

In accordance with industry standard Agile Business Analysis practices, acceptance criteria are documented using the **Gherkin (Given-When-Then)** syntax. Each criterion defines explicit, testable pre-conditions, trigger events, expected system behaviors, and outcome assertions.

---

## 2. Detailed Acceptance Criteria by User Story

### US-01: Dynamic Document Checklist
```gherkin
Scenario 1: Salaried applicant receives customized document checklist
  Given an applicant has completed initial form entry and selected "Salaried Employee"
  When the applicant navigates to the Document Upload screen
  Then the system shall display mandatory checklist items:
    | Document Type         | Required Months | Mandatory Flag |
    | National Photo ID     | N/A             | Yes            |
    | Employer Payslip      | Last 3 Months   | Yes            |
    | Bank Salary Statement | Last 6 Months   | Yes            |
    | Proof of Address      | Current         | Yes            |
  And the system shall display an "Optional / Additional Proof" section for secondary income.

Scenario 2: Self-Employed applicant receives business documentation checklist
  Given an applicant has completed initial form entry and selected "Self-Employed / Business Owner"
  When the applicant navigates to the Document Upload screen
  Then the system shall display mandatory checklist items:
    | Document Type                 | Required Period | Mandatory Flag |
    | Business Registration Proof   | Valid           | Yes            |
    | Audited Financials / Tax Return| Last 2 Years   | Yes            |
    | Operating Bank Statement      | Last 12 Months  | Yes            |
    | National Photo ID of Director | Current         | Yes            |
  And the system shall disable the "Submit" button until all mandatory checklist categories contain at least one valid upload.
```

---

### US-02: Automated Document Pre-Validation
```gherkin
Scenario 1: Valid document passes intake pre-validation
  Given an applicant is on the document upload screen
  When the applicant uploads a clear, 300 DPI PDF payslip of size 4.2 MB
  Then the system shall validate the format, resolution, and page count within 2.0 seconds
  And display a green checkmark icon with status "Verified" next to that checklist item.

Scenario 2: Low-resolution or corrupted document fails pre-validation
  Given an applicant is on the document upload screen
  When the applicant uploads an image with resolution below 200 DPI or corrupted file header
  Then the system shall reject the upload immediately prior to server storage
  And display an inline alert message: "Document is blurry or illegible. Please upload a clear scan (minimum 300 DPI)."
  And maintain the checklist item status as "Pending Upload".
```

---

### US-03: Omni-Channel Real-Time Status Tracking
```gherkin
Scenario 1: Applicant views current milestone progress
  Given an applicant with Active Application ID "NB-PL-2026-8841" logs into the portal
  When the applicant views the Loan Tracker dashboard
  Then the system shall render a 5-stage visual progress stepper:
    | Stage Index | Stage Name          | Status Displayed  |
    | 1           | Application Intake  | Completed (Green) |
    | 2           | Document & KYC      | Completed (Green) |
    | 3           | Credit Underwriting | In Progress (Blue)|
    | 4           | Sanction & e-Sign   | Pending (Grey)    |
    | 5           | Disbursement        | Pending (Grey)    |
  And display the estimated completion date based on active stage SLA.
```

---

### US-04: Digital Sanction Letter & e-Signature
```gherkin
Scenario 1: Applicant executes digital loan agreement via OTP e-Sign
  Given a loan application has been approved with Sanction ID "SANCT-99120"
  When the applicant accesses the Digital Agreement module and enters the one-time authentication code (OTP) sent to their registered mobile phone
  Then the system shall stamp the PDF agreement with a cryptographically secure digital signature and timestamp
  And update the application state to "AGREEMENT_EXECUTED"
  And automatically notify the Disbursement Queue that pre-conditions are satisfied.
```

---

### US-08: Automated KYC & AML Screening
```gherkin
Scenario 1: Automated KYC verification returns clear match
  Given an application has passed document pre-validation
  When the system transmits applicant National ID and demographic data to the National Identity API and AML Screening Service
  Then the system shall verify identity authenticity within 3.0 seconds
  And confirm zero hits against PEP and OFAC sanctions watchlists
  And automatically transition the application status to "KYC_VERIFIED".

Scenario 2: Potential AML watchlist fuzzy match requires analyst review
  Given an applicant name returns a 92% fuzzy match against a domestic regulatory watchlist
  When the automated AML screening completes
  Then the system shall flag the application with status "KYC_EXCEPTION"
  And route the file directly to the Senior Compliance Analyst queue with highlighted match attributes
  And halt credit decisioning until manual compliance sign-off is completed.
```

---

### US-10: Straight-Through-Processing (STP) Automated Approval
```gherkin
Scenario 1: Standard low-risk applicant qualifies for instant STP approval
  Given an applicant with Credit Score 785, calculated DTI 27.5%, and Loan Request $18,000
  When the automated Credit Decision Engine evaluates the application
  Then the system shall verify that all Tier 1 STP rules (BR-RULE-06) are satisfied
  And automatically transition application state to "SANCTION_APPROVED" without assigning to human underwriter
  And generate the digital sanction letter within 10 seconds.
```

---

### US-11 & US-12: Underwriter Decision Workbench & Adverse Action
```gherkin
Scenario 1: Underwriter reviews and approves exception loan
  Given an application with Credit Score 690 and DTI 42% is assigned to an Underwriter worklist
  When the Underwriter reviews the unified workbench and clicks "Approve with Policy Override"
  Then the system shall require selection of an Override Justification Code (e.g., "HIGH_LIQUID_ASSETS")
  And require a mandatory text comment (minimum 25 characters)
  And record the underwriter's employee ID and timestamp in the immutable audit log.

Scenario 2: Underwriter declines application with regulatory reason codes
  Given an application does not meet credit risk standards
  When the Underwriter clicks "Decline Application"
  Then the system shall require selection of at least one standardized Adverse Action code (e.g., "EXCESSIVE_OBLIGATIONS_DTI")
  And generate a compliant Adverse Action Notification letter for the applicant.
```

---

### US-13: Automated Funds Release & Core Banking Disbursement
```gherkin
Scenario 1: Automated core banking disbursement trigger
  Given an application has status "AGREEMENT_EXECUTED" and validated bank account credentials
  When the disbursement scheduler runs or officer clicks "Execute Disbursement"
  Then the system shall execute an API funds transfer instruction to the Core Banking platform
  And verify that the transfer transaction reference ID is returned with code "200_SUCCESS"
  And update application status to "LOAN_DISBURSED"
  And trigger SMS and Email confirmation to the customer with loan account details.
```

---

### US-14: SLA Timer Countdown & Automated Escalation
```gherkin
Scenario 1: Underwriting task reaches 75% SLA threshold
  Given an application has been in the Underwriting Queue for 6.0 business hours (SLA = 8.0 hours)
  When the background SLA monitor checks task elapsed times
  Then the system shall change the task visual status indicator from "Amber" to "Red Warning"
  And trigger an automated escalation email to the Credit Operations Team Lead
  And elevate the task priority ranking to "Urgent / Escalated" on team dashboards.
```
