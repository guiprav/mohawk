#!/usr/bin/env node
'use strict';

let assert = require('assert');

let readFileSync = require('../readFileSync');

let total = 0;
let pass = 0;
let fail = 0;

readFileSync('/dev/stdin').split('\n').forEach(function(line) {
    line = line.trim();

    if(line.indexOf('%%%') === -1) {
        return;
    }

    let slices = line.split('%%%').map(function(value) {
        return value.trim();
    });

    ++total;

    if(slices[0] === slices[1]) {
        ++pass;
        process.stdout.write("[Pass] ");
    }
    else {
        ++fail;
        process.stdout.write("[Fail] ");
    }

    console.log(line);
});

console.log();

console.log(total + " tests ran.");
console.log(pass + " tests pass (" + (pass / total * 100).toFixed(2) + "%).");
console.log(fail + " tests fail (" + (fail / total * 100).toFixed(2) + "%).");
