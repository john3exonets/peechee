//
// test-utils.js  -- testing functions for the peechee project
//
// John D. Allen
// Jan 2015
//

var moment = require('moment');
var fs = require('fs');
var tmpfile = "./config/config.json." + moment().format('YYYYMMDDhhmmss');

exports.start = function(cb) {
	// Clear previous test logfiles
	//if(fs.existsSync('./logs/peechee-test.log')) { fs.unlinkSync('./logs/peechee-test.log'); }
	
	// Create temp config.json file for tests.
	fs.renameSync("./config/config.json", tmpfile);
	fs.writeFileSync("./config/tmp.t",
		'{\n'+
		'   "debug": 1,\n'+
		'   "logdir": "./logs",\n'+
		'   "logfile": "peechee-test.log",\n'+
		'   "dbhost": "127.0.0.1",\n'+
		'   "dbfile": "./database/test.db",\n'+
		'   "browser": "Google Chrome"\n'+
		'}\n');

	if (!fs.existsSync("./config/config.json")) {
		fs.renameSync("./config/tmp.t", "./config/config.json");
	} else {
		console.log("ERROR! config.json still exists before temp write.");
	}
	cb();
};

exports.stop = function() {
	fs.unlinkSync("./config/config.json");
	if (fs.existsSync('./database/test.db')) { fs.unlinkSync("./database/test.db"); }
	fs.renameSync(tmpfile, "./config/config.json");
};