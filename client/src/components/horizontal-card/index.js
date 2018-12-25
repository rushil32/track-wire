import React from 'react';

import styles from './HorizontalCard.module.scss';

const HorizontalCard = ({ text, image = '' }) => {
  const imageElement = image 
    ? (<img src={image} alt={text}></img>)
    : (<div className={styles.placeholder}>{text[0]}</div>);

  return (
    <div className={styles.card}>
      {imageElement}
      <span>{text}</span>
    </div>
  );
}
 
export default HorizontalCard;