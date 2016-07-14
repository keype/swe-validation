"use strict";

const validation = require('./validation');

/**
 *
 * Extra info for social security number
 *
 * @param String value - ssn
 *
 * @returns { isValid: Bool }
 */
module.exports = function(value) {

    let ssn = validation.isSSn(value);
    if (!ssn) {
        return {
            isValid : false
        };
    }

    //Samordningsnummer(temporary ssn): If day is 60 or larger
    let ssnType = function ssnType(n) {
        return (n >= 60 ? "Samordningsnummer" : "Personnummer");
    };

    //The third number of the birthnumber is odd for men and even for woman
    let decideSex = function decideSex(n) {
        return (n & 1 ? 'Man' : 'Kvinna');
    };

    let splitSSN = ssn.match(/.{1,2}/g); //Split ssn in groups of 2

    return {
        isValid : true,
        person  : {
            type : ssnType(splitSSN[2]),
            sex  : decideSex(splitSSN[4].charAt(0)),
            ssn  : ssn
        }
    };

};
