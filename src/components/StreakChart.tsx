import React, { useEffect, useState } from 'react';
import type { YogaSession } from '../types';
import { calculateStreak, getSessionDates } from '../utils/streakCalculator';
import { motion } from 'framer-motion';

interface StreakChartProps {
  sessions: YogaSession[];
}

export function StreakChart({ sessions }: StreakChartProps) {
  const [shouldSlide, setShouldSlide] = useState(false);
  const streak = calculateStreak(sessions);
  const sessionDates = getSessionDates(sessions);
  
  const thirtyDays = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date.toISOString().split('T')[0];
  }).reverse();

  useEffect(() => {
    const last30DaysCompleted = thirtyDays.every(date => sessionDates.has(date));
    setShouldSlide(last30DaysCompleted);
  }, [sessions]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-serif">Your Streak</h3>
        <div className="text-2xl font-bold text-sage-600">
          {streak} {streak === 1 ? 'day' : 'days'}
        </div>
      </div>
      
      <div className="relative">
        {/* Y-axis line */}
        <div className="absolute left-0 top-0 w-px h-full bg-gray-200" />
        
        {/* Chart area */}
        <div className="pl-1 pr-1 pb-1">
          <motion.div 
            className="flex gap-[2px] relative"
            animate={{ x: shouldSlide ? '-100%' : 0 }}
            transition={{ duration: 0.5 }}
          >
            {thirtyDays.map(date => {
              const hasSession = sessionDates.has(date);
              return (
                <div
                  key={date}
                  className="flex-1"
                  title={new Date(date).toLocaleDateString()}
                >
                  <motion.div
                    className={`h-20 rounded-sm transition-colors duration-300 ${
                      hasSession ? 'bg-sage-500' : 'bg-gray-200'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              );
            })}
          </motion.div>
          
          {/* X-axis line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200" />
        </div>
      </div>
    </div>
  );
}