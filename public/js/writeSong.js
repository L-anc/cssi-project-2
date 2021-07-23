function addSong() {
    const title = document.querySelector('#title').value;
    const artist = document.querySelector("#artist").value;
    const link = document.querySelector("#link").value;


    
    firebase.database().ref('/Songs').push({
        title: title,
        artist: artist,
        link: link,
    })
    
}
