import { ae as l, a8 as i, a3 as V, i as D, a2 as _, af as F, b as E, ag as A, ah as y, aa as G, ai as u } from "./base-KIYEtT4d.js";
import { b as k, i as K, a as R } from "./_arrayPush-Dte6x3sf.js";
import { i as W } from "./index-3PkDc2Yq.js";
var T = l(i, "WeakMap");
function q(t) {
  return t != null && k(t.length) && !V(t);
}
var N = Object.prototype;
function H(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || N;
  return t === r;
}
function Y(t, e) {
  for (var r = -1, o = Array(t); ++r < t; )
    o[r] = e(r);
  return o;
}
function Z() {
  return !1;
}
var z = typeof exports == "object" && exports && !exports.nodeType && exports, w = z && typeof module == "object" && module && !module.nodeType && module, J = w && w.exports === z, x = J ? i.Buffer : void 0, Q = x ? x.isBuffer : void 0, X = Q || Z, tt = "[object Arguments]", rt = "[object Array]", et = "[object Boolean]", at = "[object Date]", ot = "[object Error]", nt = "[object Function]", st = "[object Map]", it = "[object Number]", ut = "[object Object]", ct = "[object RegExp]", ft = "[object Set]", pt = "[object String]", gt = "[object WeakMap]", bt = "[object ArrayBuffer]", yt = "[object DataView]", lt = "[object Float32Array]", dt = "[object Float64Array]", ht = "[object Int8Array]", Tt = "[object Int16Array]", jt = "[object Int32Array]", vt = "[object Uint8Array]", mt = "[object Uint8ClampedArray]", _t = "[object Uint16Array]", At = "[object Uint32Array]", a = {};
a[lt] = a[dt] = a[ht] = a[Tt] = a[jt] = a[vt] = a[mt] = a[_t] = a[At] = !0;
a[tt] = a[rt] = a[bt] = a[et] = a[yt] = a[at] = a[ot] = a[nt] = a[st] = a[it] = a[ut] = a[ct] = a[ft] = a[pt] = a[gt] = !1;
function wt(t) {
  return D(t) && k(t.length) && !!a[_(t)];
}
function xt(t) {
  return function(e) {
    return t(e);
  };
}
var U = typeof exports == "object" && exports && !exports.nodeType && exports, g = U && typeof module == "object" && module && !module.nodeType && module, St = g && g.exports === U, h = St && F.process, S = function() {
  try {
    var t = g && g.require && g.require("util").types;
    return t || h && h.binding && h.binding("util");
  } catch {
  }
}(), O = S && S.isTypedArray, Ot = O ? xt(O) : wt, Pt = Object.prototype, Mt = Pt.hasOwnProperty;
function $t(t, e) {
  var r = E(t), o = !r && K(t), c = !r && !o && X(t), f = !r && !o && !c && Ot(t), p = r || o || c || f, d = p ? Y(t.length, String) : [], L = d.length;
  for (var n in t)
    (e || Mt.call(t, n)) && !(p && // Safari 9 has enumerable `arguments.length` in strict mode.
    (n == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    c && (n == "offset" || n == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    f && (n == "buffer" || n == "byteLength" || n == "byteOffset") || // Skip index properties.
    W(n, L))) && d.push(n);
  return d;
}
function Ct(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var It = Ct(Object.keys, Object), Bt = Object.prototype, Et = Bt.hasOwnProperty;
function kt(t) {
  if (!H(t))
    return It(t);
  var e = [];
  for (var r in Object(t))
    Et.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
function zt(t) {
  return q(t) ? $t(t) : kt(t);
}
function Ut() {
  this.__data__ = new A(), this.size = 0;
}
function Lt(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
function Vt(t) {
  return this.__data__.get(t);
}
function Dt(t) {
  return this.__data__.has(t);
}
var Ft = 200;
function Gt(t, e) {
  var r = this.__data__;
  if (r instanceof A) {
    var o = r.__data__;
    if (!y || o.length < Ft - 1)
      return o.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new G(o);
  }
  return r.set(t, e), this.size = r.size, this;
}
function b(t) {
  var e = this.__data__ = new A(t);
  this.size = e.size;
}
b.prototype.clear = Ut;
b.prototype.delete = Lt;
b.prototype.get = Vt;
b.prototype.has = Dt;
b.prototype.set = Gt;
function Kt(t, e) {
  for (var r = -1, o = t == null ? 0 : t.length, c = 0, f = []; ++r < o; ) {
    var p = t[r];
    e(p, r, t) && (f[c++] = p);
  }
  return f;
}
function Rt() {
  return [];
}
var Wt = Object.prototype, qt = Wt.propertyIsEnumerable, P = Object.getOwnPropertySymbols, Nt = P ? function(t) {
  return t == null ? [] : (t = Object(t), Kt(P(t), function(e) {
    return qt.call(t, e);
  }));
} : Rt;
function Ht(t, e, r) {
  var o = e(t);
  return E(t) ? o : R(o, r(t));
}
function or(t) {
  return Ht(t, zt, Nt);
}
var j = l(i, "DataView"), v = l(i, "Promise"), m = l(i, "Set"), M = "[object Map]", Yt = "[object Object]", $ = "[object Promise]", C = "[object Set]", I = "[object WeakMap]", B = "[object DataView]", Zt = u(j), Jt = u(y), Qt = u(v), Xt = u(m), tr = u(T), s = _;
(j && s(new j(new ArrayBuffer(1))) != B || y && s(new y()) != M || v && s(v.resolve()) != $ || m && s(new m()) != C || T && s(new T()) != I) && (s = function(t) {
  var e = _(t), r = e == Yt ? t.constructor : void 0, o = r ? u(r) : "";
  if (o)
    switch (o) {
      case Zt:
        return B;
      case Jt:
        return M;
      case Qt:
        return $;
      case Xt:
        return C;
      case tr:
        return I;
    }
  return e;
});
var nr = i.Uint8Array;
export {
  b as S,
  nr as U,
  s as a,
  Ht as b,
  xt as c,
  or as d,
  q as e,
  Ot as f,
  Nt as g,
  H as h,
  X as i,
  $t as j,
  zt as k,
  S as n,
  Ct as o,
  Rt as s
};
