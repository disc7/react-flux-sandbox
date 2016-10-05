"use strict";

// require is a CommonJs pattern
var React = require('react');

// Build in ES5 Syntax
var Home = React.createClass({
  render: function() {
    return (
        // In React always have a single Top level component - which is why we use a Div
        <div className="jumbotron">
          <h1>Pluralsight Administration</h1>
          <p>React, React Router, and Flux for ultra responsive web apps.</p>
        </div>
      );
  }
});

module.exports = Home;
