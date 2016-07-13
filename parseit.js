"use strict";
var Parser = require("./parser");
var parser1 = new Parser();
parser1.parse('http://nightattack.tv/feed/audio', (items)=>{
    console.log("Everything's here, with " + items.length +" ready.")
	items.forEach((item) => {
		console.log(item.title);
	});
});