import streamlit as st
import pandas as pd
import numpy as np
import plotly.graph_objects as go

# ---------------------------------------------------------
# Page Setup & Theme Customization
# ---------------------------------------------------------
st.set_page_config(
    page_title="NovaBank — Banking Loan Origination Optimization | BA Case Study",
    page_icon="🏦",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Premium McKinsey / Enterprise Design Styling
st.markdown("""
<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
    
    html, body, [class*="css"] {
        font-family: 'Inter', sans-serif;
    }
    
    .stApp {
        background-color: #f8fafc;
    }

    /* Executive Hero Header */
    .hero-banner {
        background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
        border-radius: 16px;
        padding: 32px 36px;
        color: white;
        margin-bottom: 24px;
        border: 1px solid #334155;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
    }
    
    .hero-badge {
        display: inline-block;
        padding: 4px 12px;
        background: rgba(59, 130, 246, 0.15);
        color: #60a5fa;
        border: 1px solid rgba(59, 130, 246, 0.3);
        border-radius: 9999px;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 12px;
    }

    .hero-title {
        font-size: 32px;
        font-weight: 800;
        letter-spacing: -0.02em;
        margin-bottom: 8px;
        background: linear-gradient(90deg, #ffffff, #93c5fd, #6ee7b7);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .hero-subtitle {
        font-size: 15px;
        color: #94a3b8;
        max-width: 800px;
        line-height: 1.6;
        margin-bottom: 20px;
    }

    /* Executive KPI Cards */
    .kpi-card {
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 18px 20px;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
        transition: all 0.2s ease;
    }
    .kpi-card:hover {
        border-color: #cbd5e1;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.07);
    }
    .kpi-label {
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #64748b;
        margin-bottom: 6px;
    }
    .kpi-value-row {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    }
    .kpi-value {
        font-size: 24px;
        font-weight: 800;
        color: #0f172a;
    }
    .kpi-delta-good {
        font-size: 12px;
        font-weight: 700;
        color: #059669;
        background: #ecfdf5;
        padding: 2px 8px;
        border-radius: 6px;
        border: 1px solid #a7f3d0;
    }
    .kpi-delta-neutral {
        font-size: 12px;
        font-weight: 700;
        color: #2563eb;
        background: #eff6ff;
        padding: 2px 8px;
        border-radius: 6px;
        border: 1px solid #bfdbfe;
    }

    /* Content Cards */
    .glass-card {
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 24px;
        margin-bottom: 20px;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
    }
    
    .card-header-tag {
        font-size: 11px;
        font-weight: 700;
        color: #2563eb;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 4px;
    }

    .card-title {
        font-size: 20px;
        font-weight: 700;
        color: #0f172a;
        margin-bottom: 12px;
    }

    /* Badge Tags */
    .badge-must {
        background: #fee2e2;
        color: #991b1b;
        border: 1px solid #fecaca;
        font-weight: 700;
        padding: 3px 8px;
        border-radius: 6px;
        font-size: 11px;
    }
    .badge-should {
        background: #fef3c7;
        color: #92400e;
        border: 1px solid #fde68a;
        font-weight: 700;
        padding: 3px 8px;
        border-radius: 6px;
        font-size: 11px;
    }
    .badge-blue {
        background: #eff6ff;
        color: #1e40af;
        border: 1px solid #dbeafe;
        font-weight: 700;
        padding: 3px 8px;
        border-radius: 6px;
        font-size: 11px;
    }
    .badge-green {
        background: #ecfdf5;
        color: #065f46;
        border: 1px solid #a7f3d0;
        font-weight: 700;
        padding: 3px 8px;
        border-radius: 6px;
        font-size: 11px;
    }

    /* Disclaimer */
    .disclaimer-strip {
        background: rgba(245, 158, 11, 0.08);
        border: 1px solid rgba(245, 158, 11, 0.25);
        color: #b45309;
        padding: 8px 14px;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 600;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 8px;
    }
</style>
""", unsafe_allow_html=True)

# ---------------------------------------------------------
# Sidebar Navigation
# ---------------------------------------------------------
with st.sidebar:
    st.markdown("""
    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
        <div style="width: 40px; height: 40px; border-radius: 8px; background: #2563eb; color: white; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 18px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            NB
        </div>
        <div>
            <div style="font-weight: 800; font-size: 16px; color: #0f172a; line-height: 1.2;">NovaBank</div>
            <div style="font-size: 11px; color: #64748b;">BA Case Study Portfolio</div>
        </div>
    </div>
    """, unsafe_allow_html=True)
    
    st.markdown("""
    <div style="background: #f1f5f9; padding: 8px 12px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 16px; font-size: 11px; color: #475569;">
        <div><strong>Role:</strong> Business Analyst</div>
        <div><strong>Focus:</strong> Process Optimization</div>
    </div>
    """, unsafe_allow_html=True)

    nav = st.radio(
        "Explore Case Study Artifacts:",
        [
            "🏠 Executive Summary",
            "🏢 Context & Scope",
            "👥 Stakeholder Governance",
            "🔄 AS-IS vs. TO-BE Process",
            "🔍 Root-Cause (5 Whys)",
            "📊 Operational Gap Matrix",
            "📋 Requirements Specification",
            "🔗 Traceability Matrix (RTM)",
            "⚖️ Banking Business Rules",
            "📈 KPIs & Scenario Simulator",
            "🗺️ Roadmap & Change Management",
            "🛡️ 5x5 Risk Register",
            "🎯 Strategic Recommendation"
        ]
    )

    st.markdown("---")
    st.caption("Illustrative assumptions for portfolio case study — not real bank data.")

# Disclaimer banner on top of every page
st.markdown("""
<div class="disclaimer-strip">
    <span>⚠️</span>
    <span><strong>PORTFOLIO CASE STUDY:</strong> Illustrative assumptions for portfolio case study — not real bank data.</span>
</div>
""", unsafe_allow_html=True)

# ---------------------------------------------------------
# 1. Executive Summary
# ---------------------------------------------------------
if nav == "🏠 Executive Summary":
    st.markdown("""
    <div class="hero-banner">
        <span class="hero-badge">Retail Banking Case Study</span>
        <div class="hero-title">Banking Loan Origination Process Optimization</div>
        <div style="font-size: 18px; font-weight: 600; color: #cbd5e1; margin-bottom: 12px;">
            AS-IS Process Analysis, Gap Assessment & TO-BE Process Design
        </div>
        <div class="hero-subtitle">
            A comprehensive Business Analyst portfolio engagement addressing cycle-time delays, high document rework, and system fragmentation across NovaBank's unsecured personal lending operations.
        </div>
    </div>
    """, unsafe_allow_html=True)

    # 4 Executive KPI Cards
    col1, col2, col3, col4 = st.columns(4)
    with col1:
        st.markdown("""
        <div class="kpi-card">
            <div class="kpi-label">Average Loan TAT</div>
            <div class="kpi-value-row">
                <span class="kpi-value">1.8 Days</span>
                <span class="kpi-delta-good">-64% (from 5.0d)</span>
            </div>
            <div style="font-size: 11px; color: #94a3b8; margin-top: 6px;">40.0h down to 14.4h</div>
        </div>
        """, unsafe_allow_html=True)
    with col2:
        st.markdown("""
        <div class="kpi-card">
            <div class="kpi-label">Document Rework Rate</div>
            <div class="kpi-value-row">
                <span class="kpi-value">8.0%</span>
                <span class="kpi-delta-good">-77% (from 35%)</span>
            </div>
            <div style="font-size: 11px; color: #94a3b8; margin-top: 6px;">Pre-validation at upload</div>
        </div>
        """, unsafe_allow_html=True)
    with col3:
        st.markdown("""
        <div class="kpi-card">
            <div class="kpi-label">First-Time-Right (FTR)</div>
            <div class="kpi-value-row">
                <span class="kpi-value">82.0%</span>
                <span class="kpi-delta-good">+71% (from 48%)</span>
            </div>
            <div style="font-size: 11px; color: #94a3b8; margin-top: 6px;">Clean initial intakes</div>
        </div>
        """, unsafe_allow_html=True)
    with col4:
        st.markdown("""
        <div class="kpi-card">
            <div class="kpi-label">SLA Breach Rate</div>
            <div class="kpi-value-row">
                <span class="kpi-value">4.0%</span>
                <span class="kpi-delta-good">-71% (from 14%)</span>
            </div>
            <div style="font-size: 11px; color: #94a3b8; margin-top: 6px;">Proactive 75% alerts</div>
        </div>
        """, unsafe_allow_html=True)

    st.markdown("<div style='height: 24px;'></div>", unsafe_allow_html=True)

    # 60-Second Recruiter Pitch Card
    st.markdown("""
    <div class="glass-card">
        <div class="card-header-tag">Core BA Summary</div>
        <div class="card-title">⚡ 60-Second Executive Summary</div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-top: 16px;">
            <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <div style="font-size: 11px; font-weight: 700; color: #dc2626; text-transform: uppercase;">1. Problem</div>
                <div style="font-size: 13px; color: #334155; margin-top: 6px; line-height: 1.5;">5.0-day TAT, 35% document rework, 14% SLA breaches across 10,000 monthly applications.</div>
            </div>
            <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <div style="font-size: 11px; font-weight: 700; color: #d97706; text-transform: uppercase;">2. Root Causes</div>
                <div style="font-size: 13px; color: #334155; margin-top: 6px; line-height: 1.5;">Unassisted intake, 4 disconnected legacy systems, undifferentiated FIFO underwriting queue.</div>
            </div>
            <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <div style="font-size: 11px; font-weight: 700; color: #2563eb; text-transform: uppercase;">3. TO-BE Solution</div>
                <div style="font-size: 13px; color: #334155; margin-top: 6px; line-height: 1.5;">Automation-first STP for low-risk Tier 1 + Underwriter Workbench for complex files.</div>
            </div>
            <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <div style="font-size: 11px; font-weight: 700; color: #059669; text-transform: uppercase;">4. Impact</div>
                <div style="font-size: 13px; color: #334155; margin-top: 6px; line-height: 1.5;">TAT drops to 1.8 days (-64%), rework cut to 8%, CSAT surges to 88% (+44%).</div>
            </div>
        </div>
    </div>
    """, unsafe_allow_html=True)

# ---------------------------------------------------------
# 2. Context & Scope
# ---------------------------------------------------------
elif nav == "🏢 Context & Scope":
    st.markdown("""
    <div class="glass-card">
        <div class="card-header-tag">Operational Background</div>
        <div class="card-title">NovaBank Problem Statement & Baseline Metrics</div>
        <p style="font-size: 14px; color: #475569; line-height: 1.6;">
            NovaBank operates 45 retail branch locations alongside digital web and mobile application channels. Over the past 12 months, loan application volume grew by 14%, but operational cycle times deteriorated. While FinTech and neo-bank competitors approve and fund personal loans within 24 to 48 hours, NovaBank required <strong>5.0 business days (40.0 working hours)</strong>.
        </p>
    </div>
    """, unsafe_allow_html=True)

    c1, c2 = st.columns(2)
    with c1:
        st.markdown("""
        <div class="glass-card" style="border-left: 4px solid #10b981;">
            <div style="font-size: 14px; font-weight: 700; color: #065f46; margin-bottom: 12px;">✅ In-Scope (Origination Lifecycle)</div>
            <ul style="font-size: 13px; color: #334155; line-height: 1.8; margin-left: -20px;">
                <li>Omni-channel application capture (Branch tablet & Customer web portal)</li>
                <li>Dynamic document checklists & real-time client-side pre-validation (DPI ≥ 300)</li>
                <li>Automated KYC identity registry & AML watchlist screening REST APIs</li>
                <li>Credit Bureau API ingestion & automated Debt-to-Income (DTI) computation</li>
                <li>Credit risk decisioning (Straight-Through Processing for Tier 1 low risk)</li>
                <li>Licensed Underwriter Unified Decision Workbench and adverse action logging</li>
                <li>Digital sanction letter issuance and mobile OTP cryptographic e-Sign</li>
                <li>Automated payment release instruction to Core Banking payment rails</li>
                <li>Real-time 24/7 customer status tracker & proactive SLA monitors</li>
            </ul>
        </div>
        """, unsafe_allow_html=True)

    with c2:
        st.markdown("""
        <div class="glass-card" style="border-left: 4px solid #94a3b8;">
            <div style="font-size: 14px; font-weight: 700; color: #475569; margin-bottom: 12px;">❌ Out-of-Scope (Explicit Exclusions)</div>
            <ul style="font-size: 13px; color: #64748b; line-height: 1.8; margin-left: -20px;">
                <li>Post-disbursement loan servicing and monthly billing statements</li>
                <li>Collections, delinquent loan tracking, and legal debt recovery</li>
                <li>Loan restructuring, tenor extensions, and hardship refinancing</li>
                <li>Mortgage and secured asset lending (property valuation, title registry)</li>
                <li>Small business working capital and corporate syndicated debt facilities</li>
                <li>Treasury management and capital adequacy reserve reporting</li>
            </ul>
        </div>
        """, unsafe_allow_html=True)

# ---------------------------------------------------------
# 3. Stakeholder Governance
# ---------------------------------------------------------
elif nav == "👥 Stakeholder Governance":
    st.markdown("""
    <div class="glass-card">
        <div class="card-header-tag">Governance & Engagement</div>
        <div class="card-title">Stakeholder Profile Matrix & 2x2 Power-Interest Grid</div>
        <p style="font-size: 13px; color: #64748b;">Analysis of 11 key stakeholder groups across business, operations, compliance, and enterprise technology.</p>
    </div>
    """, unsafe_allow_html=True)

    stakeholders = [
        {"ID": "STK-01", "Name": "Retail Loan Applicant", "Role": "Borrower", "Quadrant": "Keep Informed", "Influence": "Med", "Interest": "High", "Pain Point": "Opaque 5-day wait times, repetitive doc requests, zero status tracking."},
        {"ID": "STK-02", "Name": "Relationship Manager", "Role": "Branch Sales", "Quadrant": "Keep Informed", "Influence": "Med", "Interest": "High", "Pain Point": "Spends 40% of time chasing missing customer paperwork rather than advising."},
        {"ID": "STK-03", "Name": "Branch Operations Officer", "Role": "Intake Staff", "Quadrant": "Keep Satisfied", "Influence": "High", "Interest": "Med", "Pain Point": "Repetitive manual re-keying across 4 screens; customer walk-in complaints."},
        {"ID": "STK-04", "Name": "Loan Operations Specialist", "Role": "Central Ops", "Quadrant": "Manage Closely", "Influence": "High", "Interest": "High", "Pain Point": "35% rework volume, manual coordination via emails, large backlog queues."},
        {"ID": "STK-05", "Name": "KYC / AML Analyst", "Role": "Compliance", "Quadrant": "Manage Closely", "Influence": "High", "Interest": "High", "Pain Point": "Manual copy-pasting of IDs into government portals; 4h verification latency."},
        {"ID": "STK-06", "Name": "Credit Risk Analyst", "Role": "Risk Desk", "Quadrant": "Manage Closely", "Influence": "High", "Interest": "High", "Pain Point": "Manually calculating ratios on Excel sheets from un-indexed PDF statements."},
        {"ID": "STK-07", "Name": "Senior Underwriter", "Role": "Credit Authority", "Quadrant": "Manage Closely", "Influence": "High", "Interest": "High", "Pain Point": "Mundane low-risk files clutter the queue, creating 9.5 hours of idle queue wait."},
        {"ID": "STK-08", "Name": "Disbursement Officer", "Role": "Settlement", "Quadrant": "Keep Satisfied", "Influence": "High", "Interest": "Med", "Pain Point": "Waiting for physical wet-ink contracts; manual batch payment keying."},
        {"ID": "STK-09", "Name": "Branch Manager", "Role": "Branch Lead", "Quadrant": "Keep Informed", "Influence": "Med", "Interest": "Med", "Pain Point": "14% SLA breaches hurting branch scorecards; customer escalations."},
        {"ID": "STK-10", "Name": "Enterprise IT Architect", "Role": "IT Systems", "Quadrant": "Keep Satisfied", "Influence": "High", "Interest": "Med", "Pain Point": "Maintaining 4 disconnected legacy architectures without modern REST microservices."},
        {"ID": "STK-11", "Name": "Head of Regulatory Compliance", "Role": "Directorate", "Quadrant": "Manage Closely", "Influence": "High", "Interest": "High", "Pain Point": "Ensuring automated decisioning maintains immutable audit logs and Fair Lending compliance."}
    ]
    df_stk = pd.DataFrame(stakeholders)

    q_filter = st.selectbox("Filter by 2x2 Governance Quadrant:", ["All Quadrants", "Manage Closely", "Keep Satisfied", "Keep Informed"])
    if q_filter != "All Quadrants":
        df_show = df_stk[df_stk["Quadrant"] == q_filter]
    else:
        df_show = df_stk

    st.dataframe(df_show, use_container_width=True, hide_index=True)

# ---------------------------------------------------------
# 4. AS-IS vs. TO-BE Process
# ---------------------------------------------------------
elif nav == "🔄 AS-IS vs. TO-BE Process":
    st.markdown("""
    <div class="glass-card">
        <div class="card-header-tag">BPMN Process Modeling</div>
        <div class="card-title">Current-State (AS-IS) vs. Target-State (TO-BE) Dual-Track Model</div>
    </div>
    """, unsafe_allow_html=True)

    tab1, tab2 = st.tabs(["🟢 TO-BE Optimized Dual-Track (1.8 Days)", "🔴 AS-IS Baseline (5.0 Days)"])

    with tab1:
        st.markdown("""
        <div style="background: #ecfdf5; border: 1px solid #a7f3d0; padding: 18px; border-radius: 12px; margin-bottom: 20px;">
            <div style="font-size: 16px; font-weight: 800; color: #065f46;">TO-BE Operating Model: Automation-First + Exception-Based</div>
            <div style="font-size: 13px; color: #047857; margin-top: 4px;">End-to-End Elapsed TAT: <strong>14.4 Working Hours (1.8 Business Days)</strong></div>
        </div>
        """, unsafe_allow_html=True)

        c1, c2, c3, c4 = st.columns(4)
        with c1:
            st.markdown("""
            <div class="glass-card">
                <span class="badge-green">Step 1: Intake</span>
                <div style="font-weight: 700; font-size: 14px; margin: 8px 0 4px 0;">Dynamic Pre-Validation</div>
                <div style="font-size: 12px; color: #64748b;">Instant client-side DPI check (≥300 DPI). Rework cut from 35% to 8%.</div>
            </div>
            """, unsafe_allow_html=True)
        with c2:
            st.markdown("""
            <div class="glass-card">
                <span class="badge-green">Step 2: Compliance</span>
                <div style="font-weight: 700; font-size: 14px; margin: 8px 0 4px 0;">Automated KYC & AML</div>
                <div style="font-size: 12px; color: #64748b;">Real-time REST APIs to National ID & AML screening in <3.0 seconds.</div>
            </div>
            """, unsafe_allow_html=True)
        with c3:
            st.markdown("""
            <div class="glass-card" style="border: 2px solid #10b981;">
                <span class="badge-must">Step 3: Decision</span>
                <div style="font-weight: 700; font-size: 14px; margin: 8px 0 4px 0;">★ 38% STP Approval</div>
                <div style="font-size: 12px; color: #64748b;">Tier 1 approved in <10s. Complex files route to Underwriter Workbench.</div>
            </div>
            """, unsafe_allow_html=True)
        with c4:
            st.markdown("""
            <div class="glass-card">
                <span class="badge-green">Step 4: Settlement</span>
                <div style="font-weight: 700; font-size: 14px; margin: 8px 0 4px 0;">e-Sign & Auto-Disburse</div>
                <div style="font-size: 12px; color: #64748b;">Mobile OTP cryptographic sign + Core Banking API trigger (<15 min).</div>
            </div>
            """, unsafe_allow_html=True)

    with tab2:
        st.markdown("""
        <div style="background: #fef2f2; border: 1px solid #fecaca; padding: 18px; border-radius: 12px; margin-bottom: 20px;">
            <div style="font-size: 16px; font-weight: 800; color: #991b1b;">AS-IS Baseline: 100% Manual Underwriting & Disconnected Systems</div>
            <div style="font-size: 13px; color: #b91c1c; margin-top: 4px;">End-to-End Elapsed TAT: <strong>40.0 Working Hours (5.0 Business Days)</strong> | 32.6h Idle Queue Latency</div>
        </div>
        """, unsafe_allow_html=True)

        c1, c2, c3, c4 = st.columns(4)
        with c1:
            st.markdown("""
            <div class="glass-card">
                <span class="badge-must">Stage 1: Intake (1.5h)</span>
                <div style="font-weight: 700; font-size: 14px; margin: 8px 0 4px 0;">Static Form & Paper</div>
                <div style="font-size: 12px; color: #64748b;">18% missing fields; RM manually re-keys into CRM.</div>
            </div>
            """, unsafe_allow_html=True)
        with c2:
            st.markdown("""
            <div class="glass-card" style="border: 2px solid #ef4444;">
                <span class="badge-must">BOTTLENECK (8.5h)</span>
                <div style="font-weight: 700; font-size: 14px; margin: 8px 0 4px 0;">35% Document Rework</div>
                <div style="font-size: 12px; color: #64748b;">Manual PDF checks. Rejected files cause +48h rework lag.</div>
            </div>
            """, unsafe_allow_html=True)
        with c3:
            st.markdown("""
            <div class="glass-card">
                <span class="badge-must">Stage 3 & 4 (10.5h)</span>
                <div style="font-weight: 700; font-size: 14px; margin: 8px 0 4px 0;">Portal Search & Excel DTI</div>
                <div style="font-size: 12px; color: #64748b;">11.5% copy-paste errors across 4 disconnected systems.</div>
            </div>
            """, unsafe_allow_html=True)
        with c4:
            st.markdown("""
            <div class="glass-card" style="border: 2px solid #ef4444;">
                <span class="badge-must">BOTTLENECK (11.0h)</span>
                <div style="font-weight: 700; font-size: 14px; margin: 8px 0 4px 0;">100% FIFO Manual Queue</div>
                <div style="font-size: 12px; color: #64748b;">9.5 hours idle queue wait + 24h physical wet-ink contract signing.</div>
            </div>
            """, unsafe_allow_html=True)

# ---------------------------------------------------------
# 5. Root-Cause (5 Whys)
# ---------------------------------------------------------
elif nav == "🔍 Root-Cause (5 Whys)":
    st.markdown("""
    <div class="glass-card">
        <div class="card-header-tag">Diagnostic Suite</div>
        <div class="card-title">Multi-Tier 5 Whys Root-Cause Analyses</div>
    </div>
    """, unsafe_allow_html=True)

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

    with st.expander("🔎 5 Whys #2: Why do applications experience 9.5h idle queue wait in Underwriting?"):
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

# ---------------------------------------------------------
# 6. Operational Gap Matrix
# ---------------------------------------------------------
elif nav == "📊 Operational Gap Matrix":
    st.markdown("""
    <div class="glass-card">
        <div class="card-header-tag">Operational Assessment</div>
        <div class="card-title">12-Point AS-IS vs. TO-BE Operational Gap Matrix</div>
    </div>
    """, unsafe_allow_html=True)

    gaps = [
        {"ID": "GAP-01", "Dimension": "Document Intake Quality", "AS-IS Baseline": "Manual inspection 24-48h post-intake", "TO-BE Target": "Real-time client-side pre-validation (DPI ≥ 300)", "Proposed Solution": "Pre-Validation Engine (FR-04)", "Priority": "Must Have"},
        {"ID": "GAP-02", "Dimension": "Checklist Personalization", "AS-IS Baseline": "Static generic document checklist", "TO-BE Target": "Dynamic checklist adapting to Salaried / Self-Employed", "Proposed Solution": "Dynamic Checklist (FR-02)", "Priority": "Must Have"},
        {"ID": "GAP-03", "Dimension": "System Integration", "AS-IS Baseline": "Manual re-keying across 4 systems (11.5% error)", "TO-BE Target": "Unified RESTful API microservices sync", "Proposed Solution": "Enterprise API Gateway (FR-08)", "Priority": "Must Have"},
        {"ID": "GAP-04", "Dimension": "Credit Assessment", "AS-IS Baseline": "Manual bureau downloads & Excel DTI", "TO-BE Target": "Direct API ingestion & algorithmic DTI", "Proposed Solution": "Bureau API + DTI Engine (FR-11, FR-12)", "Priority": "Must Have"},
        {"ID": "GAP-05", "Dimension": "Underwriting Model", "AS-IS Baseline": "100% manual review in single FIFO queue", "TO-BE Target": "Dual-track: Tier 1 STP (38%) + Exception Desk", "Proposed Solution": "Credit Decision Engine (FR-14)", "Priority": "Must Have"},
        {"ID": "GAP-06", "Dimension": "Customer Transparency", "AS-IS Baseline": "Zero tracking; 3.2 inbound calls/loan", "TO-BE Target": "24/7 5-stage self-service tracker", "Proposed Solution": "Customer Milestone Portal (FR-20)", "Priority": "Must Have"},
        {"ID": "GAP-07", "Dimension": "Agreement Signing", "AS-IS Baseline": "Branch physical wet-ink contract sign (24h lag)", "TO-BE Target": "Mobile OTP cryptographic e-Signature", "Proposed Solution": "Mobile e-Sign Integration (FR-17)", "Priority": "Must Have"},
        {"ID": "GAP-08", "Dimension": "Payment Disbursement", "AS-IS Baseline": "Manual batch payment keying into Core", "TO-BE Target": "Automated Core Banking API release (<15 min)", "Proposed Solution": "Core Banking Payment Rail API (FR-19)", "Priority": "Must Have"}
    ]
    st.dataframe(pd.DataFrame(gaps), use_container_width=True, hide_index=True)

# ---------------------------------------------------------
# 7. Requirements Specification
# ---------------------------------------------------------
elif nav == "📋 Requirements Specification":
    st.markdown("""
    <div class="glass-card">
        <div class="card-header-tag">Requirements Engineering</div>
        <div class="card-title">Business, Functional & Non-Functional Specifications</div>
    </div>
    """, unsafe_allow_html=True)

    r_tab1, r_tab2, r_tab3 = st.tabs(["Business Requirements (BR)", "Functional Requirements (FR)", "User Stories & Gherkin AC"])

    with r_tab1:
        brs = [
            {"ID": "BR-01", "Requirement Title": "Turnaround Time (TAT) Reduction", "Description": "Reduce average loan processing TAT from 5.0 to < 2.0 business days.", "Priority": "Must Have"},
            {"ID": "BR-02", "Requirement Title": "First-Time-Right (FTR) Intake", "Description": "Elevate FTR application submissions from 48% to >= 80%.", "Priority": "Must Have"},
            {"ID": "BR-03", "Requirement Title": "Point-of-Ingestion Pre-Validation", "Description": "Automate document verification and resolution pre-validation at intake.", "Priority": "Must Have"},
            {"ID": "BR-04", "Requirement Title": "Real-Time Customer Transparency", "Description": "Provide 24/7 self-service status tracker and automated event push alerts.", "Priority": "Must Have"},
            {"ID": "BR-05", "Requirement Title": "Straight-Through Processing (STP)", "Description": "Enable automated STP approval for qualified low-risk applicants.", "Priority": "Must Have"},
            {"ID": "BR-06", "Requirement Title": "Core System Integration", "Description": "Eliminate duplicate manual data entry across 4 legacy platforms via API bus.", "Priority": "Must Have"}
        ]
        st.dataframe(pd.DataFrame(brs), use_container_width=True, hide_index=True)

    with r_tab2:
        frs = [
            {"ID": "FR-01", "Feature Area": "Digital Intake", "Requirement": "Responsive web & mobile application capture with real-time field validation.", "Priority": "Must Have"},
            {"ID": "FR-02", "Feature Area": "Dynamic Checklist", "Requirement": "Dynamically generate checklist based on employment type (Salaried vs. Self-Employed).", "Priority": "Must Have"},
            {"ID": "FR-04", "Feature Area": "Pre-Validation", "Requirement": "Inspect uploads in real time for DPI resolution (>=300 DPI) and format completeness.", "Priority": "Must Have"},
            {"ID": "FR-08", "Feature Area": "Data Sync", "Requirement": "Synchronize applicant records across CRM, LOS, and Core Banking via REST APIs.", "Priority": "Must Have"},
            {"ID": "FR-11", "Feature Area": "Bureau API", "Requirement": "Direct REST API ingestion of credit bureau file and score in <3.0 seconds.", "Priority": "Must Have"},
            {"ID": "FR-14", "Feature Area": "STP Engine", "Requirement": "Auto-sanction Tier 1 applicants (Score >=750, DTI <=35%, Loan <=$25k) in <10s.", "Priority": "Must Have"},
            {"ID": "FR-17", "Feature Area": "Mobile e-Sign", "Requirement": "Issue digital sanction letter with mobile OTP cryptographic e-Signature.", "Priority": "Must Have"},
            {"ID": "FR-19", "Feature Area": "Core Payment API", "Requirement": "Automate payment release instruction to Core Banking rails (<15 min).", "Priority": "Must Have"}
        ]
        st.dataframe(pd.DataFrame(frs), use_container_width=True, hide_index=True)

    with r_tab3:
        st.markdown("### Gherkin (Given-When-Then) Acceptance Criteria")
        st.code("""Scenario: Tier 1 applicant qualifies for STP auto-approval
Given an applicant with Credit Score 780, DTI 28%, and requested loan $15,000
When the Credit Decision Engine evaluates Tier 1 STP policy rules
Then the system verifies all STP criteria are met
And transitions state to SANCTION_APPROVED in < 10 seconds without human queue assignment.""", language="gherkin")

# ---------------------------------------------------------
# 8. Traceability Matrix (RTM)
# ---------------------------------------------------------
elif nav == "🔗 Traceability Matrix (RTM)":
    st.markdown("""
    <div class="glass-card">
        <div class="card-header-tag">Core BA Deliverable</div>
        <div class="card-title">Requirements Traceability Matrix (RTM)</div>
        <p style="font-size: 13px; color: #64748b;">Unbroken bi-directional traceability linking Business Problems to Root Causes, Requirements, Solutions, and KPI Impact.</p>
    </div>
    """, unsafe_allow_html=True)

    rtm_data = [
        {"Problem": "P-01: High Document Rework (35%)", "Root Cause": "Intake decoupled from validation; static checklist", "Req IDs": "BR-03, FR-02, FR-04", "Solution": "Dynamic Checklist & Client-Side DPI Pre-Validation", "Target KPI Impact": "Rework: 35% -> 8% (-77%)"},
        {"Problem": "P-02: Extended Turnaround (5.0 Days)", "Root Cause": "Undifferentiated FIFO manual underwriting queue", "Req IDs": "BR-01, BR-05, FR-14", "Solution": "Credit Decision Engine & Tier 1 STP Auto-Approval", "Target KPI Impact": "TAT: 5.0d -> 1.8d (-64%)"},
        {"Problem": "P-03: 4 Disconnected Systems (11.5% errors)", "Root Cause": "Siloed legacy databases without API middleware", "Req IDs": "BR-06, FR-08, FR-19", "Solution": "Unified RESTful API Microservices Gateway", "Target KPI Impact": "Touchpoints: 12 -> 4 (-66%)"},
        {"Problem": "P-04: High Inquiries (3.2 calls / loan)", "Root Cause": "Opaque black-box wait; zero progress updates", "Req IDs": "BR-04, BR-09, FR-20", "Solution": "24/7 Self-Service Milestone Hub & Push Alerts", "Target KPI Impact": "Status Calls: 3.2 -> 0.6 (-81%)"},
        {"Problem": "P-05: Frequent SLA Breaches (14%)", "Root Cause": "Reactive tracking; lack of pre-breach alerts", "Req IDs": "BR-07, FR-20", "Solution": "Proactive SLA Countdown Engine (50% & 75% Alerts)", "Target KPI Impact": "SLA Breach: 14% -> 4% (-71%)"}
    ]
    st.dataframe(pd.DataFrame(rtm_data), use_container_width=True, hide_index=True)

# ---------------------------------------------------------
# 9. Banking Business Rules
# ---------------------------------------------------------
elif nav == "⚖️ Banking Business Rules":
    st.markdown("""
    <div class="glass-card">
        <div class="card-header-tag">Policy & Governance</div>
        <div class="card-title">Banking Business Rules Catalog (BR-Rule)</div>
    </div>
    """, unsafe_allow_html=True)

    rules = [
        {"ID": "BR-RULE-01", "Category": "Compliance", "Rule Name": "Mandatory KYC Prior to Underwriting", "Rule Statement": "No application proceeds to credit scoring until CDD and AML/PEP screening have passed.", "Enforcement": "Hard lock at KYC_PENDING."},
        {"ID": "BR-RULE-05", "Category": "Credit Risk", "Rule Name": "Debt-to-Income (DTI) Hard Ceiling", "Rule Statement": "Total monthly debt obligations (including loan EMI) must not exceed 50.0% of net monthly income.", "Enforcement": "DTI > 50% triggers auto-decline."},
        {"ID": "BR-RULE-06", "Category": "Decisioning", "Rule Name": "STP Auto-Approval Eligibility", "Rule Statement": "STP granted IF: Score >= 750, DTI <= 35.0%, Loan <= $25,000, Employment >= 12m, clean KYC.", "Enforcement": "Decision Engine executes auto-approval."},
        {"ID": "BR-RULE-07", "Category": "Decisioning", "Rule Name": "Mandatory Human Review Thresholds", "Rule Statement": "Score 650-749, OR DTI 36-50%, OR Loan > $25,000, OR Self-Employed MUST route to Underwriter.", "Enforcement": "Routes to Underwriter Worklist."}
    ]
    st.dataframe(pd.DataFrame(rules), use_container_width=True, hide_index=True)

# ---------------------------------------------------------
# 10. KPIs & Scenario Simulator
# ---------------------------------------------------------
elif nav == "📈 KPIs & Scenario Simulator":
    st.markdown("""
    <div class="glass-card">
        <div class="card-header-tag">Operational Analytics</div>
        <div class="card-title">KPI Benchmark & Interactive Scenario Simulator</div>
    </div>
    """, unsafe_allow_html=True)

    # Plotly Chart
    metrics_names = ['TAT (Days)', 'Rework Rate (%)', 'FTR Rate (%)', 'SLA Breach (%)', 'Status Calls/App', 'CSAT Score (%)']
    baseline_vals = [5.0, 35.0, 48.0, 14.0, 3.2, 61.0]
    target_vals = [1.8, 8.0, 82.0, 4.0, 0.6, 88.0]

    fig = go.Figure(data=[
        go.Bar(name='AS-IS Baseline', x=metrics_names, y=baseline_vals, marker_color='#ef4444'),
        go.Bar(name='TO-BE Target', x=metrics_names, y=target_vals, marker_color='#10b981')
    ])
    fig.update_layout(barmode='group', title="Baseline (AS-IS) vs. Target (TO-BE) Benchmark", height=380, template="plotly_white")
    st.plotly_chart(fig, use_container_width=True)

    st.markdown("### 🎛️ Interactive Operational Scenario Simulator")
    c_sim1, c_sim2 = st.columns(2)
    with c_sim1:
        vol = st.slider("Monthly Application Volume:", 2000, 25000, 10000, 1000)
        stp_pct = st.slider("Straight-Through Processing (STP) Rate (%):", 10, 60, 38, 2)
        rework_pct = st.slider("Pre-Validation Rework Reduction (%):", 30, 90, 77, 5)

    base_rework = int(vol * 0.35)
    proj_rework = int(vol * (0.35 * (1 - rework_pct / 100)))
    rework_eliminated = base_rework - proj_rework
    stp_loans = int(vol * (stp_pct / 100))
    hours_saved = int(vol * (40.0 - 14.4))

    with c_sim2:
        st.markdown("#### Projected Operational Impact:")
        s1, s2 = st.columns(2)
        s1.metric("Rework Files Saved", f"{rework_eliminated:,}", "files/mo")
        s2.metric("Instant STP Approvals", f"{stp_loans:,}", "<10s sanctions")
        
        s3, s4 = st.columns(2)
        s3.metric("Staff Hours Liberated", f"{hours_saved:,} hrs", "monthly capacity")
        s4.metric("Inbound Calls Avoided", f"{int(vol * (3.2 - 0.6)):,}", "branch calls saved")

# ---------------------------------------------------------
# 11. Roadmap & Change Management
# ---------------------------------------------------------
elif nav == "🗺️ Roadmap & Change Management":
    st.markdown("""
    <div class="glass-card">
        <div class="card-header-tag">Implementation Strategy</div>
        <div class="card-title">12-Month Phased Roadmap & ADKAR Change Enablement</div>
    </div>
    """, unsafe_allow_html=True)

    c1, c2, c3, c4 = st.columns(4)
    with c1:
        st.markdown("""
        <div class="glass-card">
            <span class="badge-blue">Phase 1 (M1–3)</span>
            <div style="font-weight: 700; font-size: 14px; margin: 8px 0 4px 0;">Standardize</div>
            <div style="font-size: 12px; color: #64748b;">Doc requirements matrix, SLA contracts, codified DLA limits.</div>
        </div>
        """, unsafe_allow_html=True)
    with c2:
        st.markdown("""
        <div class="glass-card">
            <span class="badge-blue">Phase 2 (M3–6)</span>
            <div style="font-weight: 700; font-size: 14px; margin: 8px 0 4px 0;">Digitize</div>
            <div style="font-size: 12px; color: #64748b;">Responsive intake portal, pre-validation (DPI ≥ 300), 24/7 tracker.</div>
        </div>
        """, unsafe_allow_html=True)
    with c3:
        st.markdown("""
        <div class="glass-card">
            <span class="badge-blue">Phase 3 (M6–9)</span>
            <div style="font-weight: 700; font-size: 14px; margin: 8px 0 4px 0;">Automate</div>
            <div style="font-size: 12px; color: #64748b;">National ID / AML APIs, Bureau API, 38% STP, Underwriter Workbench.</div>
        </div>
        """, unsafe_allow_html=True)
    with c4:
        st.markdown("""
        <div class="glass-card">
            <span class="badge-blue">Phase 4 (M9–12)</span>
            <div style="font-weight: 700; font-size: 14px; margin: 8px 0 4px 0;">Scale & Optimize</div>
            <div style="font-size: 12px; color: #64748b;">Core Banking API payment release (<15m), proactive SLA alerts, CSAT surveys.</div>
        </div>
        """, unsafe_allow_html=True)

# ---------------------------------------------------------
# 12. 5x5 Risk Register
# ---------------------------------------------------------
elif nav == "🛡️ 5x5 Risk Register":
    st.markdown("""
    <div class="glass-card">
        <div class="card-header-tag">Risk Governance</div>
        <div class="card-title">5x5 Lending Risk Matrix & Mitigation Register</div>
    </div>
    """, unsafe_allow_html=True)

    risks = [
        {"ID": "RSK-01", "Risk Title": "Core Banking Integration Delays", "Category": "Tech", "Prob": 4, "Imp": 4, "Score": 16, "Severity": "High", "Mitigation": "Deploy API Gateway middleware bus; early interface contract mocking."},
        {"ID": "RSK-02", "Risk Title": "OCR Extraction Inaccuracy", "Category": "Tech / Data", "Prob": 3, "Imp": 4, "Score": 12, "Severity": "High", "Mitigation": "Client-side pre-validation (DPI ≥ 300); <85% confidence routes to human."},
        {"ID": "RSK-03", "Risk Title": "Staff Workflow Resistance", "Category": "People", "Prob": 4, "Imp": 3, "Score": 12, "Severity": "High", "Mitigation": "Branch Digital Champions; simulation sandbox training; KPIs tied to adoption."},
        {"ID": "RSK-04", "Risk Title": "Excessive STP Credit Default", "Category": "Credit Risk", "Prob": 2, "Imp": 5, "Score": 10, "Severity": "High", "Mitigation": "Conservative Tier 1 rules (Score ≥750, DTI ≤35%); monthly risk back-testing."}
    ]
    st.dataframe(pd.DataFrame(risks), use_container_width=True, hide_index=True)

# ---------------------------------------------------------
# 13. Strategic Recommendation
# ---------------------------------------------------------
elif nav == "🎯 Strategic Recommendation":
    st.markdown("""
    <div class="hero-banner">
        <span class="hero-badge">Executive Business Case</span>
        <div class="hero-title">Transforming Personal Lending into an Automation-First Operating Model</div>
        <div class="hero-subtitle">
            Deploy client-side pre-validation, API microservices integration, 38% Straight-Through Processing for Tier 1 low-risk loans, and a Unified Decision Workbench for licensed underwriters.
        </div>
    </div>
    """, unsafe_allow_html=True)

    c1, c2 = st.columns(2)
    with c1:
        st.markdown("""
        <div class="glass-card">
            <div style="font-weight: 700; font-size: 14px; color: #0f172a; margin-bottom: 8px;">Key Business Analysis Deliverables</div>
            <ul style="font-size: 13px; color: #475569; line-height: 1.8; margin-left: -20px;">
                <li><strong>Baseline Scoping:</strong> 10k volume, 5.0d TAT, 35% rework</li>
                <li><strong>Stakeholder Matrix:</strong> 11 groups + 2x2 Power-Interest Grid</li>
                <li><strong>Process Modeling:</strong> 8-swimlane AS-IS vs TO-BE BPMN flows</li>
                <li><strong>Root-Cause Analysis:</strong> 5 Whys & 6M Ishikawa Fishbone</li>
                <li><strong>Gap Matrix:</strong> 12-point structured comparison</li>
            </ul>
        </div>
        """, unsafe_allow_html=True)

    with c2:
        st.markdown("""
        <div class="glass-card">
            <div style="font-weight: 700; font-size: 14px; color: #0f172a; margin-bottom: 8px;">Requirements & Governance</div>
            <ul style="font-size: 13px; color: #475569; line-height: 1.8; margin-left: -20px;">
                <li><strong>Requirements:</strong> 10 BRDs, 20 FRDs, 8 NFRs, 12 Business Rules</li>
                <li><strong>Agile Stories:</strong> 15 Persona stories with Gherkin AC</li>
                <li><strong>Traceability:</strong> Unbroken Problem-to-KPI RTM</li>
                <li><strong>KPI Modeling:</strong> Scorecard formulas & scenario simulator</li>
                <li><strong>Change Strategy:</strong> ADKAR enablement & 5x5 Risk Register</li>
            </ul>
        </div>
        """, unsafe_allow_html=True)
