import React, { useState, useEffect } from 'react';
import './App.scss';
import { CreateNote } from './components/createNote/CreateNote';
import { Notes } from './components/notes/Notes';
import { Loader } from './components/loader/Loader';

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const getNote = note => {
    setNotes(notes => [...notes, note]);
  }

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
      const notes = await response.json();
      setLoading(false);
      setNotes(notes);
    }

    fetchNotes();
  }, []);

  return (
    <div className="view">
      <CreateNote getNote={getNote} total={notes.length} />
      {loading ? <Loader /> : <Notes notes={notes} />}
    </div>
  );
}

export default App;
