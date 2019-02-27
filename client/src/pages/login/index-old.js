import React from 'react';

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
          <p>Coversation around music</p>
        </div>
        <div className={styles.poweredBy}>
          <img src={spotifyIcon} alt="Spotify" />
          <p>Powered by <b>Spotify</b></p>
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles.formWrapper}>
          <img src={signinIllustration} alt="Sign In" />
          <div 
            className="fb-login-button" 
            data-width="300px" 
            data-size="large" 
            data-button-type="continue_with" 
            data-auto-logout-link="false" 
            data-use-continue-as="false"
            data-onlogin="facebookLogin"
            data-scope="public_profile, email"
          >
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Login;