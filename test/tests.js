'use strict';

module.exports = function (toExponential, t) {
	t.test('throws a RangeError when < 0 or > 20 (or > 100 in ES2018+)', function (st) {
		st['throws'](
			function () { return toExponential(1, -1); },
			RangeError,
			'-1 is out of range'
		);
		st['throws'](
			function () { return toExponential(1.0, -Infinity); },
			RangeError,
			'-Infinity is out of range'
		);
		st['throws'](
			function () { return toExponential(1.0, Infinity); },
			RangeError,
			'Infinity is out of range on 1'
		);
		st['throws'](
			function () {
				return [
					toExponential(0.9, 21), // ES2018 increased the limit from 21 to 100
					toExponential(0.9, 101)
				];
			},
			RangeError,
			'either 21 or 101 is out of range'
		);

		st.end();
	});

	t.equal(toExponential(NaN, NaN), 'NaN');
	t.equal(toExponential(NaN, Infinity), 'NaN');
	t.equal(toExponential(NaN, 'abc'), 'NaN');

	t.equal(toExponential(Infinity), 'Infinity');
	t.equal(toExponential(Infinity, 0), 'Infinity');
	t.equal(toExponential(-Infinity), '-Infinity');

	t.equal(toExponential(Infinity, Infinity), 'Infinity');
	t.equal(toExponential(Infinity, -Infinity), 'Infinity');
	t.equal(toExponential(-Infinity, Infinity), '-Infinity');
	t.equal(toExponential(-Infinity, -Infinity), '-Infinity');

	t.test('should round properly', function (st) {
		st.equal(toExponential(0), '0e+0');
		st.equal(toExponential(0, 0), '0e+0');
		st.equal(toExponential(0, 1), '0.0e+0');
		st.equal(toExponential(0, 2), '0.00e+0');

		st.equal(toExponential(1.0), '1e+0');
		st.equal(toExponential(1.0, 0), '1e+0');
		st.equal(toExponential(1.0, 1), '1.0e+0');
		st.equal(toExponential(1.0, 2), '1.00e+0');

		st.equal(toExponential(1.2345), '1.2345e+0');
		st.equal(toExponential(1.2345, 0), '1e+0');
		st.equal(toExponential(1.2345, 1), '1.2e+0');
		st.equal(toExponential(1.2345, 2), '1.23e+0');
		st.match(toExponential(1.2345, 3), /^1.23[45]e\+0$/, 'both 1.234 and 1.235 are valid here');
		st.equal(toExponential(1.2345, 4), '1.2345e+0');
		st.equal(toExponential(1.2345, 5), '1.23450e+0');

		st.equal(toExponential(1.255, 2), '1.25e+0');

		st.equal(toExponential(25.0, 0), '3e+1');

		st.equal(toExponential(-6.9e-11, 4), '-6.9000e-11');

		st.end();
	});
};
