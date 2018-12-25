import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Search from '../search';
import styles from './Nav.module.scss';
import logo from '../../assets/logo.svg';
import ContributeModal from '../contribute-modal';
import UserImage from '../user-image';
import { UserContext } from './user-context';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true
    }
  }

  showModal = () => {
    this.setState({ showModal: true });
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    return (
    <div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.logo}>
            <Link to="/"><img src={logo} alt="Koala" /></Link>
            <Search />
          </li>
          <li className={styles.link}>
            Discover
          </li>
          <li className={styles.link} onClick={this.showModal}>
            Contribute
          </li>
          <li>
            <UserContext.Consumer>
              {({ user, setUserData }) => (<UserImage user={user} />)}
            </UserContext.Consumer>
          </li>
        </ul>
      </nav>
      <UserContext.Consumer>
        {({ user, setUserData }) => (
          <ContributeModal
            setUserData={setUserData} 
            userData={user}
            show={this.state.showModal} 
            handleClose={this.closeModal} 
          />
        )}
      </UserContext.Consumer>
    </div> 
  );
  }
}
 
export default Nav;