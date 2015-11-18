'use strict';

let path = require('path');
let resolvePath = path.resolve;
let joinPaths = path.join;
let glob = require('glob');

let registerHelpers = require('./registerHelpers');
let registerPartials = require('./registerPartials');

module.exports = function(path) {
    let currentPath = resolvePath(path);

    do {
        registerHelpers(glob.sync(currentPath + '/*.helper.js'));
        registerPartials(glob.sync(currentPath + '/*.partial.hbs'));

        currentPath = joinPaths(currentPath, '..');
    } while(currentPath !== '/');
};
