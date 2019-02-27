import React from 'react';

import styles from './PlaybackBar.module.scss';

function getSpotifyId(uri) {
  const spotifyExp = /spotify\:track\:(\w+)/;
  return spotifyExp.test(uri) ? spotifyExp.exec(uri)[1] : '';
}

const PlaybackBar = ({ uri }) => {
  if (!uri) return (<div style={{ display: 'none' }}></div>);

  return (
    <div className={`${styles.PlaybackBar} animated slideInUp`}>
      <iframe 
        title="Playback bar"
        src={`https://open.spotify.com/embed/track/${getSpotifyId(uri)}`}
        width="100%" 
        height="80" 
        frameborder="0" 
        allowtransparency="true" 
        allow="encrypted-media"
      >
      </iframe>
    </div>
  );
}
 
export default PlaybackBar;