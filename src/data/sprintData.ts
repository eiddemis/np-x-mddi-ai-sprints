import { AgendaItem, ResourceItem, SurveyStat, ParticipantQuote } from '../types';

export const AGENDA_ITEMS: AgendaItem[] = [
  {
    id: 'agenda-1',
    time: '09:00 - 09:30',
    title: 'Welcome & Tool Setup Check',
    subtitle: 'Onboarding & Platform Access Verification',
    description: 'Registration, security onboarding, and ensuring all participating officers successfully authenticate into the required enterprise AI platforms, sandbox environments, and vibe-coding suites.',
    category: 'Morning',
    keyTakeaways: [
      'Verify dual-factor enterprise SSO and secure sandbox connectivity',
      'Initialize developer AI workspace and custom IDE extensions',
      'Briefing on security boundaries, classification guidelines, and safe testing data'
    ],
    toolsUsed: ['Enterprise AI Sandbox', 'VS Code / AI Studio', 'Enterprise SSO Portal'],
    trainerNotes: 'Ensure all participants have active credentials before 09:15 to maintain agenda momentum.'
  },
  {
    id: 'agenda-2',
    time: '09:30 - 11:30',
    title: 'Problem Statement Framing',
    subtitle: 'Root Cause Analysis with 5 Whys & 4Cs Framework',
    description: 'Participants dissect real workplace bottlenecks using structured problem-framing methods (5 Whys and 4Cs) to pinpoint operational pain points before attempting technical solutions.',
    category: 'Morning',
    humanFirstBadge: {
      text: 'Workplace Problem Framing',
      description: 'Clearly identify actual workplace problems first before trying to build an AI solution.'
    },
    keyTakeaways: [
      'Apply 5 Whys to peel back surface symptoms to core friction points',
      'Utilize 4Cs (Context, Problem/Challenge, Core Impact, Capability Required) to map mission value',
      'Isolate high-friction administrative tasks from strategic engineering decisions'
    ],
    toolsUsed: ['5 Whys & 4Cs Framing Template', 'Miro / Digital Whiteboard', 'Operational Workflow Map'],
    trainerNotes: 'Emphasize that AI should never be a solution searching for a problem. Start with human friction.'
  },
  {
    id: 'break-1',
    time: '11:30 - 11:45',
    title: 'BREAK (Tea Break)',
    subtitle: '',
    description: '',
    category: 'Morning',
    isBreak: true,
    keyTakeaways: [],
    toolsUsed: []
  },
  {
    id: 'agenda-3',
    time: '11:45 - 12:30',
    title: '"I Can Do It Too!" (Vibe-Coding)',
    subtitle: 'Guided Live Demonstration on Rapid AI-Assisted Crafting',
    description: 'A hands-on, follow-along live coding demonstration showing how officers with zero software background can build custom interactive utilities, internal tools, and dashboards using natural language vibe-coding.',
    category: 'Morning',
    keyTakeaways: [
      'Master prompt-driven component generation and rapid iterative loops',
      'Transform requirements into working web interfaces in under 20 minutes',
      'Understand basic debugging techniques using conversational AI feedback'
    ],
    toolsUsed: ['Vibe-Coding Assistant', 'AI Studio', 'Tailwind & React Component Snippets'],
    trainerNotes: 'Demonstrate building an automated document classifier from scratch in real time.'
  },
  {
    id: 'break-2',
    time: '12:30 - 13:30',
    title: 'BREAK (LUNCH)',
    subtitle: '',
    description: '',
    category: 'Morning',
    isBreak: true,
    keyTakeaways: [],
    toolsUsed: []
  },
  {
    id: 'agenda-4',
    time: '13:30 - 14:45',
    title: '"I Can Do It Too!" (Enterprise AI)',
    subtitle: 'Prompting, Skills, Custom Connectors & Custom GPTs',
    description: 'Deep dive into advanced prompting strategies, building reusable Skills, integrating enterprise connectors, and assembling tailored Custom GPTs for everyday public sector and office workflows.',
    category: 'Afternoon',
    humanFirstBadge: {
      text: 'Liberating Human Expertise',
      description: 'Automating administrative work gives officers more time for important, mission-centric duties.'
    },
    keyTakeaways: [
      'Design structured prompts with role, context, constraints, and target outputs',
      'Configure enterprise connectors to query internal knowledge bases safely',
      'Create custom workflow GPTs for contract review, technical summarization, and log analysis'
    ],
    toolsUsed: ['Enterprise AI Skills Library', 'Custom GPT Builder', 'Prompt Engineering Cheat Sheet'],
    trainerNotes: 'Highlight privacy-preserving prompt techniques for internal documentation.'
  },
  {
    id: 'agenda-5',
    time: '14:45 - 16:45',
    title: '"We Can Do It!" (Rapid Prototyping)',
    subtitle: 'Collaborative Group Sprint & Hands-on Build (includes Tea Break)',
    description: 'Cross-functional team sprint where participants build functional prototypes addressing their own department bottlenecks. Mentors provide real-time guidance on UI, logic, and output validation. A short tea break is included within this session.',
    category: 'Afternoon',
    humanFirstBadge: {
      text: 'Human Oversight & Accountability',
      description: 'Trainers guide teams to critically check AI outputs, reinforcing that human oversight and accountability are always needed.'
    },
    keyTakeaways: [
      'Collaborate in 4-person teams to assemble a working MVP',
      'Implement human-in-the-loop validation checkpoints for all AI recommendations',
      'Test edge cases, hallucinations, and safety constraints on synthetic test data'
    ],
    toolsUsed: ['Starter Sandbox Repo', 'Rapid Prototyping Kit', 'Human Checkpoint Matrix'],
    trainerNotes: 'Roam tables actively. Challenge teams on how they verify AI outputs against ground truth. Tea break is at trainer discretion within the session.'
  },
  {
    id: 'agenda-6',
    time: '16:45 - 17:45',
    title: 'Showcase & Closing ("Human ROI" Peer Showcase)',
    subtitle: 'Team Pitches, Leadership Panel & Action Commitments',
    description: 'Teams pitch their working prototypes to peers and senior leaders. Pitches are evaluated on "Human ROI"—the quantifiable administrative hours saved and how those hours are reinvested into high-impact public service delivery.',
    category: 'Closing',
    humanFirstBadge: {
      text: 'Human ROI Evaluation',
      description: 'Evaluated on "Human ROI"—pitching saved administrative hours and how that time is reinvested into strategic work.'
    },
    keyTakeaways: [
      '3-minute live prototype demonstration + 2-minute Q&A per team',
      'Articulate Human ROI: Hours saved per officer and strategic engineering impact',
      'Commitment roadmap for deploying prototype to internal pilot trial'
    ],
    toolsUsed: ['Pitch Deck Template', 'Human ROI Metric Calculator', 'Peer Voting Portal'],
    trainerNotes: 'Award trophies for Best Human ROI, Most Innovative Prototype, and Best Security & Governance Guardrails.'
  }
];

