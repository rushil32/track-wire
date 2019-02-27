import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import styles from './Sidebar.module.scss';
import PostForm from '../../components/post-form';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: '',
    }
  }

  toggle = (toggled) => {
    this.setState((prevState) => ({
      toggled: prevState.toggled === toggled ? '' : toggled,
    }));
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  setSidebarRef = (node) => {
    this.sidebarRef = node;
  }

  handleClick = (e) => {
    if (this.sidebarRef && !this.sidebarRef.contains(e.target)) {
      this.setState({ toggled: '' });
    }
  }

  render() { 
    let toggledElement;
    const { toggled } = this.state; 

    if (toggled === 'post') {
      toggledElement = <PostForm />
    } else {
      toggledElement = <div style={{display: 'none'}}></div>;
    }

    return (
      <div className={styles.Sidebar} ref={this.setSidebarRef}>
        <ul className={styles.SidebarLinks}>
          <li onClick={() => this.toggle('post')}>
            <i className="material-icons">add</i>
          </li>
          <li><i className="material-icons">account_circle</i></li>
          <li><i className="material-icons">settings</i></li>
        </ul>

        <ReactCSSTransitionGroup
          transitionName="expand-right"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          { (toggled !== '') && <div className={styles.Toggled}>{toggledElement}</div> }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
 
export default Sidebar;