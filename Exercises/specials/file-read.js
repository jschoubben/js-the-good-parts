var fs = require('fs');
var content = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
var person = JSON.parse(content);
console.log(person);
