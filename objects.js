var playlist = { katyperry: 'firework' }

function updatePlaylist(obj,key,value){
  
  return Object.assign({}, obj, { [key]: value })
}