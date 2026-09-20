import React from 'react';
import { Sparkles, ArrowRight, FolderOpen, CheckCircle2 } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 bg-[#0A192F] relative overflow-hidden border-b border-[#112240]">
      {/* Background Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#64FFDA]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#2DD4BF]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#112240] border border-[#64FFDA]/40 rounded-3xl p-8 sm:p-12 shadow-2xl glow-cyan space-y-8">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#020C1B] border border-[#64FFDA]/50 text-[#64FFDA] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#64FFDA]" />
            <span>NP x MDDI AI Sprints · Course Portal</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#E6F1FF] tracking-tight leading-tight">
            READY TO START YOUR SPRINT? —{' '}
            <span className="text-[#64FFDA] text-glow">
              INNOVATION & PUBLIC SECTOR INGENUITY
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#CCD6F6] max-w-2xl mx-auto leading-relaxed">
            Access your workshop agenda, practice 5 Whys problem framing, download prompt cheat sheets, and utilize enterprise sandbox tools for your session.
          </p>

          {/* Value Checkmarks */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#CCD6F6] font-medium pt-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#64FFDA]" />
              <span>Enterprise AI Sandbox Access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#64FFDA]" />
              <span>Dedicated Facilitator Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#64FFDA]" />
              <span>Enterprise AI Guardrails</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#agenda"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-immersive-btn text-[#0A192F] font-black text-sm shadow-xl shadow-[#64FFDA]/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>View Programme Agenda</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#resources"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#0A192F] hover:bg-[#1d3557] text-[#64FFDA] border border-[#64FFDA]/30 font-semibold text-xs transition-all cursor-pointer"
            >
              <FolderOpen className="w-4 h-4 text-[#64FFDA]" />
              <span>Access Course Resources</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

