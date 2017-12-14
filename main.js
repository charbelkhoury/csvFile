var fs = require("fs");
console.log('reading csv file');
var data2 = fs.readFileSync('file.csv');
console.log('file read , displaying');
console.log(data2.toString());
var columns = ["column1", "column2", "column3", "column4", "column5"];
require("csv-to-array")({
  file: "/opt/designer24/csvFile/file.csv",
  columns: columns
}, function (err, array) {
  console.log(err || array);
  console.log("displaying array to be reversed");
  console.log(JSON.stringify(array[1]));
  array.push({
    "column1": array[1].column5,
    "column2": array[1].column4,
    "column3": array[1].column3,
    "column4": array[1].column2,
    "column5": array[1].column1
  });
  console.log("reversing");
  var j = 5;
  var i = 1;
  for (i; i < 6; i++) {
    var col = "column" + i;
    var cols = "column" + j;
    array[1].col = array[2].cols;
    j--;
  }
  console.log("displaying reversed array obj")
  console.log(JSON.stringify(array[2]));

  
});
