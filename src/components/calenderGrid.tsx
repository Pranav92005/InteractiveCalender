import React from 'react';
import { format, isSameMonth, isSameDay, isWithinInterval } from 'date-fns';

interface GridProps {
  days: Date[];
  currentMonth: Date;
  startDate: Date | null;
  endDate: Date | null;
  onDateClick: (date: Date) => void;
}

export const CalendarGrid: React.FC<GridProps> = ({ days, currentMonth, startDate, endDate, onDateClick }) => {
  const isInRange = (day: Date) => {
    if (startDate && endDate) return isWithinInterval(day, { start: startDate, end: endDate });
    return false;
  };

  return (
    <div className="flex-1">
      <div className="grid grid-cols-7 mb-6">
        {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(d => (
          <div key={d} className={`text-center text-[11px] font-bold ${d.startsWith('S') ? 'text-blue-400' : 'text-gray-400'}`}>
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-2">
        {days.map((day, i) => {
          const isSelected = isSameDay(day, startDate!) || isSameDay(day, endDate!);
          const inRange = isInRange(day);
          const activeMonth = isSameMonth(day, currentMonth);

          return (
            <button
              key={i}
              onClick={() => onDateClick(day)}
              className={`relative py-3 text-sm transition-all duration-200 rounded-md
                ${!activeMonth ? 'text-gray-200' : 'text-gray-700 font-medium'}
                ${isSelected ? 'bg-blue-600 text-white shadow-lg z-10 scale-105' : 'hover:bg-gray-50'}
                ${inRange && !isSelected ? 'bg-blue-50 text-blue-600' : ''}
              `}
            >
              {format(day, 'd')}
            </button>
          );
        })}
      </div>
    </div>
  );
};