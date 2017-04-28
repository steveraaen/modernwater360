var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlaceSchema = new Schema({

    formatted: {
        type: String
    },
    placeType: {
        type: String
    },
    country: {
        type: String
    },
    mapURL: {
        type: String
    },
    geohash: {
        type: String
    },
    mapURL: {
        type: String
    },
    confidence: {
        type: Number
    },
    lat: {
        type: Number
    },
    lng: {
        type: Number
    },

});

var Place = mongoose.model("Place", PlaceSchema);
module.exports = Place;
