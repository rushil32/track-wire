import React from 'react';

import styles from './UserImage.module.scss';
import alienIcon from '../../assets/alien-icon.svg';

const UserImage = ({ user }) => {
  if (!user.picture) {
    return (
      <img src={alienIcon} className={styles.userImage} alt="User Icon"></img>
    )
  }

  return (
    <img src={user.picture} className={styles.userImage} alt={user.name}></img>
  );
}
 
export default UserImage;