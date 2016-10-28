import express from 'express';
const app = express();
import path from 'path';
import bodyParser from 'body-parser';
const session = require('express-session');
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
import knexConfig from './config/knex_file';
import knex from 'knex';
let bookshelf = require('bookshelf')(knexConfig);
app.set('bookshelf', bookshelf);
knex.schema.createTable('users', function(table) {
  table.increments('id').primary();
  table.string('name').notNullable();
})
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
app.use(express.static(path.join(__dirname, '../public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// require('./config/db_config');
app.use(session({
  secret: 'secret-session',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
}))
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