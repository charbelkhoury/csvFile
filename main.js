var fs = require("fs");
console.log('reading csv file');
var data = fs.readFileSync('file.csv');
console.log('file read , displaying');
console.log(data.toString());
console.log('changing ')
var data2 = fs.readFileSync('file2.csv');
// Create a writable stream
var writerStream = fs.createWriteStream('file.csv');
// Write the data to stream with encoding to be utf8
writerStream.write(data2, 'UTF8');
// Mark the end of file
writerStream.end();
// Handle stream events --> finish, and error
writerStream.on('finish', function () {
    console.log('change completed to :');
    console.log(data.toString());
    console.log("Program Ended");
});
writerStream.on('error', function (err) {
    console.log(err.stack);
});
