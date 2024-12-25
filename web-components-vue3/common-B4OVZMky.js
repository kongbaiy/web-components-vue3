import { defineComponent as $, watch as yt, renderSlot as De, computed as P, openBlock as U, createElementBlock as ve, normalizeClass as j, unref as S, createVNode as pe, Transition as Ue, withCtx as Q, withDirectives as je, createElementVNode as Ce, normalizeStyle as gt, toDisplayString as bt, vShow as Ie, ref as Y, reactive as Qt, h as W, createApp as Yt, toRefs as en, nextTick as wt, isRef as tn, shallowReactive as nn, onMounted as sn, createBlock as G, createCommentVNode as se, resolveDynamicComponent as rn, Fragment as on, withModifiers as an, isVNode as Et, render as We } from "vue";
import { c as Me, d as F, u as ln, B as Oe, k as Ge, _ as St, w as cn, o as ce, z as ze, f as ue, P as X, n as Xe, x as Rt, Q as un, E as Ze, s as fn, j as Ae, R as dn, h as pn, T as mn } from "./base-KIYEtT4d.js";
import { p as hn, u as Tt } from "./use-global-config-DzqEFyMH.js";
import { a as yn, u as gn } from "./index-nT5oH0pN.js";
import { u as bn, a as Qe } from "./index-BDnm0u8X.js";
import { m as wn } from "./typescript-BpuhIBuJ.js";
import { i as En, T as Ye, a as Sn } from "./icon-C_1Mywq7.js";
import { E as Rn } from "./aria-CxTrhz24.js";
import { a as Tn } from "./index-BLf2zVtV.js";
const vn = Me({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: F(Object)
  },
  size: bn,
  button: {
    type: F(Object)
  },
  experimentalFeatures: {
    type: F(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: F(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Tn
}), xe = {};
$({
  name: "ElConfigProvider",
  props: vn,
  setup(e, { slots: t }) {
    yt(() => e.message, (s) => {
      Object.assign(xe, s ?? {});
    }, { immediate: !0, deep: !0 });
    const n = hn(e);
    return () => De(t, "default", { config: n == null ? void 0 : n.value });
  }
});
const Cn = Me({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  },
  showZero: {
    type: Boolean,
    default: !0
  },
  color: String,
  dotStyle: {
    type: F([String, Object, Array])
  },
  badgeStyle: {
    type: F([String, Object, Array])
  },
  offset: {
    type: F(Array),
    default: [0, 0]
  },
  dotClass: {
    type: String
  },
  badgeClass: {
    type: String
  }
}), On = ["textContent"], An = $({
  name: "ElBadge"
}), xn = /* @__PURE__ */ $({
  ...An,
  props: Cn,
  setup(e, { expose: t }) {
    const n = e, s = ln("badge"), r = P(() => n.isDot ? "" : Oe(n.value) && Oe(n.max) ? n.max < n.value ? `${n.max}+` : n.value === 0 && !n.showZero ? "" : `${n.value}` : `${n.value}`), o = P(() => {
      var i, l, f, c, u, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: Ge(-((l = (i = n.offset) == null ? void 0 : i[0]) != null ? l : 0)),
          marginTop: Ge((c = (f = n.offset) == null ? void 0 : f[1]) != null ? c : 0)
        },
        (u = n.dotStyle) != null ? u : {},
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return Qe({
      from: "dot-style",
      replacement: "badge-style",
      version: "2.8.0",
      scope: "el-badge",
      ref: "https://element-plus.org/en-US/component/badge.html"
    }, P(() => !!n.dotStyle)), Qe({
      from: "dot-class",
      replacement: "badge-class",
      version: "2.8.0",
      scope: "el-badge",
      ref: "https://element-plus.org/en-US/component/badge.html"
    }, P(() => !!n.dotClass)), t({
      content: r
    }), (i, l) => (U(), ve("div", {
      class: j(S(s).b())
    }, [
      De(i.$slots, "default"),
      pe(Ue, {
        name: `${S(s).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: Q(() => [
          je(Ce("sup", {
            class: j([
              S(s).e("content"),
              S(s).em("content", i.type),
              S(s).is("fixed", !!i.$slots.default),
              S(s).is("dot", i.isDot),
              i.dotClass,
              i.badgeClass
            ]),
            style: gt(S(o)),
            textContent: bt(S(r))
          }, null, 14, On), [
            [Ie, !i.hidden && (S(r) || i.isDot)]
          ])
        ]),
        _: 1
      }, 8, ["name"])
    ], 2));
  }
});
var Nn = /* @__PURE__ */ St(xn, [["__file", "badge.vue"]]);
const _n = cn(Nn);
function Pn(e) {
  let t;
  const n = Y(!1), s = Qt({
    ...e,
    originalPosition: "",
    originalOverflow: "",
    visible: !1
  });
  function r(h) {
    s.text = h;
  }
  function o() {
    const h = s.parent, w = d.ns;
    if (!h.vLoadingAddClassList) {
      let p = h.getAttribute("loading-number");
      p = Number.parseInt(p) - 1, p ? h.setAttribute("loading-number", p.toString()) : (ce(h, w.bm("parent", "relative")), h.removeAttribute("loading-number")), ce(h, w.bm("parent", "hidden"));
    }
    i(), u.unmount();
  }
  function i() {
    var h, w;
    (w = (h = d.$el) == null ? void 0 : h.parentNode) == null || w.removeChild(d.$el);
  }
  function l() {
    var h;
    e.beforeClose && !e.beforeClose() || (n.value = !0, clearTimeout(t), t = window.setTimeout(f, 400), s.visible = !1, (h = e.closed) == null || h.call(e));
  }
  function f() {
    if (!n.value)
      return;
    const h = s.parent;
    n.value = !1, h.vLoadingAddClassList = void 0, o();
  }
  const c = $({
    name: "ElLoading",
    setup(h, { expose: w }) {
      const { ns: p, zIndex: g } = Tt("loading");
      return w({
        ns: p,
        zIndex: g
      }), () => {
        const m = s.spinner || s.svg, T = W("svg", {
          class: "circular",
          viewBox: s.svgViewBox ? s.svgViewBox : "0 0 50 50",
          ...m ? { innerHTML: m } : {}
        }, [
          W("circle", {
            class: "path",
            cx: "25",
            cy: "25",
            r: "20",
            fill: "none"
          })
        ]), v = s.text ? W("p", { class: p.b("text") }, [s.text]) : void 0;
        return W(Ue, {
          name: p.b("fade"),
          onAfterLeave: f
        }, {
          default: Q(() => [
            je(pe("div", {
              style: {
                backgroundColor: s.background || ""
              },
              class: [
                p.b("mask"),
                s.customClass,
                s.fullscreen ? "is-fullscreen" : ""
              ]
            }, [
              W("div", {
                class: p.b("spinner")
              }, [T, v])
            ]), [[Ie, s.visible]])
          ])
        });
      };
    }
  }), u = Yt(c), d = u.mount(document.createElement("div"));
  return {
    ...en(s),
    setText: r,
    removeElLoadingChild: i,
    close: l,
    handleAfterLeave: f,
    vm: d,
    get $el() {
      return d.$el;
    }
  };
}
let re;
const Ln = function(e = {}) {
  if (!ze)
    return;
  const t = Bn(e);
  if (t.fullscreen && re)
    return re;
  const n = Pn({
    ...t,
    closed: () => {
      var r;
      (r = t.closed) == null || r.call(t), t.fullscreen && (re = void 0);
    }
  });
  kn(t, t.parent, n), et(t, t.parent, n), t.parent.vLoadingAddClassList = () => et(t, t.parent, n);
  let s = t.parent.getAttribute("loading-number");
  return s ? s = `${Number.parseInt(s) + 1}` : s = "1", t.parent.setAttribute("loading-number", s), t.parent.appendChild(n.$el), wt(() => n.visible.value = t.visible), t.fullscreen && (re = n), n;
}, Bn = (e) => {
  var t, n, s, r;
  let o;
  return ue(e.target) ? o = (t = document.querySelector(e.target)) != null ? t : document.body : o = e.target || document.body, {
    parent: o === document.body || e.body ? document.body : o,
    background: e.background || "",
    svg: e.svg || "",
    svgViewBox: e.svgViewBox || "",
    spinner: e.spinner || !1,
    text: e.text || "",
    fullscreen: o === document.body && ((n = e.fullscreen) != null ? n : !0),
    lock: (s = e.lock) != null ? s : !1,
    customClass: e.customClass || "",
    visible: (r = e.visible) != null ? r : !0,
    beforeClose: e.beforeClose,
    closed: e.closed,
    target: o
  };
}, kn = async (e, t, n) => {
  const { nextZIndex: s } = n.vm.zIndex || n.vm._.exposed.zIndex, r = {};
  if (e.fullscreen)
    n.originalPosition.value = X(document.body, "position"), n.originalOverflow.value = X(document.body, "overflow"), r.zIndex = s();
  else if (e.parent === document.body) {
    n.originalPosition.value = X(document.body, "position"), await wt();
    for (const o of ["top", "left"]) {
      const i = o === "top" ? "scrollTop" : "scrollLeft";
      r[o] = `${e.target.getBoundingClientRect()[o] + document.body[i] + document.documentElement[i] - Number.parseInt(X(document.body, `margin-${o}`), 10)}px`;
    }
    for (const o of ["height", "width"])
      r[o] = `${e.target.getBoundingClientRect()[o]}px`;
  } else
    n.originalPosition.value = X(t, "position");
  for (const [o, i] of Object.entries(r))
    n.$el.style[o] = i;
}, et = (e, t, n) => {
  const s = n.vm.ns || n.vm._.exposed.ns;
  ["absolute", "fixed", "sticky"].includes(n.originalPosition.value) ? ce(t, s.bm("parent", "relative")) : Xe(t, s.bm("parent", "relative")), e.fullscreen && e.lock ? Xe(t, s.bm("parent", "hidden")) : ce(t, s.bm("parent", "hidden"));
}, ie = Symbol("ElLoading"), tt = (e, t) => {
  var n, s, r, o;
  const i = t.instance, l = (h) => Rt(t.value) ? t.value[h] : void 0, f = (h) => {
    const w = ue(h) && (i == null ? void 0 : i[h]) || h;
    return w && Y(w);
  }, c = (h) => f(l(h) || e.getAttribute(`element-loading-${un(h)}`)), u = (n = l("fullscreen")) != null ? n : t.modifiers.fullscreen, d = {
    text: c("text"),
    svg: c("svg"),
    svgViewBox: c("svgViewBox"),
    spinner: c("spinner"),
    background: c("background"),
    customClass: c("customClass"),
    fullscreen: u,
    target: (s = l("target")) != null ? s : u ? void 0 : e,
    body: (r = l("body")) != null ? r : t.modifiers.body,
    lock: (o = l("lock")) != null ? o : t.modifiers.lock
  };
  e[ie] = {
    options: d,
    instance: Ln(d)
  };
}, Fn = (e, t) => {
  for (const n of Object.keys(t))
    tn(t[n]) && (t[n].value = e[n]);
}, kr = {
  mounted(e, t) {
    t.value && tt(e, t);
  },
  updated(e, t) {
    const n = e[ie];
    t.oldValue !== t.value && (t.value && !t.oldValue ? tt(e, t) : t.value && t.oldValue ? Rt(t.value) && Fn(t.value, n.options) : n == null || n.instance.close());
  },
  unmounted(e) {
    var t;
    (t = e[ie]) == null || t.instance.close(), e[ie] = null;
  }
}, vt = ["success", "info", "warning", "error"], C = wn({
  customClass: "",
  center: !1,
  dangerouslyUseHTMLString: !1,
  duration: 3e3,
  icon: void 0,
  id: "",
  message: "",
  onClose: void 0,
  showClose: !1,
  type: "info",
  plain: !1,
  offset: 16,
  zIndex: 0,
  grouping: !1,
  repeatNum: 1,
  appendTo: ze ? document.body : void 0
}), Dn = Me({
  customClass: {
    type: String,
    default: C.customClass
  },
  center: {
    type: Boolean,
    default: C.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: C.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: C.duration
  },
  icon: {
    type: En,
    default: C.icon
  },
  id: {
    type: String,
    default: C.id
  },
  message: {
    type: F([
      String,
      Object,
      Function
    ]),
    default: C.message
  },
  onClose: {
    type: F(Function),
    default: C.onClose
  },
  showClose: {
    type: Boolean,
    default: C.showClose
  },
  type: {
    type: String,
    values: vt,
    default: C.type
  },
  plain: {
    type: Boolean,
    default: C.plain
  },
  offset: {
    type: Number,
    default: C.offset
  },
  zIndex: {
    type: Number,
    default: C.zIndex
  },
  grouping: {
    type: Boolean,
    default: C.grouping
  },
  repeatNum: {
    type: Number,
    default: C.repeatNum
  }
}), Un = {
  destroy: () => !0
}, L = nn([]), jn = (e) => {
  const t = L.findIndex((r) => r.id === e), n = L[t];
  let s;
  return t > 0 && (s = L[t - 1]), { current: n, prev: s };
}, In = (e) => {
  const { prev: t } = jn(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Mn = (e, t) => L.findIndex((s) => s.id === e) > 0 ? 16 : t, zn = ["id"], qn = ["innerHTML"], Hn = $({
  name: "ElMessage"
}), $n = /* @__PURE__ */ $({
  ...Hn,
  props: Dn,
  emits: Un,
  setup(e, { expose: t }) {
    const n = e, { Close: s } = Sn, { ns: r, zIndex: o } = Tt("message"), { currentZIndex: i, nextZIndex: l } = o, f = Y(), c = Y(!1), u = Y(0);
    let d;
    const h = P(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), w = P(() => {
      const E = n.type;
      return { [r.bm("icon", E)]: E && Ye[E] };
    }), p = P(() => n.icon || Ye[n.type] || ""), g = P(() => In(n.id)), m = P(() => Mn(n.id, n.offset) + g.value), T = P(() => u.value + m.value), v = P(() => ({
      top: `${m.value}px`,
      zIndex: i.value
    }));
    function b() {
      n.duration !== 0 && ({ stop: d } = fn(() => {
        N();
      }, n.duration));
    }
    function O() {
      d == null || d();
    }
    function N() {
      c.value = !1;
    }
    function _({ code: E }) {
      E === Rn.esc && N();
    }
    return sn(() => {
      b(), l(), c.value = !0;
    }), yt(() => n.repeatNum, () => {
      O(), b();
    }), yn(document, "keydown", _), gn(f, () => {
      u.value = f.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: T,
      close: N
    }), (E, q) => (U(), G(Ue, {
      name: S(r).b("fade"),
      onBeforeLeave: E.onClose,
      onAfterLeave: q[0] || (q[0] = (K) => E.$emit("destroy")),
      persisted: ""
    }, {
      default: Q(() => [
        je(Ce("div", {
          id: E.id,
          ref_key: "messageRef",
          ref: f,
          class: j([
            S(r).b(),
            { [S(r).m(E.type)]: E.type },
            S(r).is("center", E.center),
            S(r).is("closable", E.showClose),
            S(r).is("plain", E.plain),
            E.customClass
          ]),
          style: gt(S(v)),
          role: "alert",
          onMouseenter: O,
          onMouseleave: b
        }, [
          E.repeatNum > 1 ? (U(), G(S(_n), {
            key: 0,
            value: E.repeatNum,
            type: S(h),
            class: j(S(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : se("v-if", !0),
          S(p) ? (U(), G(S(Ze), {
            key: 1,
            class: j([S(r).e("icon"), S(w)])
          }, {
            default: Q(() => [
              (U(), G(rn(S(p))))
            ]),
            _: 1
          }, 8, ["class"])) : se("v-if", !0),
          De(E.$slots, "default", {}, () => [
            E.dangerouslyUseHTMLString ? (U(), ve(on, { key: 1 }, [
              se(" Caution here, message could've been compromised, never use user's input as message "),
              Ce("p", {
                class: j(S(r).e("content")),
                innerHTML: E.message
              }, null, 10, qn)
            ], 2112)) : (U(), ve("p", {
              key: 0,
              class: j(S(r).e("content"))
            }, bt(E.message), 3))
          ]),
          E.showClose ? (U(), G(S(Ze), {
            key: 2,
            class: j(S(r).e("closeBtn")),
            onClick: an(N, ["stop"])
          }, {
            default: Q(() => [
              pe(S(s))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : se("v-if", !0)
        ], 46, zn), [
          [Ie, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave"]));
  }
});
var Vn = /* @__PURE__ */ St($n, [["__file", "message.vue"]]);
let Jn = 1;
const Ct = (e) => {
  const t = !e || ue(e) || Et(e) || Ae(e) ? { message: e } : e, n = {
    ...C,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ue(n.appendTo)) {
    let s = document.querySelector(n.appendTo);
    dn(s) || (pn("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), s = document.body), n.appendTo = s;
  }
  return n;
}, Kn = (e) => {
  const t = L.indexOf(e);
  if (t === -1)
    return;
  L.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Wn = ({ appendTo: e, ...t }, n) => {
  const s = `message_${Jn++}`, r = t.onClose, o = document.createElement("div"), i = {
    ...t,
    id: s,
    onClose: () => {
      r == null || r(), Kn(u);
    },
    onDestroy: () => {
      We(null, o);
    }
  }, l = pe(Vn, i, Ae(i.message) || Et(i.message) ? {
    default: Ae(i.message) ? i.message : () => i.message
  } : null);
  l.appContext = n || H._context, We(l, o), e.appendChild(o.firstElementChild);
  const f = l.component, u = {
    id: s,
    vnode: l,
    vm: f,
    handler: {
      close: () => {
        f.exposed.visible.value = !1;
      }
    },
    props: l.component.props
  };
  return u;
}, H = (e = {}, t) => {
  if (!ze)
    return { close: () => {
    } };
  if (Oe(xe.max) && L.length >= xe.max)
    return { close: () => {
    } };
  const n = Ct(e);
  if (n.grouping && L.length) {
    const r = L.find(({ vnode: o }) => {
      var i;
      return ((i = o.props) == null ? void 0 : i.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  const s = Wn(n, t);
  return L.push(s), s.handler;
};
vt.forEach((e) => {
  H[e] = (t = {}, n) => {
    const s = Ct(t);
    return H({ ...s, type: e }, n);
  };
});
function Gn(e) {
  for (const t of L)
    (!e || e === t.props.type) && t.handler.close();
}
H.closeAll = Gn;
H._context = null;
const oe = mn(H, "$message");
function Ot(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Xn } = Object.prototype, { getPrototypeOf: qe } = Object, me = /* @__PURE__ */ ((e) => (t) => {
  const n = Xn.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), k = (e) => (e = e.toLowerCase(), (t) => me(t) === e), he = (e) => (t) => typeof t === e, { isArray: V } = Array, ee = he("undefined");
function Zn(e) {
  return e !== null && !ee(e) && e.constructor !== null && !ee(e.constructor) && x(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const At = k("ArrayBuffer");
function Qn(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && At(e.buffer), t;
}
const Yn = he("string"), x = he("function"), xt = he("number"), ye = (e) => e !== null && typeof e == "object", es = (e) => e === !0 || e === !1, ae = (e) => {
  if (me(e) !== "object")
    return !1;
  const t = qe(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, ts = k("Date"), ns = k("File"), ss = k("Blob"), rs = k("FileList"), os = (e) => ye(e) && x(e.pipe), is = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || x(e.append) && ((t = me(e)) === "formdata" || // detect form-data instance
  t === "object" && x(e.toString) && e.toString() === "[object FormData]"));
}, as = k("URLSearchParams"), [ls, cs, us, fs] = ["ReadableStream", "Request", "Response", "Headers"].map(k), ds = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function te(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let s, r;
  if (typeof e != "object" && (e = [e]), V(e))
    for (s = 0, r = e.length; s < r; s++)
      t.call(null, e[s], s, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let l;
    for (s = 0; s < i; s++)
      l = o[s], t.call(null, e[l], l, e);
  }
}
function Nt(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let s = n.length, r;
  for (; s-- > 0; )
    if (r = n[s], t === r.toLowerCase())
      return r;
  return null;
}
const I = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, _t = (e) => !ee(e) && e !== I;
function Ne() {
  const { caseless: e } = _t(this) && this || {}, t = {}, n = (s, r) => {
    const o = e && Nt(t, r) || r;
    ae(t[o]) && ae(s) ? t[o] = Ne(t[o], s) : ae(s) ? t[o] = Ne({}, s) : V(s) ? t[o] = s.slice() : t[o] = s;
  };
  for (let s = 0, r = arguments.length; s < r; s++)
    arguments[s] && te(arguments[s], n);
  return t;
}
const ps = (e, t, n, { allOwnKeys: s } = {}) => (te(t, (r, o) => {
  n && x(r) ? e[o] = Ot(r, n) : e[o] = r;
}, { allOwnKeys: s }), e), ms = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), hs = (e, t, n, s) => {
  e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, ys = (e, t, n, s) => {
  let r, o, i;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0; )
      i = r[o], (!s || s(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && qe(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, gs = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const s = e.indexOf(t, n);
  return s !== -1 && s === n;
}, bs = (e) => {
  if (!e) return null;
  if (V(e)) return e;
  let t = e.length;
  if (!xt(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, ws = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && qe(Uint8Array)), Es = (e, t) => {
  const s = (e && e[Symbol.iterator]).call(e);
  let r;
  for (; (r = s.next()) && !r.done; ) {
    const o = r.value;
    t.call(e, o[0], o[1]);
  }
}, Ss = (e, t) => {
  let n;
  const s = [];
  for (; (n = e.exec(t)) !== null; )
    s.push(n);
  return s;
}, Rs = k("HTMLFormElement"), Ts = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, s, r) {
    return s.toUpperCase() + r;
  }
), nt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), vs = k("RegExp"), Pt = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), s = {};
  te(n, (r, o) => {
    let i;
    (i = t(r, o, e)) !== !1 && (s[o] = i || r);
  }), Object.defineProperties(e, s);
}, Cs = (e) => {
  Pt(e, (t, n) => {
    if (x(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const s = e[n];
    if (x(s)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Os = (e, t) => {
  const n = {}, s = (r) => {
    r.forEach((o) => {
      n[o] = !0;
    });
  };
  return V(e) ? s(e) : s(String(e).split(t)), n;
}, As = () => {
}, xs = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, we = "abcdefghijklmnopqrstuvwxyz", st = "0123456789", Lt = {
  DIGIT: st,
  ALPHA: we,
  ALPHA_DIGIT: we + we.toUpperCase() + st
}, Ns = (e = 16, t = Lt.ALPHA_DIGIT) => {
  let n = "";
  const { length: s } = t;
  for (; e--; )
    n += t[Math.random() * s | 0];
  return n;
};
function _s(e) {
  return !!(e && x(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Ps = (e) => {
  const t = new Array(10), n = (s, r) => {
    if (ye(s)) {
      if (t.indexOf(s) >= 0)
        return;
      if (!("toJSON" in s)) {
        t[r] = s;
        const o = V(s) ? [] : {};
        return te(s, (i, l) => {
          const f = n(i, r + 1);
          !ee(f) && (o[l] = f);
        }), t[r] = void 0, o;
      }
    }
    return s;
  };
  return n(e, 0);
}, Ls = k("AsyncFunction"), Bs = (e) => e && (ye(e) || x(e)) && x(e.then) && x(e.catch), Bt = ((e, t) => e ? setImmediate : t ? ((n, s) => (I.addEventListener("message", ({ source: r, data: o }) => {
  r === I && o === n && s.length && s.shift()();
}, !1), (r) => {
  s.push(r), I.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  x(I.postMessage)
), ks = typeof queueMicrotask < "u" ? queueMicrotask.bind(I) : typeof process < "u" && process.nextTick || Bt, a = {
  isArray: V,
  isArrayBuffer: At,
  isBuffer: Zn,
  isFormData: is,
  isArrayBufferView: Qn,
  isString: Yn,
  isNumber: xt,
  isBoolean: es,
  isObject: ye,
  isPlainObject: ae,
  isReadableStream: ls,
  isRequest: cs,
  isResponse: us,
  isHeaders: fs,
  isUndefined: ee,
  isDate: ts,
  isFile: ns,
  isBlob: ss,
  isRegExp: vs,
  isFunction: x,
  isStream: os,
  isURLSearchParams: as,
  isTypedArray: ws,
  isFileList: rs,
  forEach: te,
  merge: Ne,
  extend: ps,
  trim: ds,
  stripBOM: ms,
  inherits: hs,
  toFlatObject: ys,
  kindOf: me,
  kindOfTest: k,
  endsWith: gs,
  toArray: bs,
  forEachEntry: Es,
  matchAll: Ss,
  isHTMLForm: Rs,
  hasOwnProperty: nt,
  hasOwnProp: nt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Pt,
  freezeMethods: Cs,
  toObjectSet: Os,
  toCamelCase: Ts,
  noop: As,
  toFiniteNumber: xs,
  findKey: Nt,
  global: I,
  isContextDefined: _t,
  ALPHABET: Lt,
  generateString: Ns,
  isSpecCompliantForm: _s,
  toJSONObject: Ps,
  isAsyncFn: Ls,
  isThenable: Bs,
  setImmediate: Bt,
  asap: ks
};
function y(e, t, n, s, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), s && (this.request = s), r && (this.response = r);
}
a.inherits(y, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const kt = y.prototype, Ft = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Ft[e] = { value: e };
});
Object.defineProperties(y, Ft);
Object.defineProperty(kt, "isAxiosError", { value: !0 });
y.from = (e, t, n, s, r, o) => {
  const i = Object.create(kt);
  return a.toFlatObject(e, i, function(f) {
    return f !== Error.prototype;
  }, (l) => l !== "isAxiosError"), y.call(i, e.message, t, n, s, r), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Fs = null;
function _e(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Dt(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function rt(e, t, n) {
  return e ? e.concat(t).map(function(r, o) {
    return r = Dt(r), !n && o ? "[" + r + "]" : r;
  }).join(n ? "." : "") : t;
}
function Ds(e) {
  return a.isArray(e) && !e.some(_e);
}
const Us = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ge(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, m) {
    return !a.isUndefined(m[g]);
  });
  const s = n.metaTokens, r = n.visitor || u, o = n.dots, i = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(r))
    throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null) return "";
    if (a.isDate(p))
      return p.toISOString();
    if (!f && a.isBlob(p))
      throw new y("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(p) || a.isTypedArray(p) ? f && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, g, m) {
    let T = p;
    if (p && !m && typeof p == "object") {
      if (a.endsWith(g, "{}"))
        g = s ? g : g.slice(0, -2), p = JSON.stringify(p);
      else if (a.isArray(p) && Ds(p) || (a.isFileList(p) || a.endsWith(g, "[]")) && (T = a.toArray(p)))
        return g = Dt(g), T.forEach(function(b, O) {
          !(a.isUndefined(b) || b === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? rt([g], O, o) : i === null ? g : g + "[]",
            c(b)
          );
        }), !1;
    }
    return _e(p) ? !0 : (t.append(rt(m, g, o), c(p)), !1);
  }
  const d = [], h = Object.assign(Us, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: _e
  });
  function w(p, g) {
    if (!a.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(p), a.forEach(p, function(T, v) {
        (!(a.isUndefined(T) || T === null) && r.call(
          t,
          T,
          a.isString(v) ? v.trim() : v,
          g,
          h
        )) === !0 && w(T, g ? g.concat(v) : [v]);
      }), d.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return w(e), t;
}
function ot(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(s) {
    return t[s];
  });
}
function He(e, t) {
  this._pairs = [], e && ge(e, this, t);
}
const Ut = He.prototype;
Ut.append = function(t, n) {
  this._pairs.push([t, n]);
};
Ut.toString = function(t) {
  const n = t ? function(s) {
    return t.call(this, s, ot);
  } : ot;
  return this._pairs.map(function(r) {
    return n(r[0]) + "=" + n(r[1]);
  }, "").join("&");
};
function js(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function jt(e, t, n) {
  if (!t)
    return e;
  const s = n && n.encode || js, r = n && n.serialize;
  let o;
  if (r ? o = r(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new He(t, n).toString(s), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class it {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, s) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(s) {
      s !== null && t(s);
    });
  }
}
const It = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Is = typeof URLSearchParams < "u" ? URLSearchParams : He, Ms = typeof FormData < "u" ? FormData : null, zs = typeof Blob < "u" ? Blob : null, qs = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Is,
    FormData: Ms,
    Blob: zs
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, $e = typeof window < "u" && typeof document < "u", Hs = ((e) => $e && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), $s = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Vs = $e && window.location.href || "http://localhost", Js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: $e,
  hasStandardBrowserEnv: Hs,
  hasStandardBrowserWebWorkerEnv: $s,
  origin: Vs
}, Symbol.toStringTag, { value: "Module" })), B = {
  ...Js,
  ...qs
};
function Ks(e, t) {
  return ge(e, new B.classes.URLSearchParams(), Object.assign({
    visitor: function(n, s, r, o) {
      return B.isNode && a.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Ws(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Gs(e) {
  const t = {}, n = Object.keys(e);
  let s;
  const r = n.length;
  let o;
  for (s = 0; s < r; s++)
    o = n[s], t[o] = e[o];
  return t;
}
function Mt(e) {
  function t(n, s, r, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i), f = o >= n.length;
    return i = !i && a.isArray(r) ? r.length : i, f ? (a.hasOwnProp(r, i) ? r[i] = [r[i], s] : r[i] = s, !l) : ((!r[i] || !a.isObject(r[i])) && (r[i] = []), t(n, s, r[i], o) && a.isArray(r[i]) && (r[i] = Gs(r[i])), !l);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (s, r) => {
      t(Ws(s), r, n, 0);
    }), n;
  }
  return null;
}
function Xs(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (n || JSON.stringify)(e);
}
const ne = {
  transitional: It,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const s = n.getContentType() || "", r = s.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return r ? JSON.stringify(Mt(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return Ks(t, this.formSerializer).toString();
      if ((l = a.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return ge(
          l ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return o || r ? (n.setContentType("application/json", !1), Xs(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || ne.transitional, s = n && n.forcedJSONParsing, r = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (s && !this.responseType || r)) {
      const i = !(n && n.silentJSONParsing) && r;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (i)
          throw l.name === "SyntaxError" ? y.from(l, y.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: B.classes.FormData,
    Blob: B.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ne.headers[e] = {};
});
const Zs = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Qs = (e) => {
  const t = {};
  let n, s, r;
  return e && e.split(`
`).forEach(function(i) {
    r = i.indexOf(":"), n = i.substring(0, r).trim().toLowerCase(), s = i.substring(r + 1).trim(), !(!n || t[n] && Zs[n]) && (n === "set-cookie" ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s);
  }), t;
}, at = Symbol("internals");
function Z(e) {
  return e && String(e).trim().toLowerCase();
}
function le(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(le) : String(e);
}
function Ys(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = n.exec(e); )
    t[s[1]] = s[2];
  return t;
}
const er = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ee(e, t, n, s, r) {
  if (a.isFunction(s))
    return s.call(this, t, n);
  if (r && (t = n), !!a.isString(t)) {
    if (a.isString(s))
      return t.indexOf(s) !== -1;
    if (a.isRegExp(s))
      return s.test(t);
  }
}
function tr(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function nr(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(e, s + n, {
      value: function(r, o, i) {
        return this[s].call(this, t, r, o, i);
      },
      configurable: !0
    });
  });
}
class A {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, s) {
    const r = this;
    function o(l, f, c) {
      const u = Z(f);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = a.findKey(r, u);
      (!d || r[d] === void 0 || c === !0 || c === void 0 && r[d] !== !1) && (r[d || f] = le(l));
    }
    const i = (l, f) => a.forEach(l, (c, u) => o(c, u, f));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (a.isString(t) && (t = t.trim()) && !er(t))
      i(Qs(t), n);
    else if (a.isHeaders(t))
      for (const [l, f] of t.entries())
        o(f, l, s);
    else
      t != null && o(n, t, s);
    return this;
  }
  get(t, n) {
    if (t = Z(t), t) {
      const s = a.findKey(this, t);
      if (s) {
        const r = this[s];
        if (!n)
          return r;
        if (n === !0)
          return Ys(r);
        if (a.isFunction(n))
          return n.call(this, r, s);
        if (a.isRegExp(n))
          return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Z(t), t) {
      const s = a.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!n || Ee(this, this[s], s, n)));
    }
    return !1;
  }
  delete(t, n) {
    const s = this;
    let r = !1;
    function o(i) {
      if (i = Z(i), i) {
        const l = a.findKey(s, i);
        l && (!n || Ee(s, s[l], l, n)) && (delete s[l], r = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), r;
  }
  clear(t) {
    const n = Object.keys(this);
    let s = n.length, r = !1;
    for (; s--; ) {
      const o = n[s];
      (!t || Ee(this, this[o], o, t, !0)) && (delete this[o], r = !0);
    }
    return r;
  }
  normalize(t) {
    const n = this, s = {};
    return a.forEach(this, (r, o) => {
      const i = a.findKey(s, o);
      if (i) {
        n[i] = le(r), delete n[o];
        return;
      }
      const l = t ? tr(o) : String(o).trim();
      l !== o && delete n[o], n[l] = le(r), s[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (s, r) => {
      s != null && s !== !1 && (n[r] = t && a.isArray(s) ? s.join(", ") : s);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const s = new this(t);
    return n.forEach((r) => s.set(r)), s;
  }
  static accessor(t) {
    const s = (this[at] = this[at] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function o(i) {
      const l = Z(i);
      s[l] || (nr(r, i), s[l] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
A.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(A.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[n] = s;
    }
  };
});
a.freezeMethods(A);
function Se(e, t) {
  const n = this || ne, s = t || n, r = A.from(s.headers);
  let o = s.data;
  return a.forEach(e, function(l) {
    o = l.call(n, o, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), o;
}
function zt(e) {
  return !!(e && e.__CANCEL__);
}
function J(e, t, n) {
  y.call(this, e ?? "canceled", y.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(J, y, {
  __CANCEL__: !0
});
function qt(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status) ? e(n) : t(new y(
    "Request failed with status code " + n.status,
    [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function sr(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function rr(e, t) {
  e = e || 10;
  const n = new Array(e), s = new Array(e);
  let r = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const c = Date.now(), u = s[o];
    i || (i = c), n[r] = f, s[r] = c;
    let d = o, h = 0;
    for (; d !== r; )
      h += n[d++], d = d % e;
    if (r = (r + 1) % e, r === o && (o = (o + 1) % e), c - i < t)
      return;
    const w = u && c - u;
    return w ? Math.round(h * 1e3 / w) : void 0;
  };
}
function or(e, t) {
  let n = 0, s = 1e3 / t, r, o;
  const i = (c, u = Date.now()) => {
    n = u, r = null, o && (clearTimeout(o), o = null), e.apply(null, c);
  };
  return [(...c) => {
    const u = Date.now(), d = u - n;
    d >= s ? i(c, u) : (r = c, o || (o = setTimeout(() => {
      o = null, i(r);
    }, s - d)));
  }, () => r && i(r)];
}
const fe = (e, t, n = 3) => {
  let s = 0;
  const r = rr(50, 250);
  return or((o) => {
    const i = o.loaded, l = o.lengthComputable ? o.total : void 0, f = i - s, c = r(f), u = i <= l;
    s = i;
    const d = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: f,
      rate: c || void 0,
      estimated: c && l && u ? (l - i) / c : void 0,
      event: o,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, n);
}, lt = (e, t) => {
  const n = e != null;
  return [(s) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: s
  }), t[1]];
}, ct = (e) => (...t) => a.asap(() => e(...t)), ir = B.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let s;
    function r(o) {
      let i = o;
      return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return s = r(window.location.href), function(i) {
      const l = a.isString(i) ? r(i) : i;
      return l.protocol === s.protocol && l.host === s.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), ar = B.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, s, r, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      a.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), a.isString(s) && i.push("path=" + s), a.isString(r) && i.push("domain=" + r), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function lr(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function cr(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ht(e, t) {
  return e && !lr(t) ? cr(e, t) : t;
}
const ut = (e) => e instanceof A ? { ...e } : e;
function z(e, t) {
  t = t || {};
  const n = {};
  function s(c, u, d) {
    return a.isPlainObject(c) && a.isPlainObject(u) ? a.merge.call({ caseless: d }, c, u) : a.isPlainObject(u) ? a.merge({}, u) : a.isArray(u) ? u.slice() : u;
  }
  function r(c, u, d) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(c))
        return s(void 0, c, d);
    } else return s(c, u, d);
  }
  function o(c, u) {
    if (!a.isUndefined(u))
      return s(void 0, u);
  }
  function i(c, u) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(c))
        return s(void 0, c);
    } else return s(void 0, u);
  }
  function l(c, u, d) {
    if (d in t)
      return s(c, u);
    if (d in e)
      return s(void 0, c);
  }
  const f = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (c, u) => r(ut(c), ut(u), !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = f[u] || r, h = d(e[u], t[u], u);
    a.isUndefined(h) && d !== l || (n[u] = h);
  }), n;
}
const $t = (e) => {
  const t = z({}, e);
  let { data: n, withXSRFToken: s, xsrfHeaderName: r, xsrfCookieName: o, headers: i, auth: l } = t;
  t.headers = i = A.from(i), t.url = jt(Ht(t.baseURL, t.url), e.params, e.paramsSerializer), l && i.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let f;
  if (a.isFormData(n)) {
    if (B.hasStandardBrowserEnv || B.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((f = i.getContentType()) !== !1) {
      const [c, ...u] = f ? f.split(";").map((d) => d.trim()).filter(Boolean) : [];
      i.setContentType([c || "multipart/form-data", ...u].join("; "));
    }
  }
  if (B.hasStandardBrowserEnv && (s && a.isFunction(s) && (s = s(t)), s || s !== !1 && ir(t.url))) {
    const c = r && o && ar.read(o);
    c && i.set(r, c);
  }
  return t;
}, ur = typeof XMLHttpRequest < "u", fr = ur && function(e) {
  return new Promise(function(n, s) {
    const r = $t(e);
    let o = r.data;
    const i = A.from(r.headers).normalize();
    let { responseType: l, onUploadProgress: f, onDownloadProgress: c } = r, u, d, h, w, p;
    function g() {
      w && w(), p && p(), r.cancelToken && r.cancelToken.unsubscribe(u), r.signal && r.signal.removeEventListener("abort", u);
    }
    let m = new XMLHttpRequest();
    m.open(r.method.toUpperCase(), r.url, !0), m.timeout = r.timeout;
    function T() {
      if (!m)
        return;
      const b = A.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), N = {
        data: !l || l === "text" || l === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: b,
        config: e,
        request: m
      };
      qt(function(E) {
        n(E), g();
      }, function(E) {
        s(E), g();
      }, N), m = null;
    }
    "onloadend" in m ? m.onloadend = T : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(T);
    }, m.onabort = function() {
      m && (s(new y("Request aborted", y.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function() {
      s(new y("Network Error", y.ERR_NETWORK, e, m)), m = null;
    }, m.ontimeout = function() {
      let O = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const N = r.transitional || It;
      r.timeoutErrorMessage && (O = r.timeoutErrorMessage), s(new y(
        O,
        N.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
        e,
        m
      )), m = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in m && a.forEach(i.toJSON(), function(O, N) {
      m.setRequestHeader(N, O);
    }), a.isUndefined(r.withCredentials) || (m.withCredentials = !!r.withCredentials), l && l !== "json" && (m.responseType = r.responseType), c && ([h, p] = fe(c, !0), m.addEventListener("progress", h)), f && m.upload && ([d, w] = fe(f), m.upload.addEventListener("progress", d), m.upload.addEventListener("loadend", w)), (r.cancelToken || r.signal) && (u = (b) => {
      m && (s(!b || b.type ? new J(null, e, m) : b), m.abort(), m = null);
    }, r.cancelToken && r.cancelToken.subscribe(u), r.signal && (r.signal.aborted ? u() : r.signal.addEventListener("abort", u)));
    const v = sr(r.url);
    if (v && B.protocols.indexOf(v) === -1) {
      s(new y("Unsupported protocol " + v + ":", y.ERR_BAD_REQUEST, e));
      return;
    }
    m.send(o || null);
  });
}, dr = (e, t) => {
  let n = new AbortController(), s;
  const r = function(f) {
    if (!s) {
      s = !0, i();
      const c = f instanceof Error ? f : this.reason;
      n.abort(c instanceof y ? c : new J(c instanceof Error ? c.message : c));
    }
  };
  let o = t && setTimeout(() => {
    r(new y(`timeout ${t} of ms exceeded`, y.ETIMEDOUT));
  }, t);
  const i = () => {
    e && (o && clearTimeout(o), o = null, e.forEach((f) => {
      f && (f.removeEventListener ? f.removeEventListener("abort", r) : f.unsubscribe(r));
    }), e = null);
  };
  e.forEach((f) => f && f.addEventListener && f.addEventListener("abort", r));
  const { signal: l } = n;
  return l.unsubscribe = i, [l, () => {
    o && clearTimeout(o), o = null;
  }];
}, pr = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let s = 0, r;
  for (; s < n; )
    r = s + t, yield e.slice(s, r), s = r;
}, mr = async function* (e, t, n) {
  for await (const s of e)
    yield* pr(ArrayBuffer.isView(s) ? s : await n(String(s)), t);
}, ft = (e, t, n, s, r) => {
  const o = mr(e, t, r);
  let i = 0, l, f = (c) => {
    l || (l = !0, s && s(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: u, value: d } = await o.next();
        if (u) {
          f(), c.close();
          return;
        }
        let h = d.byteLength;
        if (n) {
          let w = i += h;
          n(w);
        }
        c.enqueue(new Uint8Array(d));
      } catch (u) {
        throw f(u), u;
      }
    },
    cancel(c) {
      return f(c), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, be = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Vt = be && typeof ReadableStream == "function", Pe = be && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Jt = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, hr = Vt && Jt(() => {
  let e = !1;
  const t = new Request(B.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), dt = 64 * 1024, Le = Vt && Jt(() => a.isReadableStream(new Response("").body)), de = {
  stream: Le && ((e) => e.body)
};
be && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !de[t] && (de[t] = a.isFunction(e[t]) ? (n) => n[t]() : (n, s) => {
      throw new y(`Response type '${t}' is not supported`, y.ERR_NOT_SUPPORT, s);
    });
  });
})(new Response());
const yr = async (e) => {
  if (e == null)
    return 0;
  if (a.isBlob(e))
    return e.size;
  if (a.isSpecCompliantForm(e))
    return (await new Request(e).arrayBuffer()).byteLength;
  if (a.isArrayBufferView(e) || a.isArrayBuffer(e))
    return e.byteLength;
  if (a.isURLSearchParams(e) && (e = e + ""), a.isString(e))
    return (await Pe(e)).byteLength;
}, gr = async (e, t) => {
  const n = a.toFiniteNumber(e.getContentLength());
  return n ?? yr(t);
}, br = be && (async (e) => {
  let {
    url: t,
    method: n,
    data: s,
    signal: r,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: l,
    onUploadProgress: f,
    responseType: c,
    headers: u,
    withCredentials: d = "same-origin",
    fetchOptions: h
  } = $t(e);
  c = c ? (c + "").toLowerCase() : "text";
  let [w, p] = r || o || i ? dr([r, o], i) : [], g, m;
  const T = () => {
    !g && setTimeout(() => {
      w && w.unsubscribe();
    }), g = !0;
  };
  let v;
  try {
    if (f && hr && n !== "get" && n !== "head" && (v = await gr(u, s)) !== 0) {
      let _ = new Request(t, {
        method: "POST",
        body: s,
        duplex: "half"
      }), E;
      if (a.isFormData(s) && (E = _.headers.get("content-type")) && u.setContentType(E), _.body) {
        const [q, K] = lt(
          v,
          fe(ct(f))
        );
        s = ft(_.body, dt, q, K, Pe);
      }
    }
    a.isString(d) || (d = d ? "include" : "omit"), m = new Request(t, {
      ...h,
      signal: w,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: s,
      duplex: "half",
      credentials: d
    });
    let b = await fetch(m);
    const O = Le && (c === "stream" || c === "response");
    if (Le && (l || O)) {
      const _ = {};
      ["status", "statusText", "headers"].forEach((Ke) => {
        _[Ke] = b[Ke];
      });
      const E = a.toFiniteNumber(b.headers.get("content-length")), [q, K] = l && lt(
        E,
        fe(ct(l), !0)
      ) || [];
      b = new Response(
        ft(b.body, dt, q, () => {
          K && K(), O && T();
        }, Pe),
        _
      );
    }
    c = c || "text";
    let N = await de[a.findKey(de, c) || "text"](b, e);
    return !O && T(), p && p(), await new Promise((_, E) => {
      qt(_, E, {
        data: N,
        headers: A.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: e,
        request: m
      });
    });
  } catch (b) {
    throw T(), b && b.name === "TypeError" && /fetch/i.test(b.message) ? Object.assign(
      new y("Network Error", y.ERR_NETWORK, e, m),
      {
        cause: b.cause || b
      }
    ) : y.from(b, b && b.code, e, m);
  }
}), Be = {
  http: Fs,
  xhr: fr,
  fetch: br
};
a.forEach(Be, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const pt = (e) => `- ${e}`, wr = (e) => a.isFunction(e) || e === null || e === !1, Kt = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, s;
    const r = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (s = n, !wr(n) && (s = Be[(i = String(n)).toLowerCase()], s === void 0))
        throw new y(`Unknown adapter '${i}'`);
      if (s)
        break;
      r[i || "#" + o] = s;
    }
    if (!s) {
      const o = Object.entries(r).map(
        ([l, f]) => `adapter ${l} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(pt).join(`
`) : " " + pt(o[0]) : "as no adapter specified";
      throw new y(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return s;
  },
  adapters: Be
};
function Re(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new J(null, e);
}
function mt(e) {
  return Re(e), e.headers = A.from(e.headers), e.data = Se.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Kt.getAdapter(e.adapter || ne.adapter)(e).then(function(s) {
    return Re(e), s.data = Se.call(
      e,
      e.transformResponse,
      s
    ), s.headers = A.from(s.headers), s;
  }, function(s) {
    return zt(s) || (Re(e), s && s.response && (s.response.data = Se.call(
      e,
      e.transformResponse,
      s.response
    ), s.response.headers = A.from(s.response.headers))), Promise.reject(s);
  });
}
const Wt = "1.7.3", Ve = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ve[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ht = {};
Ve.transitional = function(t, n, s) {
  function r(o, i) {
    return "[Axios v" + Wt + "] Transitional option '" + o + "'" + i + (s ? ". " + s : "");
  }
  return (o, i, l) => {
    if (t === !1)
      throw new y(
        r(i, " has been removed" + (n ? " in " + n : "")),
        y.ERR_DEPRECATED
      );
    return n && !ht[i] && (ht[i] = !0, console.warn(
      r(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, l) : !0;
  };
};
function Er(e, t, n) {
  if (typeof e != "object")
    throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let r = s.length;
  for (; r-- > 0; ) {
    const o = s[r], i = t[o];
    if (i) {
      const l = e[o], f = l === void 0 || i(l, o, e);
      if (f !== !0)
        throw new y("option " + o + " must be " + f, y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new y("Unknown option " + o, y.ERR_BAD_OPTION);
  }
}
const ke = {
  assertOptions: Er,
  validators: Ve
}, D = ke.validators;
class M {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new it(),
      response: new it()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (s) {
      if (s instanceof Error) {
        let r;
        Error.captureStackTrace ? Error.captureStackTrace(r = {}) : r = new Error();
        const o = r.stack ? r.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack ? o && !String(s.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + o) : s.stack = o;
        } catch {
        }
      }
      throw s;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = z(this.defaults, n);
    const { transitional: s, paramsSerializer: r, headers: o } = n;
    s !== void 0 && ke.assertOptions(s, {
      silentJSONParsing: D.transitional(D.boolean),
      forcedJSONParsing: D.transitional(D.boolean),
      clarifyTimeoutError: D.transitional(D.boolean)
    }, !1), r != null && (a.isFunction(r) ? n.paramsSerializer = {
      serialize: r
    } : ke.assertOptions(r, {
      encode: D.function,
      serialize: D.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[n.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete o[p];
      }
    ), n.headers = A.concat(i, o);
    const l = [];
    let f = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (f = f && g.synchronous, l.unshift(g.fulfilled, g.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(g) {
      c.push(g.fulfilled, g.rejected);
    });
    let u, d = 0, h;
    if (!f) {
      const p = [mt.bind(this), void 0];
      for (p.unshift.apply(p, l), p.push.apply(p, c), h = p.length, u = Promise.resolve(n); d < h; )
        u = u.then(p[d++], p[d++]);
      return u;
    }
    h = l.length;
    let w = n;
    for (d = 0; d < h; ) {
      const p = l[d++], g = l[d++];
      try {
        w = p(w);
      } catch (m) {
        g.call(this, m);
        break;
      }
    }
    try {
      u = mt.call(this, w);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, h = c.length; d < h; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = z(this.defaults, t);
    const n = Ht(t.baseURL, t.url);
    return jt(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  M.prototype[t] = function(n, s) {
    return this.request(z(s || {}, {
      method: t,
      url: n,
      data: (s || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(s) {
    return function(o, i, l) {
      return this.request(z(l || {}, {
        method: t,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  M.prototype[t] = n(), M.prototype[t + "Form"] = n(!0);
});
class Je {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const s = this;
    this.promise.then((r) => {
      if (!s._listeners) return;
      let o = s._listeners.length;
      for (; o-- > 0; )
        s._listeners[o](r);
      s._listeners = null;
    }), this.promise.then = (r) => {
      let o;
      const i = new Promise((l) => {
        s.subscribe(l), o = l;
      }).then(r);
      return i.cancel = function() {
        s.unsubscribe(o);
      }, i;
    }, t(function(o, i, l) {
      s.reason || (s.reason = new J(o, i, l), n(s.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Je(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
}
function Sr(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Rr(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const Fe = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Fe).forEach(([e, t]) => {
  Fe[t] = e;
});
function Gt(e) {
  const t = new M(e), n = Ot(M.prototype.request, t);
  return a.extend(n, M.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(r) {
    return Gt(z(e, r));
  }, n;
}
const R = Gt(ne);
R.Axios = M;
R.CanceledError = J;
R.CancelToken = Je;
R.isCancel = zt;
R.VERSION = Wt;
R.toFormData = ge;
R.AxiosError = y;
R.Cancel = R.CanceledError;
R.all = function(t) {
  return Promise.all(t);
};
R.spread = Sr;
R.isAxiosError = Rr;
R.mergeConfig = z;
R.AxiosHeaders = A;
R.formToJSON = (e) => Mt(a.isHTMLForm(e) ? new FormData(e) : e);
R.getAdapter = Kt.getAdapter;
R.HttpStatusCode = Fe;
R.default = R;
let Te;
const Xt = R.create({
  headers: {
    "Accept-Language": vr()
  }
});
Xt.interceptors.request.use(
  (e) => e,
  (e) => Promise.reject(e)
);
Xt.interceptors.response.use(
  (e) => {
    const t = e.data, n = e.config, { defaultResponse: s } = n.meta ?? {};
    return Tr(), s ? e : t;
  },
  (e) => {
    var n;
    const t = (n = Te == null ? void 0 : Te.global) == null ? void 0 : n.t;
    if (e.response) {
      const { data: s } = e.response;
      s ? oe.error(`【${s == null ? void 0 : s.code}】${s == null ? void 0 : s.msg}`) : oe.error(e.message);
    } else e.code === "ERR_NETWORK" ? oe.error(t("notice.networkUnavailable")) : oe.error(t("notice.unknownError"));
    return Promise.reject(e);
  }
);
const Zt = "__ACCESS_TOKEN_KEY__";
function Tr() {
  const e = sessionStorage.getItem(Zt);
  return e ? JSON.parse(e) : null;
}
function Fr(e) {
  sessionStorage.setItem(Zt, JSON.stringify(e));
}
function vr() {
  return {
    zh: "zh-hans",
    "zh-CN": "zh-hans",
    "zh-TW": "zh-hant",
    "zh-HK": "zh-hant"
  }[navigator.language] || "en";
}
export {
  Xt as a,
  Fr as s,
  kr as v
};
