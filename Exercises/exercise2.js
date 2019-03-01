// console.assert(garfield.doSomething === grumpy.doSomething, 'Each instance of a "Cat" has the same "doSomething" method');

var myFunction = function(params){
  var name = params.name || '';
  var birthDate = params.birthDate || new Date();
  console.log(`${name} was born in ${birthDate.getFullYear()}`)
}

var myObject = myFunction({
  name: 'John Doe',
  birthDate: new Date(1990, 1, 1),
});

// Array litterals
var myArray = [];
var myArray2 = ['zero', 'one', 'two'];

console.log(myArray[1]); // undefined
console.log(myArray2[1]); // one

var mySpecialObject = {
  0: 'zero',
  1: 'one',
  2: 'two'
};
console.log(mySpecialObject[1]); // one

// Length
var rollerSkate = [0, 0, 0, 0];
console.log(rollerSkate.length); // 4
rollerSkate[10] = 'not cool';
console.log(rollerSkate.length); // 11

// Delete
var russianRoulette = ['yuri', 'vladimir', 'boris'];
while (russianRoulette.length > 1) {
  russianRoulette.splice(Math.floor(Math.random() * russianRoulette.length), 1);
}
console.log(`${russianRoulette[0]} survived`);

// This will result in an endless loop because the length of the array doesn't change, it simply creates a "hole"
// while (russianRoulette.length > 1) {
//   delete russianRoulette[Math.floor(Math.random() * russianRoulette.length];
//}

// Enumeration
var myCats = ['Suki', 'Tobi'];
myCats.forEach(function(cat) {
  console.log(`${cat} is always hangry`);
});

// Methods
Array.prototype.sum = function() {
  return this.reduce(function(total, num) {
    return total + num;
  })
}
var x = [1, 2, 3, 4];
console.log(x.sum());

// Dimensions
var theMatrix = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [7, 8, 9]
];
console.log(theMatrix[1][1]); // 5

