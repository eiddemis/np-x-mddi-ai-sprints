import React, { useState, useMemo } from 'react';
import { Search, ShieldCheck, Sparkles } from 'lucide-react';
import { ResourceItem } from '../types';
import { RESOURCES } from '../data/sprintData';
import { ResourceCard } from './ResourceCard';

interface ResourcesProps {
  onSelectResource: (resource: ResourceItem) => void;
}

export const Resources: React.FC<ResourcesProps> = ({ onSelectResource }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Files (01–11)', count: RESOURCES.length },
    { id: 'data', label: 'Spreadsheets & Data', count: RESOURCES.filter(r => r.category === 'data').length },
    { id: 'prompts', label: 'AI Prompts & Specs', count: RESOURCES.filter(r => r.category === 'prompts').length },
    { id: 'governance', label: 'Frameworks & Cheatsheets', count: RESOURCES.filter(r => r.category === 'governance').length },
    { id: 'case_study', label: 'Case Studies & Emails', count: RESOURCES.filter(r => r.category === 'case_study').length }
  ];

  // Sort resources by fileNumber ascending (01, 02, 03... 11)
  const sortedResources = useMemo(() => {
    return [...RESOURCES].sort((a, b) => {
      const numA = parseInt(a.fileNumber || '99', 10);
      const numB = parseInt(b.fileNumber || '99', 10);
      return numA - numB;
    });
  }, []);

  const filteredResources = useMemo(() => {
    return sortedResources.filter((res) => {
      const matchesCategory = selectedCategory === 'all' || res.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        (res.fileNumber && res.fileNumber.includes(searchQuery)) ||
        res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (res.downloadContent && res.downloadContent.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [sortedResources, selectedCategory, searchQuery]);

  // Copy helper with feedback
  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <section id="resources" className="py-20 bg-[#0A192F] relative border-b border-[#112240]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#112240] border border-[#64FFDA]/40 text-[#64FFDA] text-xs font-bold uppercase tracking-wider mb-4 shadow-lg glow-cyan">
            <ShieldCheck className="w-4 h-4 text-[#64FFDA]" />
            <span>Numbered Course Files 01–11 · Copy & Paste Hub</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#E6F1FF] tracking-tight mb-4">
            Course Files & <span className="text-[#64FFDA] text-glow">Copy-Paste Hub</span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#CCD6F6] leading-relaxed">
            All 11 course files formatted in unified executive cards with one-click clipboard copy, structured table grids, and formatted prompt views. Fully compliant with enterprise laptop restriction policies.
          </p>
        </div>

        {/* Corporate SOE / Laptop Restriction Help Banner */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-[#112240]/80 border border-[#64FFDA]/30 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-[#020C1B] border border-[#64FFDA]/30 text-[#64FFDA] flex-shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5 text-[#64FFDA]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#E6F1FF] flex items-center gap-2">
                <span>Laptop Restriction Notice</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-[#64FFDA]/15 text-[#64FFDA] border border-[#64FFDA]/30 font-normal">
                  No Download Policy
                </span>
              </h4>
              <p className="text-xs text-[#8892B0] mt-0.5 leading-relaxed">
                If your company device blocks external file downloads or USB drives, use the <span className="text-[#64FFDA] font-semibold">Copy for Excel</span> and <span className="text-[#64FFDA] font-semibold">Copy Prompt</span> buttons. All 11 files are fully self-contained on this page with one-click copy.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A192F] border border-[#64FFDA]/30 text-[#64FFDA] text-xs font-bold whitespace-nowrap shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#64FFDA]" />
            <span>Files 01–11 Self-Contained</span>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? 'bg-[#64FFDA] text-[#0A192F] shadow-md shadow-[#64FFDA]/20'
                      : 'bg-[#112240] text-[#CCD6F6] hover:bg-[#1d3557] hover:text-[#64FFDA] border border-[#64FFDA]/15'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    selectedCategory === cat.id ? 'bg-[#0A192F] text-[#64FFDA]' : 'bg-[#0A192F] text-[#8892B0]'
                  }`}>
                    {cat.count}
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
                placeholder="Filter by file number (01, 02...), topic..."
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

        {/* Unified List: All Files (01 to 11) in the Exact Executive Card Structure */}
        <div className="space-y-8">
          {filteredResources.map((resource) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              onSelectResource={onSelectResource}
              copiedId={copiedId}
              onCopyText={handleCopyText}
            />
          ))}
        </div>

        {/* Empty state when search doesn't match */}
        {filteredResources.length === 0 && (
          <div className="text-center py-16 bg-[#112240] rounded-2xl border border-[#64FFDA]/20">
            <Search className="w-8 h-8 text-[#8892B0] mx-auto mb-3" />
            <p className="text-base font-bold text-[#E6F1FF]">No resources found for "{searchQuery}"</p>
            <p className="text-xs text-[#8892B0] mt-1">Try clearing your search query or selecting a different category.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
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
