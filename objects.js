var playlist = new Object({ artistName : songTitle })

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, { [artistName]: [songTitle] })
  return playlist
}