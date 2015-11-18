'use strict';

let path = require('path');
let baseName = path.basename;

module.exports = function(path) {
    let ret = baseName(path);
    let dotIndex = ret.indexOf('.');

    if(dotIndex !== -1) {
        ret = ret.slice(0, dotIndex);
    }

    return ret;
};
