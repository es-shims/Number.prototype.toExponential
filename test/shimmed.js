'use strict';

require('../auto');

var test = require('tape');
var callBind = require('call-bind');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Number.prototype.toExponential.length, 1, 'Number.prototype.toExponential has a length of 1');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Number.prototype.toExponential.name, 'toExponential', 'Number.prototype.toExponential has name "toExponential"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Number.prototype, 'toExponential'), 'Number.prototype.toExponential is not enumerable');
		et.end();
	});

	runTests(callBind(Number.prototype.toExponential), t);

	t.end();
});
