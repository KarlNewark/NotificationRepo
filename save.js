var save = function (){};

save.prototype.BuildStream = () => {

    var stream = require('stream');
    var b = new stream.Transform( { objectMode: true } )


    b._transform = function (chunk, encoding, done) {
        console.log(chunk.title);
        done()
    }

    b._flush = function (done) {
        if (this._lastLineData) this.push(this._lastLineData)
        this._lastLineData = null
        done()
    }

    return b;

}

module.exports = save;

