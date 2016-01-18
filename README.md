# courtroom

[![Build Status](https://travis-ci.org/Jameskmonger/courtroom.svg?branch=master)](https://travis-ci.org/Jameskmonger/courtroom) [![Coverage Status](https://coveralls.io/repos/Jameskmonger/courtroom/badge.svg?branch=master&service=github)](https://coveralls.io/github/Jameskmonger/courtroom?branch=master)
[![npm version](https://badge.fury.io/js/courtroom.svg)](https://badge.fury.io/js/courtroom)
[![Tonic](https://img.shields.io/badge/tonic-supported-blue.svg)](https://tonicdev.com/npm/courtroom)

Validation-tastic :no_entry:

## Install

```
$ npm install courtroom
```

## Usage

```javascript
const Courtroom = require('courtroom');
const c = new Courtroom();
let issues;

c.trial('password').laws.minLength(10);

issues = c.judge({password: 'hunter2'});
```

`judge()` returns an array containing issues:

```javascript
[{
  property: 'password',
  jury: 'string.minLength',
  value: 'hunter2',
  details: { minimum: 10 }
}]
```

You can [try this example on Tonic](https://tonicdev.com/npm/courtroom).

## Contribute

### Setup :wrench:
1. Clone this repository:
    `git clone https://github.com/Jameskmonger/courtroom.git`
2. Install the NPM modules:
    `npm install`
3. Install the typings:
    `tsd install`
4. Compile the TypeScript - they will automatically be placed into the /build/ folder:
    `gulp`
5. Run the tests:
    `gulp test`
