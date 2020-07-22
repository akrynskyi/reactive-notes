import React, { useRef, useEffect } from 'react';
import styles from './Notes.module.scss';
import Sortable from 'sortablejs';
import capitalize from '../../utils/capitalize';
import cut from '../../utils/cut-text';

export const Notes = ({ notes }) => {
  const list = useRef();
  
  useEffect(() => {
    new Sortable(list.current, {
      handle: `.${styles.note__handle}`,
      onEnd: e => {
        console.log(e);
      }
    });
  });

  return (
    <ul 
      className={styles.list}
      ref={list}
    >
      {notes.map(note => (
        <li className={`${styles.note} draggable`} key={note.id}>
          <div className={`${styles.box} ${styles.btw} box`}>
            <div className={styles.note__title}>
              {capitalize(note.title)}
            </div>
            <div className={`${styles.note__handle} drag-handle`}>
              <i className="fas fa-grip-horizontal"></i>
            </div>
          </div>
          <div className={styles.note__body}>
            {cut(note.body, 100)}
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