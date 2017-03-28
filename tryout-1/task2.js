"use strict";
//import lib
let request = require("request");
let cheerio = require("cheerio");
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
//main part [get page via request]
request(url, function(error, res, body) {
  // let re = /(<\s*title[^>]*>(.+?)<\s*\/\s*title)>/gi;
  let conHead = "" + res.headers['content-type'];
  var re = new RegExp("<title>(.*?)</title>", "i");
  if(isHtml(conHead))
    console.log("this is an HTML page");
  //get web page title via cheerio
  var $ = cheerio.load(body);
  var webpageTitle = $("title").text();
  console.log(webpageTitle);
});