export const RESOURCES: ResourceItem[] = [
  {
    id: 'res-01-portfolio-csv',
    fileNumber: '01',
    title: '01 — Project Portfolio Health Status (CSV / Excel)',
    format: 'CSV / Excel Dataset',
    fileSize: '8 Projects × 7 Columns',
    icon: 'FileSpreadsheet',
    category: 'data',
    type: 'spreadsheet',
    description: 'Core project update dataset tracking completion rates, schedule health (On Track, At Risk, Delayed), critical technical/vendor risks, upcoming milestones, and management support requirements.',
    filename: '01_Project_Portfolio_Health_Status.csv',
    tags: ['File 01', 'CSV Data', 'Excel Spreadsheet', 'Project Portfolio', 'Status Tracking'],
    usageTip: 'Excel Tip: Click "Copy for Excel (TSV)" and paste with Ctrl+V into Microsoft Excel cell A1. Populates all 7 columns without text-to-columns wizards.',
    tableHeaders: ['Project', 'Team', 'CompletionPct', 'ScheduleStatus', 'KeyRisk', 'NextMilestone', 'SupportNeeded'],
    tableRows: [
      { Project: 'Project Alpha – System Upgrade', Team: 'Digital Services', CompletionPct: '80%', ScheduleStatus: 'On Track', KeyRisk: 'Two technical issues unresolved', NextMilestone: 'User testing starts next Monday', SupportNeeded: 'None' },
      { Project: 'Project Bravo – Data Migration', Team: 'Data & Platforms', CompletionPct: '65%', ScheduleStatus: 'Delayed', KeyRisk: 'Incomplete source data', NextMilestone: 'Migration test in two weeks', SupportNeeded: 'Management support if issue continues' },
      { Project: 'Project Charlie – Vendor Implementation', Team: 'Delivery Office', CompletionPct: '70%', ScheduleStatus: 'At Risk', KeyRisk: 'Security review pending', NextMilestone: 'Next milestone due 20 Sep', SupportNeeded: 'Confirm security review date' },
      { Project: 'Project Delta – Infrastructure Refresh', Team: 'Infrastructure', CompletionPct: '90%', ScheduleStatus: 'On Track', KeyRisk: 'None', NextMilestone: 'Deployment due 25 Sep', SupportNeeded: 'None' },
      { Project: 'Project Echo – Application Enhancement', Team: 'Applications', CompletionPct: '55%', ScheduleStatus: 'At Risk', KeyRisk: 'Requirements changes', NextMilestone: 'UAT due 27 Sep', SupportNeeded: 'Scope decision' },
      { Project: 'Project Foxtrot – Network Upgrade', Team: 'Networks', CompletionPct: '75%', ScheduleStatus: 'On Track', KeyRisk: 'Resource availability', NextMilestone: 'Site rollout due 30 Sep', SupportNeeded: 'None' },
      { Project: 'Project Golf – Platform Integration', Team: 'Platforms', CompletionPct: '45%', ScheduleStatus: 'Delayed', KeyRisk: 'Interface defects', NextMilestone: 'Integration test due 4 Oct', SupportNeeded: 'Technical support' },
      { Project: 'Project Hotel – Security Enhancement', Team: 'Cybersecurity', CompletionPct: '85%', ScheduleStatus: 'On Track', KeyRisk: 'Minor testing defects', NextMilestone: 'Final test due 28 Sep', SupportNeeded: 'None' }
    ],
    tsvContent: `Project\tTeam\tCompletionPct\tScheduleStatus\tKeyRisk\tNextMilestone\tSupportNeeded
Project Alpha – System Upgrade\tDigital Services\t80%\tOn Track\tTwo technical issues unresolved\tUser testing starts next Monday\tNone
Project Bravo – Data Migration\tData & Platforms\t65%\tDelayed\tIncomplete source data\tMigration test in two weeks\tManagement support if issue continues
Project Charlie – Vendor Implementation\tDelivery Office\t70%\tAt Risk\tSecurity review pending\tNext milestone due 20 Sep\tConfirm security review date
Project Delta – Infrastructure Refresh\tInfrastructure\t90%\tOn Track\tNone\tDeployment due 25 Sep\tNone
Project Echo – Application Enhancement\tApplications\t55%\tAt Risk\tRequirements changes\tUAT due 27 Sep\tScope decision
Project Foxtrot – Network Upgrade\tNetworks\t75%\tOn Track\tResource availability\tSite rollout due 30 Sep\tNone
Project Golf – Platform Integration\tPlatforms\t45%\tDelayed\tInterface defects\tIntegration test due 4 Oct\tTechnical support
Project Hotel – Security Enhancement\tCybersecurity\t85%\tOn Track\tMinor testing defects\tFinal test due 28 Sep\tNone`,
    csvContent: `Project,Team,CompletionPct,ScheduleStatus,KeyRisk,NextMilestone,SupportNeeded
Project Alpha – System Upgrade,Digital Services,80%,On Track,Two technical issues unresolved,User testing starts next Monday,None
Project Bravo – Data Migration,Data & Platforms,65%,Delayed,Incomplete source data,Migration test in two weeks,Management support if issue continues
Project Charlie – Vendor Implementation,Delivery Office,70%,At Risk,Security review pending,Next milestone due 20 Sep,Confirm security review date
Project Delta – Infrastructure Refresh,Infrastructure,90%,On Track,None,Deployment due 25 Sep,None
Project Echo – Application Enhancement,Applications,55%,At Risk,Requirements changes,UAT due 27 Sep,Scope decision
Project Foxtrot – Network Upgrade,Networks,75%,On Track,Resource availability,Site rollout due 30 Sep,None
Project Golf – Platform Integration,Platforms,45%,Delayed,Interface defects,Integration test due 4 Oct,Technical support
Project Hotel – Security Enhancement,Cybersecurity,85%,On Track,Minor testing defects,Final test due 28 Sep,None`,
    downloadContent: `Project,Team,CompletionPct,ScheduleStatus,KeyRisk,NextMilestone,SupportNeeded
Project Alpha – System Upgrade,Digital Services,80%,On Track,Two technical issues unresolved,User testing starts next Monday,None
Project Bravo – Data Migration,Data & Platforms,65%,Delayed,Incomplete source data,Migration test in two weeks,Management support if issue continues
Project Charlie – Vendor Implementation,Delivery Office,70%,At Risk,Security review pending,Next milestone due 20 Sep,Confirm security review date
Project Delta – Infrastructure Refresh,Infrastructure,90%,On Track,None,Deployment due 25 Sep,None
Project Echo – Application Enhancement,Applications,55%,At Risk,Requirements changes,UAT due 27 Sep,Scope decision
Project Foxtrot – Network Upgrade,Networks,75%,On Track,Resource availability,Site rollout due 30 Sep,None
Project Golf – Platform Integration,Platforms,45%,Delayed,Interface defects,Integration test due 4 Oct,Technical support
Project Hotel – Security Enhancement,Cybersecurity,85%,On Track,Minor testing defects,Final test due 28 Sep,None`
  },
  {
    id: 'res-02-mgmt-briefing',
    fileNumber: '02',
    title: '02 — Monthly Management Briefing Analysis Prompt',
    format: 'AI Prompt Template',
    fileSize: 'Text Prompt',
    icon: 'Terminal',
    category: 'prompts',
    type: 'prompt',
    description: 'System prompt instructing AI to analyse the uploaded project portfolio update data (File 01), summarise overall status, classify health (On Track, At Risk, Delayed), and identify top 3 items for management decision.',
    filename: '02_Monthly_Management_Briefing_Prompt.txt',
    tags: ['File 02', 'AI Prompt', 'Portfolio Analysis', 'Executive Briefing', 'File 01 Analysis'],
    usageTip: 'AI Analysis Tip: Copy this prompt and paste into your Enterprise AI chat (e.g. Copilot, ChatGPT, Gemini) together with File 01 dataset to draft an executive briefing.',
    downloadContent: `You are a project officer preparing a monthly management briefing.

Analyse the uploaded project update data. Please:
1. Summarise the overall portfolio status.
2. Identify projects that are On Track, At Risk or Delayed.
3. Identify the top 3 projects requiring management attention and explain why.
4. Identify recurring risks or issues across multiple projects.
5. Highlight important upcoming milestones.
6. Identify any items requiring management decision or support.

Present the findings in a structured management analysis.
Base your analysis only on the uploaded data.`
  },
  {
    id: 'res-03-daily-brief',
    fileNumber: '03',
    title: '03 — Executive Daily Briefing Assistant Prompt',
    format: 'AI Prompt Template',
    fileSize: 'Text Prompt',
    icon: 'Terminal',
    category: 'prompts',
    type: 'prompt',
    description: 'Structured 3-minute executive morning briefing prompt that synthesises calendar commitments, preparation flags, inbox urgencies, and prioritises your single most important task before noon.',
    filename: '03_Daily_Brief_Assistant_Prompt.txt',
    tags: ['File 03', 'AI Prompt', 'Daily Brief', 'Productivity', 'Calendar & Email'],
    usageTip: 'Executive Workflow Tip: Paste this prompt into your morning AI session with your daily schedule & emails to produce a 3-minute action briefing.',
    downloadContent: `Run my daily brief. Here is what I need:

SECTION 1 — TODAY'S CALENDAR
Look at my calendar for today. Give me:
- A time-ordered list of meetings (time, title, key attendees)
- Flag any meeting that needs preparation — mark it ⚠
- Flag any back-to-back blocks with no buffer — mark it 🔴
- Identify my longest gap of free time for deep work

SECTION 2 — INBOX PRIORITIES
Look at emails received in the last 18 hours. Give me:
- Up to 5 items that need my action today, ranked High / Medium / Low urgency
- Flag anything where someone is waiting on a decision from me
- Any FYI emails I should be aware of (1 sentence each, max 3)

SECTION 3 — TODAY'S FOCUS
Based on my calendar and inbox, suggest:
- My single most important task to complete before 12pm
- One thing I should delegate or defer today if time is tight

Format the whole brief so I can read it in under 3 minutes. Use clear section headers and keep each item to one line where possible.`
  },
  {
    id: 'res-04-project-officer-assistant',
    fileNumber: '04',
    title: '04 — Custom GPT: Project Officer Assistant',
    format: 'Custom GPT Specification',
    fileSize: 'System Prompt & Spec',
    icon: 'Terminal',
    category: 'prompts',
    type: 'prompt',
    description: 'A practical adviser for project officers in a Singapore government context. Helps with project issue framing, risk assessment, stakeholder communication, meeting preparation, escalation drafting, and senior-management updates in a clear, concise, executive style.',
    filename: '04_Custom_GPT_Project_Officer_Assistant.txt',
    tags: ['File 04', 'Custom GPT', 'Project Officer Assistant', 'Prompt Spec', 'Singapore Public Sector', 'Executive Updates'],
    usageTip: 'Custom GPT Tip: Copy and paste these instructions, description, and conversation starters directly into ChatGPT Custom GPT builder, Claude Projects, or Copilot Studio.',
    downloadContent: `CUSTOM GPT SPECIFICATION

Name:
Project Officer Assistant

Description:
A practical adviser for project officers in a Singapore government context. Helps with project issue framing, risk assessment, stakeholder communication, meeting preparation, escalation drafting, and senior-management updates in a clear, concise, executive style.

Instructions:
You are Project Officer Assistant, a calm and experienced adviser for project officers working in a Singapore government environment.
Your role is to help the user think clearly, communicate well, and prepare decision-ready material for senior management.

Follow these principles:
• Write in clear, professional Singapore government style: formal, direct, tactful, and concise.
• Lead with the main point first.
• Be action-oriented and focused on decisions, risks, owners, and next steps.
• Avoid hype, filler, and overly casual language.
• Use plain English unless the user asks for a more formal or technical tone.
• Be respectful and neutral in all stakeholder-facing language.
• Do not blame individuals; focus on issues, dependencies, and resolution.
• If information is missing, ask only the most important clarifying questions.
• When useful, state assumptions briefly and clearly.

Help the user with:
• framing project issues and risks
• preparing for steering committee or management meetings
• drafting escalation notes and senior updates
• turning messy notes into actions, owners, and due dates
• structuring options and recommendations
• stress-testing a recommendation before it is sent
• improving tone for senior stakeholders

Preferred response structure:
• Situation
• Assessment
• Options
• Recommendation
• Next Steps

For project updates:
• Distinguish clearly between risk, issue, dependency, and decision required
• Highlight schedule impact, control impact, and stakeholder impact
• Identify what needs management attention now

For drafting communications:
• Keep the tone firm, respectful, and polished
• Make requests clear
• Use language suitable for directors, DDs, Dirs, and senior public-sector leaders
• When appropriate, suggest a short subject line and a crisp opening sentence

For meeting preparation:
• Help the user anticipate likely questions from management
• Suggest key talking points, risks to pre-empt, and decisions to secure
• Keep the output practical and brief

Do not produce a full management briefing unless the user explicitly asks for one.

Conversation starters:
• Help me prepare for a steering committee meeting.
• Draft a concise escalation note for senior management.
• Turn these meeting notes into actions, owners, and due dates.
• What questions will management ask about this project delay?
• Help me frame this issue into options and a recommendation.
• Review this draft update and make it more suitable for senior management.
• Challenge my assessment of this project risk.
• Help me write a tactful follow-up to the vendor.

Knowledge to upload:
• Project governance framework`
  },
  {
    id: 'res-05-case-portal-security',
    fileNumber: '05',
    title: '05 — Workplace Case Study: Security Review Escalation Email',
    format: 'Workplace Email Sample',
    fileSize: 'Email Correspondence',
    icon: 'Mail',
    category: 'case_study',
    type: 'email',
    description: 'Realistic workplace escalation memo from a Project Manager seeking senior leadership intervention on cybersecurity deployment clearance dependencies.',
    filename: '05_Customer_Service_Portal_Security_Escalation.txt',
    tags: ['File 05', 'Case Study', 'Email Escalation', 'Security Review', 'Workplace Sample'],
    usageTip: 'Simulation Case Study Tip: Use this realistic escalation email to test and roleplay how AI drafts management interventions for critical path risks.',
    downloadContent: `Support Required: Security Review for Customer Service Portal Deployment

Dear Ms Tan,

I would like to seek your support on the pending security review for the Customer Service Portal Enhancement project.

The project team is targeting production deployment on 18 September. However, we have not yet been able to secure a confirmed date for the security review. We have followed up with the Cybersecurity team, but understand that the review schedule is still being worked through due to competing commitments.

The security review is required before we can proceed with deployment. If the review cannot be completed by 4 September, there is a risk that we will have insufficient time to address any findings before the planned production release.

As the project team is unable to resolve the scheduling dependency directly, could we seek your support to engage the relevant management counterpart to confirm a review slot by 21 August?

We will continue to follow up at the working level in parallel and will update you once the review date is confirmed.

Thank you.

Best regards,
Daniel Lim
Project Manager
Customer Service Portal Enhancement`
  },
  {
    id: 'res-06-techscan-vibe',
    fileNumber: '06',
    title: '06 — TechScan Dashboard Vibe-Coding Prompt & Spec',
    format: 'Vibe-Coding Spec + CSV',
    fileSize: 'Vibe-Coding Prompt',
    icon: 'Terminal',
    category: 'prompts',
    type: 'prompt',
    description: 'Full instruction prompt to build a clean emerging tech dashboard with dark navy sidebar, color-coded threshold KPIs, domain bar charts, and key finding highlights.',
    filename: '06_TechScan_Dashboard_Build_Prompt.txt',
    tags: ['File 06', 'Vibe-Coding', 'Dashboard Spec', 'UI Design', 'CSV Data'],
    usageTip: 'Vibe-Coding Tip: Paste this prompt directly into Claude, Cursor, or Gemini to auto-generate the complete TechScan multi-metric web dashboard.',
    downloadContent: `Build a clean TechScan emerging technology dashboard for a director briefing. Use a dark navy sidebar and white main area. 
Show these four things:
A large headline showing the average "Overall Impact" score out of 5. Make the number green if 4 or above, amber if 3.5 to 4, and red if below 3.5.
A bar chart of average Overall Impact scores by Domain. Any bar below 3.5 should be shown in red, with a dotted warning line at 3.5.
Two side-by-side cards showing the highest-rated technology and the lowest-rated technology based on their Overall Impact scores.
A short "Key Findings" panel with 3 bullet points summarising the data in plain English.
Use the CSV data below as the data source. Show sample data on first load so the screen is never blank. Remember the data even if the page is refreshed.

CSV data
Tech_ID,Domain,Technology_Name,TRL,Security_Score,Integration_Score,Vendor_Maturity_Score,Strategic_Value_Score,Overall_Impact,Key_Risk
TS-01,Autonomous Systems,Swarm Drone Navigation,6,4,2,3,5,3.5,High RF Jamming Susceptibility
TS-02,Sensors & Optics,Quantum Gravimetry,3,5,1,2,4,3,Requires Cryogenic Cooling
TS-03,Cyber & Comms,Post-Quantum Crypto,5,5,3,3,5,4,Legacy System Interoperability
TS-04,Advanced Materials,Thermal Camouflage,4,4,4,2,3,3.25,Durability in Tropical Weather
TS-05,AI & Analytics,Neuromorphic Edge Cameras,6,3,4,4,5,4,Hardware Supply Chain Bottleneck
TS-06,Power & Energy,Solid-State Tactical Batteries,5,2,5,3,4,3.5,Thermal Runaway Risks
TS-07,Autonomous Systems,USV Obstacle Avoidance,7,4,4,4,4,4,Harsh Sea State Degradation
TS-08,Cyber & Comms,Zero-Trust Edge Segmentation,7,5,2,4,5,4,Policy Management Complexity
TS-09,Sensors & Optics,Photonic SAR Imaging,4,4,2,2,5,3.25,Optical Component Alignment
TS-10,Advanced Materials,Self-Healing Polymers,3,3,5,1,3,3,Repeatable Cycle Fatigue`
  },
  {
    id: 'res-07-csv-techscan',
    fileNumber: '07',
    title: '07 — TechScan Comprehensive Multi-Metric Dataset (CSV)',
    format: 'CSV Dataset',
    fileSize: '10 Rows × 10 Columns',
    icon: 'FileSpreadsheet',
    category: 'data',
    type: 'spreadsheet',
    description: 'Multi-metric technology dataset with TRL ratings, Security, Integration, Vendor Maturity, and Strategic Value scores for emerging tech dashboard exercises.',
    filename: '07_TechScan_MultiMetric_Data.csv',
    tags: ['File 07', 'CSV Data', 'Dashboard Source', 'TechScan', 'Multi-Metric'],
    usageTip: 'TechScan Dataset Tip: Contains 10 technologies with TRL, security, and strategic value scores. Click "Copy for Excel" to paste directly into your spreadsheet or AI tool.',
    tableHeaders: ['Tech_ID', 'Domain', 'Technology_Name', 'TRL', 'Security', 'Integration', 'Vendor_Maturity', 'Strategic_Value', 'Overall_Impact', 'Key_Risk'],
    tableRows: [
      { Tech_ID: 'TS-01', Domain: 'Autonomous Systems', Technology_Name: 'Swarm Drone Navigation', TRL: 6, Security: 4, Integration: 2, Vendor_Maturity: 3, Strategic_Value: 5, Overall_Impact: 3.5, Key_Risk: 'High RF Jamming Susceptibility' },
      { Tech_ID: 'TS-02', Domain: 'Sensors & Optics', Technology_Name: 'Quantum Gravimetry', TRL: 3, Security: 5, Integration: 1, Vendor_Maturity: 2, Strategic_Value: 4, Overall_Impact: 3, Key_Risk: 'Requires Cryogenic Cooling' },
      { Tech_ID: 'TS-03', Domain: 'Cyber & Comms', Technology_Name: 'Post-Quantum Crypto', TRL: 5, Security: 5, Integration: 3, Vendor_Maturity: 3, Strategic_Value: 5, Overall_Impact: 4, Key_Risk: 'Legacy System Interoperability' },
      { Tech_ID: 'TS-04', Domain: 'Advanced Materials', Technology_Name: 'Thermal Camouflage', TRL: 4, Security: 4, Integration: 4, Vendor_Maturity: 2, Strategic_Value: 3, Overall_Impact: 3.25, Key_Risk: 'Durability in Tropical Weather' },
      { Tech_ID: 'TS-05', Domain: 'AI & Analytics', Technology_Name: 'Neuromorphic Edge Cameras', TRL: 6, Security: 3, Integration: 4, Vendor_Maturity: 4, Strategic_Value: 5, Overall_Impact: 4, Key_Risk: 'Hardware Supply Chain Bottleneck' },
      { Tech_ID: 'TS-06', Domain: 'Power & Energy', Technology_Name: 'Solid-State Tactical Batteries', TRL: 5, Security: 2, Integration: 5, Vendor_Maturity: 3, Strategic_Value: 4, Overall_Impact: 3.5, Key_Risk: 'Thermal Runaway Risks' },
      { Tech_ID: 'TS-07', Domain: 'Autonomous Systems', Technology_Name: 'USV Obstacle Avoidance', TRL: 7, Security: 4, Integration: 4, Vendor_Maturity: 4, Strategic_Value: 4, Overall_Impact: 4, Key_Risk: 'Harsh Sea State Degradation' },
      { Tech_ID: 'TS-08', Domain: 'Cyber & Comms', Technology_Name: 'Zero-Trust Edge Segmentation', TRL: 7, Security: 5, Integration: 2, Vendor_Maturity: 4, Strategic_Value: 5, Overall_Impact: 4, Key_Risk: 'Policy Management Complexity' },
      { Tech_ID: 'TS-09', Domain: 'Sensors & Optics', Technology_Name: 'Photonic SAR Imaging', TRL: 4, Security: 4, Integration: 2, Vendor_Maturity: 2, Strategic_Value: 5, Overall_Impact: 3.25, Key_Risk: 'Optical Component Alignment' },
      { Tech_ID: 'TS-10', Domain: 'Advanced Materials', Technology_Name: 'Self-Healing Polymers', TRL: 3, Security: 3, Integration: 5, Vendor_Maturity: 1, Strategic_Value: 3, Overall_Impact: 3, Key_Risk: 'Repeatable Cycle Fatigue' }
    ],
    tsvContent: `Tech_ID\tDomain\tTechnology_Name\tTRL\tSecurity_Score\tIntegration_Score\tVendor_Maturity_Score\tStrategic_Value_Score\tOverall_Impact\tKey_Risk
TS-01\tAutonomous Systems\tSwarm Drone Navigation\t6\t4\t2\t3\t5\t3.5\tHigh RF Jamming Susceptibility
TS-02\tSensors & Optics\tQuantum Gravimetry\t3\t5\t1\t2\t4\t3\tRequires Cryogenic Cooling
TS-03\tCyber & Comms\tPost-Quantum Crypto\t5\t5\t3\t3\t5\t4\tLegacy System Interoperability
TS-04\tAdvanced Materials\tThermal Camouflage\t4\t4\t4\t2\t3\t3.25\tDurability in Tropical Weather
TS-05\tAI & Analytics\tNeuromorphic Edge Cameras\t6\t3\t4\t4\t5\t4\tHardware Supply Chain Bottleneck
TS-06\tPower & Energy\tSolid-State Tactical Batteries\t5\t2\t5\t3\t4\t3.5\tThermal Runaway Risks
TS-07\tAutonomous Systems\tUSV Obstacle Avoidance\t7\t4\t4\t4\t4\t4\tHarsh Sea State Degradation
TS-08\tCyber & Comms\tZero-Trust Edge Segmentation\t7\t5\t2\t4\t5\t4\tPolicy Management Complexity
TS-09\tSensors & Optics\tPhotonic SAR Imaging\t4\t4\t2\t2\t5\t3.25\tOptical Component Alignment
TS-10\tAdvanced Materials\tSelf-Healing Polymers\t3\t3\t5\t1\t3\t3\tRepeatable Cycle Fatigue`,
    csvContent: `Tech_ID,Domain,Technology_Name,TRL,Security_Score,Integration_Score,Vendor_Maturity_Score,Strategic_Value_Score,Overall_Impact,Key_Risk
TS-01,Autonomous Systems,Swarm Drone Navigation,6,4,2,3,5,3.5,High RF Jamming Susceptibility
TS-02,Sensors & Optics,Quantum Gravimetry,3,5,1,2,4,3,Requires Cryogenic Cooling
TS-03,Cyber & Comms,Post-Quantum Crypto,5,5,3,3,5,4,Legacy System Interoperability
TS-04,Advanced Materials,Thermal Camouflage,4,4,4,2,3,3.25,Durability in Tropical Weather
TS-05,AI & Analytics,Neuromorphic Edge Cameras,6,3,4,4,5,4,Hardware Supply Chain Bottleneck
TS-06,Power & Energy,Solid-State Tactical Batteries,5,2,5,3,4,3.5,Thermal Runaway Risks
TS-07,Autonomous Systems,USV Obstacle Avoidance,7,4,4,4,4,4,Harsh Sea State Degradation
TS-08,Cyber & Comms,Zero-Trust Edge Segmentation,7,5,2,4,5,4,Policy Management Complexity
TS-09,Sensors & Optics,Photonic SAR Imaging,4,4,2,2,5,3.25,Optical Component Alignment
TS-10,Advanced Materials,Self-Healing Polymers,3,3,5,1,3,3,Repeatable Cycle Fatigue`,
    downloadContent: `Tech_ID,Domain,Technology_Name,TRL,Security_Score,Integration_Score,Vendor_Maturity_Score,Strategic_Value_Score,Overall_Impact,Key_Risk
TS-01,Autonomous Systems,Swarm Drone Navigation,6,4,2,3,5,3.5,High RF Jamming Susceptibility
TS-02,Sensors & Optics,Quantum Gravimetry,3,5,1,2,4,3,Requires Cryogenic Cooling
TS-03,Cyber & Comms,Post-Quantum Crypto,5,5,3,3,5,4,Legacy System Interoperability
TS-04,Advanced Materials,Thermal Camouflage,4,4,4,2,3,3.25,Durability in Tropical Weather
TS-05,AI & Analytics,Neuromorphic Edge Cameras,6,3,4,4,5,4,Hardware Supply Chain Bottleneck
TS-06,Power & Energy,Solid-State Tactical Batteries,5,2,5,3,4,3.5,Thermal Runaway Risks
TS-07,Autonomous Systems,USV Obstacle Avoidance,7,4,4,4,4,4,Harsh Sea State Degradation
TS-08,Cyber & Comms,Zero-Trust Edge Segmentation,7,5,2,4,5,4,Policy Management Complexity
TS-09,Sensors & Optics,Photonic SAR Imaging,4,4,2,2,5,3.25,Optical Component Alignment
TS-10,Advanced Materials,Self-Healing Polymers,3,3,5,1,3,3,Repeatable Cycle Fatigue`
  },
  {
    id: 'res-08-tech-impact-csv',
    fileNumber: '08',
    title: '08 — Emerging Tech Impact & Risk Dataset (CSV)',
    format: 'CSV / Excel Dataset',
    fileSize: '8 Rows × 4 Columns',
    icon: 'FileSpreadsheet',
    category: 'data',
    type: 'spreadsheet',
    description: 'Course exercise spreadsheet evaluating emerging technologies across autonomous systems, cyber, sensors, and materials, with impact ratings and primary risk profiles.',
    filename: '08_Emerging_Tech_Impact_Data.csv',
    tags: ['File 08', 'Excel File', 'CSV Dataset', 'Copy for Excel', 'Tech Assessment'],
    usageTip: 'Technology Matrix Tip: 4-column tech impact and risk dataset. Click "Copy for Excel" to load directly into Excel or your analysis tools.',
    tableHeaders: ['Domain', 'Technology_Name', 'Overall_Impact', 'Primary_Risk'],
    tableRows: [
      { Domain: 'Autonomous Systems', Technology_Name: 'Drone Swarm Logic', Overall_Impact: 2.8, Primary_Risk: 'Supply chain disruption' },
      { Domain: 'Autonomous Systems', Technology_Name: 'Unmanned Ground Vehicles', Overall_Impact: 3.1, Primary_Risk: 'Battery limitations' },
      { Domain: 'Cyber & Comms', Technology_Name: 'Quantum Decryption', Overall_Impact: 1.5, Primary_Risk: 'Critical vulnerability' },
      { Domain: 'Cyber & Comms', Technology_Name: 'Zero-Trust Architecture', Overall_Impact: 4.1, Primary_Risk: 'Implementation cost' },
      { Domain: 'Sensors & Optics', Technology_Name: 'Next-Gen Lidar', Overall_Impact: 3.4, Primary_Risk: 'Weather interference' },
      { Domain: 'Sensors & Optics', Technology_Name: 'Acoustic Triangulation', Overall_Impact: 2.5, Primary_Risk: 'High false positive rate' },
      { Domain: 'Materials', Technology_Name: 'Graphene Plating', Overall_Impact: 3.2, Primary_Risk: 'Manufacturing scale' },
      { Domain: 'Materials', Technology_Name: 'Smart Textiles', Overall_Impact: 2.9, Primary_Risk: 'Durability issues' }
    ],
    tsvContent: `Domain\tTechnology_Name\tOverall_Impact\tPrimary_Risk
Autonomous Systems\tDrone Swarm Logic\t2.8\tSupply chain disruption
Autonomous Systems\tUnmanned Ground Vehicles\t3.1\tBattery limitations
Cyber & Comms\tQuantum Decryption\t1.5\tCritical vulnerability
Cyber & Comms\tZero-Trust Architecture\t4.1\tImplementation cost
Sensors & Optics\tNext-Gen Lidar\t3.4\tWeather interference
Sensors & Optics\tAcoustic Triangulation\t2.5\tHigh false positive rate
Materials\tGraphene Plating\t3.2\tManufacturing scale
Materials\tSmart Textiles\t2.9\tDurability issues`,
    csvContent: `Domain,Technology_Name,Overall_Impact,Primary_Risk
Autonomous Systems,Drone Swarm Logic,2.8,Supply chain disruption
Autonomous Systems,Unmanned Ground Vehicles,3.1,Battery limitations
Cyber & Comms,Quantum Decryption,1.5,Critical vulnerability
Cyber & Comms,Zero-Trust Architecture,4.1,Implementation cost
Sensors & Optics,Next-Gen Lidar,3.4,Weather interference
Sensors & Optics,Acoustic Triangulation,2.5,High false positive rate
Materials,Graphene Plating,3.2,Manufacturing scale
Materials,Smart Textiles,2.9,Durability issues`,
    downloadContent: `Domain,Technology_Name,Overall_Impact,Primary_Risk
Autonomous Systems,Drone Swarm Logic,2.8,Supply chain disruption
Autonomous Systems,Unmanned Ground Vehicles,3.1,Battery limitations
Cyber & Comms,Quantum Decryption,1.5,Critical vulnerability
Cyber & Comms,Zero-Trust Architecture,4.1,Implementation cost
Sensors & Optics,Next-Gen Lidar,3.4,Weather interference
Sensors & Optics,Acoustic Triangulation,2.5,High false positive rate
Materials,Graphene Plating,3.2,Manufacturing scale
Materials,Smart Textiles,2.9,Durability issues`
  },
  {
    id: 'res-09-policy-assist',
    fileNumber: '09',
    title: '09 — PolicyAssist Claims & Policy Checker Bot Specification',
    format: 'AI Assistant Prompt',
    fileSize: 'Specification Prompt',
    icon: 'Terminal',
    category: 'prompts',
    type: 'prompt',
    description: 'Vibe-coding prompt to create a chatbot for public sector officers answering queries on overseas travel allowances, SaaS procurement, overtime taxi claims, and TOIL rules with citations.',
    filename: '09_PolicyAssist_Bot_Specification_Prompt.txt',
    tags: ['File 09', 'PolicyAssist', 'Bot Prompt', 'Corporate Claims', 'Human Oversight'],
    usageTip: 'Bot Specification Tip: Full architecture & scope requirements for building the PolicyAssist internal allowance and claims checker assistant.',
    downloadContent: `Create an AI-powered Claims & Policy Checker Bot for public sector officers called PolicyAssist.
The application should allow officers to ask questions about corporate policy, travel allowances, tech procurement, and transport/overtime claims, receiving answers strictly based on policy documents in this folder: https://go.gov.sg/aispolicy.
Provide a simple chat interface with suggested quick questions covering:
• Overseas Travel Allowances & Accommodation Ceilings
• Software & SaaS Procurement Vetting Rules
• Overtime Meal Stipends & Late-Night Taxi Claims
• Weekend Duty & Time-Off-In-Lieu (TOIL) Rules
For each answer, show:
• The clear policy response
• The source document reference (e.g., POL-FIN-2024-04)
• A confidence level
If the assistant cannot find an answer in the documents, it should advise the officer to contact the Finance & Procurement helpdesk. Include an admin panel where policy administrators can upload and manage policy documents.`
  },
  {
    id: 'res-10-whys-framing',
    fileNumber: '10',
    title: '10 — 5 Whys & 4Cs Problem Framing Template',
    format: 'Framing Worksheet',
    fileSize: 'Worksheet Template',
    icon: 'FileText',
    category: 'governance',
    type: 'document',
    description: 'Structured worksheet to diagnose workplace bottlenecks, isolate root causes using 5 Whys, and define Context, Challenge, Core Impact & Capabilities (4Cs) before building.',
    filename: '10_5Whys_4Cs_Problem_Framing_Template.txt',
    tags: ['File 10', 'Problem Framing', 'Worksheet', 'Root Cause Analysis', 'Human ROI'],
    usageTip: 'Problem Framing Tip: Complete the 5 Whys and 4Cs before writing code to validate the root cause and ensure human officers remain in the loop.',
    downloadContent: `NP X MDDI AI SPRINTS - PROBLEM FRAMING WORKSHEET

1. THE 5 WHYS ROOT CAUSE METHODOLOGY
--------------------------------------------------
Problem Statement: [State the initial workplace bottleneck]
Why #1: Why does this bottleneck occur?
Why #2: Why does that happen?
Why #3: Why is that constraint in place?
Why #4: Why haven't we automated or streamlined this?
Why #5: Root Cause Identified: [Core systemic or administrative issue]

2. THE 4CS FRAMEWORK FOR AI SPRINT SOLUTIONS
--------------------------------------------------
- CONTEXT: What is the operational or administrative environment?
- CHALLENGE: What specific delay, manual error, or cognitive load exists?
- CORE IMPACT: How many human hours per week are lost?
- CAPABILITY REQUIRED: What specific AI skill or vibe-code tool bridges the gap?

HUMAN OVERSIGHT CHECK:
[ ] Does this solution keep a human officer in the decision loop?
[ ] How are AI outputs verified for accuracy and compliance?
[ ] What strategic public service initiative will reclaimed time be allocated to?`
  },
  {
    id: 'res-11-prompt-cheatsheet',
    fileNumber: '11',
    title: '11 — Vibe-Coding & Prompting Reference Cheat Sheet',
    format: 'Prompt Cheat Sheet',
    fileSize: 'Guide & Code Recipes',
    icon: 'Zap',
    category: 'prompts',
    type: 'prompt',
    description: 'Reference guide for officers and engineers featuring system prompt anchor formulas, context-window optimization, error recovery formulas, and natural language layout instructions.',
    filename: '11_VibeCoding_Prompting_CheatSheet.txt',
    tags: ['File 11', 'Prompting', 'Vibe-Coding', 'Cheatsheet', 'Formulas'],
    usageTip: 'Prompt Engineering Tip: Master the System Prompt Anchor Formula (Role, Context, Task, Constraints) and error recovery prompt patterns.',
    downloadContent: `NP X MDDI AI SPRINTS - VIBE-CODING & PROMPTING CHEAT SHEET

1. THE SYSTEM PROMPT ANCHOR FORMULA
--------------------------------------------------
ROLE: "You are a senior public sector systems engineer assisting with..."
CONTEXT: "We are processing weekly procurement logs where..."
TASK: "Extract key deadlines, identify risk flags, and present in a clean table..."
CONSTRAINTS: "Never fabricate data. Mark uncertain items with [NEEDS HUMAN REVIEW]."

2. VIBE-CODING INTERACTION TIPS
--------------------------------------------------
- Start small: Build visual structure first, then wire dynamic logic.
- Specify design rules: "Use deep navy background #0A192F with electric cyan accents #06B6D4."
- Request modular components: "Keep state clean and break cards into separate reusable files."
- Always verify: Include human verification buttons for critical outputs.

3. ENTERPRISE AI SAFETY CONSTRAINTS
--------------------------------------------------
- Do NOT input restricted or sensitive data into public sandboxes.
- Always validate numerical or regulatory compliance outputs against official sources.`
  },
  {
    id: 'res-12-sharepoint-browse',
    fileNumber: '12',
    title: '12 — SharePoint: Browse Policy Documents',
    format: 'AI Prompt Template',
    fileSize: 'Text Prompt',
    icon: 'Terminal',
    category: 'prompts',
    type: 'prompt',
    description: 'ChatGPT Enterprise prompt to browse your SharePoint policy folder and identify relevant policy documents on employee travel, overtime, and technology procurement.',
    filename: '12_SharePoint_Browse_Policy_Prompt.txt',
    tags: ['File 12', 'AI Prompt', 'SharePoint', 'Policy Documents', 'Enterprise AI'],
    usageTip: 'SharePoint Tip: Connect the SharePoint app in ChatGPT Enterprise first (click "+" then type "SharePoint"), then paste this prompt to locate policy documents.',
    downloadContent: `Browse my policy document folder. Identify the policy documents relevant to employee travel, overtime and technology procurement.`
  },
  {
    id: 'res-13-sharepoint-summary',
    fileNumber: '13',
    title: '13 — SharePoint: Summarise Policy Rules Table',
    format: 'AI Prompt Template',
    fileSize: 'Text Prompt',
    icon: 'Terminal',
    category: 'prompts',
    type: 'prompt',
    description: 'Follow-up ChatGPT Enterprise prompt to read the identified policy documents and summarise travel, overtime, and procurement rules into a structured table with source citations.',
    filename: '13_SharePoint_Summarise_Policy_Prompt.txt',
    tags: ['File 13', 'AI Prompt', 'SharePoint', 'Policy Summary', 'Enterprise AI'],
    usageTip: 'SharePoint Tip: Use this as the second prompt in the same SharePoint-connected chat, immediately after running File 12.',
    downloadContent: `Read the relevant policy documents and summarise the rules I need to know for travel, overtime and procurement. Create a table with: topic, rule, threshold/limit and source document.`
  },
  {
    id: 'res-14-weekly-report',
    fileNumber: '14',
    title: '14 — Weekly Management Report Prompt',
    format: 'AI Prompt Template',
    fileSize: 'Text Prompt',
    icon: 'Terminal',
    category: 'prompts',
    type: 'prompt',
    description: 'Structured prompt for drafting a weekly management report from team project updates. Uses role, task, context and format framing to produce executive-ready summaries with clear action items.',
    filename: '14_Weekly_Management_Report_Prompt.txt',
    tags: ['File 14', 'AI Prompt', 'Management Report', 'Weekly Update', 'Enterprise AI'],
    usageTip: 'Report Tip: Upload or paste your team\'s weekly project updates first, then send this prompt. Works with SharePoint-connected files or pasted text.',
    downloadContent: `You are a project officer preparing the recurring management report from updates you receive from several project teams.
Draft the weekly management report in a clear professional tone using simple English with the attached updates.
Summarise progress, blockers, decision points and any deadlines that need attention.
Format:
1. Executive Summary
2. Key Progress
3. Risks and Blockers
4. Decisions Needed
5. Next Actions`
  },
  {
    id: 'res-15-chart-prompt',
    fileNumber: '15',
    title: '15 — Project Status Chart Creation Prompt',
    format: 'AI Prompt Template',
    fileSize: 'Text Prompt',
    icon: 'Terminal',
    category: 'prompts',
    type: 'prompt',
    description: 'Prompt to generate two management-ready charts from project portfolio data: a status breakdown chart (On Track / At Risk / Delayed) and a completion percentage ranking chart.',
    filename: '15_Project_Status_Chart_Prompt.txt',
    tags: ['File 15', 'AI Prompt', 'Chart', 'Data Visualisation', 'Enterprise AI'],
    usageTip: 'Chart Tip: Run this prompt in the same chat as your uploaded project data (File 01). ChatGPT will generate both charts which you can download.',
    downloadContent: `Create a chart showing the number of projects by schedule status: On Track, At Risk, and Delayed. Also create a second chart showing project completion percentage, sorted from lowest to highest. Make both suitable for a senior management briefing.`
  },
  {
    id: 'res-16-full-briefing',
    fileNumber: '16',
    title: '16 — Full One-Page Management Briefing (.docx)',
    format: 'AI Prompt Template',
    fileSize: 'Text Prompt',
    icon: 'Terminal',
    category: 'prompts',
    type: 'prompt',
    description: 'Prompt to generate a complete one-page management briefing in Word format (.docx), covering executive summary, portfolio status, top issues, decisions required, upcoming milestones, and two embedded charts.',
    filename: '16_Full_Management_Briefing_Prompt.txt',
    tags: ['File 16', 'AI Prompt', 'Management Briefing', 'Word Document', 'Enterprise AI'],
    usageTip: 'Briefing Tip: Run this after uploading your project data (File 01). ChatGPT generates a downloadable .docx ready for senior management.',
    downloadContent: `Based only on the uploaded project data, create a one-page management briefing for senior government management covering the Executive Summary, Portfolio Status, Top Issues Requiring Attention, Management Decisions / Support Required, and Upcoming Milestones. Include two simple charts showing the number of projects by status (On Track, At Risk and Delayed) and project completion from lowest to highest. Use simple, clear and professional language suitable for a senior government audience. Present the final briefing as a Word document (.docx).`
  },
  {
    id: 'res-17-package-skill',
    fileNumber: '17',
    title: '17 — Package Analysis Workflow as a Skill',
    format: 'AI Prompt Template',
    fileSize: 'Text Prompt',
    icon: 'Terminal',
    category: 'prompts',
    type: 'prompt',
    description: 'End-of-session prompt to package your full management analysis workflow (upload data → analyse → chart → report) as a reusable ChatGPT Skill your team can run with one click.',
    filename: '17_Package_As_Skill_Prompt.txt',
    tags: ['File 17', 'AI Prompt', 'ChatGPT Skill', 'Automation', 'Enterprise AI'],
    usageTip: 'Skill Tip: Run this at the end of your management analysis chat. ChatGPT packages the full workflow into an installable Skill. Click "Install" when prompted — it may take a few tries.',
    downloadContent: `Package what I have just done into a Skill.
It should be McKinsey style – sleek and professional with insightful charts and recommendations.
The audience is senior management.`
  },
  {
    id: 'res-18-techscan-filter',
    fileNumber: '18',
    title: '18 — TechScan Step 5: Add Domain Filter Dropdown',
    format: 'Vibe-Coding Prompt',
    fileSize: 'Refinement Prompt',
    icon: 'Terminal',
    category: 'prompts',
    type: 'prompt',
    description: 'Google AI Studio refinement prompt (Demo 1, Step 5) to add an interactive domain filter dropdown to the TechScan dashboard. All charts and metrics update instantly when the filter changes.',
    filename: '18_TechScan_Step5_Add_Filter_Prompt.txt',
    tags: ['File 18', 'Vibe-Coding', 'TechScan', 'Dashboard Filter', 'Google AI Studio'],
    usageTip: 'TechScan Step 5: Paste into the same Google AI Studio chat after generating the initial dashboard (File 06).',
    downloadContent: `Add a dropdown at the top that lets the user filter the entire dashboard by Domain. Include an option to view all domains together. Everything on the screen should update instantly when the filter changes.`
  },
  {
    id: 'res-19-techscan-upload',
    fileNumber: '19',
    title: '19 — TechScan Step 7: Add Upload CSV Feature',
    format: 'Vibe-Coding Prompt',
    fileSize: 'Refinement Prompt',
    icon: 'Terminal',
    category: 'prompts',
    type: 'prompt',
    description: 'Google AI Studio prompt (Demo 1, Step 7) to add a CSV data upload button to the TechScan dashboard. Officers can upload fresh technology data and the dashboard updates automatically — works offline.',
    filename: '19_TechScan_Step7_Add_Upload_Prompt.txt',
    tags: ['File 19', 'Vibe-Coding', 'TechScan', 'CSV Upload', 'Google AI Studio'],
    usageTip: 'TechScan Step 7: After adding the filter (File 18), paste this prompt. Then use the TechScan Stress Test data (File 20) to test the upload feature.',
    downloadContent: `Add an Upload CSV Data button at the top right. When the user uploads a new CSV file or paste CSV data in the same format as the sample, the dashboard should refresh with the new data automatically. Save the uploaded data so it is still there if the page is closed and reopened. No internet connection should be needed.`
  },
  {
    id: 'res-20-techscan-stresstest',
    fileNumber: '20',
    title: '20 — TechScan Stress Test Dataset (CSV)',
    format: 'CSV Dataset',
    fileSize: '10 Rows × 10 Columns',
    icon: 'FileSpreadsheet',
    category: 'data',
    type: 'spreadsheet',
    description: 'Low-score technology dataset for stress-testing the TechScan dashboard. All scores fall below the 3.5 warning threshold — upload this via the dashboard\'s CSV upload button to watch all red/amber alerts activate.',
    filename: '20_TechScan_StressTest_Data.csv',
    tags: ['File 20', 'CSV Data', 'TechScan', 'Stress Test', 'Low Scores'],
    usageTip: 'Stress Test Tip: After adding the Upload CSV feature (File 19), click the upload button and paste this data to see all warning thresholds activate across the dashboard.',
    tableHeaders: ['Tech_ID', 'Domain', 'Technology_Name', 'TRL', 'Security_Score', 'Integration_Score', 'Vendor_Maturity_Score', 'Strategic_Value_Score', 'Overall_Impact', 'Key_Risk'],
    tableRows: [
      { Tech_ID: 'TS-01', Domain: 'Autonomous Systems', Technology_Name: 'Swarm Drone Navigation', TRL: 3, Security_Score: 2, Integration_Score: 1, Vendor_Maturity_Score: 2, Strategic_Value_Score: 3, Overall_Impact: 2.0, Key_Risk: 'High RF Jamming Susceptibility' },
      { Tech_ID: 'TS-02', Domain: 'Sensors & Optics', Technology_Name: 'Quantum Gravimetry', TRL: 2, Security_Score: 3, Integration_Score: 1, Vendor_Maturity_Score: 1, Strategic_Value_Score: 2, Overall_Impact: 1.8, Key_Risk: 'Requires Cryogenic Cooling' },
      { Tech_ID: 'TS-03', Domain: 'Cyber & Comms', Technology_Name: 'Post-Quantum Crypto', TRL: 3, Security_Score: 3, Integration_Score: 2, Vendor_Maturity_Score: 2, Strategic_Value_Score: 3, Overall_Impact: 2.6, Key_Risk: 'Legacy System Interoperability' },
      { Tech_ID: 'TS-04', Domain: 'Advanced Materials', Technology_Name: 'Thermal Camouflage', TRL: 2, Security_Score: 2, Integration_Score: 2, Vendor_Maturity_Score: 1, Strategic_Value_Score: 2, Overall_Impact: 1.8, Key_Risk: 'Durability in Tropical Weather' },
      { Tech_ID: 'TS-05', Domain: 'AI & Analytics', Technology_Name: 'Neuromorphic Edge Cameras', TRL: 3, Security_Score: 2, Integration_Score: 2, Vendor_Maturity_Score: 2, Strategic_Value_Score: 3, Overall_Impact: 2.4, Key_Risk: 'Hardware Supply Chain Bottleneck' },
      { Tech_ID: 'TS-06', Domain: 'Power & Energy', Technology_Name: 'Solid-State Tactical Batteries', TRL: 2, Security_Score: 1, Integration_Score: 2, Vendor_Maturity_Score: 2, Strategic_Value_Score: 2, Overall_Impact: 1.8, Key_Risk: 'Thermal Runaway Risks' },
      { Tech_ID: 'TS-07', Domain: 'Autonomous Systems', Technology_Name: 'USV Obstacle Avoidance', TRL: 3, Security_Score: 2, Integration_Score: 3, Vendor_Maturity_Score: 2, Strategic_Value_Score: 3, Overall_Impact: 2.6, Key_Risk: 'Harsh Sea State Degradation' },
      { Tech_ID: 'TS-08', Domain: 'Cyber & Comms', Technology_Name: 'Zero-Trust Edge Segmentation', TRL: 4, Security_Score: 3, Integration_Score: 1, Vendor_Maturity_Score: 2, Strategic_Value_Score: 3, Overall_Impact: 2.6, Key_Risk: 'Policy Management Complexity' },
      { Tech_ID: 'TS-09', Domain: 'Sensors & Optics', Technology_Name: 'Photonic SAR Imaging', TRL: 2, Security_Score: 2, Integration_Score: 1, Vendor_Maturity_Score: 1, Strategic_Value_Score: 3, Overall_Impact: 1.8, Key_Risk: 'Optical Component Alignment' },
      { Tech_ID: 'TS-10', Domain: 'Advanced Materials', Technology_Name: 'Self-Healing Polymers', TRL: 2, Security_Score: 2, Integration_Score: 2, Vendor_Maturity_Score: 1, Strategic_Value_Score: 2, Overall_Impact: 1.8, Key_Risk: 'Repeatable Cycle Fatigue' }
    ],
    tsvContent: `Tech_ID\tDomain\tTechnology_Name\tTRL\tSecurity_Score\tIntegration_Score\tVendor_Maturity_Score\tStrategic_Value_Score\tOverall_Impact\tKey_Risk
TS-01\tAutonomous Systems\tSwarm Drone Navigation\t3\t2\t1\t2\t3\t2.0\tHigh RF Jamming Susceptibility
TS-02\tSensors & Optics\tQuantum Gravimetry\t2\t3\t1\t1\t2\t1.8\tRequires Cryogenic Cooling
TS-03\tCyber & Comms\tPost-Quantum Crypto\t3\t3\t2\t2\t3\t2.6\tLegacy System Interoperability
TS-04\tAdvanced Materials\tThermal Camouflage\t2\t2\t2\t1\t2\t1.8\tDurability in Tropical Weather
TS-05\tAI & Analytics\tNeuromorphic Edge Cameras\t3\t2\t2\t2\t3\t2.4\tHardware Supply Chain Bottleneck
TS-06\tPower & Energy\tSolid-State Tactical Batteries\t2\t1\t2\t2\t2\t1.8\tThermal Runaway Risks
TS-07\tAutonomous Systems\tUSV Obstacle Avoidance\t3\t2\t3\t2\t3\t2.6\tHarsh Sea State Degradation
TS-08\tCyber & Comms\tZero-Trust Edge Segmentation\t4\t3\t1\t2\t3\t2.6\tPolicy Management Complexity
TS-09\tSensors & Optics\tPhotonic SAR Imaging\t2\t2\t1\t1\t3\t1.8\tOptical Component Alignment
TS-10\tAdvanced Materials\tSelf-Healing Polymers\t2\t2\t2\t1\t2\t1.8\tRepeatable Cycle Fatigue`,
    csvContent: `Tech_ID,Domain,Technology_Name,TRL,Security_Score,Integration_Score,Vendor_Maturity_Score,Strategic_Value_Score,Overall_Impact,Key_Risk
TS-01,Autonomous Systems,Swarm Drone Navigation,3,2,1,2,3,2.0,High RF Jamming Susceptibility
TS-02,Sensors & Optics,Quantum Gravimetry,2,3,1,1,2,1.8,Requires Cryogenic Cooling
TS-03,Cyber & Comms,Post-Quantum Crypto,3,3,2,2,3,2.6,Legacy System Interoperability
TS-04,Advanced Materials,Thermal Camouflage,2,2,2,1,2,1.8,Durability in Tropical Weather
TS-05,AI & Analytics,Neuromorphic Edge Cameras,3,2,2,2,3,2.4,Hardware Supply Chain Bottleneck
TS-06,Power & Energy,Solid-State Tactical Batteries,2,1,2,2,2,1.8,Thermal Runaway Risks
TS-07,Autonomous Systems,USV Obstacle Avoidance,3,2,3,2,3,2.6,Harsh Sea State Degradation
TS-08,Cyber & Comms,Zero-Trust Edge Segmentation,4,3,1,2,3,2.6,Policy Management Complexity
TS-09,Sensors & Optics,Photonic SAR Imaging,2,2,1,1,3,1.8,Optical Component Alignment
TS-10,Advanced Materials,Self-Healing Polymers,2,2,2,1,2,1.8,Repeatable Cycle Fatigue`,
    downloadContent: `Tech_ID,Domain,Technology_Name,TRL,Security_Score,Integration_Score,Vendor_Maturity_Score,Strategic_Value_Score,Overall_Impact,Key_Risk
TS-01,Autonomous Systems,Swarm Drone Navigation,3,2,1,2,3,2.0,High RF Jamming Susceptibility
TS-02,Sensors & Optics,Quantum Gravimetry,2,3,1,1,2,1.8,Requires Cryogenic Cooling
TS-03,Cyber & Comms,Post-Quantum Crypto,3,3,2,2,3,2.6,Legacy System Interoperability
TS-04,Advanced Materials,Thermal Camouflage,2,2,2,1,2,1.8,Durability in Tropical Weather
TS-05,AI & Analytics,Neuromorphic Edge Cameras,3,2,2,2,3,2.4,Hardware Supply Chain Bottleneck
TS-06,Power & Energy,Solid-State Tactical Batteries,2,1,2,2,2,1.8,Thermal Runaway Risks
TS-07,Autonomous Systems,USV Obstacle Avoidance,3,2,3,2,3,2.6,Harsh Sea State Degradation
TS-08,Cyber & Comms,Zero-Trust Edge Segmentation,4,3,1,2,3,2.6,Policy Management Complexity
TS-09,Sensors & Optics,Photonic SAR Imaging,2,2,1,1,3,1.8,Optical Component Alignment
TS-10,Advanced Materials,Self-Healing Polymers,2,2,2,1,2,1.8,Repeatable Cycle Fatigue`
  },
  {
    id: 'res-21-techscan-barchart',
    fileNumber: '21',
    title: '21 — TechScan Step 8: Add Tech Scores Bar Chart',
    format: 'Vibe-Coding Prompt',
    fileSize: 'Refinement Prompt',
    icon: 'Terminal',
    category: 'prompts',
    type: 'prompt',
    description: 'Google AI Studio prompt (Demo 1, Step 8) to add a horizontal bar chart showing individual Overall Impact scores for every technology, sorted highest to lowest with a red-to-green colour scale.',
    filename: '21_TechScan_Step8_Add_BarChart_Prompt.txt',
    tags: ['File 21', 'Vibe-Coding', 'TechScan', 'Bar Chart', 'Google AI Studio'],
    usageTip: 'TechScan Step 8: Paste into your Google AI Studio chat after completing Steps 5 and 7 to add the per-technology score chart.',
    downloadContent: `Add a horizontal bar chart showing the individual 'Overall Impact' score for every 'Technology Name'. Sort the bars from highest score to lowest. Use a colour scale from red for low scores to green for high scores. Place this new chart below the Domain scores chart.`
  },
  {
    id: 'res-22-techscan-insights',
    fileNumber: '22',
    title: '22 — TechScan Step 9: Add Key Insights Section',
    format: 'Vibe-Coding Prompt',
    fileSize: 'Refinement Prompt',
    icon: 'Terminal',
    category: 'prompts',
    type: 'prompt',
    description: 'Google AI Studio prompt (Demo 1, Step 9) to add an automated Key Insights panel highlighting the top 2 highest-scoring technologies (Top Opportunities) and the lowest-scoring technology (Critical Watchlist) with its primary risk.',
    filename: '22_TechScan_Step9_Add_Insights_Prompt.txt',
    tags: ['File 22', 'Vibe-Coding', 'TechScan', 'Key Insights', 'Google AI Studio'],
    usageTip: 'TechScan Step 9: This is the final refinement step for Demo 1. Paste it last to complete the full TechScan dashboard.',
    downloadContent: `Add a 'Key Insights' section at the bottom that automatically highlights the top 2 highest-scoring technologies (Top Opportunities) and the 1 lowest-scoring technology (Critical Watchlist) based on the Overall Impact scores. Include the Primary Risk for the lowest-scoring item.`
  },
  {
    id: 'res-23-policyassist-queries',
    fileNumber: '23',
    title: '23 — PolicyAssist Test Queries (4 Sample Questions)',
    format: 'Test Query Set',
    fileSize: '4 Sample Queries',
    icon: 'Terminal',
    category: 'prompts',
    type: 'prompt',
    description: 'Four realistic officer test queries to validate the PolicyAssist bot after setup — covering overseas hotel ceilings, software procurement rules, late-night taxi claims, and weekend overtime or TOIL entitlements.',
    filename: '23_PolicyAssist_Test_Queries.txt',
    tags: ['File 23', 'PolicyAssist', 'Test Queries', 'Vibe-Coding', 'Google AI Studio'],
    usageTip: 'PolicyAssist Test Tip: After setting up the bot (File 09), test each query one at a time to validate that policy citations appear correctly.',
    downloadContent: `POLICYASSIST TEST QUERIES

Query 1 — Travel & Hotel Ceilings
I am traveling to London for a conference. What is my hotel ceiling per night, and can I book Business Class if I am Grade 7?

Query 2 — Software Procurement
Can I buy a $3,000 developer software subscription using my personal corporate credit card?

Query 3 — Late-Night Transport Claim
I left the office at 9:30 PM after working late on project deployment. Am I eligible for a taxi claim home?

Query 4 — Weekend Work & TOIL
I worked 6 hours on Saturday for an urgent system patch. Will I receive overtime pay or Time-Off-In-Lieu?`
  },
  {
    id: 'res-24-policyassist-extend',
    fileNumber: '24',
    title: '24 — PolicyAssist Extension Prompts (3 Enhancements)',
    format: 'Vibe-Coding Prompts',
    fileSize: '3 Extension Prompts',
    icon: 'Zap',
    category: 'prompts',
    type: 'prompt',
    description: 'Three follow-up prompts to extend the PolicyAssist bot: enforce strict professional grounding, add a helpdesk escalation path for out-of-scope queries, and generate a shareable standalone HTML chat interface.',
    filename: '24_PolicyAssist_Extension_Prompts.txt',
    tags: ['File 24', 'PolicyAssist', 'Extension', 'Vibe-Coding', 'Google AI Studio'],
    usageTip: 'PolicyAssist Extension Tip: Run these three prompts sequentially in the same Google AI Studio chat to progressively enhance the bot after the initial build.',
    downloadContent: `POLICYASSIST EXTENSION PROMPTS

Extension 1 — Add Strict Grounding & Tone
Ensure all responses adopt a concise, objective, and professional advisory tone. Never speculate — if a detail is not explicitly stated in the policy directives, clarify what is missing.

Extension 2 — Add an Escalation Path
If a query falls outside the provided reference documents or exceeds policy approval limits, explicitly direct the officer to the Central Procurement Office or Finance Helpdesk at helpdesk@defencetech.gov.sg.

Extension 3 — Build a Shareable Chat Interface
Generate a standalone HTML/JavaScript chat interface where officers can submit policy queries. Include document citation tags, confidence badges, and a DefenceTech banner placeholder.`
  }
];

