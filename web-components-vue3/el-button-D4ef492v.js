import { computed as m, inject as j, ref as A, useSlots as U, Text as M, defineComponent as _, openBlock as b, createBlock as y, resolveDynamicComponent as S, mergeProps as O, unref as i, withCtx as C, createElementBlock as V, Fragment as R, renderSlot as B, normalizeClass as N, createCommentVNode as z, provide as q, reactive as H, toRef as I } from "vue";
import { c as J, V as L, d as Q, u as w, E, _ as P, w as W, l as X } from "./base-KIYEtT4d.js";
import { a as Y, u as Z } from "./index-BDnm0u8X.js";
import { a as tt } from "./use-global-config-DzqEFyMH.js";
import { a as ot, u as et, c as G } from "./use-form-item-8ASbR4xQ.js";
import { i as T } from "./icon-C_1Mywq7.js";
import { T as nt } from "./index-Cj20c3-L.js";
const D = Symbol("buttonGroupContextKey"), lt = (t, s) => {
  Y({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, m(() => t.type === "text"));
  const n = j(D, void 0), e = tt("button"), { form: r } = ot(), a = et(m(() => n == null ? void 0 : n.size)), o = G(), c = A(), u = U(), f = m(() => t.type || (n == null ? void 0 : n.type) || ""), v = m(() => {
    var l, p, g;
    return (g = (p = t.autoInsertSpace) != null ? p : (l = e.value) == null ? void 0 : l.autoInsertSpace) != null ? g : !1;
  }), k = m(() => t.tag === "button" ? {
    ariaDisabled: o.value || t.loading,
    disabled: o.value || t.loading,
    autofocus: t.autofocus,
    type: t.nativeType
  } : {}), h = m(() => {
    var l;
    const p = (l = u.default) == null ? void 0 : l.call(u);
    if (v.value && (p == null ? void 0 : p.length) === 1) {
      const g = p[0];
      if ((g == null ? void 0 : g.type) === M) {
        const K = g.children;
        return new RegExp("^\\p{Unified_Ideograph}{2}$", "u").test(K.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: o,
    _size: a,
    _type: f,
    _ref: c,
    _props: k,
    shouldAddSpace: h,
    handleClick: (l) => {
      t.nativeType === "reset" && (r == null || r.resetFields()), s("click", l);
    }
  };
}, at = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], rt = ["button", "submit", "reset"], $ = J({
  size: Z,
  disabled: Boolean,
  type: {
    type: String,
    values: at,
    default: ""
  },
  icon: {
    type: T
  },
  nativeType: {
    type: String,
    values: rt,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: T,
    default: () => L
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  },
  tag: {
    type: Q([String, Object]),
    default: "button"
  }
}), st = {
  click: (t) => t instanceof MouseEvent
};
function d(t, s = 20) {
  return t.mix("#141414", s).toString();
}
function it(t) {
  const s = G(), n = w("button");
  return m(() => {
    let e = {}, r = t.color;
    if (r) {
      const a = r.match(/var\((.*?)\)/);
      a && (r = window.getComputedStyle(window.document.documentElement).getPropertyValue(a[1]));
      const o = new nt(r), c = t.dark ? o.tint(20).toString() : d(o, 20);
      if (t.plain)
        e = n.cssVarBlock({
          "bg-color": t.dark ? d(o, 90) : o.tint(90).toString(),
          "text-color": r,
          "border-color": t.dark ? d(o, 50) : o.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": r,
          "hover-border-color": r,
          "active-bg-color": c,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": c
        }), s.value && (e[n.cssVarBlockName("disabled-bg-color")] = t.dark ? d(o, 90) : o.tint(90).toString(), e[n.cssVarBlockName("disabled-text-color")] = t.dark ? d(o, 50) : o.tint(50).toString(), e[n.cssVarBlockName("disabled-border-color")] = t.dark ? d(o, 80) : o.tint(80).toString());
      else {
        const u = t.dark ? d(o, 30) : o.tint(30).toString(), f = o.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (e = n.cssVarBlock({
          "bg-color": r,
          "text-color": f,
          "border-color": r,
          "hover-bg-color": u,
          "hover-text-color": f,
          "hover-border-color": u,
          "active-bg-color": c,
          "active-border-color": c
        }), s.value) {
          const v = t.dark ? d(o, 50) : o.tint(50).toString();
          e[n.cssVarBlockName("disabled-bg-color")] = v, e[n.cssVarBlockName("disabled-text-color")] = t.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, e[n.cssVarBlockName("disabled-border-color")] = v;
        }
      }
    }
    return e;
  });
}
const ct = _({
  name: "ElButton"
}), ut = /* @__PURE__ */ _({
  ...ct,
  props: $,
  emits: st,
  setup(t, { expose: s, emit: n }) {
    const e = t, r = it(e), a = w("button"), { _ref: o, _size: c, _type: u, _disabled: f, _props: v, shouldAddSpace: k, handleClick: h } = lt(e, n), x = m(() => [
      a.b(),
      a.m(u.value),
      a.m(c.value),
      a.is("disabled", f.value),
      a.is("loading", e.loading),
      a.is("plain", e.plain),
      a.is("round", e.round),
      a.is("circle", e.circle),
      a.is("text", e.text),
      a.is("link", e.link),
      a.is("has-bg", e.bg)
    ]);
    return s({
      ref: o,
      size: c,
      type: u,
      disabled: f,
      shouldAddSpace: k
    }), (l, p) => (b(), y(S(l.tag), O({
      ref_key: "_ref",
      ref: o
    }, i(v), {
      class: i(x),
      style: i(r),
      onClick: i(h)
    }), {
      default: C(() => [
        l.loading ? (b(), V(R, { key: 0 }, [
          l.$slots.loading ? B(l.$slots, "loading", { key: 0 }) : (b(), y(i(E), {
            key: 1,
            class: N(i(a).is("loading"))
          }, {
            default: C(() => [
              (b(), y(S(l.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : l.icon || l.$slots.icon ? (b(), y(i(E), { key: 1 }, {
          default: C(() => [
            l.icon ? (b(), y(S(l.icon), { key: 0 })) : B(l.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : z("v-if", !0),
        l.$slots.default ? (b(), V("span", {
          key: 2,
          class: N({ [i(a).em("text", "expand")]: i(k) })
        }, [
          B(l.$slots, "default")
        ], 2)) : z("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var dt = /* @__PURE__ */ P(ut, [["__file", "button.vue"]]);
const bt = {
  size: $.size,
  type: $.type
}, mt = _({
  name: "ElButtonGroup"
}), ft = /* @__PURE__ */ _({
  ...mt,
  props: bt,
  setup(t) {
    const s = t;
    q(D, H({
      size: I(s, "size"),
      type: I(s, "type")
    }));
    const n = w("button");
    return (e, r) => (b(), V("div", {
      class: N(i(n).b("group"))
    }, [
      B(e.$slots, "default")
    ], 2));
  }
});
var F = /* @__PURE__ */ P(ft, [["__file", "button-group.vue"]]);
const ht = W(dt, {
  ButtonGroup: F
});
X(F);
export {
  ht as E
};
