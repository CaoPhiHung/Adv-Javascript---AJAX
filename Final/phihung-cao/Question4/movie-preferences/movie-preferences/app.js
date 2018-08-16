var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var request = require('request');
app.use(bodyParser.json());
app.use(express.static('public'));

var movies = [284053, 181808, 437033, 263115, 281338,
  335984, 141052, 406990, 283995, 375098, 274855, 381288,
  297762, 443319, 315635, 396371, 337339, 399055, 335988, 374720];

var validate = function(body) {
  var movieId = body.movie_id;
  var preference = body.preference;
  if(parseInt(movieId) && preference) {
    return movies.includes(parseInt(movieId)) && ['like', 'dislike'].includes(preference);
  }
  return false;
};

app.get('/random_movie', function(req, res) {
  var index = Math.floor(Math.random() * 20);
  var movieId = movies[index];
  if(movieId) {
    request(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=189f5fd8900f035fb6c1240f9e3b2c37`,
      { json: true },
      function(err, resp, body) {
        if (err) {
          console.error(err);
          res.status(500).send({ error: 'api.themoviedb.org is down' });
        } else {
          var result = {
            movie_id: movieId,
            title: body.title,
            release_date: body.release_date,
            overview: body.overview
          };
          res.send(result);
        }
      });
  } else {
    res.status(404).send({ error: 'movie cannot be found' });
  }
});

app.post('/movie_preference', function(req, res) {
  var body = req.body || {};
  if(validate(body)) {
    res.send(body);
  } else {
    res.status(422).send({ error: 'invalid input' });
  }
});

app.listen(3000, function() {
  console.log('Server running at http://localhost:3000/');
});


