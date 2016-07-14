"use strict";

const luhnAlgorithm = require('./luhn');

/**
 *
 * Check if value is string and removes non numbers, if valuelength is 10 or 12 returns last 10 characters
 *
 * @param String value
 *
 * @returns String
 */
let clean = function clean(value) {

    if (typeof(value) === "number" && value != undefined) {
        value = value.toString();
    } else if (typeof(value) != "string" || value == undefined) {
        return null;
    }
    value = value.replace(/\D/g, "");

    switch (value.length) {
        case 10:
            return value;
            break;
        case 12:
            return value.substring(2);
            break;
        default:
            return null;
    }
};

/**
 *
 * Split value and return as array in groups of 2
 *
 * @param String value
 *
 * @returns Array - value in groups of 2 characters
 */
let splitNumber = function splitNumber(value) {
    return value.match(/.{1,2}/g);
};

module.exports = {
    /**
     *
     * Validate Corporate identity number
     *
     * @param String value - cin
     *
     * @returns String - cin
     */
    isCin : function(cin) {

        cin = clean(cin);
        if (!cin) {
            return null;
        }

        //Corperate identity: If month is 20 or larger
        if (splitNumber(cin)[1] < 20) {
            return null;
        }

        //Validate number with luhn algorithm
        if (!luhnAlgorithm(cin)) {
            return null;
        }
        return cin;

    },

    /**
     *
     * Validate Swedish social security numbers
     *
     * @param String value - ssn
     *
     * @returns String - ssn
     */
    isSSn : function(ssn) {

        ssn = clean(ssn);
        if (!ssn) {
            return null;
        }

        let splitNubmer = splitNumber(ssn);
        if ((splitNubmer[2] > 31 && splitNubmer[2] < 60) && splitNubmer[1] > 12  ) {
            return null;
        }

        //Validate number with luhn algorithm
        if (!luhnAlgorithm(ssn)) {
            return null;
        }

        return ssn;
    }
};