// Retrieve the messages from the database
const getSongs = () => {
 const songsRef = firebase.database().ref('/songs');
 messagesRef.on('value', (snapshot) => {
     const data = snapshot.val();
    //  console.log(data);
     findMessage(data);
 });
}

let notFound = true;
let counter = 0;
const findMessage = (messages) => {
 const title = document.querySelector('#title').value;
 for (song in songs) {
     const songData = songs[song];
     if (songData.title == title) {
         renderMessageAsHtml(songData.song);
         notFound = false;
     }
 }if (notFound){
     renderMessageAsHtml("error: song not found");
    // alert("error: message not found");
 }

}

const goBack = () => {
    document.querySelector("#back").classList.add("hidden");
    const passcodeInput = document.querySelector('#passcodeInput');
    passcodeInput.style.display = 'block';
    const messageDiv = document.querySelector('#message');
    messageDiv.innerHTML = "";
}


const renderMessageAsHtml = (message) => {
document.querySelector("#back").classList.remove("hidden");
 // Hide the passcode view
 const passcodeInput = document.querySelector('#passcodeInput');
 passcodeInput.style.display = 'none';
 
 // Show the message
 const messageDiv = document.querySelector('#message');
 messageDiv.innerHTML = message; 
}
