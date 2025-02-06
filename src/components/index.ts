import { defineAsyncComponent } from 'vue';

import 'virtual:uno.css'
import '@/assets/scss/reset.scss'
import '@/assets/scss/element-plus.scss'

import zsAuthRedirect from './zs-auth-redirect/zs-auth-redirect.vue';
import zsBreadcrumb from './zs-breadcrumb/zs-breadcrumb.vue';
import zsDialog from './zs-dialog/zs-dialog.vue';
import zsEmpty from './zs-empty/zs-empty.vue';
import zsFormLayout from './zs-form-layout/zs-form-layout.vue';
import zsHeaderUser from './zs-layout/zs-layout.vue';
import zsLayout from './zs-layout/zs-layout.vue';
import zsMenu from './zs-menu/zs-menu.vue';
import zsPagination from './zs-pagination/zs-pagination.vue';
import zsScrollIntermittent from './zs-scroll-intermittent/zs-scroll-intermittent.vue';
import zsSliderVerify from './zs-slider-verify/zs-slider-verify.vue';
import zsSplitContainer from './zs-split-container/zs-split-container.vue';
import zsTable from './zs-table/zs-table.vue';
import zsTitle from './zs-title/zs-title.vue';


export {
    zsAuthRedirect,
    zsBreadcrumb,
    zsDialog,
    zsEmpty,
    zsFormLayout,
    zsHeaderUser,
    zsLayout,
    zsMenu,
    zsPagination,
    zsScrollIntermittent,
    zsSliderVerify,
    zsSplitContainer,
    zsTable,
    zsTitle
}


const components = import.meta.glob('./zs-*/*.vue');
const registerGlobalComponent = (app: { component: (arg0: string, arg1: globalThis.Component) => void; }) => {
    for (const [key, value] of Object.entries(components)) {

        const name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
        app.component(name, defineAsyncComponent(value as any));
    }
};

export default registerGlobalComponent;
