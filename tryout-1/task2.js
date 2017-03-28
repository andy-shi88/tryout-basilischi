"use strict";
//import lib
let request = require("request");
//check param
if (process.argv.length <= 2) {
  // console.log("Usage: " + __filename + " SOME_PARAM");
  process.exit(-1);
}
//load param
var url = process.argv[2];
//functions
let isHtml = function(contentHeader) {
  if(contentHeader.includes("text/html")){
      return true;
  }else {
    return false;
  }
}
request(url, function(error, res, body) {
  // console.log(res.headers);
  let conHead = "" + res.headers['content-type'];
  if(isHtml(conHead))
    console.log("this is an HTML page");
  // console.log(body);
});
