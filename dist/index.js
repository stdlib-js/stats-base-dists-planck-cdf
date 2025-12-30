"use strict";var t=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var f=t(function(j,n){
var u=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-expm1/dist'),v=require('@stdlib/math-base-special-floor/dist'),N=require('@stdlib/constants-float64-pinf/dist');function p(r,e){return u(r)||u(e)||e<=0?NaN:r<0?0:r===N?1:-q(-e*(v(r)+1))}n.exports=p
});var c=t(function(k,o){
var y=require('@stdlib/utils-constant-function/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/math-base-special-expm1/dist'),I=require('@stdlib/math-base-special-floor/dist'),P=require('@stdlib/constants-float64-pinf/dist');function O(r){if(a(r)||r<=0)return y(NaN);return e;function e(i){return a(i)?NaN:i<0?0:i===P?1:-F(-r*(I(i)+1))}}o.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=f(),g=c();R(s,"factory",g);module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
