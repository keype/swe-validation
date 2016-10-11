# swe-validation
Validation for Swedish Social Security number and Corporation identity number

Install with npm:
```
$ npm install swe-validation
```

##Examples
```
var validate = require('swe-validation');

validate.isSSn('8112189876')    //8112189876
validate.isSSn('19811218-9876') //8112189876
validate.isSSn('8112189877')    //null

validate.isCin('5560360793') //5560360793
validate.isCin('8112189877') //null

validate.ssn('8112189876') //{ isValid: true, person: { type: 'Personnummer', sex: 'Man', ssn: '8112189876' }
validate.ssn('8112189877') //{ isValid: false }

validate.cin('5560360793') //{ isValid: true, corporation: { type: 'Aktiebolag', id: '5560360793' } }
validate.cin('8112189877') //{ isValid: false }
```
