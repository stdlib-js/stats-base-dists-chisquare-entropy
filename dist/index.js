"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var i=u(function(p,a){
var n=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-digamma/dist'),v=require('@stdlib/math-base-special-gamma/dist'),m=require('@stdlib/math-base-special-ln/dist');function q(e){var r;return n(e)||e<=0?NaN:(r=e/2,r+m(2*v(r))+(1-r)*s(r))}a.exports=q
});var o=i();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
