'use strict';

let path = require('path');
let extName = path.extname;
let resolvePath = path.resolve;

let shallowMerge = require('../shallowMerge');

let loaders = {};

module.exports = function(path, options) {
    let format = extName(path).slice(1);
    let data = (loaders[format] || loaders.default)(resolvePath(path));

    if(options.hash.under) {
        this[options.hash.under] = data;
    }
    else {
        shallowMerge(this, data);
    }
};

let readFileSync = require('../readFileSync');

let yaml = require('yaml-js');

loaders.default = function(path) {
    return readFileSync(path);
};

loaders.json = function(path) {
    return JSON.parse(readFileSync(path));
};

loaders.js = function(path) {
    return require(path);
};

loaders.yaml = loaders.yml = function(path) {
    return yaml.load(readFileSync(path));
};
