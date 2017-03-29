"use strict";
//imports libs
let fs = require('fs');
//global var
let word_count = 0;
let total_number = 0;
let total_number_count = 0;
let number = new Array();
//check param
if (process.argv.length <= 2) {
  // console.log("Usage: " + __filename + " SOME_PARAM");
  process.exit(-1);
}
//load params
let file_path = process.argv[2];
//functions
let initArrayWithZeros = function(array){
  for(let i = 0; i < array.length; i++) {
    array[i] = 0;
  }
}
let fileToArray = function(file) {
  let array = new Array();
  let string = "";
  var fs = require('fs');
  string = fs.readFileSync('file.txt').toString();
  string = string.replace(/[.,:;'"&*!@#$%^()|<>?]/g,'');
  array = string.split(" ");
  for(let i in array) {
    if(!isNaN(parseInt(array[i]))){ //check is number
      total_number+= parseInt(array[i]);
      number[total_number_count] = parseInt(array[i]);
      total_number_count += 1;
    }
  }
  return array;
}

let getUniqueChars = function(array) {
  let unique = [...new Set(arr_text)];
  return unique;
}

let printArray = function(array) {
  let result = "";
  for(let i in array) {
    result += array[i] + ", ";
  }
  console.log(result);
}

let printAndCountChars = function(total, unique) {
  let count = new Array(unique.length);
  initArrayWithZeros(count);
  for(let i in unique) {
    for (let j in total) {
      if(unique[i] === total[j]) {
        count[i] += 1;
      }
    }
    console.log(unique[i] + " = " + count[i])
  }
}

//main program alg
let arr_text = fileToArray(file_path);
//output
  //number of word count
console.log("Word count = " + arr_text.length);
  //number of decimal found
console.log("Number of decimals found = " + total_number_count);
  //printout the decimals found
console.log("\t They are are = ");
printArray(number);
  //sum of the number
console.log("Sum of the decimals is = " + total_number);
  //find the unique characters
let unique = getUniqueChars(arr_text);
console.log("Number of unique words and number = " + unique.length);
console.log("They are: ");
printAndCountChars(arr_text, unique);
