import streamlit as st
import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go

# ---------------------------------------------------------
# Page Configuration & Styling
# ---------------------------------------------------------
st.set_page_config(
    page_title="NovaBank — Loan Origination Optimization | BA Case Study",
    page_icon="🏦",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom Enterprise CSS
st.markdown("""
<style>
    /* Main Theme Overrides */
    .main {
        background-color: #f8fafc;
    }
    .stMetric {
        background-color: #ffffff;
        padding: 14px;
        border-radius: 10px;
        border: 1px solid #e2e8f0;
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }
    .disclaimer-banner {
        background: linear-gradient(90deg, #fef3c7, #fef9c3);
        border: 1px solid #f59e0b;
        color: #92400e;
        padding: 10px 16px;
        border-radius: 8px;
        font-size: 13px;
        font-weight: 600;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .card-box {
        background-color: #ffffff;
        padding: 20px;
        border-radius: 12px;
        border: 1px solid #e2e8f0;
        margin-bottom: 16px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }
    .tag-must {
        background-color: #fee2e2;
        color: #991b1b;
        font-weight: 700;
        padding: 2px 8px;
        border-radius: 4px;
        font-size: 11px;
    }
    .tag-should {
        background-color: #fef3c7;
        color: #92400e;
        font-weight: 700;
        padding: 2px 8px;
        border-radius: 4px;
        font-size: 11px;
    }
</style>
""", unsafe_allow_html=True)

# ---------------------------------------------------------
# Sidebar Navigation
# ---------------------------------------------------------
with st.sidebar:
    st.markdown("### 🏦 NovaBank Case Study")
    st.caption("**Role:** Business Analyst — Process Optimization")
    st.caption("**Industry:** Retail Banking / Unsecured Lending")
    st.markdown("---")
    
    menu = st.radio(
        "Navigate Project Artifacts:",
        [
            "🏠 Executive Summary",
            "🏢 Context & Scope",
            "👥 Stakeholders & 2x2 Matrix",
            "🔄 AS-IS vs. TO-BE Process",
            "🔍 Root-Cause Diagnostics (5 Whys)",
            "📊 Operational Gap Matrix",
            "📋 Requirements Hub (BR, FR, NFR)",
            "🔗 Traceability Matrix (RTM)",
            "⚖️ Banking Business Rules",
            "📈 KPIs & Scenario Simulator",
            "🗺️ Roadmap & Change Management",
            "🛡️ 5x5 Risk Register",
            "🎯 Executive Recommendation"
        ]
    )
    
    st.markdown("---")
    st.caption("Illustrative assumptions for portfolio case study — not real bank data.")

# Top Disclaimer Banner
st.markdown("""
<div class="disclaimer-banner">
    ⚠️ <span><strong>PORTFOLIO CASE STUDY DISCLAIMER:</strong> All quantitative figures (10,000 monthly volume, 5.0-day TAT, 35% rework) are illustrative baseline assumptions created for this portfolio project and do not represent actual bank data.</span>
</div>
""", unsafe_allow_html=True)

# ---------------------------------------------------------
# 1. Executive Summary
# ---------------------------------------------------------
if menu == "🏠 Executive Summary":
    st.title("Banking Loan Origination Process Optimization")
    st.subheader("AS-IS Process Analysis, Gap Assessment & TO-BE Process Design")
    st.write("A comprehensive Business Analyst portfolio engagement addressing cycle-time friction, high document rework, and system fragmentation in NovaBank's unsecured personal lending operations.")

    # High-level scorecard
    col1, col2, col3, col4 = st.columns(4)
    with col1:
        st.metric(label="Average Loan TAT", value="1.8 Days", delta="-64% (from 5.0d)", delta_color="inverse")
    with col2:
        st.metric(label="Document Rework Rate", value="8.0%", delta="-77% (from 35%)", delta_color="inverse")
    with col3:
        st.metric(label="First-Time-Right (FTR)", value="82.0%", delta="+71% (from 48%)")
    with col4:
        st.metric(label="SLA Breach Rate", value="4.0%", delta="-71% (from 14%)", delta_color="inverse")

    st.markdown("---")

    # 60-Second Recruiter Pitch
    st.markdown("### ⚡ 60-Second Executive Summary")
    c1, c2, c3, c4 = st.columns(4)
    with c1:
        st.info("**1. Business Problem**\n\n5.0-day processing TAT, 35% document rework, 14% SLA breaches, and 3.2 inquiry calls per loan across 10,000 applications/month.")
    with c2:
        st.warning("**2. Root Causes**\n\nUnassisted document intake, 4 disconnected legacy systems, and an undifferentiated FIFO manual underwriting queue.")
    with c3:
        st.success("**3. Proposed TO-BE**\n\nDynamic pre-validation + API sync + 38% Straight-Through-Processing (STP) for Tier 1 + Underwriter Exception Workbench.")
    with c4:
        st.info("**4. Target Impact**\n\nTAT reduced to 1.8 days (-64%), rework cut to 8% (-77%), and CSAT elevated to 88% (+44%).")

    st.markdown("---")
    st.markdown("### 📊 Operational Transformation Summary")
    
    df_overview = pd.DataFrame({
        "Performance Dimension": [
            "Average Turnaround Time (TAT)",
            "Document Rework Rate",
            "First-Time-Right (FTR) Rate",
            "SLA Breach Rate (>5 Days)",
            "Straight-Through Processing %",
            "Status Calls per Application",
            "Customer CSAT Score"
        ],
        "AS-IS Baseline": ["5.0 Days (40.0h)", "35.0% (3,500 apps)", "48.0%", "14.0% (1,400 apps)", "0.0% (100% manual)", "3.2 calls / loan", "61.0%"],
        "TO-BE Target": ["1.8 Days (14.4h)", "8.0% (800 apps)", "82.0%", "4.0% (400 apps)", "38.0% (Tier 1 Low-Risk)", "0.6 calls / loan", "88.0%"],
        "Expected Change": ["-64% Cycle Time", "-77% Reduction", "+71% Improvement", "-71% Violations", "+38% Automation", "-81% Call Load", "+44% Satisfaction"]
    })
    st.dataframe(df_overview, use_container_width=True, hide_index=True)

# ---------------------------------------------------------
# 2. Business Context & Scope
# ---------------------------------------------------------
elif menu == "🏢 Context & Scope":
    st.title("Business Context & Scope Boundaries")
    st.markdown("### NovaBank Operational Context")
    st.write(
        "NovaBank is a mid-sized retail commercial bank operating 45 branch networks alongside web and mobile portals. "
        "Over the preceding 12 months, loan application demand grew by 14%, but operational cycle times deteriorated. "
        "While neo-bank and FinTech competitors fund unsecured personal loans within 24 to 48 hours, NovaBank required **5.0 business days (40.0 working hours)**."
    )

    st.markdown("### Baseline Metrics (10,000 Applications / Month)")
    m1, m2, m3, m4, m5, m6 = st.columns(6)
    m1.metric("Monthly Volume", "10,000", "Apps / mo")
    m2.metric("Average TAT", "5.0 Days", "40.0h wait")
    m3.metric("Doc Rework", "35.0%", "3,500 apps/mo")
    m4.metric("SLA Breach", "14.0%", "1,400 loans/mo")
    m5.metric("FTR Rate", "48.0%", "Clean intake")
    m6.metric("Status Calls", "3.2 / loan", "32k calls/mo")

    st.markdown("---")
    st.markdown("### Operational Scope Definition")
    col_in, col_out = st.columns(2)
    
    with col_in:
        st.success("#### ✅ In-Scope (Origination Lifecycle)")
        st.markdown("""
        - Omni-channel application capture (Branch & Web)
        - Dynamic document checklists & client-side pre-validation (DPI ≥ 300)
        - Automated KYC identity registry & AML watchlist screening
        - Credit Bureau API ingestion & automated Debt-to-Income (DTI) engine
        - Credit risk decisioning (Straight-Through-Processing for Tier 1 low risk)
        - Licensed Underwriter unified workbench and adverse action logging
        - Digital sanction letter issuance and mobile OTP cryptographic e-Sign
        - Automated payment release instruction to Core Banking rails
        - Real-time customer milestone tracker & proactive SLA monitors
        """)
        
    with col_out:
        st.error("#### ❌ Out-of-Scope (Explicit Exclusions)")
        st.markdown("""
        - Post-disbursement loan servicing and monthly billing
        - Collections, delinquent loan tracking, and legal debt recovery
        - Loan restructuring, tenor extensions, and hardship refinancing
        - Mortgage and secured asset lending (property valuation, title registry)
        - Small business working capital and corporate syndicated debt
        - Treasury management and capital adequacy reserve reporting
        """)

# ---------------------------------------------------------
# 3. Stakeholders & Power-Interest Grid
# ---------------------------------------------------------
elif menu == "👥 Stakeholders & 2x2 Matrix":
    st.title("Stakeholder Analysis & Governance Grid")
    st.write("Detailed stakeholder analysis across 11 roles in business, operations, credit risk, compliance, and enterprise IT.")

    stakeholders_data = [
        {"ID": "STK-01", "Name": "Retail Loan Applicant", "Role": "Customer", "Unit": "External", "Power": "Medium", "Interest": "High", "Quadrant": "Keep Informed", "Pain Points": "Opaque 5-day wait times, repetitive document requests, lack of status tracking."},
        {"ID": "STK-02", "Name": "Relationship Manager", "Role": "Sales & Sourcing", "Unit": "Retail Sales", "Power": "Medium", "Interest": "High", "Quadrant": "Keep Informed", "Pain Points": "Spends 40% of time chasing missing customer paperwork rather than selling."},
        {"ID": "STK-03", "Name": "Branch Operations Officer", "Role": "Branch Intake", "Unit": "Retail Branches", "Power": "High", "Interest": "Medium", "Quadrant": "Keep Satisfied", "Pain Points": "Repetitive manual typing across 4 screens, handling frustrated branch walk-in applicants."},
        {"ID": "STK-04", "Name": "Loan Operations Specialist", "Role": "Central Backoffice", "Unit": "Central Ops", "Power": "High", "Interest": "High", "Quadrant": "Manage Closely", "Pain Points": "35% rework volume, manual coordination via un-tracked emails, high task backlogs."},
        {"ID": "STK-05", "Name": "KYC / AML Analyst", "Role": "Compliance Verification", "Unit": "Compliance", "Power": "High", "Interest": "High", "Quadrant": "Manage Closely", "Pain Points": "Manual copy-pasting of IDs into external government portals; high queue dwell times."},
        {"ID": "STK-06", "Name": "Credit Risk Analyst", "Role": "Risk Assessment", "Unit": "Credit Risk", "Power": "High", "Interest": "High", "Quadrant": "Manage Closely", "Pain Points": "Manually calculating ratios on Excel sheets from un-indexed PDF bank statements."},
        {"ID": "STK-07", "Name": "Senior Underwriter", "Role": "Credit Authority", "Unit": "Credit Desk", "Power": "High", "Interest": "High", "Quadrant": "Manage Closely", "Pain Points": "Mundane low-risk files clutter the queue, creating 9.5 hours of idle queue wait time."},
        {"ID": "STK-08", "Name": "Disbursement Officer", "Role": "Funds Release", "Unit": "Payments", "Power": "High", "Interest": "Medium", "Quadrant": "Keep Satisfied", "Pain Points": "Waiting for paper contracts; manual keying of account numbers into payment batches."},
        {"ID": "STK-09", "Name": "Branch Manager", "Role": "Branch Oversight", "Unit": "Retail", "Power": "Medium", "Interest": "Medium", "Quadrant": "Keep Informed", "Pain Points": "14% SLA breaches reflecting poorly on branch performance; customer complaints."},
        {"ID": "STK-10", "Name": "Enterprise IT Architect", "Role": "Technology Systems", "Unit": "IT", "Power": "Medium", "Interest": "Medium", "Quadrant": "Keep Satisfied", "Pain Points": "Supporting 4 disconnected legacy architectures without modern REST microservices."},
        {"ID": "STK-11", "Name": "Head of Regulatory Compliance", "Role": "Risk Directorate", "Unit": "Risk", "Power": "High", "Interest": "High", "Quadrant": "Manage Closely", "Pain Points": "Risk of non-compliance if automated systems bypass audit trails or regulatory checks."}
    ]
    df_stk = pd.DataFrame(stakeholders_data)

    quad_filter = st.selectbox("Filter Stakeholders by Quadrant:", ["All", "Manage Closely", "Keep Satisfied", "Keep Informed", "Monitor"])
    if quad_filter != "All":
        df_filtered = df_stk[df_stk["Quadrant"] == quad_filter]
    else:
        df_filtered = df_stk

    st.dataframe(df_filtered, use_container_width=True, hide_index=True)

    st.markdown("---")
    st.markdown("### 2x2 Power-Interest Governance Matrix")
    c1, c2 = st.columns(2)
    with c1:
        st.warning("**KEEP SATISFIED (High Power / Medium Interest)**\n\n- Branch Operations (STK-03)\n- Disbursement Team (STK-08)\n- Enterprise IT / SysAdmin (STK-10)")
        st.info("**MONITOR (Low Power / Low Interest)**\n\n- General Branch Support Staff\n- External Infrastructure Vendors")
    with c2:
        st.error("**MANAGE CLOSELY (High Power / High Interest)**\n\n- Loan Operations Lead (STK-04)\n- KYC / AML Analyst (STK-05)\n- Credit Risk Analyst (STK-06)\n- Senior Underwriter (STK-07)\n- Compliance & Risk Directorate (STK-11)")
        st.success("**KEEP INFORMED (Medium Power / High Interest)**\n\n- Retail Loan Applicant (STK-01)\n- Relationship Manager (STK-02)\n- Branch Manager (STK-09)")

# ---------------------------------------------------------
# 4. AS-IS vs. TO-BE Process
# ---------------------------------------------------------
elif menu == "🔄 AS-IS vs. TO-BE Process":
    st.title("Process Modeling: AS-IS vs. TO-BE")
    
    process_mode = st.radio("Select Process Map View:", ["TO-BE Optimized State (1.8 Days TAT)", "AS-IS Baseline State (5.0 Days TAT)"], horizontal=True)

    if "AS-IS" in process_mode:
        st.error("### 🔴 AS-IS Baseline Process (5.0 Days / 40.0 Working Hours)")
        st.write("100% manual underwriting, unassisted document intake, 4 disconnected legacy systems, and 32.6 hours of idle queue latency.")
        
        c1, c2, c3, c4 = st.columns(4)
        c1.markdown("**1. Intake (1.5h)**\n- Static form\n- 18% missing fields\n- Manual RM CRM typing")
        c2.markdown("**2. Doc Review (8.5h)**\n- 35% rework loop\n- Manual PDF checking\n- +7.3h idle wait (BOTTLENECK)")
        c3.markdown("**3. KYC & Credit (10.5h)**\n- Government portal search\n- Excel DTI calculation\n- 11.5% copy-paste errors")
        c4.markdown("**4. Underwriting (11.0h)**\n- 100% manual FIFO queue\n- +9.5h wait (BOTTLENECK)\n- Physical wet-ink sign (+24h)")
    else:
        st.success("### 🟢 TO-BE Optimized Operating Model (1.8 Days / 14.4 Working Hours)")
        st.write("Automation-first, dual-track processing: 38% Straight-Through-Processing (STP) + Licensed Underwriter Exception Workbench.")
        
        c1, c2, c3, c4 = st.columns(4)
        c1.markdown("**1. Digital Intake**\n- Dynamic checklist\n- Real-time DPI check (≥300)\n- Rework drops to 8%")
        c2.markdown("**2. Automated KYC & Bureau**\n- National ID REST API\n- AML Watchlist API (<3s)\n- Algorithmic DTI engine")
        c3.markdown("**3. ★ Decisioning Track**\n- **Tier 1 (Low-Risk):** 38% STP Auto-Approval (<10s)\n- **Tier 2 (Complex):** Underwriter Workbench")
        c4.markdown("**4. e-Sign & Disbursement**\n- Mobile OTP e-Signature\n- Core Banking API trigger\n- Disbursed in < 15 mins")

    st.markdown("---")
    st.markdown("### Dimension-by-Dimension Operational Comparison")
    df_comp = pd.DataFrame({
        "Dimension": ["1. Intake & Validation", "2. KYC & AML Compliance", "3. Underwriting Model", "4. Agreement Execution", "5. Funds Disbursement", "6. Customer Status Tracking"],
        "AS-IS Current State": ["Static form; manual backoffice review 24-48h later", "Manual copy-pasting into government portals", "100% manual review in single undifferentiated FIFO queue", "Branch physical wet-ink contract signing (24h lag)", "Manual batch keying into Core Banking payment files", "Zero tracking; 3.2 inbound inquiry calls/loan"],
        "TO-BE Future State": ["Dynamic profile checklist + real-time client-side DPI check", "Automated real-time REST APIs to National ID & AML databases", "Dual-track: 38% automated STP + Exception Underwriter Desk", "Mobile OTP cryptographic digital e-Signature", "Automated Core Banking API payment trigger upon e-Sign", "24/7 5-stage self-service tracker + SMS/Email push alerts"],
        "Expected Impact": ["Rework drops from 35% to 8%", "KYC cycle time drops from 4h to <5 min", "Queue dwell time drops from 9.5h to instant / 2.5h", "Signing time drops from 24h to <10 min", "Disbursed in <15 mins post-approval", "Status calls decline by 81% (3.2 -> 0.6)"]
    })
    st.dataframe(df_comp, use_container_width=True, hide_index=True)

# ---------------------------------------------------------
# 5. Root-Cause Diagnostics (5 Whys & Fishbone)
# ---------------------------------------------------------
elif menu == "🔍 Root-Cause Diagnostics (5 Whys)":
    st.title("Root-Cause Diagnostics (5 Whys & 6M Fishbone)")
    st.write("Structured analysis isolating foundational failure points rather than treating superficial symptoms.")

    tab_5w, tab_fish, tab_bottle = st.tabs(["5 Whys Multi-Tier Drilldown", "6M Ishikawa Fishbone", "7 Primary Bottlenecks"])

    with tab_5w:
        st.markdown("### 5 Whys Root Cause Investigations")
        
        with st.expander("🔎 5 Whys #1: Why is Document Rework so high (35% of all applications)?", expanded=True):
            st.markdown("""
            - **Problem:** 3,500 personal loan applications per month require secondary document uploads.
            - **Why 1?** Uploaded salary slips and IDs are blurry, expired, cropped, or from wrong dates.
            - **Why 2?** Applicants are unclear about exact requirements and receive no feedback during upload.
            - **Why 3?** The intake portal presents a static, generic form that does not adapt to employment type.
            - **Why 4?** Document inspection is performed entirely manually by backoffice staff hours/days later.
            - **Why 5 (Root Cause)?** Absence of an intelligent digital intake layer with dynamic checklists and client-side resolution pre-validation (≥300 DPI).
            
            **Engineered Solution:** Dynamic Checklist (FR-02) + Automated Pre-Validation Engine (FR-04).  
            **Target KPI:** Document rework drops from 35.0% to 8.0% (-77%).
            """)

        with st.expander("🔎 5 Whys #2: Why do applications experience 9.5h queue wait in Underwriting?"):
            st.markdown("""
            - **Problem:** Applications spend an average of 9.5 hours of non-value-add idle queue time in Underwriting.
            - **Why 1?** Underwriters face an unmanageable daily backlog of 150+ applications per queue.
            - **Why 2?** Every single loan application, regardless of risk, must be manually reviewed by an underwriter.
            - **Why 3?** The bank does not have automated Straight-Through Processing (STP) rules enabled.
            - **Why 4?** Credit bureau data and DTI ratios are calculated manually on Excel spreadsheets.
            - **Why 5 (Root Cause)?** Credit policy rules are not codified into an automated decision engine connected via API to credit bureaus.
            
            **Engineered Solution:** Bureau API (FR-11) + Algorithmic DTI Engine (FR-12) + Tier 1 STP Engine (FR-14).  
            **Target KPI:** Average TAT drops from 5.0 to 1.8 days; 38% STP volume achieved.
            """)

        with st.expander("🔎 5 Whys #3: Why do customers generate 3.2 inbound inquiry calls per application?"):
            st.markdown("""
            - **Problem:** NovaBank receives 32,000 inbound status inquiry contacts per month regarding loan applications.
            - **Why 1?** Customers do not know what stage their application is in or why it is delayed.
            - **Why 2?** The bank does not send status updates between initial intake and final loan sanction.
            - **Why 3?** Status transitions occur across disconnected internal systems with no notification trigger.
            - **Why 4?** The customer web portal has no self-service tracking interface or real-time stepper.
            - **Why 5 (Root Cause)?** Application state transitions are siloed across 4 legacy databases without a centralized customer event orchestration layer.
            
            **Engineered Solution:** 24/7 Self-Service Milestone Tracker (FR-20) + Automated Notification Service (FR-07).  
            **Target KPI:** Status inquiries drop from 3.2 to 0.6 calls/loan (-81%).
            """)

    with tab_fish:
        st.markdown("### Ishikawa (Fishbone) 6M Analysis")
        c1, c2, c3 = st.columns(3)
        with c1:
            st.markdown("**Process:**\n- Verification decoupled from intake\n- Sequential processing\n- Rejected files placed at end of queue")
            st.markdown("**People:**\n- Email-driven coordination\n- RMs spend 40% on paperwork\n- Uneven queue work distribution")
        with c2:
            st.markdown("**Technology:**\n- 4 disconnected legacy systems\n- Absence of credit decision engine\n- No real-time SLA event monitors")
            st.markdown("**Data:**\n- 11.5% transcription errors\n- Unstructured PDF payslips\n- Incomplete initial form submissions")
        with c3:
            st.markdown("**Policy:**\n- 100% manual underwriting mandate\n- Wet-ink physical contract signing\n- Rigid Delegated Authority limits")
            st.markdown("**Customer:**\n- Vague document requirements\n- Blurry smartphone photos (<150 DPI)\n- High anxiety status calls")

    with tab_bottle:
        st.markdown("### 7 Primary Operational Bottlenecks")
        bottlenecks = [
            {"ID": "B1", "Name": "Unassisted Manual Doc Verification", "Stage": "Doc Ingestion", "Idle Latency": "+7.3 Hours", "Failure Rate": "35.0% Rework", "Severity": "Critical (5/5)"},
            {"ID": "B2", "Name": "Incomplete Applications", "Stage": "Form Capture", "Idle Latency": "+5.2 Hours", "Failure Rate": "18.0% Hold Rate", "Severity": "High (4/5)"},
            {"ID": "B3", "Name": "Duplicate Manual Data Re-Keying", "Stage": "System Handoffs", "Idle Latency": "+4.0 Hours", "Failure Rate": "11.5% Errors", "Severity": "High (4/5)"},
            {"ID": "B4", "Name": "Opaque Status Visibility", "Stage": "End-to-End", "Idle Latency": "+3.0 Hours (Staff Drag)", "Failure Rate": "3.2 Calls / App", "Severity": "High (4/5)"},
            {"ID": "B5", "Name": "Undifferentiated Underwriting Queues", "Stage": "Credit Review", "Idle Latency": "+9.5 Hours", "Failure Rate": "0% STP Rate", "Severity": "Critical (5/5)"},
            {"ID": "B6", "Name": "Reactive SLA Tracking", "Stage": "Governance", "Idle Latency": "+4.5 Hours", "Failure Rate": "14.0% Breach", "Severity": "High (4/5)"},
            {"ID": "B7", "Name": "Physical Paper Contract Signing", "Stage": "Settlement", "Idle Latency": "+24.0 Hours", "Failure Rate": "24h Lag", "Severity": "High (4/5)"}
        ]
        st.dataframe(pd.DataFrame(bottlenecks), use_container_width=True, hide_index=True)

# ---------------------------------------------------------
# 6. Operational Gap Matrix
# ---------------------------------------------------------
elif menu == "📊 Operational Gap Matrix":
    st.title("Operational Gap Assessment Matrix")
    st.write("Structured comparison between AS-IS operational reality and TO-BE future capabilities.")

    gap_data = [
        {"ID": "GAP-01", "Dimension": "Document Quality & Intake", "Current AS-IS": "Manual inspection 24-48h post-intake", "Target TO-BE": "Real-time client-side pre-validation", "Impact": "High rework (35%); +7.3h wait", "Proposed Improvement": "Automated Pre-Validation Engine (DPI ≥ 300)", "Priority": "Must Have"},
        {"ID": "GAP-02", "Dimension": "Checklist Customization", "Current AS-IS": "Static generic document checklist", "Target TO-BE": "Dynamic profile-driven checklist", "Impact": "18% applications held for info", "Proposed Improvement": "Dynamic Checklist adapting to Salaried / Self-Employed", "Priority": "Must Have"},
        {"ID": "GAP-03", "Dimension": "Data Integration", "Current AS-IS": "Manual re-keying across 4 systems", "Target TO-BE": "Unified RESTful API microservices sync", "Impact": "11.5% copy errors; 22% delays", "Proposed Improvement": "Enterprise API Gateway synchronizing CRM, LOS & Core", "Priority": "Must Have"},
        {"ID": "GAP-04", "Dimension": "Credit Assessment", "Current AS-IS": "Manual bureau downloads & Excel DTI", "Target TO-BE": "Direct API ingestion & algorithmic DTI", "Impact": "4.5h credit latency; Excel errors", "Proposed Improvement": "Direct bureau API connector and algorithmic DTI engine", "Priority": "Must Have"},
        {"ID": "GAP-05", "Dimension": "Underwriting Decisioning", "Current AS-IS": "100% manual review in FIFO queue", "Target TO-BE": "Dual-track: Tier 1 STP + Exception Desk", "Impact": "9.5h queue dwell time", "Proposed Improvement": "Automated Credit Decision Engine with 38% STP", "Priority": "Must Have"},
        {"ID": "GAP-06", "Dimension": "Customer Transparency", "Current AS-IS": "Zero tracking; black-box wait", "Target TO-BE": "24/7 5-stage self-service tracker", "Impact": "3.2 calls/loan; 32k calls/mo", "Proposed Improvement": "Customer self-service milestone tracking portal", "Priority": "Must Have"},
        {"ID": "GAP-07", "Dimension": "Customer Notifications", "Current AS-IS": "Manual batch emails sent hours later", "Target TO-BE": "Event-driven instant SMS/Email alerts", "Impact": "Delayed customer response (26h avg)", "Proposed Improvement": "Automated event-triggered push notification service", "Priority": "Must Have"},
        {"ID": "GAP-08", "Dimension": "SLA Monitoring", "Current AS-IS": "Reactive tracking after complaints", "Target TO-BE": "Proactive countdown alerts (50% & 75%)", "Impact": "14.0% SLA breach rate", "Proposed Improvement": "Real-time SLA monitor with automated team lead alerts", "Priority": "Should Have"},
        {"ID": "GAP-09", "Dimension": "Agreement Signing", "Current AS-IS": "Branch visit & physical wet-ink sign", "Target TO-BE": "Mobile OTP cryptographic e-Sign", "Impact": "24-48 hours post-approval delay", "Proposed Improvement": "Mobile OTP digital e-Signature integration", "Priority": "Must Have"},
        {"ID": "GAP-10", "Dimension": "Disbursement Release", "Current AS-IS": "Manual batch payment keying", "Target TO-BE": "Automated Core Banking API release", "Impact": "24h settlement delay post-signing", "Proposed Improvement": "Automated Core Banking payment release (<15 min)", "Priority": "Must Have"},
        {"ID": "GAP-11", "Dimension": "KYC Verification", "Current AS-IS": "Manual copy-pasting into portals", "Target TO-BE": "Automated real-time API screening", "Impact": "4.0h KYC cycle time", "Proposed Improvement": "Automated National ID Registry & AML screening APIs", "Priority": "Must Have"},
        {"ID": "GAP-12", "Dimension": "Underwriter UI", "Current AS-IS": "5 open windows across separate apps", "Target TO-BE": "Single-screen Unified Decision Workbench", "Impact": "Slower reviews (1.5h touch time)", "Proposed Improvement": "Unified Underwriter Workbench with pre-calculated ratios", "Priority": "Should Have"}
    ]
    df_gaps = pd.DataFrame(gap_data)
    st.dataframe(df_gaps, use_container_width=True, hide_index=True)

# ---------------------------------------------------------
# 7. Requirements Hub
# ---------------------------------------------------------
elif menu == "📋 Requirements Hub (BR, FR, NFR)":
    st.title("Requirements Specification & Agile User Stories")

    r_tab1, r_tab2, r_tab3, r_tab4 = st.tabs(["Business Requirements (BR)", "Functional Requirements (FR)", "Non-Functional (NFR)", "User Stories & Gherkin AC"])

    with r_tab1:
        brs = [
            {"ID": "BR-01", "Category": "Cycle Time", "Requirement": "Reduce average loan processing turnaround time from 5.0 to < 2.0 business days.", "Rationale": "Accelerate time-to-cash and competitive parity with FinTechs.", "Priority": "Must Have"},
            {"ID": "BR-02", "Category": "Intake Quality", "Requirement": "Elevate First-Time-Right (FTR) application submissions from 48% to ≥ 80%.", "Rationale": "Drastically eliminate downstream rework loops.", "Priority": "Must Have"},
            {"ID": "BR-03", "Category": "Document Mgmt", "Requirement": "Automate document verification and pre-validation at the point of ingestion.", "Rationale": "Eliminate 35% manual document rework rate.", "Priority": "Must Have"},
            {"ID": "BR-04", "Category": "Transparency", "Requirement": "Provide real-time omni-channel status transparency to applicants and staff.", "Rationale": "Reduce high inbound call volume (3.2 calls/loan).", "Priority": "Must Have"},
            {"ID": "BR-05", "Category": "Decisioning", "Requirement": "Enable automated Straight-Through Processing (STP) for qualified low-risk applicants.", "Rationale": "Liberate underwriter bandwidth for complex files.", "Priority": "Must Have"},
            {"ID": "BR-06", "Category": "Integration", "Requirement": "Eliminate duplicate manual data entry across 4 legacy banking platforms.", "Rationale": "Reduce 11.5% copy-paste errors and handoff delays.", "Priority": "Must Have"},
            {"ID": "BR-07", "Category": "Governance", "Requirement": "Proactive SLA monitoring and automated pre-breach alerts.", "Rationale": "Reduce SLA breach rate from 14% to ≤ 4%.", "Priority": "Must Have"},
            {"ID": "BR-08", "Category": "Compliance", "Requirement": "Preserve 100% regulatory KYC/AML compliance and 7-year immutable audit logging.", "Rationale": "Prevent statutory penalties and ensure Fair Lending.", "Priority": "Must Have"}
        ]
        st.dataframe(pd.DataFrame(brs), use_container_width=True, hide_index=True)

    with r_tab2:
        frs = [
            {"ID": "FR-01", "Feature": "Digital Intake", "Requirement": "Responsive web & mobile form with real-time field validation.", "Priority": "Must Have"},
            {"ID": "FR-02", "Feature": "Dynamic Checklist", "Requirement": "Dynamically generate checklist based on employment type (Salaried/Self-Employed).", "Priority": "Must Have"},
            {"ID": "FR-04", "Feature": "Pre-Validation", "Requirement": "Inspect uploads in real time for DPI resolution (≥300 DPI) and format.", "Priority": "Must Have"},
            {"ID": "FR-07", "Feature": "Deficiency Alerts", "Requirement": "Automated SMS/Email alerts with secure direct upload links for rejected files.", "Priority": "Must Have"},
            {"ID": "FR-08", "Feature": "Unified Data Sync", "Requirement": "Synchronize applicant records across CRM, LOS, and Core Banking via REST APIs.", "Priority": "Must Have"},
            {"ID": "FR-09", "Feature": "National ID API", "Requirement": "Trigger automated real-time API verification against National Identity Registry.", "Priority": "Must Have"},
            {"ID": "FR-10", "Feature": "AML Screening", "Requirement": "Automated screening against global PEP and OFAC sanctions watchlists.", "Priority": "Must Have"},
            {"ID": "FR-11", "Feature": "Bureau Ingestion", "Requirement": "Direct REST API ingestion of credit bureau file and score in <3.0s.", "Priority": "Must Have"},
            {"ID": "FR-12", "Feature": "DTI Engine", "Requirement": "Algorithmic computation of Debt-to-Income (DTI) and FOIR ratios.", "Priority": "Must Have"},
            {"ID": "FR-14", "Feature": "STP Engine", "Requirement": "Auto-sanction Tier 1 applicants (Score ≥750, DTI ≤35%, Loan ≤$25k) in <10s.", "Priority": "Must Have"},
            {"ID": "FR-16", "Feature": "Underwriter UI", "Requirement": "Unified decision workbench displaying risk highlights and pre-calculated ratios.", "Priority": "Must Have"},
            {"ID": "FR-17", "Feature": "Mobile e-Sign", "Requirement": "Digital sanction letter with mobile OTP cryptographic e-Signature.", "Priority": "Must Have"},
            {"ID": "FR-19", "Feature": "Core Payment API", "Requirement": "Automated funds release instruction to Core Banking payment rails (<15 min).", "Priority": "Must Have"},
            {"ID": "FR-20", "Feature": "SLA Monitor", "Requirement": "Visual 5-stage customer tracker and internal SLA alerts at 50% & 75% thresholds.", "Priority": "Must Have"}
        ]
        st.dataframe(pd.DataFrame(frs), use_container_width=True, hide_index=True)

    with r_tab3:
        nfrs = [
            {"ID": "NFR-01", "Category": "Security", "Standard": "AES-256 encryption at rest, TLS 1.3 in transit, strict RBAC and MFA for staff.", "Target": "Zero unauthorized access"},
            {"ID": "NFR-02", "Category": "Performance", "Standard": "External API calls (Bureau, National ID, AML) complete in < 3.0s (95th percentile).", "Target": "Sub-3s API latency"},
            {"ID": "NFR-03", "Category": "Availability", "Standard": "99.9% uptime during retail operating hours (24/7 digital intake).", "Target": "<8.76h downtime/yr"},
            {"ID": "NFR-04", "Category": "Auditability", "Standard": "Immutable 7-year audit trail recording every user action, score query, and decision.", "Target": "100% compliance pass"}
        ]
        st.dataframe(pd.DataFrame(nfrs), use_container_width=True, hide_index=True)

    with r_tab4:
        st.markdown("### Persona User Stories & Gherkin Acceptance Criteria")
        with st.expander("👤 US-01: Dynamic Document Checklist (Customer: Sarah)", expanded=True):
            st.info("**As a** loan applicant, **I want** to see a clear, dynamic checklist tailored to my profile, **so that** I submit the right documents first time.")
            st.code("""Scenario: Salaried applicant views checklist
Given an applicant selects 'Salaried Employee'
When the applicant navigates to the Document Upload screen
Then the system displays: Photo ID, Last 3 Months Salary Slips, Last 6 Months Bank Statement
And the 'Submit' button is disabled until all mandatory items contain valid uploads.""", language="gherkin")

        with st.expander("👤 US-02: Automated Document Pre-Validation (Customer: Sarah)"):
            st.info("**As a** loan applicant, **I want** immediate feedback if my upload is blurry, **so that** I can rectify it instantly.")
            st.code("""Scenario: Low-resolution document rejected at intake
Given an applicant is on the upload screen
When the applicant uploads an image below 200 DPI resolution
Then the system rejects the file immediately prior to storage
And displays inline alert: 'Document is blurry. Please upload a clear scan (minimum 300 DPI)'.""", language="gherkin")

        with st.expander("🛡️ US-10: Straight-Through-Processing (Underwriter: Victor)"):
            st.info("**As an** Underwriter, **I want** qualified low-risk Tier 1 loans to be auto-approved via STP, **so that** my worklist is reserved for complex files.")
            st.code("""Scenario: Tier 1 applicant qualifies for STP auto-approval
Given an applicant with Credit Score 780, DTI 28%, and requested loan $15,000
When the Credit Decision Engine evaluates Tier 1 STP policy rules
Then the system verifies all STP criteria are met
And transitions state to SANCTION_APPROVED in < 10 seconds without human queue assignment.""", language="gherkin")

# ---------------------------------------------------------
# 8. Traceability Matrix (RTM)
# ---------------------------------------------------------
elif menu == "🔗 Traceability Matrix (RTM)":
    st.title("Requirements Traceability Matrix (RTM)")
    st.write("Unbroken bi-directional traceability linking every Business Problem to its Root Cause, Requirements, Solution, and KPI.")

    rtm_data = [
        {"Problem": "P-01: High Document Rework (35%)", "Root Cause": "Intake decoupled from validation; static checklist", "Req IDs": "BR-03, FR-02, FR-04", "User Story": "US-01, US-02", "Solution": "Dynamic Checklist & Client-Side DPI Pre-Validation Engine", "Target KPI Impact": "Rework: 35% -> 8% (-77%)"},
        {"Problem": "P-02: Extended Turnaround (5.0 Days)", "Root Cause": "Undifferentiated FIFO manual underwriting queue", "Req IDs": "BR-01, BR-05, FR-14", "User Story": "US-09, US-10", "Solution": "Credit Decision Engine & Tier 1 STP Auto-Approval", "Target KPI Impact": "TAT: 5.0d -> 1.8d (-64%)"},
        {"Problem": "P-03: 4 Disconnected Systems (11.5% errors)", "Root Cause": "Siloed legacy databases without API middleware bus", "Req IDs": "BR-06, FR-08, FR-19", "User Story": "US-06, US-07", "Solution": "Unified RESTful API Microservices Orchestrator", "Target KPI Impact": "Touchpoints: 12 -> 4 (-66%)"},
        {"Problem": "P-04: High Inquiries (3.2 calls / loan)", "Root Cause": "Opaque black-box wait; zero progress updates", "Req IDs": "BR-04, BR-09, FR-20", "User Story": "US-03, US-04", "Solution": "24/7 Self-Service Milestone Hub & Event Push Alerts", "Target KPI Impact": "Status Calls: 3.2 -> 0.6 (-81%)"},
        {"Problem": "P-05: Frequent SLA Breaches (14%)", "Root Cause": "Reactive tracking; lack of pre-breach alerts", "Req IDs": "BR-07, FR-20, FR-15", "User Story": "US-14, US-11", "Solution": "Proactive SLA Countdown Engine (50% & 75% Alerts)", "Target KPI Impact": "SLA Breach: 14% -> 4% (-71%)"},
        {"Problem": "P-06: Manual KYC & AML Bottleneck", "Root Cause": "Manual copy-pasting into government portals", "Req IDs": "BR-08, FR-09, FR-10", "User Story": "US-08", "Solution": "Direct National ID & Real-Time AML API Screening", "Target KPI Impact": "KYC Time: 4h -> <5 min (-98%)"},
        {"Problem": "P-07: Paper Agreement & Settlement Delay", "Root Cause": "Physical branch wet-ink signing mandates", "Req IDs": "BR-10, FR-17, FR-19", "User Story": "US-04, US-13", "Solution": "Mobile OTP e-Signature & Core Banking Payment Rails", "Target KPI Impact": "Disbursement: 24h -> <15 min (-99%)"}
    ]
    st.dataframe(pd.DataFrame(rtm_data), use_container_width=True, hide_index=True)

# ---------------------------------------------------------
# 9. Banking Business Rules
# ---------------------------------------------------------
elif menu == "⚖️ Banking Business Rules":
    st.title("Banking Business Rules Catalog (BR-Rule)")
    st.write("12 core regulatory mandates, risk thresholds, and credit decisioning boundaries.")

    rules_data = [
        {"ID": "BR-RULE-01", "Category": "Compliance", "Name": "Mandatory KYC Completion Prior to Underwriting", "Rule": "No application shall proceed to credit scoring or decisioning until CDD and AML/PEP screening have passed.", "Enforcement": "Hard system lock at KYC_PENDING."},
        {"ID": "BR-RULE-02", "Category": "Eligibility", "Name": "Minimum Age & Residency Eligibility", "Rule": "Applicant must be between 21 and 60 years old at loan maturity and a citizen or permanent resident.", "Enforcement": "Automated form validation."},
        {"ID": "BR-RULE-03", "Category": "Credit Risk", "Name": "Minimum Net Monthly Income Threshold", "Rule": "Verified net monthly income of ≥ $2,500 (Salaried) or net annual profit of ≥ $40,000 (Self-Employed).", "Enforcement": "Calculated from OCR salary slips / tax returns."},
        {"ID": "BR-RULE-04", "Category": "Credit Risk", "Name": "Employment Stability Mandate", "Rule": "Salaried: ≥ 6 months with current employer; Self-Employed: ≥ 24 months operating history.", "Enforcement": "Cross-referenced with employer reference data."},
        {"ID": "BR-RULE-05", "Category": "Credit Risk", "Name": "Debt-to-Income (DTI) Hard Ceiling", "Rule": "Total monthly debt obligations (including proposed loan EMI) must not exceed 50.0% of net monthly income.", "Enforcement": "DTI > 50% triggers automatic decline."},
        {"ID": "BR-RULE-06", "Category": "Decisioning", "Name": "Automated Straight-Through Processing (STP) Eligibility", "Rule": "STP Approval granted IF: Score ≥ 750, DTI ≤ 35.0%, Loan ≤ $25,000, Employment ≥ 12m, clean KYC.", "Enforcement": "Decision Engine executes instant approval."},
        {"ID": "BR-RULE-07", "Category": "Decisioning", "Name": "Mandatory Human Underwriter Review Thresholds", "Rule": "Score 650–749, OR DTI 36–50%, OR Loan > $25,000, OR Self-Employed MUST route to Underwriter.", "Enforcement": "Workflow routes to Underwriter Worklist."},
        {"ID": "BR-RULE-08", "Category": "Credit Risk", "Name": "Automatic Hard Decline Criteria", "Rule": "Auto-decline if: Credit Score < 600, active bankruptcy, >90 DPD delinquency in 24m, or fraudulent docs.", "Enforcement": "Transitions to DECLINED with adverse codes."},
        {"ID": "BR-RULE-09", "Category": "Governance", "Name": "Delegated Lending Authority (DLA) Tiers", "Rule": "Junior Underwriter: up to $15k; Senior Underwriter: up to $35k; Credit Committee: > $35k or waivers.", "Enforcement": "RBAC limits approval action buttons."},
        {"ID": "BR-RULE-10", "Category": "Compliance", "Name": "Mandatory Rejection & Adverse Action Codes", "Rule": "Any credit decline or policy override must record standardized reason codes and min 25-character rationale.", "Enforcement": "Form validation requires reason codes."},
        {"ID": "BR-RULE-11", "Category": "Governance", "Name": "Operational SLA Timeframes & Escalation", "Rule": "Doc Review: 4h; KYC: 4h; Underwriting: 8h; Disbursement: 2h. 75% timer breach triggers Team Lead alert.", "Enforcement": "Real-time background daemon."},
        {"ID": "BR-RULE-12", "Category": "Governance", "Name": "Disbursement Lock & Pre-Disbursement Verification", "Rule": "Funds locked until e-Sign verified, direct debit active, and account confirmed in applicant legal name.", "Enforcement": "Core Banking API payment release gated."}
    ]
    st.dataframe(pd.DataFrame(rules_data), use_container_width=True, hide_index=True)

# ---------------------------------------------------------
# 10. KPIs & Scenario Simulator
# ---------------------------------------------------------
elif menu == "📈 KPIs & Scenario Simulator":
    st.title("KPI Framework & Operational Scenario Simulator")
    st.write("Balanced scorecard measuring operational speed, submission quality, and customer satisfaction.")

    # Plotly Benchmark Chart
    metrics_names = ['TAT (Days)', 'Rework Rate (%)', 'FTR Rate (%)', 'SLA Breach (%)', 'Status Calls/App', 'CSAT Score (%)']
    baseline_vals = [5.0, 35.0, 48.0, 14.0, 3.2, 61.0]
    target_vals = [1.8, 8.0, 82.0, 4.0, 0.6, 88.0]

    fig = go.Figure(data=[
        go.Bar(name='AS-IS Baseline', x=metrics_names, y=baseline_vals, marker_color='#ef4444'),
        go.Bar(name='TO-BE Target', x=metrics_names, y=target_vals, marker_color='#10b981')
    ])
    fig.update_layout(barmode='group', title="Baseline vs. Target KPI Benchmark", height=400, template="plotly_white")
    st.plotly_chart(fig, use_container_width=True)

    st.markdown("---")
    st.markdown("### 🎛️ Interactive Operational Scenario Simulator")
    st.caption("Illustrative scenario model — test varying monthly application volumes and STP adoption rates.")

    c_sim1, c_sim2 = st.columns(2)
    with c_sim1:
        vol = st.slider("Monthly Application Volume:", min_value=2000, max_value=25000, value=10000, step=1000)
        stp_pct = st.slider("Straight-Through Processing (STP) Rate (%):", min_value=10, max_value=60, value=38, step=2)
        rework_pct = st.slider("Pre-Validation Rework Elimination (%):", min_value=30, max_value=90, value=77, step=5)

    # Calculation
    base_rework = int(vol * 0.35)
    proj_rework = int(vol * (0.35 * (1 - rework_pct / 100)))
    rework_eliminated = base_rework - proj_rework
    stp_loans = int(vol * (stp_pct / 100))
    hours_saved = int(vol * (40.0 - 14.4))
    calls_saved = int(vol * (3.2 - 0.6))

    with c_sim2:
        st.markdown("#### Projected Monthly Operational Gains:")
        s1, s2 = st.columns(2)
        s1.metric("Rework Files Avoided", f"{rework_eliminated:,}", "Files / month")
        s2.metric("Instant STP Approvals", f"{stp_loans:,}", "<10s Sanctions")
        
        s3, s4 = st.columns(2)
        s3.metric("Staff Hours Saved", f"{hours_saved:,} hrs", "Capacity liberated")
        s4.metric("Inquiry Calls Avoided", f"{calls_saved:,}", "Branch calls saved")

# ---------------------------------------------------------
# 11. Roadmap & Change Management
# ---------------------------------------------------------
elif menu == "🗺️ Roadmap & Change Management":
    st.title("Phased Implementation Roadmap & ADKAR Change Strategy")
    st.write("12-month delivery plan avoiding big-bang rollout risk, backed by structured change enablement.")

    c1, c2, c3, c4 = st.columns(4)
    with c1:
        st.info("### Phase 1 (M1–3)\n**Standardization & Governance**\n- Document Requirement Matrix across 45 branches\n- Departmental SLA Contracts\n- Codified Delegated Authority (DLA)\n- Adverse action codes\n\n*Gate: Credit Risk sign-off*")
    with c2:
        st.warning("### Phase 2 (M3–6)\n**Digital Enablement**\n- Responsive Web & Mobile Portal\n- Automated Pre-Validation (DPI ≥ 300)\n- 24/7 Self-Service Tracker\n- Barcode branch scanning\n\n*Gate: 5-branch pilot launch*")
    with c3:
        st.success("### Phase 3 (M6–9)\n**Workflow & STP**\n- National ID & AML REST APIs\n- Credit Bureau API & DTI Engine\n- Tier 1 STP Auto-Approval\n- Underwriter Workbench & e-Sign\n\n*Gate: First 500 STP loans*")
    with c4:
        st.info("### Phase 4 (M9–12)\n**Enterprise Scale**\n- Real-time SLA countdown alerts\n- Core Banking API disbursement (<15m)\n- Operations Analytics Dashboard\n- CSAT survey automation\n\n*Gate: Full network rollout*")

    st.markdown("---")
    st.markdown("### ADKAR Change Management Framework")
    a1, a2, a3, a4, a5 = st.columns(5)
    a1.markdown("**A - Awareness**\nBi-weekly executive townhalls explaining FinTech competitor benchmarks.")
    a2.markdown("**D - Desire**\nRMs save 2+ hours daily from paperwork to focus on client advisory and bonuses.")
    a3.markdown("**K - Knowledge**\nRole-based simulation training on Underwriter Workbench and tablet scanning.")
    a4.markdown("**A - Ability**\n2 'Digital Champions' in each of the 45 branches for hands-on peer coaching.")
    a5.markdown("**R - Reinforcement**\nTying branch operational KPIs to digital adoption and FTR intake rates.")

# ---------------------------------------------------------
# 12. 5x5 Risk Register
# ---------------------------------------------------------
elif menu == "🛡️ 5x5 Risk Register":
    st.title("Project Risk Register (5x5 Matrix)")
    st.write("Proactive assessment of technical, credit risk, operational, and change management risks.")

    risks = [
        {"ID": "RSK-01", "Title": "Legacy Core Banking Integration Delays", "Category": "Tech / Arch", "Prob": 4, "Imp": 4, "Score": 16, "Severity": "High", "Mitigation": "Deploy API Gateway middleware; early interface mock testing.", "Owner": "Lead IT Architect"},
        {"ID": "RSK-02", "Title": "OCR Data Extraction Inaccuracy", "Category": "Tech / Data", "Prob": 3, "Imp": 4, "Score": 12, "Severity": "High", "Mitigation": "Client-side DPI validation (≥300 DPI); <85% confidence routes to human.", "Owner": "Lead Business Analyst"},
        {"ID": "RSK-03", "Title": "Staff Workflow Adoption Resistance", "Category": "People / Org", "Prob": 4, "Imp": 3, "Score": 12, "Severity": "High", "Mitigation": "Branch Digital Champions; simulation training; KPIs tied to adoption.", "Owner": "Head of Change Mgmt"},
        {"ID": "RSK-04", "Title": "Credit Model Risk & Excessive STP Default", "Category": "Credit Risk", "Prob": 2, "Imp": 5, "Score": 10, "Severity": "High", "Mitigation": "Conservative Tier 1 STP rules (Score ≥750, DTI ≤35%); monthly back-testing.", "Owner": "Head of Credit Risk"},
        {"ID": "RSK-05", "Title": "External Regulatory API Outages", "Category": "Operational", "Prob": 3, "Imp": 3, "Score": 9, "Severity": "Medium", "Mitigation": "Asynchronous retry queues; fallback to secondary bureau providers.", "Owner": "IT Infrastructure Lead"},
        {"ID": "RSK-06", "Title": "Customer Digital Onboarding Drop-Off", "Category": "CX", "Prob": 3, "Imp": 3, "Score": 9, "Severity": "Medium", "Mitigation": "Assisted digital branch onboarding using branch tablets.", "Owner": "Head of Branches"},
        {"ID": "RSK-07", "Title": "Data Privacy & PII Leakage Risk", "Category": "InfoSec", "Prob": 1, "Imp": 5, "Score": 5, "Severity": "Medium", "Mitigation": "AES-256 at rest, TLS 1.3 in transit, strict RBAC, automated PII masking.", "Owner": "CISO"},
        {"ID": "RSK-08", "Title": "Fair Lending & Algorithmic Bias Risk", "Category": "Compliance", "Prob": 1, "Imp": 5, "Score": 5, "Severity": "Medium", "Mitigation": "Quarterly independent algorithmic fairness audits; financial-only parameters.", "Owner": "Chief Compliance Officer"}
    ]
    st.dataframe(pd.DataFrame(risks), use_container_width=True, hide_index=True)

# ---------------------------------------------------------
# 13. Executive Recommendation
# ---------------------------------------------------------
elif menu == "🎯 Executive Recommendation":
    st.title("Strategic Recommendation & Business Analysis Competencies")
    
    st.markdown("""
    ### Executive Recommendation Summary
    NovaBank can transform its Personal Loan Origination from an operational bottleneck into a competitive differentiator by transitioning to an **Automation-First, Exception-Based Operating Model**:
    
    1. **Deploy Client-Side Pre-Validation:** Eliminate 77% of document rework by validating resolution (≥300 DPI) and document completeness at the point of customer upload.
    2. **Activate Automated Straight-Through-Processing (STP):** Approve ~38% of qualified low-risk applicants (Score ≥750, DTI ≤35%) in under 10 seconds with zero human touch.
    3. **Empower Underwriters on Exception Workbench:** Provide licensed underwriters with pre-calculated ratios and bureau highlights for complex/high-risk files.
    4. **Instant e-Sign & Disbursement:** Shorten post-approval settlement from 24 hours to < 15 minutes via mobile OTP e-Signature and Core Banking payment rails.
    5. **Execute a 4-Phase Phased Roadmap:** Deliver incremental value across 12 months with zero regulatory compromise.
    """)

    st.markdown("---")
    st.markdown("### Core Business Analyst Competencies Demonstrated")
    c1, c2 = st.columns(2)
    with c1:
        st.markdown("""
        - **1. Business Problem Scoping:** Baseline metrics & scope boundaries
        - **2. Stakeholder Governance:** 11-stakeholder matrix & 2x2 grid
        - **3. BPMN Process Modeling:** 8-swimlane AS-IS vs TO-BE flows
        - **4. Root-Cause Diagnostics:** Multi-tier 5 Whys & 6M Fishbone
        - **5. Operational Gap Analysis:** 12-point structured gap matrix
        """)
    with c2:
        st.markdown("""
        - **6. Requirements Engineering:** BRD, FRD, NFRs & Business Rules
        - **7. Agile User Stories:** Persona stories with Gherkin Acceptance Criteria
        - **8. Requirements Traceability:** Unbroken Problem-to-KPI RTM
        - **9. KPI Scorecard Modeling:** Mathematical formulas & simulation
        - **10. Risk & Change Management:** ADKAR transition & 5x5 Risk Register
        """)
