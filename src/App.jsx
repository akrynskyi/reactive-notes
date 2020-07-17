import React, { useState } from 'react';
import './App.scss';
import { CreateNote } from './components/createNote/CreateNote';
import { Notes } from './components/notes/Notes';

function App() {
  const [notes, setNotes] = useState([]);

  const getNote = note => {
    setNotes(notes => [...notes, note]);
    console.log(notes);
  }

  return (
    <div className="view">
      <CreateNote getNote={getNote} />
      <Notes notes={notes} />
    </div>
  );
}

export default App;
