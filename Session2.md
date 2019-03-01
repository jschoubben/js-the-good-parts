# Session 2

## Discussion

- ### **Chapter 5 - Inheritance**

  - **5.1 Pseudoclassical**

    Very difficult explanation of how prototypes and inheritance work in javascript\
    The image below is hopefully a better explanation

  - **5.2 Object specifiers**

    Rather than: `var myObject = maker (f, l, m, c, s)` which has too many parameters to remember in the right order, use an _object specifier_:

    ```javascript
    var myFunction = function(params) {
      var name = params.name || '';
      var birthDate = params.birthDate || new Date();
      console.log(`${name} was born in ${birthDate.getFullYear()}`);
    };

    var myObject = myFunction({
      name: 'John Doe',
      birthDate: new Date(1990, 1, 1)
    });
    ```

    They can now be **listed in any order**

  - **5.3 Prototypal**

    Also, will be explained by the image below

  - **5.4 Functional**

    This way of defining objects is used in traditional javascript web development when making a custom library or module.

    Ie. you can create a "table" component with filtering, sorting, paging, ... functionality, you can put it in its own module. By doing this, you can expose properties and function to developers who make use of your table component but also have a set of private properties and functions available inside your module.

    See the "module" folder for an example of how to create your custom application module in a web application

  - **5.5 Parts**

    He want to show a way of how to get around the prototyping inheritance part bu creating "parts".\
    If you need this kind of functionality, you will also know how to use it so don't pay too much attention to it.\
    Try to understand the code.

    - Create an "eventuality: method which takes a module's "that" property (see Functional).
    - Create a private property "registry" which will be a dictionary of event keys with an array of event handlers (functions)
    - Create a fire method which takes in the name of the event.
      - In this method, you loop over the registry and fetch all handlers
      - Execute the function using the javascript "apply" method (located on the Function prototype)
      - Return "this" to make the fire method chainable
    - Create an on method which adds the given handler method and optional parameters to the registry for the provided event type

![Prototype chain](./images/javascript-prototype-chain.png 'Prototype chain')

- ### **Chapter 6 - Arrays**

  - **6.1 Array litterals**

    In Javascript, you can create a new array very easily:

    ```Javascript
    var myArray = [];
    var myArray2 = ['zero', 'one', 'two'];

    console.log(myArray[1]); // undefined
    console.log(myArray2[1]); // one

    var mySpecialObject = {
      1: 'zero',
      2: 'one',
      3: 'two'
    };
    console.log(mySpecialObject[1]); // one
    ```

  - **6.2 Length**

    Holes in an array are taken into account by the .length function

    ```Javascript
    var rollerSkate = [0, 0, 0, 0];
    console.log(rollerSkate.length); // 4
    rollerSkate[10] = 'not cool';
    console.log(rollerSkate.length); // 11
    ```

  - **6.3 Delete**

    Always use the .splice method, with "delete" you leave holes in the array

    ```Javascript
      var russianRoulette = ['yuri', 'vladimir', 'boris'];
      while (russianRoulette.length > 1) {
        russianRoulette.splice(Math.floor(Math.random() * russianRoulette.length), 1);
      }
      console.log(`${russianRoulette[0]} survived`);
    ```

  - **6.4 Enumeration**

    Never use _for in_ on an array, use the .forEach(function(element)){} method instead

    ```Javascript
      var myCats = ['Suki', 'Tobi'];
      myCats.forEach(function(cat) {
        console.log(`${cat} is always hangry`);
      });
    ```

  - **6.5 Confusion**

    Remember that you cannot easily detect if an object is an array or not

  - **6.6 Methods**

    This is actually part of the previous chapter. He is trying to create an extension method for all arrays.

    ```Javascript

      Array.prototype.sum = function() {
        return this.reduce(function(total, num) {
          return total + num;
        })
      }
      var x = [1, 2, 3, 4];
      console.log(x.sum());

    ```

  - **6.7 Dimensions**

    You can create multi-dimensional arrays like so:

    ```Javascript
      var theMatrix = [
        [ 1, 2, 3 ],
        [ 4, 5, 6 ],
        [7, 8, 9]
      ];
      console.log(theMatrix[1][1]); // 5
    ```
