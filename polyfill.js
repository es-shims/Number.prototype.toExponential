'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (!Number.prototype.toExponential || (-6.9e-11).toExponential(4) !== '-6.9000e-11') {
		return implementation;
	}
	return Number.prototype.toExponential;
};
