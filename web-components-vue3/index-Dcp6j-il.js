import { u as d, _ as p, w as N, l as b } from "./base-KIYEtT4d.js";
import V from "./index--tCyYWAb.js";
import { E as z } from "./el-scrollbar-CJq4fSjm.js";
import H from "./index-D2gAaZzw.js";
import { defineComponent as n, useSlots as K, computed as y, openBlock as u, createElementBlock as f, normalizeClass as m, unref as o, renderSlot as _, normalizeStyle as g, resolveComponent as A, createBlock as F, withCtx as i, createVNode as a, createElementVNode as $ } from "vue";
import { _ as I } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const M = n({
  name: "ElContainer"
}), j = /* @__PURE__ */ n({
  ...M,
  props: {
    direction: {
      type: String
    }
  },
  setup(r) {
    const e = r, t = K(), s = d("container"), l = y(() => e.direction === "vertical" ? !0 : e.direction === "horizontal" ? !1 : t && t.default ? t.default().some((h) => {
      const v = h.type.name;
      return v === "ElHeader" || v === "ElFooter";
    }) : !1);
    return (c, h) => (u(), f("section", {
      class: m([o(s).b(), o(s).is("vertical", o(l))])
    }, [
      _(c.$slots, "default")
    ], 2));
  }
});
var q = /* @__PURE__ */ p(j, [["__file", "container.vue"]]);
const D = n({
  name: "ElAside"
}), G = /* @__PURE__ */ n({
  ...D,
  props: {
    width: {
      type: String,
      default: null
    }
  },
  setup(r) {
    const e = r, t = d("aside"), s = y(() => e.width ? t.cssVarBlock({ width: e.width }) : {});
    return (l, c) => (u(), f("aside", {
      class: m(o(t).b()),
      style: g(o(s))
    }, [
      _(l.$slots, "default")
    ], 6));
  }
});
var E = /* @__PURE__ */ p(G, [["__file", "aside.vue"]]);
const J = n({
  name: "ElFooter"
}), L = /* @__PURE__ */ n({
  ...J,
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(r) {
    const e = r, t = d("footer"), s = y(() => e.height ? t.cssVarBlock({ height: e.height }) : {});
    return (l, c) => (u(), f("footer", {
      class: m(o(t).b()),
      style: g(o(s))
    }, [
      _(l.$slots, "default")
    ], 6));
  }
});
var x = /* @__PURE__ */ p(L, [["__file", "footer.vue"]]);
const O = n({
  name: "ElHeader"
}), P = /* @__PURE__ */ n({
  ...O,
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(r) {
    const e = r, t = d("header"), s = y(() => e.height ? t.cssVarBlock({
      height: e.height
    }) : {});
    return (l, c) => (u(), f("header", {
      class: m(o(t).b()),
      style: g(o(s))
    }, [
      _(l.$slots, "default")
    ], 6));
  }
});
var S = /* @__PURE__ */ p(P, [["__file", "header.vue"]]);
const Q = n({
  name: "ElMain"
}), R = /* @__PURE__ */ n({
  ...Q,
  setup(r) {
    const e = d("main");
    return (t, s) => (u(), f("main", {
      class: m(o(e).b())
    }, [
      _(t.$slots, "default")
    ], 2));
  }
});
var C = /* @__PURE__ */ p(R, [["__file", "main.vue"]]);
const T = N(q, {
  Aside: E,
  Footer: x,
  Header: S,
  Main: C
}), U = b(E);
b(x);
const W = b(S), X = b(C), Y = { class: "h-full flex-v-center justify-between" }, Z = { class: "breadcrumb-shadow" }, ee = { class: "m5 h-[calc(100vh-128px)] bg-#fff" }, te = /* @__PURE__ */ n({
  __name: "index",
  props: {
    menuKey: {},
    style: {}
  },
  setup(r) {
    return (e, t) => {
      const s = W, l = H, c = z, h = U, v = V, k = A("router-view"), B = X, w = T;
      return u(), F(w, {
        style: g(e.style),
        class: "layout-container"
      }, {
        default: i(() => [
          a(s, { class: "b-1px b-#d9d9d9 b-b-solid bg-white h-12!" }, {
            default: i(() => [
              $("section", Y, [
                _(e.$slots, "header", {}, void 0, !0)
              ])
            ]),
            _: 3
          }),
          _(e.$slots, "default", {}, () => [
            a(w, { class: "h-full overflow-hidden" }, {
              default: i(() => [
                a(h, {
                  width: "208px",
                  class: "b-r-1px b-r-#d9d9d9 b-r-solid"
                }, {
                  default: i(() => [
                    a(c, null, {
                      default: i(() => [
                        a(l, { menuKey: e.menuKey }, null, 8, ["menuKey"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                a(B, { class: "bg-#f7f9fd p0!" }, {
                  default: i(() => [
                    $("div", Z, [
                      a(v),
                      _(e.$slots, "tags", {}, void 0, !0)
                    ]),
                    $("div", ee, [
                      a(c, { "wrap-style": "padding: 20px;" }, {
                        default: i(() => [
                          a(k)
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 3
                })
              ]),
              _: 3
            })
          ], !0)
        ]),
        _: 3
      }, 8, ["style"]);
    };
  }
}), ce = /* @__PURE__ */ I(te, [["__scopeId", "data-v-6dfc179b"]]);
export {
  ce as default
};
