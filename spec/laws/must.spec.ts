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

        it('should call into function with given string [test case 2]', () => {
            let givenString = 'a string, that is what i am, and what i always will be';

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

        it('should call into function with given number [test case 1]', () => {
            let givenNumber = 4;

            let functionCalled = false;
            let mustFunction = function func (str: number) {
                if (str === givenNumber) {
                    functionCalled = true;
                }

                return false;
            };

            let law = new MustLaw(mustFunction);
            law.verdict(givenNumber);

            expect(functionCalled).to.be(true);
        });

        it('should call into function with given number [test case 2]', () => {
            let givenNumber = 123982937;

            let functionCalled = false;
            let mustFunction = function func (str: number) {
                if (str === givenNumber) {
                    functionCalled = true;
                }

                return false;
            };

            let law = new MustLaw(mustFunction);
            law.verdict(givenNumber);

            expect(functionCalled).to.be(true);
        });

        it('should return true if function returns true', () => {
            let functionReturn = true;

            let mustFunction = function func (str: number) {
                return functionReturn;
            };

            let law = new MustLaw(mustFunction);
            let verdict = law.verdict('');

            expect(verdict).to.be(functionReturn);
        });

        it('should return false if function returns false', () => {
            let functionReturn = false;

            let mustFunction = function func (str: number) {
                return functionReturn;
            };

            let law = new MustLaw(mustFunction);
            let verdict = law.verdict('');

            expect(verdict).to.be(functionReturn);
        });

    });

    describe('details', () => {

        it('should return \'anonymous\' if unnamed external function', () => {
            let mustFunction = function () {
                return true;
            };

            let law = new MustLaw(mustFunction);
            let name = law.getDetails()['name'];
            expect(name).to.be('anonymous');
        });

        it('should return \'anonymous\' if unnamed inline function', () => {
            let law = new MustLaw(function () {
                return true;
            });
            let name = law.getDetails()['name'];
            expect(name).to.be('anonymous');
        });

        it('should return \'anonymous\' if external lambda expression', () => {
            let mustFunction = () => true;

            let law = new MustLaw(mustFunction);
            let name = law.getDetails()['name'];
            expect(name).to.be('anonymous');
        });

        it('should return \'anonymous\' if inline lambda expression', () => {
            let law = new MustLaw(() => true);
            let name = law.getDetails()['name'];
            expect(name).to.be('anonymous');
        });

        it('should return function name for named external function [test case 1]', () => {
            let mustFunction = function testName () {
                return true;
            };

            let law = new MustLaw(mustFunction);
            let name = law.getDetails()['name'];
            expect(name).to.be('testName');
        });

        it('should return function name for named external function [test case 2]', () => {
            let mustFunction = function anotherTestName () {
                return true;
            };

            let law = new MustLaw(mustFunction);
            let name = law.getDetails()['name'];
            expect(name).to.be('anotherTestName');
        });

        it('should return function name for named internal function [test case 1]', () => {
            let law = new MustLaw(function testName () {
                return true;
            });
            let name = law.getDetails()['name'];
            expect(name).to.be('testName');
        });

        it('should return function name for named internal function [test case 2]', () => {
            let law = new MustLaw(function anotherTestName () {
                return true;
            });
            let name = law.getDetails()['name'];
            expect(name).to.be('anotherTestName');
        });

    })

});
