import React from 'react';
import styles from './FloatingButton.module.scss';

const FloatingButton = ({ handleClick, icon }) => {
  return (
    <button onClick={handleClick}>
      <i className="material-icons">{icon}</i>
    </button>
  );
}
 
export default FloatingButton;