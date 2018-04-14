var playlist = new Object({ artistname: 'nin', songTitle: 'wish' })

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, { artistName: [], songTitle:[] })
  return playlist
}