if (process.argv.length <= 2) {
  console.log("Usage: " + __filename + " SOME_PARAM");
  process.exit(-1);
}

var file_path = process.argv[2];

//load file_path
var fs = require('fs');
fs.readFile('./' + file_path, function(err, data) {
    if(err) throw err;
    var array = data.toString().split(" ");
    for(i in array) {
        console.log(array[i]);
    }
});

console.log('Param: ' + file_path);
