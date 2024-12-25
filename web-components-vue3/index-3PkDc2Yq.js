import { ae as y, a1 as z, a as f, aj as E, ac as N, B as Z, z as b, h as g } from "./base-KIYEtT4d.js";
import { ref as C, getCurrentInstance as x, inject as c, computed as p, unref as O } from "vue";
var l = function() {
  try {
    var e = y(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), K = 9007199254740991, P = /^(?:0|[1-9]\d*)$/;
function S(e, n) {
  var r = typeof e;
  return n = n ?? K, !!n && (r == "number" || r != "symbol" && P.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
function A(e, n, r) {
  n == "__proto__" && l ? l(e, n, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[n] = r;
}
var T = Object.prototype, X = T.hasOwnProperty;
function h(e, n, r) {
  var i = e[n];
  (!(X.call(e, n) && z(i, r)) || r === void 0 && !(n in e)) && A(e, n, r);
}
function j(e, n, r, i) {
  if (!f(e))
    return e;
  n = E(n, e);
  for (var t = -1, a = n.length, u = a - 1, o = e; o != null && ++t < a; ) {
    var s = N(n[t]), d = r;
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return e;
    if (t != u) {
      var I = o[s];
      d = void 0, d === void 0 && (d = f(I) ? I : S(n[t + 1]) ? [] : {});
    }
    h(o, s, d), o = o[s];
  }
  return e;
}
const v = {
  current: 0
}, m = C(0), D = 2e3, _ = Symbol("elZIndexContextKey"), F = Symbol("zIndexContextKey"), q = (e) => {
  const n = x() ? c(_, v) : v, r = e || (x() ? c(F, void 0) : void 0), i = p(() => {
    const u = O(r);
    return Z(u) ? u : D;
  }), t = p(() => i.value + m.value), a = () => (n.current++, m.value = n.current, t.value);
  return !b && !c(_) && g("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: i,
    currentZIndex: t,
    nextZIndex: a
  };
};
export {
  h as a,
  A as b,
  l as c,
  D as d,
  j as e,
  S as i,
  q as u,
  F as z
};
