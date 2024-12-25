import { inject as c } from "vue";
/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var r;
(function(o) {
  o.pop = "pop", o.push = "push";
})(r || (r = {}));
var e;
(function(o) {
  o.back = "back", o.forward = "forward", o.unknown = "";
})(e || (e = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var n;
(function(o) {
  o[o.aborted = 4] = "aborted", o[o.cancelled = 8] = "cancelled", o[o.duplicated = 16] = "duplicated";
})(n || (n = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const t = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), u = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function p() {
  return c(t);
}
function d(o) {
  return c(u);
}
export {
  d as a,
  p as u
};
