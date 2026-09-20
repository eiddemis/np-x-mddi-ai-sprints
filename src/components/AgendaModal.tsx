import React from 'react';
import { AgendaItem } from '../types';
import { X, Clock, Sparkles, CheckCircle2, Code2, ShieldAlert, UserCheck } from 'lucide-react';

interface AgendaModalProps {
  item: AgendaItem | null;
  onClose: () => void;
}

export const AgendaModal: React.FC<AgendaModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020C1B]/80 backdrop-blur-md">
      <div className="bg-[#112240] border border-[#64FFDA]/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-[#0A192F] text-[#8892B0] hover:text-[#E6F1FF] hover:bg-[#1d3557] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Time & Title Header */}
        <div className="space-y-2 border-b border-[#0A192F] pb-4 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#020C1B] text-[#64FFDA] text-xs font-bold border border-[#64FFDA]/30">
            <Clock className="w-3.5 h-3.5 text-[#64FFDA]" />
            <span>{item.time}</span>
          </div>
          <h3 className="text-2xl font-bold text-[#E6F1FF]">{item.title}</h3>
          <p className="text-xs font-semibold text-[#64FFDA] uppercase tracking-wider">{item.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-[#CCD6F6] leading-relaxed">{item.description}</p>

        {/* Sprint Focus Badge Callout if present */}
        {item.humanFirstBadge && (
          <div className="p-4 rounded-xl bg-[#020C1B] border border-[#64FFDA]/40 space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-[#64FFDA] uppercase tracking-wide">
              <Sparkles className="w-4 h-4 text-[#64FFDA]" />
              <span>[Sprint Focus Badge] · {item.humanFirstBadge.text}</span>
            </div>
            <p className="text-xs text-[#CCD6F6] leading-relaxed font-normal">
              {item.humanFirstBadge.description}
            </p>
          </div>
        )}

        {/* Key Takeaways */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-[#E6F1FF] uppercase tracking-wider flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#64FFDA]" />
            <span>Key Session Takeaways</span>
          </h4>
          <ul className="space-y-2">
            {item.keyTakeaways.map((takeaway, i) => (
              <li key={i} className="text-xs text-[#CCD6F6] flex items-start gap-2 bg-[#0A192F] p-2.5 rounded-lg border border-[#64FFDA]/20">
                <span className="text-[#64FFDA] font-bold">•</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools Used */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-[#E6F1FF] uppercase tracking-wider flex items-center gap-1.5">
            <Code2 className="w-4 h-4 text-[#64FFDA]" />
            <span>Tools & Sandbox Access</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {item.toolsUsed.map((tool) => (
              <span key={tool} className="text-xs px-3 py-1 rounded-md bg-[#0A192F] text-[#CCD6F6] border border-[#64FFDA]/20 font-medium">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Trainer Notes */}
        {item.trainerNotes && (
          <div className="p-3.5 rounded-xl bg-[#020C1B] border border-[#64FFDA]/20 text-xs text-[#8892B0] space-y-1">
            <span className="font-bold text-[#E6F1FF] block">💡 Facilitator Note:</span>
            <span>{item.trainerNotes}</span>
          </div>
        )}

        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-[#0A192F] hover:bg-[#1d3557] text-[#E6F1FF] border border-[#64FFDA]/30 font-semibold text-xs transition-colors cursor-pointer"
          >
            Close Session Details
          </button>
        </div>
      </div>
    </div>
  );
};
