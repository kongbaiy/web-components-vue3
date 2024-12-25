<template>
    <el-container :style="style" class="layout-container">
        <el-header class="b-1px b-#d9d9d9 b-b-solid bg-white h-12!">
            <section class="h-full flex-v-center justify-between">
                <slot name="header" />
            </section>
        </el-header>

        <slot>
            <el-container class="h-full overflow-hidden">
                <el-aside width="208px" class="b-r-1px b-r-#d9d9d9 b-r-solid">
                    <el-scrollbar>
                        <zs-menu :menuKey="menuKey" />
                    </el-scrollbar>
                </el-aside>
                <el-main class="bg-#f7f9fd p0!">
                    <div class="breadcrumb-shadow">
                        <zs-breadcrumb />
                        <slot name="tags" />
                    </div>
                    <div class="m5 h-[calc(100vh-128px)] bg-#fff">
                        <el-scrollbar wrap-style="padding: 20px;">
                            <router-view />
                        </el-scrollbar>
                    </div>
                </el-main>
            </el-container>
        </slot>
    </el-container>
</template>

<script lang="ts" setup>
defineProps<{
    menuKey: string
    style?: string | object
}>()
</script>

<style lang="scss" scoped>
:deep(.el-scrollbar__view) {
    height: 100%;
}

.layout-container {
    @apply h-100vh bg-center bg-no-repeat bg-cover;
}

.breadcrumb-shadow {
    box-shadow: 0 2px 8px 0 rgb(0 0 0 / 8%);
}
</style>
