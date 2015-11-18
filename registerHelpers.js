'use strict';

let hbs = require('handlebars');

let cleanBaseName = require('./cleanBaseName');

module.exports = function(paths) {
    paths.forEach(function(path) {
        hbs.registerHelper(cleanBaseName(path), require(path));
    });
}
