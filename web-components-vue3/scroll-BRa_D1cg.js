import { z as f } from "./base-KIYEtT4d.js";
let r;
const u = (o) => {
  var l;
  if (!f)
    return 0;
  if (r !== void 0)
    return r;
  const t = document.createElement("div");
  t.className = `${o}-scrollbar__wrap`, t.style.visibility = "hidden", t.style.width = "100px", t.style.position = "absolute", t.style.top = "-9999px", document.body.appendChild(t);
  const e = t.offsetWidth;
  t.style.overflow = "scroll";
  const s = document.createElement("div");
  s.style.width = "100%", t.appendChild(s);
  const i = s.offsetWidth;
  return (l = t.parentNode) == null || l.removeChild(t), r = e - i, r;
};
function a(o, l) {
  if (!f)
    return;
  if (!l) {
    o.scrollTop = 0;
    return;
  }
  const t = [];
  let e = l.offsetParent;
  for (; e !== null && o !== e && o.contains(e); )
    t.push(e), e = e.offsetParent;
  const s = l.offsetTop + t.reduce((d, p) => d + p.offsetTop, 0), i = s + l.offsetHeight, n = o.scrollTop, c = n + o.clientHeight;
  s < n ? o.scrollTop = s : i > c && (o.scrollTop = i - o.clientHeight);
}
export {
  u as g,
  a as s
};
