import React, { useRef, useEffect, useState } from 'react';
import styles from './AddNote.module.scss';

export const AddNote = ({ toggle, setModalToggle, getNote }) => {
  const titleInputRef = useRef();
  const textInputRef = useRef();

  const validationInitState = {
    title: {
      invalid: false,
    },
    text: {
      invalid: false,
    }
  }

  const [validation, setValidation] = useState(validationInitState);
  
  const overlayHandle = e => {
    if (e.target !== e.currentTarget) return;
    setValidation(validationInitState);
    setModalToggle(false);
  }

  const backBtnHandle = () => {
    setValidation(validationInitState);
    setModalToggle(false);
  }

  const createNote = e => {
    e.preventDefault();
    const { title, body } = e.currentTarget;

    if (!title.value && !body.value) {
      setValidation(controls => controls = {
        title: {
          ...controls.title,
          invalid: true
        },
        text: {
          ...controls.text,
          invalid: true
        }
      });

      return;
    }

    if (title.value && !body.value) {
      setValidation(controls => controls = {
        title: {
          ...controls.title,
          invalid: false
        },
        text: {
          ...controls.text,
          invalid: true
        }
      });

      textInputRef.current.focus();

      return;
    }

    if (!title.value && body.value) {
      setValidation(controls => controls = {
        title: {
          ...controls.title,
          invalid: true
        },
        text: {
          ...controls.text,
          invalid: false
        }
      });

      titleInputRef.current.focus();

      return;
    }

    getNote({
      id: Date.now(),
      title: title.value,
      body: body.value,
      date: new Date()
    });

    setValidation(validationInitState);

    e.currentTarget.reset();
    setModalToggle(false);
  }

  useEffect(() => {
    titleInputRef.current.focus();
  }, [toggle]);

  return (
    <div 
      className={
        toggle 
        ? `${styles.active} ${styles.overlay}` 
        : styles.overlay
      }
      onClick={overlayHandle}
    >
      <form 
        className={
          toggle 
          ? `${styles.form} ${styles.active}` 
          : styles.form
        }
        onSubmit={createNote}
      >
        <div className={styles.form__headline}>
          Add new note
        </div>
        <div className={styles.form__control}>
          <input
            type="text"
            placeholder="Note title"
            className={
              validation.title.invalid
              ? 'input-field invalid'
              : 'input-field'
            }
            name="title"
            autoComplete="off"
            ref={titleInputRef}
          />
          <div className={
            validation.title.invalid && !validation.text.invalid
            ? 'tooltip active' 
            : 'tooltip'
          }>
            <span>Title field is required</span>
          </div>
        </div>
        <div className={styles.form__control}>
          <textarea
            rows="15"
            placeholder="Note text"
            className={
              validation.text.invalid
              ? 'text-field invalid' 
              : 'text-field'
            }
            name="body"
            ref={textInputRef}
          ></textarea>
          <div className={
            validation.text.invalid && !validation.title.invalid
            ? 'tooltip active' 
            : 'tooltip'
          }>
            <span>Text field is required</span>
          </div>
        </div>
        <div className={styles.form__action}>
          <button 
            type="button" 
            className="btn"
            onClick={backBtnHandle}
          >Back</button>
          <div className={styles.form__btnwrap}>
            <button 
              type="submit" 
              className="btn"
            >Add note</button>
            <div className={
              validation.text.invalid && validation.title.invalid
              ? 'tooltip left active'
              : 'tooltip left'
            }>
              <span>All fields must be completed!</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}