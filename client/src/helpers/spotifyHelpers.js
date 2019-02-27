function getHeader(token) {
  return {
    Authorization: `Bearer ${token}`,
  };
}

export function getToken() {
  return fetch('/spotify-token')
  .then(res => res.json())
  .then(data => data['token']);
}

export function search(searchString, token) {
  return fetch(`https://api.spotify.com/v1/search?q=${searchString}&type=track&limit=5`, {
    headers: getHeader(token)
  })
  .then(res => res.json())
  .then(res => res.tracks.items)
  .catch(err => err);
}

export function formatTrackData(track) {
  return {
    name: track.name,
    uri: track.uri,
    artist: track.artists[0].name,
    album: track.album.name,
    image: track.album.images[1].url,
  }
}