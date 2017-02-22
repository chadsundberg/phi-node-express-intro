var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public')); // this is saying, if it's looking for a static file, which this is... it says look in the folder public
// app.use runs every time.  This line handles the 'get' request.  All of our 'static' files, index.html, & client.js are accessed via 'get' requests.
// we need a way to get data back from the server
app.use(bodyParser.urlencoded({extended: true}));

var songList = [
  {
    title: 'We did not start the Phire',
    artist: 'Billy Joel'
  },
  {
    title: 'Ring of Phire',
    artist: 'Johnny Cash'
  }
];

//the next bit in our 'get' request, contains a function that takes in a req and res, request and response, from a server
app.get('/songs', function(req, res) {  // this is a get request for songs
  res.send(songList); // has to match 'GET' in client.js
// '/songs' also has to match in client.js
});

app.post('/newSong', function(req, res) {
  var newSong = req.body;
  if(newSong.artist !== "Justin Bieber") {
   // data from client.js, becomes req.body
  songList.push(newSong);
  console.log(songList);
  res.sendStatus(200);
} else {
  res.sendStatus(500);
}
});

app.listen(3000);
// app.listen only runs one time at the beginning, and keeps listening
