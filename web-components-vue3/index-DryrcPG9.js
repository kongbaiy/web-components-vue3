import { _ as K, c as q, d as M, E as ve, m as Re, u as ne, k as _e, w as De, l as ge } from "./base-KIYEtT4d.js";
import { E as be } from "./el-button-D4ef492v.js";
import { c as R, u as Me, a as ue, E as Be, O as Je, w as ce } from "./el-popper-DdrJbju1.js";
import { E as Ke } from "./el-scrollbar-CJq4fSjm.js";
import { defineComponent as B, renderSlot as _, ref as C, provide as V, inject as N, onMounted as He, unref as h, onBeforeUnmount as we, computed as T, readonly as Ge, toRef as Y, watch as Ie, resolveComponent as w, openBlock as P, createBlock as j, withCtx as g, createVNode as y, normalizeProps as je, guardReactiveProps as Qe, nextTick as Ve, getCurrentInstance as Ee, createElementBlock as U, normalizeClass as x, createSlots as ze, mergeProps as Z, createCommentVNode as ee, Fragment as Ye, createElementVNode as W, withModifiers as oe, resolveDynamicComponent as We, normalizeStyle as Ue, markRaw as Ze, createTextVNode as Xe, toDisplayString as pe } from "vue";
import { i as qe } from "./icon-C_1Mywq7.js";
import { E as S } from "./aria-CxTrhz24.js";
import { a as $e } from "./index-nT5oH0pN.js";
import { u as xe } from "./index-BUVGpkNy.js";
import { u as ye } from "./constants-DHmlFrYd.js";
import { u as eo } from "./use-form-item-8ASbR4xQ.js";
import { c as oo } from "./castArray-sLDlc9Os.js";
import { c as Ce } from "./refs-BOcVjhLb.js";
import { F as no } from "./focus-trap-DrFYrIvc.js";
import { _ as to } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const lo = /* @__PURE__ */ B({
  inheritAttrs: !1
});
function ro(e, o, i, t, a, d) {
  return _(e.$slots, "default");
}
var so = /* @__PURE__ */ K(lo, [["render", ro], ["__file", "collection.vue"]]);
const io = /* @__PURE__ */ B({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function ao(e, o, i, t, a, d) {
  return _(e.$slots, "default");
}
var uo = /* @__PURE__ */ K(io, [["render", ao], ["__file", "collection-item.vue"]]);
const Ne = "data-el-collection-item", Te = (e) => {
  const o = `El${e}Collection`, i = `${o}Item`, t = Symbol(o), a = Symbol(i), d = {
    ...so,
    name: o,
    setup() {
      const l = C(null), c = /* @__PURE__ */ new Map();
      V(t, {
        itemMap: c,
        getItems: () => {
          const v = h(l);
          if (!v)
            return [];
          const f = Array.from(v.querySelectorAll(`[${Ne}]`));
          return [...c.values()].sort((n, p) => f.indexOf(n.ref) - f.indexOf(p.ref));
        },
        collectionRef: l
      });
    }
  }, r = {
    ...uo,
    name: i,
    setup(l, { attrs: c }) {
      const m = C(null), v = N(t, void 0);
      V(a, {
        collectionItemRef: m
      }), He(() => {
        const f = h(m);
        f && v.itemMap.set(f, {
          ref: f,
          ...c
        });
      }), we(() => {
        const f = h(m);
        v.itemMap.delete(f);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: t,
    COLLECTION_ITEM_INJECTION_KEY: a,
    ElCollection: d,
    ElCollectionItem: r
  };
}, co = q({
  style: { type: M([String, Array, Object]) },
  currentTabId: {
    type: M(String)
  },
  defaultCurrentTabId: String,
  loop: Boolean,
  dir: {
    type: String,
    values: ["ltr", "rtl"],
    default: "ltr"
  },
  orientation: {
    type: M(String)
  },
  onBlur: Function,
  onFocus: Function,
  onMousedown: Function
}), {
  ElCollection: po,
  ElCollectionItem: fo,
  COLLECTION_INJECTION_KEY: te,
  COLLECTION_ITEM_INJECTION_KEY: mo
} = Te("RovingFocusGroup"), le = Symbol("elRovingFocusGroup"), he = Symbol("elRovingFocusGroupItem"), vo = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
}, go = (e, o) => e, bo = (e, o, i) => {
  const t = go(e.key);
  return vo[t];
}, wo = (e, o) => e.map((i, t) => e[(t + o) % e.length]), re = (e) => {
  const { activeElement: o } = document;
  for (const i of e)
    if (i === o || (i.focus(), o !== document.activeElement))
      return;
}, fe = "currentTabIdChange", me = "rovingFocusGroup.entryFocus", Io = { bubbles: !1, cancelable: !0 }, Eo = B({
  name: "ElRovingFocusGroupImpl",
  inheritAttrs: !1,
  props: co,
  emits: [fe, "entryFocus"],
  setup(e, { emit: o }) {
    var i;
    const t = C((i = e.currentTabId || e.defaultCurrentTabId) != null ? i : null), a = C(!1), d = C(!1), r = C(null), { getItems: l } = N(te, void 0), c = T(() => [
      {
        outline: "none"
      },
      e.style
    ]), m = (u) => {
      o(fe, u);
    }, v = () => {
      a.value = !0;
    }, f = R((u) => {
      var b;
      (b = e.onMousedown) == null || b.call(e, u);
    }, () => {
      d.value = !0;
    }), I = R((u) => {
      var b;
      (b = e.onFocus) == null || b.call(e, u);
    }, (u) => {
      const b = !h(d), { target: J, currentTarget: F } = u;
      if (J === F && b && !h(a)) {
        const H = new Event(me, Io);
        if (F == null || F.dispatchEvent(H), !H.defaultPrevented) {
          const E = l().filter((A) => A.focusable), k = E.find((A) => A.active), O = E.find((A) => A.id === h(t)), G = [k, O, ...E].filter(Boolean).map((A) => A.ref);
          re(G);
        }
      }
      d.value = !1;
    }), n = R((u) => {
      var b;
      (b = e.onBlur) == null || b.call(e, u);
    }, () => {
      a.value = !1;
    }), p = (...u) => {
      o("entryFocus", ...u);
    };
    V(le, {
      currentTabbedId: Ge(t),
      loop: Y(e, "loop"),
      tabIndex: T(() => h(a) ? -1 : 0),
      rovingFocusGroupRef: r,
      rovingFocusGroupRootStyle: c,
      orientation: Y(e, "orientation"),
      dir: Y(e, "dir"),
      onItemFocus: m,
      onItemShiftTab: v,
      onBlur: n,
      onFocus: I,
      onMousedown: f
    }), Ie(() => e.currentTabId, (u) => {
      t.value = u ?? null;
    }), $e(r, me, p);
  }
});
function yo(e, o, i, t, a, d) {
  return _(e.$slots, "default");
}
var Co = /* @__PURE__ */ K(Eo, [["render", yo], ["__file", "roving-focus-group-impl.vue"]]);
const No = B({
  name: "ElRovingFocusGroup",
  components: {
    ElFocusGroupCollection: po,
    ElRovingFocusGroupImpl: Co
  }
});
function To(e, o, i, t, a, d) {
  const r = w("el-roving-focus-group-impl"), l = w("el-focus-group-collection");
  return P(), j(l, null, {
    default: g(() => [
      y(r, je(Qe(e.$attrs)), {
        default: g(() => [
          _(e.$slots, "default")
        ]),
        _: 3
      }, 16)
    ]),
    _: 3
  });
}
var ho = /* @__PURE__ */ K(No, [["render", To], ["__file", "roving-focus-group.vue"]]);
const ko = B({
  components: {
    ElRovingFocusCollectionItem: fo
  },
  props: {
    focusable: {
      type: Boolean,
      default: !0
    },
    active: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["mousedown", "focus", "keydown"],
  setup(e, { emit: o }) {
    const { currentTabbedId: i, loop: t, onItemFocus: a, onItemShiftTab: d } = N(le, void 0), { getItems: r } = N(te, void 0), l = ye(), c = C(null), m = R((n) => {
      o("mousedown", n);
    }, (n) => {
      e.focusable ? a(h(l)) : n.preventDefault();
    }), v = R((n) => {
      o("focus", n);
    }, () => {
      a(h(l));
    }), f = R((n) => {
      o("keydown", n);
    }, (n) => {
      const { key: p, shiftKey: u, target: b, currentTarget: J } = n;
      if (p === S.tab && u) {
        d();
        return;
      }
      if (b !== J)
        return;
      const F = bo(n);
      if (F) {
        n.preventDefault();
        let E = r().filter((k) => k.focusable).map((k) => k.ref);
        switch (F) {
          case "last": {
            E.reverse();
            break;
          }
          case "prev":
          case "next": {
            F === "prev" && E.reverse();
            const k = E.indexOf(J);
            E = t.value ? wo(E, k + 1) : E.slice(k + 1);
            break;
          }
        }
        Ve(() => {
          re(E);
        });
      }
    }), I = T(() => i.value === h(l));
    return V(he, {
      rovingFocusGroupItemRef: c,
      tabIndex: T(() => h(I) ? 0 : -1),
      handleMousedown: m,
      handleFocus: v,
      handleKeydown: f
    }), {
      id: l,
      handleKeydown: f,
      handleFocus: v,
      handleMousedown: m
    };
  }
});
function So(e, o, i, t, a, d) {
  const r = w("el-roving-focus-collection-item");
  return P(), j(r, {
    id: e.id,
    focusable: e.focusable,
    active: e.active
  }, {
    default: g(() => [
      _(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "focusable", "active"]);
}
var Oo = /* @__PURE__ */ K(ko, [["render", So], ["__file", "roving-focus-item.vue"]]);
const Ao = q({
  trigger: Me.trigger,
  effect: {
    ...ue.effect,
    default: "light"
  },
  type: {
    type: M(String)
  },
  placement: {
    type: M(String),
    default: "bottom"
  },
  popperOptions: {
    type: M(Object),
    default: () => ({})
  },
  id: String,
  size: {
    type: String,
    default: ""
  },
  splitButton: Boolean,
  hideOnClick: {
    type: Boolean,
    default: !0
  },
  loop: {
    type: Boolean,
    default: !0
  },
  showTimeout: {
    type: Number,
    default: 150
  },
  hideTimeout: {
    type: Number,
    default: 150
  },
  tabindex: {
    type: M([Number, String]),
    default: 0
  },
  maxHeight: {
    type: M([Number, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: Boolean,
  role: {
    type: String,
    default: "menu"
  },
  buttonProps: {
    type: M(Object)
  },
  teleported: ue.teleported
}), ke = q({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: qe
  }
}), Po = q({
  onKeydown: { type: M(Function) }
}), Fo = [
  S.down,
  S.pageDown,
  S.home
], Se = [S.up, S.pageUp, S.end], Lo = [...Fo, ...Se], {
  ElCollection: Ro,
  ElCollectionItem: _o,
  COLLECTION_INJECTION_KEY: Do,
  COLLECTION_ITEM_INJECTION_KEY: Mo
} = Te("Dropdown"), $ = Symbol("elDropdown"), { ButtonGroup: Bo } = be, Jo = B({
  name: "ElDropdown",
  components: {
    ElButton: be,
    ElButtonGroup: Bo,
    ElScrollbar: Ke,
    ElDropdownCollection: Ro,
    ElTooltip: Be,
    ElRovingFocusGroup: ho,
    ElOnlyChild: Je,
    ElIcon: ve,
    ArrowDown: Re
  },
  props: Ao,
  emits: ["visible-change", "click", "command"],
  setup(e, { emit: o }) {
    const i = Ee(), t = ne("dropdown"), { t: a } = xe(), d = C(), r = C(), l = C(null), c = C(null), m = C(null), v = C(null), f = C(!1), I = [S.enter, S.space, S.down], n = T(() => ({
      maxHeight: _e(e.maxHeight)
    })), p = T(() => [t.m(k.value)]), u = T(() => oo(e.trigger)), b = ye().value, J = T(() => e.id || b);
    Ie([d, u], ([s, L], [Q]) => {
      var ie, ae, de;
      (ie = Q == null ? void 0 : Q.$el) != null && ie.removeEventListener && Q.$el.removeEventListener("pointerenter", D), (ae = s == null ? void 0 : s.$el) != null && ae.removeEventListener && s.$el.removeEventListener("pointerenter", D), (de = s == null ? void 0 : s.$el) != null && de.addEventListener && L.includes("hover") && s.$el.addEventListener("pointerenter", D);
    }, { immediate: !0 }), we(() => {
      var s, L;
      (L = (s = d.value) == null ? void 0 : s.$el) != null && L.removeEventListener && d.value.$el.removeEventListener("pointerenter", D);
    });
    function F() {
      H();
    }
    function H() {
      var s;
      (s = l.value) == null || s.onClose();
    }
    function E() {
      var s;
      (s = l.value) == null || s.onOpen();
    }
    const k = eo();
    function O(...s) {
      o("command", ...s);
    }
    function D() {
      var s, L;
      (L = (s = d.value) == null ? void 0 : s.$el) == null || L.focus();
    }
    function G() {
    }
    function A() {
      const s = h(c);
      u.value.includes("hover") && (s == null || s.focus()), v.value = null;
    }
    function se(s) {
      v.value = s;
    }
    function X(s) {
      f.value || (s.preventDefault(), s.stopImmediatePropagation());
    }
    function z() {
      o("visible-change", !0);
    }
    function Fe(s) {
      (s == null ? void 0 : s.type) === "keydown" && c.value.focus();
    }
    function Le() {
      o("visible-change", !1);
    }
    return V($, {
      contentRef: c,
      role: T(() => e.role),
      triggerId: J,
      isUsingKeyboard: f,
      onItemEnter: G,
      onItemLeave: A
    }), V("elDropdown", {
      instance: i,
      dropdownSize: k,
      handleClick: F,
      commandHandler: O,
      trigger: Y(e, "trigger"),
      hideOnClick: Y(e, "hideOnClick")
    }), {
      t: a,
      ns: t,
      scrollbar: m,
      wrapStyle: n,
      dropdownTriggerKls: p,
      dropdownSize: k,
      triggerId: J,
      triggerKeys: I,
      currentTabId: v,
      handleCurrentTabIdChange: se,
      handlerMainButtonClick: (s) => {
        o("click", s);
      },
      handleEntryFocus: X,
      handleClose: H,
      handleOpen: E,
      handleBeforeShowTooltip: z,
      handleShowTooltip: Fe,
      handleBeforeHideTooltip: Le,
      onFocusAfterTrapped: (s) => {
        var L, Q;
        s.preventDefault(), (Q = (L = c.value) == null ? void 0 : L.focus) == null || Q.call(L, {
          preventScroll: !0
        });
      },
      popperRef: l,
      contentRef: c,
      triggeringElementRef: d,
      referenceElementRef: r
    };
  }
});
function Ko(e, o, i, t, a, d) {
  var r;
  const l = w("el-dropdown-collection"), c = w("el-roving-focus-group"), m = w("el-scrollbar"), v = w("el-only-child"), f = w("el-tooltip"), I = w("el-button"), n = w("arrow-down"), p = w("el-icon"), u = w("el-button-group");
  return P(), U("div", {
    class: x([e.ns.b(), e.ns.is("disabled", e.disabled)])
  }, [
    y(f, {
      ref: "popperRef",
      role: e.role,
      effect: e.effect,
      "fallback-placements": ["bottom", "top"],
      "popper-options": e.popperOptions,
      "gpu-acceleration": !1,
      "hide-after": e.trigger === "hover" ? e.hideTimeout : 0,
      "manual-mode": !0,
      placement: e.placement,
      "popper-class": [e.ns.e("popper"), e.popperClass],
      "reference-element": (r = e.referenceElementRef) == null ? void 0 : r.$el,
      trigger: e.trigger,
      "trigger-keys": e.triggerKeys,
      "trigger-target-el": e.contentRef,
      "show-after": e.trigger === "hover" ? e.showTimeout : 0,
      "stop-popper-mouse-event": !1,
      "virtual-ref": e.triggeringElementRef,
      "virtual-triggering": e.splitButton,
      disabled: e.disabled,
      transition: `${e.ns.namespace.value}-zoom-in-top`,
      teleported: e.teleported,
      pure: "",
      persistent: "",
      onBeforeShow: e.handleBeforeShowTooltip,
      onShow: e.handleShowTooltip,
      onBeforeHide: e.handleBeforeHideTooltip
    }, ze({
      content: g(() => [
        y(m, {
          ref: "scrollbar",
          "wrap-style": e.wrapStyle,
          tag: "div",
          "view-class": e.ns.e("list")
        }, {
          default: g(() => [
            y(c, {
              loop: e.loop,
              "current-tab-id": e.currentTabId,
              orientation: "horizontal",
              onCurrentTabIdChange: e.handleCurrentTabIdChange,
              onEntryFocus: e.handleEntryFocus
            }, {
              default: g(() => [
                y(l, null, {
                  default: g(() => [
                    _(e.$slots, "dropdown")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["loop", "current-tab-id", "onCurrentTabIdChange", "onEntryFocus"])
          ]),
          _: 3
        }, 8, ["wrap-style", "view-class"])
      ]),
      _: 2
    }, [
      e.splitButton ? void 0 : {
        name: "default",
        fn: g(() => [
          y(v, {
            id: e.triggerId,
            ref: "triggeringElementRef",
            role: "button",
            tabindex: e.tabindex
          }, {
            default: g(() => [
              _(e.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "tabindex"])
        ])
      }
    ]), 1032, ["role", "effect", "popper-options", "hide-after", "placement", "popper-class", "reference-element", "trigger", "trigger-keys", "trigger-target-el", "show-after", "virtual-ref", "virtual-triggering", "disabled", "transition", "teleported", "onBeforeShow", "onShow", "onBeforeHide"]),
    e.splitButton ? (P(), j(u, { key: 0 }, {
      default: g(() => [
        y(I, Z({ ref: "referenceElementRef" }, e.buttonProps, {
          size: e.dropdownSize,
          type: e.type,
          disabled: e.disabled,
          tabindex: e.tabindex,
          onClick: e.handlerMainButtonClick
        }), {
          default: g(() => [
            _(e.$slots, "default")
          ]),
          _: 3
        }, 16, ["size", "type", "disabled", "tabindex", "onClick"]),
        y(I, Z({
          id: e.triggerId,
          ref: "triggeringElementRef"
        }, e.buttonProps, {
          role: "button",
          size: e.dropdownSize,
          type: e.type,
          class: e.ns.e("caret-button"),
          disabled: e.disabled,
          tabindex: e.tabindex,
          "aria-label": e.t("el.dropdown.toggleDropdown")
        }), {
          default: g(() => [
            y(p, {
              class: x(e.ns.e("icon"))
            }, {
              default: g(() => [
                y(n)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 16, ["id", "size", "type", "class", "disabled", "tabindex", "aria-label"])
      ]),
      _: 3
    })) : ee("v-if", !0)
  ], 2);
}
var Ho = /* @__PURE__ */ K(Jo, [["render", Ko], ["__file", "dropdown.vue"]]);
const Go = B({
  name: "DropdownItemImpl",
  components: {
    ElIcon: ve
  },
  props: ke,
  emits: ["pointermove", "pointerleave", "click", "clickimpl"],
  setup(e, { emit: o }) {
    const i = ne("dropdown"), { role: t } = N($, void 0), { collectionItemRef: a } = N(Mo, void 0), { collectionItemRef: d } = N(mo, void 0), {
      rovingFocusGroupItemRef: r,
      tabIndex: l,
      handleFocus: c,
      handleKeydown: m,
      handleMousedown: v
    } = N(he, void 0), f = Ce(a, d, r), I = T(() => t.value === "menu" ? "menuitem" : t.value === "navigation" ? "link" : "button"), n = R((p) => {
      const { code: u } = p;
      if (u === S.enter || u === S.space)
        return p.preventDefault(), p.stopImmediatePropagation(), o("clickimpl", p), !0;
    }, m);
    return {
      ns: i,
      itemRef: f,
      dataset: {
        [Ne]: ""
      },
      role: I,
      tabIndex: l,
      handleFocus: c,
      handleKeydown: n,
      handleMousedown: v
    };
  }
}), jo = ["aria-disabled", "tabindex", "role"];
function Qo(e, o, i, t, a, d) {
  const r = w("el-icon");
  return P(), U(Ye, null, [
    e.divided ? (P(), U("li", Z({
      key: 0,
      role: "separator",
      class: e.ns.bem("menu", "item", "divided")
    }, e.$attrs), null, 16)) : ee("v-if", !0),
    W("li", Z({ ref: e.itemRef }, { ...e.dataset, ...e.$attrs }, {
      "aria-disabled": e.disabled,
      class: [e.ns.be("menu", "item"), e.ns.is("disabled", e.disabled)],
      tabindex: e.tabIndex,
      role: e.role,
      onClick: o[0] || (o[0] = (l) => e.$emit("clickimpl", l)),
      onFocus: o[1] || (o[1] = (...l) => e.handleFocus && e.handleFocus(...l)),
      onKeydown: o[2] || (o[2] = oe((...l) => e.handleKeydown && e.handleKeydown(...l), ["self"])),
      onMousedown: o[3] || (o[3] = (...l) => e.handleMousedown && e.handleMousedown(...l)),
      onPointermove: o[4] || (o[4] = (l) => e.$emit("pointermove", l)),
      onPointerleave: o[5] || (o[5] = (l) => e.$emit("pointerleave", l))
    }), [
      e.icon ? (P(), j(r, { key: 0 }, {
        default: g(() => [
          (P(), j(We(e.icon)))
        ]),
        _: 1
      })) : ee("v-if", !0),
      _(e.$slots, "default")
    ], 16, jo)
  ], 64);
}
var Vo = /* @__PURE__ */ K(Go, [["render", Qo], ["__file", "dropdown-item-impl.vue"]]);
const Oe = () => {
  const e = N("elDropdown", {}), o = T(() => e == null ? void 0 : e.dropdownSize);
  return {
    elDropdown: e,
    _elDropdownSize: o
  };
}, zo = B({
  name: "ElDropdownItem",
  components: {
    ElDropdownCollectionItem: _o,
    ElRovingFocusItem: Oo,
    ElDropdownItemImpl: Vo
  },
  inheritAttrs: !1,
  props: ke,
  emits: ["pointermove", "pointerleave", "click"],
  setup(e, { emit: o, attrs: i }) {
    const { elDropdown: t } = Oe(), a = Ee(), d = C(null), r = T(() => {
      var n, p;
      return (p = (n = h(d)) == null ? void 0 : n.textContent) != null ? p : "";
    }), { onItemEnter: l, onItemLeave: c } = N($, void 0), m = R((n) => (o("pointermove", n), n.defaultPrevented), ce((n) => {
      if (e.disabled) {
        c(n);
        return;
      }
      const p = n.currentTarget;
      p === document.activeElement || p.contains(document.activeElement) || (l(n), n.defaultPrevented || p == null || p.focus());
    })), v = R((n) => (o("pointerleave", n), n.defaultPrevented), ce((n) => {
      c(n);
    })), f = R((n) => {
      if (!e.disabled)
        return o("click", n), n.type !== "keydown" && n.defaultPrevented;
    }, (n) => {
      var p, u, b;
      if (e.disabled) {
        n.stopImmediatePropagation();
        return;
      }
      (p = t == null ? void 0 : t.hideOnClick) != null && p.value && ((u = t.handleClick) == null || u.call(t)), (b = t.commandHandler) == null || b.call(t, e.command, a, n);
    }), I = T(() => ({ ...e, ...i }));
    return {
      handleClick: f,
      handlePointerMove: m,
      handlePointerLeave: v,
      textContent: r,
      propsAndAttrs: I
    };
  }
});
function Yo(e, o, i, t, a, d) {
  var r;
  const l = w("el-dropdown-item-impl"), c = w("el-roving-focus-item"), m = w("el-dropdown-collection-item");
  return P(), j(m, {
    disabled: e.disabled,
    "text-value": (r = e.textValue) != null ? r : e.textContent
  }, {
    default: g(() => [
      y(c, {
        focusable: !e.disabled
      }, {
        default: g(() => [
          y(l, Z(e.propsAndAttrs, {
            onPointerleave: e.handlePointerLeave,
            onPointermove: e.handlePointerMove,
            onClickimpl: e.handleClick
          }), {
            default: g(() => [
              _(e.$slots, "default")
            ]),
            _: 3
          }, 16, ["onPointerleave", "onPointermove", "onClickimpl"])
        ]),
        _: 3
      }, 8, ["focusable"])
    ]),
    _: 3
  }, 8, ["disabled", "text-value"]);
}
var Ae = /* @__PURE__ */ K(zo, [["render", Yo], ["__file", "dropdown-item.vue"]]);
const Wo = B({
  name: "ElDropdownMenu",
  props: Po,
  setup(e) {
    const o = ne("dropdown"), { _elDropdownSize: i } = Oe(), t = i.value, { focusTrapRef: a, onKeydown: d } = N(no, void 0), { contentRef: r, role: l, triggerId: c } = N($, void 0), { collectionRef: m, getItems: v } = N(Do, void 0), {
      rovingFocusGroupRef: f,
      rovingFocusGroupRootStyle: I,
      tabIndex: n,
      onBlur: p,
      onFocus: u,
      onMousedown: b
    } = N(le, void 0), { collectionRef: J } = N(te, void 0), F = T(() => [o.b("menu"), o.bm("menu", t == null ? void 0 : t.value)]), H = Ce(r, m, a, f, J), E = R((O) => {
      var D;
      (D = e.onKeydown) == null || D.call(e, O);
    }, (O) => {
      const { currentTarget: D, code: G, target: A } = O;
      if (D.contains(A), S.tab === G && O.stopImmediatePropagation(), O.preventDefault(), A !== h(r) || !Lo.includes(G))
        return;
      const X = v().filter((z) => !z.disabled).map((z) => z.ref);
      Se.includes(G) && X.reverse(), re(X);
    });
    return {
      size: t,
      rovingFocusGroupRootStyle: I,
      tabIndex: n,
      dropdownKls: F,
      role: l,
      triggerId: c,
      dropdownListWrapperRef: H,
      handleKeydown: (O) => {
        E(O), d(O);
      },
      onBlur: p,
      onFocus: u,
      onMousedown: b
    };
  }
}), Uo = ["role", "aria-labelledby"];
function Zo(e, o, i, t, a, d) {
  return P(), U("ul", {
    ref: e.dropdownListWrapperRef,
    class: x(e.dropdownKls),
    style: Ue(e.rovingFocusGroupRootStyle),
    tabindex: -1,
    role: e.role,
    "aria-labelledby": e.triggerId,
    onBlur: o[0] || (o[0] = (...r) => e.onBlur && e.onBlur(...r)),
    onFocus: o[1] || (o[1] = (...r) => e.onFocus && e.onFocus(...r)),
    onKeydown: o[2] || (o[2] = oe((...r) => e.handleKeydown && e.handleKeydown(...r), ["self"])),
    onMousedown: o[3] || (o[3] = oe((...r) => e.onMousedown && e.onMousedown(...r), ["self"]))
  }, [
    _(e.$slots, "default")
  ], 46, Uo);
}
var Pe = /* @__PURE__ */ K(Wo, [["render", Zo], ["__file", "dropdown-menu.vue"]]);
const Xo = De(Ho, {
  DropdownItem: Ae,
  DropdownMenu: Pe
}), qo = ge(Ae), $o = ge(Pe), xo = {
  viewBox: "0 0 1024 1024",
  width: "1.2em",
  height: "1.2em"
}, en = /* @__PURE__ */ W("path", {
  fill: "currentColor",
  d: "m192 384l320 384l320-384z"
}, null, -1), on = [
  en
];
function nn(e, o) {
  return P(), U("svg", xo, [...on]);
}
const tn = Ze({ name: "ep-caret-bottom", render: nn }), ln = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABMCAYAAADOfPFRAAAAAXNSR0IArs4c6QAAFahJREFUeF7tnAlwndV1x3/37Yv0tNqWLMkLCO8LNnjBrMbGxIYmlIQkJWShhSSTpe0E2kmnadpOl5nOpJmE0LSUltAmJYEkTAzYYLMYYwevYPAir7It29iSZW1vX79bnfuebNnI0tN7z5lkJofRYFvfd5f/d/Zz7lX8BklrbQeuBeYCU4EpQDNQA5QB5bnlhIAw0AUcAQ4BB4H3gfeUUpnf1LLVlZ5Ia93Uv7E/BJYBtwCVRc7ZC7wFvA78Qil1usjxhn39igCktfYAnwL+uH8jNwNXZB5AOOk14MfAL5VS8VKDVdKFa60rgD8FvgaMLfViRxjvLPA48JhSqq9Uc5cEIK21q19ffB34a6CqVIsrcJxu4J/79doPlFLJAsc4/1rRAGmtlwJPANcUu5gSv38Y+JJSakMx4xYMkNba1295vgN8OV8dk8lkCIXCdHV1c+qDM5xpb+dM+1nz91AoRDyR/eAet4uKQIDa2hoaGuqZ0NRIY+N4qquqcLmcKJX3sjXwH/0W8VGlVLQQoPKeafDgWmsxz7/styKzRjNpMBTi7NlOTp/uoO3EKdrbOzjb2UlPTy+hcIRkMguQy+WivLyMmuoq6uvH0dTYwNWTJzF+fB0VFRW43SLRo6J9wL1KKXEXRkWjBkhrvQJ4DhCFnDedO9dFW9tJDhw6wpHWY5w6ddpwTTQWI5FIkk6nLxrL4XDg9Xjw+jzU1tRwTfNVTJlyNVdfNZn6unGUlfnznjv3YBC4Tym1fjQvjgogrfVngacARz6TyKaDwRBd3d0GnNbWYxw83MqJkx/Q29uH1iIBw5M84XDYaaiv46rJE5k6pZlJkyYaziovK8PjceN0OrHbxQcdkeQrPKSU+p8Rn8w9kDdAWuuHc8o4r3disTgdHR2GW44ebaPtxEk6znbSea6LSCRKFpuRARrYiHBURUWA+rqxNDY0MGFCI3V1YxlbW0sgUI7P58XhdOCwO7DbbQYwm802lL6SSUV5P5kPSHltVmt9X39o8FMgr88kABxva6Nl/wH2tRw0HNPT1Us8ESedsQzn5MM9Q23A4/ZQWRlg3LixBqC6cWOprKwwOsvtcuH1es4rePm3yyh0cTDvV0qJqhiWRgRIa3078LLozpEGk9/H43Fajx5j67bt7HpvN8fbThCLpVDKhs1uR2sLndHIf4WScIbH46GszGfA8Pl8+P0+I25i6SZPnsjMGVMZX183nOiJRViplHpjuHUMC1DOWm3PVyGLGf/g9Bl27HiHNzZsZP+BA8Y6+bx+vH4/ymbHSmeQ5wrloEs343CIODlwOV14vB4axtcx79rZLF60gMmTJoykm8TjXjicdbssQDk/Z9toTLko3vd372XTpi1s2bqV0+1njE7weHx4fD7sTic6Y5HJpNFW4Rw05BdX4PP6mDrlahYvvJ5Fi66jsWF8Pj7T3n4JWXQ5P2k4gP4N+Eq+YmBZllHEb218m02/3srBQwcJRcKkjPl24HR7cbs9uJwOXA6F3Th7GsGpFNykbDajk66fN5cF1883Iia6KU/6oVLqq0M9OyRAWuubcimFEXXUwKDRaIy9+1pYt/51tmzbaTzlRCpJLJ4gnQGX02t0hc/nxuty4rTbsNkUynYBoDys/kV7GFDAwotut5tpU67mlptuYP68ucapFMuXJ8kQtyilNl/6/IcA0FrLqO/2e8qz8xzcPCbhwo6d77Lm5XXsfPd9enr6CMfjxGIJ3E4ntZWVeL1+LGxoBQ67DZfThlN0iM1mxtCW8NTFoid/O7/IQatV8gsx4ygsMKZ+/txZLF92C7NmzaDMP2pHcg8wXyl1kcc6FEDf6M/s/etowBHxOn36DL9+eysvvvQKu/bsJRpPEorEjM6Z0jSGedMmYXO4OPJBH2e6Q1hYuI237MDtdGR1xXlsLoCU/ZPAcAEqS9wEkU2bDZuyGVCrKwPMnz+HFcuXMmvmdMNRBdAjSqnvDn7vIoBy+Zyj/TmV6tEMnkqlOH78BJs2v80La17hvT37SWYyKK2Z1jSGjy+fx4J5V5NOwcYdrby24winOoNktMbncVHmdRuOsimFTYFgldVQ2Z+sKImyEm6xSKUsEilxZZThQJuyKPN7mX/tbO5csYxr584xHFUA9QCTB+eTLgXoW/3O4D+MdmDxmg8faeXNjZtZvWYde1oOY7cpZk0ex0P33MDKVQsINNRixVMc39fG6vXvs2bLYVrP9KC1wud14nY5cdltGLMtKBnGEc65QBlLk0xlSKTSpNPacJVEGDaVwaEs5syawcqVd7Jk8ULq6sYZT7oA+rZS6jwG5+fXWnv7U6Qn+rNytaMdNByOcODgIV7bsIkX1rxquGlKYy0P/sEiPvGxRfgn1xlxIJmGWIyOox28vuUQ67a1su9YJ33h+Hm9lA0Tshs7z0nCPGDAEU/c53YyttKP26EIRSL0BEPE4jGmXNPM3StXcNutN5mgtkAxO9cfb05QSsWywp0jrfXngadHC448LwHp3pb9rFm3gZfWvoZfpfjcqgXct2oBNc31IPsNJ0BMvscBTjupYIz9LafZsP0I21tOcryjj0gsSTJjkc5kzf/A4sQNSFsWVsYi4Pcyt3kcN86egM9lY//R02zbe5Sjp7tonNDA3Xcu5/bbbmbmjOkm/CiQvjAQ0A4GSCoFkmAfNfX2BXl31x7DPW9seIv5k2v5xgNLmbNkOnicEIxAKIqx9343BPwgXBJLEewMcvB4B3tbOzjU1smpjj56QwmiyRQZUTOikHOf0u20c01TDXcsvoZF107GoTQ7dh3m+dfeZ8OuVlz+AB9ZfgsfuWMpC+bPpbq64OzvZqWUwcIApLWeABzPNzN4KYLCQbt27WHNmld5feMmbp45nm984Q4mzL0Ks8veIIgYZSyU0wkelygOcKis6GUsorEE586F6ejoo6snQlcwSjxpmQUqu8LltFPuddBYX820mU34JoxFtH7bzkP8+PktPL12J3HLyZ0rbuFjq5azZNH11NaOytYM3pZ8k0lKqRMDAEkl4vujZp3cC5IJPHq8jbXr32T16rXMbSrjLx/6CI2zJkM0Dr0hrHgya5rFUolmtdtQApD82WHLApbRhstSyRTxZJqk/F1MvBJrpfA6bDgCPqirAqeIT5KuXQd54idv8sOfb8bvLefue+/io6vEks2iojBLNgDDnyulvj8A0DpAMoUFkeiISDTI29t38OR/PYMvFeSvvrSKaQumQiyO7o2gEymjQ0TdSmSvbMp40oaD5McuYImykn/D6CmjpQdcIvm/ZWXBFBH1+iAZ5+j2/Xz3R6/yk5d2MGPKNTz48APccduNNDQ24nTm7UkPte/1Sqk7Vc5zlqhWkvAFk9ZJWvbv5QePP83ZY6088tAKbrxxRnaDkQTEkwYgCSeMX5P9NIgvbIAwYOUAE6DMzyAjL+53KufkCheV+6EvxOaNu/nuT95gw7bD3HnHrTzytQeZPXc2Hl/BCnoAA0nyVwpAC/vzIhK1F0Fih+McO9zCE088w+GWA3z23sUsWzKd8jJfVnSEg5LZNIdwT5YzBthDxChn1yU+M6DlNOJ5U6aySl5EsqYcyr1ETnby4rqdPLV6C21dMR74+Eq++NlPMLZxEspRkCd9KQaLBKAv5lKphQOkU5AOcqb1AL98fh17dh/g+jkTuW3xNK5qGoNdgsZk2jiK5wEaZjYTZxm6EJnJezYLlMsBYyvA5+bYvjae/dUWNu44RO2YWu6/dxlLl96Mp7oelFe0e+F7yr75JQHosVxVtPDB0hFInCN85jjbtu5i975WKso8XDd7EtOax+MWqyUAJbN5IMNBl6PBseqAic9ae5PvNQAJB7md7HrnCM+9sIX29l5umDeFVSsW0jB1GspdDbYA2IvmoscFoDXAqsLRkTxrH8TPYvW1037yBMfa2kmlMjTVVdFUX43L64S0ZbKJOSU06ulM8C76S5S36CCHjXffP8brm/ZiS2uW3TCNOfOmYKscA7ZKcNfkLN2opxr8whoBSML8URUAPzRlPAiRsxDpIBPpJhqJkIincNnteL0unLIprbGKzCJmfSKb8aO00hw72cmRox34HQ5mTmmgsr4WPBXgqgHfOHAVraj3CEBn+suzdUXhnIxCqAOiZyHRA1bSOH86bWVFKidRpUiySsQv1s5SmkgsQTSaxG13UFHuRXm94KmCsjrwjwVnUYZZIGkXgKSbqzio0wl05Bwq1A6xc6ATWVESvydjGffFUN75yeE/14AR1CYjKbUvW9ZHsrsMODpQj/LVZP9eHIUEoOI/rCVReg8E2yF0GtK5PoFcYqsEM1y0zQGPAId45DlLZVwAH1Q2QHl9VtRsRVsxyWnJ586v5nV5y2NBUgLSdug7CTHpkssZalMkLO4zDvW2OJvGGg7kfLTopkqobISyseAS8SqeZQUgyX9IE2VxJGIW64a+D9DhLkjHwTLheHHjDvP2BefSmbVYZbUQqEMJ9xQvXjJzWACSKH5i0buQjHsqBtFudLgTHe2GVBQyEh5cKZAkI+ACdwDlr0X5a8BbmQUn/x6i4bZulPR7ubbcojEyHCMgxXrQoQ50pCsLkoB3JcjmMLpGCeeUjUN5AlCaEGNgtcbMF+8oDt68gGH00Vl0uCPLSWlRcyWkAYZ0+VEiUuV14KsqNTiy4LWlCTUu3buxar3oYDtarFpcPIkSkkkJ2MBfg61qguEeXJJSL14pX7JKE2oUH6wOtfdUHISDek+io105XVQCkLL5EnB4UeXjUNUTQHweAaz0ZILVEqQ7hliZiJroot5TEDqDFrErga42PCJK2F+FEo85UFeKkOJy0Jp0hxMQx6Vov/xDs4iCFmUdPGM8bZ1J5oSgQFEwhUUF3oosMBJOiO8jyrr0lE2Yybha66JSrpddWyaVjfQlTgueQifDSK7Hkuyg5HpyHuQFizxQQc2pE/NcroAoIYXJMrqhrBrKx2fjLofkfQoEfHhQsynXHEBFJe0vP48k4ZMQPpfzsLvBSiHdBpYl2cWs+T9fWr5QCcv+uwBkPGZJ7EsJ1YF2eNH+GlSgIesQXhndI9NflLQvquwz/IfQWSsmYciA8yhet3DXIE/7Q02dRpwkoS/ASAJfQLVI2TzGrDtrJqHcxcXYw6z74rJPjos29Z+ckb6g0pMAEQ+iRWmHO1DxPpS4AiIaEoWbvhcRuZxDKVwjv7M7sz8ikIkY4VAvGbsPd10znrqpKBNvXRG6uHCYA6jg0nNeS9QWVqyPZPt+dNdx02lm9waywaYAKD/GhGf7fgwZ5avIJOLEejsIdXWAr5pA8yJ8TbNKlZgfavkPKqVMGb4kzQt5ASRlrWSMyNFtJNt24HK48daMx+HJlaFNJSPn48iAoqPSaVLRGNFgN9FzJ4kFO3GPmUz1tXfha5xZknTGEGsfunkhx0Xf7gft7/Pd8GifE4DCB98ivG8ddm3hqmrAUV6L0+PFbnNmC4lKUrMWmVSKeDRCrK+HRLALHWnHngnjnXgdgevvwz22+UpZr79TSp3H4CL7mGugOnalznyl4xGCLRsJvb8aW6wLm68K5atFecqx212mbiiMlJZW4XSSVDyGFQ/hSIWwJ3uzNfrmpZTPuwd3TdOVAGj4BqocF426BS9fTorHopzZt4O+917C17uXCg84y2tJOytI4TR1QVNtNjX5NG6Vwm+Po5LSzJCg06rFNW05Tdctp3LM2HxafPNd2sBzcmzqovbDD3lYhTZxDrmSgbgp98twMsPe/cc5uW0949rf4OqyHmpqpURTTiTtkAYQE464Jf9l0wS8Gqc9QU9XmB1tmn2Z6TQtXMWSJfOpHyPHDEa7/2Gfz6+JM8dF0huzsejw+BKAIhZsPxRiw8sbsR1Yw+LKkyya6qeqxk/ashGPZ48ouKWLw2XH5tCEg3G2Hory8iE3p/wLWHb3Ku65vZkxZaaqXyoSlr1VKSWuzkV02Tm01qNqJB+agy6GOKVh36kE//v8O2x8cS3NjqN8fomLm6Z7CMg56YHktXEM7bT3ZdhyMMHq3WneOVfFhDmLeOgzt7Ny0Tg8xefjBy95dI3kOS4SL2xH/+G5GaX6TDLOuXCGZ9Ye4J8ef5netsOsnGvnvuvczGlQlHukixriloOuqJ2dx1O8+G6MLcds6Ip6Pv2xxfzZAwuZPTlQyiW1AAtGfRQhB5LcjiCdH3n39I+0cimVbdh5gkf+5RV2v9WCq1KxeJqHhRPt1FdI5yqEkw4+CNrY0ZrgvZYIVsJB0/xJfPNPbuD+VbOoNOxWEpK2HzmnIbc6DEkjivFoj0Pls+zWtk6+9dh6nv3VbnQwhaPWS1Odm1p/tnM+adnpjWlOnIpifRBEzN1dH53BNx+6iSXzJ2U71Iqn4o9DDaxBa/3J/ns2nsn3QN1Ia+/qDvG9p9/kyed20nEyBC4P9oDXnHaWGEyayJKpNNHuMPSECTQF+MrnFvPV+5fQOL7gvsPBy5J61GeUUs+OtNYROWgQSKM6kjncxNFonGdf2sl/P7uNd1rk0IvC5ffj8bpNQkz66dOpNJFwBCseY87MOv7i4WXcs2Iufl/R4iUWq7RHMgeBNKpDvZcDKZOx2Lj1IE8+s5m3th8hHEub04Jlfo8JNeSrZdIZwrEY8USKWxY287dfv4vr507KhiOF05U71DsIJGn2/LkcsCl8nbD34Gme+L+3eGXDPrr7orjcTgJ+D0oCVtMqYxlwRBZWLp3D33xtJRMbixIvORb+SaWUZE/zpoI+h9ZarJtcLDAz75kuefB0ey9PPbeFn72wkxPtfSb9UV7mNecvTCyWyRg9NKa6jAc/tYSHP30jlQEp7RREcrHAx4ezVgVbscu9WMjVFIPHikST/OzFnfznTzfTcrgDh9NOVcBnOEear9KZjNFHM6aO59GHl7Hi1hnmEJ7QJQ76cIiJvvnNX00xeEU5N0AWMarLTWSTL72+h8d+9Abbd58wlwdUVfhMq3AwGDNnM7weF6uWzuTRh5cz/ZoLPV4XHbK7PDxyucmXRzrVPBI/FiRilw466HocOU6V9w1TW3cd5ztPvsqbWw+hLUVFwIsceerukbOuFg11FTws4vWpG6mpyTv/LCWsf/ytuR7nEm6S0yNSIZHDwCNesNR64hzfe+oNnn95F7FEmjKf2wDU0xcxTaDzZzfx6EPLjXk3fY7Dk1yw9O9ypEIpJXmdklBJOGgIjhJn5dNyTwaw5HJZgXA0wS/W7uLJn/2atlNd5jyYOaagoLbazx03TeOLf3QT05sv20IpRk7uB5L88W//FV1DfTKttfQeySVvK3PHrQo2Rbnx5aCbpCXkNojnficveRvG8kkNZ16u7XjwNYFyylH8qoE6jpR9xW+RBPrgawLlEoBdSqlUSeQnj0GuiIjlMe/vzCO/B2iET/V7gH4PUHHS/P/apau1mt3XrQAAAABJRU5ErkJggg==", rn = { class: "flex-v-center outline-none" }, sn = ["src"], an = { class: "m-x-8px text-base" }, dn = /* @__PURE__ */ B({
  __name: "index",
  props: {
    name: { default: "adc" },
    avatar: { default: ln }
  },
  emits: ["logout"],
  setup(e, { emit: o }) {
    const i = o;
    return (t, a) => {
      const d = tn, r = qo, l = $o, c = Xo;
      return P(), j(c, { class: "cursor-pointer" }, {
        dropdown: g(() => [
          y(l, null, {
            default: g(() => [
              y(r, {
                onClick: a[0] || (a[0] = (m) => i("logout"))
              }, {
                default: g(() => [
                  Xe(pe(t.$t("logout")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        default: g(() => [
          W("div", rn, [
            W("img", {
              src: t.avatar,
              class: "avatar"
            }, null, 8, sn),
            W("span", an, pe(t.name), 1),
            y(d)
          ])
        ]),
        _: 1
      });
    };
  }
}), Sn = /* @__PURE__ */ to(dn, [["__scopeId", "data-v-dec29c90"]]);
export {
  Sn as default
};
