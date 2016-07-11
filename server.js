
request = require('request');
var Podcast = require('./pull_modules/podcast/');

var Save = require('./save.js');

var nightAttack = new Podcast(Save, 'http://nightattack.tv/feed/audio');

nightAttack.pull();
