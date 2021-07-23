// Retrieve the messages from the database
const getSongs = () => {
 const songsRef = firebase.database().ref('/songs');
 songsRef.on('value', (snapshot) => {
     const data = snapshot.val();
    //  console.log(data);
     findSong(data);
 });
}

let notFound = true;
let counter = 0;
const findSong = (songs) => {
 const title = document.querySelector('#title').value;
 for (song in songs) {
     const songData = songs[song];
     if (songData.title == title) {
         renderSongAsHtml(songData.song);
         notFound = false;
     }
 }if (notFound){
     renderSongAsHtml("error: song not found");
    // alert("error: message not found");
 }

}

const goBack = () => {
    document.querySelector("#back").classList.add("hidden");
    const passcodeInput = document.querySelector('#passcodeInput');
    passcodeInput.style.display = 'block';
    const titleDiv = document.querySelector('#title');
    titleDiv.innerHTML = "";
    const artistDiv = document.querySelector('#artist');
    artistDiv.innerHTML = ""; 
}


const renderSongAsHtml = (song) => {
document.querySelector("#back").classList.remove("hidden");
 // Hide the passcode view
 const passcodeInput = document.querySelector('#passcodeInput');
 passcodeInput.style.display = 'none';
 
 // Show the title
 const titleDiv = document.querySelector('#title');
 titleDiv.innerHTML = song.title; 
 const artistDiv = document.querySelector('#artist');
 artistDiv.innerHTML = song.artist; 
 
}
