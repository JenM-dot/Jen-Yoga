import React, { useState } from 'react';
import type { YogaSession } from '../types';

interface SessionFormProps {
  onSubmit: (session: Omit<YogaSession, 'id'>) => void;
}

export function SessionForm({ onSubmit }: SessionFormProps) {
  const [title, setTitle] = useState('');
  const [score, setScore] = useState(5);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      date: new Date(date).toISOString(),
      title,
      score
    });
    setTitle('');
    setScore(5);
    setDate(new Date().toISOString().split('T')[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-serif mb-4">Add New Session</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Session Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sage-500 focus:ring-sage-500"
            required
          />
        </div>
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Class Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sage-500 focus:ring-sage-500"
            required
          />
        </div>
        <div>
          <label htmlFor="score" className="block text-sm font-medium text-gray-700">
            Score (0-10)
          </label>
          <input
            type="range"
            id="score"
            min="0"
            max="10"
            value={score}
            onChange={(e) => setScore(Number(e.target.value))}
            className="mt-1 block w-full"
          />
          <span className="text-sm text-gray-500">{score}</span>
        </div>
        <button
          type="submit"
          className="w-full bg-sage-600 text-white py-2 px-4 rounded-md hover:bg-sage-700 transition-colors"
        >
          Add Session
        </button>
      </div>
    </form>
  );
}