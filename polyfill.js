'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (
		!Number.prototype.toExponential
		|| (-6.9e-11).toExponential(4) !== '-6.9000e-11' // Edge v15 - v17
		|| (25).toExponential(0) !== '3e+1' // FF v3.6 - v86
	) {
		return implementation;
	}
	try {
		(1).toExponential(Infinity);
		(1).toExponential(-Infinity);
		return implementation;
	} catch (e) { /**/ }
	try {
		NaN.toExponential(Infinity);
		Infinity.toExponential(Infinity);
	} catch (e) {
		// Safari < 11 and FF < 50
		return implementation;
	}
	return Number.prototype.toExponential;
};
