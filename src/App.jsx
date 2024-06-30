import './App.css'
import React, { useState } from 'react';
import ReminderList from './ReminderList';
import ReminderForm from './ReminderForm';


function App() {
  const [reminders, setReminders] = useState([]);
  const [currentReminder, setCurrentReminder] = useState({ text: '', important: false });
  const [editIndex, setEditIndex] = useState(null);

  const addReminder = (reminder) => {
    if (editIndex !== null) {
      const updatedReminders = [...reminders];
      updatedReminders[editIndex] = reminder;
      setReminders(updatedReminders);
      setEditIndex(null);
    } else {
      setReminders([...reminders, reminder]);
    }
    setCurrentReminder({ text: '', important: false });
  };

  const editReminder = (index) => {
    setCurrentReminder(reminders[index]);
    setEditIndex(index);
  };

  const deleteReminder = (index) => {
    const updatedReminders = reminders.filter((_, i) => i !== index);
    setReminders(updatedReminders);
  };

  return (
    <div>
      <ReminderForm 
        reminder={currentReminder} 
        onAdd={addReminder} 
      />
      <ReminderList 
        reminders={reminders} 
        onEdit={editReminder} 
        onDelete={deleteReminder} 
      />
    </div>
  );
}

export default App;