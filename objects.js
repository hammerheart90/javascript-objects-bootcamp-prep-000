var playlist = new Object({ nin: 'wish' })

function updatePlaylist(playlist, artist, title) {
  Object.assign({}, playlist, { nin: ['wish', 'hurt'] })
  return playlist
}