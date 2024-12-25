import { defineComponent as L, inject as F, ref as c, computed as T, onBeforeUnmount as ee, toRef as K, openBlock as P, createBlock as B, Transition as te, unref as b, withCtx as G, withDirectives as le, createElementVNode as x, normalizeClass as R, normalizeStyle as M, vShow as ae, createElementBlock as J, Fragment as oe, createVNode as U, watch as X, nextTick as Y, provide as re, reactive as se, onMounted as ne, onUpdated as ie, resolveDynamicComponent as ce, renderSlot as ue, createCommentVNode as ve } from "vue";
import { a as O, u as fe } from "./index-nT5oH0pN.js";
import { c as W, _ as $, u as Q, t as me, z as de, d as pe, B as C, k as V, x as he, h as q, w as be } from "./base-KIYEtT4d.js";
import { b as ye } from "./el-popper-DdrJbju1.js";
const H = 4, ge = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
}, Se = ({
  move: y,
  size: u,
  bar: r
}) => ({
  [r.size]: u,
  transform: `translate${r.axis}(${y}%)`
}), D = Symbol("scrollbarContextKey"), we = W({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), ze = "Thumb", _e = /* @__PURE__ */ L({
  __name: "thumb",
  props: we,
  setup(y) {
    const u = y, r = F(D), a = Q("scrollbar");
    r || me(ze, "can not inject scrollbar context");
    const s = c(), v = c(), d = c({}), p = c(!1);
    let l = !1, h = !1, g = de ? document.onselectstart : null;
    const t = T(() => ge[u.vertical ? "vertical" : "horizontal"]), o = T(() => Se({
      size: u.size,
      move: u.move,
      bar: t.value
    })), f = T(() => s.value[t.value.offset] ** 2 / r.wrapElement[t.value.scrollSize] / u.ratio / v.value[t.value.offset]), m = (i) => {
      var w;
      if (i.stopPropagation(), i.ctrlKey || [1, 2].includes(i.button))
        return;
      (w = window.getSelection()) == null || w.removeAllRanges(), _(i);
      const E = i.currentTarget;
      E && (d.value[t.value.axis] = E[t.value.offset] - (i[t.value.client] - E.getBoundingClientRect()[t.value.direction]));
    }, z = (i) => {
      if (!v.value || !s.value || !r.wrapElement)
        return;
      const w = Math.abs(i.target.getBoundingClientRect()[t.value.direction] - i[t.value.client]), E = v.value[t.value.offset] / 2, N = (w - E) * 100 * f.value / s.value[t.value.offset];
      r.wrapElement[t.value.scroll] = N * r.wrapElement[t.value.scrollSize] / 100;
    }, _ = (i) => {
      i.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", S), document.addEventListener("mouseup", n), g = document.onselectstart, document.onselectstart = () => !1;
    }, S = (i) => {
      if (!s.value || !v.value || l === !1)
        return;
      const w = d.value[t.value.axis];
      if (!w)
        return;
      const E = (s.value.getBoundingClientRect()[t.value.direction] - i[t.value.client]) * -1, N = v.value[t.value.offset] - w, Z = (E - N) * 100 * f.value / s.value[t.value.offset];
      r.wrapElement[t.value.scroll] = Z * r.wrapElement[t.value.scrollSize] / 100;
    }, n = () => {
      l = !1, d.value[t.value.axis] = 0, document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", n), j(), h && (p.value = !1);
    }, e = () => {
      h = !1, p.value = !!u.size;
    }, k = () => {
      h = !0, p.value = l;
    };
    ee(() => {
      j(), document.removeEventListener("mouseup", n);
    });
    const j = () => {
      document.onselectstart !== g && (document.onselectstart = g);
    };
    return O(K(r, "scrollbarElement"), "mousemove", e), O(K(r, "scrollbarElement"), "mouseleave", k), (i, w) => (P(), B(te, {
      name: b(a).b("fade"),
      persisted: ""
    }, {
      default: G(() => [
        le(x("div", {
          ref_key: "instance",
          ref: s,
          class: R([b(a).e("bar"), b(a).is(b(t).key)]),
          onMousedown: z
        }, [
          x("div", {
            ref_key: "thumb",
            ref: v,
            class: R(b(a).e("thumb")),
            style: M(b(o)),
            onMousedown: m
          }, null, 38)
        ], 34), [
          [ae, i.always || p.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var I = /* @__PURE__ */ $(_e, [["__file", "thumb.vue"]]);
const Ee = W({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), He = /* @__PURE__ */ L({
  __name: "bar",
  props: Ee,
  setup(y, { expose: u }) {
    const r = y, a = F(D), s = c(0), v = c(0), d = c(""), p = c(""), l = c(1), h = c(1);
    return u({
      handleScroll: (o) => {
        if (o) {
          const f = o.offsetHeight - H, m = o.offsetWidth - H;
          v.value = o.scrollTop * 100 / f * l.value, s.value = o.scrollLeft * 100 / m * h.value;
        }
      },
      update: () => {
        const o = a == null ? void 0 : a.wrapElement;
        if (!o)
          return;
        const f = o.offsetHeight - H, m = o.offsetWidth - H, z = f ** 2 / o.scrollHeight, _ = m ** 2 / o.scrollWidth, S = Math.max(z, r.minSize), n = Math.max(_, r.minSize);
        l.value = z / (f - z) / (S / (f - S)), h.value = _ / (m - _) / (n / (m - n)), p.value = S + H < f ? `${S}px` : "", d.value = n + H < m ? `${n}px` : "";
      }
    }), (o, f) => (P(), J(oe, null, [
      U(I, {
        move: s.value,
        ratio: h.value,
        size: d.value,
        always: o.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      U(I, {
        move: v.value,
        ratio: l.value,
        size: p.value,
        vertical: "",
        always: o.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Te = /* @__PURE__ */ $(He, [["__file", "bar.vue"]]);
const ke = W({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: !1
  },
  wrapStyle: {
    type: pe([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  },
  id: String,
  role: String,
  ...ye(["ariaLabel", "ariaOrientation"])
}), Ce = {
  scroll: ({
    scrollTop: y,
    scrollLeft: u
  }) => [y, u].every(C)
}, A = "ElScrollbar", Pe = L({
  name: A
}), Re = /* @__PURE__ */ L({
  ...Pe,
  props: ke,
  emits: Ce,
  setup(y, { expose: u, emit: r }) {
    const a = y, s = Q("scrollbar");
    let v, d;
    const p = c(), l = c(), h = c(), g = c(), t = T(() => {
      const e = {};
      return a.height && (e.height = V(a.height)), a.maxHeight && (e.maxHeight = V(a.maxHeight)), [a.wrapStyle, e];
    }), o = T(() => [
      a.wrapClass,
      s.e("wrap"),
      { [s.em("wrap", "hidden-default")]: !a.native }
    ]), f = T(() => [s.e("view"), a.viewClass]), m = () => {
      var e;
      l.value && ((e = g.value) == null || e.handleScroll(l.value), r("scroll", {
        scrollTop: l.value.scrollTop,
        scrollLeft: l.value.scrollLeft
      }));
    };
    function z(e, k) {
      he(e) ? l.value.scrollTo(e) : C(e) && C(k) && l.value.scrollTo(e, k);
    }
    const _ = (e) => {
      if (!C(e)) {
        q(A, "value must be a number");
        return;
      }
      l.value.scrollTop = e;
    }, S = (e) => {
      if (!C(e)) {
        q(A, "value must be a number");
        return;
      }
      l.value.scrollLeft = e;
    }, n = () => {
      var e;
      (e = g.value) == null || e.update();
    };
    return X(() => a.noresize, (e) => {
      e ? (v == null || v(), d == null || d()) : ({ stop: v } = fe(h, n), d = O("resize", n));
    }, { immediate: !0 }), X(() => [a.maxHeight, a.height], () => {
      a.native || Y(() => {
        var e;
        n(), l.value && ((e = g.value) == null || e.handleScroll(l.value));
      });
    }), re(D, se({
      scrollbarElement: p,
      wrapElement: l
    })), ne(() => {
      a.native || Y(() => {
        n();
      });
    }), ie(() => n()), u({
      wrapRef: l,
      update: n,
      scrollTo: z,
      setScrollTop: _,
      setScrollLeft: S,
      handleScroll: m
    }), (e, k) => (P(), J("div", {
      ref_key: "scrollbarRef",
      ref: p,
      class: R(b(s).b())
    }, [
      x("div", {
        ref_key: "wrapRef",
        ref: l,
        class: R(b(o)),
        style: M(b(t)),
        onScroll: m
      }, [
        (P(), B(ce(e.tag), {
          id: e.id,
          ref_key: "resizeRef",
          ref: h,
          class: R(b(f)),
          style: M(e.viewStyle),
          role: e.role,
          "aria-label": e.ariaLabel,
          "aria-orientation": e.ariaOrientation
        }, {
          default: G(() => [
            ue(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 38),
      e.native ? ve("v-if", !0) : (P(), B(Te, {
        key: 0,
        ref_key: "barRef",
        ref: g,
        always: e.always,
        "min-size": e.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var Le = /* @__PURE__ */ $(Re, [["__file", "scrollbar.vue"]]);
const Oe = be(Le);
export {
  Oe as E
};
