import { b as y, a as m } from "./index-3PkDc2Yq.js";
import { h as p, e as O, j as x, o as w, U as a } from "./_Uint8Array-BVqUBv36.js";
import { a as v, a8 as P } from "./base-KIYEtT4d.js";
var i = Object.create, b = /* @__PURE__ */ function() {
  function e() {
  }
  return function(r) {
    if (!v(r))
      return {};
    if (i)
      return i(r);
    e.prototype = r;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function M(e, r) {
  var n = -1, t = e.length;
  for (r || (r = Array(t)); ++n < t; )
    r[n] = e[n];
  return r;
}
function N(e, r, n, t) {
  var h = !n;
  n || (n = {});
  for (var u = -1, g = r.length; ++u < g; ) {
    var s = r[u], o = void 0;
    o === void 0 && (o = e[s]), h ? y(n, s, o) : m(n, s, o);
  }
  return n;
}
function A(e) {
  var r = [];
  if (e != null)
    for (var n in Object(e))
      r.push(n);
  return r;
}
var U = Object.prototype, C = U.hasOwnProperty;
function I(e) {
  if (!v(e))
    return A(e);
  var r = p(e), n = [];
  for (var t in e)
    t == "constructor" && (r || !C.call(e, t)) || n.push(t);
  return n;
}
function j(e) {
  return O(e) ? x(e, !0) : I(e);
}
var K = w(Object.getPrototypeOf, Object), d = typeof exports == "object" && exports && !exports.nodeType && exports, f = d && typeof module == "object" && module && !module.nodeType && module, L = f && f.exports === d, c = L ? P.Buffer : void 0, l = c ? c.allocUnsafe : void 0;
function k(e, r) {
  if (r)
    return e.slice();
  var n = e.length, t = l ? l(n) : new e.constructor(n);
  return e.copy(t), t;
}
function T(e) {
  var r = new e.constructor(e.byteLength);
  return new a(r).set(new a(e)), r;
}
function q(e, r) {
  var n = r ? T(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
function D(e) {
  return typeof e.constructor == "function" && !p(e) ? b(K(e)) : {};
}
export {
  T as a,
  q as b,
  N as c,
  M as d,
  k as e,
  K as g,
  D as i,
  j as k
};