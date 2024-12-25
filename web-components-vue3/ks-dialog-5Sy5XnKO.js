import "./base-KIYEtT4d.js";
import { E as g } from "./el-overlay-aIYGwghw.js";
import { E as B } from "./el-button-D4ef492v.js";
import { defineComponent as k, mergeModels as d, useModel as V, openBlock as $, createBlock as y, mergeProps as v, createSlots as T, withCtx as t, renderSlot as a, createVNode as m, createTextVNode as i, toDisplayString as s } from "vue";
const S = /* @__PURE__ */ k({
  __name: "ks-dialog",
  props: /* @__PURE__ */ d({
    showFooter: { type: Boolean, default: !0 },
    confirmLoading: { type: Boolean },
    cancelButtonText: {},
    confirmButtonText: {}
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ d(["confirm"], ["update:modelValue"]),
  setup(u, { emit: f }) {
    const p = f, l = V(u, "modelValue");
    return (e, o) => {
      const r = B, c = g;
      return $(), y(c, v({
        modelValue: l.value,
        "onUpdate:modelValue": o[2] || (o[2] = (n) => l.value = n),
        class: "ks-dialog"
      }, e.$attrs, {
        "close-on-click-modal": !1,
        draggable: ""
      }), T({
        header: t(() => [
          a(e.$slots, "header")
        ]),
        default: t(() => [
          a(e.$slots, "default")
        ]),
        _: 2
      }, [
        e.showFooter ? {
          name: "footer",
          fn: t(() => [
            a(e.$slots, "footer", {}, () => [
              m(r, {
                onClick: o[0] || (o[0] = (n) => l.value = !1)
              }, {
                default: t(() => [
                  i(s(e.cancelButtonText || e.$t("cancel")), 1)
                ]),
                _: 1
              }),
              m(r, {
                type: "primary",
                loading: e.confirmLoading,
                onClick: o[1] || (o[1] = (n) => p("confirm"))
              }, {
                default: t(() => [
                  i(s(e.confirmButtonText || e.$t("confirm")), 1)
                ]),
                _: 1
              }, 8, ["loading"])
            ])
          ]),
          key: "0"
        } : void 0
      ]), 1040, ["modelValue"]);
    };
  }
});
export {
  S as default
};
