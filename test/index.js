'use strict';

var toExponential = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(toExponential, t);

	t.end();
});
