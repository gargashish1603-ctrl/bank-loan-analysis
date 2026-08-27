# Assumptions, Dependencies & Constraints

> **Disclaimer:** *Illustrative assumptions for portfolio case study — not real bank data.*

---

## 1. Delineation: Assumptions vs. Constraints vs. Dependencies

A rigorous Business Analysis deliverable clearly separates what is *assumed* (hypotheses taken as true for planning), what is *constrained* (immovable boundaries or limitations), and what is *dependent* (external prerequisites).

```
  ┌────────────────────────┐    ┌────────────────────────┐    ┌────────────────────────┐
  │      ASSUMPTIONS       │    │      CONSTRAINTS       │    │      DEPENDENCIES      │
  │ Baseline volumes, user │    │ Regulatory compliance, │    │ Third-party APIs, core │
  │ adoption, technology   │    │ legacy system caps,    │    │ banking interfaces,    │
  │ availability           │    │ budget, lending policy │    │ legal guidelines       │
  └────────────────────────┘    └────────────────────────┘    └────────────────────────┘
```

---

## 2. Project Assumptions

### Operational & Domain Assumptions:
1. **Case Study Scope:** NovaBank is a fictional retail banking institution. All volumetric figures (10,000 applications/month, 5-day TAT, 35% rework) are illustrative baseline assumptions created specifically for this portfolio case study.
2. **Customer Channel Access:** At least 70% of personal loan applicants possess a smartphone or computer with internet access capable of uploading digital document images or PDFs.
3. **Core Banking System Viability:** NovaBank's existing Core Banking platform (e.g., Finacle/Temenos) can support batch or REST API calls for account balance validation and loan disbursement posting.
4. **Bureau Integration Feasibility:** National credit rating agencies provide standardized XML/JSON API interfaces for programmatic credit file retrieval.
5. **Staff Availability:** Operations and branch staff can be allocated up to 10 hours per person for simulation training during Phase 2 and Phase 3 without violating daily operational SLAs.

---

## 3. Project Constraints

### Regulatory & Policy Constraints:
1. **Mandatory Human Underwriting for High-Risk Files:** Regulations and bank credit policy strictly forbid 100% automated straight-through processing for loans exceeding $25,000, applicants with credit scores below 750, or self-employed profiles. Human licensed underwriter sign-off is mandatory.
2. **Data Residency & Privacy Laws:** Customer Personally Identifiable Information (PII) and financial records must reside within national sovereign cloud boundaries and must comply with national banking privacy mandates.
3. **Audit Trail Retention:** Every system event, credit score query, underwriter comment, and customer document must be retained in an immutable state for a minimum statutory period of 7 years.

### Technical & Environmental Constraints:
1. **Legacy Architecture Integration:** Core Banking platform maintenance windows occur weekly on Sunday 01:00–04:00 AM, during which automated disbursement triggers must queue without failure.
2. **Bandwidth Limitations:** Remote branch locations operate on limited MPLS network bandwidth; all uploaded document scans must be client-side compressed to <5MB before transmission.

---

## 4. Key Project Dependencies

| Dependency ID | Dependency Description | Dependent Workstream | Impact if Delayed |
| :--- | :--- | :--- | :--- |
| **DEP-01** | **National Identity API Gateway Access** | Phase 3 (Automated KYC) | Fallback to manual document inspection by compliance team. |
| **DEP-02** | **Credit Bureau Commercial API Agreement** | Phase 3 (Credit Decisioning) | Delay in automated DTI scoring engine activation. |
| **DEP-03** | **Digital e-Signature Legal Provider Validation** | Phase 2 (Digital Agreement) | Continued reliance on branch physical paper signing. |
| **DEP-04** | **Core Banking ESB Middleware Deployment** | Phase 4 (Instant Disbursement) | Disbursements must be processed in manual hourly batches. |
