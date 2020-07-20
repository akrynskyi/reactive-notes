import React, { useState, useEffect } from 'react';
import './App.scss';
import { CreateNote } from './components/createNote/CreateNote';
import { Notes } from './components/notes/Notes';

function App() {
  const [notes, setNotes] = useState([]);
  
  const getNote = note => {
    setNotes(notes => [...notes, note]);
  }

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
      const notes = await response.json();
      setNotes(notes);
    }

    fetchNotes();
  }, []);

  return (
    <div className="view">
      <CreateNote getNote={getNote} total={notes.length} />
      <Notes notes={notes} />
    </div>
  );
}

export default App;
