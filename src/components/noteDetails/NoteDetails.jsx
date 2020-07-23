import React from 'react';
import styles from './NoteDetails.module.scss';
import capitalize from '../../utils/capitalize';

export const NoteDetails = ({ note }) => {
  return (
    <div className={styles.details}>
      <div className="details__header">
        <div className={styles.note__meta}>
          <span 
            role="img" 
            aria-label="note-created"
          >📝</span>
          <p>
            created at 23.07.2020
          </p>
        </div>
        <div className={styles.note__title}>
          {capitalize(note.title)}
        </div>
      </div>
      <div className={styles.details__body}>
        {note.body}
      </div>
      <div className={styles.details__footer}>
        <div className={styles.box}>
          <button className="btn">Edit</button>
          <button className="btn">Delete</button>
        </div>
      </div>
    </div>
  )
}