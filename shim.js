'use strict';

var define = require('define-properties');
var polyfill = require('./polyfill')();

module.exports = function shimToExponential() {
	define(
		Number.prototype,
		{ toExponential: polyfill },
		{ toExponential: function () { return polyfill !== Number.prototype.toExponential; } }
	);
	return polyfill;
};
