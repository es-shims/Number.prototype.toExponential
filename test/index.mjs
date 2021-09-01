import toExponential, * as toExponentialModule from 'number.prototype.toexponential';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	runTests(toExponential, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(toExponentialModule).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = toExponentialModule;
	t.equal((await import('number.prototype.toexponential/shim')).default, shim, 'shim named export matches deep export');
	t.equal((await import('number.prototype.toexponential/implementation')).default, implementation, 'implementation named export matches deep export');
	t.equal((await import('number.prototype.toexponential/polyfill')).default, getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
