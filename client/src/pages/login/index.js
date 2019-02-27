import React from 'react';

import LoginForm from '../../components/login-form';
import casetteIcon from '../../assets/casette.svg';
import spotifyIcon from '../../assets/spotify.svg';
import signinIllustration from '../../assets/sign-in-illustration.png';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.brand}>
        <div></div>
        <div className={styles.content + ' animated fadeInUp'}>
          <img className={styles.logo} src={casetteIcon} alt="Track Wire" />
          <h1>Track Wire</h1>
          <p>No trolls, just music (We hope)</p>
        </div>
        <div className={styles.poweredBy}>
          <img src={spotifyIcon} alt="Spotify" />
          <p>Powered by <b>Spotify</b></p>
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles.formWrapper}>
          <img src={signinIllustration} alt="Sign In" />
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
 
export default Login;