const fs = require('fs');
const path = require('path');

const folder = process.argv[2];
const ext = '.' + process.argv[3];

fs.readdir(folder, function (err, files) {
    if (err) return console.error(err)
    files.forEach(function (file) {
        if (path.extname(file) === ext) {
            console.log(file)
        }
    })
})

// 2 Example
// const directory = process.argv[2];
// const filetype = "." + process.argv[3];
//
// fs.readdir( directory , (err, ls) => {
//     if(err) throw err;
//     const filteredLs = ls.filter(entry => path.extname(entry) == filetype );
//     filteredLs.forEach(filename => console.log(filename));
// });
