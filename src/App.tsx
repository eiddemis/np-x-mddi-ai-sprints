import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Agenda } from './components/Agenda';
import { Resources } from './components/Resources';
import { CtaBanner } from './components/CtaBanner';
import { AgendaModal } from './components/AgendaModal';
import { ResourceModal } from './components/ResourceModal';
import { AgendaItem, ResourceItem } from './types';

export type ActivePage = 'agenda' | 'resources';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('agenda');
  const [selectedAgendaItem, setSelectedAgendaItem] = useState<AgendaItem | null>(null);
  const [selectedResourceItem, setSelectedResourceItem] = useState<ResourceItem | null>(null);

  return (
    <div className="min-h-screen bg-[#0A192F] text-[#CCD6F6] font-sans selection:bg-[#64FFDA] selection:text-[#0A192F]">
      <Header currentPage={activePage} onNavigate={setActivePage} />

      <main>
        {activePage === 'agenda' ? (
          <>
            <Hero onNavigateToResources={() => setActivePage('resources')} />
            <Agenda onSelectAgendaItem={(item) => setSelectedAgendaItem(item)} />
            <CtaBanner />
          </>
        ) : (
          <Resources onSelectResource={(res) => setSelectedResourceItem(res)} />
        )}
      </main>

      <AgendaModal
        item={selectedAgendaItem}
        onClose={() => setSelectedAgendaItem(null)}
      />

      <ResourceModal
        resource={selectedResourceItem}
        onClose={() => setSelectedResourceItem(null)}
      />
    </div>
  );
}
