var playlist = new Object({ artistname : 'wish' })

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, { artistName: songTitle })
  return playlist
}