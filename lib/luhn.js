'use strict';

/**
 * The luhn validator will encapsulate all the details about validating a swedish
 * social security number, by using a checksum.
 *
 * @param String val - the proposed ssn
 *
 * @returns Bool
 */
module.exports = function(val) {
    var ssn = val
        .replace(/\D/g, "")
        .split("")
        .reverse()
        .slice(0, 10);

    if (ssn.length !== 10) {
        return false;
    }

    var sum = ssn
        .map(function(n) {
            return Number(n);
        })
        .reduce(function(previous, current, index) {
            // multiply every other number with two
            if (index % 2) current *= 2;
            // if larger than 10 get sum of individual digits (also n-9)
            if (current > 9) current -= 9;
            // sum it up
            return previous + current;
        });

    // sum must be divisible by 10
    return 0 === sum % 10;
};
