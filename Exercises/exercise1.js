// Grammer
// Strings
var name = 'John';
console.log('Hello world!');
console.log(`Hello ${name}`);

// Booleans
console.log(Boolean(true || false));
console.log(Boolean(true && false));

console.log(Boolean(undefined));
console.log(Boolean(null));

console.log(Boolean(''));
console.log(Boolean('false'));

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(1/0));
console.log(Boolean(-1));
console.log(Boolean(Number('test')));

console.log(Boolean([false]));
console.log(Boolean({
  prop: false
}));

console.log(!!0);

// Property accessor
var x = {
  name: 'John',
  age: 28
};
console.log(x.name);
console.log(x['age'])

// Objects
var x = {
  name: 'John',
  lastName: 'Doe',
  age: 28
};
var y = x;
y.name = 'Larry';
console.log(x.name); // Prints larry
for(var property in x) {
  console.log(`Name: ${property}, value: ${x[property]}`);
}
console.log(JSON.stringify(x));
delete x.age;
console.log(JSON.stringify(x));

// functions
var sumX = function(arg1, arg2) {
  return arg1 + arg2;
};

function sumY(arg1, arg2) {
  return arg1 + arg2;
}

var sumZ = (arg1, arg2) => arg1 + arg2;

// Lamda (arrow) functions
var test = {
  x: 1,
  print: function() {
    console.log(this);
    console.log(this.x);
  },
  printLamda: () => {
    console.log(this);
    console.log(this.x);
  }
};
test.print();
test.printLamda();
this.x = 3;
test.print();
test.printLamda();

// Arguments
var argsFunction = function(arg1, arg2) {
  console.log(arg1);
  console.log(arg2);
  console.log(arguments);
};
argsFunction('Hello');
argsFunction('Hello', 'world');
argsFunction('Hello', 'world', 'or', 'John');

// Finbonacci
var calculateFibonacci = function(amount, x, y) {
  if (amount > 0) {
    x = x || 0;
    y = y || 1;
    return calculateFibonacci(amount - 1, y, x + y);
  }
  return y || 0;
};
console.log(calculateFibonacci(process.argv[2] || 0));