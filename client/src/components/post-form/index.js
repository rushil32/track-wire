import React, { Component } from 'react';

import styles from './PostForm.module.scss';
import TrackSearch from '../track-search';
import Post from '../post';

import { createPost } from '../../helpers/postHelpers';
import { formatTrackData } from '../../helpers/spotifyHelpers';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      track: '',
      trackData: {},
    }
  }

  selectTrack = (trackData) => {
    this.setState({ trackData, track: trackData.name });
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  clearForm = () => {
    this.setState({
      body: '',
      track: '',
      trackData: {},
    });
  }

  submitPost = async () => {
    const { trackData, body } = this.state;
    const trackDataFormatted = formatTrackData(trackData);
    const res = await createPost({ ...trackDataFormatted, body, user_id: 1 });
    const post = await res.json();

    this.clearForm();
  }

  render() {
    const { trackData, body, track } = this.state;

    return (
      <div className={styles.form}>
        <h3>Post Track</h3>
        <input
          name="track"
          type="input"
          value={this.state.track}
          onChange={this.handleInputChange}
        />
        <TrackSearch value={track} handleClick={this.selectTrack} />
        { trackData.name && (
          <textarea 
            name="body"
            placeholder="Say something about this track"
            value={this.state.body}
            onChange={this.handleInputChange}
          />
        )}

        {trackData.name && <Post data={{ ...formatTrackData(trackData), body }} theme={'Primary'} />}
        
        <button onClick={this.clearForm} className="">Clear</button>
        <button onClick={this.submitPost} className="secondary">Post</button>
      </div>
    );
  }
}
 
export default PostForm;