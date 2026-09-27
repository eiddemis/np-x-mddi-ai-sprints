import React, { useState, useMemo } from 'react';
import { Search, ShieldCheck, Cpu, Code2 } from 'lucide-react';
import { ResourceItem } from '../types';
import { RESOURCES } from '../data/sprintData';
import { ResourceCard } from './ResourceCard';

interface ResourcesProps {
  onSelectResource: (resource: ResourceItem) => void;
}

type SessionTab = 'all' | 'enterprise-ai' | 'vibe-coding';

const SESSION_TABS: { id: SessionTab; label: string; icon: React.ReactNode; count: number }[] = [
  { id: 'all', label: 'All Files', icon: <ShieldCheck className="w-3.5 h-3.5" />, count: RESOURCES.length },
  { id: 'enterprise-ai', label: 'Enterprise AI', icon: <Cpu className="w-3.5 h-3.5" />, count: RESOURCES.filter(r => r.session === 'enterprise-ai').length },
  { id: 'vibe-coding', label: 'Vibe Coding', icon: <Code2 className="w-3.5 h-3.5" />, count: RESOURCES.filter(r => r.session === 'vibe-coding').length },
];

const SUB_GROUP_ORDER: Record<string, string[]> = {
  'enterprise-ai': ['Apps', 'Skills'],
  'vibe-coding': ['TechScan Dashboard', 'PolicyAssist'],
};

const SUB_GROUP_DESCRIPTIONS: Record<string, string> = {
  Skills: 'Analysis prompts, charts, reports & skill packaging',
  'TechScan Dashboard': 'Build the emerging-tech assessment dashboard step by step',
  'PolicyAssist': 'Build the claims & policy checker bot',
};

const APP_SECTION_ORDER: Record<string, string[]> = {
  Apps: ['SharePoint', 'Outlook'],
};

