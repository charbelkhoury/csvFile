var fs = require("fs");
console.log('reading csv file');
var data2 = fs.readFileSync('file.csv');
console.log('file read , displaying');
console.log(data2.toString());

var columns = ["column1", "column2", "column3", "column4", "column5"];
require("csv-to-array")({
  file: "/opt/designer24/csvFile/file.csv",
  columns: columns
},
 function (err, array) {
  console.log(err || array);
  var array2 = [];
  for (var i = 0; i < columns.length; i++) {
    var c = "column" + (i + 1);
    array2.push(array[1][c])

  }
  array2.reverse();
  console.log(array2);
  array2.sort();
  console.log(array2);
});
