'use strict';

var callBound = require('call-bound');

var $abs = require('math-intrinsics/abs');
var $floor = require('math-intrinsics/floor');
var $pow = require('math-intrinsics/pow');
var $round = require('math-intrinsics/round');
var $isFinite = require('math-intrinsics/isFinite');

var log10 = require('math.log10/polyfill')();

var ToIntegerOrInfinity = require('es-abstract/2024/ToIntegerOrInfinity');
var thisNumberValue = require('es-abstract/2024/ThisNumberValue');
var NumberToString = require('es-abstract/2024/Number/toString');

var $numberToString = callBound('Number.prototype.toString');
var $strSlice = callBound('String.prototype.slice');
var $toExponential = callBound('Number.prototype.toExponential');

var maxDigits = 20;
try {
	// ES2018 increased the limit from 20 to 100
	$toExponential(1, 100);
	maxDigits = 100;
} catch (e) { /**/ }

module.exports = function toExponential(fractionDigits) {
	var x = thisNumberValue(this); // step 1

	if (typeof fractionDigits === 'undefined') {
		return $toExponential(x);
	}
	var f = ToIntegerOrInfinity(fractionDigits); // step 2

	// 4. If x is not finite, return ! Number::toString(x, 10)
	if (!$isFinite(x)) {
		return NumberToString(x, 10);
	}

	// implementation adapted from https://gist.github.com/SheetJSDev/1100ad56b9f856c95299ed0e068eea08

	// 5. If f < 0 or f > 100, throw a RangeError exception.
	if (f < 0 || f > maxDigits) {
		throw new RangeError('Fraction digits ' + fractionDigits + ' out of range');
	}

	// 7: Let s be the empty String
	var s = '';
	var m = '';
	var e = 0;
	var c = '';
	var d = '';

	// 8: If x < 0
	if (x < 0) {
		s = '-';
		x = -x;
	}
	// 9. If x = 0, then
	if (x === 0) {
		// 9.a. Let m be the String value consisting of f + 1 occurrences of the code unit 0x0030 (DIGIT ZERO).
		for (var i = 0; i < f + 1; i += 1) {
			m += '0';
		}
		e = 0; // 9.b. Let e be 0.
	} else { // step 10
		var L = log10(x);
		e = $floor(L); // 10 ** e <= x and x < 10 ** (e+1)
		var n = 0;
		if (typeof fractionDigits !== 'undefined') { // eslint-disable-line no-negated-condition
			var w = $pow(10, e - f); // x / 10 ** (f+1) < w and w <= x / 10 ** f
			n = $round(x / w); // 10 ** f <= n and n < 10 ** (f+1)
			if (2 * x >= (((2 * n) + 1) * w)) {
				n += 1; // pick larger value
			}
			if (n >= $pow(10, f + 1)) { // 10e-1 = 1e0
				n /= 10;
				e += 1;
			}
		} else {
			f = 16; // start from Math.ceil(log10(Number.MAX_SAFE_INTEGER)) and loop down
			var guessN = $round($pow(10, L - e + f));
			var targetF = f;
			while (f-- > 0) { // eslint-disable-line no-plusplus
				guessN = $round($pow(10, L - e + f));
				if ($abs((guessN * $pow(10, e - f)) - x) <= $abs((n * $pow(10, e - targetF)) - x)) {
					targetF = f;
					n = guessN;
				}
			}
		}
		m = $numberToString(n, 10);
		if (typeof fractionDigits === 'undefined') {
			while ($strSlice(m, -1) === '0') {
				m = $strSlice(m, 0, -1);
				d += 1;
			}
		}
	}

	// 11: If f != 0, then
	if (f !== 0) {
		m = $strSlice(m, 0, 1) + '.' + $strSlice(m, 1);
	}

	// 12: If e = 0, then
	if (e === 0) {
		c = '+';
		d = '0';
	} else { // 13: Else
		if (e > 0) {
			c = '+';
		} else {
			c = '-';
			e = -e;
		}
		d = $numberToString($abs(e), 10);
	}

	// 14: Let m be the concatenation of the four Strings m, "e", c, and d.
	m += 'e' + c + d;

	// 15: Return the concatenation of the Strings s and m.
	return s + m;
};
