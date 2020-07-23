import React from 'react';
import style from './CreateNote.module.scss';

export const CreateNote = ({ setOpen, total }) => {
  return (
    <div className={style.create}>
      <div className={style.total}>
        Total notes: {total}
      </div>
      <button 
        className="btn" 
        onClick={() => setOpen(true)}
      >Create note</button>
    </div>
  );
}