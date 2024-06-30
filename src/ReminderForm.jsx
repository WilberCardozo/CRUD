import React, { useState, useEffect } from 'react';

function ReminderForm({ reminder, onAdd }) {
  const [text, setText] = useState(reminder.text);
  const [important, setImportant] = useState(reminder.important);

  useEffect(() => {
    setText(reminder.text);
    setImportant(reminder.important);
  }, [reminder]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ text, important });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Recordatorio" 
      />
      <label>
        Importante
        <input 
          type="checkbox" 
          checked={important} 
          onChange={(e) => setImportant(e.target.checked)} 
        />
      </label>
      <button type="submit">Guardar</button>
    </form>
  );
}

export default ReminderForm;