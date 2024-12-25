import { c as I, u as B, _ as C, d as w, E as N, w as M, l as T } from "./base-KIYEtT4d.js";
import { defineComponent as _, ref as y, provide as A, onMounted as L, openBlock as o, createElementBlock as m, normalizeClass as b, unref as r, renderSlot as E, getCurrentInstance as R, inject as V, createElementVNode as j, createBlock as g, withCtx as h, resolveDynamicComponent as z, toDisplayString as x, watchEffect as D, createVNode as k, TransitionGroup as K, Fragment as $, renderList as q, createTextVNode as F } from "vue";
import { a as G, u as O } from "./vue-router-DkRpx4k-.js";
import { i as H } from "./icon-C_1Mywq7.js";
import { u as J } from "./index-BUVGpkNy.js";
import { _ as Q } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const P = Symbol("breadcrumbKey"), U = I({
  separator: {
    type: String,
    default: "/"
  },
  separatorIcon: {
    type: H
  }
}), W = ["aria-label"], X = _({
  name: "ElBreadcrumb"
}), Y = /* @__PURE__ */ _({
  ...X,
  props: U,
  setup(f) {
    const c = f, { t: d } = J(), a = B("breadcrumb"), e = y();
    return A(P, c), L(() => {
      const t = e.value.querySelectorAll(`.${a.e("item")}`);
      t.length && t[t.length - 1].setAttribute("aria-current", "page");
    }), (t, l) => (o(), m("div", {
      ref_key: "breadcrumb",
      ref: e,
      class: b(r(a).b()),
      "aria-label": r(d)("el.breadcrumb.label"),
      role: "navigation"
    }, [
      E(t.$slots, "default")
    ], 10, W));
  }
});
var Z = /* @__PURE__ */ C(Y, [["__file", "breadcrumb.vue"]]);
const ee = I({
  to: {
    type: w([String, Object]),
    default: ""
  },
  replace: Boolean
}), te = _({
  name: "ElBreadcrumbItem"
}), re = /* @__PURE__ */ _({
  ...te,
  props: ee,
  setup(f) {
    const c = f, d = R(), a = V(P, void 0), e = B("breadcrumb"), t = d.appContext.config.globalProperties.$router, l = y(), i = () => {
      !c.to || !t || (c.replace ? t.replace(c.to) : t.push(c.to));
    };
    return (n, p) => {
      var s, u;
      return o(), m("span", {
        class: b(r(e).e("item"))
      }, [
        j("span", {
          ref_key: "link",
          ref: l,
          class: b([r(e).e("inner"), r(e).is("link", !!n.to)]),
          role: "link",
          onClick: i
        }, [
          E(n.$slots, "default")
        ], 2),
        (s = r(a)) != null && s.separatorIcon ? (o(), g(r(N), {
          key: 0,
          class: b(r(e).e("separator"))
        }, {
          default: h(() => [
            (o(), g(z(r(a).separatorIcon)))
          ]),
          _: 1
        }, 8, ["class"])) : (o(), m("span", {
          key: 1,
          class: b(r(e).e("separator")),
          role: "presentation"
        }, x((u = r(a)) == null ? void 0 : u.separator), 3))
      ], 2);
    };
  }
});
var S = /* @__PURE__ */ C(re, [["__file", "breadcrumb-item.vue"]]);
const ae = M(Z, {
  BreadcrumbItem: S
}), oe = T(S), ne = { class: "h-10 flex items-center bg-#fff px-3" }, se = /* @__PURE__ */ _({
  __name: "zs-breadcrumb",
  setup(f) {
    const c = G(), d = O(), a = y([]);
    return D(() => {
      var n;
      const e = c.matched, t = e == null ? void 0 : e[e.length - 1], l = t.meta.activeMenu, i = [e[0]];
      if (l) {
        const p = e[0].path, u = (((n = e.find((v) => v.children.length)) == null ? void 0 : n.children) || []).find((v) => `${p}/${v.path}` === l);
        i.push({
          ...u,
          path: l
        });
      }
      i.push(t), a.value = i.filter(
        (p) => {
          var s, u;
          return ((s = p.meta) == null ? void 0 : s.title) && !((u = p.meta) != null && u.hideBreadcrumb);
        }
      );
    }), (e, t) => {
      const l = oe, i = ae;
      return o(), m("div", ne, [
        k(i, { separator: "/" }, {
          default: h(() => [
            k(K, { name: "breadcrumb" }, {
              default: h(() => [
                (o(!0), m($, null, q(a.value, (n, p) => (o(), g(l, {
                  key: n.path,
                  "data-path": n.path
                }, {
                  default: h(() => {
                    var s;
                    return [
                      p === a.value.length - 2 ? (o(), m("span", {
                        key: 0,
                        onClick: t[0] || (t[0] = (u) => r(d).go(-1)),
                        class: "go-back"
                      }, "返回")) : (o(), m($, { key: 1 }, [
                        F(x(e.$t((s = n.meta) == null ? void 0 : s.title)), 1)
                      ], 64))
                    ];
                  }),
                  _: 2
                }, 1032, ["data-path"]))), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
}), de = /* @__PURE__ */ Q(se, [["__scopeId", "data-v-9ff59bee"]]);
export {
  de as default
};