export const Resources: React.FC<ResourcesProps> = ({ onSelectResource }) => {
  const [selectedSession, setSelectedSession] = useState<SessionTab>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const sortedResources = useMemo(() => {
    return [...RESOURCES].sort((a, b) => {
      const numA = parseInt(a.fileNumber || '99', 10);
      const numB = parseInt(b.fileNumber || '99', 10);
      return numA - numB;
    });
  }, []);

  const filteredResources = useMemo(() => {
    return sortedResources.filter((res) => {
      const matchesSession = selectedSession === 'all' || res.session === selectedSession;
      const matchesSearch =
        searchQuery.trim() === '' ||
        (res.fileNumber && res.fileNumber.includes(searchQuery)) ||
        (res.displayId && res.displayId.toLowerCase().includes(searchQuery.toLowerCase())) ||
        res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (res.downloadContent && res.downloadContent.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesSession && matchesSearch;
    });
  }, [sortedResources, selectedSession, searchQuery]);

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // For grouped views, organise by subGroup order
  const groupedView = useMemo(() => {
    if (searchQuery.trim() !== '' || !(selectedSession in SUB_GROUP_ORDER)) return null;
    const order = SUB_GROUP_ORDER[selectedSession];
    return order.map(group => ({
      group,
      items: filteredResources.filter(r => r.subGroup === group),
    })).filter(g => g.items.length > 0);
  }, [filteredResources, selectedSession, searchQuery]);

  const renderCard = (resource: ResourceItem) => (
    <ResourceCard
      key={resource.id}
      resource={resource}
      onSelectResource={onSelectResource}
      copiedId={copiedId}
      onCopyText={handleCopyText}
    />
  );

  return (
    <section id="resources" className="py-20 bg-[#0A192F] relative border-b border-[#112240]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#112240] border border-[#64FFDA]/40 text-[#64FFDA] text-xs font-bold uppercase tracking-wider mb-4 shadow-lg glow-cyan">
            <ShieldCheck className="w-4 h-4 text-[#64FFDA]" />
            <span>Course Resources</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#E6F1FF] tracking-tight mb-4">
            Course <span className="text-[#64FFDA] text-glow">Resources</span>
          </h2>

        </div>

        {/* Section Jump Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
          <button
            onClick={() => { setSelectedSession('enterprise-ai'); setSearchQuery(''); }}
            className={`group flex flex-col items-start gap-2 p-4 rounded-2xl border transition-all cursor-pointer text-left ${
              selectedSession === 'enterprise-ai'
                ? 'bg-[#1b345d] border-[#64FFDA]/60 shadow-lg shadow-[#64FFDA]/10'
                : 'bg-[#112240] border-[#64FFDA]/20 hover:bg-[#1b345d] hover:border-[#64FFDA]/50'
            }`}
          >
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#64FFDA]" />
              <span className="text-xs font-black uppercase tracking-wider text-[#64FFDA]">Enterprise AI</span>
            </div>
            <p className="text-[11px] text-[#8892B0] group-hover:text-[#CCD6F6] transition-colors">Apps · Skills</p>
          </button>
          <button
            onClick={() => { setSelectedSession('vibe-coding'); setSearchQuery(''); }}
            className={`group flex flex-col items-start gap-2 p-4 rounded-2xl border transition-all cursor-pointer text-left ${
              selectedSession === 'vibe-coding'
                ? 'bg-[#1b345d] border-[#64FFDA]/60 shadow-lg shadow-[#64FFDA]/10'
                : 'bg-[#112240] border-[#64FFDA]/20 hover:bg-[#1b345d] hover:border-[#64FFDA]/50'
            }`}
          >
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#64FFDA]" />
              <span className="text-xs font-black uppercase tracking-wider text-[#64FFDA]">Vibe Coding</span>
            </div>
            <p className="text-[11px] text-[#8892B0] group-hover:text-[#CCD6F6] transition-colors">TechScan Dashboard · PolicyAssist</p>
          </button>
        </div>

        {/* Session Filter Tabs + Search */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

            {/* Session Tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {SESSION_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedSession(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    selectedSession === tab.id
                      ? 'bg-[#64FFDA] text-[#0A192F] shadow-md shadow-[#64FFDA]/20'
                      : 'bg-[#112240] text-[#CCD6F6] hover:bg-[#1d3557] hover:text-[#64FFDA] border border-[#64FFDA]/15'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                    selectedSession === tab.id ? 'bg-[#0A192F] text-[#64FFDA]' : 'bg-[#0A192F] text-[#8892B0]'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Quick Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#8892B0] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by file ID (A1, T1, P1...) or keyword..."
                className="w-full bg-[#112240] border border-[#64FFDA]/25 rounded-xl pl-10 pr-4 py-2 text-xs text-[#E6F1FF] placeholder-[#8892B0] focus:outline-none focus:border-[#64FFDA] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8892B0] hover:text-[#E6F1FF]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Resource List */}
        {groupedView ? (
          // Grouped view with sub-section dividers
          <div className="space-y-12">
            {groupedView.map(({ group, items }) => (
              <div key={group}>
                {/* Sub-group header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px flex-1 bg-[#64FFDA]/15" />
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#112240] border border-[#64FFDA]/25">
                    <span className="text-xs font-bold text-[#64FFDA] uppercase tracking-wider">{group}</span>
                    <span className="text-[10px] text-[#8892B0] font-mono">{items.length}</span>
                  </div>
                  <div className="h-px flex-1 bg-[#64FFDA]/15" />
                </div>
                {SUB_GROUP_DESCRIPTIONS[group] && (
                  <p className="text-xs text-[#8892B0] mb-5 -mt-2 text-center">{SUB_GROUP_DESCRIPTIONS[group]}</p>
                )}
                {/* App sections (SharePoint / Outlook) within Apps group */}
                {APP_SECTION_ORDER[group] ? (
                  <div className="space-y-10">
                    {APP_SECTION_ORDER[group].map(appSection => {
                      const sectionItems = items.filter(r => r.appSection === appSection);
                      if (sectionItems.length === 0) return null;
                      return (
                        <div key={appSection}>
                          <div className="flex items-center gap-2 mb-5">
                            <span className="text-[11px] font-bold text-[#8892B0] uppercase tracking-widest">{appSection}</span>
                            <div className="h-px flex-1 bg-[#112240]" />
                            <span className="text-[10px] text-[#8892B0] font-mono">{sectionItems.length}</span>
                          </div>
                          <div className="space-y-8">
                            {sectionItems.map(renderCard)}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="space-y-8">
                    {items.map(renderCard)}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          // Flat list (All tab or search results)
          <div className="space-y-8">
            {filteredResources.map(renderCard)}
          </div>
        )}

        {/* Empty state */}
        {filteredResources.length === 0 && (
          <div className="text-center py-16 bg-[#112240] rounded-2xl border border-[#64FFDA]/20">
            <Search className="w-8 h-8 text-[#8892B0] mx-auto mb-3" />
            <p className="text-base font-bold text-[#E6F1FF]">No resources found for "{searchQuery}"</p>
            <p className="text-xs text-[#8892B0] mt-1">Try clearing your search query or selecting a different session.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedSession('all'); }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#0A192F] text-[#64FFDA] text-xs font-bold border border-[#64FFDA]/30 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
