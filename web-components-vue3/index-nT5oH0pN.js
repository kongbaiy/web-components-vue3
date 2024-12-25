import { an as C, ao as A, ap as Q, al as b, aq as N, ar as R, z as L, H as T } from "./base-KIYEtT4d.js";
import { watch as y, ref as W } from "vue";
function v(e) {
  var r;
  const n = Q(e);
  return (r = n == null ? void 0 : n.$el) != null ? r : n;
}
const m = L ? window : void 0;
function _(...e) {
  let r, n, t, u;
  if (C(e[0]) || Array.isArray(e[0]) ? ([n, t, u] = e, r = m) : [r, n, t, u] = e, !r)
    return A;
  Array.isArray(n) || (n = [n]), Array.isArray(t) || (t = [t]);
  const p = [], a = () => {
    p.forEach((i) => i()), p.length = 0;
  }, l = (i, c, o, s) => (i.addEventListener(c, o, s), () => i.removeEventListener(c, o, s)), f = y(() => [v(r), Q(u)], ([i, c]) => {
    a(), i && p.push(...n.flatMap((o) => t.map((s) => l(i, o, s, c))));
  }, { immediate: !0, flush: "post" }), O = () => {
    f(), a();
  };
  return b(O), O;
}
let w = !1;
function J(e, r, n = {}) {
  const { window: t = m, ignore: u = [], capture: p = !0, detectIframe: a = !1 } = n;
  if (!t)
    return;
  T && !w && (w = !0, Array.from(t.document.body.children).forEach((o) => o.addEventListener("click", A)));
  let l = !0;
  const f = (o) => u.some((s) => {
    if (typeof s == "string")
      return Array.from(t.document.querySelectorAll(s)).some((d) => d === o.target || o.composedPath().includes(d));
    {
      const d = v(s);
      return d && (o.target === d || o.composedPath().includes(d));
    }
  }), i = [
    _(t, "click", (o) => {
      const s = v(e);
      if (!(!s || s === o.target || o.composedPath().includes(s))) {
        if (o.detail === 0 && (l = !f(o)), !l) {
          l = !0;
          return;
        }
        r(o);
      }
    }, { passive: !0, capture: p }),
    _(t, "pointerdown", (o) => {
      const s = v(e);
      s && (l = !o.composedPath().includes(s) && !f(o));
    }, { passive: !0 }),
    a && _(t, "blur", (o) => {
      var s;
      const d = v(e);
      ((s = t.document.activeElement) == null ? void 0 : s.tagName) === "IFRAME" && !(d != null && d.contains(t.document.activeElement)) && r(o);
    })
  ].filter(Boolean);
  return () => i.forEach((o) => o());
}
function $(e, r = !1) {
  const n = W(), t = () => n.value = !!e();
  return t(), N(t, r), n;
}
const I = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, h = "__vueuse_ssr_handlers__";
I[h] = I[h] || {};
var E = Object.getOwnPropertySymbols, x = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable, k = (e, r) => {
  var n = {};
  for (var t in e)
    x.call(e, t) && r.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && E)
    for (var t of E(e))
      r.indexOf(t) < 0 && M.call(e, t) && (n[t] = e[t]);
  return n;
};
function X(e, r, n = {}) {
  const t = n, { window: u = m } = t, p = k(t, ["window"]);
  let a;
  const l = $(() => u && "ResizeObserver" in u), f = () => {
    a && (a.disconnect(), a = void 0);
  }, O = y(() => v(e), (c) => {
    f(), l.value && u && c && (a = new ResizeObserver(r), a.observe(c, p));
  }, { immediate: !0, flush: "post" }), i = () => {
    f(), O();
  };
  return b(i), {
    isSupported: l,
    stop: i
  };
}
var g = Object.getOwnPropertySymbols, B = Object.prototype.hasOwnProperty, z = Object.prototype.propertyIsEnumerable, F = (e, r) => {
  var n = {};
  for (var t in e)
    B.call(e, t) && r.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && g)
    for (var t of g(e))
      r.indexOf(t) < 0 && z.call(e, t) && (n[t] = e[t]);
  return n;
};
function Y(e, r, n = {}) {
  const t = n, { window: u = m } = t, p = F(t, ["window"]);
  let a;
  const l = $(() => u && "MutationObserver" in u), f = () => {
    a && (a.disconnect(), a = void 0);
  }, O = y(() => v(e), (c) => {
    f(), l.value && u && c && (a = new MutationObserver(r), a.observe(c, p));
  }, { immediate: !0 }), i = () => {
    f(), O();
  };
  return b(i), {
    isSupported: l,
    stop: i
  };
}
var P;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(P || (P = {}));
var H = Object.defineProperty, S = Object.getOwnPropertySymbols, U = Object.prototype.hasOwnProperty, q = Object.prototype.propertyIsEnumerable, j = (e, r, n) => r in e ? H(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[r] = n, G = (e, r) => {
  for (var n in r || (r = {}))
    U.call(r, n) && j(e, n, r[n]);
  if (S)
    for (var n of S(r))
      q.call(r, n) && j(e, n, r[n]);
  return e;
};
const K = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
G({
  linear: R
}, K);
export {
  _ as a,
  Y as b,
  v as c,
  J as o,
  X as u
};
