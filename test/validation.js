"use strict";

var assert   = require('assert'),
    validate = require('./../index');

describe('Social Security numbers', function() {

    describe('isSSn()', function() {

        it('Should return String', function() {
            assert.equal('8112189876', validate.isSSn('19811218-9876'));
            assert.equal('8112189876', validate.isSSn('19811218+9876'));
            assert.equal('8112189876', validate.isSSn('8112189876'));
            assert.equal('8112189876', validate.isSSn('198112189876'));
            assert.equal('8112189876', validate.isSSn(8112189876));
        });

        it('Should return NULL', function() {
            assert.equal(null, validate.isSSn(undefined));
            assert.equal(null, validate.isSSn(null));
            assert.equal(null, validate.isSSn([]));
            assert.equal(null, validate.isSSn({}));
            assert.equal(null, validate.isSSn(false));
            assert.equal(null, validate.isSSn(true));
            assert.equal(null, validate.isSSn(1122334455));
            assert.equal(null, validate.isSSn('112233-4455'));
            assert.equal(null, validate.isSSn('19112233-4455'));
            assert.equal(null, validate.isSSn(''));
            assert.equal(null, validate.isSSn('19811218-9877'));
            assert.equal(null, validate.isSSn('811218+9877'));
            assert.equal(null, validate.isSSn('811218-9877'));
            assert.equal(null, validate.isSSn('8112189877'));

        });

    });

    describe('ssn()', function() {

        it('Should return Object { isValid }', function() {

            assert.deepEqual({ isValid: true, person: { type: 'Personnummer', sex: 'Man', ssn: '8112189876' } }, validate.ssn('19811218-9876'));
            assert.deepEqual({ isValid: true, person: { type: 'Personnummer', sex: 'Man', ssn: '8112189876' } }, validate.ssn('19811218+9876'));
            assert.deepEqual({ isValid: true, person: { type: 'Personnummer', sex: 'Man', ssn: '8112189876' } }, validate.ssn('8112189876'));
            assert.deepEqual({ isValid: true, person: { type: 'Personnummer', sex: 'Man', ssn: '8112189876' } }, validate.ssn('198112189876'));

            assert.deepEqual({ isValid: true, person: { type: 'Samordningsnummer', sex: 'Man', ssn: '7010632391' } }, validate.ssn('701063-2391'));
            assert.deepEqual({ isValid: true, person: { type: 'Samordningsnummer', sex: 'Man', ssn: '7010632391' } }, validate.ssn('701063+2391'));
            assert.deepEqual({ isValid: true, person: { type: 'Samordningsnummer', sex: 'Man', ssn: '7010632391' } }, validate.ssn('19701063-2391'));

        });

        it('Should return false', function() {
            assert.deepEqual({ isValid: false }, validate.ssn(undefined));
            assert.deepEqual({ isValid: false }, validate.ssn(null));
            assert.deepEqual({ isValid: false }, validate.ssn([]));
            assert.deepEqual({ isValid: false }, validate.ssn({}));
            assert.deepEqual({ isValid: false }, validate.ssn(false));
            assert.deepEqual({ isValid: false }, validate.ssn(true));
            assert.deepEqual({ isValid: false }, validate.ssn(1122334455));
            assert.deepEqual({ isValid: false }, validate.ssn('112233-4455'));
            assert.deepEqual({ isValid: false }, validate.ssn('19112233-4455'));
            assert.deepEqual({ isValid: false }, validate.ssn(''));
            assert.deepEqual({ isValid: false }, validate.ssn('19811218-9877'));
            assert.deepEqual({ isValid: false }, validate.ssn('811218+9877'));
            assert.deepEqual({ isValid: false }, validate.ssn('811218-9877'));
            assert.deepEqual({ isValid: false }, validate.ssn('8112189877'));

        });

    });

});

describe('Corporate identity numbers', function() {

    describe('isCin()', function() {

        it('Should return String', function () {
            assert.equal('5560360793', validate.isCin('165560360793'));
            assert.equal('5560360793', validate.isCin('556036-0793'));
            assert.equal('5560360793', validate.isCin('5560360793'));

            assert.equal('2120000142', validate.isCin('212000-0142'));
            assert.equal('2120000142', validate.isCin('2120000142'));

        });

        it('Should return NULL', function() {
            assert.equal(null, validate.isCin('8112189876'));
            assert.equal(null, validate.isCin(undefined));
            assert.equal(null, validate.isCin(null));
            assert.equal(null, validate.isCin([]));
            assert.equal(null, validate.isCin({}));
            assert.equal(null, validate.isCin(false));
            assert.equal(null, validate.isCin(true));
            assert.equal(null, validate.isCin(1122334455));
            assert.equal(null, validate.isCin('112233-4455'));
            assert.equal(null, validate.isCin('19112233-4455'));
            assert.equal(null, validate.isCin(''));
            assert.equal(null, validate.isCin('19811218-9877'));
            assert.equal(null, validate.isCin('811218+9877'));
            assert.equal(null, validate.isCin('811218-9877'));
            assert.equal(null, validate.isCin('8112189877'));
        });

    });

    describe('cin()', function() {

        it('Should return Object { isValid }', function() {

            assert.deepEqual({ isValid: true, corporation: { type: 'Aktiebolag', id: '5560360793' } }, validate.cin('556036-0793'));
            assert.deepEqual({ isValid: true, corporation: { type: 'Aktiebolag', id: '5560360793' } }, validate.cin('5560360793'));

            assert.deepEqual({ isValid: true, corporation: { type: 'Stat, landsting, kommuner, församlingar', id: '2120000142' } }, validate.cin('212000-0142'));
            assert.deepEqual({ isValid: true, corporation: { type: 'Stat, landsting, kommuner, församlingar', id: '2120000142' } }, validate.cin('2120000142'));

        });

        it('Should return false', function() {
            assert.deepEqual({ isValid: false }, validate.cin(undefined));
            assert.deepEqual({ isValid: false }, validate.cin(null));
            assert.deepEqual({ isValid: false }, validate.cin([]));
            assert.deepEqual({ isValid: false }, validate.cin({}));
            assert.deepEqual({ isValid: false }, validate.cin(false));
            assert.deepEqual({ isValid: false }, validate.cin(true));
            assert.deepEqual({ isValid: false }, validate.cin(1122334455));
            assert.deepEqual({ isValid: false }, validate.cin('112233-4455'));
            assert.deepEqual({ isValid: false }, validate.cin('19112233-4455'));
            assert.deepEqual({ isValid: false }, validate.cin(''));
            assert.deepEqual({ isValid: false }, validate.cin('19811218-9877'));
            assert.deepEqual({ isValid: false }, validate.cin('811218+9877'));
            assert.deepEqual({ isValid: false }, validate.cin('811218-9877'));
            assert.deepEqual({ isValid: false }, validate.cin('8112189877'));
        });
    });

});