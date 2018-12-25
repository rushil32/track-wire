import React from 'react';

import styles from './Modal.module.scss';

const Modal = ({ show, children, handleClose, header }) => {
  const showHideClass = show ? styles.show : styles.hide;
  
  return (
    <div className={`${styles.modal} ${showHideClass}`}>
      <div className={`animated faster zoomIn ${styles.modalBox}`}>
        <div className={styles.header}>
          <h3>{header}</h3>
          <i className="material-icons" onClick={handleClose}>close</i>
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
}
 
export default Modal;