"use strict";

var     cinInfo     = require('./lib/cin'),
        ssnInfo      = require('./lib/ssn'),
        validation   = require('./lib/validation');

module.exports = {
    isSSn       : validation.isSSn,
    isCin       : validation.isCin,
    ssn         : ssnInfo,
    cin         : cinInfo
};