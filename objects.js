var playlist = new Object({ artistname: 'nin', songTitle: 'wish' })


function updatePlaylist(playlist, artistName, songTitle) { playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName, songTitle) { delete.playlist[artistName] = songTitle
  return playlist
}