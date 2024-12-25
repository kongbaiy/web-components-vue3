import { defineAsyncComponent as r } from "vue";
const i = /* @__PURE__ */ Object.assign({ "./zs-auth-redirect/zs-auth-redirect.vue": () => import("./zs-auth-redirect-CgEeLIJB.js"), "./zs-breadcrumb/zs-breadcrumb.vue": () => import("./zs-breadcrumb-CFVIQuEi.js"), "./zs-dialog/ks-dialog.vue": () => import("./ks-dialog-5Sy5XnKO.js"), "./zs-empty/zs-empty.vue": () => import("./zs-empty-CibRIAzs.js"), "./zs-form-layout/zs-form-layout.vue": () => import("./zs-form-layout-tZyqbFrK.js"), "./zs-header-user/zs-header-user.vue": () => import("./zs-header-user-Dg1xg5Il.js"), "./zs-layout/zs-layout.vue": () => import("./zs-layout-C5yqffAV.js"), "./zs-menu/zs-menu.vue": () => import("./zs-menu-C8HlPOI-.js"), "./zs-pagination/zs-pagination.vue": () => import("./zs-pagination-T0fqr_0o.js"), "./zs-scroll-intermittent/zs-scroll-intermittent.vue": () => import("./zs-scroll-intermittent-ClLoFhM3.js"), "./zs-slider-verify/zs-slider-verify.vue": () => import("./zs-slider-verify-CvDTXnHC.js"), "./zs-split-container/zs-split-container.vue": () => import("./zs-split-container-1RRZog_d.js"), "./zs-table/zs-table.vue": () => import("./zs-table-CqkCkCMu.js"), "./zs-title/index.vue": () => import("./index-DWT2wY6C.js") }), m = (t) => {
  for (const [e, s] of Object.entries(i)) {
    const o = e.slice(e.lastIndexOf("/") + 1, e.lastIndexOf("."));
    t.component(o, r(s));
  }
};
export {
  m as default
};
