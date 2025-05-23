<template>
    <el-menu :defaultActive="defaultActive" unique-opened @open="onMenuOpen">
        <template v-for="m in menus" :key="m.path">
            <el-sub-menu v-if="m.children" :index="m.path" :class="{ 'hidden-icon': m.meta.hideArrow }">
                <template #title>
                    <div v-if="!m.meta.hideMenu" class="flex items-center w-full"
                        @click="handleSubMenu($event, m.redirect)">
                        <el-icon v-if="m.meta?.icon">
                            <component :is="getIcon(m.meta.icon)"></component>
                        </el-icon>
                        <span> {{ $t(m.meta.title) }} </span>
                    </div>
                </template>

                <template v-for="c in m.children" :key="c.path">
                    <el-menu-item :index="getRouterLinkToPath([m.path, c.path])" v-if="!c.meta.hideMenu">
                        <router-link :to="getRouterLinkToPath([m.path, c.path])" class="w-full">
                            {{ $t(c.meta.title) }}
                        </router-link>
                    </el-menu-item>
                </template>
            </el-sub-menu>

            <el-menu-item v-else>
                <router-link :to="m.path">
                    {{ $t(m.meta.title) }}
                </router-link>
            </el-menu-item>
        </template>
    </el-menu>
</template>

<script lang="ts" setup>
import * as ElementPlusIcons from '@element-plus/icons-vue'

interface IProps {
    menuKey: string
}

const props = defineProps<IProps>()

const router = useRouter()
const route = useRoute()

const menus: any[] = router.options.routes.filter((menu) => {
    if (menu.meta?.[props.menuKey]) return menu
    return void 0
})

let parentRoutePath: string | null = ''

const defaultActive = computed(() => {
    const { meta, path } = route

    if (meta.activeMenu) return meta.activeMenu as string
    return path
})

function onMenuOpen() {
    if (parentRoutePath) {
        router.push(parentRoutePath)
        setParentRoutePath(null)
    }
}

function handleSubMenu(e: Event, path: string) {
    setParentRoutePath(path)
    e.preventDefault()
}

function setParentRoutePath(path: string) {
    parentRoutePath = path
}

function getRouterLinkToPath(paths: string[]) {
    return paths.join('/')
}

function getIcon(path: string | (() => any)) {
    if (typeof path === 'string' && path?.startsWith('ep-')) {
        const iconName = toCamelCase(path.replace('ep-', ''));

        return ElementPlusIcons[iconName]
    }

    return typeof path === 'function' ? path() : path
}

function toCamelCase(str: string) {
    return str.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
}

</script>

<style lang="scss" scoped>
.el-sub-menu.is-active :deep(.el-sub-menu__title) {
    font-weight: 500;
    color: var(--el-color-primary);
}

.el-menu-item.is-active {
    background: rgb(64 158 255 / 8%);
    border-right: 2px solid var(--el-color-primary);
}

.hidden-icon :deep(.el-sub-menu__icon-arrow) {
    @apply hidden;
}
</style>
