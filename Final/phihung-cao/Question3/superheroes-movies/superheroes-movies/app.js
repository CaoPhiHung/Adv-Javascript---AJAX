var express = require('express');
var app = express();
var request = require('request');

app.use(express.static('public'));

app.get('/superhero/movies', function(req, res) {
  var movie = req.query.movie;
  request('https://itunes.apple.com/search?media=movie&term='+movie,
    { json: true },
    function(err, resp, body) {
      // implement the callback function for the API call
      if (err) {
        return console.error(err);
      } else {
        var response = { trackName:  body.results[0].trackName,
                        longDescription: body.results[0].longDescription,
                        primaryGenreName: body.results[0].primaryGenreName};
        res.send(response);
      }
    });
});

app.listen(3000, function() {
  console.log('Server running at http://localhost:3000/');
});

