import React, { useState, useEffect } from 'react';
import './App.scss';
import { CreateNote } from './components/createNote/CreateNote';
import { AddNote } from './components/addNote/AddNote';
import { Notes } from './components/notes/Notes';
import { NoteDetails } from './components/noteDetails/NoteDetails';
import { Loader } from './components/loader/Loader';
import { Overlay } from './components/overlay/Overlay';

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addNoteOpen, setAddNoteOpen] = useState(false);
  const [noteDetOpen, setNoteDetOpen] = useState(false);
  
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
      <CreateNote
        setOpen={setAddNoteOpen} 
        total={notes.length}
      />
      {
        loading 
        ? <Loader />
        : <Notes notes={notes} setNote={setNote} detailsOpen={setNoteDetOpen} />
      }
      <Overlay 
        addNoteOpen={addNoteOpen}
        setAddNoteOpen={setAddNoteOpen}
        noteDetOpen={noteDetOpen}
        setNoteDetOpen={setNoteDetOpen}
      >
        {
          (addNoteOpen && <AddNote open={addNoteOpen} setOpen={setAddNoteOpen} getNote={getNote} />) 
          || (noteDetOpen && <NoteDetails note={note} />)
        }
      </Overlay>
    </div>
  );
}

export default App;
