var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/REACT');
var db = mongoose.connection;
mongoose.set('debug', true);
db.on('error', console.error.bind(console, '# Mongo DB: connection error:'));

