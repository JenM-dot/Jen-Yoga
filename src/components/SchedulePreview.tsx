import React from 'react';
import { Calendar } from 'lucide-react';

export function SchedulePreview() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-serif">Studio Schedule</h3>
        <a 
          href="https://leshedstudio.com/cours-yoga-fitness/horaire/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sage-600 hover:text-sage-700 transition-colors"
        >
          <Calendar size={18} />
          <span>View Full Schedule</span>
        </a>
      </div>
    </div>
  );
}