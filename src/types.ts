export interface AgendaItem {
  id: string;
  time: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Morning' | 'Afternoon' | 'Closing';
  humanFirstBadge?: {
    text: string;
    description: string;
  };
  keyTakeaways: string[];
  toolsUsed: string[];
  trainerNotes?: string;
}

export interface ResourceItem {
  id: string;
  fileNumber?: string;
  title: string;
  format: string;
  fileSize: string;
  icon: string;
  description: string;
  filename: string;
  downloadContent?: string;
  downloadUrl?: string;
  tags: string[];
  category?: 'data' | 'prompts' | 'governance' | 'case_study' | 'tools';
  type?: 'spreadsheet' | 'prompt' | 'document' | 'email' | 'code';
  tsvContent?: string;
  csvContent?: string;
  tableHeaders?: string[];
  tableRows?: Array<Record<string, string | number>>;
  usageTip?: string;
}

export interface SurveyStat {
  id: string;
  stat: string;
  title: string;
  description: string;
  insight: string;
  icon: string;
  highlightColor: string;
}

export interface ParticipantQuote {
  id: string;
  quote: string;
  name: string;
  role: string;
  department: string;
}
