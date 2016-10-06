/*eslint-disable strict */ //Disabling check because we can't run strict mode. Need global vars.

// Reference jQuery by the dollar sign and by jQuery
// bootstrap expects jQuery to be there which is why we have to define it globally
var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header/>
        <div className="container-fluid">
          <RouteHandler/>
        </div>
      </div>
    );
  }
});

module.exports = App;
