'use strict';

var GetIntrinsic = require('get-intrinsic');
var callBound = require('call-bind/callBound');

var $abs = GetIntrinsic('%Math.abs%');
var $floor = GetIntrinsic('%Math.floor%');
var $pow = GetIntrinsic('%Math.pow%');
var $round = GetIntrinsic('%Math.round%');
var $Number = GetIntrinsic('%Number%');
var $isNaN = GetIntrinsic('%isNaN%');

var log10 = require('math.log10/polyfill')();

var ToInteger = require('es-abstract/2020/ToInteger');

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
	// 1: Let x be this Number value.
	var x = $Number(this);

	if (typeof fractionDigits === 'undefined') {
		return $toExponential(x);
	}
	var f = ToInteger(fractionDigits);
	if ($isNaN(x)) {
		return 'NaN';
	}

	// implementation adapted from https://gist.github.com/SheetJSDev/1100ad56b9f856c95299ed0e068eea08

	// 4: Let s be the empty string
	var s = '';

	// 5: If x < 0
	if (x < 0) {
		s = '-';
		x = -x;
	}

	// 6: If x = +Infinity
	if (x === Infinity) {
		return s + 'Infinity';
	}

	// 7: If fractionDigits is not undefined and (f < 0 or f > 20), throw a RangeError exception.
	if (typeof fractionDigits !== 'undefined' && (f < 0 || f > maxDigits)) {
		throw new RangeError('Fraction digits ' + fractionDigits + ' out of range');
	}

	var m = '';
	var e = 0;
	var c = '';
	var d = '';

	// 8: If x = 0 then
	if (x === 0) {
		e = 0;
		f = 0;
		m = '0';
	} else { // 9: Else, x != 0
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

	// 10: If f != 0, then
	if (f !== 0) {
		m = $strSlice(m, 0, 1) + '.' + $strSlice(m, 1);
	}

	// 11: If e = 0, then
	if (e === 0) {
		c = '+';
		d = '0';
	} else { // 12: Else
		c = e > 0 ? '+' : '-';
		d = $numberToString($abs(e), 10);
	}

	// 13: Let m be the concatenation of the four Strings m, "e", c, and d.
	m += 'e' + c + d;

	// 14: Return the concatenation of the Strings s and m.
	return s + m;
};
