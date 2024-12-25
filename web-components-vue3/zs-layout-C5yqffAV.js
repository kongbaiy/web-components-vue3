import { u as d, _ as p, w as B, l as y } from "./base-KIYEtT4d.js";
import N from "./zs-breadcrumb-CFVIQuEi.js";
import { E as V } from "./el-scrollbar-CJq4fSjm.js";
import H from "./zs-menu-C8HlPOI-.js";
import { defineComponent as o, useSlots as K, computed as b, openBlock as u, createElementBlock as f, normalizeClass as m, unref as n, renderSlot as _, normalizeStyle as g, resolveComponent as A, createBlock as F, withCtx as i, createVNode as a, createElementVNode as $ } from "vue";
import { _ as I } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const M = o({
  name: "ElContainer"
}), j = /* @__PURE__ */ o({
  ...M,
  props: {
    direction: {
      type: String
    }
  },
  setup(r) {
    const e = r, t = K(), s = d("container"), l = b(() => e.direction === "vertical" ? !0 : e.direction === "horizontal" ? !1 : t && t.default ? t.default().some((h) => {
      const v = h.type.name;
      return v === "ElHeader" || v === "ElFooter";
    }) : !1);
    return (c, h) => (u(), f("section", {
      class: m([n(s).b(), n(s).is("vertical", n(l))])
    }, [
      _(c.$slots, "default")
    ], 2));
  }
});
var L = /* @__PURE__ */ p(j, [["__file", "container.vue"]]);
const q = o({
  name: "ElAside"
}), D = /* @__PURE__ */ o({
  ...q,
  props: {
    width: {
      type: String,
      default: null
    }
  },
  setup(r) {
    const e = r, t = d("aside"), s = b(() => e.width ? t.cssVarBlock({ width: e.width }) : {});
    return (l, c) => (u(), f("aside", {
      class: m(n(t).b()),
      style: g(n(s))
    }, [
      _(l.$slots, "default")
    ], 6));
  }
});
var E = /* @__PURE__ */ p(D, [["__file", "aside.vue"]]);
const G = o({
  name: "ElFooter"
}), J = /* @__PURE__ */ o({
  ...G,
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(r) {
    const e = r, t = d("footer"), s = b(() => e.height ? t.cssVarBlock({ height: e.height }) : {});
    return (l, c) => (u(), f("footer", {
      class: m(n(t).b()),
      style: g(n(s))
    }, [
      _(l.$slots, "default")
    ], 6));
  }
});
var S = /* @__PURE__ */ p(J, [["__file", "footer.vue"]]);
const O = o({
  name: "ElHeader"
}), P = /* @__PURE__ */ o({
  ...O,
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(r) {
    const e = r, t = d("header"), s = b(() => e.height ? t.cssVarBlock({
      height: e.height
    }) : {});
    return (l, c) => (u(), f("header", {
      class: m(n(t).b()),
      style: g(n(s))
    }, [
      _(l.$slots, "default")
    ], 6));
  }
});
var z = /* @__PURE__ */ p(P, [["__file", "header.vue"]]);
const Q = o({
  name: "ElMain"
}), R = /* @__PURE__ */ o({
  ...Q,
  setup(r) {
    const e = d("main");
    return (t, s) => (u(), f("main", {
      class: m(n(e).b())
    }, [
      _(t.$slots, "default")
    ], 2));
  }
});
var C = /* @__PURE__ */ p(R, [["__file", "main.vue"]]);
const T = B(L, {
  Aside: E,
  Footer: S,
  Header: z,
  Main: C
}), U = y(E);
y(S);
const W = y(z), X = y(C), Y = { class: "h-full flex-v-center justify-between" }, Z = { class: "breadcrumb-shadow" }, ee = { class: "m5 h-[calc(100vh-128px)] bg-#fff" }, te = /* @__PURE__ */ o({
  __name: "zs-layout",
  props: {
    menuKey: {},
    style: {}
  },
  setup(r) {
    return (e, t) => {
      const s = W, l = H, c = V, h = U, v = N, k = A("router-view"), x = X, w = T;
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
                a(x, { class: "bg-#f7f9fd p0!" }, {
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
}), ce = /* @__PURE__ */ I(te, [["__scopeId", "data-v-16bb855d"]]);
export {
  ce as default
};
