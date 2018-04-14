var playlist = new Object({ artistname: 'nin', songTitle: 'wish' })

//function updatePlaylist(playlist, artistName, songTitle) {
 // Object.assign({}, playlist, { artistName: [], songTitle:[] })
 // return playlist
//}

function updatePlaylist(playlist, artistName, songTitle) { playlist[artistName] = songTitle
  return playlist
}