var express = require('express');
var app = express();
var request = require('request');
app.use(express.static('public'));

var apiKey = "Bearer " + "wwc_SX5H-PJ2-MZT06vgVR0z9OjPKuIUH4mn-mQwk2OlFtusFrYWcnTC5hyu0T_XaG8JoXEipVAIqvGlyW9i2QdSPpBVDcL0NfM6T715WVIJJXA_Gxxk0UVLtSJYW3Yx";

app.get('/restaurants/', function(req, res){
  var selected_cuisine = req.query.cuisine;
  var sortby = req.query.sortBy;
  var priceFilter = req.query.priceFilter;
  var options = {
    url: 'https://api.yelp.com/v3/businesses/search?term=' + selected_cuisine +'&sort_by='+ sortby +'&price=' + priceFilter +'&limit=10&locale=en_CA&location=vancouver,bc,canada',
    headers: {'Authorization': apiKey }
    };
  request(options, function(error, response, body) {
    if (error) {
      return console.error(error);
    } else {
      res.send(body);
    }
  });


});

app.get('/reviews/', function(req, res){
  var id = req.query.id;
  var options = {
    url: 'https://api.yelp.com/v3/businesses/' + id + '/reviews',
    headers: {'Authorization': apiKey }
    };
  request(options, function(error, response, body) {
    if (error) {
    return console.error(error);
    } else {
    res.send(body);
    }
  });


});

app.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');