const Courtroom = require('courtroom');
const c = new Courtroom();

c.trial('password').laws.minLength(10);
 
let issues = c.judge({password: 'hunter2'});