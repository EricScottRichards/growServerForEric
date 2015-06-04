var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();
var xmlParse = require('xml2js').parseString;

app.use(bodyParser.json());

app.get('/api/hardiness', function(req, res){
    request.get('http://www.plantmaps.com/pm_queries.php?Z2Z='+req.query.zipCode, function(err, response, body){
        xmlParse(body, function(err, result){
            res.status(200).json(result);
        });
    });
});

app.listen(8989, function(){
    console.log("listening on 8989");
});