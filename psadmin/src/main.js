
// Reference jQuery by the dollar sign and by jQuery
// bootstrap expects jQuery to be there which is why we have to define it globally
$ = jQuery = require('jquery');

test = 1;

var App = console.log('Fuck yes! From Browserify');

module.exports = App;
