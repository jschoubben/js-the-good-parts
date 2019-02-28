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
test.print(); // ?
test.printLamda(); // ?
this.x = 3;
test.print(); // ?
test.printLamda(); // ?
