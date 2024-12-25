import { getCurrentInstance as v, inject as i, ref as n, computed as r } from "vue";
import { c, j as l, h as m } from "./base-KIYEtT4d.js";
const y = Symbol("emptyValuesContextKey"), C = "use-empty-values", d = ["", void 0, null], f = void 0, E = c({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => l(e) ? !e() : !e
  }
}), A = (e, O) => {
  const a = v() ? i(y, n({})) : n({}), u = r(() => e.emptyValues || a.value.emptyValues || d), t = r(() => l(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : l(a.value.valueOnClear) ? a.value.valueOnClear() : a.value.valueOnClear !== void 0 ? a.value.valueOnClear : f), s = (o) => u.value.includes(o);
  return u.value.includes(t.value) || m(C, "value-on-clear should be a value of empty-values"), {
    emptyValues: u,
    valueOnClear: t,
    isEmptyValue: s
  };
};
export {
  E as a,
  y as e,
  A as u
};
