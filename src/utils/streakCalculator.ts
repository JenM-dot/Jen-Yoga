import type { YogaSession } from '../types';

export function calculateStreak(sessions: YogaSession[]): number {
  if (sessions.length === 0) return 0;

  const sortedDates = [...sessions]
    .map(session => new Date(session.date).toISOString().split('T')[0])
    .sort()
    .reverse();

  const today = new Date().toISOString().split('T')[0];
  let currentStreak = 0;
  let currentDate = new Date(today);

  // Check if there's a session today or yesterday to start the streak
  const hasRecentSession = sortedDates.some(date => {
    const diff = Math.abs(new Date(today).getTime() - new Date(date).getTime());
    return diff <= 24 * 60 * 60 * 1000;
  });

  if (!hasRecentSession) return 0;

  // Calculate streak
  while (true) {
    const dateStr = currentDate.toISOString().split('T')[0];
    if (sortedDates.includes(dateStr)) {
      currentStreak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      break;
    }
  }

  return currentStreak;
}

export function getSessionDates(sessions: YogaSession[]): Set<string> {
  return new Set(
    sessions.map(session => session.date.split('T')[0])
  );
}