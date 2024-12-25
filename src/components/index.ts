import { defineAsyncComponent } from 'vue';

const components = import.meta.glob('./zs-*/*.vue');
const registerGlobalComponent = (app: { component: (arg0: string, arg1: globalThis.Component) => void; }) => {
    for (const [key, value] of Object.entries(components)) {
        const name = key.slice(key.lastIndexOf("/") + 1, key.lastIndexOf("."));
        app.component(name, defineAsyncComponent(value as any));
    }
};

export default registerGlobalComponent;
