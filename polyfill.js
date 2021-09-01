'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (!Number.prototype.toExponential || (-6.9e-11).toExponential(4) !== '-6.9000e-11') {
		return implementation;
	}
	try {
		(1).toExponential(Infinity);
		(1).toExponential(-Infinity);
		return implementation;
	} catch (e) { /**/ }
	return Number.prototype.toExponential;
};
