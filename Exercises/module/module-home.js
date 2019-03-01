var myApp = (function(app) {
  var ColorMode = {
    LIGHT: 1,
    DARK: 2
  }

  var homeDiv = null;
  var colorMode = ColorMode.LIGHT;

  function initialize() {
    homeDiv = document.getElementById('home');
    var contentDiv = homeDiv.getElementsByClassName('content')[0]; 
    contentDiv.innerHTML = 'This is a super cool homepage!';
    var toggleButton = homeDiv.getElementsByClassName('toggleColorButton')[0]; 
    toggleButton.addEventListener('click', toggleColorMode);
  }

  function setColors(fgColor, bgColor) {
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = fgColor;
  }

  function toggleColorMode() {
    if(colorMode === ColorMode.LIGHT) {
      setColors('#fff', '#000');
      colorMode = ColorMode.DARK;
    } else {
      setColors('#000', '#fff');
      colorMode = ColorMode.LIGHT;
    }
  }

  app.homePage = {
    initialize
  };
  return app;
})(myApp || {});