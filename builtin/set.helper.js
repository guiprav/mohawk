'use strict';

module.exports = function(name, value, options) {
    if(options === undefined) {
        options = value;
        value = JSON.parse(options.fn(this).trim());
    }

    this[name] = value;
};
