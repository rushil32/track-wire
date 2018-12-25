import React from 'react';

import styles from './VerticalCard.module.scss';

const VerticalCard = ({ item }) => {
  const imageElement = item.image 
    ? (<img src={item.image} alt={item.header} />)
    : (<div className={styles.placeholder}>{item.placeholder}</div>);

  return (
    <div className={styles.card}>
      {imageElement}
      {item.preHeader && (<span className={styles.preheader}>{item.preHeader}</span>)}
      {item.header && (<h4>{item.header}</h4>)}
      {item.body && (<p className={styles.body}>{item.body}</p>)}
    </div>
  );
}
 
export default VerticalCard;