///<reference path="../../typings/main.d.ts" />

import expect = require('expect.js');
import { MustLaw } from 'courtroom/courtroom/laws/must';

describe('MustLaw', () => {

    describe('constructor', () => {

        it('should have correct name', () => {
            let mustFunction = function func () { return false; };

            let law = new MustLaw(mustFunction);

            expect(law.getName()).to.be('must');
        });

    });

    describe('verdict', () => {

        it('should call into function', () => {
            let functionCalled = false;
            let mustFunction = function func () {
                functionCalled = true;

                return false;
            };

            let law = new MustLaw(mustFunction);
            law.verdict('a');

            expect(functionCalled).to.be(true);
        });

        it('should call into function with given string [test case 1]', () => {
            let givenString = 'i am a string';

            let functionCalled = false;
            let mustFunction = function func (str: string) {
                if (str === givenString) {
                    functionCalled = true;
                }

                return false;
            };

            let law = new MustLaw(mustFunction);
            law.verdict(givenString);

            expect(functionCalled).to.be(true);
        });

    });

});
