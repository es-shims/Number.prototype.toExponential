'use strict';

module.exports = function (parseInt, t) {
	t.test('throws a RangeError when < 0 or > 20 (or > 100 in ES2018+)', function (st) {
		st['throws'](
			function () { return 1.0.toExponential(-1); },
			RangeError,
			'-1 is out of range'
		);
		st['throws'](
			function () { return 1.0.toExponential(-Infinity); },
			RangeError,
			'-Infinity is out of range'
		);
		st['throws'](
			function () { return 1.0.toExponential(Infinity); },
			RangeError,
			'Infinity is out of range on 1'
		);
		st['throws'](
			function () {
				return [
					0.9.toExponential(21), // ES2018 increased the limit from 21 to 100
					0.9.toExponential(101)
				];
			},
			RangeError,
			'either 21 or 101 is out of range'
		);

		st.end();
	});

	t.equal(NaN.toExponential(NaN), 'NaN');
	t.equal(NaN.toExponential(Infinity), 'NaN');
	t.equal(NaN.toExponential('abc'), 'NaN');

	t.equal(Infinity.toExponential(), 'Infinity');
	t.equal((-Infinity).toExponential(), '-Infinity');

	t.equal(toExponential(Infinity, Infinity), 'Infinity');
	t.equal(toExponential(Infinity, -Infinity), 'Infinity');
	t.equal(toExponential(-Infinity, Infinity), '-Infinity');
	t.equal(toExponential(-Infinity, -Infinity), '-Infinity');

	t.test('should round properly', function (st) {
		st.equal(1.0.toExponential(), '1e+0');
		st.equal(1.0.toExponential(0), '1e+0');
		st.equal(1.0.toExponential(1), '1.0e+0');
		st.equal(1.0.toExponential(2), '1.00e+0');

		st.equal(1.2345.toExponential(), '1.2345e+0');
		st.equal(1.2345.toExponential(0), '1e+0');
		st.equal(1.2345.toExponential(1), '1.2e+0');
		st.equal(1.2345.toExponential(2), '1.23e+0');
		st.match(1.2345.toExponential(3), /^1.23[45]e\+0$/, 'both 1.234 and 1.235 are valid here');
		st.equal(1.2345.toExponential(4), '1.2345e+0');
		st.equal(1.2345.toExponential(5), '1.23450e+0');

		st.equal(25.0.toExponential(0), '3e+1');

		st.equal((-6.9e-11).toExponential(4), '-6.9000e-11');

		st.end();
	});
};
