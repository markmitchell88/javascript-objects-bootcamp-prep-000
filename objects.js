var playlist = { Katy Perry: 'firework' }

function updatePlaylist(obj,key,value){

  return Object.assign({}, obj, { [key]: value })
}
