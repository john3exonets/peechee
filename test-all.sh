rm logs/peechee-test.log
mocha test/10pc_log-test.js
mocha test/20pc_database-test.js
mocha test/30pc_launch-test.js
mocha test/40pc_browser-test.js
less logs/peechee-test.log
