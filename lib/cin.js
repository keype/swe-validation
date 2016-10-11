"use strict";

var validation = require('./validation');

/**
 *
 * Extra info for corporate identity number
 *
 * @param String value - cin
 *
 * @returns { isValid: Bool }
 */
module.exports = function(value) {

    //First number if value is 10 characters and corperate identity
    var groupnumber = {
        1 : "Dödsbon",
        2 : "Stat, landsting, kommuner, församlingar",
        3 : "Utländska företag som bedriver näringsverksamhet eller äger fastigheter i Sverige",
        5 : "Aktiebolag",
        6 : "Enkelt bolag",
        7 : "Ekonomiska föreningar",
        8 : "Ideella föreningar och stiftelser",
        9 : "Handelsbolag, kommanditbolag och enkla bolag"
    };

    var cin = validation.isCin(value);
    if (!cin) {
        return {
            isValid : false
        };
    }

    return {
        isValid: true,
        corporation : {
            type : groupnumber[cin.charAt(0)],
            id   : cin
        }
    };

};