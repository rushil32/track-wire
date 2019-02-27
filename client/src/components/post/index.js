import React from 'react';
import styles from './Post.module.scss';


const Post = ({ data, theme='White' }) => {
  const { image, name, artist, body, uri } = data;
  return (
    <div className={`${styles.Post} ${styles[theme]}`}>
      <div className={styles.Info}>
        <img src={image} alt={name} />
        <div className={styles.TrackInfo}>
          <span>{name}</span>
          <span>{artist}</span>
        </div>
      </div>
      {body && (
        <div className={styles.Body}>
          <span>{body}</span>
        </div>
      )}
    </div>
  );
}

export default Post;