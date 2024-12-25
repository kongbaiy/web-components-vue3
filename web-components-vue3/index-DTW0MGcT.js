import { ref as n, onMounted as X, onBeforeMount as L, defineComponent as M, computed as R, openBlock as p, createElementBlock as _, createElementVNode as h, normalizeStyle as S, unref as k, renderSlot as y, createCommentVNode as x } from "vue";
import { _ as z } from "./_plugin-vue_export-helper-CHgC5LLL.js";
function $(i, o) {
  const s = n(0), l = n(0), u = n(0), t = n(0), a = n(0), d = n(0), r = n(!1);
  let c = 0;
  X(() => {
    var e;
    (e = i.value) == null || e.addEventListener("mousedown", f), document.addEventListener("mousemove", v), document.addEventListener("mouseup", m);
  }), L(() => {
    var e;
    (e = i.value) == null || e.removeEventListener("mousedown", f), document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", m);
  });
  function f(e) {
    e.preventDefault(), r.value = !0, s.value = e.clientX || e.changedTouches[0].clientX, l.value = e.clientY || e.changedTouches[0].clientY, o && (c = typeof o == "function" ? o() : o);
  }
  function v(e) {
    if (e.preventDefault(), !r.value) return;
    const E = e.clientX, Y = e.clientY;
    u.value = E - s.value + c, t.value = Y - l.value + c;
  }
  function m(e) {
    e.preventDefault(), r.value = !1, a.value = u.value, d.value = t.value;
  }
  return {
    moveX: u,
    moveY: t,
    movedX: a,
    movedY: d
  };
}
const w = { class: "split-container" }, D = { class: "split-pane" }, N = /* @__PURE__ */ M({
  __name: "index",
  props: {
    direction: { default: "horizontal" },
    slotNumber: { default: 2 }
  },
  setup(i) {
    const o = n(), s = n(), { moveX: l } = $(o, () => {
      var t;
      return (t = s.value) == null ? void 0 : t.offsetWidth;
    });
    X(() => {
      var t;
      l.value = (t = s.value) == null ? void 0 : t.offsetWidth;
    });
    const u = R(() => {
      var t;
      return typeof ((t = s.value) == null ? void 0 : t.offsetWidth) > "u" ? {
        flex: "0 0 auto"
      } : {
        flex: `0 0 ${l.value}px`
      };
    });
    return (t, a) => (p(), _("div", w, [
      h("div", {
        ref_key: "firstSplitPaneRef",
        ref: s,
        style: S(k(u)),
        class: "split-pane"
      }, [
        y(t.$slots, "1", {}, void 0, !0)
      ], 4),
      t.$slots[2] ? (p(), _("div", {
        key: 0,
        ref_key: "splitResizeRef",
        ref: o,
        class: "split-resize"
      }, null, 512)) : x("", !0),
      h("div", D, [
        y(t.$slots, "2", {}, void 0, !0)
      ])
    ]));
  }
}), V = /* @__PURE__ */ z(N, [["__scopeId", "data-v-9e46cf28"]]);
export {
  V as default
};
