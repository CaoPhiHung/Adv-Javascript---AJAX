var express = require('express');
var app = express();
var request = require('request');
app.use(express.static('public'));

// var options = {
//   url: 'https://api.yelp.com/v3/businesses/search?term=restaurants&locale=en_CA &location=vancouver,bc,canada.........',
//   headers: {'Authorization': 'Bearer xxxxx' }
//   };
//   request(options, function(error, response, body) {
//   if (error) {
//   return console.error(error);
//   } else {
//   console.log('data from API call = ' +JSON.stringify(body));
//   });
var apiKey = "Bearer " + "wwc_SX5H-PJ2-MZT06vgVR0z9OjPKuIUH4mn-mQwk2OlFtusFrYWcnTC5hyu0T_XaG8JoXEipVAIqvGlyW9i2QdSPpBVDcL0NfM6T715WVIJJXA_Gxxk0UVLtSJYW3Yx";
app.get('/restaurants/', function(req, res){
  var selected_cuisine = req.query.selected_cuisine;
  console.log('cuisine = '+selected_cuisine);
  var options = {
    url: 'https://api.yelp.com/v3/businesses/search?term=' + selected_cuisine +'&locale=en_CA &location=vancouver,bc,canada',
    headers: {'Authorization': apiKey }
    };
  request(options, function(error, response, body) {
    if (error) {
    return console.error(error);
    } else {
    console.log('data from API call = ' +JSON.stringify(body));
    }
  });


});

app.get('/reviews/', function(req, res){
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