import React, { Component } from 'react';
import styles from './Dash.module.scss';

import SideBar from '../../components/sidebar';
import List from '../../components/list';
import PlaybackBar from '../../components/playback-bar';

import { getAllPosts } from '../../helpers/postHelpers';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrack: {},
    }
  }

  setCurrentTrack = (track) => {
    debugger;
    this.setState({ currentTrack: track });
  }

  render() { 
    const { currentTrack } = this.state;

    return ( 
      <div className={styles.dash}>
        <SideBar />
        <List header="Latest" handleClick={this.setCurrentTrack} getData={getAllPosts} />
        <List header="Activity" handleClick={this.setCurrentTrack} getData={getAllPosts} />
        <List header="Popular" handleClick={this.setCurrentTrack} getData={getAllPosts} />
        <PlaybackBar uri={currentTrack.uri || ''} />
      </div>
    );
  }
}
 
export default Home;