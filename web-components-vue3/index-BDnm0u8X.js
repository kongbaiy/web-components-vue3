import { watch as c, unref as s, inject as l, computed as d } from "vue";
import { h as p, ak as m } from "./base-KIYEtT4d.js";
const S = ["", "default", "small", "large"], $ = ({ from: e, replacement: t, scope: a, version: i, ref: o, type: r = "API" }, n) => {
  c(() => s(n), (u) => {
    u && p(a, `[${r}] ${e} is about to be deprecated in version ${i}, please use ${t} instead.
For more detail, please visit: ${o}
`);
  }, {
    immediate: !0
  });
}, I = m({
  type: String,
  values: S,
  required: !1
}), b = Symbol("size"), g = () => {
  const e = l(b, {});
  return d(() => s(e.size) || "");
};
export {
  b as S,
  $ as a,
  g as b,
  S as c,
  I as u
};
