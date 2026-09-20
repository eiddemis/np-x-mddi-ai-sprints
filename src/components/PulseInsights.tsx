import React, { useState } from 'react';
import { SURVEY_STATS } from '../data/sprintData';
import { Clock, ShieldCheck, TrendingUp, BarChart3, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export const PulseInsights: React.FC = () => {
  const [userFeedback, setUserFeedback] = useState<string>('');
  const [selectedDept, setSelectedDept] = useState<string>('Systems Engineering');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userFeedback.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setUserFeedback('');
      setSubmitted(false);
    }, 4000);
  };

  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock':
        return <Clock className="w-6 h-6 text-[#64FFDA]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#64FFDA]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#64FFDA]" />;
      default:
        return <BarChart3 className="w-6 h-6 text-[#64FFDA]" />;
    }
  };

  return (
    <section id="insights" className="py-20 bg-[#0A192F] relative border-b border-[#112240]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#112240] border border-[#64FFDA]/30 text-[#64FFDA] text-xs font-semibold mb-3">
            <BarChart3 className="w-3.5 h-3.5 text-[#64FFDA]" />
            <span>Public Sector Workforce Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E6F1FF] tracking-tight mb-4">
            Program Principles & Workforce Pulse
          </h2>
          <p className="text-[#CCD6F6] text-base sm:text-lg">
            Key findings from public officers highlighting the core rationale for workplace AI automation.
          </p>
        </div>

        {/* 3 Main Stat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SURVEY_STATS.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#112240] hover:bg-[#1a2f52] border border-[#64FFDA]/20 border-immersive-accent rounded-2xl p-8 transition-all duration-300 shadow-xl flex flex-col justify-between relative group overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-[#0A192F] border border-[#64FFDA]/20">
                    {getStatIcon(stat.icon)}
                  </div>
                  <span className="text-xs font-bold text-[#8892B0] uppercase tracking-widest">Workforce Pulse</span>
                </div>

                {/* Big Metric Display */}
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-[#64FFDA] text-glow tracking-tight">
                    {stat.stat}
                  </div>
                  <h3 className="text-lg font-bold text-[#E6F1FF] mt-2 group-hover:text-[#64FFDA] transition-colors">
                    {stat.title}
                  </h3>
                </div>

                <p className="text-xs text-[#CCD6F6] leading-relaxed font-normal">
                  {stat.description}
                </p>
              </div>

              {/* Insight Footer */}
              <div className="pt-4 mt-6 border-t border-[#0A192F]">
                <div className="text-[11px] font-semibold text-[#CCD6F6] bg-[#020C1B] p-3 rounded-xl border border-[#64FFDA]/20">
                  <span className="font-bold block mb-0.5 text-[#64FFDA]">💡 Strategic Rationale:</span>
                  {stat.insight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Pulse Feedback Widget */}
        <div className="max-w-3xl mx-auto bg-[#112240] border border-[#64FFDA]/20 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 border-b border-[#0A192F] pb-4">
            <div className="p-2 rounded-lg bg-[#64FFDA]/10 text-[#64FFDA]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#E6F1FF]">
                Submit Your Department's Bottleneck Topic
              </h3>
              <p className="text-xs text-[#8892B0]">
                Share operational friction topics for workshop facilitators and mentors to assist during build sessions.
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="p-4 rounded-xl bg-[#020C1B] border border-[#64FFDA]/30 text-[#CCD6F6] text-xs flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#64FFDA] flex-shrink-0" />
              <span>Thank you! Your workplace bottleneck topic has been received by session facilitators.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmitFeedback} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#CCD6F6] block mb-1">
                    Department / Public Sector Agency:
                  </label>
                  <select
                    value={selectedDept}
                    onChange={(e) => setSelectedDept(e.target.value)}
                    className="w-full p-2.5 bg-[#0A192F] border border-[#64FFDA]/30 rounded-xl text-xs text-[#E6F1FF] focus:outline-none focus:border-[#64FFDA]"
                  >
                    <option value="Digital Services">Digital Services & Systems</option>
                    <option value="Policy & Governance">Policy & Governance Division</option>
                    <option value="Cybersecurity">Cybersecurity & IT Infrastructure</option>
                    <option value="Public Engagement">Public Communications & Engagement</option>
                    <option value="Corporate & Procurement">Corporate & Procurement Office</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#CCD6F6] block mb-1">
                    Target Bottleneck Type:
                  </label>
                  <select className="w-full p-2.5 bg-[#0A192F] border border-[#64FFDA]/30 rounded-xl text-xs text-[#E6F1FF] focus:outline-none focus:border-[#64FFDA]">
                    <option value="Docs">Contract / Spec PDF Reviews</option>
                    <option value="Logs">Maintenance & Inventory Logs</option>
                    <option value="Reports">Weekly Status Slide Preparation</option>
                    <option value="Compliance">Security & Audit Checklists</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#CCD6F6] block mb-1">
                  Describe the Manual Process (Symptom & Time Spent):
                </label>
                <textarea
                  rows={2}
                  value={userFeedback}
                  onChange={(e) => setUserFeedback(e.target.value)}
                  placeholder="e.g. Cross-referencing 50 vendor specifications against technical standards takes 12 hours..."
                  className="w-full p-3 bg-[#0A192F] border border-[#64FFDA]/30 rounded-xl text-xs text-[#E6F1FF] placeholder-[#8892B0] focus:outline-none focus:border-[#64FFDA]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-6 rounded-xl bg-immersive-btn text-[#0A192F] font-bold text-xs transition-all cursor-pointer shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Topic to Facilitators</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

