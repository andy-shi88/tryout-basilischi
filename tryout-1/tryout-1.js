"use strict";
//var execSync = require('child_process').execSync;
let fs = require('fs');
//global var
let word_count = 0;
let total_number = 0;
let total_number_count = 0;
let number = new Array();
//functions
let fileToArray = function(file) {
  let array = new Array();
  var fs = require('fs');
  array = fs.readFileSync('file.txt').toString().split(" ");
  for(let i in array) {
    if(!isNaN(parseInt(array[i]))){
      total_number+= parseInt(array[i]);
      number[total_number_count] = parseInt(array[i]);
      total_number_count += 1;
    }
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
console.log("Number of decimals = " + total_number_count);

console.log("they are = ");
for(let i in number) {
  console.log(number[i] + ", ")
}
console.log("Total of number = " + total_number);
// let newArray = new Array();
// for(let i in arr_text) {
//   for(let k in arr_text) {
//     if(!(arr_text[i] === arr_text[k]) && (i !== k)){
//       if()
//     }
//   }
// }
// var unique = arr_text.filter( onlyUnique );

let unique = [...new Set(arr_text)];
console.log("number of unique words = " + unique.length);
