import { U as $, d as b, a as G, i as N, S as I, f as V, k as j } from "./_Uint8Array-BVqUBv36.js";
import { a9 as k, a as w, aa as nn, S as B, a1 as en, b as D, i as F, ab as J, ac as Q, ad as rn, a8 as tn } from "./base-KIYEtT4d.js";
import { g as fn } from "./index-BUVGpkNy.js";
import { h as an, i as un } from "./el-popper-DdrJbju1.js";
var sn = /\s/;
function dn(n) {
  for (var e = n.length; e-- && sn.test(n.charAt(e)); )
    ;
  return e;
}
var ln = /^\s+/;
function gn(n) {
  return n && n.slice(0, dn(n) + 1).replace(ln, "");
}
var U = NaN, An = /^[-+]0x[0-9a-f]+$/i, _n = /^0b[01]+$/i, cn = /^0o[0-7]+$/i, pn = parseInt;
function H(n) {
  if (typeof n == "number")
    return n;
  if (k(n))
    return U;
  if (w(n)) {
    var e = typeof n.valueOf == "function" ? n.valueOf() : n;
    n = w(e) ? e + "" : e;
  }
  if (typeof n != "string")
    return n === 0 ? n : +n;
  n = gn(n);
  var r = _n.test(n);
  return r || cn.test(n) ? pn(n.slice(2), r ? 2 : 8) : An.test(n) ? U : +n;
}
var vn = "__lodash_hash_undefined__";
function Tn(n) {
  return this.__data__.set(n, vn), this;
}
function on(n) {
  return this.__data__.has(n);
}
function S(n) {
  var e = -1, r = n == null ? 0 : n.length;
  for (this.__data__ = new nn(); ++e < r; )
    this.add(n[e]);
}
S.prototype.add = S.prototype.push = Tn;
S.prototype.has = on;
function yn(n, e) {
  for (var r = -1, i = n == null ? 0 : n.length; ++r < i; )
    if (e(n[r], r, n))
      return !0;
  return !1;
}
function On(n, e) {
  return n.has(e);
}
var En = 1, mn = 2;
function Y(n, e, r, i, a, t) {
  var f = r & En, u = n.length, s = e.length;
  if (u != s && !(f && s > u))
    return !1;
  var d = t.get(n), _ = t.get(e);
  if (d && _)
    return d == e && _ == n;
  var l = -1, g = !0, p = r & mn ? new S() : void 0;
  for (t.set(n, e), t.set(e, n); ++l < u; ) {
    var c = n[l], v = e[l];
    if (i)
      var o = f ? i(v, c, l, e, n, t) : i(c, v, l, n, e, t);
    if (o !== void 0) {
      if (o)
        continue;
      g = !1;
      break;
    }
    if (p) {
      if (!yn(e, function(T, y) {
        if (!On(p, y) && (c === T || a(c, T, r, i, t)))
          return p.push(y);
      })) {
        g = !1;
        break;
      }
    } else if (!(c === v || a(c, v, r, i, t))) {
      g = !1;
      break;
    }
  }
  return t.delete(n), t.delete(e), g;
}
function Pn(n) {
  var e = -1, r = Array(n.size);
  return n.forEach(function(i, a) {
    r[++e] = [a, i];
  }), r;
}
function Ln(n) {
  var e = -1, r = Array(n.size);
  return n.forEach(function(i) {
    r[++e] = i;
  }), r;
}
var Rn = 1, In = 2, wn = "[object Boolean]", Sn = "[object Date]", xn = "[object Error]", Mn = "[object Map]", Cn = "[object Number]", Dn = "[object RegExp]", hn = "[object Set]", $n = "[object String]", bn = "[object Symbol]", Gn = "[object ArrayBuffer]", Nn = "[object DataView]", W = B ? B.prototype : void 0, M = W ? W.valueOf : void 0;
function Bn(n, e, r, i, a, t, f) {
  switch (r) {
    case Nn:
      if (n.byteLength != e.byteLength || n.byteOffset != e.byteOffset)
        return !1;
      n = n.buffer, e = e.buffer;
    case Gn:
      return !(n.byteLength != e.byteLength || !t(new $(n), new $(e)));
    case wn:
    case Sn:
    case Cn:
      return en(+n, +e);
    case xn:
      return n.name == e.name && n.message == e.message;
    case Dn:
    case $n:
      return n == e + "";
    case Mn:
      var u = Pn;
    case hn:
      var s = i & Rn;
      if (u || (u = Ln), n.size != e.size && !s)
        return !1;
      var d = f.get(n);
      if (d)
        return d == e;
      i |= In, f.set(n, e);
      var _ = Y(u(n), u(e), i, a, t, f);
      return f.delete(n), _;
    case bn:
      if (M)
        return M.call(n) == M.call(e);
  }
  return !1;
}
var Fn = 1, Un = Object.prototype, Hn = Un.hasOwnProperty;
function Wn(n, e, r, i, a, t) {
  var f = r & Fn, u = b(n), s = u.length, d = b(e), _ = d.length;
  if (s != _ && !f)
    return !1;
  for (var l = s; l--; ) {
    var g = u[l];
    if (!(f ? g in e : Hn.call(e, g)))
      return !1;
  }
  var p = t.get(n), c = t.get(e);
  if (p && c)
    return p == e && c == n;
  var v = !0;
  t.set(n, e), t.set(e, n);
  for (var o = f; ++l < s; ) {
    g = u[l];
    var T = n[g], y = e[g];
    if (i)
      var L = f ? i(y, T, g, e, n, t) : i(T, y, g, n, e, t);
    if (!(L === void 0 ? T === y || a(T, y, r, i, t) : L)) {
      v = !1;
      break;
    }
    o || (o = g == "constructor");
  }
  if (v && !o) {
    var m = n.constructor, O = e.constructor;
    m != O && "constructor" in n && "constructor" in e && !(typeof m == "function" && m instanceof m && typeof O == "function" && O instanceof O) && (v = !1);
  }
  return t.delete(n), t.delete(e), v;
}
var Kn = 1, K = "[object Arguments]", q = "[object Array]", R = "[object Object]", qn = Object.prototype, X = qn.hasOwnProperty;
function Xn(n, e, r, i, a, t) {
  var f = D(n), u = D(e), s = f ? q : G(n), d = u ? q : G(e);
  s = s == K ? R : s, d = d == K ? R : d;
  var _ = s == R, l = d == R, g = s == d;
  if (g && N(n)) {
    if (!N(e))
      return !1;
    f = !0, _ = !1;
  }
  if (g && !_)
    return t || (t = new I()), f || V(n) ? Y(n, e, r, i, a, t) : Bn(n, e, s, r, i, a, t);
  if (!(r & Kn)) {
    var p = _ && X.call(n, "__wrapped__"), c = l && X.call(e, "__wrapped__");
    if (p || c) {
      var v = p ? n.value() : n, o = c ? e.value() : e;
      return t || (t = new I()), a(v, o, r, i, t);
    }
  }
  return g ? (t || (t = new I()), Wn(n, e, r, i, a, t)) : !1;
}
function x(n, e, r, i, a) {
  return n === e ? !0 : n == null || e == null || !F(n) && !F(e) ? n !== n && e !== e : Xn(n, e, r, i, x, a);
}
var Jn = 1, Qn = 2;
function Yn(n, e, r, i) {
  var a = r.length, t = a;
  if (n == null)
    return !t;
  for (n = Object(n); a--; ) {
    var f = r[a];
    if (f[2] ? f[1] !== n[f[0]] : !(f[0] in n))
      return !1;
  }
  for (; ++a < t; ) {
    f = r[a];
    var u = f[0], s = n[u], d = f[1];
    if (f[2]) {
      if (s === void 0 && !(u in n))
        return !1;
    } else {
      var _ = new I(), l;
      if (!(l === void 0 ? x(d, s, Jn | Qn, i, _) : l))
        return !1;
    }
  }
  return !0;
}
function Z(n) {
  return n === n && !w(n);
}
function Zn(n) {
  for (var e = j(n), r = e.length; r--; ) {
    var i = e[r], a = n[i];
    e[r] = [i, a, Z(a)];
  }
  return e;
}
function z(n, e) {
  return function(r) {
    return r == null ? !1 : r[n] === e && (e !== void 0 || n in Object(r));
  };
}
function zn(n) {
  var e = Zn(n);
  return e.length == 1 && e[0][2] ? z(e[0][0], e[0][1]) : function(r) {
    return r === n || Yn(r, n, e);
  };
}
var Vn = 1, jn = 2;
function kn(n, e) {
  return J(n) && Z(e) ? z(Q(n), e) : function(r) {
    var i = fn(r, n);
    return i === void 0 && i === e ? an(r, n) : x(e, i, Vn | jn);
  };
}
function ne(n) {
  return function(e) {
    return e == null ? void 0 : e[n];
  };
}
function ee(n) {
  return function(e) {
    return rn(e, n);
  };
}
function re(n) {
  return J(n) ? ne(Q(n)) : ee(n);
}
function le(n) {
  return typeof n == "function" ? n : n == null ? un : typeof n == "object" ? D(n) ? kn(n[0], n[1]) : zn(n) : re(n);
}
var C = function() {
  return tn.Date.now();
}, ie = "Expected a function", te = Math.max, fe = Math.min;
function ge(n, e, r) {
  var i, a, t, f, u, s, d = 0, _ = !1, l = !1, g = !0;
  if (typeof n != "function")
    throw new TypeError(ie);
  e = H(e) || 0, w(r) && (_ = !!r.leading, l = "maxWait" in r, t = l ? te(H(r.maxWait) || 0, e) : t, g = "trailing" in r ? !!r.trailing : g);
  function p(A) {
    var E = i, P = a;
    return i = a = void 0, d = A, f = n.apply(P, E), f;
  }
  function c(A) {
    return d = A, u = setTimeout(T, e), _ ? p(A) : f;
  }
  function v(A) {
    var E = A - s, P = A - d, h = e - E;
    return l ? fe(h, t - P) : h;
  }
  function o(A) {
    var E = A - s, P = A - d;
    return s === void 0 || E >= e || E < 0 || l && P >= t;
  }
  function T() {
    var A = C();
    if (o(A))
      return y(A);
    u = setTimeout(T, v(A));
  }
  function y(A) {
    return u = void 0, g && i ? p(A) : (i = a = void 0, f);
  }
  function L() {
    u !== void 0 && clearTimeout(u), d = 0, i = s = a = u = void 0;
  }
  function m() {
    return u === void 0 ? f : y(C());
  }
  function O() {
    var A = C(), E = o(A);
    if (i = arguments, a = this, s = A, E) {
      if (u === void 0)
        return c(s);
      if (l)
        return clearTimeout(u), u = setTimeout(T, e), p(s);
    }
    return u === void 0 && (u = setTimeout(T, e)), f;
  }
  return O.cancel = L, O.flush = m, O;
}
function Ae(n, e) {
  return x(n, e);
}
export {
  le as b,
  ge as d,
  Ae as i
};
