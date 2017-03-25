"use strict";
let request = require("request");

if (process.argv.length <= 2) {
  // console.log("Usage: " + __filename + " SOME_PARAM");
  process.exit(-1);
}
var url = process.argv[2];

request(url, function(error, response, body) {
  console.log(body);
});
