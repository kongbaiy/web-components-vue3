import { onMounted as oe, watchEffect as ce, onBeforeUnmount as fe, isRef as me, computed as M, watch as K, onScopeDispose as ve, defineComponent as Y, createVNode as R, renderSlot as E, h as pe, inject as G, openBlock as $, createElementBlock as V, unref as o, normalizeClass as k, normalizeStyle as te, createElementVNode as U, toDisplayString as ye, withCtx as D, createBlock as _, resolveDynamicComponent as ge, createCommentVNode as j, getCurrentInstance as Ce, ref as L, nextTick as be, useSlots as he, provide as we, Teleport as Ee, Transition as ke, withDirectives as Me, mergeProps as Te, createSlots as Se, vShow as Be } from "vue";
import { k as q, t as Ie, u as x, z as ne, p as J, P as De, n as Le, o as Ae, N as X, c as Z, d as H, E as Fe, _ as le, g as Pe, U as $e, s as Q, w as Oe } from "./base-KIYEtT4d.js";
import { P as W } from "./vnode-BTm5VS2h.js";
import { i as ze, C as Ne } from "./icon-C_1Mywq7.js";
import { u as Re } from "./index-BUVGpkNy.js";
import { F as Ye, i as Ue, E as He } from "./focus-trap-DrFYrIvc.js";
import { c as Ve } from "./refs-BOcVjhLb.js";
import { U as se } from "./event-ev457TAP.js";
import { u as Xe } from "./index-3PkDc2Yq.js";
import { u as ee } from "./constants-DHmlFrYd.js";
import { a as We } from "./use-global-config-DzqEFyMH.js";
import { g as Ke } from "./scroll-BRa_D1cg.js";
import { a as _e } from "./index-BDnm0u8X.js";
const je = (e, t, i, c) => {
  let l = {
    offsetX: 0,
    offsetY: 0
  };
  const u = (m) => {
    const d = m.clientX, p = m.clientY, { offsetX: y, offsetY: b } = l, f = e.value.getBoundingClientRect(), r = f.left, w = f.top, A = f.width, O = f.height, F = document.documentElement.clientWidth, z = document.documentElement.clientHeight, N = -r + y, P = -w + b, T = F - r - A + y, S = z - w - O + b, h = (n) => {
      let v = y + n.clientX - d, g = b + n.clientY - p;
      c != null && c.value || (v = Math.min(Math.max(v, N), T), g = Math.min(Math.max(g, P), S)), l = {
        offsetX: v,
        offsetY: g
      }, e.value && (e.value.style.transform = `translate(${q(v)}, ${q(g)})`);
    }, B = () => {
      document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", B);
    };
    document.addEventListener("mousemove", h), document.addEventListener("mouseup", B);
  }, a = () => {
    t.value && e.value && t.value.addEventListener("mousedown", u);
  }, s = () => {
    t.value && e.value && t.value.removeEventListener("mousedown", u);
  };
  oe(() => {
    ce(() => {
      i.value ? a() : s();
    });
  }), fe(() => {
    s();
  });
}, qe = (e, t = {}) => {
  me(e) || Ie("[useLockscreen]", "You need to pass a ref param to this function");
  const i = t.ns || x("popup"), c = M(() => i.bm("parent", "hidden"));
  if (!ne || J(document.body, c.value))
    return;
  let l = 0, u = !1, a = "0";
  const s = () => {
    setTimeout(() => {
      Ae(document == null ? void 0 : document.body, c.value), u && document && (document.body.style.width = a);
    }, 200);
  };
  K(e, (m) => {
    if (!m) {
      s();
      return;
    }
    u = !J(document.body, c.value), u && (a = document.body.style.width), l = Ke(i.namespace.value);
    const d = document.documentElement.clientHeight < document.body.scrollHeight, p = De(document.body, "overflowY");
    l > 0 && (d || p === "scroll") && u && (document.body.style.width = `calc(100% - ${l}px)`), Le(document.body, c.value);
  }), ve(() => s());
}, ae = (e) => {
  if (!e)
    return { onClick: X, onMousedown: X, onMouseup: X };
  let t = !1, i = !1;
  return { onClick: (a) => {
    t && i && e(a), t = i = !1;
  }, onMousedown: (a) => {
    t = a.target === a.currentTarget;
  }, onMouseup: (a) => {
    i = a.target === a.currentTarget;
  } };
}, xe = Z({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: Boolean,
  overlayClass: {
    type: H([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: H([String, Number])
  }
}), Ze = {
  click: (e) => e instanceof MouseEvent
}, Ge = "overlay";
var Je = Y({
  name: "ElOverlay",
  props: xe,
  emits: Ze,
  setup(e, { slots: t, emit: i }) {
    const c = x(Ge), l = (m) => {
      i("click", m);
    }, { onClick: u, onMousedown: a, onMouseup: s } = ae(e.customMaskEvent ? void 0 : l);
    return () => e.mask ? R("div", {
      class: [c.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: u,
      onMousedown: a,
      onMouseup: s
    }, [E(t, "default")], W.STYLE | W.CLASS | W.PROPS, ["onClick", "onMouseup", "onMousedown"]) : pe("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [E(t, "default")]);
  }
});
const Qe = Je, re = Symbol("dialogInjectionKey"), ie = Z({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: ze
  },
  draggable: Boolean,
  overflow: Boolean,
  fullscreen: Boolean,
  showClose: {
    type: Boolean,
    default: !0
  },
  title: {
    type: String,
    default: ""
  },
  ariaLevel: {
    type: String,
    default: "2"
  }
}), eo = {
  close: () => !0
}, oo = ["aria-level"], to = ["aria-label"], no = ["id"], lo = Y({ name: "ElDialogContent" }), so = /* @__PURE__ */ Y({
  ...lo,
  props: ie,
  emits: eo,
  setup(e) {
    const t = e, { t: i } = Re(), { Close: c } = Ne, { dialogRef: l, headerRef: u, bodyId: a, ns: s, style: m } = G(re), { focusTrapRef: d } = G(Ye), p = M(() => [
      s.b(),
      s.is("fullscreen", t.fullscreen),
      s.is("draggable", t.draggable),
      s.is("align-center", t.alignCenter),
      { [s.m("center")]: t.center }
    ]), y = Ve(d, l), b = M(() => t.draggable), f = M(() => t.overflow);
    return je(l, u, b, f), (r, w) => ($(), V("div", {
      ref: o(y),
      class: k(o(p)),
      style: te(o(m)),
      tabindex: "-1"
    }, [
      U("header", {
        ref_key: "headerRef",
        ref: u,
        class: k([o(s).e("header"), { "show-close": r.showClose }])
      }, [
        E(r.$slots, "header", {}, () => [
          U("span", {
            role: "heading",
            "aria-level": r.ariaLevel,
            class: k(o(s).e("title"))
          }, ye(r.title), 11, oo)
        ]),
        r.showClose ? ($(), V("button", {
          key: 0,
          "aria-label": o(i)("el.dialog.close"),
          class: k(o(s).e("headerbtn")),
          type: "button",
          onClick: w[0] || (w[0] = (A) => r.$emit("close"))
        }, [
          R(o(Fe), {
            class: k(o(s).e("close"))
          }, {
            default: D(() => [
              ($(), _(ge(r.closeIcon || o(c))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, to)) : j("v-if", !0)
      ], 2),
      U("div", {
        id: o(a),
        class: k(o(s).e("body"))
      }, [
        E(r.$slots, "default")
      ], 10, no),
      r.$slots.footer ? ($(), V("footer", {
        key: 0,
        class: k(o(s).e("footer"))
      }, [
        E(r.$slots, "footer")
      ], 2)) : j("v-if", !0)
    ], 6));
  }
});
var ao = /* @__PURE__ */ le(so, [["__file", "dialog-content.vue"]]);
const ro = Z({
  ...ie,
  appendToBody: Boolean,
  appendTo: {
    type: H(String),
    default: "body"
  },
  beforeClose: {
    type: H(Function)
  },
  destroyOnClose: Boolean,
  closeOnClickModal: {
    type: Boolean,
    default: !0
  },
  closeOnPressEscape: {
    type: Boolean,
    default: !0
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  modal: {
    type: Boolean,
    default: !0
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: Boolean,
  modalClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  trapFocus: Boolean,
  headerAriaLevel: {
    type: String,
    default: "2"
  }
}), io = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [se]: (e) => Pe(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, uo = (e, t) => {
  var i;
  const l = Ce().emit, { nextZIndex: u } = Xe();
  let a = "";
  const s = ee(), m = ee(), d = L(!1), p = L(!1), y = L(!1), b = L((i = e.zIndex) != null ? i : u());
  let f, r;
  const w = We("namespace", $e), A = M(() => {
    const C = {}, I = `--${w.value}-dialog`;
    return e.fullscreen || (e.top && (C[`${I}-margin-top`] = e.top), e.width && (C[`${I}-width`] = q(e.width))), C;
  }), O = M(() => e.alignCenter ? { display: "flex" } : {});
  function F() {
    l("opened");
  }
  function z() {
    l("closed"), l(se, !1), e.destroyOnClose && (y.value = !1);
  }
  function N() {
    l("close");
  }
  function P() {
    r == null || r(), f == null || f(), e.openDelay && e.openDelay > 0 ? { stop: f } = Q(() => B(), e.openDelay) : B();
  }
  function T() {
    f == null || f(), r == null || r(), e.closeDelay && e.closeDelay > 0 ? { stop: r } = Q(() => n(), e.closeDelay) : n();
  }
  function S() {
    function C(I) {
      I || (p.value = !0, d.value = !1);
    }
    e.beforeClose ? e.beforeClose(C) : T();
  }
  function h() {
    e.closeOnClickModal && S();
  }
  function B() {
    ne && (d.value = !0);
  }
  function n() {
    d.value = !1;
  }
  function v() {
    l("openAutoFocus");
  }
  function g() {
    l("closeAutoFocus");
  }
  function ue(C) {
    var I;
    ((I = C.detail) == null ? void 0 : I.focusReason) === "pointer" && C.preventDefault();
  }
  e.lockScroll && qe(d);
  function de() {
    e.closeOnPressEscape && S();
  }
  return K(() => e.modelValue, (C) => {
    C ? (p.value = !1, P(), y.value = !0, b.value = Ue(e.zIndex) ? u() : b.value++, be(() => {
      l("open"), t.value && (t.value.scrollTop = 0);
    })) : d.value && T();
  }), K(() => e.fullscreen, (C) => {
    t.value && (C ? (a = t.value.style.transform, t.value.style.transform = "") : t.value.style.transform = a);
  }), oe(() => {
    e.modelValue && (d.value = !0, y.value = !0, P());
  }), {
    afterEnter: F,
    afterLeave: z,
    beforeLeave: N,
    handleClose: S,
    onModalClick: h,
    close: T,
    doClose: n,
    onOpenAutoFocus: v,
    onCloseAutoFocus: g,
    onCloseRequested: de,
    onFocusoutPrevented: ue,
    titleId: s,
    bodyId: m,
    closed: p,
    style: A,
    overlayDialogStyle: O,
    rendered: y,
    visible: d,
    zIndex: b
  };
}, co = ["aria-label", "aria-labelledby", "aria-describedby"], fo = Y({
  name: "ElDialog",
  inheritAttrs: !1
}), mo = /* @__PURE__ */ Y({
  ...fo,
  props: ro,
  emits: io,
  setup(e, { expose: t }) {
    const i = e, c = he();
    _e({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, M(() => !!c.title));
    const l = x("dialog"), u = L(), a = L(), s = L(), {
      visible: m,
      titleId: d,
      bodyId: p,
      style: y,
      overlayDialogStyle: b,
      rendered: f,
      zIndex: r,
      afterEnter: w,
      afterLeave: A,
      beforeLeave: O,
      handleClose: F,
      onModalClick: z,
      onOpenAutoFocus: N,
      onCloseAutoFocus: P,
      onCloseRequested: T,
      onFocusoutPrevented: S
    } = uo(i, u);
    we(re, {
      dialogRef: u,
      headerRef: a,
      bodyId: p,
      ns: l,
      rendered: f,
      style: y
    });
    const h = ae(z), B = M(() => i.draggable && !i.fullscreen);
    return t({
      visible: m,
      dialogContentRef: s
    }), (n, v) => ($(), _(Ee, {
      to: n.appendTo,
      disabled: n.appendTo !== "body" ? !1 : !n.appendToBody
    }, [
      R(ke, {
        name: "dialog-fade",
        onAfterEnter: o(w),
        onAfterLeave: o(A),
        onBeforeLeave: o(O),
        persisted: ""
      }, {
        default: D(() => [
          Me(R(o(Qe), {
            "custom-mask-event": "",
            mask: n.modal,
            "overlay-class": n.modalClass,
            "z-index": o(r)
          }, {
            default: D(() => [
              U("div", {
                role: "dialog",
                "aria-modal": "true",
                "aria-label": n.title || void 0,
                "aria-labelledby": n.title ? void 0 : o(d),
                "aria-describedby": o(p),
                class: k(`${o(l).namespace.value}-overlay-dialog`),
                style: te(o(b)),
                onClick: v[0] || (v[0] = (...g) => o(h).onClick && o(h).onClick(...g)),
                onMousedown: v[1] || (v[1] = (...g) => o(h).onMousedown && o(h).onMousedown(...g)),
                onMouseup: v[2] || (v[2] = (...g) => o(h).onMouseup && o(h).onMouseup(...g))
              }, [
                R(o(He), {
                  loop: "",
                  trapped: o(m),
                  "focus-start-el": "container",
                  onFocusAfterTrapped: o(N),
                  onFocusAfterReleased: o(P),
                  onFocusoutPrevented: o(S),
                  onReleaseRequested: o(T)
                }, {
                  default: D(() => [
                    o(f) ? ($(), _(ao, Te({
                      key: 0,
                      ref_key: "dialogContentRef",
                      ref: s
                    }, n.$attrs, {
                      center: n.center,
                      "align-center": n.alignCenter,
                      "close-icon": n.closeIcon,
                      draggable: o(B),
                      overflow: n.overflow,
                      fullscreen: n.fullscreen,
                      "show-close": n.showClose,
                      title: n.title,
                      "aria-level": n.headerAriaLevel,
                      onClose: o(F)
                    }), Se({
                      header: D(() => [
                        n.$slots.title ? E(n.$slots, "title", { key: 1 }) : E(n.$slots, "header", {
                          key: 0,
                          close: o(F),
                          titleId: o(d),
                          titleClass: o(l).e("title")
                        })
                      ]),
                      default: D(() => [
                        E(n.$slots, "default")
                      ]),
                      _: 2
                    }, [
                      n.$slots.footer ? {
                        name: "footer",
                        fn: D(() => [
                          E(n.$slots, "footer")
                        ])
                      } : void 0
                    ]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "show-close", "title", "aria-level", "onClose"])) : j("v-if", !0)
                  ]),
                  _: 3
                }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
              ], 46, co)
            ]),
            _: 3
          }, 8, ["mask", "overlay-class", "z-index"]), [
            [Be, o(m)]
          ])
        ]),
        _: 3
      }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
    ], 8, ["to", "disabled"]));
  }
});
var vo = /* @__PURE__ */ le(mo, [["__file", "dialog.vue"]]);
const Io = Oe(vo);
export {
  Io as E
};
