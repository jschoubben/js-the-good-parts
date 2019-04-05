// At first glance, writing a regular expression to match a number should be easy right ?

// We have the \d special character to match any digit, and all we need to do is match the decimal point right ?
// For simple numbers, that may be right, but when working with scientific or financial numbers,
// you often have to deal with positive and negative numbers, significant digits, exponents,
// and even different representations(like the comma used to separate thousands and millions).

// Below are a few different formats of numbers that you might encounter.
// Notice how you will have to match the decimal point itself and not an arbitrary character using the dot metacharacter.
// If you are having trouble skipping the last number, notice how that number ends the line compared to the rest.
function regexDecimal(input) {
  return /./.test(input);
}

var matchingObjects = [
  {
    input: '3.14529',
    match: true
  },
  {
    input: '-255.34',
    match: true
  },
  {
    input: '3.14529',
    match: true
  },
  {
    input: '128',
    match: true
  },
  {
    input: '1.9e10',
    match: true
  },
  {
    input: '123,340.00',
    match: true
  },
  {
    input: '720p',
    match: false
  },
  {
    input: '1e1e1',
    match: false
  },
  {
    input: '1..2',
    match: false
  },
  {
    input: '1.2.3.',
    match: false
  },
  {
    input: '--1.2',
    match: false
  },
  {
    input: '1-2',
    match: false
  }
];

matchingObjects.forEach(matchingObject => {
  console.log('Matching ' + matchingObject.input);
  if (regexDecimal(matchingObject.input) !== matchingObject.match) {
    console.error('Error');
  }
});
