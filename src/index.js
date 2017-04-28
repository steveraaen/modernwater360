import React from 'react';
import ReactDOM from 'react-dom';
/*import mongoose from 'mongoose';
import fetch from 'node-fetch';*/
import App from './App';
import './index.css';

/*mongoose.connect("mongodb://steve:felisa@ds145790.mlab.com:45790/mongolabfree");
var db = mongoose.connection;
db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});
db.once("open", function() {
    console.log("Mongoose connection successful.");
});*/



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
