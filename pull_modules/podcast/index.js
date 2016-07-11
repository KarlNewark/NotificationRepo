var Save;
var URL;
var FeedParser; 
var stream;
var DataStripper;

var Podcast = function(save, url) {
    Save =  save.prototype.BuildStream();
    URL = url
    FeedParser = require('feedparser')
    stream = require('stream');
    var dataStripper = require('./data_stripper.js');
    DataStripper = dataStripper.prototype.BuildStream();

 };
//console.log(Liner);
//Liner = require('./logger')

Podcast.prototype.pull = () => {


    // var b = new stream.Transform( { objectMode: true } )


    // b._transform = function (chunk, encoding, done) {
    //     //todo data strip
    //     this.push(chunk);
    //     done();
    // }

    // b._flush = function (done) {
    //     if (this._lastLineData) this.push(this._lastLineData)
    //     this._lastLineData = null
    //     done()
    // }


    var req = request(URL)
        , feedparser = new FeedParser();

    req.on('error', function(error) {
        // handle any request errors
    });
    req.on('response', function(res) {
        var stream = this;

        if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));

        stream.pipe(feedparser).pipe(DataStripper).pipe(Save);
    });


    feedparser.on('error', function(error) {

    });
    
    feedparser.on('end', function () {
        console.log('done');
    })
};


module.exports = Podcast;