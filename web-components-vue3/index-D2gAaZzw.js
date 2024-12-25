import { u as N, _ as re, n as te, o as de, p as je, c as ye, t as le, m as qe, q as Ve, E as Ie, f as U, s as Te, d as he, v as Fe, x as Ge, y as Se, w as Ke, l as _e } from "./base-KIYEtT4d.js";
import "./el-tooltip-l0sNRNKZ.js";
import { E as Oe } from "./el-popper-DdrJbju1.js";
import { defineComponent as W, openBlock as x, createBlock as L, Transition as Pe, mergeProps as Ne, unref as be, toHandlers as Ue, withCtx as w, renderSlot as R, computed as g, getCurrentInstance as Ce, inject as ue, ref as T, reactive as xe, watch as ne, provide as ge, onMounted as ke, onBeforeUnmount as Be, h as C, Fragment as q, withDirectives as Ae, vShow as Ze, watchEffect as Je, nextTick as Qe, toRef as Xe, resolveComponent as ze, createElementBlock as z, normalizeClass as X, createElementVNode as ie, createTextVNode as Me, toDisplayString as oe, renderList as we, createCommentVNode as pe, createVNode as $e } from "vue";
import { u as Ye, a as et } from "./vue-router-DkRpx4k-.js";
import { u as tt } from "./index-nT5oH0pN.js";
import { E as P } from "./aria-CxTrhz24.js";
import { T as nt } from "./index-Cj20c3-L.js";
import { i as Q } from "./icon-C_1Mywq7.js";
import { m as ot } from "./typescript-BpuhIBuJ.js";
import { f as at } from "./vnode-BTm5VS2h.js";
import { C as st } from "./index-BvVAGJky.js";
import { _ as lt } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const ae = function(e, o, ...n) {
  let i;
  o.includes("mouse") || o.includes("click") ? i = "MouseEvents" : o.includes("key") ? i = "KeyboardEvent" : i = "HTMLEvents";
  const t = document.createEvent(i);
  return t.initEvent(o, ...n), e.dispatchEvent(t), e;
}, ut = W({
  name: "ElCollapseTransition"
}), it = /* @__PURE__ */ W({
  ...ut,
  setup(e) {
    const o = N("collapse-transition"), n = (t) => {
      t.style.maxHeight = "", t.style.overflow = t.dataset.oldOverflow, t.style.paddingTop = t.dataset.oldPaddingTop, t.style.paddingBottom = t.dataset.oldPaddingBottom;
    }, i = {
      beforeEnter(t) {
        t.dataset || (t.dataset = {}), t.dataset.oldPaddingTop = t.style.paddingTop, t.dataset.oldPaddingBottom = t.style.paddingBottom, t.style.height && (t.dataset.elExistsHeight = t.style.height), t.style.maxHeight = 0, t.style.paddingTop = 0, t.style.paddingBottom = 0;
      },
      enter(t) {
        requestAnimationFrame(() => {
          t.dataset.oldOverflow = t.style.overflow, t.dataset.elExistsHeight ? t.style.maxHeight = t.dataset.elExistsHeight : t.scrollHeight !== 0 ? t.style.maxHeight = `${t.scrollHeight}px` : t.style.maxHeight = 0, t.style.paddingTop = t.dataset.oldPaddingTop, t.style.paddingBottom = t.dataset.oldPaddingBottom, t.style.overflow = "hidden";
        });
      },
      afterEnter(t) {
        t.style.maxHeight = "", t.style.overflow = t.dataset.oldOverflow;
      },
      enterCancelled(t) {
        n(t);
      },
      beforeLeave(t) {
        t.dataset || (t.dataset = {}), t.dataset.oldPaddingTop = t.style.paddingTop, t.dataset.oldPaddingBottom = t.style.paddingBottom, t.dataset.oldOverflow = t.style.overflow, t.style.maxHeight = `${t.scrollHeight}px`, t.style.overflow = "hidden";
      },
      leave(t) {
        t.scrollHeight !== 0 && (t.style.maxHeight = 0, t.style.paddingTop = 0, t.style.paddingBottom = 0);
      },
      afterLeave(t) {
        n(t);
      },
      leaveCancelled(t) {
        n(t);
      }
    };
    return (t, y) => (x(), L(Pe, Ne({
      name: be(o).b()
    }, Ue(i)), {
      default: w(() => [
        R(t.$slots, "default")
      ]),
      _: 3
    }, 16, ["name"]));
  }
});
var se = /* @__PURE__ */ re(it, [["__file", "collapse-transition.vue"]]);
se.install = (e) => {
  e.component(se.name, se);
};
const rt = se;
let ct = class {
  constructor(o, n) {
    this.parent = o, this.domNode = n, this.subIndex = 0, this.subIndex = 0, this.init();
  }
  init() {
    this.subMenuItems = this.domNode.querySelectorAll("li"), this.addListeners();
  }
  gotoSubIndex(o) {
    o === this.subMenuItems.length ? o = 0 : o < 0 && (o = this.subMenuItems.length - 1), this.subMenuItems[o].focus(), this.subIndex = o;
  }
  addListeners() {
    const o = this.parent.domNode;
    Array.prototype.forEach.call(this.subMenuItems, (n) => {
      n.addEventListener("keydown", (i) => {
        let t = !1;
        switch (i.code) {
          case P.down: {
            this.gotoSubIndex(this.subIndex + 1), t = !0;
            break;
          }
          case P.up: {
            this.gotoSubIndex(this.subIndex - 1), t = !0;
            break;
          }
          case P.tab: {
            ae(o, "mouseleave");
            break;
          }
          case P.enter:
          case P.space: {
            t = !0, i.currentTarget.click();
            break;
          }
        }
        return t && (i.preventDefault(), i.stopPropagation()), !1;
      });
    });
  }
}, dt = class {
  constructor(o, n) {
    this.domNode = o, this.submenu = null, this.submenu = null, this.init(n);
  }
  init(o) {
    this.domNode.setAttribute("tabindex", "0");
    const n = this.domNode.querySelector(`.${o}-menu`);
    n && (this.submenu = new ct(this, n)), this.addListeners();
  }
  addListeners() {
    this.domNode.addEventListener("keydown", (o) => {
      let n = !1;
      switch (o.code) {
        case P.down: {
          ae(o.currentTarget, "mouseenter"), this.submenu && this.submenu.gotoSubIndex(0), n = !0;
          break;
        }
        case P.up: {
          ae(o.currentTarget, "mouseenter"), this.submenu && this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1), n = !0;
          break;
        }
        case P.tab: {
          ae(o.currentTarget, "mouseleave");
          break;
        }
        case P.enter:
        case P.space: {
          n = !0, o.currentTarget.click();
          break;
        }
      }
      n && o.preventDefault();
    });
  }
}, pt = class {
  constructor(o, n) {
    this.domNode = o, this.init(n);
  }
  init(o) {
    const n = this.domNode.childNodes;
    Array.from(n).forEach((i) => {
      i.nodeType === 1 && new dt(i, o);
    });
  }
};
const mt = W({
  name: "ElMenuCollapseTransition",
  setup() {
    const e = N("menu");
    return {
      listeners: {
        onBeforeEnter: (n) => n.style.opacity = "0.2",
        onEnter(n, i) {
          te(n, `${e.namespace.value}-opacity-transition`), n.style.opacity = "1", i();
        },
        onAfterEnter(n) {
          de(n, `${e.namespace.value}-opacity-transition`), n.style.opacity = "";
        },
        onBeforeLeave(n) {
          n.dataset || (n.dataset = {}), je(n, e.m("collapse")) ? (de(n, e.m("collapse")), n.dataset.oldOverflow = n.style.overflow, n.dataset.scrollWidth = n.clientWidth.toString(), te(n, e.m("collapse"))) : (te(n, e.m("collapse")), n.dataset.oldOverflow = n.style.overflow, n.dataset.scrollWidth = n.clientWidth.toString(), de(n, e.m("collapse"))), n.style.width = `${n.scrollWidth}px`, n.style.overflow = "hidden";
        },
        onLeave(n) {
          te(n, "horizontal-collapse-transition"), n.style.width = `${n.dataset.scrollWidth}px`;
        }
      }
    };
  }
});
function vt(e, o, n, i, t, y) {
  return x(), L(Pe, Ne({ mode: "out-in" }, e.listeners), {
    default: w(() => [
      R(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
var ft = /* @__PURE__ */ re(mt, [["render", vt], ["__file", "menu-collapse-transition.vue"]]);
function He(e, o) {
  const n = g(() => {
    let t = e.parent;
    const y = [o.value];
    for (; t.type.name !== "ElMenu"; )
      t.props.index && y.unshift(t.props.index), t = t.parent;
    return y;
  });
  return {
    parentMenu: g(() => {
      let t = e.parent;
      for (; t && !["ElMenu", "ElSubMenu"].includes(t.type.name); )
        t = t.parent;
      return t;
    }),
    indexPath: n
  };
}
function ht(e) {
  return g(() => {
    const n = e.backgroundColor;
    return n ? new nt(n).shade(20).toString() : "";
  });
}
const Le = (e, o) => {
  const n = N("menu");
  return g(() => n.cssVarBlock({
    "text-color": e.textColor || "",
    "hover-text-color": e.textColor || "",
    "bg-color": e.backgroundColor || "",
    "hover-bg-color": ht(e).value || "",
    "active-color": e.activeTextColor || "",
    level: `${o}`
  }));
}, bt = ye({
  index: {
    type: String,
    required: !0
  },
  showTimeout: Number,
  hideTimeout: Number,
  popperClass: String,
  disabled: Boolean,
  teleported: {
    type: Boolean,
    default: void 0
  },
  popperOffset: Number,
  expandCloseIcon: {
    type: Q
  },
  expandOpenIcon: {
    type: Q
  },
  collapseCloseIcon: {
    type: Q
  },
  collapseOpenIcon: {
    type: Q
  }
}), me = "ElSubMenu";
var Ee = W({
  name: me,
  props: bt,
  setup(e, { slots: o, expose: n }) {
    const i = Ce(), { indexPath: t, parentMenu: y } = He(i, g(() => e.index)), m = N("menu"), M = N("sub-menu"), l = ue("rootMenu");
    l || le(me, "can not inject root menu");
    const d = ue(`subMenu:${y.value.uid}`);
    d || le(me, "can not inject sub menu");
    const v = T({}), c = T({});
    let f;
    const S = T(!1), V = T(), D = T(null), B = g(() => j.value === "horizontal" && h.value ? "bottom-start" : "right-start"), H = g(() => j.value === "horizontal" && h.value || j.value === "vertical" && !l.props.collapse ? e.expandCloseIcon && e.expandOpenIcon ? $.value ? e.expandOpenIcon : e.expandCloseIcon : qe : e.collapseCloseIcon && e.collapseOpenIcon ? $.value ? e.collapseOpenIcon : e.collapseCloseIcon : Ve), h = g(() => d.level === 0), k = g(() => {
      const u = e.teleported;
      return u === void 0 ? h.value : u;
    }), Z = g(() => l.props.collapse ? `${m.namespace.value}-zoom-in-left` : `${m.namespace.value}-zoom-in-top`), ce = g(() => j.value === "horizontal" && h.value ? [
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end",
      "right-start",
      "left-start"
    ] : [
      "right-start",
      "right",
      "right-end",
      "left-start",
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end"
    ]), $ = g(() => l.openedMenus.includes(e.index)), F = g(() => {
      let u = !1;
      return Object.values(v.value).forEach((p) => {
        p.active && (u = !0);
      }), Object.values(c.value).forEach((p) => {
        p.active && (u = !0);
      }), u;
    }), j = g(() => l.props.mode), G = xe({
      index: e.index,
      indexPath: t,
      active: F
    }), J = Le(l.props, d.level + 1), Y = g(() => {
      var u;
      return (u = e.popperOffset) != null ? u : l.props.popperOffset;
    }), K = g(() => {
      var u;
      return (u = e.popperClass) != null ? u : l.props.popperClass;
    }), ee = g(() => {
      var u;
      return (u = e.showTimeout) != null ? u : l.props.showTimeout;
    }), a = g(() => {
      var u;
      return (u = e.hideTimeout) != null ? u : l.props.hideTimeout;
    }), s = () => {
      var u, p, _;
      return (_ = (p = (u = D.value) == null ? void 0 : u.popperRef) == null ? void 0 : p.popperInstanceRef) == null ? void 0 : _.destroy();
    }, r = (u) => {
      u || s();
    }, I = () => {
      l.props.menuTrigger === "hover" && l.props.mode === "horizontal" || l.props.collapse && l.props.mode === "vertical" || e.disabled || l.handleSubMenuClick({
        index: e.index,
        indexPath: t.value,
        active: F.value
      });
    }, b = (u, p = ee.value) => {
      var _;
      if (u.type !== "focus") {
        if (l.props.menuTrigger === "click" && l.props.mode === "horizontal" || !l.props.collapse && l.props.mode === "vertical" || e.disabled) {
          d.mouseInChild.value = !0;
          return;
        }
        d.mouseInChild.value = !0, f == null || f(), { stop: f } = Te(() => {
          l.openMenu(e.index, t.value);
        }, p), k.value && ((_ = y.value.vnode.el) == null || _.dispatchEvent(new MouseEvent("mouseenter")));
      }
    }, O = (u = !1) => {
      var p;
      if (l.props.menuTrigger === "click" && l.props.mode === "horizontal" || !l.props.collapse && l.props.mode === "vertical") {
        d.mouseInChild.value = !1;
        return;
      }
      f == null || f(), d.mouseInChild.value = !1, { stop: f } = Te(() => !S.value && l.closeMenu(e.index, t.value), a.value), k.value && u && ((p = d.handleMouseleave) == null || p.call(d, !0));
    };
    ne(() => l.props.collapse, (u) => r(!!u));
    {
      const u = (_) => {
        c.value[_.index] = _;
      }, p = (_) => {
        delete c.value[_.index];
      };
      ge(`subMenu:${i.uid}`, {
        addSubMenu: u,
        removeSubMenu: p,
        handleMouseleave: O,
        mouseInChild: S,
        level: d.level + 1
      });
    }
    return n({
      opened: $
    }), ke(() => {
      l.addSubMenu(G), d.addSubMenu(G);
    }), Be(() => {
      d.removeSubMenu(G), l.removeSubMenu(G);
    }), () => {
      var u;
      const p = [
        (u = o.title) == null ? void 0 : u.call(o),
        C(Ie, {
          class: M.e("icon-arrow"),
          style: {
            transform: $.value ? e.expandCloseIcon && e.expandOpenIcon || e.collapseCloseIcon && e.collapseOpenIcon && l.props.collapse ? "none" : "rotateZ(180deg)" : "none"
          }
        }, {
          default: () => U(H.value) ? C(i.appContext.components[H.value]) : C(H.value)
        })
      ], _ = l.isMenuPopup ? C(Oe, {
        ref: D,
        visible: $.value,
        effect: "light",
        pure: !0,
        offset: Y.value,
        showArrow: !1,
        persistent: !0,
        popperClass: K.value,
        placement: B.value,
        teleported: k.value,
        fallbackPlacements: ce.value,
        transition: Z.value,
        gpuAcceleration: !1
      }, {
        content: () => {
          var E;
          return C("div", {
            class: [
              m.m(j.value),
              m.m("popup-container"),
              K.value
            ],
            onMouseenter: (A) => b(A, 100),
            onMouseleave: () => O(!0),
            onFocus: (A) => b(A, 100)
          }, [
            C("ul", {
              class: [
                m.b(),
                m.m("popup"),
                m.m(`popup-${B.value}`)
              ],
              style: J.value
            }, [(E = o.default) == null ? void 0 : E.call(o)])
          ]);
        },
        default: () => C("div", {
          class: M.e("title"),
          onClick: I
        }, p)
      }) : C(q, {}, [
        C("div", {
          class: M.e("title"),
          ref: V,
          onClick: I
        }, p),
        C(rt, {}, {
          default: () => {
            var E;
            return Ae(C("ul", {
              role: "menu",
              class: [m.b(), m.m("inline")],
              style: J.value
            }, [(E = o.default) == null ? void 0 : E.call(o)]), [[Ze, $.value]]);
          }
        })
      ]);
      return C("li", {
        class: [
          M.b(),
          M.is("active", F.value),
          M.is("opened", $.value),
          M.is("disabled", e.disabled)
        ],
        role: "menuitem",
        ariaHaspopup: !0,
        ariaExpanded: $.value,
        onMouseenter: b,
        onMouseleave: () => O(),
        onFocus: b
      }, [_]);
    };
  }
});
const gt = ye({
  mode: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "vertical"
  },
  defaultActive: {
    type: String,
    default: ""
  },
  defaultOpeneds: {
    type: he(Array),
    default: () => ot([])
  },
  uniqueOpened: Boolean,
  router: Boolean,
  menuTrigger: {
    type: String,
    values: ["hover", "click"],
    default: "hover"
  },
  collapse: Boolean,
  backgroundColor: String,
  textColor: String,
  activeTextColor: String,
  closeOnClickOutside: Boolean,
  collapseTransition: {
    type: Boolean,
    default: !0
  },
  ellipsis: {
    type: Boolean,
    default: !0
  },
  popperOffset: {
    type: Number,
    default: 6
  },
  ellipsisIcon: {
    type: Q,
    default: () => Fe
  },
  popperEffect: {
    type: String,
    values: ["dark", "light"],
    default: "dark"
  },
  popperClass: String,
  showTimeout: {
    type: Number,
    default: 300
  },
  hideTimeout: {
    type: Number,
    default: 300
  }
}), ve = (e) => Array.isArray(e) && e.every((o) => U(o)), Mt = {
  close: (e, o) => U(e) && ve(o),
  open: (e, o) => U(e) && ve(o),
  select: (e, o, n, i) => U(e) && ve(o) && Ge(n) && (i === void 0 || i instanceof Promise)
};
var yt = W({
  name: "ElMenu",
  props: gt,
  emits: Mt,
  setup(e, { emit: o, slots: n, expose: i }) {
    const t = Ce(), y = t.appContext.config.globalProperties.$router, m = T(), M = N("menu"), l = N("sub-menu"), d = T(-1), v = T(e.defaultOpeneds && !e.collapse ? e.defaultOpeneds.slice(0) : []), c = T(e.defaultActive), f = T({}), S = T({}), V = g(() => e.mode === "horizontal" || e.mode === "vertical" && e.collapse), D = () => {
      const a = c.value && f.value[c.value];
      if (!a || e.mode === "horizontal" || e.collapse)
        return;
      a.indexPath.forEach((r) => {
        const I = S.value[r];
        I && B(r, I.indexPath);
      });
    }, B = (a, s) => {
      v.value.includes(a) || (e.uniqueOpened && (v.value = v.value.filter((r) => s.includes(r))), v.value.push(a), o("open", a, s));
    }, H = (a) => {
      const s = v.value.indexOf(a);
      s !== -1 && v.value.splice(s, 1);
    }, h = (a, s) => {
      H(a), o("close", a, s);
    }, k = ({
      index: a,
      indexPath: s
    }) => {
      v.value.includes(a) ? h(a, s) : B(a, s);
    }, Z = (a) => {
      (e.mode === "horizontal" || e.collapse) && (v.value = []);
      const { index: s, indexPath: r } = a;
      if (!(Se(s) || Se(r)))
        if (e.router && y) {
          const I = a.route || s, b = y.push(I).then((O) => (O || (c.value = s), O));
          o("select", s, r, { index: s, indexPath: r, route: I }, b);
        } else
          c.value = s, o("select", s, r, { index: s, indexPath: r });
    }, ce = (a) => {
      const s = f.value, r = s[a] || c.value && s[c.value] || s[e.defaultActive];
      r ? c.value = r.index : c.value = a;
    }, $ = (a) => {
      const s = getComputedStyle(a), r = Number.parseInt(s.marginLeft, 10), I = Number.parseInt(s.marginRight, 10);
      return a.offsetWidth + r + I || 0;
    }, F = () => {
      var a, s;
      if (!m.value)
        return -1;
      const r = Array.from((s = (a = m.value) == null ? void 0 : a.childNodes) != null ? s : []).filter((A) => A.nodeName !== "#comment" && (A.nodeName !== "#text" || A.nodeValue)), I = 64, b = getComputedStyle(m.value), O = Number.parseInt(b.paddingLeft, 10), u = Number.parseInt(b.paddingRight, 10), p = m.value.clientWidth - O - u;
      let _ = 0, E = 0;
      return r.forEach((A, De) => {
        _ += $(A), _ <= p - I && (E = De + 1);
      }), E === r.length ? -1 : E;
    }, j = (a) => S.value[a].indexPath, G = (a, s = 33.34) => {
      let r;
      return () => {
        r && clearTimeout(r), r = setTimeout(() => {
          a();
        }, s);
      };
    };
    let J = !0;
    const Y = () => {
      if (d.value === F())
        return;
      const a = () => {
        d.value = -1, Qe(() => {
          d.value = F();
        });
      };
      J ? a() : G(a)(), J = !1;
    };
    ne(() => e.defaultActive, (a) => {
      f.value[a] || (c.value = ""), ce(a);
    }), ne(() => e.collapse, (a) => {
      a && (v.value = []);
    }), ne(f.value, D);
    let K;
    Je(() => {
      e.mode === "horizontal" && e.ellipsis ? K = tt(m, Y).stop : K == null || K();
    });
    const ee = T(!1);
    {
      const a = (b) => {
        S.value[b.index] = b;
      }, s = (b) => {
        delete S.value[b.index];
      };
      ge("rootMenu", xe({
        props: e,
        openedMenus: v,
        items: f,
        subMenus: S,
        activeIndex: c,
        isMenuPopup: V,
        addMenuItem: (b) => {
          f.value[b.index] = b;
        },
        removeMenuItem: (b) => {
          delete f.value[b.index];
        },
        addSubMenu: a,
        removeSubMenu: s,
        openMenu: B,
        closeMenu: h,
        handleMenuItemClick: Z,
        handleSubMenuClick: k
      })), ge(`subMenu:${t.uid}`, {
        addSubMenu: a,
        removeSubMenu: s,
        mouseInChild: ee,
        level: 0
      });
    }
    return ke(() => {
      e.mode === "horizontal" && new pt(t.vnode.el, M.namespace.value);
    }), i({
      open: (s) => {
        const { indexPath: r } = S.value[s];
        r.forEach((I) => B(I, r));
      },
      close: H,
      handleResize: Y
    }), () => {
      var a, s;
      let r = (s = (a = n.default) == null ? void 0 : a.call(n)) != null ? s : [];
      const I = [];
      if (e.mode === "horizontal" && m.value) {
        const p = at(r), _ = d.value === -1 ? p : p.slice(0, d.value), E = d.value === -1 ? [] : p.slice(d.value);
        E != null && E.length && e.ellipsis && (r = _, I.push(C(Ee, {
          index: "sub-menu-more",
          class: l.e("hide-arrow"),
          popperOffset: e.popperOffset
        }, {
          title: () => C(Ie, {
            class: l.e("icon-more")
          }, {
            default: () => C(e.ellipsisIcon)
          }),
          default: () => E
        })));
      }
      const b = Le(e, 0), O = e.closeOnClickOutside ? [
        [
          st,
          () => {
            v.value.length && (ee.value || (v.value.forEach((p) => o("close", p, j(p))), v.value = []));
          }
        ]
      ] : [], u = Ae(C("ul", {
        key: String(e.collapse),
        role: "menubar",
        ref: m,
        style: b.value,
        class: {
          [M.b()]: !0,
          [M.m(e.mode)]: !0,
          [M.m("collapse")]: e.collapse
        }
      }, [...r, ...I]), O);
      return e.collapseTransition && e.mode === "vertical" ? C(ft, () => u) : u;
    };
  }
});
const It = ye({
  index: {
    type: he([String, null]),
    default: null
  },
  route: {
    type: he([String, Object])
  },
  disabled: Boolean
}), _t = {
  click: (e) => U(e.index) && Array.isArray(e.indexPath)
}, fe = "ElMenuItem", Ct = W({
  name: fe,
  components: {
    ElTooltip: Oe
  },
  props: It,
  emits: _t,
  setup(e, { emit: o }) {
    const n = Ce(), i = ue("rootMenu"), t = N("menu"), y = N("menu-item");
    i || le(fe, "can not inject root menu");
    const { parentMenu: m, indexPath: M } = He(n, Xe(e, "index")), l = ue(`subMenu:${m.value.uid}`);
    l || le(fe, "can not inject sub menu");
    const d = g(() => e.index === i.activeIndex), v = xe({
      index: e.index,
      indexPath: M,
      active: d
    }), c = () => {
      e.disabled || (i.handleMenuItemClick({
        index: e.index,
        indexPath: M.value,
        route: e.route
      }), o("click", v));
    };
    return ke(() => {
      l.addSubMenu(v), i.addMenuItem(v);
    }), Be(() => {
      l.removeSubMenu(v), i.removeMenuItem(v);
    }), {
      parentMenu: m,
      rootMenu: i,
      active: d,
      nsMenu: t,
      nsMenuItem: y,
      handleClick: c
    };
  }
});
function xt(e, o, n, i, t, y) {
  const m = ze("el-tooltip");
  return x(), z("li", {
    class: X([
      e.nsMenuItem.b(),
      e.nsMenuItem.is("active", e.active),
      e.nsMenuItem.is("disabled", e.disabled)
    ]),
    role: "menuitem",
    tabindex: "-1",
    onClick: o[0] || (o[0] = (...M) => e.handleClick && e.handleClick(...M))
  }, [
    e.parentMenu.type.name === "ElMenu" && e.rootMenu.props.collapse && e.$slots.title ? (x(), L(m, {
      key: 0,
      effect: e.rootMenu.props.popperEffect,
      placement: "right",
      "fallback-placements": ["left"],
      persistent: ""
    }, {
      content: w(() => [
        R(e.$slots, "title")
      ]),
      default: w(() => [
        ie("div", {
          class: X(e.nsMenu.be("tooltip", "trigger"))
        }, [
          R(e.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 8, ["effect"])) : (x(), z(q, { key: 1 }, [
      R(e.$slots, "default"),
      R(e.$slots, "title")
    ], 64))
  ], 2);
}
var Re = /* @__PURE__ */ re(Ct, [["render", xt], ["__file", "menu-item.vue"]]);
const kt = {
  title: String
}, Et = "ElMenuItemGroup", Tt = W({
  name: Et,
  props: kt,
  setup() {
    return {
      ns: N("menu-item-group")
    };
  }
});
function St(e, o, n, i, t, y) {
  return x(), z("li", {
    class: X(e.ns.b())
  }, [
    ie("div", {
      class: X(e.ns.e("title"))
    }, [
      e.$slots.title ? R(e.$slots, "title", { key: 1 }) : (x(), z(q, { key: 0 }, [
        Me(oe(e.title), 1)
      ], 64))
    ], 2),
    ie("ul", null, [
      R(e.$slots, "default")
    ])
  ], 2);
}
var We = /* @__PURE__ */ re(Tt, [["render", St], ["__file", "menu-item-group.vue"]]);
const wt = Ke(yt, {
  MenuItem: Re,
  MenuItemGroup: We,
  SubMenu: Ee
}), $t = _e(Re);
_e(We);
const Ot = _e(Ee), Pt = ["onClick"], Nt = /* @__PURE__ */ W({
  __name: "index",
  props: {
    menuKey: {}
  },
  setup(e) {
    const o = e, n = Ye(), i = et(), t = n.options.routes.filter((c) => {
      var f;
      if ((f = c.meta) != null && f[o.menuKey]) return c;
    });
    let y = "";
    const m = g(() => {
      const { meta: c, path: f } = i;
      return c.activeMenu ? c.activeMenu : f;
    });
    function M() {
      y && (n.push(y), d(null));
    }
    function l(c, f) {
      d(f), c.preventDefault();
    }
    function d(c) {
      y = c;
    }
    function v(c) {
      return c.join("/");
    }
    return (c, f) => {
      const S = Ie, V = ze("router-link"), D = $t, B = Ot, H = wt;
      return x(), L(H, {
        defaultActive: be(m),
        "unique-opened": "",
        onOpen: M
      }, {
        default: w(() => [
          (x(!0), z(q, null, we(be(t), (h) => (x(), z(q, {
            key: h.path
          }, [
            h.children ? (x(), L(B, {
              key: 0,
              index: h.path,
              class: X({ "hidden-icon": h.meta.hideArrow })
            }, {
              title: w(() => {
                var k;
                return [
                  h.meta.hideMenu ? pe("", !0) : (x(), z("div", {
                    key: 0,
                    class: "w-full",
                    onClick: (Z) => l(Z, h.redirect)
                  }, [
                    (k = h.meta) != null && k.icon ? (x(), L(S, {
                      key: 0,
                      icon: h.meta.icon
                    }, null, 8, ["icon"])) : pe("", !0),
                    ie("span", null, oe(c.$t(h.meta.title)), 1)
                  ], 8, Pt))
                ];
              }),
              default: w(() => [
                (x(!0), z(q, null, we(h.children, (k) => (x(), z(q, {
                  key: k.path
                }, [
                  k.meta.hideMenu ? pe("", !0) : (x(), L(D, {
                    key: 0,
                    index: v([h.path, k.path])
                  }, {
                    default: w(() => [
                      $e(V, {
                        to: v([h.path, k.path]),
                        class: "w-full"
                      }, {
                        default: w(() => [
                          Me(oe(c.$t(k.meta.title)), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ]),
                    _: 2
                  }, 1032, ["index"]))
                ], 64))), 128))
              ]),
              _: 2
            }, 1032, ["index", "class"])) : (x(), L(D, { key: 1 }, {
              default: w(() => [
                $e(V, {
                  to: h.path
                }, {
                  default: w(() => [
                    Me(oe(c.$t(h.meta.title)), 1)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]),
              _: 2
            }, 1024))
          ], 64))), 128))
        ]),
        _: 1
      }, 8, ["defaultActive"]);
    };
  }
}), Jt = /* @__PURE__ */ lt(Nt, [["__scopeId", "data-v-caca6c06"]]);
export {
  Jt as default
};
