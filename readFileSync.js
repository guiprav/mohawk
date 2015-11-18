'use strict';

let fs = require('fs');

module.exports = function(path) {
    return fs.readFileSync(path, { encoding: 'utf8' });
};
