import React from 'react';
import { Sparkles, ArrowRight, FolderOpen, CheckCircle2 } from 'lucide-react';
import heroBg from '../assets/images/sprint_hero_bg.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-[#0A192F] border-b border-[#112240]">
      {/* Background Graphic & Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src={heroBg}
          alt="NP x MDDI AI Sprints Canvas"
          className="w-full h-full object-cover object-center filter saturate-150 contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#0A192F]/80 to-[#0A192F]"></div>
      </div>

      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#64FFDA]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#2DD4BF]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#112240] border border-[#64FFDA]/40 text-[#64FFDA] text-xs font-semibold mb-6 shadow-lg glow-cyan">
            <Sparkles className="w-3.5 h-3.5 text-[#64FFDA]" />
            <span>NP x MDDI AI Sprints</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#E6F1FF] leading-tight mb-6">
            One Day.{' '}
            <span className="bg-gradient-to-r from-[#64FFDA] via-[#2DD4BF] to-[#38BDF8] bg-clip-text text-transparent">
              Real Public Sector & Workplace
            </span>{' '}
            Challenges. Built with AI.
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-[#CCD6F6] font-normal leading-relaxed mb-8 max-w-3xl">
            Empowering public officers and teams to solve workplace bottlenecks, master vibe-coding, and build effective AI solutions.
          </p>

          {/* Key Value Proposition Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl mb-10">
            <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#112240] border border-[#64FFDA]/20 text-xs text-[#CCD6F6]">
              <CheckCircle2 className="w-4 h-4 text-[#64FFDA] flex-shrink-0" />
              <span>Zero-Code to Vibe-Coding</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#112240] border border-[#64FFDA]/20 text-xs text-[#CCD6F6]">
              <CheckCircle2 className="w-4 h-4 text-[#64FFDA] flex-shrink-0" />
              <span>Enterprise AI Sandboxes</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#112240] border border-[#64FFDA]/20 text-xs text-[#CCD6F6]">
              <CheckCircle2 className="w-4 h-4 text-[#64FFDA] flex-shrink-0" />
              <span>Human Oversight First</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-12">
            <a
              href="#agenda"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-immersive-btn text-[#0A192F] font-bold text-sm shadow-xl shadow-[#64FFDA]/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Explore Programme Agenda</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#resources"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#112240] hover:bg-[#1d3557] text-[#CCD6F6] hover:text-[#64FFDA] border border-[#64FFDA]/30 hover:border-[#64FFDA] font-semibold text-sm transition-all cursor-pointer"
            >
              <FolderOpen className="w-4 h-4 text-[#64FFDA]" />
              <span>Access Course Resources</span>
            </a>
          </div>

          {/* Quick Stats Bar */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-[#112240]">
            <div className="p-4 rounded-xl bg-[#112240] border border-[#64FFDA]/15 border-immersive-accent">
              <div className="text-2xl sm:text-3xl font-bold text-[#64FFDA]">1 Day</div>
              <div className="text-xs text-[#8892B0] mt-1 font-medium">Intensive Build Sprint</div>
            </div>
            <div className="p-4 rounded-xl bg-[#112240] border border-[#64FFDA]/15 border-immersive-accent">
              <div className="text-2xl sm:text-3xl font-bold text-[#64FFDA]">5 Whys & 4Cs</div>
              <div className="text-xs text-[#8892B0] mt-1 font-medium">Problem Framing</div>
            </div>
            <div className="p-4 rounded-xl bg-[#112240] border border-[#64FFDA]/15 border-immersive-accent">
              <div className="text-2xl sm:text-3xl font-bold text-[#64FFDA]">100%</div>
              <div className="text-xs text-[#8892B0] mt-1 font-medium">Human Oversight & ROI</div>
            </div>
            <div className="p-4 rounded-xl bg-[#112240] border border-[#64FFDA]/15 border-immersive-accent">
              <div className="text-2xl sm:text-3xl font-bold text-[#64FFDA]">Zero</div>
              <div className="text-xs text-[#8892B0] mt-1 font-medium">Prior Coding Required</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
