import React from 'react';
import FacebookLogin from 'react-facebook-login';

import styles from './Login.module.scss';
import alienIcon from '../../assets/alien-icon.svg';

const Login = ({ onSuccess }) => {
  return (
    <div className={styles.login}>
      <div className={styles.userIcon}>
        <img src={alienIcon} alt="User" />
      </div>
      <p>Login to start adding content</p>
      <div className={styles.loginBtns}>
        <FacebookLogin
          appId="1855110828073208"
          autoLoad={true}
          fields="name,email,picture"
          cssClass={styles.facebookBtn}
          callback={onSuccess} 
        />
      </div>
    </div>
  );
}
 
export default Login;