var express = require('express');
var app = express();
var request = require('request');
app.use(express.static('public'));

app.get('/universities', function(req, res){
  var selectedCountry = req.query.country;
  console.log('country = '+selectedCountry);
  request('http://universities.hipolabs.com/search?country='+selectedCountry,
    { json: true },
    function(err, resp, body) {
      if (err) {
        return console.error(err);
      } else {
        res.send(body);
      }
    });


});

app.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');
