// main.js is the bootstrap of our application
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.getElementById('app'));
});

