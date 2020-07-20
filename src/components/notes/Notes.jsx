import React from 'react';
import styles from './Notes.module.scss';

export const Notes = ({ notes }) => {
  return (
    <ul className={styles.list}>
      {notes.map(note => (
        <li className={styles.note} key={note.id}>
          <div className={styles.note__title}>
            {note.title}
          </div>
          <div className={styles.note__body}>
            {note.body}
          </div>
          <div className={styles.note__author}>
            <div className={styles.box}>
              <div className={styles.picture}></div>
              <div className={styles.meta}>
                <div className={styles.meta__name}>
                  You
                </div>
                <div className={styles.meta__date}>
                  few seconds ago
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <button className="btn">More</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}