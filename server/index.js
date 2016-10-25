import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
var app = express();
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';
const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
app.use(express.static(path.join(__dirname, '../public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/REACT');
var db = mongoose.connection;
mongoose.set('debug', true);
db.on('error', console.error.bind(console, '# Mongo DB: connection error:'));

var UserSchema = new mongoose.Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    email: { type: String, required: true }
});
var UserModel = mongoose.model('User', UserSchema, "user");
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

// app.post('/api/users/create', function(req, res) {
//     console.log(req.body)
   
//     //Instantiating the Model - An instance of Model represents a mongodb document
//     var userData = new UserModel(req.body.user);
//     //Saving the model instance to the DB
//     userData.save(function(err) {
//         if ( err ) throw err;
//         console.log("User Saved Successfully"); 
//     }).then(function() {
// 	    res.redirect('/');
//     });
    
// })

app.listen(3000, function(err) {
    if (err) throw err;
    console.log("Listening on %d", 3000);
});