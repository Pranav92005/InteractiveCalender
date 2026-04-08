import React from 'react';

interface NotesProps {
  selectionLabel: string;
  value: string;
  onChange: (val: string) => void;
}

export const NotesSection: React.FC<NotesProps> = ({ selectionLabel, value, onChange }) => (
  <div className="flex flex-col h-full border-r border-gray-100 pr-0 md:pr-8">
    <div className="mb-4">
      <h3 className="text-sm  font-medium text-gray-500 uppercase tracking-tighter">Notes</h3>
      <p className="text-[10px] text-gray-800 font-bold uppercase">{selectionLabel}</p>
    </div>
    <textarea 
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-48 md:h-64 bg-transparent border-2 rounded-sm p-1 resize-none focus:ring-0 text-gray-700 leading-8 text-sm"
      placeholder="Type notes here..."
      style={{
        backgroundImage: 'linear-gradient(transparent, transparent 31px, #edf2f7 31px)',
        backgroundSize: '100% 32px'
      }}
    />
  </div>
);