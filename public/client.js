$(document).ready(function() {
  console.log('jquery was sourced!');
  getAllSongs();
  function getAllSongs() {
  $.ajax({  // this code gives us a way to get our song array and display it
    type: 'GET', // it's a 'GET' request to ask for information from somewhere
    url: '/songs',  // this goes back and matches our /songs in our app.js file
    success: function(response) {  // on success triggers a function that takes in a response and displays the information on the console log.
      console.log('response', response); // res.send(songList) in app.js sends the songList
    },
    error: function(response) {
      console.log('error', error);
    }
  });
}

$('#addSongButton').on('click', function(){  //this code allows us to add songs to songList, which is on the server.  It allows us to add information into that array from the DOM!
  // console.log('here');
  var newSongTitle = $('#title').val(); // these ids allow us to get info from the DOM
  var newSongArtist = $('#artist').val();
  var newSongObject = { // builds out a new song object
    title: newSongTitle,
    artist: newSongArtist,
  };
  console.log(newSongObject);
  $.ajax({ // this is the request that allows us to add the newly entered song into the array
    type: 'POST',
    url: '/newSong',
    data: newSongObject,
    success: function(response) {
      console.log('response', response);
      getAllSongs();
    },
    error: function(response) {
      console.log('error', error);
    }
  });
});

});
