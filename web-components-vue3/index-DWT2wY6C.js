import { defineComponent as s, openBlock as n, createElementBlock as r, Fragment as a, createElementVNode as e, toDisplayString as l, renderSlot as o } from "vue";
import { _ as i } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const d = { class: "title-wrap" }, p = { class: "title" }, c = /* @__PURE__ */ s({
  __name: "index",
  props: {
    text: {},
    align: { default: "left" },
    background: {}
  },
  setup(_) {
    return (t, m) => (n(), r(a, null, [
      e("div", d, [
        e("p", p, l(t.text), 1),
        o(t.$slots, "titleRight", {}, void 0, !0)
      ]),
      o(t.$slots, "default", {}, void 0, !0)
    ], 64));
  }
}), g = /* @__PURE__ */ i(c, [["__scopeId", "data-v-62aad8b1"]]);
export {
  g as default
};
