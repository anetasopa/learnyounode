const path = require('path');
const mymodule = require('./mymodule');

const directory = process.argv[2];
const filterExtension = process.argv[3];

const callback = (err, list) => {
    if (err) {
        return err;
    } else {
        list.forEach(file => console.log(file));
    }
}

mymodule(directory, filterExtension, callback);