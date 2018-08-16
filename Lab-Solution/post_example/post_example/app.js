var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

// POST localhost:3000/users, body = '{ "id": 1, "name": "Ed Leng" }'
app.post('/users', function(req, res) {
  console.log('req.path = '+req.path);
  console.log('body = '+JSON.stringify(req.body));

  res.send({id: req.body.name});
});

app.listen(3000, function() {
  console.log('Server running at http://localhost:3000/');
});
