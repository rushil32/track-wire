import React from 'react';

import styles from './FloatingButton.module.scss';

const FloatingButton = ({ icon, onClick }) => {
  return (
    <button className={styles.floatingButton}></button>
  );
}
 
export default FloatingButton;