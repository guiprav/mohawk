#!/usr/bin/env node
'use strict';

let path = require('path');
let dirName = path.dirname;
let fm = require('front-matter');
let hbs = require('handlebars');
let glob = require('glob');

let registerHelpers = require('./registerHelpers');
let registerPartials = require('./registerPartials');
let registerAllUpwardsOf = require('./registerAllUpwardsOf');
let readFileSync = require('./readFileSync');

let templPath = process.argv[2];

if(!templPath) {
    templPath = '/dev/stdin';
}

registerHelpers(glob.sync(__dirname + '/builtin/*.helper.js'));
registerPartials(glob.sync(__dirname + '/builtin/*.partial.hbs'));

registerAllUpwardsOf(dirName(templPath));

let { attributes: templFm, body: templSrc } = fm(readFileSync(templPath));

let templ = hbs.compile(templSrc);

process.stdout.write(templ(templFm));
