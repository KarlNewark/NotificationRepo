"use strict";

var FeedParser = require('feedparser')
  , request = require('request');


class Parser {
	parse(url, cb) {
		var req = request(url)
		var feedparser = new FeedParser({});
		req.on('error', function (error) {
		  console.log(error);
		});
		req.on('response', function (res) {
		  var stream = this;
		  if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));
		  stream.pipe(feedparser);
		});
		
		
		feedparser.on('error', function(error) {
		  console.log(error);
		});
		var items = [];
		feedparser.on('readable', function() {

		  var stream = this
		    , meta = this.meta // **NOTE** the "meta" is always available in the context of the feedparser instance
		    , item;
		
		  while (item = stream.read()) {

			items.push(item);
		  }
		});
		feedparser.on('end', () => {
			for (var i = 0; i < items.length; i++) {
				let element = items[i];
				cb(element.title);
			}
		});
	}
}

module.exports = Parser;