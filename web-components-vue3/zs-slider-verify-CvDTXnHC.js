import { E as q } from "./base-KIYEtT4d.js";
import { a as b, v as G } from "./common-B4OVZMky.js";
import { E as J } from "./el-overlay-aIYGwghw.js";
import { markRaw as E, openBlock as s, createElementBlock as h, createElementVNode as a, defineComponent as K, useAttrs as O, ref as o, watch as Q, nextTick as Y, onBeforeUnmount as Z, createBlock as $, mergeProps as ee, withCtx as d, withDirectives as te, normalizeStyle as k, unref as n, createVNode as f, normalizeClass as ne, createCommentVNode as oe } from "vue";
import { E as se } from "./el-button-D4ef492v.js";
import { _ as ae } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const re = {
  viewBox: "0 0 1024 1024",
  width: "1.2em",
  height: "1.2em"
}, le = /* @__PURE__ */ a("path", {
  fill: "currentColor",
  d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496"
}, null, -1), ie = [
  le
];
function ce(g, y) {
  return s(), h("svg", re, [...ie]);
}
const ue = E({ name: "ep-close-bold", render: ce }), de = {
  viewBox: "0 0 1024 1024",
  width: "1.2em",
  height: "1.2em"
}, fe = /* @__PURE__ */ a("path", {
  fill: "currentColor",
  d: "M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z"
}, null, -1), _e = [
  fe
];
function me(g, y) {
  return s(), h("svg", de, [..._e]);
}
const ve = E({ name: "ep-right", render: me }), pe = {
  viewBox: "0 0 1024 1024",
  width: "1.2em",
  height: "1.2em"
}, he = /* @__PURE__ */ a("path", {
  fill: "currentColor",
  d: "M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88a384 384 0 0 1-383.936 384a384 384 0 0 1-384-384h64a320 320 0 1 0 640 0a320 320 0 0 0-555.712-216.448z"
}, null, -1), ge = [
  he
];
function ye(g, y) {
  return s(), h("svg", pe, [...ge]);
}
const xe = E({ name: "ep-refresh-left", render: ye }), Ve = ["src"], we = {
  key: 0,
  class: "slider-verify-title"
}, Le = /* @__PURE__ */ K({
  __name: "zs-slider-verify",
  props: {
    delay: { default: 600 }
  },
  emits: ["next", "update:modelValue"],
  setup(g, { emit: y }) {
    const D = g, V = y, M = O(), _ = o({}), B = o(), m = o(), r = o(0), l = o(0), v = o(), w = o(!1), p = o("null");
    Q(
      () => M.modelValue,
      (e) => {
        e && W(), Y(T);
      }
    ), Z(() => {
      var e;
      (e = m.value) == null || e.removeEventListener("mousedown", C), document.removeEventListener("mousemove", X), document.removeEventListener("mouseup", z);
    });
    function W() {
      L();
    }
    function T() {
      var e;
      (e = m.value) == null || e.addEventListener("mousedown", C), document.addEventListener("mousemove", X), document.addEventListener("mouseup", z);
    }
    function C(e) {
      e.preventDefault(), r.value = e.clientX || e.changedTouches[0].clientX;
    }
    function X(e) {
      e.preventDefault();
      const { offsetWidth: t } = B.value || {}, { offsetWidth: c } = m.value || {};
      if (v.value || !r.value || !t || !c) return;
      const i = (e.clientX || e.changedTouches[0].clientX) - r.value, x = i + c + 4;
      i > 0 && x < t && (l.value = i);
    }
    function z(e) {
      e.preventDefault();
      const { offsetWidth: t = 0 } = m.value || {};
      if (v.value || !r.value || r.value < t) return;
      v.value = !0;
      const { charImage: c, y: u } = _.value, i = l.value;
      H({
        charImage: c,
        x: i,
        y: u
      });
    }
    function N() {
      V("update:modelValue", !1);
    }
    function U(e) {
      return e ? `url(data:image/jpg;base64,${e})` : "";
    }
    function j(e) {
      return e ? `data:image/jpg;base64,${e}` : "";
    }
    function F(e) {
      return `slider-verify__${e}`;
    }
    async function L() {
      try {
        w.value = !0;
        const { data: e } = await b.get("/sso/captcha/verification/image");
        _.value = e;
      } finally {
        w.value = !1, p.value = "null";
      }
    }
    async function H(e) {
      try {
        const { data: t } = await b.post("/sso/captcha/verification/result", e);
        typeof t.result == "boolean" && (p.value = t.result ? "success" : "error"), setTimeout(() => {
          r.value = 0, l.value = 0, v.value = !1, t.result ? (V("next"), V("update:modelValue", !1)) : L();
        }, D.delay);
      } catch {
        p.value = "null", r.value = 0, l.value = 0, v.value = !1;
      }
    }
    return (e, t) => {
      const c = xe, u = q, i = ve, x = se, A = ue, P = J, R = G;
      return s(), $(P, ee(e.$attrs, {
        title: "请进行安全验证",
        width: "340px",
        onClose: N
      }), {
        default: d(() => {
          var I, S;
          return [
            te((s(), h("div", null, [
              a("div", {
                style: k({
                  backgroundImage: U((I = n(_)) == null ? void 0 : I.shadeImage)
                }),
                class: "slider-verify-bg"
              }, [
                f(u, {
                  size: 20,
                  onClick: L,
                  class: "cursor-pointer"
                }, {
                  default: d(() => [
                    f(c)
                  ]),
                  _: 1
                }),
                a("div", {
                  style: k({
                    top: `${n(_).y}px`,
                    transform: `translate3d(${n(l)}px, 0px, 0px)`
                  }),
                  class: "slider-verify-key"
                }, [
                  a("img", {
                    src: j((S = n(_)) == null ? void 0 : S.cutoutImage)
                  }, null, 8, Ve)
                ], 4)
              ], 4),
              a("div", {
                ref_key: "sliderVerifyContainer",
                ref: B,
                class: ne(["slider-verify-container", F(n(p))])
              }, [
                n(l) === 0 ? (s(), h("p", we, "向右滑动填充拼图")) : oe("", !0),
                a("div", {
                  ref_key: "sliderVerification",
                  ref: m,
                  style: k({ transform: `translate3d(${n(l)}px, 0px, 0px)` }),
                  class: "slider-verification"
                }, [
                  n(p) !== "error" ? (s(), $(x, {
                    key: 0,
                    class: "slider-verify-button__primary"
                  }, {
                    default: d(() => [
                      f(u, { size: 20 }, {
                        default: d(() => [
                          f(i)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : (s(), $(x, {
                    key: 1,
                    type: "danger",
                    class: "slider-verify-button__danger"
                  }, {
                    default: d(() => [
                      f(u, { size: 20 }, {
                        default: d(() => [
                          f(A)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }))
                ], 4)
              ], 2)
            ])), [
              [R, n(w)]
            ])
          ];
        }),
        _: 1
      }, 16);
    };
  }
}), ze = /* @__PURE__ */ ae(Le, [["__scopeId", "data-v-c68fffe8"]]);
export {
  ze as default
};