export const SURVEY_STATS: SurveyStat[] = [
  {
    id: 'stat-1',
    stat: '54%',
    title: 'Admin Bandwidth Drain',
    description: 'Public officers report that repetitive administrative tasks, manual reporting, and log consolidation consume the majority of daily bandwidth.',
    insight: 'Reclaiming this time unlocks over 20+ hours per officer each month for high-value strategic innovation.',
    icon: 'Clock',
    highlightColor: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'stat-2',
    stat: '76%',
    title: 'Experimentation Sandboxes Needed',
    description: 'Highlight the critical need for protected time, enterprise AI sandboxes, and low-friction environments to safely experiment with AI workflows.',
    insight: 'Structured 1-day NP x MDDI AI Sprints give officers the confidence and permissions to build practical solutions safely.',
    icon: 'ShieldCheck',
    highlightColor: 'from-teal-400 to-cyan-500'
  },
  {
    id: 'stat-3',
    stat: 'Human ROI',
    title: 'Focus on Strategic Value',
    description: 'Focus on reinvesting saved administrative hours back into strategic public sector initiatives, policy analysis, and high-impact systems work.',
    insight: 'Success is measured not by replacing humans, but by multiplying the strategic capability of every officer.',
    icon: 'TrendingUp',
    highlightColor: 'from-blue-500 to-indigo-600'
  }
];

export const PARTICIPANT_QUOTES: ParticipantQuote[] = [
  {
    id: 'quote-1',
    quote: 'Before the sprint, I spent 8 hours every week manually cross-referencing vendor specs. In one day, I vibe-coded a parser prototype that reduced that to 30 minutes with human approval steps. Game changer!',
    name: 'Tan Wei Ming',
    role: 'Senior Systems Engineer',
    department: 'Digital Systems & Engineering'
  },
  {
    id: 'quote-2',
    quote: 'The 5 Whys framing stopped us from building a complex AI tool for a non-problem. We pivoted to a simple prompt skill that automates 70% of routine briefing deck drafts while keeping full human oversight.',
    name: 'Priya Ramasamy',
    role: 'Lead Project Manager',
    department: 'Cybersecurity & Infrastructure'
  },
  {
    id: 'quote-3',
    quote: 'As a non-coder, I thought AI building was only for software devs. The NP x MDDI AI Sprint proved anyone with public sector domain knowledge can build real, practical workplace utilities in hours.',
    name: 'Marcus Chen',
    role: 'Head of Operations Logistics',
    department: 'Policy & Enterprise IT'
  }
];
