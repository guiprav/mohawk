#!/usr/bin/env node
'use strict';

let isRoot = require('is-root');

if(isRoot()) {
    console.error("I refuse to run as root.");
    process.exit(-1);
}

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
let workDir;

if(!templPath) {
    templPath = '/dev/stdin';
    workDir = process.cwd();
}
else {
    workDir = dirName(templPath);
}

registerHelpers(glob.sync(__dirname + '/builtin/*.helper.js'));
registerPartials(glob.sync(__dirname + '/builtin/*.partial.hbs'));

registerAllUpwardsOf(workDir);

let { attributes: templFm, body: templSrc } = fm(readFileSync(templPath));

process.chdir(workDir);

let templ = hbs.compile(templSrc);

process.stdout.write(templ(templFm));
