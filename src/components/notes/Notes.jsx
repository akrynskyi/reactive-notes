import React from 'react';
import styles from './Notes.module.scss';

export const Notes = ({ notes }) => {
  const placeholder = () => <p>placeholder</p>;
  const listItem = note => <li key={note.id}>{note.title}</li>;

  return (
    <>
      {notes.length 
      ? <ul>
          {notes.map(note => listItem(note))}
        </ul>
      : placeholder()}
    </>
  );
}