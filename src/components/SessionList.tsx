import React from 'react';
import { Trash2 } from 'lucide-react';
import type { YogaSession } from '../types';
import { StreakChart } from './StreakChart';
import { NotesSection } from './NotesSection';
import { SchedulePreview } from './SchedulePreview';

interface SessionListProps {
  sessions: YogaSession[];
  onDelete: (id: string) => void;
}

export function SessionList({ sessions, onDelete }: SessionListProps) {
  const sortedSessions = [...sessions].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-6">
      <StreakChart sessions={sessions} />
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-serif mb-4">Your Sessions</h3>
        {sortedSessions.length === 0 ? (
          <p className="text-gray-500">No sessions recorded yet.</p>
        ) : (
          <div className="space-y-4">
            {sortedSessions.map((session) => (
              <div
                key={session.id}
                className="border-l-4 border-sage-500 pl-4 py-2"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{session.title}</h4>
                    <p className="text-sm text-gray-500">
                      {new Date(session.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-sage-100 px-3 py-1 rounded-full">
                      Score: {session.score}/10
                    </div>
                    <button
                      onClick={() => onDelete(session.id)}
                      className="text-red-500 hover:text-red-700 transition-colors p-1"
                      title="Delete session"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <SchedulePreview />
      
      <NotesSection />
    </div>
  );
}