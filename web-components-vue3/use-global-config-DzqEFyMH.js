import { ref as C, getCurrentInstance as d, inject as g, computed as a, unref as v, provide as x } from "vue";
import { u as y, U as I, h as b, W as z } from "./base-KIYEtT4d.js";
import { u as _, l as K } from "./index-BUVGpkNy.js";
import { u as S, d as G, z as N } from "./index-3PkDc2Yq.js";
import { S as O } from "./index-BDnm0u8X.js";
import { e as k } from "./index-BLf2zVtV.js";
import { k as f } from "./objects-BrwmqQVL.js";
const p = Symbol(), i = C();
function m(l, u = void 0) {
  const o = d() ? g(p, i) : i;
  return l ? a(() => {
    var t, n;
    return (n = (t = o.value) == null ? void 0 : t[l]) != null ? n : u;
  }) : o;
}
function L(l, u) {
  const o = m(), t = y(l, a(() => {
    var e;
    return ((e = o.value) == null ? void 0 : e.namespace) || I;
  })), n = _(a(() => {
    var e;
    return (e = o.value) == null ? void 0 : e.locale;
  })), s = S(a(() => {
    var e;
    return ((e = o.value) == null ? void 0 : e.zIndex) || G;
  })), r = a(() => {
    var e;
    return v(u) || ((e = o.value) == null ? void 0 : e.size) || "";
  });
  return E(a(() => v(o) || {})), {
    ns: t,
    locale: n,
    zIndex: s,
    size: r
  };
}
const E = (l, u, o = !1) => {
  var t;
  const n = !!d(), s = n ? m() : void 0, r = (t = void 0) != null ? t : n ? x : void 0;
  if (!r) {
    b("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const e = a(() => {
    const c = v(l);
    return s != null && s.value ? V(s.value, c) : c;
  });
  return r(p, e), r(K, a(() => e.value.locale)), r(z, a(() => e.value.namespace)), r(N, a(() => e.value.zIndex)), r(O, {
    size: a(() => e.value.size || "")
  }), r(k, a(() => ({
    emptyValues: e.value.emptyValues,
    valueOnClear: e.value.valueOnClear
  }))), (o || !i.value) && (i.value = e.value), e;
}, V = (l, u) => {
  const o = [.../* @__PURE__ */ new Set([...f(l), ...f(u)])], t = {};
  for (const n of o)
    t[n] = u[n] !== void 0 ? u[n] : l[n];
  return t;
};
export {
  m as a,
  E as p,
  L as u
};
