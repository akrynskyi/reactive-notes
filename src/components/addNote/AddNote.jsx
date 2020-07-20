import React from 'react';
import styles from './AddNote.module.scss';

export const AddNote = ({ toggle, setModalToggle, getNote }) => {
  const overlayHandle = e => {
    if(e.target !== e.currentTarget) return;
    setModalToggle(false);
  }

  const createNote = e => {
    e.preventDefault();
    const { title, body } = e.currentTarget;
    if (!title.value && !body.value) return;

    getNote({
      id: Date.now(),
      title: title.value,
      body: body.value,
      date: new Date()
    });

    e.currentTarget.reset();
    setModalToggle(false);
  }

  return (
    <div 
      className={toggle ? `${styles.active} ${styles.overlay}` : styles.overlay}
      onClick={overlayHandle}
    >
      <form 
        className={styles.form}
        onSubmit={createNote}
      >
        <div className={styles.form__headline}>
          Add new note
        </div>
        <div className={styles.form__control}>
          <input
            type="text"
            placeholder="Note title"
            className="input-field"
            name="title"
          />
        </div>
        <div className={styles.form__control}>
          <textarea
            rows="15"
            placeholder="Note text"
            className="text-field"
            name="body"
          ></textarea>
        </div>
        <div className={styles.form__action}>
          <button 
            type="button" 
            className="btn"
            onClick={() => setModalToggle(false)}
          >Back</button>
          <button className="btn">Add note</button>
        </div>
      </form>
    </div>
  );
}