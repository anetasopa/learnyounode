const fs = require('fs');

let collback = fs.readFile(process.argv[2], function callback(err, data) {
    let result = data.toString().split("\n").length - 1;
    console.log(result);
});





