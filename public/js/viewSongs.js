// Retrieve the messages from the database
const getSongs = () => {
 const songsRef = firebase.database().ref('/Songs');
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
         renderSongAsHtml(songData);
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
    const displayDiv = document.querySelector('#display');
    displayDiv.innerHTML = "";
    document.querySelector("#image").classList.add("hidden");
}

var linkkey;
const renderSongAsHtml = (songData) => {
document.querySelector("#back").classList.remove("hidden");
document.querySelector("#image").classList.remove("hidden");
 // Hide the passcode view
 const passcodeInput = document.querySelector('#passcodeInput');
 passcodeInput.style.display = 'none';
 
 // Show the title
 const displayDiv = document.querySelector('#display');
 displayDiv.innerHTML = "Title: " + songData.title + "<br>Artist: " + songData.artist + "<br>Link: " + songData.link; 
 linkkey = songData.link.substring(32);
 
}
