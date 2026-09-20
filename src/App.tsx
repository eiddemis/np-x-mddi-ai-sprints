import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Agenda } from './components/Agenda';
import { Resources } from './components/Resources';
import { CtaBanner } from './components/CtaBanner';
import { AgendaModal } from './components/AgendaModal';
import { ResourceModal } from './components/ResourceModal';
import { AgendaItem, ResourceItem } from './types';

export default function App() {
  const [selectedAgendaItem, setSelectedAgendaItem] = useState<AgendaItem | null>(null);
  const [selectedResourceItem, setSelectedResourceItem] = useState<ResourceItem | null>(null);

  return (
    <div className="min-h-screen bg-[#0A192F] text-[#CCD6F6] font-sans selection:bg-[#64FFDA] selection:text-[#0A192F]">
      {/* Header & Nav */}
      <Header />

      {/* Main Sections */}
      <main>
        <Hero />

        <Agenda
          onSelectAgendaItem={(item) => setSelectedAgendaItem(item)}
        />

        <Resources
          onSelectResource={(res) => setSelectedResourceItem(res)}
        />

        <CtaBanner />
      </main>

      {/* Interactive Modals */}
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

