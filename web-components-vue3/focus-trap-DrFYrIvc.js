import { onMounted as g, onBeforeUnmount as R, ref as y, defineComponent as te, provide as ne, watch as h, unref as T, nextTick as $, renderSlot as se } from "vue";
import { z as M, y as oe, _ as re, f as ce } from "./base-KIYEtT4d.js";
import { E as X } from "./aria-CxTrhz24.js";
function Le(e) {
  return e === void 0;
}
let E = [];
const j = (e) => {
  const n = e;
  n.key === X.esc && E.forEach((s) => s(n));
}, ue = (e) => {
  g(() => {
    E.length === 0 && document.addEventListener("keydown", j), M && E.push(e);
  }), R(() => {
    E = E.filter((n) => n !== e), E.length === 0 && M && document.removeEventListener("keydown", j);
  });
}, w = "focus-trap.focus-after-trapped", O = "focus-trap.focus-after-released", ae = "focus-trap.focusout-prevented", q = {
  cancelable: !0,
  bubbles: !1
}, ie = {
  cancelable: !0,
  bubbles: !1
}, W = "focusAfterTrapped", z = "focusAfterReleased", fe = Symbol("elFocusTrap"), N = y(), P = y(0), k = y(0);
let F = 0;
const Z = (e) => {
  const n = [], s = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const c = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || c ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; s.nextNode(); )
    n.push(s.currentNode);
  return n;
}, J = (e, n) => {
  for (const s of e)
    if (!de(s, n))
      return s;
}, de = (e, n) => {
  if (process.env.NODE_ENV === "test")
    return !1;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (n && e === n)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, le = (e) => {
  const n = Z(e), s = J(n, e), o = J(n.reverse(), e);
  return [s, o];
}, ve = (e) => e instanceof HTMLInputElement && "select" in e, l = (e, n) => {
  if (e && e.focus) {
    const s = document.activeElement;
    e.focus({ preventScroll: !0 }), k.value = window.performance.now(), e !== s && ve(e) && n && e.select();
  }
};
function Y(e, n) {
  const s = [...e], o = e.indexOf(n);
  return o !== -1 && s.splice(o, 1), s;
}
const Ee = () => {
  let e = [];
  return {
    push: (o) => {
      const c = e[0];
      c && o !== c && c.pause(), e = Y(e, o), e.unshift(o);
    },
    remove: (o) => {
      var c, f;
      e = Y(e, o), (f = (c = e[0]) == null ? void 0 : c.resume) == null || f.call(c);
    }
  };
}, pe = (e, n = !1) => {
  const s = document.activeElement;
  for (const o of e)
    if (l(o, n), document.activeElement !== s)
      return;
}, G = Ee(), me = () => P.value > k.value, _ = () => {
  N.value = "pointer", P.value = window.performance.now();
}, Q = () => {
  N.value = "keyboard", P.value = window.performance.now();
}, Te = () => (g(() => {
  F === 0 && (document.addEventListener("mousedown", _), document.addEventListener("touchstart", _), document.addEventListener("keydown", Q)), F++;
}), R(() => {
  F--, F <= 0 && (document.removeEventListener("mousedown", _), document.removeEventListener("touchstart", _), document.removeEventListener("keydown", Q));
}), {
  focusReason: N,
  lastUserFocusTimestamp: P,
  lastAutomatedFocusTimestamp: k
}), b = (e) => new CustomEvent(ae, {
  ...ie,
  detail: e
}), Fe = te({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    W,
    z,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: n }) {
    const s = y();
    let o, c;
    const { focusReason: f } = Te();
    ue((t) => {
      e.trapped && !v.paused && n("release-requested", t);
    });
    const v = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, p = (t) => {
      if (!e.loop && !e.trapped || v.paused)
        return;
      const { key: r, altKey: u, ctrlKey: a, metaKey: i, currentTarget: x, shiftKey: H } = t, { loop: B } = e, ee = r === X.tab && !u && !a && !i, m = document.activeElement;
      if (ee && m) {
        const S = x, [L, C] = le(S);
        if (L && C) {
          if (!H && m === C) {
            const d = b({
              focusReason: f.value
            });
            n("focusout-prevented", d), d.defaultPrevented || (t.preventDefault(), B && l(L, !0));
          } else if (H && [L, S].includes(m)) {
            const d = b({
              focusReason: f.value
            });
            n("focusout-prevented", d), d.defaultPrevented || (t.preventDefault(), B && l(C, !0));
          }
        } else if (m === S) {
          const d = b({
            focusReason: f.value
          });
          n("focusout-prevented", d), d.defaultPrevented || t.preventDefault();
        }
      }
    };
    ne(fe, {
      focusTrapRef: s,
      onKeydown: p
    }), h(() => e.focusTrapEl, (t) => {
      t && (s.value = t);
    }, { immediate: !0 }), h([s], ([t], [r]) => {
      t && (t.addEventListener("keydown", p), t.addEventListener("focusin", U), t.addEventListener("focusout", K)), r && (r.removeEventListener("keydown", p), r.removeEventListener("focusin", U), r.removeEventListener("focusout", K));
    });
    const I = (t) => {
      n(W, t);
    }, A = (t) => n(z, t), U = (t) => {
      const r = T(s);
      if (!r)
        return;
      const u = t.target, a = t.relatedTarget, i = u && r.contains(u);
      e.trapped || a && r.contains(a) || (o = a), i && n("focusin", t), !v.paused && e.trapped && (i ? c = u : l(c, !0));
    }, K = (t) => {
      const r = T(s);
      if (!(v.paused || !r))
        if (e.trapped) {
          const u = t.relatedTarget;
          !oe(u) && !r.contains(u) && setTimeout(() => {
            if (!v.paused && e.trapped) {
              const a = b({
                focusReason: f.value
              });
              n("focusout-prevented", a), a.defaultPrevented || l(c, !0);
            }
          }, 0);
        } else {
          const u = t.target;
          u && r.contains(u) || n("focusout", t);
        }
    };
    async function D() {
      await $();
      const t = T(s);
      if (t) {
        G.push(v);
        const r = t.contains(document.activeElement) ? o : document.activeElement;
        if (o = r, !t.contains(r)) {
          const a = new Event(w, q);
          t.addEventListener(w, I), t.dispatchEvent(a), a.defaultPrevented || $(() => {
            let i = e.focusStartEl;
            ce(i) || (l(i), document.activeElement !== i && (i = "first")), i === "first" && pe(Z(t), !0), (document.activeElement === r || i === "container") && l(t);
          });
        }
      }
    }
    function V() {
      const t = T(s);
      if (t) {
        t.removeEventListener(w, I);
        const r = new CustomEvent(O, {
          ...q,
          detail: {
            focusReason: f.value
          }
        });
        t.addEventListener(O, A), t.dispatchEvent(r), !r.defaultPrevented && (f.value == "keyboard" || !me() || t.contains(document.activeElement)) && l(o ?? document.body), t.removeEventListener(O, A), G.remove(v);
      }
    }
    return g(() => {
      e.trapped && D(), h(() => e.trapped, (t) => {
        t ? D() : V();
      });
    }), R(() => {
      e.trapped && V();
    }), {
      onKeydown: p
    };
  }
});
function _e(e, n, s, o, c, f) {
  return se(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Ce = /* @__PURE__ */ re(Fe, [["render", _e], ["__file", "focus-trap.vue"]]);
export {
  Ce as E,
  fe as F,
  Le as i
};
