import { a as Nt, a1 as tl, i as ll, a2 as dn, b as dt, a3 as cn, a4 as fn, z as Me, f as ct, B as ft, g as Qe, I as Ze, h as Ot, e as We, a5 as ht, x as vt, u as ae, _ as De, c as hn, d as vn, w as nl, l as Ft, a6 as Ie, t as pn, E as Mt, m as mn, a7 as gn, n as Je, R as bn, p as Ge, o as ze, q as ol, V as yn } from "./base-KIYEtT4d.js";
import "./el-tooltip-l0sNRNKZ.js";
import { s as Cn, o as wn, i as Sn, e as xn, b as al, p as En, E as sl } from "./el-popper-DdrJbju1.js";
import { E as rl } from "./el-scrollbar-CJq4fSjm.js";
import { inject as se, computed as F, getCurrentInstance as te, watch as ie, nextTick as Le, ref as E, toRaw as Vt, defineComponent as ue, useSlots as il, openBlock as z, createBlock as xe, resolveDynamicComponent as ul, unref as O, normalizeClass as P, withCtx as ge, createElementVNode as le, withDirectives as Re, createElementBlock as G, isRef as Ke, withModifiers as et, vModelCheckbox as tt, renderSlot as ye, Fragment as lt, createTextVNode as ot, toDisplayString as Ee, createCommentVNode as be, normalizeStyle as ke, provide as dl, toRefs as cl, createVNode as ve, render as It, resolveComponent as pe, resolveDirective as fl, renderList as zt, onBeforeMount as hl, onMounted as je, onUpdated as Rn, onUnmounted as Wt, h as H, watchEffect as Pe, vShow as Kt, Comment as Ln, onBeforeUnmount as kn, mergeProps as Nn } from "vue";
import On from "./zs-empty-CibRIAzs.js";
import { b as Fn, i as Mn, d as nt } from "./isEqual-BlxHAGZ7.js";
import { e as at, k as Wn, i as An, f as Tn, S as Hn } from "./_Uint8Array-BVqUBv36.js";
import { g as Dt, u as vl } from "./index-BUVGpkNy.js";
import { u as At, a as $e } from "./index-BDnm0u8X.js";
import { U as st } from "./event-ev457TAP.js";
import { c as $n, a as Tt, u as pt, b as pl } from "./use-form-item-8ASbR4xQ.js";
import { C as Pn } from "./index-BvVAGJky.js";
import { i as Bn, b as Vn } from "./index-3PkDc2Yq.js";
import { g as In, c as zn, k as ml, d as Kn, e as Dn, b as jn, i as Un } from "./_initCloneObject-DYJHGNti.js";
import { i as jt } from "./_arrayPush-Dte6x3sf.js";
import { a as Ut, u as Gt } from "./index-nT5oH0pN.js";
import { g as Gn } from "./objects-BrwmqQVL.js";
import { _ as Yn } from "./_plugin-vue_export-helper-CHgC5LLL.js";
function qn(e, t) {
  return Cn(wn(e, t, Sn), e + "");
}
function Xn(e, t, l) {
  if (!Nt(l))
    return !1;
  var n = typeof t;
  return (n == "number" ? at(l) && Bn(t, l.length) : n == "string" && t in l) ? tl(l[t], e) : !1;
}
function _n(e) {
  return qn(function(t, l) {
    var n = -1, s = l.length, r = s > 1 ? l[s - 1] : void 0, i = s > 2 ? l[2] : void 0;
    for (r = e.length > 3 && typeof r == "function" ? (s--, r) : void 0, i && Xn(l[0], l[1], i) && (r = s < 3 ? void 0 : r, s = 1), t = Object(t); ++n < s; ) {
      var o = l[n];
      o && e(t, o, n, r);
    }
    return t;
  });
}
var Qn = "[object Object]", Zn = Function.prototype, Jn = Object.prototype, gl = Zn.toString, eo = Jn.hasOwnProperty, to = gl.call(Object);
function lo(e) {
  if (!ll(e) || dn(e) != Qn)
    return !1;
  var t = In(e);
  if (t === null)
    return !0;
  var l = eo.call(t, "constructor") && t.constructor;
  return typeof l == "function" && l instanceof l && gl.call(l) == to;
}
function no(e) {
  return function(t, l, n) {
    for (var s = -1, r = Object(t), i = n(t), o = i.length; o--; ) {
      var a = i[++s];
      if (l(r[a], a, r) === !1)
        break;
    }
    return t;
  };
}
var bl = no();
function oo(e, t) {
  return e && bl(e, t, Wn);
}
function ao(e, t) {
  return function(l, n) {
    if (l == null)
      return l;
    if (!at(l))
      return e(l, n);
    for (var s = l.length, r = -1, i = Object(l); ++r < s && n(i[r], r, i) !== !1; )
      ;
    return l;
  };
}
var so = ao(oo);
function mt(e, t, l) {
  (l !== void 0 && !tl(e[t], l) || l === void 0 && !(t in e)) && Vn(e, t, l);
}
function ro(e) {
  return ll(e) && at(e);
}
function gt(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function io(e) {
  return zn(e, ml(e));
}
function uo(e, t, l, n, s, r, i) {
  var o = gt(e, l), a = gt(t, l), d = i.get(a);
  if (d) {
    mt(e, l, d);
    return;
  }
  var u = r ? r(o, a, l + "", e, t, i) : void 0, h = u === void 0;
  if (h) {
    var b = dt(a), S = !b && An(a), c = !b && !S && Tn(a);
    u = a, b || S || c ? dt(o) ? u = o : ro(o) ? u = Kn(o) : S ? (h = !1, u = Dn(a, !0)) : c ? (h = !1, u = jn(a, !0)) : u = [] : lo(a) || jt(a) ? (u = o, jt(o) ? u = io(o) : (!Nt(o) || cn(o)) && (u = Un(a))) : h = !1;
  }
  h && (i.set(a, u), s(u, a, n, r, i), i.delete(a)), mt(e, l, u);
}
function yl(e, t, l, n, s) {
  e !== t && bl(t, function(r, i) {
    if (s || (s = new Hn()), Nt(r))
      uo(e, t, i, l, yl, n, s);
    else {
      var o = n ? n(gt(e, i), r, i + "", e, t, s) : void 0;
      o === void 0 && (o = r), mt(e, i, o);
    }
  }, ml);
}
function co(e, t) {
  var l = -1, n = at(e) ? Array(e.length) : [];
  return so(e, function(s, r, i) {
    n[++l] = t(s, r, i);
  }), n;
}
function fo(e, t) {
  var l = dt(e) ? fn : co;
  return l(e, Fn(t));
}
function ho(e, t) {
  return xn(fo(e, t));
}
var vo = _n(function(e, t, l) {
  yl(e, t, l);
});
const po = (e) => Me ? window.requestAnimationFrame(e) : setTimeout(e, 16);
var Yt = !1, Ne, bt, yt, Ye, qe, Cl, Xe, Ct, wt, St, wl, xt, Et, Sl, xl;
function oe() {
  if (!Yt) {
    Yt = !0;
    var e = navigator.userAgent, t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), l = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (xt = /\b(iPhone|iP[ao]d)/.exec(e), Et = /\b(iP[ao]d)/.exec(e), St = /Android/i.exec(e), Sl = /FBAN\/\w+;/i.exec(e), xl = /Mobile/i.exec(e), wl = !!/Win64/.exec(e), t) {
      Ne = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN, Ne && document && document.documentMode && (Ne = document.documentMode);
      var n = /(?:Trident\/(\d+.\d+))/.exec(e);
      Cl = n ? parseFloat(n[1]) + 4 : Ne, bt = t[2] ? parseFloat(t[2]) : NaN, yt = t[3] ? parseFloat(t[3]) : NaN, Ye = t[4] ? parseFloat(t[4]) : NaN, Ye ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), qe = t && t[1] ? parseFloat(t[1]) : NaN) : qe = NaN;
    } else Ne = bt = yt = qe = Ye = NaN;
    if (l) {
      if (l[1]) {
        var s = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        Xe = s ? parseFloat(s[1].replace("_", ".")) : !0;
      } else Xe = !1;
      Ct = !!l[2], wt = !!l[3];
    } else Xe = Ct = wt = !1;
  }
}
var Rt = { ie: function() {
  return oe() || Ne;
}, ieCompatibilityMode: function() {
  return oe() || Cl > Ne;
}, ie64: function() {
  return Rt.ie() && wl;
}, firefox: function() {
  return oe() || bt;
}, opera: function() {
  return oe() || yt;
}, webkit: function() {
  return oe() || Ye;
}, safari: function() {
  return Rt.webkit();
}, chrome: function() {
  return oe() || qe;
}, windows: function() {
  return oe() || Ct;
}, osx: function() {
  return oe() || Xe;
}, linux: function() {
  return oe() || wt;
}, iphone: function() {
  return oe() || xt;
}, mobile: function() {
  return oe() || xt || Et || St || xl;
}, nativeApp: function() {
  return oe() || Sl;
}, android: function() {
  return oe() || St;
}, ipad: function() {
  return oe() || Et;
} }, mo = Rt, Ue = !!(typeof window < "u" && window.document && window.document.createElement), go = { canUseDOM: Ue, canUseWorkers: typeof Worker < "u", canUseEventListeners: Ue && !!(window.addEventListener || window.attachEvent), canUseViewport: Ue && !!window.screen, isInWorker: !Ue }, El = go, Rl;
El.canUseDOM && (Rl = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);
function bo(e, t) {
  if (!El.canUseDOM || t && !("addEventListener" in document)) return !1;
  var l = "on" + e, n = l in document;
  if (!n) {
    var s = document.createElement("div");
    s.setAttribute(l, "return;"), n = typeof s[l] == "function";
  }
  return !n && Rl && e === "wheel" && (n = document.implementation.hasFeature("Events.wheel", "3.0")), n;
}
var yo = bo, qt = 10, Xt = 40, _t = 800;
function Ll(e) {
  var t = 0, l = 0, n = 0, s = 0;
  return "detail" in e && (l = e.detail), "wheelDelta" in e && (l = -e.wheelDelta / 120), "wheelDeltaY" in e && (l = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = l, l = 0), n = t * qt, s = l * qt, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || s) && e.deltaMode && (e.deltaMode == 1 ? (n *= Xt, s *= Xt) : (n *= _t, s *= _t)), n && !t && (t = n < 1 ? -1 : 1), s && !l && (l = s < 1 ? -1 : 1), { spinX: t, spinY: l, pixelX: n, pixelY: s };
}
Ll.getEventType = function() {
  return mo.firefox() ? "DOMMouseScroll" : yo("wheel") ? "wheel" : "mousewheel";
};
var Co = Ll;
/**
* Checks if an event is supported in the current execution environment.
*
* NOTE: This will not work correctly for non-generic events such as `change`,
* `reset`, `load`, `error`, and `select`.
*
* Borrows from Modernizr.
*
* @param {string} eventNameSuffix Event name, e.g. "click".
* @param {?boolean} capture Check if the capture phase is supported.
* @return {boolean} True if the event is supported.
* @internal
* @license Modernizr 3.0.0pre (Custom Build) | MIT
*/
const wo = function(e, t) {
  if (e && e.addEventListener) {
    const l = function(n) {
      const s = Co(n);
      t && Reflect.apply(t, this, [n, s]);
    };
    e.addEventListener("wheel", l, { passive: !0 });
  }
}, So = {
  beforeMount(e, t) {
    wo(e, t.value);
  }
}, kl = {
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  label: {
    type: [String, Boolean, Number, Object],
    default: void 0
  },
  value: {
    type: [String, Boolean, Number, Object],
    default: void 0
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueValue: {
    type: [String, Number],
    default: void 0
  },
  falseValue: {
    type: [String, Number],
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  controls: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: At,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  },
  ...al(["ariaControls"])
}, Nl = {
  [st]: (e) => ct(e) || ft(e) || Qe(e),
  change: (e) => ct(e) || ft(e) || Qe(e)
}, He = Symbol("checkboxGroupContextKey"), xo = ({
  model: e,
  isChecked: t
}) => {
  const l = se(He, void 0), n = F(() => {
    var r, i;
    const o = (r = l == null ? void 0 : l.max) == null ? void 0 : r.value, a = (i = l == null ? void 0 : l.min) == null ? void 0 : i.value;
    return !Ze(o) && e.value.length >= o && !t.value || !Ze(a) && e.value.length <= a && t.value;
  });
  return {
    isDisabled: $n(F(() => (l == null ? void 0 : l.disabled.value) || n.value)),
    isLimitDisabled: n
  };
}, Eo = (e, {
  model: t,
  isLimitExceeded: l,
  hasOwnLabel: n,
  isDisabled: s,
  isLabeledByFormItem: r
}) => {
  const i = se(He, void 0), { formItem: o } = Tt(), { emit: a } = te();
  function d(c) {
    var p, y, m, v;
    return [!0, e.trueValue, e.trueLabel].includes(c) ? (y = (p = e.trueValue) != null ? p : e.trueLabel) != null ? y : !0 : (v = (m = e.falseValue) != null ? m : e.falseLabel) != null ? v : !1;
  }
  function u(c, p) {
    a("change", d(c), p);
  }
  function h(c) {
    if (l.value)
      return;
    const p = c.target;
    a("change", d(p.checked), c);
  }
  async function b(c) {
    l.value || !n.value && !s.value && r.value && (c.composedPath().some((m) => m.tagName === "LABEL") || (t.value = d([!1, e.falseValue, e.falseLabel].includes(t.value)), await Le(), u(t.value, c)));
  }
  const S = F(() => (i == null ? void 0 : i.validateEvent) || e.validateEvent);
  return ie(() => e.modelValue, () => {
    S.value && (o == null || o.validate("change").catch((c) => Ot(c)));
  }), {
    handleChange: h,
    onClickRoot: b
  };
}, Ro = (e) => {
  const t = E(!1), { emit: l } = te(), n = se(He, void 0), s = F(() => Ze(n) === !1), r = E(!1), i = F({
    get() {
      var o, a;
      return s.value ? (o = n == null ? void 0 : n.modelValue) == null ? void 0 : o.value : (a = e.modelValue) != null ? a : t.value;
    },
    set(o) {
      var a, d;
      s.value && We(o) ? (r.value = ((a = n == null ? void 0 : n.max) == null ? void 0 : a.value) !== void 0 && o.length > (n == null ? void 0 : n.max.value) && o.length > i.value.length, r.value === !1 && ((d = n == null ? void 0 : n.changeEvent) == null || d.call(n, o))) : (l(st, o), t.value = o);
    }
  });
  return {
    model: i,
    isGroup: s,
    isLimitExceeded: r
  };
}, Lo = (e, t, { model: l }) => {
  const n = se(He, void 0), s = E(!1), r = F(() => ht(e.value) ? e.label : e.value), i = F(() => {
    const u = l.value;
    return Qe(u) ? u : We(u) ? vt(r.value) ? u.map(Vt).some((h) => Mn(h, r.value)) : u.map(Vt).includes(r.value) : u != null ? u === e.trueValue || u === e.trueLabel : !!u;
  }), o = pt(F(() => {
    var u;
    return (u = n == null ? void 0 : n.size) == null ? void 0 : u.value;
  }), {
    prop: !0
  }), a = pt(F(() => {
    var u;
    return (u = n == null ? void 0 : n.size) == null ? void 0 : u.value;
  })), d = F(() => !!t.default || !ht(r.value));
  return {
    checkboxButtonSize: o,
    isChecked: i,
    isFocused: s,
    checkboxSize: a,
    hasOwnLabel: d,
    actualValue: r
  };
}, Ol = (e, t) => {
  const { formItem: l } = Tt(), { model: n, isGroup: s, isLimitExceeded: r } = Ro(e), {
    isFocused: i,
    isChecked: o,
    checkboxButtonSize: a,
    checkboxSize: d,
    hasOwnLabel: u,
    actualValue: h
  } = Lo(e, t, { model: n }), { isDisabled: b } = xo({ model: n, isChecked: o }), { inputId: S, isLabeledByFormItem: c } = pl(e, {
    formItemContext: l,
    disableIdGeneration: u,
    disableIdManagement: s
  }), { handleChange: p, onClickRoot: y } = Eo(e, {
    model: n,
    isLimitExceeded: r,
    hasOwnLabel: u,
    isDisabled: b,
    isLabeledByFormItem: c
  });
  return (() => {
    function v() {
      var C, f;
      We(n.value) && !n.value.includes(h.value) ? n.value.push(h.value) : n.value = (f = (C = e.trueValue) != null ? C : e.trueLabel) != null ? f : !0;
    }
    e.checked && v();
  })(), $e({
    from: "controls",
    replacement: "aria-controls",
    version: "2.8.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, F(() => !!e.controls)), $e({
    from: "label act as value",
    replacement: "value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, F(() => s.value && ht(e.value))), $e({
    from: "true-label",
    replacement: "true-value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, F(() => !!e.trueLabel)), $e({
    from: "false-label",
    replacement: "false-value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, F(() => !!e.falseLabel)), {
    inputId: S,
    isLabeledByFormItem: c,
    isChecked: o,
    isDisabled: b,
    isFocused: i,
    checkboxButtonSize: a,
    checkboxSize: d,
    hasOwnLabel: u,
    model: n,
    actualValue: h,
    handleChange: p,
    onClickRoot: y
  };
}, ko = ["id", "indeterminate", "name", "tabindex", "disabled", "true-value", "false-value"], No = ["id", "indeterminate", "disabled", "value", "name", "tabindex"], Oo = ue({
  name: "ElCheckbox"
}), Fo = /* @__PURE__ */ ue({
  ...Oo,
  props: kl,
  emits: Nl,
  setup(e) {
    const t = e, l = il(), {
      inputId: n,
      isLabeledByFormItem: s,
      isChecked: r,
      isDisabled: i,
      isFocused: o,
      checkboxSize: a,
      hasOwnLabel: d,
      model: u,
      actualValue: h,
      handleChange: b,
      onClickRoot: S
    } = Ol(t, l), c = ae("checkbox"), p = F(() => [
      c.b(),
      c.m(a.value),
      c.is("disabled", i.value),
      c.is("bordered", t.border),
      c.is("checked", r.value)
    ]), y = F(() => [
      c.e("input"),
      c.is("disabled", i.value),
      c.is("checked", r.value),
      c.is("indeterminate", t.indeterminate),
      c.is("focus", o.value)
    ]);
    return (m, v) => (z(), xe(ul(!O(d) && O(s) ? "span" : "label"), {
      class: P(O(p)),
      "aria-controls": m.indeterminate ? m.controls || m.ariaControls : null,
      onClick: O(S)
    }, {
      default: ge(() => {
        var C, f;
        return [
          le("span", {
            class: P(O(y))
          }, [
            m.trueValue || m.falseValue || m.trueLabel || m.falseLabel ? Re((z(), G("input", {
              key: 0,
              id: O(n),
              "onUpdate:modelValue": v[0] || (v[0] = (g) => Ke(u) ? u.value = g : null),
              class: P(O(c).e("original")),
              type: "checkbox",
              indeterminate: m.indeterminate,
              name: m.name,
              tabindex: m.tabindex,
              disabled: O(i),
              "true-value": (C = m.trueValue) != null ? C : m.trueLabel,
              "false-value": (f = m.falseValue) != null ? f : m.falseLabel,
              onChange: v[1] || (v[1] = (...g) => O(b) && O(b)(...g)),
              onFocus: v[2] || (v[2] = (g) => o.value = !0),
              onBlur: v[3] || (v[3] = (g) => o.value = !1),
              onClick: v[4] || (v[4] = et(() => {
              }, ["stop"]))
            }, null, 42, ko)), [
              [tt, O(u)]
            ]) : Re((z(), G("input", {
              key: 1,
              id: O(n),
              "onUpdate:modelValue": v[5] || (v[5] = (g) => Ke(u) ? u.value = g : null),
              class: P(O(c).e("original")),
              type: "checkbox",
              indeterminate: m.indeterminate,
              disabled: O(i),
              value: O(h),
              name: m.name,
              tabindex: m.tabindex,
              onChange: v[6] || (v[6] = (...g) => O(b) && O(b)(...g)),
              onFocus: v[7] || (v[7] = (g) => o.value = !0),
              onBlur: v[8] || (v[8] = (g) => o.value = !1),
              onClick: v[9] || (v[9] = et(() => {
              }, ["stop"]))
            }, null, 42, No)), [
              [tt, O(u)]
            ]),
            le("span", {
              class: P(O(c).e("inner"))
            }, null, 2)
          ], 2),
          O(d) ? (z(), G("span", {
            key: 0,
            class: P(O(c).e("label"))
          }, [
            ye(m.$slots, "default"),
            m.$slots.default ? be("v-if", !0) : (z(), G(lt, { key: 0 }, [
              ot(Ee(m.label), 1)
            ], 64))
          ], 2)) : be("v-if", !0)
        ];
      }),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var Mo = /* @__PURE__ */ De(Fo, [["__file", "checkbox.vue"]]);
const Wo = ["name", "tabindex", "disabled", "true-value", "false-value"], Ao = ["name", "tabindex", "disabled", "value"], To = ue({
  name: "ElCheckboxButton"
}), Ho = /* @__PURE__ */ ue({
  ...To,
  props: kl,
  emits: Nl,
  setup(e) {
    const t = e, l = il(), {
      isFocused: n,
      isChecked: s,
      isDisabled: r,
      checkboxButtonSize: i,
      model: o,
      actualValue: a,
      handleChange: d
    } = Ol(t, l), u = se(He, void 0), h = ae("checkbox"), b = F(() => {
      var c, p, y, m;
      const v = (p = (c = u == null ? void 0 : u.fill) == null ? void 0 : c.value) != null ? p : "";
      return {
        backgroundColor: v,
        borderColor: v,
        color: (m = (y = u == null ? void 0 : u.textColor) == null ? void 0 : y.value) != null ? m : "",
        boxShadow: v ? `-1px 0 0 0 ${v}` : void 0
      };
    }), S = F(() => [
      h.b("button"),
      h.bm("button", i.value),
      h.is("disabled", r.value),
      h.is("checked", s.value),
      h.is("focus", n.value)
    ]);
    return (c, p) => {
      var y, m;
      return z(), G("label", {
        class: P(O(S))
      }, [
        c.trueValue || c.falseValue || c.trueLabel || c.falseLabel ? Re((z(), G("input", {
          key: 0,
          "onUpdate:modelValue": p[0] || (p[0] = (v) => Ke(o) ? o.value = v : null),
          class: P(O(h).be("button", "original")),
          type: "checkbox",
          name: c.name,
          tabindex: c.tabindex,
          disabled: O(r),
          "true-value": (y = c.trueValue) != null ? y : c.trueLabel,
          "false-value": (m = c.falseValue) != null ? m : c.falseLabel,
          onChange: p[1] || (p[1] = (...v) => O(d) && O(d)(...v)),
          onFocus: p[2] || (p[2] = (v) => n.value = !0),
          onBlur: p[3] || (p[3] = (v) => n.value = !1),
          onClick: p[4] || (p[4] = et(() => {
          }, ["stop"]))
        }, null, 42, Wo)), [
          [tt, O(o)]
        ]) : Re((z(), G("input", {
          key: 1,
          "onUpdate:modelValue": p[5] || (p[5] = (v) => Ke(o) ? o.value = v : null),
          class: P(O(h).be("button", "original")),
          type: "checkbox",
          name: c.name,
          tabindex: c.tabindex,
          disabled: O(r),
          value: O(a),
          onChange: p[6] || (p[6] = (...v) => O(d) && O(d)(...v)),
          onFocus: p[7] || (p[7] = (v) => n.value = !0),
          onBlur: p[8] || (p[8] = (v) => n.value = !1),
          onClick: p[9] || (p[9] = et(() => {
          }, ["stop"]))
        }, null, 42, Ao)), [
          [tt, O(o)]
        ]),
        c.$slots.default || c.label ? (z(), G("span", {
          key: 2,
          class: P(O(h).be("button", "inner")),
          style: ke(O(s) ? O(b) : void 0)
        }, [
          ye(c.$slots, "default", {}, () => [
            ot(Ee(c.label), 1)
          ])
        ], 6)) : be("v-if", !0)
      ], 2);
    };
  }
});
var Fl = /* @__PURE__ */ De(Ho, [["__file", "checkbox-button.vue"]]);
const $o = hn({
  modelValue: {
    type: vn(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: At,
  label: String,
  fill: String,
  textColor: String,
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  ...al(["ariaLabel"])
}), Po = {
  [st]: (e) => We(e),
  change: (e) => We(e)
}, Bo = ue({
  name: "ElCheckboxGroup"
}), Vo = /* @__PURE__ */ ue({
  ...Bo,
  props: $o,
  emits: Po,
  setup(e, { emit: t }) {
    const l = e, n = ae("checkbox"), { formItem: s } = Tt(), { inputId: r, isLabeledByFormItem: i } = pl(l, {
      formItemContext: s
    }), o = async (d) => {
      t(st, d), await Le(), t("change", d);
    }, a = F({
      get() {
        return l.modelValue;
      },
      set(d) {
        o(d);
      }
    });
    return dl(He, {
      ...En(cl(l), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue: a,
      changeEvent: o
    }), $e({
      from: "label",
      replacement: "aria-label",
      version: "2.8.0",
      scope: "el-checkbox-group",
      ref: "https://element-plus.org/en-US/component/checkbox.html"
    }, F(() => !!l.label)), ie(() => l.modelValue, () => {
      l.validateEvent && (s == null || s.validate("change").catch((d) => Ot(d)));
    }), (d, u) => {
      var h;
      return z(), xe(ul(d.tag), {
        id: O(r),
        class: P(O(n).b("group")),
        role: "group",
        "aria-label": O(i) ? void 0 : d.label || d.ariaLabel || "checkbox-group",
        "aria-labelledby": O(i) ? (h = O(s)) == null ? void 0 : h.labelId : void 0
      }, {
        default: ge(() => [
          ye(d.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var Ml = /* @__PURE__ */ De(Vo, [["__file", "checkbox-group.vue"]]);
const Ae = nl(Mo, {
  CheckboxButton: Fl,
  CheckboxGroup: Ml
});
Ft(Fl);
Ft(Ml);
const it = function(e) {
  var t;
  return (t = e.target) == null ? void 0 : t.closest("td");
}, Io = function(e, t, l, n, s) {
  if (!t && !n && (!s || Array.isArray(s) && !s.length))
    return e;
  typeof l == "string" ? l = l === "descending" ? -1 : 1 : l = l && l < 0 ? -1 : 1;
  const r = n ? null : function(o, a) {
    return s ? (Array.isArray(s) || (s = [s]), s.map((d) => typeof d == "string" ? Dt(o, d) : d(o, a, e))) : (t !== "$key" && vt(o) && "$value" in o && (o = o.$value), [vt(o) ? Dt(o, t) : o]);
  }, i = function(o, a) {
    if (n)
      return n(o.value, a.value);
    for (let d = 0, u = o.key.length; d < u; d++) {
      if (o.key[d] < a.key[d])
        return -1;
      if (o.key[d] > a.key[d])
        return 1;
    }
    return 0;
  };
  return e.map((o, a) => ({
    value: o,
    index: a,
    key: r ? r(o, a) : null
  })).sort((o, a) => {
    let d = i(o, a);
    return d || (d = o.index - a.index), d * +l;
  }).map((o) => o.value);
}, Wl = function(e, t) {
  let l = null;
  return e.columns.forEach((n) => {
    n.id === t && (l = n);
  }), l;
}, zo = function(e, t) {
  let l = null;
  for (let n = 0; n < e.columns.length; n++) {
    const s = e.columns[n];
    if (s.columnKey === t) {
      l = s;
      break;
    }
  }
  return l || pn("ElTable", `No column matching with column-key: ${t}`), l;
}, Qt = function(e, t, l) {
  const n = (t.className || "").match(new RegExp(`${l}-table_[^\\s]+`, "gm"));
  return n ? Wl(e, n[0]) : null;
}, Z = (e, t) => {
  if (!e)
    throw new Error("Row is required when get row identity");
  if (typeof t == "string") {
    if (!t.includes("."))
      return `${e[t]}`;
    const l = t.split(".");
    let n = e;
    for (const s of l)
      n = n[s];
    return `${n}`;
  } else if (typeof t == "function")
    return t.call(null, e);
}, Oe = function(e, t) {
  const l = {};
  return (e || []).forEach((n, s) => {
    l[Z(n, t)] = { row: n, index: s };
  }), l;
};
function Ko(e, t) {
  const l = {};
  let n;
  for (n in e)
    l[n] = e[n];
  for (n in t)
    if (Ie(t, n)) {
      const s = t[n];
      typeof s < "u" && (l[n] = s);
    }
  return l;
}
function Ht(e) {
  return e === "" || e !== void 0 && (e = Number.parseInt(e, 10), Number.isNaN(e) && (e = "")), e;
}
function Al(e) {
  return e === "" || e !== void 0 && (e = Ht(e), Number.isNaN(e) && (e = 80)), e;
}
function Do(e) {
  return typeof e == "number" ? e : typeof e == "string" ? /^\d+(?:px)?$/.test(e) ? Number.parseInt(e, 10) : e : null;
}
function jo(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, l) => (...n) => t(l(...n)));
}
function Be(e, t, l) {
  let n = !1;
  const s = e.indexOf(t), r = s !== -1, i = (o) => {
    o === "add" ? e.push(t) : e.splice(s, 1), n = !0, We(t.children) && t.children.forEach((a) => {
      Be(e, a, l ?? !r);
    });
  };
  return Qe(l) ? l && !r ? i("add") : !l && r && i("remove") : i(r ? "remove" : "add"), n;
}
function Uo(e, t, l = "children", n = "hasChildren") {
  const s = (i) => !(Array.isArray(i) && i.length);
  function r(i, o, a) {
    t(i, o, a), o.forEach((d) => {
      if (d[n]) {
        t(d, null, a + 1);
        return;
      }
      const u = d[l];
      s(u) || r(d, u, a + 1);
    });
  }
  e.forEach((i) => {
    if (i[n]) {
      t(i, null, 0);
      return;
    }
    const o = i[l];
    s(o) || r(i, o, 0);
  });
}
let he = null;
function Go(e, t, l, n) {
  if ((he == null ? void 0 : he.trigger) === l)
    return;
  he == null || he();
  const s = n == null ? void 0 : n.refs.tableWrapper, r = s == null ? void 0 : s.dataset.prefix, i = {
    strategy: "fixed",
    ...e.popperOptions
  }, o = ve(sl, {
    content: t,
    virtualTriggering: !0,
    virtualRef: l,
    appendTo: s,
    placement: "top",
    transition: "none",
    offset: 0,
    hideAfter: 0,
    ...e,
    popperOptions: i,
    onHide: () => {
      he == null || he();
    }
  });
  o.appContext = { ...n.appContext, ...n };
  const a = document.createElement("div");
  It(o, a), o.component.exposed.onOpen();
  const d = s == null ? void 0 : s.querySelector(`.${r}-scrollbar__wrap`);
  he = () => {
    It(null, a), d == null || d.removeEventListener("scroll", he), he = null;
  }, he.trigger = l, d == null || d.addEventListener("scroll", he);
}
function Tl(e) {
  return e.children ? ho(e.children, Tl) : [e];
}
function Zt(e, t) {
  return e + t.colSpan;
}
const Hl = (e, t, l, n) => {
  let s = 0, r = e;
  const i = l.states.columns.value;
  if (n) {
    const a = Tl(n[e]);
    s = i.slice(0, i.indexOf(a[0])).reduce(Zt, 0), r = s + a.reduce(Zt, 0) - 1;
  } else
    s = e;
  let o;
  switch (t) {
    case "left":
      r < l.states.fixedLeafColumnsLength.value && (o = "left");
      break;
    case "right":
      s >= i.length - l.states.rightFixedLeafColumnsLength.value && (o = "right");
      break;
    default:
      r < l.states.fixedLeafColumnsLength.value ? o = "left" : s >= i.length - l.states.rightFixedLeafColumnsLength.value && (o = "right");
  }
  return o ? {
    direction: o,
    start: s,
    after: r
  } : {};
}, $t = (e, t, l, n, s, r = 0) => {
  const i = [], { direction: o, start: a, after: d } = Hl(t, l, n, s);
  if (o) {
    const u = o === "left";
    i.push(`${e}-fixed-column--${o}`), u && d + r === n.states.fixedLeafColumnsLength.value - 1 ? i.push("is-last-column") : !u && a - r === n.states.columns.value.length - n.states.rightFixedLeafColumnsLength.value && i.push("is-first-column");
  }
  return i;
};
function Jt(e, t) {
  return e + (t.realWidth === null || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth);
}
const Pt = (e, t, l, n) => {
  const {
    direction: s,
    start: r = 0,
    after: i = 0
  } = Hl(e, t, l, n);
  if (!s)
    return;
  const o = {}, a = s === "left", d = l.states.columns.value;
  return a ? o.left = d.slice(0, r).reduce(Jt, 0) : o.right = d.slice(i + 1).reverse().reduce(Jt, 0), o;
}, Te = (e, t) => {
  e && (Number.isNaN(e[t]) || (e[t] = `${e[t]}px`));
};
function Yo(e) {
  const t = te(), l = E(!1), n = E([]);
  return {
    updateExpandRows: () => {
      const a = e.data.value || [], d = e.rowKey.value;
      if (l.value)
        n.value = a.slice();
      else if (d) {
        const u = Oe(n.value, d);
        n.value = a.reduce((h, b) => {
          const S = Z(b, d);
          return u[S] && h.push(b), h;
        }, []);
      } else
        n.value = [];
    },
    toggleRowExpansion: (a, d) => {
      Be(n.value, a, d) && t.emit("expand-change", a, n.value.slice());
    },
    setExpandRowKeys: (a) => {
      t.store.assertRowKey();
      const d = e.data.value || [], u = e.rowKey.value, h = Oe(d, u);
      n.value = a.reduce((b, S) => {
        const c = h[S];
        return c && b.push(c.row), b;
      }, []);
    },
    isRowExpanded: (a) => {
      const d = e.rowKey.value;
      return d ? !!Oe(n.value, d)[Z(a, d)] : n.value.includes(a);
    },
    states: {
      expandRows: n,
      defaultExpandAll: l
    }
  };
}
function qo(e) {
  const t = te(), l = E(null), n = E(null), s = (d) => {
    t.store.assertRowKey(), l.value = d, i(d);
  }, r = () => {
    l.value = null;
  }, i = (d) => {
    const { data: u, rowKey: h } = e;
    let b = null;
    h.value && (b = (O(u) || []).find((S) => Z(S, h.value) === d)), n.value = b, t.emit("current-change", n.value, null);
  };
  return {
    setCurrentRowKey: s,
    restoreCurrentRowKey: r,
    setCurrentRowByKey: i,
    updateCurrentRow: (d) => {
      const u = n.value;
      if (d && d !== u) {
        n.value = d, t.emit("current-change", n.value, u);
        return;
      }
      !d && u && (n.value = null, t.emit("current-change", null, u));
    },
    updateCurrentRowData: () => {
      const d = e.rowKey.value, u = e.data.value || [], h = n.value;
      if (!u.includes(h) && h) {
        if (d) {
          const b = Z(h, d);
          i(b);
        } else
          n.value = null;
        n.value === null && t.emit("current-change", null, h);
      } else l.value && (i(l.value), r());
    },
    states: {
      _currentRowKey: l,
      currentRow: n
    }
  };
}
function Xo(e) {
  const t = E([]), l = E({}), n = E(16), s = E(!1), r = E({}), i = E("hasChildren"), o = E("children"), a = te(), d = F(() => {
    if (!e.rowKey.value)
      return {};
    const m = e.data.value || [];
    return h(m);
  }), u = F(() => {
    const m = e.rowKey.value, v = Object.keys(r.value), C = {};
    return v.length && v.forEach((f) => {
      if (r.value[f].length) {
        const g = { children: [] };
        r.value[f].forEach((R) => {
          const x = Z(R, m);
          g.children.push(x), R[i.value] && !C[x] && (C[x] = { children: [] });
        }), C[f] = g;
      }
    }), C;
  }), h = (m) => {
    const v = e.rowKey.value, C = {};
    return Uo(m, (f, g, R) => {
      const x = Z(f, v);
      Array.isArray(g) ? C[x] = {
        children: g.map((k) => Z(k, v)),
        level: R
      } : s.value && (C[x] = {
        children: [],
        lazy: !0,
        level: R
      });
    }, o.value, i.value), C;
  }, b = (m = !1, v = ((C) => (C = a.store) == null ? void 0 : C.states.defaultExpandAll.value)()) => {
    var C;
    const f = d.value, g = u.value, R = Object.keys(f), x = {};
    if (R.length) {
      const k = O(l), M = [], I = (W, K) => {
        if (m)
          return t.value ? v || t.value.includes(K) : !!(v || W != null && W.expanded);
        {
          const j = v || t.value && t.value.includes(K);
          return !!(W != null && W.expanded || j);
        }
      };
      R.forEach((W) => {
        const K = k[W], j = { ...f[W] };
        if (j.expanded = I(K, W), j.lazy) {
          const { loaded: X = !1, loading: _ = !1 } = K || {};
          j.loaded = !!X, j.loading = !!_, M.push(W);
        }
        x[W] = j;
      });
      const V = Object.keys(g);
      s.value && V.length && M.length && V.forEach((W) => {
        const K = k[W], j = g[W].children;
        if (M.includes(W)) {
          if (x[W].children.length !== 0)
            throw new Error("[ElTable]children must be an empty array.");
          x[W].children = j;
        } else {
          const { loaded: X = !1, loading: _ = !1 } = K || {};
          x[W] = {
            lazy: !0,
            loaded: !!X,
            loading: !!_,
            expanded: I(K, W),
            children: j,
            level: ""
          };
        }
      });
    }
    l.value = x, (C = a.store) == null || C.updateTableScrollY();
  };
  ie(() => t.value, () => {
    b(!0);
  }), ie(() => d.value, () => {
    b();
  }), ie(() => u.value, () => {
    b();
  });
  const S = (m) => {
    t.value = m, b();
  }, c = (m, v) => {
    a.store.assertRowKey();
    const C = e.rowKey.value, f = Z(m, C), g = f && l.value[f];
    if (f && g && "expanded" in g) {
      const R = g.expanded;
      v = typeof v > "u" ? !g.expanded : v, l.value[f].expanded = v, R !== v && a.emit("expand-change", m, v), a.store.updateTableScrollY();
    }
  }, p = (m) => {
    a.store.assertRowKey();
    const v = e.rowKey.value, C = Z(m, v), f = l.value[C];
    s.value && f && "loaded" in f && !f.loaded ? y(m, C, f) : c(m, void 0);
  }, y = (m, v, C) => {
    const { load: f } = a.props;
    f && !l.value[v].loaded && (l.value[v].loading = !0, f(m, C, (g) => {
      if (!Array.isArray(g))
        throw new TypeError("[ElTable] data must be an array");
      l.value[v].loading = !1, l.value[v].loaded = !0, l.value[v].expanded = !0, g.length && (r.value[v] = g), a.emit("expand-change", m, !0);
    }));
  };
  return {
    loadData: y,
    loadOrToggle: p,
    toggleTreeExpansion: c,
    updateTreeExpandKeys: S,
    updateTreeData: b,
    normalize: h,
    states: {
      expandRowKeys: t,
      treeData: l,
      indent: n,
      lazy: s,
      lazyTreeNodeMap: r,
      lazyColumnIdentifier: i,
      childrenColumnName: o
    }
  };
}
const _o = (e, t) => {
  const l = t.sortingColumn;
  return !l || typeof l.sortable == "string" ? e : Io(e, t.sortProp, t.sortOrder, l.sortMethod, l.sortBy);
}, _e = (e) => {
  const t = [];
  return e.forEach((l) => {
    l.children && l.children.length > 0 ? t.push.apply(t, _e(l.children)) : t.push(l);
  }), t;
};
function Qo() {
  var e;
  const t = te(), { size: l } = cl((e = t.proxy) == null ? void 0 : e.$props), n = E(null), s = E([]), r = E([]), i = E(!1), o = E([]), a = E([]), d = E([]), u = E([]), h = E([]), b = E([]), S = E([]), c = E([]), p = [], y = E(0), m = E(0), v = E(0), C = E(!1), f = E([]), g = E(!1), R = E(!1), x = E(null), k = E({}), M = E(null), I = E(null), V = E(null), W = E(null), K = E(null);
  ie(s, () => t.state && de(!1), {
    deep: !0
  });
  const j = () => {
    if (!n.value)
      throw new Error("[ElTable] prop row-key is required");
  }, X = (N) => {
    var A;
    (A = N.children) == null || A.forEach(($) => {
      $.fixed = N.fixed, X($);
    });
  }, _ = () => {
    o.value.forEach((D) => {
      X(D);
    }), u.value = o.value.filter((D) => D.fixed === !0 || D.fixed === "left"), h.value = o.value.filter((D) => D.fixed === "right"), u.value.length > 0 && o.value[0] && o.value[0].type === "selection" && !o.value[0].fixed && (o.value[0].fixed = !0, u.value.unshift(o.value[0]));
    const N = o.value.filter((D) => !D.fixed);
    a.value = [].concat(u.value).concat(N).concat(h.value);
    const A = _e(N), $ = _e(u.value), T = _e(h.value);
    y.value = A.length, m.value = $.length, v.value = T.length, d.value = [].concat($).concat(A).concat(T), i.value = u.value.length > 0 || h.value.length > 0;
  }, de = (N, A = !1) => {
    N && _(), A ? t.state.doLayout() : t.state.debouncedUpdateLayout();
  }, J = (N) => f.value.includes(N), w = () => {
    C.value = !1;
    const N = f.value;
    f.value = [], N.length && t.emit("selection-change", []);
  }, L = () => {
    let N;
    if (n.value) {
      N = [];
      const A = Oe(f.value, n.value), $ = Oe(s.value, n.value);
      for (const T in A)
        Ie(A, T) && !$[T] && N.push(A[T].row);
    } else
      N = f.value.filter((A) => !s.value.includes(A));
    if (N.length) {
      const A = f.value.filter(($) => !N.includes($));
      f.value = A, t.emit("selection-change", A.slice());
    }
  }, B = () => (f.value || []).slice(), U = (N, A = void 0, $ = !0) => {
    if (Be(f.value, N, A)) {
      const D = (f.value || []).slice();
      $ && t.emit("select", D, N), t.emit("selection-change", D);
    }
  }, Y = () => {
    var N, A;
    const $ = R.value ? !C.value : !(C.value || f.value.length);
    C.value = $;
    let T = !1, D = 0;
    const ee = (A = (N = t == null ? void 0 : t.store) == null ? void 0 : N.states) == null ? void 0 : A.rowKey.value;
    s.value.forEach((fe, Fe) => {
      const Se = Fe + D;
      x.value ? x.value.call(null, fe, Se) && Be(f.value, fe, $) && (T = !0) : Be(f.value, fe, $) && (T = !0), D += Q(Z(fe, ee));
    }), T && t.emit("selection-change", f.value ? f.value.slice() : []), t.emit("select-all", (f.value || []).slice());
  }, q = () => {
    const N = Oe(f.value, n.value);
    s.value.forEach((A) => {
      const $ = Z(A, n.value), T = N[$];
      T && (f.value[T.index] = A);
    });
  }, re = () => {
    var N, A, $;
    if (((N = s.value) == null ? void 0 : N.length) === 0) {
      C.value = !1;
      return;
    }
    let T;
    n.value && (T = Oe(f.value, n.value));
    const D = function(Se) {
      return T ? !!T[Z(Se, n.value)] : f.value.includes(Se);
    };
    let ee = !0, fe = 0, Fe = 0;
    for (let Se = 0, an = (s.value || []).length; Se < an; Se++) {
      const sn = ($ = (A = t == null ? void 0 : t.store) == null ? void 0 : A.states) == null ? void 0 : $.rowKey.value, rn = Se + Fe, rt = s.value[Se], un = x.value && x.value.call(null, rt, rn);
      if (D(rt))
        fe++;
      else if (!x.value || un) {
        ee = !1;
        break;
      }
      Fe += Q(Z(rt, sn));
    }
    fe === 0 && (ee = !1), C.value = ee;
  }, Q = (N) => {
    var A;
    if (!t || !t.store)
      return 0;
    const { treeData: $ } = t.store.states;
    let T = 0;
    const D = (A = $.value[N]) == null ? void 0 : A.children;
    return D && (T += D.length, D.forEach((ee) => {
      T += Q(ee);
    })), T;
  }, we = (N, A) => {
    Array.isArray(N) || (N = [N]);
    const $ = {};
    return N.forEach((T) => {
      k.value[T.id] = A, $[T.columnKey || T.id] = A;
    }), $;
  }, ne = (N, A, $) => {
    I.value && I.value !== N && (I.value.order = null), I.value = N, V.value = A, W.value = $;
  }, ce = () => {
    let N = O(r);
    Object.keys(k.value).forEach((A) => {
      const $ = k.value[A];
      if (!$ || $.length === 0)
        return;
      const T = Wl({
        columns: d.value
      }, A);
      T && T.filterMethod && (N = N.filter((D) => $.some((ee) => T.filterMethod.call(null, ee, D, T))));
    }), M.value = N;
  }, me = () => {
    s.value = _o(M.value, {
      sortingColumn: I.value,
      sortProp: V.value,
      sortOrder: W.value
    });
  }, Dl = (N = void 0) => {
    N && N.filter || ce(), me();
  }, jl = (N) => {
    const { tableHeaderRef: A } = t.refs;
    if (!A)
      return;
    const $ = Object.assign({}, A.filterPanels), T = Object.keys($);
    if (T.length)
      if (typeof N == "string" && (N = [N]), Array.isArray(N)) {
        const D = N.map((ee) => zo({
          columns: d.value
        }, ee));
        T.forEach((ee) => {
          const fe = D.find((Fe) => Fe.id === ee);
          fe && (fe.filteredValue = []);
        }), t.store.commit("filterChange", {
          column: D,
          values: [],
          silent: !0,
          multi: !0
        });
      } else
        T.forEach((D) => {
          const ee = d.value.find((fe) => fe.id === D);
          ee && (ee.filteredValue = []);
        }), k.value = {}, t.store.commit("filterChange", {
          column: {},
          values: [],
          silent: !0
        });
  }, Ul = () => {
    I.value && (ne(null, null, null), t.store.commit("changeSortCondition", {
      silent: !0
    }));
  }, {
    setExpandRowKeys: Gl,
    toggleRowExpansion: Bt,
    updateExpandRows: Yl,
    states: ql,
    isRowExpanded: Xl
  } = Yo({
    data: s,
    rowKey: n
  }), {
    updateTreeExpandKeys: _l,
    toggleTreeExpansion: Ql,
    updateTreeData: Zl,
    loadOrToggle: Jl,
    states: en
  } = Xo({
    data: s,
    rowKey: n
  }), {
    updateCurrentRowData: tn,
    updateCurrentRow: ln,
    setCurrentRowKey: nn,
    states: on
  } = qo({
    data: s,
    rowKey: n
  });
  return {
    assertRowKey: j,
    updateColumns: _,
    scheduleLayout: de,
    isSelected: J,
    clearSelection: w,
    cleanSelection: L,
    getSelectionRows: B,
    toggleRowSelection: U,
    _toggleAllSelection: Y,
    toggleAllSelection: null,
    updateSelectionByRowKey: q,
    updateAllSelected: re,
    updateFilters: we,
    updateCurrentRow: ln,
    updateSort: ne,
    execFilter: ce,
    execSort: me,
    execQuery: Dl,
    clearFilter: jl,
    clearSort: Ul,
    toggleRowExpansion: Bt,
    setExpandRowKeysAdapter: (N) => {
      Gl(N), _l(N);
    },
    setCurrentRowKey: nn,
    toggleRowExpansionAdapter: (N, A) => {
      d.value.some(({ type: T }) => T === "expand") ? Bt(N, A) : Ql(N, A);
    },
    isRowExpanded: Xl,
    updateExpandRows: Yl,
    updateCurrentRowData: tn,
    loadOrToggle: Jl,
    updateTreeData: Zl,
    states: {
      tableSize: l,
      rowKey: n,
      data: s,
      _data: r,
      isComplex: i,
      _columns: o,
      originColumns: a,
      columns: d,
      fixedColumns: u,
      rightFixedColumns: h,
      leafColumns: b,
      fixedLeafColumns: S,
      rightFixedLeafColumns: c,
      updateOrderFns: p,
      leafColumnsLength: y,
      fixedLeafColumnsLength: m,
      rightFixedLeafColumnsLength: v,
      isAllSelected: C,
      selection: f,
      reserveSelection: g,
      selectOnIndeterminate: R,
      selectable: x,
      filters: k,
      filteredData: M,
      sortingColumn: I,
      sortProp: V,
      sortOrder: W,
      hoverRow: K,
      ...ql,
      ...en,
      ...on
    }
  };
}
function Lt(e, t) {
  return e.map((l) => {
    var n;
    return l.id === t.id ? t : ((n = l.children) != null && n.length && (l.children = Lt(l.children, t)), l);
  });
}
function kt(e) {
  e.forEach((t) => {
    var l, n;
    t.no = (l = t.getColumnIndex) == null ? void 0 : l.call(t), (n = t.children) != null && n.length && kt(t.children);
  }), e.sort((t, l) => t.no - l.no);
}
function Zo() {
  const e = te(), t = Qo();
  return {
    ns: ae("table"),
    ...t,
    mutations: {
      setData(i, o) {
        const a = O(i._data) !== o;
        i.data.value = o, i._data.value = o, e.store.execQuery(), e.store.updateCurrentRowData(), e.store.updateExpandRows(), e.store.updateTreeData(e.store.states.defaultExpandAll.value), O(i.reserveSelection) ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey()) : a ? e.store.clearSelection() : e.store.cleanSelection(), e.store.updateAllSelected(), e.$ready && e.store.scheduleLayout();
      },
      insertColumn(i, o, a, d) {
        const u = O(i._columns);
        let h = [];
        a ? (a && !a.children && (a.children = []), a.children.push(o), h = Lt(u, a)) : (u.push(o), h = u), kt(h), i._columns.value = h, i.updateOrderFns.push(d), o.type === "selection" && (i.selectable.value = o.selectable, i.reserveSelection.value = o.reserveSelection), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      updateColumnOrder(i, o) {
        var a;
        ((a = o.getColumnIndex) == null ? void 0 : a.call(o)) !== o.no && (kt(i._columns.value), e.$ready && e.store.updateColumns());
      },
      removeColumn(i, o, a, d) {
        const u = O(i._columns) || [];
        if (a)
          a.children.splice(a.children.findIndex((b) => b.id === o.id), 1), Le(() => {
            var b;
            ((b = a.children) == null ? void 0 : b.length) === 0 && delete a.children;
          }), i._columns.value = Lt(u, a);
        else {
          const b = u.indexOf(o);
          b > -1 && (u.splice(b, 1), i._columns.value = u);
        }
        const h = i.updateOrderFns.indexOf(d);
        h > -1 && i.updateOrderFns.splice(h, 1), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      sort(i, o) {
        const { prop: a, order: d, init: u } = o;
        if (a) {
          const h = O(i.columns).find((b) => b.property === a);
          h && (h.order = d, e.store.updateSort(h, a, d), e.store.commit("changeSortCondition", { init: u }));
        }
      },
      changeSortCondition(i, o) {
        const { sortingColumn: a, sortProp: d, sortOrder: u } = i, h = O(a), b = O(d), S = O(u);
        S === null && (i.sortingColumn.value = null, i.sortProp.value = null);
        const c = { filter: !0 };
        e.store.execQuery(c), (!o || !(o.silent || o.init)) && e.emit("sort-change", {
          column: h,
          prop: b,
          order: S
        }), e.store.updateTableScrollY();
      },
      filterChange(i, o) {
        const { column: a, values: d, silent: u } = o, h = e.store.updateFilters(a, d);
        e.store.execQuery(), u || e.emit("filter-change", h), e.store.updateTableScrollY();
      },
      toggleAllSelection() {
        e.store.toggleAllSelection();
      },
      rowSelectedChanged(i, o) {
        e.store.toggleRowSelection(o), e.store.updateAllSelected();
      },
      setHoverRow(i, o) {
        i.hoverRow.value = o;
      },
      setCurrentRow(i, o) {
        e.store.updateCurrentRow(o);
      }
    },
    commit: function(i, ...o) {
      const a = e.store.mutations;
      if (a[i])
        a[i].apply(e, [e.store.states].concat(o));
      else
        throw new Error(`Action not found: ${i}`);
    },
    updateTableScrollY: function() {
      Le(() => e.layout.updateScrollY.apply(e.layout));
    }
  };
}
const Ve = {
  rowKey: "rowKey",
  defaultExpandAll: "defaultExpandAll",
  selectOnIndeterminate: "selectOnIndeterminate",
  indent: "indent",
  lazy: "lazy",
  data: "data",
  "treeProps.hasChildren": {
    key: "lazyColumnIdentifier",
    default: "hasChildren"
  },
  "treeProps.children": {
    key: "childrenColumnName",
    default: "children"
  }
};
function Jo(e, t) {
  if (!e)
    throw new Error("Table is required.");
  const l = Zo();
  return l.toggleAllSelection = nt(l._toggleAllSelection, 10), Object.keys(Ve).forEach((n) => {
    $l(Pl(t, n), n, l);
  }), ea(l, t), l;
}
function ea(e, t) {
  Object.keys(Ve).forEach((l) => {
    ie(() => Pl(t, l), (n) => {
      $l(n, l, e);
    });
  });
}
function $l(e, t, l) {
  let n = e, s = Ve[t];
  typeof Ve[t] == "object" && (s = s.key, n = n || Ve[t].default), l.states[s].value = n;
}
function Pl(e, t) {
  if (t.includes(".")) {
    const l = t.split(".");
    let n = e;
    return l.forEach((s) => {
      n = n[s];
    }), n;
  } else
    return e[t];
}
class ta {
  constructor(t) {
    this.observers = [], this.table = null, this.store = null, this.columns = [], this.fit = !0, this.showHeader = !0, this.height = E(null), this.scrollX = E(!1), this.scrollY = E(!1), this.bodyWidth = E(null), this.fixedWidth = E(null), this.rightFixedWidth = E(null), this.gutterWidth = 0;
    for (const l in t)
      Ie(t, l) && (Ke(this[l]) ? this[l].value = t[l] : this[l] = t[l]);
    if (!this.table)
      throw new Error("Table is required for Table Layout");
    if (!this.store)
      throw new Error("Store is required for Table Layout");
  }
  updateScrollY() {
    if (this.height.value === null)
      return !1;
    const l = this.table.refs.scrollBarRef;
    if (this.table.vnode.el && (l != null && l.wrapRef)) {
      let n = !0;
      const s = this.scrollY.value;
      return n = l.wrapRef.scrollHeight > l.wrapRef.clientHeight, this.scrollY.value = n, s !== n;
    }
    return !1;
  }
  setHeight(t, l = "height") {
    if (!Me)
      return;
    const n = this.table.vnode.el;
    if (t = Do(t), this.height.value = Number(t), !n && (t || t === 0))
      return Le(() => this.setHeight(t, l));
    typeof t == "number" ? (n.style[l] = `${t}px`, this.updateElsHeight()) : typeof t == "string" && (n.style[l] = t, this.updateElsHeight());
  }
  setMaxHeight(t) {
    this.setHeight(t, "max-height");
  }
  getFlattenColumns() {
    const t = [];
    return this.table.store.states.columns.value.forEach((n) => {
      n.isColumnGroup ? t.push.apply(t, n.columns) : t.push(n);
    }), t;
  }
  updateElsHeight() {
    this.updateScrollY(), this.notifyObservers("scrollable");
  }
  headerDisplayNone(t) {
    if (!t)
      return !0;
    let l = t;
    for (; l.tagName !== "DIV"; ) {
      if (getComputedStyle(l).display === "none")
        return !0;
      l = l.parentElement;
    }
    return !1;
  }
  updateColumnsWidth() {
    if (!Me)
      return;
    const t = this.fit, l = this.table.vnode.el.clientWidth;
    let n = 0;
    const s = this.getFlattenColumns(), r = s.filter((a) => typeof a.width != "number");
    if (s.forEach((a) => {
      typeof a.width == "number" && a.realWidth && (a.realWidth = null);
    }), r.length > 0 && t) {
      if (s.forEach((a) => {
        n += Number(a.width || a.minWidth || 80);
      }), n <= l) {
        this.scrollX.value = !1;
        const a = l - n;
        if (r.length === 1)
          r[0].realWidth = Number(r[0].minWidth || 80) + a;
        else {
          const d = r.reduce((b, S) => b + Number(S.minWidth || 80), 0), u = a / d;
          let h = 0;
          r.forEach((b, S) => {
            if (S === 0)
              return;
            const c = Math.floor(Number(b.minWidth || 80) * u);
            h += c, b.realWidth = Number(b.minWidth || 80) + c;
          }), r[0].realWidth = Number(r[0].minWidth || 80) + a - h;
        }
      } else
        this.scrollX.value = !0, r.forEach((a) => {
          a.realWidth = Number(a.minWidth);
        });
      this.bodyWidth.value = Math.max(n, l), this.table.state.resizeState.value.width = this.bodyWidth.value;
    } else
      s.forEach((a) => {
        !a.width && !a.minWidth ? a.realWidth = 80 : a.realWidth = Number(a.width || a.minWidth), n += a.realWidth;
      }), this.scrollX.value = n > l, this.bodyWidth.value = n;
    const i = this.store.states.fixedColumns.value;
    if (i.length > 0) {
      let a = 0;
      i.forEach((d) => {
        a += Number(d.realWidth || d.width);
      }), this.fixedWidth.value = a;
    }
    const o = this.store.states.rightFixedColumns.value;
    if (o.length > 0) {
      let a = 0;
      o.forEach((d) => {
        a += Number(d.realWidth || d.width);
      }), this.rightFixedWidth.value = a;
    }
    this.notifyObservers("columns");
  }
  addObserver(t) {
    this.observers.push(t);
  }
  removeObserver(t) {
    const l = this.observers.indexOf(t);
    l !== -1 && this.observers.splice(l, 1);
  }
  notifyObservers(t) {
    this.observers.forEach((n) => {
      var s, r;
      switch (t) {
        case "columns":
          (s = n.state) == null || s.onColumnsChange(this);
          break;
        case "scrollable":
          (r = n.state) == null || r.onScrollableChange(this);
          break;
        default:
          throw new Error(`Table Layout don't have event ${t}.`);
      }
    });
  }
}
const { CheckboxGroup: la } = Ae, na = ue({
  name: "ElTableFilterPanel",
  components: {
    ElCheckbox: Ae,
    ElCheckboxGroup: la,
    ElScrollbar: rl,
    ElTooltip: sl,
    ElIcon: Mt,
    ArrowDown: mn,
    ArrowUp: gn
  },
  directives: { ClickOutside: Pn },
  props: {
    placement: {
      type: String,
      default: "bottom-start"
    },
    store: {
      type: Object
    },
    column: {
      type: Object
    },
    upDataColumn: {
      type: Function
    }
  },
  setup(e) {
    const t = te(), { t: l } = vl(), n = ae("table-filter"), s = t == null ? void 0 : t.parent;
    s.filterPanels.value[e.column.id] || (s.filterPanels.value[e.column.id] = t);
    const r = E(!1), i = E(null), o = F(() => e.column && e.column.filters), a = F(() => e.column.filterClassName ? `${n.b()} ${e.column.filterClassName}` : n.b()), d = F({
      get: () => {
        var g;
        return (((g = e.column) == null ? void 0 : g.filteredValue) || [])[0];
      },
      set: (g) => {
        u.value && (typeof g < "u" && g !== null ? u.value.splice(0, 1, g) : u.value.splice(0, 1));
      }
    }), u = F({
      get() {
        return e.column ? e.column.filteredValue || [] : [];
      },
      set(g) {
        e.column && e.upDataColumn("filteredValue", g);
      }
    }), h = F(() => e.column ? e.column.filterMultiple : !0), b = (g) => g.value === d.value, S = () => {
      r.value = !1;
    }, c = (g) => {
      g.stopPropagation(), r.value = !r.value;
    }, p = () => {
      r.value = !1;
    }, y = () => {
      C(u.value), S();
    }, m = () => {
      u.value = [], C(u.value), S();
    }, v = (g) => {
      d.value = g, C(typeof g < "u" && g !== null ? u.value : []), S();
    }, C = (g) => {
      e.store.commit("filterChange", {
        column: e.column,
        values: g
      }), e.store.updateAllSelected();
    };
    ie(r, (g) => {
      e.column && e.upDataColumn("filterOpened", g);
    }, {
      immediate: !0
    });
    const f = F(() => {
      var g, R;
      return (R = (g = i.value) == null ? void 0 : g.popperRef) == null ? void 0 : R.contentRef;
    });
    return {
      tooltipVisible: r,
      multiple: h,
      filterClassName: a,
      filteredValue: u,
      filterValue: d,
      filters: o,
      handleConfirm: y,
      handleReset: m,
      handleSelect: v,
      isActive: b,
      t: l,
      ns: n,
      showFilterPanel: c,
      hideFilterPanel: p,
      popperPaneRef: f,
      tooltip: i
    };
  }
}), oa = { key: 0 }, aa = ["disabled"], sa = ["label", "onClick"];
function ra(e, t, l, n, s, r) {
  const i = pe("el-checkbox"), o = pe("el-checkbox-group"), a = pe("el-scrollbar"), d = pe("arrow-up"), u = pe("arrow-down"), h = pe("el-icon"), b = pe("el-tooltip"), S = fl("click-outside");
  return z(), xe(b, {
    ref: "tooltip",
    visible: e.tooltipVisible,
    offset: 0,
    placement: e.placement,
    "show-arrow": !1,
    "stop-popper-mouse-event": !1,
    teleported: "",
    effect: "light",
    pure: "",
    "popper-class": e.filterClassName,
    persistent: ""
  }, {
    content: ge(() => [
      e.multiple ? (z(), G("div", oa, [
        le("div", {
          class: P(e.ns.e("content"))
        }, [
          ve(a, {
            "wrap-class": e.ns.e("wrap")
          }, {
            default: ge(() => [
              ve(o, {
                modelValue: e.filteredValue,
                "onUpdate:modelValue": t[0] || (t[0] = (c) => e.filteredValue = c),
                class: P(e.ns.e("checkbox-group"))
              }, {
                default: ge(() => [
                  (z(!0), G(lt, null, zt(e.filters, (c) => (z(), xe(i, {
                    key: c.value,
                    value: c.value
                  }, {
                    default: ge(() => [
                      ot(Ee(c.text), 1)
                    ]),
                    _: 2
                  }, 1032, ["value"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "class"])
            ]),
            _: 1
          }, 8, ["wrap-class"])
        ], 2),
        le("div", {
          class: P(e.ns.e("bottom"))
        }, [
          le("button", {
            class: P({ [e.ns.is("disabled")]: e.filteredValue.length === 0 }),
            disabled: e.filteredValue.length === 0,
            type: "button",
            onClick: t[1] || (t[1] = (...c) => e.handleConfirm && e.handleConfirm(...c))
          }, Ee(e.t("el.table.confirmFilter")), 11, aa),
          le("button", {
            type: "button",
            onClick: t[2] || (t[2] = (...c) => e.handleReset && e.handleReset(...c))
          }, Ee(e.t("el.table.resetFilter")), 1)
        ], 2)
      ])) : (z(), G("ul", {
        key: 1,
        class: P(e.ns.e("list"))
      }, [
        le("li", {
          class: P([
            e.ns.e("list-item"),
            {
              [e.ns.is("active")]: e.filterValue === void 0 || e.filterValue === null
            }
          ]),
          onClick: t[3] || (t[3] = (c) => e.handleSelect(null))
        }, Ee(e.t("el.table.clearFilter")), 3),
        (z(!0), G(lt, null, zt(e.filters, (c) => (z(), G("li", {
          key: c.value,
          class: P([e.ns.e("list-item"), e.ns.is("active", e.isActive(c))]),
          label: c.value,
          onClick: (p) => e.handleSelect(c.value)
        }, Ee(c.text), 11, sa))), 128))
      ], 2))
    ]),
    default: ge(() => [
      Re((z(), G("span", {
        class: P([
          `${e.ns.namespace.value}-table__column-filter-trigger`,
          `${e.ns.namespace.value}-none-outline`
        ]),
        onClick: t[4] || (t[4] = (...c) => e.showFilterPanel && e.showFilterPanel(...c))
      }, [
        ve(h, null, {
          default: ge(() => [
            ye(e.$slots, "filter-icon", {}, () => [
              e.column.filterOpened ? (z(), xe(d, { key: 0 })) : (z(), xe(u, { key: 1 }))
            ])
          ]),
          _: 3
        })
      ], 2)), [
        [S, e.hideFilterPanel, e.popperPaneRef]
      ])
    ]),
    _: 3
  }, 8, ["visible", "placement", "popper-class"]);
}
var ia = /* @__PURE__ */ De(na, [["render", ra], ["__file", "filter-panel.vue"]]);
function Bl(e) {
  const t = te();
  hl(() => {
    l.value.addObserver(t);
  }), je(() => {
    n(l.value), s(l.value);
  }), Rn(() => {
    n(l.value), s(l.value);
  }), Wt(() => {
    l.value.removeObserver(t);
  });
  const l = F(() => {
    const r = e.layout;
    if (!r)
      throw new Error("Can not find table layout.");
    return r;
  }), n = (r) => {
    var i;
    const o = ((i = e.vnode.el) == null ? void 0 : i.querySelectorAll("colgroup > col")) || [];
    if (!o.length)
      return;
    const a = r.getFlattenColumns(), d = {};
    a.forEach((u) => {
      d[u.id] = u;
    });
    for (let u = 0, h = o.length; u < h; u++) {
      const b = o[u], S = b.getAttribute("name"), c = d[S];
      c && b.setAttribute("width", c.realWidth || c.width);
    }
  }, s = (r) => {
    var i, o;
    const a = ((i = e.vnode.el) == null ? void 0 : i.querySelectorAll("colgroup > col[name=gutter]")) || [];
    for (let u = 0, h = a.length; u < h; u++)
      a[u].setAttribute("width", r.scrollY.value ? r.gutterWidth : "0");
    const d = ((o = e.vnode.el) == null ? void 0 : o.querySelectorAll("th.gutter")) || [];
    for (let u = 0, h = d.length; u < h; u++) {
      const b = d[u];
      b.style.width = r.scrollY.value ? `${r.gutterWidth}px` : "0", b.style.display = r.scrollY.value ? "" : "none";
    }
  };
  return {
    tableLayout: l.value,
    onColumnsChange: n,
    onScrollableChange: s
  };
}
const Ce = Symbol("ElTable");
function ua(e, t) {
  const l = te(), n = se(Ce), s = (p) => {
    p.stopPropagation();
  }, r = (p, y) => {
    !y.filters && y.sortable ? c(p, y, !1) : y.filterable && !y.sortable && s(p), n == null || n.emit("header-click", y, p);
  }, i = (p, y) => {
    n == null || n.emit("header-contextmenu", y, p);
  }, o = E(null), a = E(!1), d = E({}), u = (p, y) => {
    if (Me && !(y.children && y.children.length > 0) && o.value && e.border) {
      a.value = !0;
      const m = n;
      t("set-drag-visible", !0);
      const C = (m == null ? void 0 : m.vnode.el).getBoundingClientRect().left, f = l.vnode.el.querySelector(`th.${y.id}`), g = f.getBoundingClientRect(), R = g.left - C + 30;
      Je(f, "noclick"), d.value = {
        startMouseLeft: p.clientX,
        startLeft: g.right - C,
        startColumnLeft: g.left - C,
        tableLeft: C
      };
      const x = m == null ? void 0 : m.refs.resizeProxy;
      x.style.left = `${d.value.startLeft}px`, document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
      const k = (I) => {
        const V = I.clientX - d.value.startMouseLeft, W = d.value.startLeft + V;
        x.style.left = `${Math.max(R, W)}px`;
      }, M = () => {
        if (a.value) {
          const { startColumnLeft: I, startLeft: V } = d.value, K = Number.parseInt(x.style.left, 10) - I;
          y.width = y.realWidth = K, m == null || m.emit("header-dragend", y.width, V - I, y, p), requestAnimationFrame(() => {
            e.store.scheduleLayout(!1, !0);
          }), document.body.style.cursor = "", a.value = !1, o.value = null, d.value = {}, t("set-drag-visible", !1);
        }
        document.removeEventListener("mousemove", k), document.removeEventListener("mouseup", M), document.onselectstart = null, document.ondragstart = null, setTimeout(() => {
          ze(f, "noclick");
        }, 0);
      };
      document.addEventListener("mousemove", k), document.addEventListener("mouseup", M);
    }
  }, h = (p, y) => {
    if (y.children && y.children.length > 0)
      return;
    const m = p.target;
    if (!bn(m))
      return;
    const v = m == null ? void 0 : m.closest("th");
    if (!(!y || !y.resizable) && !a.value && e.border) {
      const C = v.getBoundingClientRect(), f = document.body.style;
      C.width > 12 && C.right - p.pageX < 8 ? (f.cursor = "col-resize", Ge(v, "is-sortable") && (v.style.cursor = "col-resize"), o.value = y) : a.value || (f.cursor = "", Ge(v, "is-sortable") && (v.style.cursor = "pointer"), o.value = null);
    }
  }, b = () => {
    Me && (document.body.style.cursor = "");
  }, S = ({ order: p, sortOrders: y }) => {
    if (p === "")
      return y[0];
    const m = y.indexOf(p || null);
    return y[m > y.length - 2 ? 0 : m + 1];
  }, c = (p, y, m) => {
    var v;
    p.stopPropagation();
    const C = y.order === m ? null : m || S(y), f = (v = p.target) == null ? void 0 : v.closest("th");
    if (f && Ge(f, "noclick")) {
      ze(f, "noclick");
      return;
    }
    if (!y.sortable)
      return;
    const g = e.store.states;
    let R = g.sortProp.value, x;
    const k = g.sortingColumn.value;
    (k !== y || k === y && k.order === null) && (k && (k.order = null), g.sortingColumn.value = y, R = y.property), C ? x = y.order = C : x = y.order = null, g.sortProp.value = R, g.sortOrder.value = x, n == null || n.store.commit("changeSortCondition");
  };
  return {
    handleHeaderClick: r,
    handleHeaderContextMenu: i,
    handleMouseDown: u,
    handleMouseMove: h,
    handleMouseOut: b,
    handleSortClick: c,
    handleFilterClick: s
  };
}
function da(e) {
  const t = se(Ce), l = ae("table");
  return {
    getHeaderRowStyle: (o) => {
      const a = t == null ? void 0 : t.props.headerRowStyle;
      return typeof a == "function" ? a.call(null, { rowIndex: o }) : a;
    },
    getHeaderRowClass: (o) => {
      const a = [], d = t == null ? void 0 : t.props.headerRowClassName;
      return typeof d == "string" ? a.push(d) : typeof d == "function" && a.push(d.call(null, { rowIndex: o })), a.join(" ");
    },
    getHeaderCellStyle: (o, a, d, u) => {
      var h;
      let b = (h = t == null ? void 0 : t.props.headerCellStyle) != null ? h : {};
      typeof b == "function" && (b = b.call(null, {
        rowIndex: o,
        columnIndex: a,
        row: d,
        column: u
      }));
      const S = Pt(a, u.fixed, e.store, d);
      return Te(S, "left"), Te(S, "right"), Object.assign({}, b, S);
    },
    getHeaderCellClass: (o, a, d, u) => {
      const h = $t(l.b(), a, u.fixed, e.store, d), b = [
        u.id,
        u.order,
        u.headerAlign,
        u.className,
        u.labelClassName,
        ...h
      ];
      u.children || b.push("is-leaf"), u.sortable && b.push("is-sortable");
      const S = t == null ? void 0 : t.props.headerCellClassName;
      return typeof S == "string" ? b.push(S) : typeof S == "function" && b.push(S.call(null, {
        rowIndex: o,
        columnIndex: a,
        row: d,
        column: u
      })), b.push(l.e("cell")), b.filter((c) => !!c).join(" ");
    }
  };
}
const Vl = (e) => {
  const t = [];
  return e.forEach((l) => {
    l.children ? (t.push(l), t.push.apply(t, Vl(l.children))) : t.push(l);
  }), t;
}, Il = (e) => {
  let t = 1;
  const l = (r, i) => {
    if (i && (r.level = i.level + 1, t < r.level && (t = r.level)), r.children) {
      let o = 0;
      r.children.forEach((a) => {
        l(a, r), o += a.colSpan;
      }), r.colSpan = o;
    } else
      r.colSpan = 1;
  };
  e.forEach((r) => {
    r.level = 1, l(r, void 0);
  });
  const n = [];
  for (let r = 0; r < t; r++)
    n.push([]);
  return Vl(e).forEach((r) => {
    r.children ? (r.rowSpan = 1, r.children.forEach((i) => i.isSubColumn = !0)) : r.rowSpan = t - r.level + 1, n[r.level - 1].push(r);
  }), n;
};
function ca(e) {
  const t = se(Ce), l = F(() => Il(e.store.states.originColumns.value));
  return {
    isGroup: F(() => {
      const r = l.value.length > 1;
      return r && t && (t.state.isGroup.value = !0), r;
    }),
    toggleAllSelection: (r) => {
      r.stopPropagation(), t == null || t.store.commit("toggleAllSelection");
    },
    columnRows: l
  };
}
var fa = ue({
  name: "ElTableHeader",
  components: {
    ElCheckbox: Ae
  },
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: !0,
      type: Object
    },
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => ({
        prop: "",
        order: ""
      })
    }
  },
  setup(e, { emit: t }) {
    const l = te(), n = se(Ce), s = ae("table"), r = E({}), { onColumnsChange: i, onScrollableChange: o } = Bl(n);
    je(async () => {
      await Le(), await Le();
      const { prop: R, order: x } = e.defaultSort;
      n == null || n.store.commit("sort", { prop: R, order: x, init: !0 });
    });
    const {
      handleHeaderClick: a,
      handleHeaderContextMenu: d,
      handleMouseDown: u,
      handleMouseMove: h,
      handleMouseOut: b,
      handleSortClick: S,
      handleFilterClick: c
    } = ua(e, t), {
      getHeaderRowStyle: p,
      getHeaderRowClass: y,
      getHeaderCellStyle: m,
      getHeaderCellClass: v
    } = da(e), { isGroup: C, toggleAllSelection: f, columnRows: g } = ca(e);
    return l.state = {
      onColumnsChange: i,
      onScrollableChange: o
    }, l.filterPanels = r, {
      ns: s,
      filterPanels: r,
      onColumnsChange: i,
      onScrollableChange: o,
      columnRows: g,
      getHeaderRowClass: y,
      getHeaderRowStyle: p,
      getHeaderCellClass: v,
      getHeaderCellStyle: m,
      handleHeaderClick: a,
      handleHeaderContextMenu: d,
      handleMouseDown: u,
      handleMouseMove: h,
      handleMouseOut: b,
      handleSortClick: S,
      handleFilterClick: c,
      isGroup: C,
      toggleAllSelection: f
    };
  },
  render() {
    const {
      ns: e,
      isGroup: t,
      columnRows: l,
      getHeaderCellStyle: n,
      getHeaderCellClass: s,
      getHeaderRowClass: r,
      getHeaderRowStyle: i,
      handleHeaderClick: o,
      handleHeaderContextMenu: a,
      handleMouseDown: d,
      handleMouseMove: u,
      handleSortClick: h,
      handleMouseOut: b,
      store: S,
      $parent: c
    } = this;
    let p = 1;
    return H("thead", {
      class: { [e.is("group")]: t }
    }, l.map((y, m) => H("tr", {
      class: r(m),
      key: m,
      style: i(m)
    }, y.map((v, C) => (v.rowSpan > p && (p = v.rowSpan), H("th", {
      class: s(m, C, y, v),
      colspan: v.colSpan,
      key: `${v.id}-thead`,
      rowspan: v.rowSpan,
      style: n(m, C, y, v),
      onClick: (f) => {
        f.currentTarget.classList.contains("noclick") || o(f, v);
      },
      onContextmenu: (f) => a(f, v),
      onMousedown: (f) => d(f, v),
      onMousemove: (f) => u(f, v),
      onMouseout: b
    }, [
      H("div", {
        class: [
          "cell",
          v.filteredValue && v.filteredValue.length > 0 ? "highlight" : ""
        ]
      }, [
        v.renderHeader ? v.renderHeader({
          column: v,
          $index: C,
          store: S,
          _self: c
        }) : v.label,
        v.sortable && H("span", {
          onClick: (f) => h(f, v),
          class: "caret-wrapper"
        }, [
          H("i", {
            onClick: (f) => h(f, v, "ascending"),
            class: "sort-caret ascending"
          }),
          H("i", {
            onClick: (f) => h(f, v, "descending"),
            class: "sort-caret descending"
          })
        ]),
        v.filterable && H(ia, {
          store: S,
          placement: v.filterPlacement || "bottom-start",
          column: v,
          upDataColumn: (f, g) => {
            v[f] = g;
          }
        }, {
          "filter-icon": () => v.renderFilterIcon ? v.renderFilterIcon({
            filterOpened: v.filterOpened
          }) : null
        })
      ])
    ]))))));
  }
});
function ut(e, t, l = 0.01) {
  return e - t > l;
}
function ha(e) {
  const t = se(Ce), l = E(""), n = E(H("div")), s = (c, p, y) => {
    var m;
    const v = t, C = it(c);
    let f;
    const g = (m = v == null ? void 0 : v.vnode.el) == null ? void 0 : m.dataset.prefix;
    C && (f = Qt({
      columns: e.store.states.columns.value
    }, C, g), f && (v == null || v.emit(`cell-${y}`, p, f, C, c))), v == null || v.emit(`row-${y}`, p, f, c);
  }, r = (c, p) => {
    s(c, p, "dblclick");
  }, i = (c, p) => {
    e.store.commit("setCurrentRow", p), s(c, p, "click");
  }, o = (c, p) => {
    s(c, p, "contextmenu");
  }, a = nt((c) => {
    e.store.commit("setHoverRow", c);
  }, 30), d = nt(() => {
    e.store.commit("setHoverRow", null);
  }, 30), u = (c) => {
    const p = window.getComputedStyle(c, null), y = Number.parseInt(p.paddingLeft, 10) || 0, m = Number.parseInt(p.paddingRight, 10) || 0, v = Number.parseInt(p.paddingTop, 10) || 0, C = Number.parseInt(p.paddingBottom, 10) || 0;
    return {
      left: y,
      right: m,
      top: v,
      bottom: C
    };
  }, h = (c, p, y) => {
    let m = p.target.parentNode;
    for (; c > 1 && (m = m == null ? void 0 : m.nextSibling, !(!m || m.nodeName !== "TR")); )
      y(m, "hover-row hover-fixed-row"), c--;
  };
  return {
    handleDoubleClick: r,
    handleClick: i,
    handleContextMenu: o,
    handleMouseEnter: a,
    handleMouseLeave: d,
    handleCellMouseEnter: (c, p, y) => {
      var m;
      const v = t, C = it(c), f = (m = v == null ? void 0 : v.vnode.el) == null ? void 0 : m.dataset.prefix;
      if (C) {
        const w = Qt({
          columns: e.store.states.columns.value
        }, C, f);
        C.rowSpan > 1 && h(C.rowSpan, c, Je);
        const L = v.hoverState = { cell: C, column: w, row: p };
        v == null || v.emit("cell-mouse-enter", L.row, L.column, L.cell, c);
      }
      if (!y)
        return;
      const g = c.target.querySelector(".cell");
      if (!(Ge(g, `${f}-tooltip`) && g.childNodes.length))
        return;
      const R = document.createRange();
      R.setStart(g, 0), R.setEnd(g, g.childNodes.length);
      let { width: x, height: k } = R.getBoundingClientRect();
      const M = x - Math.floor(x), { width: I, height: V } = g.getBoundingClientRect();
      M < 1e-3 && (x = Math.floor(x)), k - Math.floor(k) < 1e-3 && (k = Math.floor(k));
      const { top: K, left: j, right: X, bottom: _ } = u(g), de = j + X, J = K + _;
      (ut(x + de, I) || ut(k + J, V) || ut(g.scrollWidth, I)) && Go(y, C.innerText || C.textContent, C, v);
    },
    handleCellMouseLeave: (c) => {
      const p = it(c);
      if (!p)
        return;
      p.rowSpan > 1 && h(p.rowSpan, c, ze);
      const y = t == null ? void 0 : t.hoverState;
      t == null || t.emit("cell-mouse-leave", y == null ? void 0 : y.row, y == null ? void 0 : y.column, y == null ? void 0 : y.cell, c);
    },
    tooltipContent: l,
    tooltipTrigger: n
  };
}
function va(e) {
  const t = se(Ce), l = ae("table");
  return {
    getRowStyle: (d, u) => {
      const h = t == null ? void 0 : t.props.rowStyle;
      return typeof h == "function" ? h.call(null, {
        row: d,
        rowIndex: u
      }) : h || null;
    },
    getRowClass: (d, u) => {
      const h = [l.e("row")];
      t != null && t.props.highlightCurrentRow && d === e.store.states.currentRow.value && h.push("current-row"), e.stripe && u % 2 === 1 && h.push(l.em("row", "striped"));
      const b = t == null ? void 0 : t.props.rowClassName;
      return typeof b == "string" ? h.push(b) : typeof b == "function" && h.push(b.call(null, {
        row: d,
        rowIndex: u
      })), h;
    },
    getCellStyle: (d, u, h, b) => {
      const S = t == null ? void 0 : t.props.cellStyle;
      let c = S ?? {};
      typeof S == "function" && (c = S.call(null, {
        rowIndex: d,
        columnIndex: u,
        row: h,
        column: b
      }));
      const p = Pt(u, e == null ? void 0 : e.fixed, e.store);
      return Te(p, "left"), Te(p, "right"), Object.assign({}, c, p);
    },
    getCellClass: (d, u, h, b, S) => {
      const c = $t(l.b(), u, e == null ? void 0 : e.fixed, e.store, void 0, S), p = [b.id, b.align, b.className, ...c], y = t == null ? void 0 : t.props.cellClassName;
      return typeof y == "string" ? p.push(y) : typeof y == "function" && p.push(y.call(null, {
        rowIndex: d,
        columnIndex: u,
        row: h,
        column: b
      })), p.push(l.e("cell")), p.filter((m) => !!m).join(" ");
    },
    getSpan: (d, u, h, b) => {
      let S = 1, c = 1;
      const p = t == null ? void 0 : t.props.spanMethod;
      if (typeof p == "function") {
        const y = p({
          row: d,
          column: u,
          rowIndex: h,
          columnIndex: b
        });
        Array.isArray(y) ? (S = y[0], c = y[1]) : typeof y == "object" && (S = y.rowspan, c = y.colspan);
      }
      return { rowspan: S, colspan: c };
    },
    getColspanRealWidth: (d, u, h) => {
      if (u < 1)
        return d[h].realWidth;
      const b = d.map(({ realWidth: S, width: c }) => S || c).slice(h, h + u);
      return Number(b.reduce((S, c) => Number(S) + Number(c), -1));
    }
  };
}
function pa(e) {
  const t = se(Ce), l = ae("table"), {
    handleDoubleClick: n,
    handleClick: s,
    handleContextMenu: r,
    handleMouseEnter: i,
    handleMouseLeave: o,
    handleCellMouseEnter: a,
    handleCellMouseLeave: d,
    tooltipContent: u,
    tooltipTrigger: h
  } = ha(e), {
    getRowStyle: b,
    getRowClass: S,
    getCellStyle: c,
    getCellClass: p,
    getSpan: y,
    getColspanRealWidth: m
  } = va(e), v = F(() => e.store.states.columns.value.findIndex(({ type: x }) => x === "default")), C = (x, k) => {
    const M = t.props.rowKey;
    return M ? Z(x, M) : k;
  }, f = (x, k, M, I = !1) => {
    const { tooltipEffect: V, tooltipOptions: W, store: K } = e, { indent: j, columns: X } = K.states, _ = S(x, k);
    let de = !0;
    return M && (_.push(l.em("row", `level-${M.level}`)), de = M.display), H("tr", {
      style: [de ? null : {
        display: "none"
      }, b(x, k)],
      class: _,
      key: C(x, k),
      onDblclick: (w) => n(w, x),
      onClick: (w) => s(w, x),
      onContextmenu: (w) => r(w, x),
      onMouseenter: () => i(k),
      onMouseleave: o
    }, X.value.map((w, L) => {
      const { rowspan: B, colspan: U } = y(x, w, k, L);
      if (!B || !U)
        return null;
      const Y = Object.assign({}, w);
      Y.realWidth = m(X.value, U, L);
      const q = {
        store: e.store,
        _self: e.context || t,
        column: Y,
        row: x,
        $index: k,
        cellIndex: L,
        expanded: I
      };
      L === v.value && M && (q.treeNode = {
        indent: M.level * j.value,
        level: M.level
      }, typeof M.expanded == "boolean" && (q.treeNode.expanded = M.expanded, "loading" in M && (q.treeNode.loading = M.loading), "noLazyChildren" in M && (q.treeNode.noLazyChildren = M.noLazyChildren)));
      const re = `${C(x, k)},${L}`, Q = Y.columnKey || Y.rawColumnKey || "", we = g(L, w, q), ne = w.showOverflowTooltip && vo({
        effect: V
      }, W, w.showOverflowTooltip);
      return H("td", {
        style: c(k, L, x, w),
        class: p(k, L, x, w, U - 1),
        key: `${Q}${re}`,
        rowspan: B,
        colspan: U,
        onMouseenter: (ce) => a(ce, x, ne),
        onMouseleave: d
      }, [we]);
    }));
  }, g = (x, k, M) => k.renderCell(M);
  return {
    wrappedRowRender: (x, k) => {
      const M = e.store, { isRowExpanded: I, assertRowKey: V } = M, { treeData: W, lazyTreeNodeMap: K, childrenColumnName: j, rowKey: X } = M.states, _ = M.states.columns.value;
      if (_.some(({ type: J }) => J === "expand")) {
        const J = I(x), w = f(x, k, void 0, J), L = t.renderExpanded;
        return J ? L ? [
          [
            w,
            H("tr", {
              key: `expanded-row__${w.key}`
            }, [
              H("td", {
                colspan: _.length,
                class: `${l.e("cell")} ${l.e("expanded-cell")}`
              }, [L({ row: x, $index: k, store: M, expanded: J })])
            ])
          ]
        ] : (console.error("[Element Error]renderExpanded is required."), w) : [[w]];
      } else if (Object.keys(W.value).length) {
        V();
        const J = Z(x, X.value);
        let w = W.value[J], L = null;
        w && (L = {
          expanded: w.expanded,
          level: w.level,
          display: !0
        }, typeof w.lazy == "boolean" && (typeof w.loaded == "boolean" && w.loaded && (L.noLazyChildren = !(w.children && w.children.length)), L.loading = w.loading));
        const B = [f(x, k, L)];
        if (w) {
          let U = 0;
          const Y = (re, Q) => {
            re && re.length && Q && re.forEach((we) => {
              const ne = {
                display: Q.display && Q.expanded,
                level: Q.level + 1,
                expanded: !1,
                noLazyChildren: !1,
                loading: !1
              }, ce = Z(we, X.value);
              if (ce == null)
                throw new Error("For nested data item, row-key is required.");
              if (w = { ...W.value[ce] }, w && (ne.expanded = w.expanded, w.level = w.level || ne.level, w.display = !!(w.expanded && ne.display), typeof w.lazy == "boolean" && (typeof w.loaded == "boolean" && w.loaded && (ne.noLazyChildren = !(w.children && w.children.length)), ne.loading = w.loading)), U++, B.push(f(we, k + U, ne)), w) {
                const me = K.value[ce] || we[j.value];
                Y(me, w);
              }
            });
          };
          w.display = !0;
          const q = K.value[J] || x[j.value];
          Y(q, w);
        }
        return B;
      } else
        return f(x, k, void 0);
    },
    tooltipContent: u,
    tooltipTrigger: h
  };
}
const ma = {
  store: {
    required: !0,
    type: Object
  },
  stripe: Boolean,
  tooltipEffect: String,
  tooltipOptions: {
    type: Object
  },
  context: {
    default: () => ({}),
    type: Object
  },
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  fixed: {
    type: String,
    default: ""
  },
  highlight: Boolean
};
var ga = ue({
  name: "ElTableBody",
  props: ma,
  setup(e) {
    const t = te(), l = se(Ce), n = ae("table"), { wrappedRowRender: s, tooltipContent: r, tooltipTrigger: i } = pa(e), { onColumnsChange: o, onScrollableChange: a } = Bl(l), d = [];
    return ie(e.store.states.hoverRow, (u, h) => {
      var b;
      const S = t == null ? void 0 : t.vnode.el, c = Array.from((S == null ? void 0 : S.children) || []).filter((m) => m == null ? void 0 : m.classList.contains(`${n.e("row")}`));
      let p = u;
      const y = (b = c[p]) == null ? void 0 : b.childNodes;
      if (y != null && y.length) {
        let m = 0;
        Array.from(y).reduce((C, f, g) => {
          var R, x;
          return ((R = y[g]) == null ? void 0 : R.colSpan) > 1 && (m = (x = y[g]) == null ? void 0 : x.colSpan), f.nodeName !== "TD" && m === 0 && C.push(g), m > 0 && m--, C;
        }, []).forEach((C) => {
          var f;
          for (p = u; p > 0; ) {
            const g = (f = c[p - 1]) == null ? void 0 : f.childNodes;
            if (g[C] && g[C].nodeName === "TD" && g[C].rowSpan > 1) {
              Je(g[C], "hover-cell"), d.push(g[C]);
              break;
            }
            p--;
          }
        });
      } else
        d.forEach((m) => ze(m, "hover-cell")), d.length = 0;
      !e.store.states.isComplex.value || !Me || po(() => {
        const m = c[h], v = c[u];
        m && !m.classList.contains("hover-fixed-row") && ze(m, "hover-row"), v && Je(v, "hover-row");
      });
    }), Wt(() => {
      var u;
      (u = he) == null || u();
    }), {
      ns: n,
      onColumnsChange: o,
      onScrollableChange: a,
      wrappedRowRender: s,
      tooltipContent: r,
      tooltipTrigger: i
    };
  },
  render() {
    const { wrappedRowRender: e, store: t } = this, l = t.states.data.value || [];
    return H("tbody", { tabIndex: -1 }, [
      l.reduce((n, s) => n.concat(e(s, n.length)), [])
    ]);
  }
});
function ba() {
  const e = se(Ce), t = e == null ? void 0 : e.store, l = F(() => t.states.fixedLeafColumnsLength.value), n = F(() => t.states.rightFixedColumns.value.length), s = F(() => t.states.columns.value.length), r = F(() => t.states.fixedColumns.value.length), i = F(() => t.states.rightFixedColumns.value.length);
  return {
    leftFixedLeafCount: l,
    rightFixedLeafCount: n,
    columnsCount: s,
    leftFixedCount: r,
    rightFixedCount: i,
    columns: t.states.columns
  };
}
function ya(e) {
  const { columns: t } = ba(), l = ae("table");
  return {
    getCellClasses: (r, i) => {
      const o = r[i], a = [
        l.e("cell"),
        o.id,
        o.align,
        o.labelClassName,
        ...$t(l.b(), i, o.fixed, e.store)
      ];
      return o.className && a.push(o.className), o.children || a.push(l.is("leaf")), a;
    },
    getCellStyles: (r, i) => {
      const o = Pt(i, r.fixed, e.store);
      return Te(o, "left"), Te(o, "right"), o;
    },
    columns: t
  };
}
var Ca = ue({
  name: "ElTableFooter",
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: !0,
      type: Object
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => ({
        prop: "",
        order: ""
      })
    }
  },
  setup(e) {
    const { getCellClasses: t, getCellStyles: l, columns: n } = ya(e);
    return {
      ns: ae("table"),
      getCellClasses: t,
      getCellStyles: l,
      columns: n
    };
  },
  render() {
    const { columns: e, getCellStyles: t, getCellClasses: l, summaryMethod: n, sumText: s } = this, r = this.store.states.data.value;
    let i = [];
    return n ? i = n({
      columns: e,
      data: r
    }) : e.forEach((o, a) => {
      if (a === 0) {
        i[a] = s;
        return;
      }
      const d = r.map((S) => Number(S[o.property])), u = [];
      let h = !0;
      d.forEach((S) => {
        if (!Number.isNaN(+S)) {
          h = !1;
          const c = `${S}`.split(".")[1];
          u.push(c ? c.length : 0);
        }
      });
      const b = Math.max.apply(null, u);
      h ? i[a] = "" : i[a] = d.reduce((S, c) => {
        const p = Number(c);
        return Number.isNaN(+p) ? S : Number.parseFloat((S + c).toFixed(Math.min(b, 20)));
      }, 0);
    }), H(H("tfoot", [
      H("tr", {}, [
        ...e.map((o, a) => H("td", {
          key: a,
          colspan: o.colSpan,
          rowspan: o.rowSpan,
          class: l(e, a),
          style: t(o, a)
        }, [
          H("div", {
            class: ["cell", o.labelClassName]
          }, [i[a]])
        ]))
      ])
    ]));
  }
});
function wa(e) {
  return {
    setCurrentRow: (u) => {
      e.commit("setCurrentRow", u);
    },
    getSelectionRows: () => e.getSelectionRows(),
    toggleRowSelection: (u, h) => {
      e.toggleRowSelection(u, h, !1), e.updateAllSelected();
    },
    clearSelection: () => {
      e.clearSelection();
    },
    clearFilter: (u) => {
      e.clearFilter(u);
    },
    toggleAllSelection: () => {
      e.commit("toggleAllSelection");
    },
    toggleRowExpansion: (u, h) => {
      e.toggleRowExpansionAdapter(u, h);
    },
    clearSort: () => {
      e.clearSort();
    },
    sort: (u, h) => {
      e.commit("sort", { prop: u, order: h });
    }
  };
}
function Sa(e, t, l, n) {
  const s = E(!1), r = E(null), i = E(!1), o = (w) => {
    i.value = w;
  }, a = E({
    width: null,
    height: null,
    headerHeight: null
  }), d = E(!1), u = {
    display: "inline-block",
    verticalAlign: "middle"
  }, h = E(), b = E(0), S = E(0), c = E(0), p = E(0), y = E(0);
  Pe(() => {
    t.setHeight(e.height);
  }), Pe(() => {
    t.setMaxHeight(e.maxHeight);
  }), ie(() => [e.currentRowKey, l.states.rowKey], ([w, L]) => {
    !O(L) || !O(w) || l.setCurrentRowKey(`${w}`);
  }, {
    immediate: !0
  }), ie(() => e.data, (w) => {
    n.store.commit("setData", w);
  }, {
    immediate: !0,
    deep: !0
  }), Pe(() => {
    e.expandRowKeys && l.setExpandRowKeysAdapter(e.expandRowKeys);
  });
  const m = () => {
    n.store.commit("setHoverRow", null), n.hoverState && (n.hoverState = null);
  }, v = (w, L) => {
    const { pixelX: B, pixelY: U } = L;
    Math.abs(B) >= Math.abs(U) && (n.refs.bodyWrapper.scrollLeft += L.pixelX / 5);
  }, C = F(() => e.height || e.maxHeight || l.states.fixedColumns.value.length > 0 || l.states.rightFixedColumns.value.length > 0), f = F(() => ({
    width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : ""
  })), g = () => {
    C.value && t.updateElsHeight(), t.updateColumnsWidth(), requestAnimationFrame(M);
  };
  je(async () => {
    await Le(), l.updateColumns(), I(), requestAnimationFrame(g);
    const w = n.vnode.el, L = n.refs.headerWrapper;
    e.flexible && w && w.parentElement && (w.parentElement.style.minWidth = "0"), a.value = {
      width: h.value = w.offsetWidth,
      height: w.offsetHeight,
      headerHeight: e.showHeader && L ? L.offsetHeight : null
    }, l.states.columns.value.forEach((B) => {
      B.filteredValue && B.filteredValue.length && n.store.commit("filterChange", {
        column: B,
        values: B.filteredValue,
        silent: !0
      });
    }), n.$ready = !0;
  });
  const R = (w, L) => {
    if (!w)
      return;
    const B = Array.from(w.classList).filter((U) => !U.startsWith("is-scrolling-"));
    B.push(t.scrollX.value ? L : "is-scrolling-none"), w.className = B.join(" ");
  }, x = (w) => {
    const { tableWrapper: L } = n.refs;
    R(L, w);
  }, k = (w) => {
    const { tableWrapper: L } = n.refs;
    return !!(L && L.classList.contains(w));
  }, M = function() {
    if (!n.refs.scrollBarRef)
      return;
    if (!t.scrollX.value) {
      const Q = "is-scrolling-none";
      k(Q) || x(Q);
      return;
    }
    const w = n.refs.scrollBarRef.wrapRef;
    if (!w)
      return;
    const { scrollLeft: L, offsetWidth: B, scrollWidth: U } = w, { headerWrapper: Y, footerWrapper: q } = n.refs;
    Y && (Y.scrollLeft = L), q && (q.scrollLeft = L);
    const re = U - B - 1;
    L >= re ? x("is-scrolling-right") : x(L === 0 ? "is-scrolling-left" : "is-scrolling-middle");
  }, I = () => {
    n.refs.scrollBarRef && (n.refs.scrollBarRef.wrapRef && Ut(n.refs.scrollBarRef.wrapRef, "scroll", M, {
      passive: !0
    }), e.fit ? Gt(n.vnode.el, V) : Ut(window, "resize", V), Gt(n.refs.bodyWrapper, () => {
      var w, L;
      V(), (L = (w = n.refs) == null ? void 0 : w.scrollBarRef) == null || L.update();
    }));
  }, V = () => {
    var w, L, B, U;
    const Y = n.vnode.el;
    if (!n.$ready || !Y)
      return;
    let q = !1;
    const {
      width: re,
      height: Q,
      headerHeight: we
    } = a.value, ne = h.value = Y.offsetWidth;
    re !== ne && (q = !0);
    const ce = Y.offsetHeight;
    (e.height || C.value) && Q !== ce && (q = !0);
    const me = e.tableLayout === "fixed" ? n.refs.headerWrapper : (w = n.refs.tableHeaderRef) == null ? void 0 : w.$el;
    e.showHeader && (me == null ? void 0 : me.offsetHeight) !== we && (q = !0), b.value = ((L = n.refs.tableWrapper) == null ? void 0 : L.scrollHeight) || 0, c.value = (me == null ? void 0 : me.scrollHeight) || 0, p.value = ((B = n.refs.footerWrapper) == null ? void 0 : B.offsetHeight) || 0, y.value = ((U = n.refs.appendWrapper) == null ? void 0 : U.offsetHeight) || 0, S.value = b.value - c.value - p.value - y.value, q && (a.value = {
      width: ne,
      height: ce,
      headerHeight: e.showHeader && (me == null ? void 0 : me.offsetHeight) || 0
    }, g());
  }, W = pt(), K = F(() => {
    const { bodyWidth: w, scrollY: L, gutterWidth: B } = t;
    return w.value ? `${w.value - (L.value ? B : 0)}px` : "";
  }), j = F(() => e.maxHeight ? "fixed" : e.tableLayout), X = F(() => {
    if (e.data && e.data.length)
      return null;
    let w = "100%";
    e.height && S.value && (w = `${S.value}px`);
    const L = h.value;
    return {
      width: L ? `${L}px` : "",
      height: w
    };
  }), _ = F(() => e.height ? {
    height: Number.isNaN(Number(e.height)) ? e.height : `${e.height}px`
  } : e.maxHeight ? {
    maxHeight: Number.isNaN(Number(e.maxHeight)) ? e.maxHeight : `${e.maxHeight}px`
  } : {}), de = F(() => e.height ? {
    height: "100%"
  } : e.maxHeight ? Number.isNaN(Number(e.maxHeight)) ? {
    maxHeight: `calc(${e.maxHeight} - ${c.value + p.value}px)`
  } : {
    maxHeight: `${e.maxHeight - c.value - p.value}px`
  } : {});
  return {
    isHidden: s,
    renderExpanded: r,
    setDragVisible: o,
    isGroup: d,
    handleMouseLeave: m,
    handleHeaderFooterMousewheel: v,
    tableSize: W,
    emptyBlockStyle: X,
    handleFixedMousewheel: (w, L) => {
      const B = n.refs.bodyWrapper;
      if (Math.abs(L.spinY) > 0) {
        const U = B.scrollTop;
        L.pixelY < 0 && U !== 0 && w.preventDefault(), L.pixelY > 0 && B.scrollHeight - B.clientHeight > U && w.preventDefault(), B.scrollTop += Math.ceil(L.pixelY / 5);
      } else
        B.scrollLeft += Math.ceil(L.pixelX / 5);
    },
    resizeProxyVisible: i,
    bodyWidth: K,
    resizeState: a,
    doLayout: g,
    tableBodyStyles: f,
    tableLayout: j,
    scrollbarViewStyle: u,
    tableInnerStyle: _,
    scrollbarStyle: de
  };
}
function xa(e) {
  const t = E(), l = () => {
    const s = e.vnode.el.querySelector(".hidden-columns"), r = { childList: !0, subtree: !0 }, i = e.store.states.updateOrderFns;
    t.value = new MutationObserver(() => {
      i.forEach((o) => o());
    }), t.value.observe(s, r);
  };
  je(() => {
    l();
  }), Wt(() => {
    var n;
    (n = t.value) == null || n.disconnect();
  });
}
var Ea = {
  data: {
    type: Array,
    default: () => []
  },
  size: At,
  width: [String, Number],
  height: [String, Number],
  maxHeight: [String, Number],
  fit: {
    type: Boolean,
    default: !0
  },
  stripe: Boolean,
  border: Boolean,
  rowKey: [String, Function],
  showHeader: {
    type: Boolean,
    default: !0
  },
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  cellClassName: [String, Function],
  cellStyle: [Object, Function],
  headerRowClassName: [String, Function],
  headerRowStyle: [Object, Function],
  headerCellClassName: [String, Function],
  headerCellStyle: [Object, Function],
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  emptyText: String,
  expandRowKeys: Array,
  defaultExpandAll: Boolean,
  defaultSort: Object,
  tooltipEffect: String,
  tooltipOptions: Object,
  spanMethod: Function,
  selectOnIndeterminate: {
    type: Boolean,
    default: !0
  },
  indent: {
    type: Number,
    default: 16
  },
  treeProps: {
    type: Object,
    default: () => ({
      hasChildren: "hasChildren",
      children: "children"
    })
  },
  lazy: Boolean,
  load: Function,
  style: {
    type: Object,
    default: () => ({})
  },
  className: {
    type: String,
    default: ""
  },
  tableLayout: {
    type: String,
    default: "fixed"
  },
  scrollbarAlwaysOn: Boolean,
  flexible: Boolean,
  showOverflowTooltip: [Boolean, Object]
};
function zl(e) {
  const t = e.tableLayout === "auto";
  let l = e.columns || [];
  t && l.every((s) => s.width === void 0) && (l = []);
  const n = (s) => {
    const r = {
      key: `${e.tableLayout}_${s.id}`,
      style: {},
      name: void 0
    };
    return t ? r.style = {
      width: `${s.width}px`
    } : r.name = s.id, r;
  };
  return H("colgroup", {}, l.map((s) => H("col", n(s))));
}
zl.props = ["columns", "tableLayout"];
const Ra = () => {
  const e = E(), t = (r, i) => {
    const o = e.value;
    o && o.scrollTo(r, i);
  }, l = (r, i) => {
    const o = e.value;
    o && ft(i) && ["Top", "Left"].includes(r) && o[`setScroll${r}`](i);
  };
  return {
    scrollBarRef: e,
    scrollTo: t,
    setScrollTop: (r) => l("Top", r),
    setScrollLeft: (r) => l("Left", r)
  };
};
let La = 1;
const ka = ue({
  name: "ElTable",
  directives: {
    Mousewheel: So
  },
  components: {
    TableHeader: fa,
    TableBody: ga,
    TableFooter: Ca,
    ElScrollbar: rl,
    hColgroup: zl
  },
  props: Ea,
  emits: [
    "select",
    "select-all",
    "selection-change",
    "cell-mouse-enter",
    "cell-mouse-leave",
    "cell-contextmenu",
    "cell-click",
    "cell-dblclick",
    "row-click",
    "row-contextmenu",
    "row-dblclick",
    "header-click",
    "header-contextmenu",
    "sort-change",
    "filter-change",
    "current-change",
    "header-dragend",
    "expand-change"
  ],
  setup(e) {
    const { t } = vl(), l = ae("table"), n = te();
    dl(Ce, n);
    const s = Jo(n, e);
    n.store = s;
    const r = new ta({
      store: n.store,
      table: n,
      fit: e.fit,
      showHeader: e.showHeader
    });
    n.layout = r;
    const i = F(() => (s.states.data.value || []).length === 0), {
      setCurrentRow: o,
      getSelectionRows: a,
      toggleRowSelection: d,
      clearSelection: u,
      clearFilter: h,
      toggleAllSelection: b,
      toggleRowExpansion: S,
      clearSort: c,
      sort: p
    } = wa(s), {
      isHidden: y,
      renderExpanded: m,
      setDragVisible: v,
      isGroup: C,
      handleMouseLeave: f,
      handleHeaderFooterMousewheel: g,
      tableSize: R,
      emptyBlockStyle: x,
      handleFixedMousewheel: k,
      resizeProxyVisible: M,
      bodyWidth: I,
      resizeState: V,
      doLayout: W,
      tableBodyStyles: K,
      tableLayout: j,
      scrollbarViewStyle: X,
      tableInnerStyle: _,
      scrollbarStyle: de
    } = Sa(e, r, s, n), { scrollBarRef: J, scrollTo: w, setScrollLeft: L, setScrollTop: B } = Ra(), U = nt(W, 50), Y = `${l.namespace.value}-table_${La++}`;
    n.tableId = Y, n.state = {
      isGroup: C,
      resizeState: V,
      doLayout: W,
      debouncedUpdateLayout: U
    };
    const q = F(() => e.sumText || t("el.table.sumText")), re = F(() => e.emptyText || t("el.table.emptyText")), Q = F(() => Il(s.states.originColumns.value)[0]);
    return xa(n), {
      ns: l,
      layout: r,
      store: s,
      columns: Q,
      handleHeaderFooterMousewheel: g,
      handleMouseLeave: f,
      tableId: Y,
      tableSize: R,
      isHidden: y,
      isEmpty: i,
      renderExpanded: m,
      resizeProxyVisible: M,
      resizeState: V,
      isGroup: C,
      bodyWidth: I,
      tableBodyStyles: K,
      emptyBlockStyle: x,
      debouncedUpdateLayout: U,
      handleFixedMousewheel: k,
      setCurrentRow: o,
      getSelectionRows: a,
      toggleRowSelection: d,
      clearSelection: u,
      clearFilter: h,
      toggleAllSelection: b,
      toggleRowExpansion: S,
      clearSort: c,
      doLayout: W,
      sort: p,
      t,
      setDragVisible: v,
      context: n,
      computedSumText: q,
      computedEmptyText: re,
      tableLayout: j,
      scrollbarViewStyle: X,
      tableInnerStyle: _,
      scrollbarStyle: de,
      scrollBarRef: J,
      scrollTo: w,
      setScrollLeft: L,
      setScrollTop: B
    };
  }
}), Na = ["data-prefix"], Oa = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
function Fa(e, t, l, n, s, r) {
  const i = pe("hColgroup"), o = pe("table-header"), a = pe("table-body"), d = pe("table-footer"), u = pe("el-scrollbar"), h = fl("mousewheel");
  return z(), G("div", {
    ref: "tableWrapper",
    class: P([
      {
        [e.ns.m("fit")]: e.fit,
        [e.ns.m("striped")]: e.stripe,
        [e.ns.m("border")]: e.border || e.isGroup,
        [e.ns.m("hidden")]: e.isHidden,
        [e.ns.m("group")]: e.isGroup,
        [e.ns.m("fluid-height")]: e.maxHeight,
        [e.ns.m("scrollable-x")]: e.layout.scrollX.value,
        [e.ns.m("scrollable-y")]: e.layout.scrollY.value,
        [e.ns.m("enable-row-hover")]: !e.store.states.isComplex.value,
        [e.ns.m("enable-row-transition")]: (e.store.states.data.value || []).length !== 0 && (e.store.states.data.value || []).length < 100,
        "has-footer": e.showSummary
      },
      e.ns.m(e.tableSize),
      e.className,
      e.ns.b(),
      e.ns.m(`layout-${e.tableLayout}`)
    ]),
    style: ke(e.style),
    "data-prefix": e.ns.namespace.value,
    onMouseleave: t[0] || (t[0] = (...b) => e.handleMouseLeave && e.handleMouseLeave(...b))
  }, [
    le("div", {
      class: P(e.ns.e("inner-wrapper")),
      style: ke(e.tableInnerStyle)
    }, [
      le("div", Oa, [
        ye(e.$slots, "default")
      ], 512),
      e.showHeader && e.tableLayout === "fixed" ? Re((z(), G("div", {
        key: 0,
        ref: "headerWrapper",
        class: P(e.ns.e("header-wrapper"))
      }, [
        le("table", {
          ref: "tableHeader",
          class: P(e.ns.e("header")),
          style: ke(e.tableBodyStyles),
          border: "0",
          cellpadding: "0",
          cellspacing: "0"
        }, [
          ve(i, {
            columns: e.store.states.columns.value,
            "table-layout": e.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          ve(o, {
            ref: "tableHeaderRef",
            border: e.border,
            "default-sort": e.defaultSort,
            store: e.store,
            onSetDragVisible: e.setDragVisible
          }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])
        ], 6)
      ], 2)), [
        [h, e.handleHeaderFooterMousewheel]
      ]) : be("v-if", !0),
      le("div", {
        ref: "bodyWrapper",
        class: P(e.ns.e("body-wrapper"))
      }, [
        ve(u, {
          ref: "scrollBarRef",
          "view-style": e.scrollbarViewStyle,
          "wrap-style": e.scrollbarStyle,
          always: e.scrollbarAlwaysOn
        }, {
          default: ge(() => [
            le("table", {
              ref: "tableBody",
              class: P(e.ns.e("body")),
              cellspacing: "0",
              cellpadding: "0",
              border: "0",
              style: ke({
                width: e.bodyWidth,
                tableLayout: e.tableLayout
              })
            }, [
              ve(i, {
                columns: e.store.states.columns.value,
                "table-layout": e.tableLayout
              }, null, 8, ["columns", "table-layout"]),
              e.showHeader && e.tableLayout === "auto" ? (z(), xe(o, {
                key: 0,
                ref: "tableHeaderRef",
                class: P(e.ns.e("body-header")),
                border: e.border,
                "default-sort": e.defaultSort,
                store: e.store,
                onSetDragVisible: e.setDragVisible
              }, null, 8, ["class", "border", "default-sort", "store", "onSetDragVisible"])) : be("v-if", !0),
              ve(a, {
                context: e.context,
                highlight: e.highlightCurrentRow,
                "row-class-name": e.rowClassName,
                "tooltip-effect": e.tooltipEffect,
                "tooltip-options": e.tooltipOptions,
                "row-style": e.rowStyle,
                store: e.store,
                stripe: e.stripe
              }, null, 8, ["context", "highlight", "row-class-name", "tooltip-effect", "tooltip-options", "row-style", "store", "stripe"]),
              e.showSummary && e.tableLayout === "auto" ? (z(), xe(d, {
                key: 1,
                class: P(e.ns.e("body-footer")),
                border: e.border,
                "default-sort": e.defaultSort,
                store: e.store,
                "sum-text": e.computedSumText,
                "summary-method": e.summaryMethod
              }, null, 8, ["class", "border", "default-sort", "store", "sum-text", "summary-method"])) : be("v-if", !0)
            ], 6),
            e.isEmpty ? (z(), G("div", {
              key: 0,
              ref: "emptyBlock",
              style: ke(e.emptyBlockStyle),
              class: P(e.ns.e("empty-block"))
            }, [
              le("span", {
                class: P(e.ns.e("empty-text"))
              }, [
                ye(e.$slots, "empty", {}, () => [
                  ot(Ee(e.computedEmptyText), 1)
                ])
              ], 2)
            ], 6)) : be("v-if", !0),
            e.$slots.append ? (z(), G("div", {
              key: 1,
              ref: "appendWrapper",
              class: P(e.ns.e("append-wrapper"))
            }, [
              ye(e.$slots, "append")
            ], 2)) : be("v-if", !0)
          ]),
          _: 3
        }, 8, ["view-style", "wrap-style", "always"])
      ], 2),
      e.showSummary && e.tableLayout === "fixed" ? Re((z(), G("div", {
        key: 1,
        ref: "footerWrapper",
        class: P(e.ns.e("footer-wrapper"))
      }, [
        le("table", {
          class: P(e.ns.e("footer")),
          cellspacing: "0",
          cellpadding: "0",
          border: "0",
          style: ke(e.tableBodyStyles)
        }, [
          ve(i, {
            columns: e.store.states.columns.value,
            "table-layout": e.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          ve(d, {
            border: e.border,
            "default-sort": e.defaultSort,
            store: e.store,
            "sum-text": e.computedSumText,
            "summary-method": e.summaryMethod
          }, null, 8, ["border", "default-sort", "store", "sum-text", "summary-method"])
        ], 6)
      ], 2)), [
        [Kt, !e.isEmpty],
        [h, e.handleHeaderFooterMousewheel]
      ]) : be("v-if", !0),
      e.border || e.isGroup ? (z(), G("div", {
        key: 2,
        class: P(e.ns.e("border-left-patch"))
      }, null, 2)) : be("v-if", !0)
    ], 6),
    Re(le("div", {
      ref: "resizeProxy",
      class: P(e.ns.e("column-resize-proxy"))
    }, null, 2), [
      [Kt, e.resizeProxyVisible]
    ])
  ], 46, Na);
}
var Ma = /* @__PURE__ */ De(ka, [["render", Fa], ["__file", "table.vue"]]);
const Wa = {
  selection: "table-column--selection",
  expand: "table__expand-column"
}, Aa = {
  default: {
    order: ""
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  }
}, Ta = (e) => Wa[e] || "", Ha = {
  selection: {
    renderHeader({ store: e, column: t }) {
      function l() {
        return e.states.data.value && e.states.data.value.length === 0;
      }
      return H(Ae, {
        disabled: l(),
        size: e.states.tableSize.value,
        indeterminate: e.states.selection.value.length > 0 && !e.states.isAllSelected.value,
        "onUpdate:modelValue": e.toggleAllSelection,
        modelValue: e.states.isAllSelected.value,
        ariaLabel: t.label
      });
    },
    renderCell({
      row: e,
      column: t,
      store: l,
      $index: n
    }) {
      return H(Ae, {
        disabled: t.selectable ? !t.selectable.call(null, e, n) : !1,
        size: l.states.tableSize.value,
        onChange: () => {
          l.commit("rowSelectedChanged", e);
        },
        onClick: (s) => s.stopPropagation(),
        modelValue: l.isSelected(e),
        ariaLabel: t.label
      });
    },
    sortable: !1,
    resizable: !1
  },
  index: {
    renderHeader({ column: e }) {
      return e.label || "#";
    },
    renderCell({
      column: e,
      $index: t
    }) {
      let l = t + 1;
      const n = e.index;
      return typeof n == "number" ? l = t + n : typeof n == "function" && (l = n(t)), H("div", {}, [l]);
    },
    sortable: !1
  },
  expand: {
    renderHeader({ column: e }) {
      return e.label || "";
    },
    renderCell({
      row: e,
      store: t,
      expanded: l
    }) {
      const { ns: n } = t, s = [n.e("expand-icon")];
      return l && s.push(n.em("expand-icon", "expanded")), H("div", {
        class: s,
        onClick: function(i) {
          i.stopPropagation(), t.toggleRowExpansion(e);
        }
      }, {
        default: () => [
          H(Mt, null, {
            default: () => [H(ol)]
          })
        ]
      });
    },
    sortable: !1,
    resizable: !1
  }
};
function $a({
  row: e,
  column: t,
  $index: l
}) {
  var n;
  const s = t.property, r = s && Gn(e, s).value;
  return t && t.formatter ? t.formatter(e, t, r, l) : ((n = r == null ? void 0 : r.toString) == null ? void 0 : n.call(r)) || "";
}
function Pa({
  row: e,
  treeNode: t,
  store: l
}, n = !1) {
  const { ns: s } = l;
  if (!t)
    return n ? [
      H("span", {
        class: s.e("placeholder")
      })
    ] : null;
  const r = [], i = function(o) {
    o.stopPropagation(), !t.loading && l.loadOrToggle(e);
  };
  if (t.indent && r.push(H("span", {
    class: s.e("indent"),
    style: { "padding-left": `${t.indent}px` }
  })), typeof t.expanded == "boolean" && !t.noLazyChildren) {
    const o = [
      s.e("expand-icon"),
      t.expanded ? s.em("expand-icon", "expanded") : ""
    ];
    let a = ol;
    t.loading && (a = yn), r.push(H("div", {
      class: o,
      onClick: i
    }, {
      default: () => [
        H(Mt, { class: { [s.is("loading")]: t.loading } }, {
          default: () => [H(a)]
        })
      ]
    }));
  } else
    r.push(H("span", {
      class: s.e("placeholder")
    }));
  return r;
}
function el(e, t) {
  return e.reduce((l, n) => (l[n] = n, l), t);
}
function Ba(e, t) {
  const l = te();
  return {
    registerComplexWatchers: () => {
      const r = ["fixed"], i = {
        realWidth: "width",
        realMinWidth: "minWidth"
      }, o = el(r, i);
      Object.keys(o).forEach((a) => {
        const d = i[a];
        Ie(t, d) && ie(() => t[d], (u) => {
          let h = u;
          d === "width" && a === "realWidth" && (h = Ht(u)), d === "minWidth" && a === "realMinWidth" && (h = Al(u)), l.columnConfig.value[d] = h, l.columnConfig.value[a] = h;
          const b = d === "fixed";
          e.value.store.scheduleLayout(b);
        });
      });
    },
    registerNormalWatchers: () => {
      const r = [
        "label",
        "filters",
        "filterMultiple",
        "filteredValue",
        "sortable",
        "index",
        "formatter",
        "className",
        "labelClassName",
        "filterClassName",
        "showOverflowTooltip"
      ], i = {
        property: "prop",
        align: "realAlign",
        headerAlign: "realHeaderAlign"
      }, o = el(r, i);
      Object.keys(o).forEach((a) => {
        const d = i[a];
        Ie(t, d) && ie(() => t[d], (u) => {
          l.columnConfig.value[a] = u;
        });
      });
    }
  };
}
function Va(e, t, l) {
  const n = te(), s = E(""), r = E(!1), i = E(), o = E(), a = ae("table");
  Pe(() => {
    i.value = e.align ? `is-${e.align}` : null, i.value;
  }), Pe(() => {
    o.value = e.headerAlign ? `is-${e.headerAlign}` : i.value, o.value;
  });
  const d = F(() => {
    let f = n.vnode.vParent || n.parent;
    for (; f && !f.tableId && !f.columnId; )
      f = f.vnode.vParent || f.parent;
    return f;
  }), u = F(() => {
    const { store: f } = n.parent;
    if (!f)
      return !1;
    const { treeData: g } = f.states, R = g.value;
    return R && Object.keys(R).length > 0;
  }), h = E(Ht(e.width)), b = E(Al(e.minWidth)), S = (f) => (h.value && (f.width = h.value), b.value && (f.minWidth = b.value), !h.value && b.value && (f.width = void 0), f.minWidth || (f.minWidth = 80), f.realWidth = Number(f.width === void 0 ? f.minWidth : f.width), f), c = (f) => {
    const g = f.type, R = Ha[g] || {};
    Object.keys(R).forEach((k) => {
      const M = R[k];
      k !== "className" && M !== void 0 && (f[k] = M);
    });
    const x = Ta(g);
    if (x) {
      const k = `${O(a.namespace)}-${x}`;
      f.className = f.className ? `${f.className} ${k}` : k;
    }
    return f;
  }, p = (f) => {
    Array.isArray(f) ? f.forEach((R) => g(R)) : g(f);
    function g(R) {
      var x;
      ((x = R == null ? void 0 : R.type) == null ? void 0 : x.name) === "ElTableColumn" && (R.vParent = n);
    }
  };
  return {
    columnId: s,
    realAlign: i,
    isSubColumn: r,
    realHeaderAlign: o,
    columnOrTableParent: d,
    setColumnWidth: S,
    setColumnForcedProps: c,
    setColumnRenders: (f) => {
      e.renderHeader ? Ot("TableColumn", "Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.") : f.type !== "selection" && (f.renderHeader = (R) => (n.columnConfig.value.label, ye(t, "header", R, () => [f.label]))), t["filter-icon"] && (f.renderFilterIcon = (R) => ye(t, "filter-icon", R));
      let g = f.renderCell;
      return f.type === "expand" ? (f.renderCell = (R) => H("div", {
        class: "cell"
      }, [g(R)]), l.value.renderExpanded = (R) => t.default ? t.default(R) : t.default) : (g = g || $a, f.renderCell = (R) => {
        let x = null;
        if (t.default) {
          const K = t.default(R);
          x = K.some((j) => j.type !== Ln) ? K : g(R);
        } else
          x = g(R);
        const { columns: k } = l.value.store.states, M = k.value.findIndex((K) => K.type === "default"), I = u.value && R.cellIndex === M, V = Pa(R, I), W = {
          class: "cell",
          style: {}
        };
        return f.showOverflowTooltip && (W.class = `${W.class} ${O(a.namespace)}-tooltip`, W.style = {
          width: `${(R.column.realWidth || Number(R.column.width)) - 1}px`
        }), p(x), H("div", W, [V, x]);
      }), f;
    },
    getPropsData: (...f) => f.reduce((g, R) => (Array.isArray(R) && R.forEach((x) => {
      g[x] = e[x];
    }), g), {}),
    getColumnElIndex: (f, g) => Array.prototype.indexOf.call(f, g),
    updateColumnOrder: () => {
      l.value.store.commit("updateColumnOrder", n.columnConfig.value);
    }
  };
}
var Ia = {
  type: {
    type: String,
    default: "default"
  },
  label: String,
  className: String,
  labelClassName: String,
  property: String,
  prop: String,
  width: {
    type: [String, Number],
    default: ""
  },
  minWidth: {
    type: [String, Number],
    default: ""
  },
  renderHeader: Function,
  sortable: {
    type: [Boolean, String],
    default: !1
  },
  sortMethod: Function,
  sortBy: [String, Function, Array],
  resizable: {
    type: Boolean,
    default: !0
  },
  columnKey: String,
  align: String,
  headerAlign: String,
  showOverflowTooltip: {
    type: [Boolean, Object],
    default: void 0
  },
  fixed: [Boolean, String],
  formatter: Function,
  selectable: Function,
  reserveSelection: Boolean,
  filterMethod: Function,
  filteredValue: Array,
  filters: Array,
  filterPlacement: String,
  filterMultiple: {
    type: Boolean,
    default: !0
  },
  filterClassName: String,
  index: [Number, Function],
  sortOrders: {
    type: Array,
    default: () => ["ascending", "descending", null],
    validator: (e) => e.every((t) => ["ascending", "descending", null].includes(t))
  }
};
let za = 1;
var Kl = ue({
  name: "ElTableColumn",
  components: {
    ElCheckbox: Ae
  },
  props: Ia,
  setup(e, { slots: t }) {
    const l = te(), n = E({}), s = F(() => {
      let C = l.parent;
      for (; C && !C.tableId; )
        C = C.parent;
      return C;
    }), { registerNormalWatchers: r, registerComplexWatchers: i } = Ba(s, e), {
      columnId: o,
      isSubColumn: a,
      realHeaderAlign: d,
      columnOrTableParent: u,
      setColumnWidth: h,
      setColumnForcedProps: b,
      setColumnRenders: S,
      getPropsData: c,
      getColumnElIndex: p,
      realAlign: y,
      updateColumnOrder: m
    } = Va(e, t, s), v = u.value;
    o.value = `${v.tableId || v.columnId}_column_${za++}`, hl(() => {
      a.value = s.value !== v;
      const C = e.type || "default", f = e.sortable === "" ? !0 : e.sortable, g = Ze(e.showOverflowTooltip) ? v.props.showOverflowTooltip : e.showOverflowTooltip, R = {
        ...Aa[C],
        id: o.value,
        type: C,
        property: e.prop || e.property,
        align: y,
        headerAlign: d,
        showOverflowTooltip: g,
        filterable: e.filters || e.filterMethod,
        filteredValue: [],
        filterPlacement: "",
        filterClassName: "",
        isColumnGroup: !1,
        isSubColumn: !1,
        filterOpened: !1,
        sortable: f,
        index: e.index,
        rawColumnKey: l.vnode.key
      };
      let V = c([
        "columnKey",
        "label",
        "className",
        "labelClassName",
        "type",
        "renderHeader",
        "formatter",
        "fixed",
        "resizable"
      ], ["sortMethod", "sortBy", "sortOrders"], ["selectable", "reserveSelection"], [
        "filterMethod",
        "filters",
        "filterMultiple",
        "filterOpened",
        "filteredValue",
        "filterPlacement",
        "filterClassName"
      ]);
      V = Ko(R, V), V = jo(S, h, b)(V), n.value = V, r(), i();
    }), je(() => {
      var C;
      const f = u.value, g = a.value ? f.vnode.el.children : (C = f.refs.hiddenColumns) == null ? void 0 : C.children, R = () => p(g || [], l.vnode.el);
      n.value.getColumnIndex = R, R() > -1 && s.value.store.commit("insertColumn", n.value, a.value ? f.columnConfig.value : null, m);
    }), kn(() => {
      n.value.getColumnIndex() > -1 && s.value.store.commit("removeColumn", n.value, a.value ? v.columnConfig.value : null, m);
    }), l.columnId = o.value, l.columnConfig = n;
  },
  render() {
    var e, t, l;
    try {
      const n = (t = (e = this.$slots).default) == null ? void 0 : t.call(e, {
        row: {},
        column: {},
        $index: -1
      }), s = [];
      if (Array.isArray(n))
        for (const i of n)
          ((l = i.type) == null ? void 0 : l.name) === "ElTableColumn" || i.shapeFlag & 2 ? s.push(i) : i.type === lt && Array.isArray(i.children) && i.children.forEach((o) => {
            (o == null ? void 0 : o.patchFlag) !== 1024 && !ct(o == null ? void 0 : o.children) && s.push(o);
          });
      return H("div", s);
    } catch {
      return H("div", []);
    }
  }
});
const Ka = nl(Ma, {
  TableColumn: Kl
});
Ft(Kl);
const Da = /* @__PURE__ */ ue({
  __name: "zs-table",
  setup(e, { expose: t }) {
    const l = E(), n = {
      popperClass: "ks-table-tooltip"
    };
    return t({
      table: l
    }), (s, r) => {
      const i = Ka;
      return z(), xe(i, Nn({
        ref_key: "table",
        ref: l,
        stripe: "",
        "show-overflow-tooltip": "",
        "tooltip-options": n
      }, s.$attrs), {
        empty: ge(() => [
          ve(On)
        ]),
        default: ge(() => [
          ye(s.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 16);
    };
  }
}), cs = /* @__PURE__ */ Yn(Da, [["__scopeId", "data-v-3ff8f9b1"]]);
export {
  cs as default
};
