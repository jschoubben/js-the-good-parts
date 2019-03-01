function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype.doSomething = function(){
  console.log('Aiming for hairball location')
}

var garfield = new Cat('garfield', 'orange');
var grumpy = new Cat('grumpy', 'grey');

console.assert(garfield.doSomething === grumpy.doSomething, 'Each cat has the same doSomething method'); // false

var huh = Cat('Who am I?', 'white');
console.assert( !huh, `huh should be undefined because Cat doesn't return any value`);

console.assert(garfield.__proto__.constructor === Cat, `Using the new keyword, adds the function as the constructor of the instance's prototype`);
console.assert(garfield.__proto__ === Cat.prototype, `Using the new keyword, adds the function as the constructor of the instance's prototype`);


