import { getCurrentInstance as Pn, computed as x, watch as D, onMounted as qe, unref as p, shallowRef as Rn, ref as _, onBeforeUnmount as Se, onBeforeMount as An, provide as Ce, defineComponent as j, renderSlot as ie, inject as se, openBlock as Z, createElementBlock as $e, normalizeClass as Lt, normalizeStyle as Sn, withDirectives as $t, cloneVNode as Mn, Fragment as Bn, Text as In, Comment as kn, createVNode as xe, createBlock as pe, mergeProps as Ye, withCtx as te, createCommentVNode as Pe, toRef as we, Teleport as _n, Transition as Fn, vShow as Dn, readonly as Nn, onDeactivated as jn, toDisplayString as Ln } from "vue";
import { S as bt, b as Ht, aj as Wt, ac as $n, ad as Hn, ak as qt, d as M, j as Ne, z as Oe, g as zt, A as wt, al as Wn, am as qn, c as X, B as Ge, _ as le, u as Me, N as Je, h as Ot, x as zn, R as He, y as Kt, w as Ut, e as Kn } from "./base-KIYEtT4d.js";
import { c as Tt, i as Un, e as Vn, u as Zn } from "./index-3PkDc2Yq.js";
import { i as Vt, a as Gn, b as Jn } from "./_arrayPush-Dte6x3sf.js";
import { E as Et } from "./aria-CxTrhz24.js";
import { c as Zt, o as Xn } from "./index-nT5oH0pN.js";
import { b as Yn, a as Ct, u as Qn } from "./constants-DHmlFrYd.js";
import { i as eo, E as to } from "./focus-trap-DrFYrIvc.js";
const Q = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const a = e == null ? void 0 : e(r);
  if (n === !1 || !a)
    return t == null ? void 0 : t(r);
}, ka = (e) => (t) => t.pointerType === "mouse" ? e(t) : void 0;
function no(e) {
  return e;
}
function oo(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var ro = 800, ao = 16, io = Date.now;
function so(e) {
  var t = 0, n = 0;
  return function() {
    var o = io(), r = ao - (o - n);
    if (n = o, r > 0) {
      if (++t >= ro)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function lo(e) {
  return function() {
    return e;
  };
}
var uo = Tt ? function(e, t) {
  return Tt(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: lo(t),
    writable: !0
  });
} : no, fo = so(uo), xt = Math.max;
function po(e, t, n) {
  return t = xt(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, a = xt(o.length - t, 0), i = Array(a); ++r < a; )
      i[r] = o[t + r];
    r = -1;
    for (var s = Array(t + 1); ++r < t; )
      s[r] = o[r];
    return s[t] = n(i), oo(e, this, s);
  };
}
var Pt = bt ? bt.isConcatSpreadable : void 0;
function co(e) {
  return Ht(e) || Vt(e) || !!(Pt && e && e[Pt]);
}
function vo(e, t, n, o, r) {
  var a = -1, i = e.length;
  for (n || (n = co), r || (r = []); ++a < i; ) {
    var s = e[a];
    n(s) ? Gn(r, s) : r[r.length] = s;
  }
  return r;
}
function go(e) {
  var t = e == null ? 0 : e.length;
  return t ? vo(e) : [];
}
function mo(e) {
  return fo(po(e, void 0, go), e + "");
}
function ho(e, t) {
  return e != null && t in Object(e);
}
function yo(e, t, n) {
  t = Wt(t, e);
  for (var o = -1, r = t.length, a = !1; ++o < r; ) {
    var i = $n(t[o]);
    if (!(a = e != null && n(e, i)))
      break;
    e = e[i];
  }
  return a || ++o != r ? a : (r = e == null ? 0 : e.length, !!r && Jn(r) && Un(i, r) && (Ht(e) || Vt(e)));
}
function bo(e, t) {
  return e != null && yo(e, t, ho);
}
function wo(e, t, n) {
  for (var o = -1, r = t.length, a = {}; ++o < r; ) {
    var i = t[o], s = Hn(e, i);
    n(s, i) && Vn(a, Wt(i, e), s);
  }
  return a;
}
function Oo(e, t) {
  return wo(e, t, function(n, o) {
    return bo(e, o);
  });
}
var To = mo(function(e, t) {
  return e == null ? {} : Oo(e, t);
});
const Eo = qt({
  type: M(Boolean),
  default: null
}), Co = qt({
  type: M(Function)
}), Gt = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: Eo,
    [n]: Co
  };
  return {
    useModelToggle: ({
      indicator: i,
      toggleReason: s,
      shouldHideWhenRouteChanges: l,
      shouldProceed: u,
      onShow: c,
      onHide: d
    }) => {
      const y = Pn(), { emit: g } = y, m = y.props, v = x(() => Ne(m[n])), T = x(() => m[e] === null), f = (O) => {
        i.value !== !0 && (i.value = !0, s && (s.value = O), Ne(c) && c(O));
      }, w = (O) => {
        i.value !== !1 && (i.value = !1, s && (s.value = O), Ne(d) && d(O));
      }, E = (O) => {
        if (m.disabled === !0 || Ne(u) && !u())
          return;
        const R = v.value && Oe;
        R && g(t, !0), (T.value || !R) && f(O);
      }, h = (O) => {
        if (m.disabled === !0 || !Oe)
          return;
        const R = v.value && Oe;
        R && g(t, !1), (T.value || !R) && w(O);
      }, C = (O) => {
        zt(O) && (m.disabled && O ? v.value && g(t, !1) : i.value !== O && (O ? f() : w()));
      }, P = () => {
        i.value ? h() : E();
      };
      return D(() => m[e], C), l && y.appContext.config.globalProperties.$route !== void 0 && D(() => ({
        ...y.proxy.$route
      }), () => {
        l.value && i.value && h();
      }), qe(() => {
        C(m[e]);
      }), {
        hide: h,
        show: E,
        toggle: P,
        hasUpdateHandler: v
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
};
Gt("modelValue");
var H = "top", z = "bottom", K = "right", W = "left", Qe = "auto", Be = [H, z, K, W], ce = "start", Re = "end", xo = "clippingParents", Jt = "viewport", be = "popper", Po = "reference", Rt = Be.reduce(function(e, t) {
  return e.concat([t + "-" + ce, t + "-" + Re]);
}, []), et = [].concat(Be, [Qe]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ce, t + "-" + Re]);
}, []), Ro = "beforeRead", Ao = "read", So = "afterRead", Mo = "beforeMain", Bo = "main", Io = "afterMain", ko = "beforeWrite", _o = "write", Fo = "afterWrite", Do = [Ro, Ao, So, Mo, Bo, Io, ko, _o, Fo];
function J(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function U(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function de(e) {
  var t = U(e).Element;
  return e instanceof t || e instanceof Element;
}
function q(e) {
  var t = U(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function tt(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = U(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function No(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, a = t.elements[n];
    !q(a) || !J(a) || (Object.assign(a.style, o), Object.keys(r).forEach(function(i) {
      var s = r[i];
      s === !1 ? a.removeAttribute(i) : a.setAttribute(i, s === !0 ? "" : s);
    }));
  });
}
function jo(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], a = t.attributes[o] || {}, i = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), s = i.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !q(r) || !J(r) || (Object.assign(r.style, s), Object.keys(a).forEach(function(l) {
        r.removeAttribute(l);
      }));
    });
  };
}
var Xt = { name: "applyStyles", enabled: !0, phase: "write", fn: No, effect: jo, requires: ["computeStyles"] };
function G(e) {
  return e.split("-")[0];
}
var ae = Math.max, We = Math.min, ve = Math.round;
function ge(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), o = 1, r = 1;
  if (q(e) && t) {
    var a = e.offsetHeight, i = e.offsetWidth;
    i > 0 && (o = ve(n.width) / i || 1), a > 0 && (r = ve(n.height) / a || 1);
  }
  return { width: n.width / o, height: n.height / r, top: n.top / r, right: n.right / o, bottom: n.bottom / r, left: n.left / o, x: n.left / o, y: n.top / r };
}
function nt(e) {
  var t = ge(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function Yt(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && tt(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o)) return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function ee(e) {
  return U(e).getComputedStyle(e);
}
function Lo(e) {
  return ["table", "td", "th"].indexOf(J(e)) >= 0;
}
function ne(e) {
  return ((de(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ze(e) {
  return J(e) === "html" ? e : e.assignedSlot || e.parentNode || (tt(e) ? e.host : null) || ne(e);
}
function At(e) {
  return !q(e) || ee(e).position === "fixed" ? null : e.offsetParent;
}
function $o(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && q(e)) {
    var o = ee(e);
    if (o.position === "fixed") return null;
  }
  var r = ze(e);
  for (tt(r) && (r = r.host); q(r) && ["html", "body"].indexOf(J(r)) < 0; ) {
    var a = ee(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function Ie(e) {
  for (var t = U(e), n = At(e); n && Lo(n) && ee(n).position === "static"; ) n = At(n);
  return n && (J(n) === "html" || J(n) === "body" && ee(n).position === "static") ? t : n || $o(e) || t;
}
function ot(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Te(e, t, n) {
  return ae(e, We(t, n));
}
function Ho(e, t, n) {
  var o = Te(e, t, n);
  return o > n ? n : o;
}
function Qt() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function en(e) {
  return Object.assign({}, Qt(), e);
}
function tn(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Wo = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, en(typeof e != "number" ? e : tn(e, Be));
};
function qo(e) {
  var t, n = e.state, o = e.name, r = e.options, a = n.elements.arrow, i = n.modifiersData.popperOffsets, s = G(n.placement), l = ot(s), u = [W, K].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!a || !i)) {
    var d = Wo(r.padding, n), y = nt(a), g = l === "y" ? H : W, m = l === "y" ? z : K, v = n.rects.reference[c] + n.rects.reference[l] - i[l] - n.rects.popper[c], T = i[l] - n.rects.reference[l], f = Ie(a), w = f ? l === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0, E = v / 2 - T / 2, h = d[g], C = w - y[c] - d[m], P = w / 2 - y[c] / 2 + E, O = Te(h, P, C), R = l;
    n.modifiersData[o] = (t = {}, t[R] = O, t.centerOffset = O - P, t);
  }
}
function zo(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || !Yt(t.elements.popper, r) || (t.elements.arrow = r));
}
var Ko = { name: "arrow", enabled: !0, phase: "main", fn: qo, effect: zo, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function me(e) {
  return e.split("-")[1];
}
var Uo = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Vo(e) {
  var t = e.x, n = e.y, o = window, r = o.devicePixelRatio || 1;
  return { x: ve(t * r) / r || 0, y: ve(n * r) / r || 0 };
}
function St(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, a = e.variation, i = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, y = i.x, g = y === void 0 ? 0 : y, m = i.y, v = m === void 0 ? 0 : m, T = typeof c == "function" ? c({ x: g, y: v }) : { x: g, y: v };
  g = T.x, v = T.y;
  var f = i.hasOwnProperty("x"), w = i.hasOwnProperty("y"), E = W, h = H, C = window;
  if (u) {
    var P = Ie(n), O = "clientHeight", R = "clientWidth";
    if (P === U(n) && (P = ne(n), ee(P).position !== "static" && s === "absolute" && (O = "scrollHeight", R = "scrollWidth")), P = P, r === H || (r === W || r === K) && a === Re) {
      h = z;
      var k = d && P === C && C.visualViewport ? C.visualViewport.height : P[O];
      v -= k - o.height, v *= l ? 1 : -1;
    }
    if (r === W || (r === H || r === z) && a === Re) {
      E = K;
      var A = d && P === C && C.visualViewport ? C.visualViewport.width : P[R];
      g -= A - o.width, g *= l ? 1 : -1;
    }
  }
  var B = Object.assign({ position: s }, u && Uo), N = c === !0 ? Vo({ x: g, y: v }) : { x: g, y: v };
  if (g = N.x, v = N.y, l) {
    var S;
    return Object.assign({}, B, (S = {}, S[h] = w ? "0" : "", S[E] = f ? "0" : "", S.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + v + "px)" : "translate3d(" + g + "px, " + v + "px, 0)", S));
  }
  return Object.assign({}, B, (t = {}, t[h] = w ? v + "px" : "", t[E] = f ? g + "px" : "", t.transform = "", t));
}
function Zo(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, a = n.adaptive, i = a === void 0 ? !0 : a, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = { placement: G(t.placement), variation: me(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, St(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: i, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, St(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var nn = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Zo, data: {} }, je = { passive: !0 };
function Go(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, a = r === void 0 ? !0 : r, i = o.resize, s = i === void 0 ? !0 : i, l = U(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, je);
  }), s && l.addEventListener("resize", n.update, je), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, je);
    }), s && l.removeEventListener("resize", n.update, je);
  };
}
var on = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Go, data: {} }, Jo = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Le(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Jo[t];
  });
}
var Xo = { start: "end", end: "start" };
function Mt(e) {
  return e.replace(/start|end/g, function(t) {
    return Xo[t];
  });
}
function rt(e) {
  var t = U(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function at(e) {
  return ge(ne(e)).left + rt(e).scrollLeft;
}
function Yo(e) {
  var t = U(e), n = ne(e), o = t.visualViewport, r = n.clientWidth, a = n.clientHeight, i = 0, s = 0;
  return o && (r = o.width, a = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = o.offsetLeft, s = o.offsetTop)), { width: r, height: a, x: i + at(e), y: s };
}
function Qo(e) {
  var t, n = ne(e), o = rt(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, a = ae(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = ae(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), s = -o.scrollLeft + at(e), l = -o.scrollTop;
  return ee(r || n).direction === "rtl" && (s += ae(n.clientWidth, r ? r.clientWidth : 0) - a), { width: a, height: i, x: s, y: l };
}
function it(e) {
  var t = ee(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function rn(e) {
  return ["html", "body", "#document"].indexOf(J(e)) >= 0 ? e.ownerDocument.body : q(e) && it(e) ? e : rn(ze(e));
}
function Ee(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = rn(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), a = U(o), i = r ? [a].concat(a.visualViewport || [], it(o) ? o : []) : o, s = t.concat(i);
  return r ? s : s.concat(Ee(ze(i)));
}
function Xe(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function er(e) {
  var t = ge(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Bt(e, t) {
  return t === Jt ? Xe(Yo(e)) : de(t) ? er(t) : Xe(Qo(ne(e)));
}
function tr(e) {
  var t = Ee(ze(e)), n = ["absolute", "fixed"].indexOf(ee(e).position) >= 0, o = n && q(e) ? Ie(e) : e;
  return de(o) ? t.filter(function(r) {
    return de(r) && Yt(r, o) && J(r) !== "body";
  }) : [];
}
function nr(e, t, n) {
  var o = t === "clippingParents" ? tr(e) : [].concat(t), r = [].concat(o, [n]), a = r[0], i = r.reduce(function(s, l) {
    var u = Bt(e, l);
    return s.top = ae(u.top, s.top), s.right = We(u.right, s.right), s.bottom = We(u.bottom, s.bottom), s.left = ae(u.left, s.left), s;
  }, Bt(e, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function an(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? G(o) : null, a = o ? me(o) : null, i = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (r) {
    case H:
      l = { x: i, y: t.y - n.height };
      break;
    case z:
      l = { x: i, y: t.y + t.height };
      break;
    case K:
      l = { x: t.x + t.width, y: s };
      break;
    case W:
      l = { x: t.x - n.width, y: s };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = r ? ot(r) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case ce:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case Re:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function Ae(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, a = n.boundary, i = a === void 0 ? xo : a, s = n.rootBoundary, l = s === void 0 ? Jt : s, u = n.elementContext, c = u === void 0 ? be : u, d = n.altBoundary, y = d === void 0 ? !1 : d, g = n.padding, m = g === void 0 ? 0 : g, v = en(typeof m != "number" ? m : tn(m, Be)), T = c === be ? Po : be, f = e.rects.popper, w = e.elements[y ? T : c], E = nr(de(w) ? w : w.contextElement || ne(e.elements.popper), i, l), h = ge(e.elements.reference), C = an({ reference: h, element: f, strategy: "absolute", placement: r }), P = Xe(Object.assign({}, f, C)), O = c === be ? P : h, R = { top: E.top - O.top + v.top, bottom: O.bottom - E.bottom + v.bottom, left: E.left - O.left + v.left, right: O.right - E.right + v.right }, k = e.modifiersData.offset;
  if (c === be && k) {
    var A = k[r];
    Object.keys(R).forEach(function(B) {
      var N = [K, z].indexOf(B) >= 0 ? 1 : -1, S = [H, z].indexOf(B) >= 0 ? "y" : "x";
      R[B] += A[S] * N;
    });
  }
  return R;
}
function or(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, a = n.rootBoundary, i = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? et : l, c = me(o), d = c ? s ? Rt : Rt.filter(function(m) {
    return me(m) === c;
  }) : Be, y = d.filter(function(m) {
    return u.indexOf(m) >= 0;
  });
  y.length === 0 && (y = d);
  var g = y.reduce(function(m, v) {
    return m[v] = Ae(e, { placement: v, boundary: r, rootBoundary: a, padding: i })[G(v)], m;
  }, {});
  return Object.keys(g).sort(function(m, v) {
    return g[m] - g[v];
  });
}
function rr(e) {
  if (G(e) === Qe) return [];
  var t = Le(e);
  return [Mt(e), t, Mt(t)];
}
function ar(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, a = r === void 0 ? !0 : r, i = n.altAxis, s = i === void 0 ? !0 : i, l = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, y = n.altBoundary, g = n.flipVariations, m = g === void 0 ? !0 : g, v = n.allowedAutoPlacements, T = t.options.placement, f = G(T), w = f === T, E = l || (w || !m ? [Le(T)] : rr(T)), h = [T].concat(E).reduce(function(oe, Y) {
      return oe.concat(G(Y) === Qe ? or(t, { placement: Y, boundary: c, rootBoundary: d, padding: u, flipVariations: m, allowedAutoPlacements: v }) : Y);
    }, []), C = t.rects.reference, P = t.rects.popper, O = /* @__PURE__ */ new Map(), R = !0, k = h[0], A = 0; A < h.length; A++) {
      var B = h[A], N = G(B), S = me(B) === ce, L = [H, z].indexOf(N) >= 0, F = L ? "width" : "height", I = Ae(t, { placement: B, boundary: c, rootBoundary: d, altBoundary: y, padding: u }), b = L ? S ? K : W : S ? z : H;
      C[F] > P[F] && (b = Le(b));
      var $ = Le(b), V = [];
      if (a && V.push(I[N] <= 0), s && V.push(I[b] <= 0, I[$] <= 0), V.every(function(oe) {
        return oe;
      })) {
        k = B, R = !1;
        break;
      }
      O.set(B, V);
    }
    if (R) for (var ke = m ? 3 : 1, Ke = function(oe) {
      var Y = h.find(function(Fe) {
        var ye = O.get(Fe);
        if (ye) return ye.slice(0, oe).every(function(ue) {
          return ue;
        });
      });
      if (Y) return k = Y, "break";
    }, he = ke; he > 0; he--) {
      var _e = Ke(he);
      if (_e === "break") break;
    }
    t.placement !== k && (t.modifiersData[o]._skip = !0, t.placement = k, t.reset = !0);
  }
}
var ir = { name: "flip", enabled: !0, phase: "main", fn: ar, requiresIfExists: ["offset"], data: { _skip: !1 } };
function It(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function kt(e) {
  return [H, K, z, W].some(function(t) {
    return e[t] >= 0;
  });
}
function sr(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, a = t.modifiersData.preventOverflow, i = Ae(t, { elementContext: "reference" }), s = Ae(t, { altBoundary: !0 }), l = It(i, o), u = It(s, r, a), c = kt(l), d = kt(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: c, hasPopperEscaped: d }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": c, "data-popper-escaped": d });
}
var lr = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: sr };
function ur(e, t, n) {
  var o = G(e), r = [W, H].indexOf(o) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, i = a[0], s = a[1];
  return i = i || 0, s = (s || 0) * r, [W, K].indexOf(o) >= 0 ? { x: s, y: i } : { x: i, y: s };
}
function fr(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, a = r === void 0 ? [0, 0] : r, i = et.reduce(function(c, d) {
    return c[d] = ur(d, t.rects, a), c;
  }, {}), s = i[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = i;
}
var pr = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: fr };
function cr(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = an({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var sn = { name: "popperOffsets", enabled: !0, phase: "read", fn: cr, data: {} };
function dr(e) {
  return e === "x" ? "y" : "x";
}
function vr(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, a = r === void 0 ? !0 : r, i = n.altAxis, s = i === void 0 ? !1 : i, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, d = n.padding, y = n.tether, g = y === void 0 ? !0 : y, m = n.tetherOffset, v = m === void 0 ? 0 : m, T = Ae(t, { boundary: l, rootBoundary: u, padding: d, altBoundary: c }), f = G(t.placement), w = me(t.placement), E = !w, h = ot(f), C = dr(h), P = t.modifiersData.popperOffsets, O = t.rects.reference, R = t.rects.popper, k = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v, A = typeof k == "number" ? { mainAxis: k, altAxis: k } : Object.assign({ mainAxis: 0, altAxis: 0 }, k), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, N = { x: 0, y: 0 };
  if (P) {
    if (a) {
      var S, L = h === "y" ? H : W, F = h === "y" ? z : K, I = h === "y" ? "height" : "width", b = P[h], $ = b + T[L], V = b - T[F], ke = g ? -R[I] / 2 : 0, Ke = w === ce ? O[I] : R[I], he = w === ce ? -R[I] : -O[I], _e = t.elements.arrow, oe = g && _e ? nt(_e) : { width: 0, height: 0 }, Y = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Qt(), Fe = Y[L], ye = Y[F], ue = Te(0, O[I], oe[I]), bn = E ? O[I] / 2 - ke - ue - Fe - A.mainAxis : Ke - ue - Fe - A.mainAxis, wn = E ? -O[I] / 2 + ke + ue + ye + A.mainAxis : he + ue + ye + A.mainAxis, Ue = t.elements.arrow && Ie(t.elements.arrow), On = Ue ? h === "y" ? Ue.clientTop || 0 : Ue.clientLeft || 0 : 0, ft = (S = B == null ? void 0 : B[h]) != null ? S : 0, Tn = b + bn - ft - On, En = b + wn - ft, pt = Te(g ? We($, Tn) : $, b, g ? ae(V, En) : V);
      P[h] = pt, N[h] = pt - b;
    }
    if (s) {
      var ct, Cn = h === "x" ? H : W, xn = h === "x" ? z : K, re = P[C], De = C === "y" ? "height" : "width", dt = re + T[Cn], vt = re - T[xn], Ve = [H, W].indexOf(f) !== -1, gt = (ct = B == null ? void 0 : B[C]) != null ? ct : 0, mt = Ve ? dt : re - O[De] - R[De] - gt + A.altAxis, ht = Ve ? re + O[De] + R[De] - gt - A.altAxis : vt, yt = g && Ve ? Ho(mt, re, ht) : Te(g ? mt : dt, re, g ? ht : vt);
      P[C] = yt, N[C] = yt - re;
    }
    t.modifiersData[o] = N;
  }
}
var gr = { name: "preventOverflow", enabled: !0, phase: "main", fn: vr, requiresIfExists: ["offset"] };
function mr(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function hr(e) {
  return e === U(e) || !q(e) ? rt(e) : mr(e);
}
function yr(e) {
  var t = e.getBoundingClientRect(), n = ve(t.width) / e.offsetWidth || 1, o = ve(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function br(e, t, n) {
  n === void 0 && (n = !1);
  var o = q(t), r = q(t) && yr(t), a = ne(t), i = ge(e, r), s = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (o || !o && !n) && ((J(t) !== "body" || it(a)) && (s = hr(t)), q(t) ? (l = ge(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = at(a))), { x: i.left + s.scrollLeft - l.x, y: i.top + s.scrollTop - l.y, width: i.width, height: i.height };
}
function wr(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function r(a) {
    n.add(a.name);
    var i = [].concat(a.requires || [], a.requiresIfExists || []);
    i.forEach(function(s) {
      if (!n.has(s)) {
        var l = t.get(s);
        l && r(l);
      }
    }), o.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || r(a);
  }), o;
}
function Or(e) {
  var t = wr(e);
  return Do.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function Tr(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Er(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var _t = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Ft() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function st(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, a = r === void 0 ? _t : r;
  return function(i, s, l) {
    l === void 0 && (l = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, _t, a), modifiersData: {}, elements: { reference: i, popper: s }, attributes: {}, styles: {} }, c = [], d = !1, y = { state: u, setOptions: function(v) {
      var T = typeof v == "function" ? v(u.options) : v;
      m(), u.options = Object.assign({}, a, u.options, T), u.scrollParents = { reference: de(i) ? Ee(i) : i.contextElement ? Ee(i.contextElement) : [], popper: Ee(s) };
      var f = Or(Er([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = f.filter(function(w) {
        return w.enabled;
      }), g(), y.update();
    }, forceUpdate: function() {
      if (!d) {
        var v = u.elements, T = v.reference, f = v.popper;
        if (Ft(T, f)) {
          u.rects = { reference: br(T, Ie(f), u.options.strategy === "fixed"), popper: nt(f) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(R) {
            return u.modifiersData[R.name] = Object.assign({}, R.data);
          });
          for (var w = 0; w < u.orderedModifiers.length; w++) {
            if (u.reset === !0) {
              u.reset = !1, w = -1;
              continue;
            }
            var E = u.orderedModifiers[w], h = E.fn, C = E.options, P = C === void 0 ? {} : C, O = E.name;
            typeof h == "function" && (u = h({ state: u, options: P, name: O, instance: y }) || u);
          }
        }
      }
    }, update: Tr(function() {
      return new Promise(function(v) {
        y.forceUpdate(), v(u);
      });
    }), destroy: function() {
      m(), d = !0;
    } };
    if (!Ft(i, s)) return y;
    y.setOptions(l).then(function(v) {
      !d && l.onFirstUpdate && l.onFirstUpdate(v);
    });
    function g() {
      u.orderedModifiers.forEach(function(v) {
        var T = v.name, f = v.options, w = f === void 0 ? {} : f, E = v.effect;
        if (typeof E == "function") {
          var h = E({ state: u, name: T, instance: y, options: w }), C = function() {
          };
          c.push(h || C);
        }
      });
    }
    function m() {
      c.forEach(function(v) {
        return v();
      }), c = [];
    }
    return y;
  };
}
st();
var Cr = [on, sn, nn, Xt];
st({ defaultModifiers: Cr });
var xr = [on, sn, nn, Xt, pr, ir, gr, Ko, lr], Pr = st({ defaultModifiers: xr });
const Rr = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = Ar(l);
      Object.assign(i.value, u);
    },
    requires: ["computeStyles"]
  }, r = x(() => {
    const { onFirstUpdate: l, placement: u, strategy: c, modifiers: d } = p(n);
    return {
      onFirstUpdate: l,
      placement: u || "bottom",
      strategy: c || "absolute",
      modifiers: [
        ...d || [],
        o,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = Rn(), i = _({
    styles: {
      popper: {
        position: p(r).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), s = () => {
    a.value && (a.value.destroy(), a.value = void 0);
  };
  return D(r, (l) => {
    const u = p(a);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), D([e, t], ([l, u]) => {
    s(), !(!l || !u) && (a.value = Pr(l, u, p(r)));
  }), Se(() => {
    s();
  }), {
    state: x(() => {
      var l;
      return { ...((l = p(a)) == null ? void 0 : l.state) || {} };
    }),
    styles: x(() => p(i).styles),
    attributes: x(() => p(i).attributes),
    update: () => {
      var l;
      return (l = p(a)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = p(a)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: x(() => p(a))
  };
};
function Ar(e) {
  const t = Object.keys(e.elements), n = wt(t.map((r) => [r, e.styles[r] || {}])), o = wt(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
function Dt() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return Wn(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
let Nt;
const ln = () => {
  const e = qn(), t = Yn(), n = x(() => `${e.value}-popper-container-${t.prefix}`), o = x(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, Sr = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Mr = () => {
  const { id: e, selector: t } = ln();
  return An(() => {
    Oe && (process.env.NODE_ENV === "test" || !Nt && !document.body.querySelector(t.value)) && (Nt = Sr(e.value));
  }), {
    id: e,
    selector: t
  };
}, Br = X({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
}), Ir = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: r
}) => {
  const { registerTimeout: a } = Dt(), {
    registerTimeout: i,
    cancelTimeout: s
  } = Dt();
  return {
    onOpen: (c) => {
      a(() => {
        o(c);
        const d = p(n);
        Ge(d) && d > 0 && i(() => {
          r(c);
        }, d);
      }, p(e));
    },
    onClose: (c) => {
      s(), a(() => {
        r(c);
      }, p(t));
    }
  };
}, un = Symbol("elForwardRef"), kr = (e) => {
  Ce(un, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, _r = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Fr = X({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), fn = (e) => To(Fr, e), lt = Symbol("popper"), pn = Symbol("popperContent"), Dr = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], cn = X({
  role: {
    type: String,
    values: Dr,
    default: "tooltip"
  }
}), Nr = j({
  name: "ElPopper",
  inheritAttrs: !1
}), jr = /* @__PURE__ */ j({
  ...Nr,
  props: cn,
  setup(e, { expose: t }) {
    const n = e, o = _(), r = _(), a = _(), i = _(), s = x(() => n.role), l = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: a,
      referenceRef: i,
      role: s
    };
    return t(l), Ce(lt, l), (u, c) => ie(u.$slots, "default");
  }
});
var Lr = /* @__PURE__ */ le(jr, [["__file", "popper.vue"]]);
const dn = X({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), $r = j({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Hr = /* @__PURE__ */ j({
  ...$r,
  props: dn,
  setup(e, { expose: t }) {
    const n = e, o = Me("popper"), { arrowOffset: r, arrowRef: a, arrowStyle: i } = se(pn, void 0);
    return D(() => n.arrowOffset, (s) => {
      r.value = s;
    }), Se(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (s, l) => (Z(), $e("span", {
      ref_key: "arrowRef",
      ref: a,
      class: Lt(p(o).e("arrow")),
      style: Sn(p(i)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Wr = /* @__PURE__ */ le(Hr, [["__file", "arrow.vue"]]);
const Ze = "ElOnlyChild", qr = j({
  name: Ze,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = se(un), a = _r((o = r == null ? void 0 : r.setForwardRef) != null ? o : Je);
    return () => {
      var i;
      const s = (i = t.default) == null ? void 0 : i.call(t, n);
      if (!s)
        return null;
      if (s.length > 1)
        return Ot(Ze, "requires exact only one valid child."), null;
      const l = vn(s);
      return l ? $t(Mn(l, n), [[a]]) : (Ot(Ze, "no valid child node found"), null);
    };
  }
});
function vn(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (zn(n))
      switch (n.type) {
        case kn:
          continue;
        case In:
        case "svg":
          return jt(n);
        case Bn:
          return vn(n.children);
        default:
          return n;
      }
    return jt(n);
  }
  return null;
}
function jt(e) {
  const t = Me("only-child");
  return xe("span", {
    class: t.e("content")
  }, [e]);
}
const gn = X({
  virtualRef: {
    type: M(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: M(Function)
  },
  onMouseleave: {
    type: M(Function)
  },
  onClick: {
    type: M(Function)
  },
  onKeydown: {
    type: M(Function)
  },
  onFocus: {
    type: M(Function)
  },
  onBlur: {
    type: M(Function)
  },
  onContextmenu: {
    type: M(Function)
  },
  id: String,
  open: Boolean
}), zr = j({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), Kr = /* @__PURE__ */ j({
  ...zr,
  props: gn,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = se(lt, void 0);
    kr(r);
    const a = x(() => s.value ? n.id : void 0), i = x(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), s = x(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), l = x(() => s.value ? `${n.open}` : void 0);
    let u;
    return qe(() => {
      D(() => n.virtualRef, (c) => {
        c && (r.value = Zt(c));
      }, {
        immediate: !0
      }), D(r, (c, d) => {
        u == null || u(), u = void 0, He(c) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((y) => {
          var g;
          const m = n[y];
          m && (c.addEventListener(y.slice(2).toLowerCase(), m), (g = d == null ? void 0 : d.removeEventListener) == null || g.call(d, y.slice(2).toLowerCase(), m));
        }), u = D([a, i, s, l], (y) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((g, m) => {
            Kt(y[m]) ? c.removeAttribute(g) : c.setAttribute(g, y[m]);
          });
        }, { immediate: !0 })), He(d) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((y) => d.removeAttribute(y));
      }, {
        immediate: !0
      });
    }), Se(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: r
    }), (c, d) => c.virtualTriggering ? Pe("v-if", !0) : (Z(), pe(p(qr), Ye({ key: 0 }, c.$attrs, {
      "aria-controls": p(a),
      "aria-describedby": p(i),
      "aria-expanded": p(l),
      "aria-haspopup": p(s)
    }), {
      default: te(() => [
        ie(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var Ur = /* @__PURE__ */ le(Kr, [["__file", "trigger.vue"]]);
const Vr = ["fixed", "absolute"], Zr = X({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: M(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: et,
    default: "bottom"
  },
  popperOptions: {
    type: M(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Vr,
    default: "absolute"
  }
}), mn = X({
  ...Zr,
  id: String,
  style: {
    type: M([String, Array, Object])
  },
  className: {
    type: M([String, Array, Object])
  },
  effect: {
    type: M(String),
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: M([String, Array, Object])
  },
  popperStyle: {
    type: M([String, Array, Object])
  },
  referenceEl: {
    type: M(Object)
  },
  triggerTargetEl: {
    type: M(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...fn(["ariaLabel"])
}), Gr = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Jr = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, a = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...Yr(e), ...t]
  };
  return Qr(a, r == null ? void 0 : r.modifiers), a;
}, Xr = (e) => {
  if (Oe)
    return Zt(e);
};
function Yr(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: o } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t ?? 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: o
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n
      }
    }
  ];
}
function Qr(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const ea = 0, ta = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = se(lt, void 0), a = _(), i = _(), s = x(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = x(() => {
    var f;
    const w = p(a), E = (f = p(i)) != null ? f : ea;
    return {
      name: "arrow",
      enabled: !eo(w),
      options: {
        element: w,
        padding: E
      }
    };
  }), u = x(() => ({
    onFirstUpdate: () => {
      m();
    },
    ...Jr(e, [
      p(l),
      p(s)
    ])
  })), c = x(() => Xr(e.referenceEl) || p(o)), { attributes: d, state: y, styles: g, update: m, forceUpdate: v, instanceRef: T } = Rr(c, n, u);
  return D(T, (f) => t.value = f), qe(() => {
    D(() => {
      var f;
      return (f = p(c)) == null ? void 0 : f.getBoundingClientRect();
    }, () => {
      m();
    });
  }), {
    attributes: d,
    arrowRef: a,
    contentRef: n,
    instanceRef: T,
    state: y,
    styles: g,
    role: r,
    forceUpdate: v,
    update: m
  };
}, na = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = Zn(), a = Me("popper"), i = x(() => p(t).popper), s = _(Ge(e.zIndex) ? e.zIndex : r()), l = x(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = x(() => [
    { zIndex: p(s) },
    p(n).popper,
    e.popperStyle || {}
  ]), c = x(() => o.value === "dialog" ? "false" : void 0), d = x(() => p(n).arrow || {});
  return {
    ariaModal: c,
    arrowStyle: d,
    contentAttrs: i,
    contentClass: l,
    contentStyle: u,
    contentZIndex: s,
    updateZIndex: () => {
      s.value = Ge(e.zIndex) ? e.zIndex : r();
    }
  };
}, oa = (e, t) => {
  const n = _(!1), o = _();
  return {
    focusStartRef: o,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var c;
      ((c = u.detail) == null ? void 0 : c.focusReason) !== "pointer" && (o.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (u) => {
      e.visible && !n.value && (u.target && (o.value = u.target), n.value = !0);
    },
    onFocusoutPrevented: (u) => {
      e.trapping || (u.detail.focusReason === "pointer" && u.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, ra = j({
  name: "ElPopperContent"
}), aa = /* @__PURE__ */ j({
  ...ra,
  props: mn,
  emits: Gr,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: a,
      onFocusAfterReleased: i,
      onFocusAfterTrapped: s,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: c
    } = oa(o, n), { attributes: d, arrowRef: y, contentRef: g, styles: m, instanceRef: v, role: T, update: f } = ta(o), {
      ariaModal: w,
      arrowStyle: E,
      contentAttrs: h,
      contentClass: C,
      contentStyle: P,
      updateZIndex: O
    } = na(o, {
      styles: m,
      attributes: d,
      role: T
    }), R = se(Ct, void 0), k = _();
    Ce(pn, {
      arrowStyle: E,
      arrowRef: y,
      arrowOffset: k
    }), R && Ce(Ct, {
      ...R,
      addInputId: Je,
      removeInputId: Je
    });
    let A;
    const B = (S = !0) => {
      f(), S && O();
    }, N = () => {
      B(!1), o.visible && o.focusOnShow ? a.value = !0 : o.visible === !1 && (a.value = !1);
    };
    return qe(() => {
      D(() => o.triggerTargetEl, (S, L) => {
        A == null || A(), A = void 0;
        const F = p(S || g.value), I = p(L || g.value);
        He(F) && (A = D([T, () => o.ariaLabel, w, () => o.id], (b) => {
          ["role", "aria-label", "aria-modal", "id"].forEach(($, V) => {
            Kt(b[V]) ? F.removeAttribute($) : F.setAttribute($, b[V]);
          });
        }, { immediate: !0 })), I !== F && He(I) && ["role", "aria-label", "aria-modal", "id"].forEach((b) => {
          I.removeAttribute(b);
        });
      }, { immediate: !0 }), D(() => o.visible, N, { immediate: !0 });
    }), Se(() => {
      A == null || A(), A = void 0;
    }), t({
      popperContentRef: g,
      popperInstanceRef: v,
      updatePopper: B,
      contentStyle: P
    }), (S, L) => (Z(), $e("div", Ye({
      ref_key: "contentRef",
      ref: g
    }, p(h), {
      style: p(P),
      class: p(C),
      tabindex: "-1",
      onMouseenter: L[0] || (L[0] = (F) => S.$emit("mouseenter", F)),
      onMouseleave: L[1] || (L[1] = (F) => S.$emit("mouseleave", F))
    }), [
      xe(p(to), {
        trapped: p(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": p(g),
        "focus-start-el": p(r),
        onFocusAfterTrapped: p(s),
        onFocusAfterReleased: p(i),
        onFocusin: p(l),
        onFocusoutPrevented: p(u),
        onReleaseRequested: p(c)
      }, {
        default: te(() => [
          ie(S.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var ia = /* @__PURE__ */ le(aa, [["__file", "content.vue"]]);
const sa = Ut(Lr), ut = Symbol("elTooltip"), hn = X({
  ...Br,
  ...mn,
  appendTo: {
    type: M([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: M(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...fn(["ariaLabel"])
}), yn = X({
  ...gn,
  disabled: Boolean,
  trigger: {
    type: M([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: M(Array),
    default: () => [Et.enter, Et.space]
  }
}), {
  useModelToggleProps: la,
  useModelToggleEmits: ua,
  useModelToggle: fa
} = Gt("visible"), pa = X({
  ...cn,
  ...la,
  ...hn,
  ...yn,
  ...dn,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), ca = [
  ...ua,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], da = (e, t) => Kn(e) ? e.includes(t) : e === t, fe = (e, t, n) => (o) => {
  da(p(e), t) && n(o);
}, va = j({
  name: "ElTooltipTrigger"
}), ga = /* @__PURE__ */ j({
  ...va,
  props: yn,
  setup(e, { expose: t }) {
    const n = e, o = Me("tooltip"), { controlled: r, id: a, open: i, onOpen: s, onClose: l, onToggle: u } = se(ut, void 0), c = _(null), d = () => {
      if (p(r) || n.disabled)
        return !0;
    }, y = we(n, "trigger"), g = Q(d, fe(y, "hover", s)), m = Q(d, fe(y, "hover", l)), v = Q(d, fe(y, "click", (h) => {
      h.button === 0 && u(h);
    })), T = Q(d, fe(y, "focus", s)), f = Q(d, fe(y, "focus", l)), w = Q(d, fe(y, "contextmenu", (h) => {
      h.preventDefault(), u(h);
    })), E = Q(d, (h) => {
      const { code: C } = h;
      n.triggerKeys.includes(C) && (h.preventDefault(), u(h));
    });
    return t({
      triggerRef: c
    }), (h, C) => (Z(), pe(p(Ur), {
      id: p(a),
      "virtual-ref": h.virtualRef,
      open: p(i),
      "virtual-triggering": h.virtualTriggering,
      class: Lt(p(o).e("trigger")),
      onBlur: p(f),
      onClick: p(v),
      onContextmenu: p(w),
      onFocus: p(T),
      onMouseenter: p(g),
      onMouseleave: p(m),
      onKeydown: p(E)
    }, {
      default: te(() => [
        ie(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var ma = /* @__PURE__ */ le(ga, [["__file", "trigger.vue"]]);
const ha = j({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), ya = /* @__PURE__ */ j({
  ...ha,
  props: hn,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = ln(), r = Me("tooltip"), a = _(null), i = _(!1), {
      controlled: s,
      id: l,
      open: u,
      trigger: c,
      onClose: d,
      onOpen: y,
      onShow: g,
      onHide: m,
      onBeforeShow: v,
      onBeforeHide: T
    } = se(ut, void 0), f = x(() => n.transition || `${r.namespace.value}-fade-in-linear`), w = x(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    Se(() => {
      i.value = !0;
    });
    const E = x(() => p(w) ? !0 : p(u)), h = x(() => n.disabled ? !1 : p(u)), C = x(() => n.appendTo || o.value), P = x(() => {
      var b;
      return (b = n.style) != null ? b : {};
    }), O = x(() => !p(u)), R = () => {
      m();
    }, k = () => {
      if (p(s))
        return !0;
    }, A = Q(k, () => {
      n.enterable && p(c) === "hover" && y();
    }), B = Q(k, () => {
      p(c) === "hover" && d();
    }), N = () => {
      var b, $;
      ($ = (b = a.value) == null ? void 0 : b.updatePopper) == null || $.call(b), v == null || v();
    }, S = () => {
      T == null || T();
    }, L = () => {
      g(), I = Xn(x(() => {
        var b;
        return (b = a.value) == null ? void 0 : b.popperContentRef;
      }), () => {
        if (p(s))
          return;
        p(c) !== "hover" && d();
      });
    }, F = () => {
      n.virtualTriggering || d();
    };
    let I;
    return D(() => p(u), (b) => {
      b || I == null || I();
    }, {
      flush: "post"
    }), D(() => n.content, () => {
      var b, $;
      ($ = (b = a.value) == null ? void 0 : b.updatePopper) == null || $.call(b);
    }), t({
      contentRef: a
    }), (b, $) => (Z(), pe(_n, {
      disabled: !b.teleported,
      to: p(C)
    }, [
      xe(Fn, {
        name: p(f),
        onAfterLeave: R,
        onBeforeEnter: N,
        onAfterEnter: L,
        onBeforeLeave: S
      }, {
        default: te(() => [
          p(E) ? $t((Z(), pe(p(ia), Ye({
            key: 0,
            id: p(l),
            ref_key: "contentRef",
            ref: a
          }, b.$attrs, {
            "aria-label": b.ariaLabel,
            "aria-hidden": p(O),
            "boundaries-padding": b.boundariesPadding,
            "fallback-placements": b.fallbackPlacements,
            "gpu-acceleration": b.gpuAcceleration,
            offset: b.offset,
            placement: b.placement,
            "popper-options": b.popperOptions,
            strategy: b.strategy,
            effect: b.effect,
            enterable: b.enterable,
            pure: b.pure,
            "popper-class": b.popperClass,
            "popper-style": [b.popperStyle, p(P)],
            "reference-el": b.referenceEl,
            "trigger-target-el": b.triggerTargetEl,
            visible: p(h),
            "z-index": b.zIndex,
            onMouseenter: p(A),
            onMouseleave: p(B),
            onBlur: F,
            onClose: p(d)
          }), {
            default: te(() => [
              i.value ? Pe("v-if", !0) : ie(b.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [Dn, p(h)]
          ]) : Pe("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var ba = /* @__PURE__ */ le(ya, [["__file", "content.vue"]]);
const wa = ["innerHTML"], Oa = { key: 1 }, Ta = j({
  name: "ElTooltip"
}), Ea = /* @__PURE__ */ j({
  ...Ta,
  props: pa,
  emits: ca,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    Mr();
    const r = Qn(), a = _(), i = _(), s = () => {
      var f;
      const w = p(a);
      w && ((f = w.popperInstanceRef) == null || f.update());
    }, l = _(!1), u = _(), { show: c, hide: d, hasUpdateHandler: y } = fa({
      indicator: l,
      toggleReason: u
    }), { onOpen: g, onClose: m } = Ir({
      showAfter: we(o, "showAfter"),
      hideAfter: we(o, "hideAfter"),
      autoClose: we(o, "autoClose"),
      open: c,
      close: d
    }), v = x(() => zt(o.visible) && !y.value);
    Ce(ut, {
      controlled: v,
      id: r,
      open: Nn(l),
      trigger: we(o, "trigger"),
      onOpen: (f) => {
        g(f);
      },
      onClose: (f) => {
        m(f);
      },
      onToggle: (f) => {
        p(l) ? m(f) : g(f);
      },
      onShow: () => {
        n("show", u.value);
      },
      onHide: () => {
        n("hide", u.value);
      },
      onBeforeShow: () => {
        n("before-show", u.value);
      },
      onBeforeHide: () => {
        n("before-hide", u.value);
      },
      updatePopper: s
    }), D(() => o.disabled, (f) => {
      f && l.value && (l.value = !1);
    });
    const T = (f) => {
      var w, E;
      const h = (E = (w = i.value) == null ? void 0 : w.contentRef) == null ? void 0 : E.popperContentRef, C = (f == null ? void 0 : f.relatedTarget) || document.activeElement;
      return h && h.contains(C);
    };
    return jn(() => l.value && d()), t({
      popperRef: a,
      contentRef: i,
      isFocusInsideContent: T,
      updatePopper: s,
      onOpen: g,
      onClose: m,
      hide: d
    }), (f, w) => (Z(), pe(p(sa), {
      ref_key: "popperRef",
      ref: a,
      role: f.role
    }, {
      default: te(() => [
        xe(ma, {
          disabled: f.disabled,
          trigger: f.trigger,
          "trigger-keys": f.triggerKeys,
          "virtual-ref": f.virtualRef,
          "virtual-triggering": f.virtualTriggering
        }, {
          default: te(() => [
            f.$slots.default ? ie(f.$slots, "default", { key: 0 }) : Pe("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        xe(ba, {
          ref_key: "contentRef",
          ref: i,
          "aria-label": f.ariaLabel,
          "boundaries-padding": f.boundariesPadding,
          content: f.content,
          disabled: f.disabled,
          effect: f.effect,
          enterable: f.enterable,
          "fallback-placements": f.fallbackPlacements,
          "hide-after": f.hideAfter,
          "gpu-acceleration": f.gpuAcceleration,
          offset: f.offset,
          persistent: f.persistent,
          "popper-class": f.popperClass,
          "popper-style": f.popperStyle,
          placement: f.placement,
          "popper-options": f.popperOptions,
          pure: f.pure,
          "raw-content": f.rawContent,
          "reference-el": f.referenceEl,
          "trigger-target-el": f.triggerTargetEl,
          "show-after": f.showAfter,
          strategy: f.strategy,
          teleported: f.teleported,
          transition: f.transition,
          "virtual-triggering": f.virtualTriggering,
          "z-index": f.zIndex,
          "append-to": f.appendTo
        }, {
          default: te(() => [
            ie(f.$slots, "content", {}, () => [
              f.rawContent ? (Z(), $e("span", {
                key: 0,
                innerHTML: f.content
              }, null, 8, wa)) : (Z(), $e("span", Oa, Ln(f.content), 1))
            ]),
            f.showArrow ? (Z(), pe(p(Wr), {
              key: 0,
              "arrow-offset": f.arrowOffset
            }, null, 8, ["arrow-offset"])) : Pe("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Ca = /* @__PURE__ */ le(Ea, [["__file", "tooltip.vue"]]);
const _a = Ut(Ca);
export {
  _a as E,
  qr as O,
  hn as a,
  fn as b,
  Q as c,
  et as d,
  vo as e,
  bo as h,
  no as i,
  po as o,
  To as p,
  fo as s,
  yn as u,
  ka as w
};
