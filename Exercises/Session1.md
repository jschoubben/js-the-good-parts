# Session 1

## Environment setup

- Install node + NPM\
  https://nodejs.org/en/download/
- Install vscode

## Discussion

- ### Chapter 1 - Good parts

  The best parts of Javascript include:

  - functions
  - loose typing (variables are declared as variables, without a type)
  - dynamic objects
  - object literal notation (where you can create an object already with a list of key/value pairs inside curly braces)

  The worst parts include global variables - there is a common global object namespace where they're all lumped together and they're essential to the language.

  Javascript has a class free object makeup, relying instead on objects inheriting properties directly from other objects - this is prototypal inheritance.

- ### Chapter 2 - Grammar

  Always use // for comments, even multi-line ones to avoid having to escape /\* characters.

  - Numbers

    - There is only 1 number type: 64-bit floating point
    - NaN: Not a Number (use isNaN(number) to check for a valid number)

  - Strings

    - always use single quote's
    - When you need to use variables, use backtics:
      ```Javascript
      console.log('Hello world!');
      console.log(`Hello ${name}`);
      ```

  - Statements

    ```Javascript
    console.log(Boolean(true || false))
    console.log(Boolean(true && false))

    console.log(Boolean(undefined))
    console.log(Boolean(null))

    console.log(Boolean(''))
    console.log(Boolean('false'))

    console.log(Boolean(0))
    console.log(Boolean(1))
    console.log(Boolean(1/0))
    console.log(Boolean(-1))
    console.log(Boolean(Number('test')))

    console.log(Boolean([false]))
    console.log(Boolean({
      prop: false
    }))

    console.log(!!0)
    ```

  - Expressions
    - Ternary operator
      ```Javascript
      exp1 ? exp2 : exp3;
      ```
    - Property accessor
      ```Javascript
      var x = {
        name: 'John',
        age: 28
      };
      console.log(x.name);
      console.log(x['age'])
      ```

### Chapter 3 - Objects

In Javascript, there are only 5 primary types:

- numbers
- string
- boolean
- null
- undefined

All other values are **objects** (including arrays and functions).

Objects are "**class free**", however, they can inherit properties from their **prototype**.

An object literal is when you create a new object using the curly braces notation:

```Javascript
var person = {
  name: 'John',
  lastName: 'Doe',
  age: 28
};
var empty = {};
```

#### ByRef

In Javascript, variables hold a reference to an object, not the actual object.

```Javascript
var x = {
  name: 'John',
  lastName: 'Doe',
  age: 28
};
var y = x;
y.name = 'Larry';
console.log(x.name); // Prints larry
```

#### Reflection

Javascript supports reflection by default.

```Javascript
var x = {
  name: 'John',
  lastName: 'Doe',
  age: 28
};
for(var property in x) {
  console.log(`Name: ${property}, value: ${x[property]}`);
}
```

#### Delete

You can also delete a property from an object

```Javascript
var x = {
  name: 'John',
  lastName: 'Doe',
  age: 28
};
console.log(JSON.stringify(x));
delete x.age;
console.log(JSON.stringify(x));
```

#### Modules

Because of the global object in javascript, it's best to always put your application logic into its own global variable (also called a "module").

```Javascript
var myApp = {};
myApp.homePage = {
  title: 'Home',

  getNewsItems: function() {...},

  collapseMenu: function() {...}
};
```

```Javascript
var myApp;
myApp = (function(app) {
  var isMenuCollapsed = false;

  var toggleMenuCollapse = function() {
    if (isMenuCollapsed) {
      console.log(`Opening menu`);
      isMenuCollapsed = false;
    } else {
      console.log(`Closing menu`);
      isMenuCollapsed = true;
    }
  };
  app.homePage = {
    toggleMenu: toggleMenuCollapse
  };
  return app;
})(myApp || {});

myApp = (function(app) {
  var aboutWho = 'John';

  var who = function() {
    console.log(`Hello, my name is ${aboutWho}`);
  };

  app.aboutPage = {
    who: who
  };
  return app;
})(myApp || {});
myApp.homePage.toggleMenu();
myApp.homePage.toggleMenu();
myApp.homePage.toggleMenu();
myApp.aboutPage.who();
```

### Chapter 4 - Functions

You can declare a function in 2 ways, since ES6, you can also use lamda functions (arrow functions).

```javascript
var sumX = function(arg1, arg2) {
  return arg1 + arg2;
};

function sumY(arg1, arg2) {
  return arg1 + arg2;
}

var sumZ = (arg1, arg2) => arg1 + arg2;
```

#### Lamda (Arrow) functions

```javascript
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
```

#### Arguments

It is not necesarry to provide the same amount of function variables as are defined by the function.

```javascript
var argsFunction = function(arg1, arg2) {
  console.log(arg1);
  console.log(arg2);
  console.log(arguments);
};
argsFunction('Hello');
argsFunction('Hello', 'world');
argsFunction('Hello', 'world', 'or', 'John');
```

#### Recursion

```Javascript
var calculateFibonacci = function(amount, x, y) {
  if (amount > 0) {
    x = x || 0;
    y = y || 1;
    return calculateFibonacci(amount - 1, y, x + y);
  }
  return y || 0;
};
console.log(calculateFibonacci(process.argv[2] || 0));
```
