import React, { useState } from 'react';
import { ResourceItem } from '../types';
import { X, Copy, Check, Table, FileText, Sparkles, ShieldCheck } from 'lucide-react';

interface ResourceModalProps {
  resource: ResourceItem | null;
  onClose: () => void;
}

export const ResourceModal: React.FC<ResourceModalProps> = ({ resource, onClose }) => {
  const [copiedType, setCopiedType] = useState<'all' | 'tsv' | 'csv' | null>(null);
  const [activeTab, setActiveTab] = useState<'table' | 'tsv' | 'csv' | 'text'>('table');

  if (!resource) return null;

  const content = resource.downloadContent || '';

  const handleCopy = (text: string, type: 'all' | 'tsv' | 'csv') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const isSpreadsheet = resource.type === 'spreadsheet' || Boolean(resource.tableRows);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#020C1B]/85 backdrop-blur-md animate-fade-in">
      <div className="bg-[#112240] border border-[#64FFDA]/40 rounded-3xl max-w-4xl w-full p-5 sm:p-8 space-y-5 max-h-[92vh] overflow-y-auto shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-xl bg-[#0A192F] text-[#8892B0] hover:text-[#E6F1FF] hover:bg-[#1d3557] border border-[#64FFDA]/20 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 border-b border-[#0A192F] pb-4 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            {resource.fileNumber && (
              <span className="text-xs font-black text-[#0A192F] bg-[#64FFDA] px-2.5 py-0.5 rounded uppercase tracking-wider">
                FILE {resource.fileNumber}
              </span>
            )}
            <span className="text-xs font-bold text-[#64FFDA] bg-[#020C1B] px-2.5 py-1 rounded-md border border-[#64FFDA]/30 uppercase tracking-wider">
              {resource.format}
            </span>
            <span className="text-xs text-[#8892B0] font-mono">
              {resource.fileSize}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-300 bg-teal-900/30 px-2 py-0.5 rounded border border-teal-500/30">
              <ShieldCheck className="w-3 h-3" />
              <span>Copy & Paste Ready</span>
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-[#E6F1FF] mt-2">
            {resource.title}
          </h3>
          
          <p className="text-xs sm:text-sm text-[#CCD6F6]">
            {resource.description}
          </p>
        </div>

        {/* Workstation Copy Notice */}
        <div className="p-3.5 rounded-xl bg-[#0A192F] border border-[#64FFDA]/20 flex items-start gap-3">
          <Sparkles className="w-4 h-4 text-[#64FFDA] flex-shrink-0 mt-0.5" />
          <div className="text-xs text-[#CCD6F6] leading-relaxed">
            <span className="text-[#E6F1FF] font-semibold">Ready to Use: </span>
            {resource.usageTip || 'You do not need to download this file. Click the copy button below to paste directly into your Enterprise AI chat or Microsoft Excel.'}
          </div>
        </div>

        {/* Spreadsheet Specific Views */}
        {isSpreadsheet && resource.tableRows ? (
          <div className="space-y-3">
            {/* View Switcher Tabs & Copy Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-[#0A192F] p-2 rounded-xl border border-[#64FFDA]/20">
              <div className="flex rounded-lg bg-[#112240] p-1 border border-[#64FFDA]/20">
                <button
                  onClick={() => setActiveTab('table')}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'table'
                      ? 'bg-[#64FFDA] text-[#0A192F]'
                      : 'text-[#CCD6F6] hover:text-[#64FFDA]'
                  }`}
                >
                  <Table className="w-3.5 h-3.5" />
                  <span>Table View</span>
                </button>
                <button
                  onClick={() => setActiveTab('tsv')}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'tsv'
                      ? 'bg-[#64FFDA] text-[#0A192F]'
                      : 'text-[#CCD6F6] hover:text-[#64FFDA]'
                  }`}
                >
                  <span>Excel (TSV)</span>
                </button>
                <button
                  onClick={() => setActiveTab('csv')}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'csv'
                      ? 'bg-[#64FFDA] text-[#0A192F]'
                      : 'text-[#CCD6F6] hover:text-[#64FFDA]'
                  }`}
                >
                  <span>Raw CSV</span>
                </button>
              </div>

              {/* Copy Buttons */}
              <div className="flex items-center gap-2">
                {resource.tsvContent && (
                  <button
                    onClick={() => handleCopy(resource.tsvContent || content, 'tsv')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      copiedType === 'tsv'
                        ? 'bg-[#64FFDA] text-[#0A192F]'
                        : 'bg-[#112240] text-[#64FFDA] hover:bg-[#1d3557] border border-[#64FFDA]/30'
                    }`}
                    title="Copies tab-separated text so pasting into Excel populates columns"
                  >
                    {copiedType === 'tsv' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedType === 'tsv' ? 'Copied for Excel!' : 'Copy for Excel'}</span>
                  </button>
                )}

                <button
                  onClick={() => handleCopy(resource.csvContent || content, 'csv')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    copiedType === 'csv'
                      ? 'bg-[#64FFDA] text-[#0A192F]'
                      : 'bg-[#112240] text-[#CCD6F6] hover:bg-[#1d3557] border border-[#64FFDA]/20'
                  }`}
                >
                  {copiedType === 'csv' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedType === 'csv' ? 'Copied CSV!' : 'Copy CSV'}</span>
                </button>
              </div>
            </div>

            {/* Display Body based on activeTab */}
            {activeTab === 'table' && (
              <div className="overflow-x-auto rounded-xl border border-[#64FFDA]/20 bg-[#0A192F] max-h-96">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#020C1B] text-[#64FFDA] font-bold border-b border-[#64FFDA]/30 sticky top-0 uppercase tracking-wider text-[11px]">
                      <th className="py-2.5 px-3">#</th>
                      {resource.tableHeaders?.map((header, idx) => (
                        <th key={idx} className="py-2.5 px-3">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#112240] text-[#CCD6F6]">
                    {resource.tableRows.map((row, rowIdx) => (
                      <tr key={rowIdx} className="hover:bg-[#112240]/60 transition-colors font-mono text-[11px]">
                        <td className="py-2 px-3 text-[#8892B0] text-[10px]">{rowIdx + 1}</td>
                        {resource.tableHeaders?.map((header, cellIdx) => {
                          const val = row[header];
                          const strVal = String(val ?? '');
                          const isImpact = header.toLowerCase().includes('impact');
                          const isStatus = header === 'ScheduleStatus';
                          let badgeStyle = '';

                          if (isImpact && typeof val === 'number') {
                            if (val >= 4.0) badgeStyle = 'text-emerald-400 font-bold';
                            else if (val >= 3.5) badgeStyle = 'text-amber-400 font-bold';
                            else badgeStyle = 'text-rose-400 font-bold';
                          } else if (isStatus) {
                            if (strVal === 'On Track') badgeStyle = 'text-emerald-400 font-bold';
                            else if (strVal === 'At Risk') badgeStyle = 'text-amber-400 font-bold';
                            else if (strVal === 'Delayed') badgeStyle = 'text-rose-400 font-bold';
                          }

                          return (
                            <td key={cellIdx} className={`py-2 px-3 whitespace-nowrap ${badgeStyle}`}>
                              {strVal}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'tsv' && (
              <div className="relative">
                <div className="text-[11px] text-[#8892B0] mb-1.5 flex items-center justify-between">
                  <span>Tab-Separated Values (TSV) — Formatted for Excel / Sheets clipboard paste:</span>
                </div>
                <pre className="p-4 bg-[#0A192F] rounded-xl border border-[#64FFDA]/20 text-xs text-[#64FFDA] font-mono overflow-x-auto leading-relaxed max-h-80 whitespace-pre">
                  {resource.tsvContent || content}
                </pre>
              </div>
            )}

            {activeTab === 'csv' && (
              <div className="relative">
                <div className="text-[11px] text-[#8892B0] mb-1.5 flex items-center justify-between">
                  <span>Comma-Separated Values (CSV) — Formatted for code / data pipelines:</span>
                </div>
                <pre className="p-4 bg-[#0A192F] rounded-xl border border-[#64FFDA]/20 text-xs text-[#64FFDA] font-mono overflow-x-auto leading-relaxed max-h-80 whitespace-pre">
                  {resource.csvContent || content}
                </pre>
              </div>
            )}
          </div>
        ) : (
          /* Standard Prompt / Document / Email View */
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-[#CCD6F6]">
              <span className="uppercase tracking-wider">File Content ({resource.filename})</span>
              <button
                onClick={() => handleCopy(content, 'all')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A192F] hover:bg-[#1d3557] border border-[#64FFDA]/30 text-[#64FFDA] font-bold text-xs cursor-pointer transition-colors"
              >
                {copiedType === 'all' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#64FFDA]" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Full Text</span>
                  </>
                )}
              </button>
            </div>

            <pre className="p-4 bg-[#0A192F] rounded-xl border border-[#64FFDA]/20 text-xs text-[#64FFDA] font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-80">
              {content}
            </pre>
          </div>
        )}

        {/* Modal Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#0A192F]">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#0A192F] hover:bg-[#1d3557] text-[#CCD6F6] hover:text-[#E6F1FF] border border-[#64FFDA]/30 font-semibold text-xs transition-colors cursor-pointer"
          >
            Close Inspector
          </button>

          <div className="flex items-center gap-3">
            {/* Primary Copy Action */}
            <button
              onClick={() => handleCopy(isSpreadsheet ? (resource.tsvContent || content) : content, 'all')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-immersive-btn text-[#0A192F] font-bold text-xs shadow-md shadow-[#64FFDA]/20 cursor-pointer transform hover:-translate-y-0.5 transition-all"
            >
              {copiedType === 'all' ? (
                <>
                  <Check className="w-4 h-4 text-[#0A192F]" />
                  <span>Copied Successfully!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{isSpreadsheet ? 'Copy Data for Excel' : 'Copy All Text'}</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
