
// Reference jQuery by the dollar sign and by jQuery
// bootstrap expects jQuery to be there which is why we have to define it globally
$ = jQuery = require('jquery');

var App = console.log('Hi from Browserify');

module.exports = App;
