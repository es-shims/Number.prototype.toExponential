import callBind from 'call-bind';

import getPolyfill from 'number.prototype.toexponential/polyfill';

export default callBind(getPolyfill());

export { default as getPolyfill } from 'number.prototype.toexponential/polyfill';
export { default as implementation } from 'number.prototype.toexponential/implementation';
export { default as shim } from 'number.prototype.toexponential/shim';
