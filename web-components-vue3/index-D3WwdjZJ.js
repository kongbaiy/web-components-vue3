import { defineComponent as y, ref as l, onMounted as R, onBeforeUnmount as E, openBlock as g, createElementBlock as k, normalizeStyle as L, createElementVNode as a, renderSlot as M } from "vue";
import { _ as x } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const I = /* @__PURE__ */ y({
  __name: "index",
  props: {
    delay: { default: 5e3 },
    height: {}
  },
  setup(p) {
    const h = p, n = l(), c = l(), i = l(), u = l(), r = l(1);
    let o;
    R(() => {
      n.value && (d(), n.value.addEventListener("mouseenter", f), n.value.addEventListener("mouseleave", v));
    }), E(() => {
      clearInterval(o), o = null, n.value.removeEventListener("mouseenter", f), n.value.removeEventListener("mouseleave", v);
    });
    function f() {
      clearInterval(o), o = null;
    }
    function v() {
      d();
    }
    function d() {
      const e = i.value, t = c.value, { offsetHeight: s } = t.children[0], { length: m } = t.children;
      u.value.innerHTML = t.innerHTML, o = setInterval(() => {
        r.value > m && (r.value = 1), _(e, r.value * s, m * s), r.value += 1;
      }, h.delay);
    }
    function _(e, t, s) {
      e.setAttribute("style", `margin-top:-${t}px;transition: all 400ms;`), t === s && setTimeout(() => {
        e.removeAttribute("style");
      }, 600);
    }
    return (e, t) => (g(), k("div", {
      ref_key: "containerRef",
      ref: n,
      style: L({ height: e.height }),
      class: "scroll-intermittent"
    }, [
      a("div", {
        ref_key: "scrollRef",
        ref: i
      }, [
        a("div", {
          ref_key: "contentRef",
          ref: c,
          class: "content"
        }, [
          M(e.$slots, "default", {}, void 0, !0)
        ], 512),
        a("div", {
          ref_key: "cloneContentRef",
          ref: u
        }, null, 512)
      ], 512)
    ], 4));
  }
}), H = /* @__PURE__ */ x(I, [["__scopeId", "data-v-d11f62fc"]]);
export {
  H as default
};
