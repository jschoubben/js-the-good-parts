// Create an animal object which has a name and a function: eat
// Create a Cat and Dog object which "inherit" from Animal and both have their 
//  own methods
function tracePrototypeChainOf(object) {
  var proto = object.constructor.prototype;
  var result = object.constructor.name;
  while (proto) {
      result += ' -> ' + proto.constructor.name;
      proto = Object.getPrototypeOf(proto)
  }
  return result;
}

function Animal(name) {
  this.name = name;
  this.foodEaten = 0;
}

Animal.prototype.eat = function() {
  this.foodEaten++;
   console.log(`# times eaten: ${this.foodEaten}`)
}
var animalPrototype = Object.create(Animal.prototype);

function Cat(name, color) {
   // Use the parent constructor and set the correct `this`
   Animal.call(this, name);
   this.color = color;
}
Cat.prototype = animalPrototype;
Cat.prototype.getColor = function() {
   return this.color;
}

function Dog(name, breed) {
   // Use the parent constructor and set the correct `this`
   Animal.call(this, name);
   this.breed = breed;
}
Dog.prototype = animalPrototype;
Dog.prototype.getBreed = function() {
   return this.breed;
}

var garfield = new Cat('Garfield', 'Lab');
var grumpy = new Cat('Grumpy', 'Lab');
var pluto = new Dog('Pluto', 'Lab');


console.log(tracePrototypeChainOf(pluto));

console.assert(garfield.getColor === grumpy.getColor, 'Each cat has the same "makeNoise" method');
console.assert(garfield.getColor !== pluto.getBreed, 'Different animals have different "makeNoise" methods');
console.assert(garfield.eat === grumpy.eat, 'Each cat has the same "eat" method');
console.assert(garfield.eat === pluto.eat, 'Different animals have the same "eat" methods');