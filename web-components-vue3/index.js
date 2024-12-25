import { defineAsyncComponent as n } from "vue";
const s = /* @__PURE__ */ Object.assign({ "./zs-auth-redirect/index.vue": () => import("./index-Cts7UOuQ.js"), "./zs-breadcrumb/index.vue": () => import("./index--tCyYWAb.js"), "./zs-dialog/ks-dialog.vue": () => import("./ks-dialog-5Sy5XnKO.js"), "./zs-empty/index.vue": () => import("./index-CibRIAzs.js"), "./zs-form-layout/zs-form-layout.vue": () => import("./zs-form-layout-tZyqbFrK.js"), "./zs-header-user/index.vue": () => import("./index-DryrcPG9.js"), "./zs-layout/index.vue": () => import("./index-Dcp6j-il.js"), "./zs-menu/index.vue": () => import("./index-D2gAaZzw.js"), "./zs-pagination/ks-pagination.vue": () => import("./ks-pagination-C7PntW9N.js"), "./zs-scroll-intermittent/index.vue": () => import("./index-D3WwdjZJ.js"), "./zs-slider-verify/index.vue": () => import("./index-CkxY0pBZ.js"), "./zs-split-container/index.vue": () => import("./index-DTW0MGcT.js"), "./zs-table/zs-table.vue": () => import("./zs-table-NuQJzyli.js"), "./zs-title/index.vue": () => import("./index-B12zBj8x.js") }), m = (t) => {
  for (const [e, i] of Object.entries(s)) {
    const o = e.slice(e.lastIndexOf("/") + 1, e.lastIndexOf("."));
    t.component(o, n(i));
  }
};
export {
  m as default
};
