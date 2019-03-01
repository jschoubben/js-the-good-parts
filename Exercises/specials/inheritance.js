var boringSum = function (a, b) {
  return a + b;
}
var excitingSum = new Function('a', 'b', 'return a + b');

console.log(boringSum(1, 2));
console.log(excitingSum(3, 4));