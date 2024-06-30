
import React from 'react';

function ReminderList({ reminders, onEdit, onDelete }) {
  return (
    <ul>
      {reminders.map((reminder, index) => (
        <li key={index}>
          <span style={{ fontWeight: reminder.important ? 'bold' : 'normal' }}>
            {reminder.important && '⭐'} {reminder.text}
          </span>
          <button onClick={() => onEdit(index)}>Editar</button>
          <button onClick={() => onDelete(index)}>Borrar</button>
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
