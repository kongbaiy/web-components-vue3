import { defineComponent as y, ref as l, onMounted as R, onBeforeUnmount as E, openBlock as g, createElementBlock as k, normalizeStyle as I, createElementVNode as a, renderSlot as L } from "vue";
import { _ as M } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const x = /* @__PURE__ */ y({
  __name: "zs-scroll-intermittent",
  props: {
    delay: { default: 5e3 },
    height: {}
  },
  setup(p) {
    const h = p, n = l(), c = l(), i = l(), u = l(), r = l(1);
    let o;
    R(() => {
      n.value && (d(), n.value.addEventListener("mouseenter", v), n.value.addEventListener("mouseleave", f));
    }), E(() => {
      clearInterval(o), o = null, n.value.removeEventListener("mouseenter", v), n.value.removeEventListener("mouseleave", f);
    });
    function v() {
      clearInterval(o), o = null;
    }
    function f() {
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
      style: I({ height: e.height }),
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
          L(e.$slots, "default", {}, void 0, !0)
        ], 512),
        a("div", {
          ref_key: "cloneContentRef",
          ref: u
        }, null, 512)
      ], 512)
    ], 4));
  }
}), C = /* @__PURE__ */ M(x, [["__scopeId", "data-v-882a0c4c"]]);
export {
  C as default
};
