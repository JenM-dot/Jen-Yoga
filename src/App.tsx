import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import { Header } from './components/Header';
import { SessionForm } from './components/SessionForm';
import { SessionList } from './components/SessionList';
import { Footer } from './components/Footer';
import type { YogaSession } from './types';

const BACKGROUND_MUSIC_URL = 'https://assets.mixkit.co/music/preview/mixkit-relaxing-in-nature-522.mp3';

export default function App() {
  const [sessions, setSessions] = useState<YogaSession[]>([]);
  const [play, { stop }] = useSound(BACKGROUND_MUSIC_URL, { 
    volume: 0.4,
    loop: true 
  });

  useEffect(() => {
    play();
    return () => stop();
  }, [play, stop]);

  const addSession = (newSession: Omit<YogaSession, 'id'>) => {
    setSessions(prev => [...prev, { ...newSession, id: crypto.randomUUID() }]);
  };

  const deleteSession = (id: string) => {
    setSessions(prev => prev.filter(session => session.id !== id));
  };

  return (
    <div className="min-h-screen bg-sage-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-20" />
        </div>
        
        <div className="max-w-2xl mx-auto space-y-8">
          <SessionForm onSubmit={addSession} />
          <SessionList sessions={sessions} onDelete={deleteSession} />
        </div>
      </main>
      <Footer />
    </div>
  );
}