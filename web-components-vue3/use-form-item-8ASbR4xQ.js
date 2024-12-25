import { getCurrentInstance as z, computed as a, ref as t, inject as n, unref as p, onMounted as b, watch as y, toRef as F, onUnmounted as h } from "vue";
import { f as c, a as m, u as w } from "./constants-DHmlFrYd.js";
import { b as _ } from "./index-BDnm0u8X.js";
const I = (l) => {
  const o = z();
  return a(() => {
    var u, e;
    return (e = (u = o == null ? void 0 : o.proxy) == null ? void 0 : u.$props) == null ? void 0 : e[l];
  });
}, S = (l, o = {}) => {
  const u = t(void 0), e = o.prop ? u : I("size"), s = o.global ? u : _(), i = o.form ? { size: void 0 } : n(c, void 0), d = o.formItem ? { size: void 0 } : n(m, void 0);
  return a(() => e.value || p(l) || (d == null ? void 0 : d.size) || (i == null ? void 0 : i.size) || s.value || "");
}, U = (l) => {
  const o = I("disabled"), u = n(c, void 0);
  return a(() => o.value || p(l) || (u == null ? void 0 : u.disabled) || !1);
}, j = () => {
  const l = n(c, void 0), o = n(m, void 0);
  return {
    form: l,
    formItem: o
  };
}, B = (l, {
  formItemContext: o,
  disableIdGeneration: u,
  disableIdManagement: e
}) => {
  u || (u = t(!1)), e || (e = t(!1));
  const s = t();
  let i;
  const d = a(() => {
    var v;
    return !!(!(l.label || l.ariaLabel) && o && o.inputIds && ((v = o.inputIds) == null ? void 0 : v.length) <= 1);
  });
  return b(() => {
    i = y([F(l, "id"), u], ([v, f]) => {
      const r = v ?? (f ? void 0 : w().value);
      r !== s.value && (o != null && o.removeInputId && (s.value && o.removeInputId(s.value), !(e != null && e.value) && !f && r && o.addInputId(r)), s.value = r);
    }, { immediate: !0 });
  }), h(() => {
    i && i(), o != null && o.removeInputId && s.value && o.removeInputId(s.value);
  }), {
    isLabeledByFormItem: d,
    inputId: s
  };
};
export {
  j as a,
  B as b,
  U as c,
  S as u
};
