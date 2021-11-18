const http = require('http');
const { logger } = require('../../Extended/Logger');
require('dotenv').config();
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('ManagerKernel/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('ManagerKernel/about');
});

const Replit = (process.env.REPLIT_DB_URL !== undefined);
function initialize(replit = false) {
 if (replit) {
    logger.info('[REPLIT DETECTED] [STARTING WEBSERVER]');
    http.createServer((req, res) => {
      const now = new Date().toLocaleString('en-US');
      res.end(`OK (200) - ${now}`);
    }).listen(3000);
    return require('../Core/YurikaExtended');
  } return require('../Core/YurikaExtended');
}
const botInfo = {
  username: client.user.username,
  status: client.user.presence.status,
  users: client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(),
  guilds: client.guilds.cache.size.toLocaleString()
};
initialize(Replit, botInfo);
