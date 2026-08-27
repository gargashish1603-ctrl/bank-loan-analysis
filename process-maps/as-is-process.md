# AS-IS Process Model & Swimlane Specification

> **Disclaimer:** *Illustrative assumptions for portfolio case study — not real bank data.*

---

## 1. AS-IS Process Architecture Overview

NovaBank's current-state Personal Loan Origination process is a **predominantly manual, sequential, paper-and-email driven workflow** distributed across 8 distinct swimlanes. 

The baseline process suffers from severe rework loops, unassisted document intake, duplicate manual data entry across 4 disparate systems, and an all-or-nothing manual underwriting mandate.

```
+---------------------------------------------------------------------------------------------------+
|                                 AS-IS PROCESS VALUE STREAM FLOW                                   |
+---------------------------------------------------------------------------------------------------+
|  1. Customer Initiates Form (Paper/Web) ──► 2. Branch RM Scans & Re-keys into CRM                |
|  ──► 3. Loan Ops Reviews Documents (Manual) ──► [Decision: Complete?] ──NO──► Manual Email Rework|
|  ──► YES ──► 4. KYC Analyst Manually Queries External Registry (Portal)                           |
|  ──► 5. Credit Analyst Pulls Bureau & Builds Excel DTI Sheet                                      |
|  ──► 6. Underwriter FIFO Queue (100% Manual Review) ──► [Decision: Approved?]                     |
|  ──► YES ──► 7. Branch Prints Paper Agreement ──► Customer Physical Wet Signature                 |
|  ──► 8. Disbursement Team Re-keys into Core Banking ──► Batch Funds Release (Next Day)            |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. 8-Swimlane AS-IS BPMN Activity Specification

### Swimlane 1: Retail Customer (Applicant)
1. **Task AS-01 (Manual):** Completes static loan application form via basic web form or physical branch paper.
2. **Task AS-02 (Manual):** Collects physical paper documents (salary slips, bank statements, ID copies) and uploads uncompressed files or hands physical copies to branch.
3. **Event AS-03 (Waiting):** Enters opaque waiting state (averaging 5.0 business days); makes periodic inquiry calls to branch.
4. **Task AS-04 (Exception Rework):** Receives email notification of missing/blurry documents after 48h; gathers and re-submits secondary documents.
5. **Task AS-05 (Manual):** Visits branch in person to review paper sanction letter and sign loan contract with wet ink.

### Swimlane 2: Relationship Manager (Sales & Sourcing)
1. **Task AS-06 (Manual):** Assists walk-in customer with paper application; conducts preliminary eyeball check of documents.
2. **Task AS-07 (Manual):** Re-types customer contact and employment details from paper form into Branch CRM system.
3. **Task AS-08 (Manual Coordination):** Spends ~2 hours daily answering customer status calls and emailing backoffice operations to check file status.

### Swimlane 3: Branch / Loan Operations (Central Intake)
1. **Task AS-09 (Manual):** Downloads uploaded files from web intake or retrieves scanned branch paperwork.
2. **Task AS-10 (Manual Inspection):** Manually inspects each page for clarity, expiration dates, and employer names (~35 min/app).
3. **Gateway AS-11 (Decision):** *Are all documents legible and complete?*
   - **NO (35% Rework Loop):** Drafts manual email to customer requesting re-upload; places application in `HOLD_REWORK` status.
   - **YES:** Re-keys applicant data from CRM into the central Loan Origination System (LOS).
4. **Task AS-12 (Manual Handoff):** Assigns file to compliance team queue via internal batch status update.

### Swimlane 4: KYC / Compliance Analyst
1. **Task AS-13 (Manual):** Opens external government National ID Registry portal in separate browser tab; manually types applicant ID number.
2. **Task AS-14 (Manual):** Copies applicant name and DOB into external AML/PEP screening tool.
3. **Gateway AS-15 (Decision):** *Is KYC clear and valid?*
   - **NO (Exception):** Sends email query to branch requesting additional proof of residence.
   - **YES:** Manually enters KYC clearance code into LOS and moves file to Credit Queue.

### Swimlane 5: Credit Analyst (Risk Assessment)
1. **Task AS-16 (Manual):** Logs into Credit Bureau portal; manually inputs applicant ID to download PDF credit report.
2. **Task AS-17 (Manual Calculation):** Opens Excel spreadsheet; manually enters income from salary slips and sums existing debt installments from bureau report to calculate Debt-to-Income (DTI).
3. **Task AS-18 (Manual Handoff):** Uploads Excel calculation sheet into LOS and routes file to Underwriter FIFO worklist.

### Swimlane 6: Underwriter (Credit Authority)
1. **Event AS-19 (Waiting Bottleneck):** Application idles in first-in, first-out (FIFO) queue for an average of **9.5 hours**.
2. **Task AS-20 (Manual Review):** Evaluates credit file, Excel DTI ratios, and employer risk profile (~90 min/file).
3. **Gateway AS-21 (Decision):** *Does application meet credit approval policy?*
   - **NO (Decline):** Updates LOS status to `DECLINED`; manually drafts rejection summary.
   - **YES (Approve):** Signs digital sanction authorization in LOS and triggers agreement generation.

### Swimlane 7: Disbursement Team (Operations)
1. **Task AS-22 (Manual):** Waits for branch to scan and upload customer-signed physical agreement (average lag 24h).
2. **Task AS-23 (Manual Verification):** Manually cross-checks applicant bank account name and account number against bank statement.
3. **Task AS-24 (Manual Entry):** Manually logs into Core Banking system and keys payment transaction into end-of-day batch processing file.

### Swimlane 8: Core Banking & Legacy Systems
1. **System AS-25 (Batch):** Executes scheduled end-of-day batch payment run at 18:00; credits loan principal to customer account.
2. **System AS-26 (Disjointed):** Core Banking records loan liability but does not update CRM status in real time.

---

## 3. AS-IS Process Flow Chart (Mermaid Specification)

```mermaid
flowchart TD
    classDef manual fill:#fee2e2,stroke:#ef4444,stroke-width:1.5px;
    classDef wait fill:#fef3c7,stroke:#f59e0b,stroke-width:1.5px;
    classDef decision fill:#e0e7ff,stroke:#6366f1,stroke-width:1.5px;
    classDef system fill:#f1f5f9,stroke:#64748b,stroke-width:1.5px;

    Start([Start: Customer Applies]) --> T1[1. Fill Paper/Web Form]:::manual
    T1 --> T2[2. Collect & Upload Documents]:::manual
    T2 --> T3[3. Branch Staff Re-keys into CRM]:::manual
    T3 --> T4[4. Loan Ops Manual Doc Review]:::manual
    
    T4 --> D1{Docs Complete & Legible?}:::decision
    D1 -- No: 35% Rework --> W1[Wait: Manual Email to Customer]:::wait
    W1 --> T2
    
    D1 -- Yes: 65% --> T5[5. Manual Data Re-key to LOS]:::manual
    T5 --> T6[6. KYC Analyst Portal Search]:::manual
    T6 --> T7[7. Credit Analyst Excel DTI Sheet]:::manual
    T7 --> W2[Wait: Underwriting FIFO Queue (9.5h)]:::wait
    
    W2 --> T8[8. Underwriter Manual Review]:::manual
    T8 --> D2{Credit Approved?}:::decision
    D2 -- No --> End1([Decline Notice Sent])
    
    D2 -- Yes --> T9[9. Branch Prints Paper Agreement]:::manual
    T9 --> T10[10. Customer Physical Wet Signature]:::manual
    T10 --> T11[11. Ops Re-keys Account to Core Banking]:::manual
    T11 --> S1[12. End-of-Day Batch Disbursement]:::system
    S1 --> End2([End: Funds Credited - 5.0 Days TAT])
```
