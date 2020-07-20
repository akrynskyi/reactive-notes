import React, { useState } from 'react';
import style from './CreateNote.module.scss';
import { AddNote } from '../addNote/AddNote';

export const CreateNote = ({ getNote, total }) => {
  const [modalToggle, setModalToggle] = useState(false);

  return (
    <>
      <div className={style.create}>
        <div className={style.total}>Total notes: {total}</div>
        <button 
          className="btn" 
          onClick={() => setModalToggle(true)}
        >Create note</button>
      </div>

      <AddNote 
        toggle={modalToggle} 
        setModalToggle={setModalToggle}
        getNote={getNote}
      />
    </>
  );
}