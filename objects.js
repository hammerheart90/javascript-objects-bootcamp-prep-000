var playlist = new Object({ nin : 'wish' })

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, { [artistName]: [songTitle] })
  return playlist
}