import React, { Component } from 'react';
import * as spotify from '../../helpers/spotifyHelpers';

import styles from './TrackSearch.module.scss';

class TrackSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      searchString: '',
      searchResults: [],
      showResults: true,
    }
  }

  static getDerivedStateFromProps(props, state) {
    return { searchString: props.value };
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    const { searchString, token } = this.state;
    let searchResults = [];

    if (searchString !== prevState.searchString && searchString !== '') {
      searchResults = await spotify.search(searchString, token);
      this.setState({ searchResults });
    }
  }

  componentDidMount() {
    this.setSpotifyToken();
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  setSearchResultsRef = (node) => {
    this.searchResultsRef = node;
  }

  handleClick = (e) => {
    if (this.searchResultsRef && !this.searchResultsRef.contains(e.target)) {
      this.setState({ showResults: false });
    }
  }

  selectTrack = (item) => {
    this.props.handleClick(item);
    this.setState({ showResults: false });
  }

  setSpotifyToken = async () => {
    const token = await spotify.getToken();
    this.setState({ token });
  }

  render() {
    const { searchResults, showResults } = this.state;
    const { value } = this.props;

    if (value === '') return (<div style={{ display: 'none' }}></div>);

    return (
      <div>
        {(searchResults.length !== 0 && showResults) && (
          <ul className={styles.Results} ref={this.setSearchResultsRef}>
            {searchResults.map((item, index) => 
              <li key={index} onClick={() => this.selectTrack(item)}>
                <span>{item.name}</span>
                <span>{item.artists[0].name}</span>
              </li>
            )}
          </ul>
        )}
      </div>
    );
  }
}

TrackSearch.defaultProps = {
  value: '',
}
 
export default TrackSearch;