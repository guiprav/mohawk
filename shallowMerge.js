'use strict';

module.exports = function(target, src) {
    if(typeof target !== 'object') {
        throw new Error("Can't merge into non-object.");
    }

    if(typeof src !== 'object') {
        throw new Error("Can't merge non-object.");
    }

    for(let key in src) {
        target[key] = src[key];
    }
};
