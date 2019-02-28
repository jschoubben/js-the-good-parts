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
    -
