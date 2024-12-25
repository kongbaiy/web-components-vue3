import { c as I, u as B, _ as x, d as w, E as N, w as M, l as T } from "./base-KIYEtT4d.js";
import { defineComponent as _, ref as y, provide as A, onMounted as L, openBlock as o, createElementBlock as d, normalizeClass as b, unref as r, renderSlot as C, getCurrentInstance as R, inject as V, createElementVNode as j, createBlock as g, withCtx as h, resolveDynamicComponent as D, toDisplayString as E, watchEffect as K, createVNode as k, TransitionGroup as q, Fragment as $, renderList as z, createTextVNode as F } from "vue";
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
    const c = f, { t: m } = J(), a = B("breadcrumb"), e = y();
    return A(P, c), L(() => {
      const t = e.value.querySelectorAll(`.${a.e("item")}`);
      t.length && t[t.length - 1].setAttribute("aria-current", "page");
    }), (t, l) => (o(), d("div", {
      ref_key: "breadcrumb",
      ref: e,
      class: b(r(a).b()),
      "aria-label": r(m)("el.breadcrumb.label"),
      role: "navigation"
    }, [
      C(t.$slots, "default")
    ], 10, W));
  }
});
var Z = /* @__PURE__ */ x(Y, [["__file", "breadcrumb.vue"]]);
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
    const c = f, m = R(), a = V(P, void 0), e = B("breadcrumb"), t = m.appContext.config.globalProperties.$router, l = y(), i = () => {
      !c.to || !t || (c.replace ? t.replace(c.to) : t.push(c.to));
    };
    return (n, p) => {
      var s, u;
      return o(), d("span", {
        class: b(r(e).e("item"))
      }, [
        j("span", {
          ref_key: "link",
          ref: l,
          class: b([r(e).e("inner"), r(e).is("link", !!n.to)]),
          role: "link",
          onClick: i
        }, [
          C(n.$slots, "default")
        ], 2),
        (s = r(a)) != null && s.separatorIcon ? (o(), g(r(N), {
          key: 0,
          class: b(r(e).e("separator"))
        }, {
          default: h(() => [
            (o(), g(D(r(a).separatorIcon)))
          ]),
          _: 1
        }, 8, ["class"])) : (o(), d("span", {
          key: 1,
          class: b(r(e).e("separator")),
          role: "presentation"
        }, E((u = r(a)) == null ? void 0 : u.separator), 3))
      ], 2);
    };
  }
});
var S = /* @__PURE__ */ x(re, [["__file", "breadcrumb-item.vue"]]);
const ae = M(Z, {
  BreadcrumbItem: S
}), oe = T(S), ne = { class: "h-10 flex items-center bg-#fff px-3" }, se = /* @__PURE__ */ _({
  __name: "index",
  setup(f) {
    const c = G(), m = O(), a = y([]);
    return K(() => {
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
      return o(), d("div", ne, [
        k(i, { separator: "/" }, {
          default: h(() => [
            k(q, { name: "breadcrumb" }, {
              default: h(() => [
                (o(!0), d($, null, z(a.value, (n, p) => (o(), g(l, {
                  key: n.path,
                  "data-path": n.path
                }, {
                  default: h(() => {
                    var s;
                    return [
                      p === a.value.length - 2 ? (o(), d("span", {
                        key: 0,
                        onClick: t[0] || (t[0] = (u) => r(m).go(-1)),
                        class: "go-back"
                      }, "返回")) : (o(), d($, { key: 1 }, [
                        F(E(e.$t((s = n.meta) == null ? void 0 : s.title)), 1)
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
}), me = /* @__PURE__ */ Q(se, [["__scopeId", "data-v-ab40b0cd"]]);
export {
  me as default
};
