import { computed as r, unref as s, getCurrentInstance as i, inject as a } from "vue";
import { z as c, h as u, am as d } from "./base-KIYEtT4d.js";
const t = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, m = Symbol("elIdInjection"), I = () => i() ? a(m, t) : t, l = (o) => {
  const e = I();
  !c && e === t && u("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = d();
  return r(() => s(o) || `${n.value}-id-${e.prefix}-${e.current++}`);
}, b = Symbol("formContextKey"), x = Symbol("formItemContextKey");
export {
  x as a,
  I as b,
  b as f,
  l as u
};
