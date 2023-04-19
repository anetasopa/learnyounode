const fs = require('fs');

let content = fs.readFileSync(process.argv[2]);
let result = content.toString().split("\n").length - 1;

console.log(result);
