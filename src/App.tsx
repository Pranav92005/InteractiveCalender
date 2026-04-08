
// import './App.css'
import  { useState, useMemo } from 'react';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns';
import { HeroHeader } from './components/heroHeader';
import { CalendarGrid } from './components/calenderGrid';
import { NotesSection } from './components/notesSection';
import { format } from 'date-fns';


function App() {

  const [currentDate] = useState(new Date());
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  
  
  const [rangeNotes, setRangeNotes] = useState<Record<string, string>>({});

  
  const selectionKey = useMemo(() => {
    if (!startDate) return "none";
    if (!endDate) return format(startDate, 'yyyy-MM-dd');
    return `${format(startDate, 'yyyy-MM-dd')}_${format(endDate, 'yyyy-MM-dd')}`;
  }, [startDate, endDate]);

  
  const selectionLabel = useMemo(() => {
    if (!startDate) return "Select a date to add a note";
    if (!endDate) return `Note for ${format(startDate, 'MMM do')}`;
    return `Note for ${format(startDate, 'MMM do')} — ${format(endDate, 'MMM do')}`;
  }, [startDate, endDate]);

  const days = useMemo(() => {
    const start = startOfWeek(startOfMonth(currentDate), { weekStartsOn: 1 });
    const end = endOfWeek(endOfMonth(currentDate), { weekStartsOn: 1 });
    return eachDayOfInterval({ start, end });
  }, [currentDate]);

  const handleDateClick = (day: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
    } else {
      day < startDate ? setStartDate(day) : setEndDate(day);
    }
  };

  const handleNoteChange = (newText: string) => {
    if (selectionKey === "none") return;
    setRangeNotes(prev => ({
      ...prev,
      [selectionKey]: newText
    }));
  };

  return (
    
     <>

    

  
    <div className="min-h-screen bg-slate-200 flex items-center justify-center p-4 md:p-12">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-sm overflow-hidden border border-white">
          
        
        <HeroHeader month={format(currentDate, 'MMMM')} year={currentDate.getFullYear()} />
        
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 p-8 md:p-12">
      

          <NotesSection 
            selectionLabel={selectionLabel}
            value={rangeNotes[selectionKey] || ""} 
            onChange={handleNoteChange} 
          />
          
          <CalendarGrid 
            days={days} 
            currentMonth={currentDate} 
            startDate={startDate} 
            endDate={endDate} 
            onDateClick={handleDateClick} 
          />
        </div>

        
      </div>
    </div>
     
     </>
  
  )
}



export default App
