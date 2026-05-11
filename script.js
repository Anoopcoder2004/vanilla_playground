function saveName(){
  const name = document.getElementById('nameInput').value;
  localStorage.setItem('username',name);
  showName();
}

function showName(){
  const savedName = localStorage.getItem('username');
  const theme = localStorage.getItem('')
  if(savedName){
    document.getElementById('displayName').innerHTML = "Saved: " + savedName;
  }
  clear();
}
showName();

function clear(){
localStorage.clear();
}
