import "./base-KIYEtT4d.js";
import { s as c, v as i } from "./common-B4OVZMky.js";
import { defineComponent as a, ref as u, onBeforeMount as d, onUnmounted as m, withDirectives as p, openBlock as _, createElementBlock as l, unref as f } from "vue";
import { u as h, a as v } from "./vue-router-DkRpx4k-.js";
const k = { class: "h-screen" }, C = /* @__PURE__ */ a({
  __name: "zs-auth-redirect",
  setup(I) {
    const s = h(), r = v(), o = u(!0);
    return d(() => {
      const { authorization: t, sessionId: n } = r.query, e = {
        authorization: decodeURIComponent(t),
        sessionId: decodeURIComponent(n)
      };
      c(e), s.push("/");
    }), m(() => {
      o.value = !1;
    }), (t, n) => {
      const e = i;
      return p((_(), l("div", k, null, 512)), [
        [e, f(o)]
      ]);
    };
  }
});
export {
  C as default
};
