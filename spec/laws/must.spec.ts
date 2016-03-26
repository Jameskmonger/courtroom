///<reference path="../../typings/main.d.ts" />

import expect = require('expect.js');
import { MustLaw } from 'courtroom/courtroom/laws/must';

describe('MustLaw', () => {

    describe('constructor', () => {

        it('should have correct name', function () {
            let mustFunction = function func () { return false; };

            let law = new MustLaw(mustFunction);

            expect(law.getName()).to.be('must');
        });

    });

    describe('verdict', () => {

        it('should call into function with given string', () => {
            let functionCalled = false;
            let mustFunction = function func () {
                functionCalled = true;

                return false;
            };

            let law = new MustLaw(mustFunction);
            law.verdict('a');

            expect(functionCalled).to.be(true);
        });

    });

});
