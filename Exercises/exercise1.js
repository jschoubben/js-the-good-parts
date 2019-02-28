// 1: Functions
var calculateFibonacci = function(amount, x, y) {
  if (amount > 0) {
    x = x || 0;
    y = y || 1;
    return calculateFibonacci(amount - 1, y, x + y);
  }
  return y || 0;
};
console.log(calculateFibonacci(process.argv[2] || 0));
// var test = 'developer';

// (function() {
//   // Outer scope declared variables are available
//   console.log(`myScope: ${test}`);

//   // When initializing a variable which doesn't exists, yet, it will be declared on the global scope
//   globalTest2 = 'proxy';
//   console.log(`myScope: ${globalTest2}`);

//   // Declare and initialize an inner scope variable
//   var myScopeTest = 'architect';
//   console.log(`myScope: ${myScopeTest}`);
// })();

// console.log(`global: ${test}`);
// console.log(`global: ${globalTest2}`);

// sayHello();
// function sayHello() {
//   console.log('Hello!');
// }

// var sayHelloAgain = function() {
//   console.log('Hello!');
// };
// sayHelloAgain();
