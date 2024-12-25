<template>
    <div class="h-10 flex items-center bg-#fff px-3">
        <el-breadcrumb separator="/">
            <transition-group name="breadcrumb">
                <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="item.path" :data-path="item.path">
                    <span v-if="index === breadcrumbs.length - 2" @click="router.go(-1)" class="go-back">返回</span>
                    <template v-else>
                        {{ $t(item.meta?.title) }}
                    </template>
                </el-breadcrumb-item>
            </transition-group>
        </el-breadcrumb>
    </div>
</template>

<script lang="ts" setup>
import type { RouteLocationMatched } from 'vue-router'
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'


const route = useRoute()
const router = useRouter()
const breadcrumbs = ref<any>([])

watchEffect(() => {
    const matched = route.matched
    const currentRoute = matched?.[matched.length - 1]
    const activeMenu = currentRoute.meta.activeMenu as string
    const breadcrumbList = [matched[0]]

    if (activeMenu) {
        const rootPath = matched[0].path
        const children = matched.find((item) => item.children.length)?.children || []
        const findActiveMenu = children.find((item) => `${rootPath}/${item.path}` === activeMenu)
        breadcrumbList.push({
            ...(findActiveMenu as unknown as RouteLocationMatched),
            path: activeMenu
        })
    }

    breadcrumbList.push(currentRoute)
    breadcrumbs.value = breadcrumbList.filter(
        (item) => item.meta?.title && !item.meta?.hideBreadcrumb
    )
})
</script>

<style lang="scss" scoped>
.breadcrumb-enter-active {
    transition: all 0.4s;
}

.breadcrumb-leave-active {
    position: absolute;
    transition: all 0.3s;
}

.breadcrumb-enter-from,
.breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(20px);
}

.go-back {
    @apply cursor-pointer;
}
</style>
