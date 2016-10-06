"use strict";

// require is a CommonJs pattern
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

// Build in ES5 Syntax
var Home = React.createClass({
  render: function() {
    return (
        // In React always have a single Top level component - which is why we use a Div
        <div className="jumbotron">
          <h1>Pluralsight Administration</h1>
          <p>React, React Router, and Flux for ultra responsive web apps.</p>
          <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
        </div>
      );
  }
});

module.exports = Home;
