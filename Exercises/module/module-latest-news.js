var myApp = (function(app) {
  var latestNewsDiv = null;

  function initialize() {
    latestNewsDiv = document.getElementById('latest-news');
    var contentDiv = latestNewsDiv.getElementsByClassName('content')[0]; 
    contentDiv.innerHTML = 'Latest news!';
  }

  app.latestNews = {
    initialize
  };
  return app;
})(myApp || {});