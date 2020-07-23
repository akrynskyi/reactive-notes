import React from 'react';
import styles from './Overlay.module.scss';

export const Overlay = (props) => {
  const {
    children, 
    addNoteOpen, 
    setAddNoteOpen, 
    noteDetOpen, 
    setNoteDetOpen 
  } = props;

  const overlayHandle = e => {
    if (e.target !== e.currentTarget) return;
    
    if (addNoteOpen) {
      setAddNoteOpen(false);
    } else {
      setNoteDetOpen(false);
    }
  }

  return (
    <div
      className={addNoteOpen || noteDetOpen ? `${styles.active} ${styles.overlay}` : styles.overlay}
      onClick={overlayHandle}
    >
      {children}
    </div>
  )
}