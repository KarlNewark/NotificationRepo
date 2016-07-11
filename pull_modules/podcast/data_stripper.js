var dataStripper = function (){};

dataStripper.prototype.BuildStream = () => {

    var stream = require('stream');
    var b = new stream.Transform( { objectMode: true } )


    b._transform = function (chunk, encoding, done) {
        //todo data strip
        this.push(chunk);
        done();
    }

    b._flush = function (done) {
        if (this._lastLineData) this.push(this._lastLineData)
        this._lastLineData = null
        done()
    }

    return b;

}

module.exports = dataStripper;
