import React, { useState } from 'react';
import { AGENDA_ITEMS } from '../data/sprintData';
import { AgendaItem } from '../types';
import { Clock, ShieldAlert, Sparkles, Code2, Users, Award, Search, ChevronRight, CheckCircle, Info, Filter } from 'lucide-react';

interface AgendaProps {
  onSelectAgendaItem: (item: AgendaItem) => void;
}

export const Agenda: React.FC<AgendaProps> = ({ onSelectAgendaItem }) => {
  const [filter, setFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Morning', 'Afternoon', 'Closing'];

  const filteredItems = AGENDA_ITEMS.filter((item) => {
    const matchesCategory = filter === 'All' || item.category === filter;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.humanFirstBadge?.text && item.humanFirstBadge.text.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="agenda" className="py-20 bg-[#0A192F] relative border-b border-[#112240]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#112240] border border-[#64FFDA]/30 text-[#64FFDA] text-xs font-semibold mb-3">
            <Clock className="w-3.5 h-3.5 text-[#64FFDA]" />
            <span>Structured 1-Day Schedule</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E6F1FF] tracking-tight mb-4">
            Programme Agenda
          </h2>
          <p className="text-[#CCD6F6] text-base sm:text-lg">
            From problem framing to rapid vibe-coding and Human ROI pitching — designed for immediate workplace impact.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-[#112240] p-4 rounded-xl border border-[#64FFDA]/20">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <span className="text-xs font-semibold text-[#8892B0] flex items-center gap-1 mr-2 hidden sm:flex">
              <Filter className="w-3.5 h-3.5 text-[#64FFDA]" /> Track:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-[#64FFDA] text-[#0A192F] font-bold shadow-md shadow-[#64FFDA]/20'
                    : 'bg-[#0A192F] text-[#8892B0] hover:bg-[#1d3557] hover:text-[#64FFDA]'
                }`}
              >
                {cat === 'All' ? 'All Sessions' : cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8892B0] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search session topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 bg-[#0A192F] border border-[#64FFDA]/30 rounded-lg text-xs text-[#E6F1FF] placeholder-[#8892B0] focus:outline-none focus:border-[#64FFDA] transition-colors"
            />
          </div>
        </div>

        {/* Agenda Timeline List */}
        <div className="space-y-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-[#112240] hover:bg-[#1a2f52] border border-[#64FFDA]/20 border-immersive-accent rounded-2xl p-6 transition-all duration-300 shadow-xl relative group"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                {/* Left side: Time badge + Session Details */}
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#020C1B] text-[#64FFDA] text-xs font-bold border border-[#64FFDA]/30">
                      <Clock className="w-3.5 h-3.5 text-[#64FFDA]" />
                      {item.time}
                    </span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-[#0A192F] text-[#8892B0]">
                      Module #{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#E6F1FF] group-hover:text-[#64FFDA] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#64FFDA] tracking-wide uppercase">
                    {item.subtitle}
                  </p>

                  <p className="text-sm text-[#CCD6F6] leading-relaxed max-w-3xl">
                    {item.description}
                  </p>

                  {/* Sprint Focus Badge Callout if present */}
                  {item.humanFirstBadge && (
                    <div className="mt-4 p-3.5 rounded-xl bg-[#020C1B] border border-[#64FFDA]/30 flex items-start gap-3">
                      <div className="p-1.5 rounded-lg bg-[#64FFDA]/10 text-[#64FFDA] flex-shrink-0 mt-0.5">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#64FFDA] flex items-center gap-1.5 uppercase tracking-wide">
                          <span>[Sprint Focus Badge]</span>
                          <span className="text-[#CCD6F6]">· {item.humanFirstBadge.text}</span>
                        </div>
                        <p className="text-xs text-[#CCD6F6] mt-1 font-normal leading-relaxed">
                          {item.humanFirstBadge.description}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Tools / Artifacts pill preview */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="text-xs text-[#8892B0] font-medium">Tools used:</span>
                    {item.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] px-2.5 py-0.5 rounded bg-[#0A192F] text-[#CCD6F6] border border-[#64FFDA]/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right side: Action / Details trigger */}
                <div className="w-full lg:w-auto flex lg:flex-col items-center lg:items-end justify-between gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#0A192F]">
                  <button
                    onClick={() => onSelectAgendaItem(item)}
                    className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A192F] hover:bg-[#64FFDA] hover:text-[#0A192F] text-[#64FFDA] text-xs font-semibold border border-[#64FFDA]/30 transition-all cursor-pointer"
                  >
                    <span>View Session Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredItems.length === 0 && (
            <div className="text-center py-12 bg-[#112240] rounded-2xl border border-[#64FFDA]/20">
              <Info className="w-8 h-8 text-[#8892B0] mx-auto mb-2" />
              <p className="text-[#CCD6F6] text-sm font-medium">No sessions found matching your criteria.</p>
              <button
                onClick={() => {
                  setFilter('All');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs text-[#64FFDA] underline font-semibold"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
