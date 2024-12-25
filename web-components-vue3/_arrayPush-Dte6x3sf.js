import { i as s, a2 as c } from "./base-KIYEtT4d.js";
var g = 9007199254740991;
function m(r) {
  return typeof r == "number" && r > -1 && r % 1 == 0 && r <= g;
}
var p = "[object Arguments]";
function n(r) {
  return s(r) && c(r) == p;
}
var o = Object.prototype, u = o.hasOwnProperty, b = o.propertyIsEnumerable, h = n(/* @__PURE__ */ function() {
  return arguments;
}()) ? n : function(r) {
  return s(r) && u.call(r, "callee") && !b.call(r, "callee");
};
function l(r, e) {
  for (var t = -1, a = e.length, i = r.length; ++t < a; )
    r[i + t] = e[t];
  return r;
}
export {
  l as a,
  m as b,
  h as i
};
