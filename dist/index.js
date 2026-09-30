"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var f=t(function(j,n){
var u=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-expm1/dist'),v=require('@stdlib/math-base-special-floor/dist'),N=require('@stdlib/constants-float64-pinf/dist');function p(e,r){return u(e)||u(r)||r<=0?NaN:e<0?0:e===N?1:-q(-r*(v(e)+1))}n.exports=p
});var c=t(function(k,o){
var y=require('@stdlib/utils-constant-function/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/math-base-special-expm1/dist'),I=require('@stdlib/math-base-special-floor/dist'),P=require('@stdlib/constants-float64-pinf/dist');function O(e){if(a(e)||e<=0)return y(NaN);return r;function r(i){return a(i)?NaN:i<0?0:i===P?1:-F(-e*(I(i)+1))}}o.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=f(),g=c();R(s,"factory",g);module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
