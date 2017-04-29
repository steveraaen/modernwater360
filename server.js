var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var fetch = require("node-fetch");
var Place = require("./models/Place.js");

var app = express();
mongoose.Promise = Promise;

mongoose.connect("mongodb://steve:felisa@ds145790.mlab.com:45790/mongolabfree");
var db = mongoose.connection;
db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});
db.once("open", function() {
    console.log("Mongoose connection successful.");
});

    var location = "o'cebreiro";
    const geocodeAPI = "35e5548c618555b1a43eb4759d26b260";
    const queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + geocodeAPI;

    fetch(queryURL)
        .then(function(res) {       	
            return res.json();
        }).then(function(json) {

for(let i = 0; i < json.results.length; i++){
	console.log(json.results[0])
Place.create({
        formatted: json.results[i].formatted,
        placeType: json.results[i].components._type,
        country: json.results[i].components.country,
        mapURL: json.results[i].annotations.OSM.url,
        geohash: json.results[i].annotations.geohash,
        confidence: json.results[i].confidence,
        lat: json.results[i].geometry.lat,
        lng: json.results[i].geometry.lng

}, function (err, small) {
  if (err) return handleError(err);

});
}
 });
app.listen(3001, function() {
    console.log('Node server connected on 3001')
})
