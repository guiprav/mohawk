'use strict';

let hbs = require('handlebars');

let cleanBaseName = require('./cleanBaseName');
let readFileSync = require('./readFileSync');

module.exports = function(paths) {
    paths.forEach(function(path) {
        hbs.registerPartial(cleanBaseName(path), readFileSync(path));
    });
};
