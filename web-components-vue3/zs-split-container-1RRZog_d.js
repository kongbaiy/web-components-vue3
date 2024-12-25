import { ref as n, onMounted as X, onBeforeMount as S, defineComponent as Y, computed as L, openBlock as m, createElementBlock as _, createElementVNode as h, normalizeStyle as M, unref as R, renderSlot as y, createCommentVNode as k } from "vue";
import { _ as $ } from "./_plugin-vue_export-helper-CHgC5LLL.js";
function w(i, o) {
  const s = n(0), l = n(0), u = n(0), t = n(0), a = n(0), v = n(0), r = n(!1);
  let c = 0;
  X(() => {
    var e;
    (e = i.value) == null || e.addEventListener("mousedown", d), document.addEventListener("mousemove", f), document.addEventListener("mouseup", p);
  }), S(() => {
    var e;
    (e = i.value) == null || e.removeEventListener("mousedown", d), document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", p);
  });
  function d(e) {
    e.preventDefault(), r.value = !0, s.value = e.clientX || e.changedTouches[0].clientX, l.value = e.clientY || e.changedTouches[0].clientY, o && (c = typeof o == "function" ? o() : o);
  }
  function f(e) {
    if (e.preventDefault(), !r.value) return;
    const z = e.clientX, E = e.clientY;
    u.value = z - s.value + c, t.value = E - l.value + c;
  }
  function p(e) {
    e.preventDefault(), r.value = !1, a.value = u.value, v.value = t.value;
  }
  return {
    moveX: u,
    moveY: t,
    movedX: a,
    movedY: v
  };
}
const x = { class: "split-container" }, C = { class: "split-pane" }, D = /* @__PURE__ */ Y({
  __name: "zs-split-container",
  props: {
    direction: { default: "horizontal" },
    slotNumber: { default: 2 }
  },
  setup(i) {
    const o = n(), s = n(), { moveX: l } = w(o, () => {
      var t;
      return (t = s.value) == null ? void 0 : t.offsetWidth;
    });
    X(() => {
      var t;
      l.value = (t = s.value) == null ? void 0 : t.offsetWidth;
    });
    const u = L(() => {
      var t;
      return typeof ((t = s.value) == null ? void 0 : t.offsetWidth) > "u" ? {
        flex: "0 0 auto"
      } : {
        flex: `0 0 ${l.value}px`
      };
    });
    return (t, a) => (m(), _("div", x, [
      h("div", {
        ref_key: "firstSplitPaneRef",
        ref: s,
        style: M(R(u)),
        class: "split-pane"
      }, [
        y(t.$slots, "1", {}, void 0, !0)
      ], 4),
      t.$slots[2] ? (m(), _("div", {
        key: 0,
        ref_key: "splitResizeRef",
        ref: o,
        class: "split-resize"
      }, null, 512)) : k("", !0),
      h("div", C, [
        y(t.$slots, "2", {}, void 0, !0)
      ])
    ]));
  }
}), T = /* @__PURE__ */ $(D, [["__scopeId", "data-v-65d0617c"]]);
export {
  T as default
};
