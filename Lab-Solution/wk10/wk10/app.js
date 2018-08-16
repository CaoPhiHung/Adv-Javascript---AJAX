var express = require('express');
var app = express();
var request = require('request');

app.use(express.static('public'));

app.get('/compute_tax', function(req, res) {
  var postalCode = req.query.postal_code;
  var price = req.query.price;

  var url = 'https://geocoder.ca/'+postalCode+'?json=1';
  request(url, { json: true },
    (err, resp, body) => {
      if (err) {
        return console.error(err);
      } else {
        console.log('data from API call = ' +JSON.stringify(body));
        var province = body.standard.prov;
        var tax = provinceTax[province];
        console.log('tax'+tax);
        if(tax) {
          var taxPayable = price * tax / 100;
          res.send({ taxPayable: taxPayable });
        } else {
          res.send('server error');
        }
      }
    });
});

var provinceTax = {
  AB: 5,
  BC: 5,
  MB: 5,
  NB: 15,
  NL: 15,
  NT: 5,
  NS: 15,
  NU: 5,
  ON: 13,
  PE: 15,
  QC: 5,
  SK: 5,
  YT: 5
}


app.listen(3000, function() {
  console.log('Server running at http://localhost:3000/');
});
