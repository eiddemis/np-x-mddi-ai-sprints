import React, { useState } from 'react';
import { ResourceItem } from '../types';
import {
  FileSpreadsheet,
  Terminal,
  Mail,
  Zap,
  FileText,
  Copy,
  Check,
  Table,
  Eye,
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface ResourceCardProps {
  resource: ResourceItem;
  onSelectResource: (resource: ResourceItem) => void;
  copiedId: string | null;
  onCopyText: (text: string, id: string) => void;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  resource,
  onSelectResource,
  copiedId,
  onCopyText
}) => {
  const isSpreadsheet = resource.type === 'spreadsheet';
  const [viewMode, setViewMode] = useState<'primary' | 'secondary'>('primary');
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  // Derive sub-tag badge and metadata label
  const getSubBadge = (res: ResourceItem) => {
    switch (res.fileNumber) {
      case '01':
        return 'CORE PORTFOLIO CSV / EXCEL';
      case '02':
        return 'EXECUTIVE BRIEFING AI PROMPT';
      case '03':
        return 'DAILY BRIEF ASSISTANT PROMPT';
      case '04':
        return 'CUSTOM GPT SPECIFICATION';
      case '05':
        return 'SECURITY ESCALATION MEMO';
      case '06':
        return 'TECHSCAN VIBE-CODING SPEC';
      case '07':
        return 'TECHSCAN MULTI-METRIC CSV';
      case '08':
        return 'EMERGING TECH IMPACT MATRIX';
      case '09':
        return 'POLICYASSIST BOT SPECIFICATION';
      case '10':
        return '5 WHYS & 4CS PROBLEM FRAMING';
      case '11':
        return 'VIBE-CODING CHEAT SHEET';
      default:
        return res.format.toUpperCase();
    }
  };

  const getMetaLabel = (res: ResourceItem) => {
    switch (res.fileNumber) {
      case '01':
        return '8 Projects × 7 Columns';
      case '02':
        return '6 Prompt Directives • AI Analysis';
      case '03':
        return '3 Sections • Morning Routine';
      case '04':
        return 'Custom GPT • Public Sector Assistant';
      case '05':
        return 'Workplace Email Case Study';
      case '06':
        return '4 Dashboard Views • Vibe Spec';
      case '07':
        return '10 Technologies × 10 Columns';
      case '08':
        return '8 Technologies × 4 Columns';
      case '09':
        return '4 Policy Areas • Assistant Spec';
      case '10':
        return '5 Whys + 4Cs Diagnostic';
      case '11':
        return '4 Formulas • Safety Guidelines';
      default:
        return res.fileSize;
    }
  };

  const renderIcon = (iconName: string, className: string = 'w-7 h-7') => {
    switch (iconName) {
      case 'FileSpreadsheet':
        return <FileSpreadsheet className={className} />;
      case 'Terminal':
        return <Terminal className={className} />;
      case 'Mail':
        return <Mail className={className} />;
      case 'Zap':
        return <Zap className={className} />;
      case 'FileText':
      default:
        return <FileText className={className} />;
    }
  };

  const primaryCopyId = `${resource.id}-primary`;
  const secondaryCopyId = `${resource.id}-secondary`;

  const handlePrimaryCopy = () => {
    if (isSpreadsheet) {
      onCopyText(resource.tsvContent || resource.downloadContent || '', primaryCopyId);
    } else {
      onCopyText(resource.downloadContent || '', primaryCopyId);
    }
  };

  const handleSecondaryCopy = () => {
    if (isSpreadsheet) {
      onCopyText(resource.csvContent || resource.downloadContent || '', secondaryCopyId);
    } else {
      onCopyText(resource.downloadContent || '', secondaryCopyId);
    }
  };

  // Helper for rendering formatted prompt or document lines
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    return (
      <div className="p-4 sm:p-5 bg-[#0A192F] rounded-xl border border-[#64FFDA]/25 max-h-80 overflow-y-auto font-mono text-xs text-[#CCD6F6] leading-relaxed space-y-1.5 shadow-inner">
        {lines.map((line, idx) => {
          const trimmed = line.trim();
          const isHeading =
            trimmed.startsWith('SECTION') ||
            trimmed.startsWith('1.') ||
            trimmed.startsWith('2.') ||
            trimmed.startsWith('3.') ||
            trimmed.startsWith('4.') ||
            trimmed.startsWith('5.') ||
            trimmed.startsWith('6.') ||
            trimmed.startsWith('HUMAN') ||
            trimmed.endsWith(':') && trimmed.length < 50;
          const isAnchor =
            trimmed.startsWith('ROLE:') ||
            trimmed.startsWith('CONTEXT:') ||
            trimmed.startsWith('TASK:') ||
            trimmed.startsWith('CONSTRAINTS:');
          const isBullet = trimmed.startsWith('-') || trimmed.startsWith('•');

          if (!trimmed) {
            return <div key={idx} className="h-2" />;
          }

          if (isHeading) {
            return (
              <div key={idx} className="pt-2 pb-0.5 text-[#64FFDA] font-bold tracking-wide uppercase text-[11.5px] border-b border-[#112240] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#64FFDA]/70"></span>
                <span>{line}</span>
              </div>
            );
          }

          if (isAnchor) {
            const [label, ...rest] = line.split(':');
            return (
              <div key={idx} className="pl-2 py-0.5 border-l-2 border-[#64FFDA] text-[#E6F1FF] bg-[#112240]/40 rounded-r">
                <span className="text-[#64FFDA] font-bold">{label}:</span>
                <span className="text-[#CCD6F6]">{rest.join(':')}</span>
              </div>
            );
          }

          if (isBullet) {
            return (
              <div key={idx} className="pl-3 text-[#CCD6F6] flex items-start gap-2">
                <span className="text-[#64FFDA] select-none font-bold">›</span>
                <span>{line.replace(/^[-•]\s*/, '')}</span>
              </div>
            );
          }

          return (
            <div key={idx} className="text-[#8892B0]">
              {line}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      id={resource.id}
      className="bg-gradient-to-br from-[#112240] to-[#0D1F38] border-2 border-[#64FFDA]/50 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden transition-all duration-200 hover:border-[#64FFDA]/80"
    >
      {/* Top Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#0A192F]">
        <div className="flex items-start gap-4">
          <div className="p-3.5 rounded-2xl bg-[#0A192F] border border-[#64FFDA]/40 text-[#64FFDA] flex-shrink-0 shadow-inner">
            {renderIcon(resource.icon, 'w-7 h-7 text-[#64FFDA]')}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              {resource.fileNumber && (
                <span className="text-xs font-black text-[#0A192F] bg-[#64FFDA] px-2.5 py-0.5 rounded shadow-sm uppercase tracking-wider">
                  FILE {resource.fileNumber}
                </span>
              )}
              <span className="text-[11px] font-bold text-[#64FFDA] bg-[#020C1B] px-2.5 py-0.5 rounded border border-[#64FFDA]/40 uppercase tracking-wider">
                {getSubBadge(resource)}
              </span>
              <span className="text-[11px] font-mono text-[#8892B0]">
                {getMetaLabel(resource)}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#E6F1FF]">
              {resource.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#CCD6F6] mt-1 max-w-2xl leading-relaxed">
              {resource.description}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
          {/* Primary Action Button */}
          <button
            onClick={handlePrimaryCopy}
            className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs transition-all shadow-md cursor-pointer ${
              copiedId === primaryCopyId
                ? 'bg-[#64FFDA] text-[#0A192F]'
                : 'bg-immersive-btn text-[#0A192F] hover:shadow-[#64FFDA]/30 transform hover:-translate-y-0.5'
            }`}
            title={
              isSpreadsheet
                ? 'Copies tab-separated table. When pasted into Microsoft Excel or Google Sheets, populates into separate cells!'
                : 'Copies complete text prompt directly to your clipboard'
            }
          >
            {copiedId === primaryCopyId ? (
              <>
                <Check className="w-4 h-4 text-[#0A192F]" />
                <span>{isSpreadsheet ? 'Copied for Excel!' : 'Copied to Clipboard!'}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>{isSpreadsheet ? 'Copy for Excel (TSV)' : resource.type === 'prompt' ? 'Copy Full Prompt' : 'Copy Text'}</span>
              </>
            )}
          </button>

          {/* Secondary Action Button */}
          <button
            onClick={handleSecondaryCopy}
            className={`inline-flex items-center justify-center gap-2 px-3.5 py-3 rounded-xl border font-semibold text-xs transition-all cursor-pointer ${
              copiedId === secondaryCopyId
                ? 'bg-[#64FFDA] text-[#0A192F] border-[#64FFDA]'
                : 'bg-[#0A192F] hover:bg-[#1d3557] border-[#64FFDA]/30 text-[#CCD6F6]'
            }`}
            title={isSpreadsheet ? 'Copy raw comma-separated CSV' : 'Copy standard text'}
          >
            {copiedId === secondaryCopyId ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#0A192F]" />
                <span>{isSpreadsheet ? 'Copied CSV!' : 'Copied!'}</span>
              </>
            ) : (
              <>
                {isSpreadsheet ? (
                  <Table className="w-3.5 h-3.5 text-[#64FFDA]" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-[#64FFDA]" />
                )}
                <span>{isSpreadsheet ? 'Copy as CSV' : 'Copy as Raw'}</span>
              </>
            )}
          </button>

          {/* View Toggle Tabs */}
          <div className="flex rounded-xl bg-[#0A192F] p-1 border border-[#64FFDA]/20">
            <button
              onClick={() => {
                setViewMode('primary');
                setIsCollapsed(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                viewMode === 'primary' && !isCollapsed
                  ? 'bg-[#112240] text-[#64FFDA]'
                  : 'text-[#8892B0] hover:text-[#CCD6F6]'
              }`}
            >
              {isSpreadsheet ? 'Table Grid' : 'Formatted View'}
            </button>
            <button
              onClick={() => {
                setViewMode('secondary');
                setIsCollapsed(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                viewMode === 'secondary' && !isCollapsed
                  ? 'bg-[#112240] text-[#64FFDA]'
                  : 'text-[#8892B0] hover:text-[#CCD6F6]'
              }`}
            >
              {isSpreadsheet ? 'Raw CSV' : 'Raw Text'}
            </button>
          </div>

          {/* Optional Accordion Toggle */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2.5 rounded-xl bg-[#0A192F] hover:bg-[#1d3557] text-[#8892B0] hover:text-[#64FFDA] border border-[#64FFDA]/20 transition-colors cursor-pointer"
            title={isCollapsed ? 'Expand View' : 'Collapse View'}
          >
            {isCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Embedded Table / Content Area */}
      {!isCollapsed && (
        <div className="mt-6">
          {isSpreadsheet && resource.tableRows && resource.tableHeaders ? (
            viewMode === 'primary' ? (
              <div className="overflow-x-auto rounded-xl border border-[#64FFDA]/25 bg-[#0A192F]/95 shadow-inner max-h-96">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#020C1B] border-b border-[#64FFDA]/30 text-[#64FFDA] font-bold uppercase tracking-wider text-[11px] sticky top-0 z-10">
                      <th className="py-3 px-3">#</th>
                      {resource.tableHeaders.map((header, idx) => (
                        <th key={idx} className="py-3 px-3 whitespace-nowrap">
                          {header.replace(/_/g, ' ')}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#112240]/70 text-[#CCD6F6]">
                    {resource.tableRows.map((row, rowIdx) => {
                      return (
                        <tr
                          key={rowIdx}
                          className="hover:bg-[#112240]/60 transition-colors group font-mono text-[11.5px]"
                        >
                          <td className="py-2.5 px-3 text-[#8892B0] text-[10px]">{rowIdx + 1}</td>
                          {resource.tableHeaders!.map((colKey, colIdx) => {
                            const val = row[colKey];
                            const strVal = String(val ?? '');

                            // Schedule status pill styling
                            if (colKey === 'ScheduleStatus') {
                              let statusBadge = 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/40 font-bold';
                              if (strVal === 'Delayed') {
                                statusBadge = 'bg-rose-950/60 text-rose-300 border border-rose-500/40 font-bold';
                              } else if (strVal === 'At Risk') {
                                statusBadge = 'bg-amber-950/60 text-amber-300 border border-amber-500/40 font-bold';
                              }
                              return (
                                <td key={colIdx} className="py-2.5 px-3 text-center">
                                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] uppercase tracking-wider ${statusBadge}`}>
                                    {strVal}
                                  </span>
                                </td>
                              );
                            }

                            // Completion %
                            if (colKey === 'CompletionPct') {
                              return (
                                <td key={colIdx} className="py-2.5 px-3 text-center font-mono font-bold text-[#64FFDA]">
                                  {strVal}
                                </td>
                              );
                            }

                            // Impact score styling (Files 07 & 08)
                            if (colKey === 'Overall_Impact') {
                              const num = typeof val === 'number' ? val : parseFloat(strVal);
                              let scoreBadge = 'text-rose-400 font-bold';
                              if (num >= 4.0) {
                                scoreBadge = 'text-emerald-400 font-black';
                              } else if (num >= 3.5) {
                                scoreBadge = 'text-amber-300 font-bold';
                              }
                              return (
                                <td key={colIdx} className="py-2.5 px-3 text-center font-mono">
                                  <span className={`px-2 py-0.5 rounded bg-[#020C1B] border border-[#112240] ${scoreBadge}`}>
                                    {strVal} / 5
                                  </span>
                                </td>
                              );
                            }

                            // Support Needed highlight
                            if (colKey === 'SupportNeeded') {
                              return (
                                <td key={colIdx} className="py-2.5 px-3 font-sans">
                                  {strVal === 'None' ? (
                                    <span className="text-[#8892B0]">None</span>
                                  ) : (
                                    <span className="text-amber-300 font-semibold">{strVal}</span>
                                  )}
                                </td>
                              );
                            }

                            // Project or Technology Name
                            if (colKey === 'Project' || colKey === 'Technology_Name') {
                              return (
                                <td key={colIdx} className="py-2.5 px-3 font-sans font-bold text-[#E6F1FF] whitespace-nowrap">
                                  {strVal}
                                </td>
                              );
                            }

                            // Regular text/data
                            return (
                              <td key={colIdx} className="py-2.5 px-3 text-[#CCD6F6] font-sans">
                                {strVal}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="relative">
                <pre className="p-4 bg-[#0A192F] rounded-xl border border-[#64FFDA]/20 text-xs text-[#64FFDA] font-mono overflow-x-auto leading-relaxed max-h-80 whitespace-pre shadow-inner">
                  {resource.csvContent || resource.downloadContent}
                </pre>
              </div>
            )
          ) : (
            /* Prompts & Documents */
            viewMode === 'primary' ? (
              renderFormattedContent(resource.downloadContent || '')
            ) : (
              <pre className="p-4 bg-[#0A192F] rounded-xl border border-[#64FFDA]/20 text-xs text-[#64FFDA] font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-80 shadow-inner">
                {resource.downloadContent}
              </pre>
            )
          )}

          {/* Footer Helper Note & Fullscreen Trigger */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-3.5 text-[11px] text-[#8892B0]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#64FFDA] flex-shrink-0 animate-pulse"></span>
              <span>
                {resource.usageTip ? (
                  resource.usageTip
                ) : (
                  <>
                    Click <strong>"{isSpreadsheet ? 'Copy for Excel (TSV)' : 'Copy Full Prompt'}"</strong> to copy and paste directly into your workflow.
                  </>
                )}
              </span>
            </div>

            <button
              onClick={() => onSelectResource(resource)}
              className="text-[#64FFDA] hover:underline flex items-center gap-1 cursor-pointer font-sans font-semibold text-xs transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Inspect Fullscreen / Modal</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
