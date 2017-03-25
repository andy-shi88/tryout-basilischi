"use strict";
var execSync = require('child_process').execSync;
let fs = require('fs');
//global var
let word_count = 0;
let total_number = 0;
//functions
let fileToArray = function(file) {
  let array = new Array();
  try {
    fs.readFile('./' + file_path, function(err, data) {
        if(err) throw err;
        array = data.toString().split(" ");
        for(let i in array) {
          if(!isNaN(parseInt(array[i]))){
            // console.log(array[i]);
            total_number+= parseInt(array[i]);
            // console.log(total_number);
          }
        }
    });
  } catch (e) {

  } finally {

  }

  return array;
}


if (process.argv.length <= 2) {
  // console.log("Usage: " + __filename + " SOME_PARAM");
  process.exit(-1);
}

var file_path = process.argv[2];

let arr_text = fileToArray(file_path);
console.log("Number of words = " +arr_text.length);
console.log("Total of number = " + total_number);
