import React from 'react';
import { PenLine } from 'lucide-react';

export function NotesSection() {
  const emptyNotes = Array(2).fill(null);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-serif mb-4">Notes</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {emptyNotes.map((_, index) => (
          <div
            key={index}
            className="aspect-[4/3] bg-sage-50 rounded-lg p-4 flex flex-col border-2 border-dashed border-sage-200 hover:border-sage-300 transition-colors cursor-pointer group"
          >
            <div className="flex justify-end">
              <PenLine className="text-sage-400 opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <span className="text-sage-400 text-sm">Click to add a note</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}