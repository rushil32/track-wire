import React from 'react';
import PropTypes from 'prop-types';

import styles from './Hero.module.scss';
import bg from '../../assets/tech-banner.jpg';

const Hero = ({ children, theme = "default" }) => {
  return (
    <div className={styles[theme]}>
      <img src={bg} className={styles.background} />
      <div className={styles.content}>
        {children && children}
      </div>
    </div>
  );
}
 
Hero.propTypes = {
  theme: PropTypes.string,
}
 
export default Hero;