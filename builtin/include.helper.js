'use strict';

let hbs = require('handlebars');

let registerAllUpwardsOf = require('../registerAllUpwardsOf');
let readFileSync = require('../readFileSync');

module.exports = function(path) {
    registerAllUpwardsOf(path);

    return new hbs.SafeString(
        hbs.compile(readFileSync(path))(this)
    );
};
