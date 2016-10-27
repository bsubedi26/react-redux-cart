import express from 'express';
var app = express();
import path from 'path';
import bodyParser from 'body-parser';
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
require('./config/db_config');
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
import users from './controllers/user';
app.use('/api/users', users);

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, function(err) {
    if (err) throw err;
    console.log("Listening on %d", 3000);
});