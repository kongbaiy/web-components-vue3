<template>
  <div class="menu-container">
    <template v-for="menu in menus" :key="menu.name">
      <el-button v-if="!menu.children?.length">
        {{ menu.name }}
      </el-button>

      <el-popover v-else v-model:visible="popoverVisible" placement="top" width="auto" trigger="click">
        <template #reference>
          <div :class="[getRouteActiveState(menu.path) && 'menu-root__active']" @click="handleToRoute(menu.path)">
            {{ menu.meta?.title }}
          </div>
        </template>

        <div class="menu">
          <div v-for="item in menu.children" :key="item.name"
            :class="['menu-item', getRouteActiveState(`${item.path}`) && 'menu-item__active']"
            @click="handleToRoute(item.path)">
            {{ item.meta?.title }}
          </div>
        </div>
      </el-popover>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { RouteLocationMatched, RouteRecordRaw } from 'vue-router'

const router = useRouter()
const route = useRoute()

const menus: RouteRecordRaw[] = router.options.routes.filter((menu: RouteRecordRaw) => {
  const componentPath = menu?.component?.toString()
  const layoutComponent = '/layout/three-word-frame.vue'

  return componentPath?.includes(layoutComponent)
})

const popoverVisible = ref<boolean>(false)

function handleToRoute(path: string) {
  router.push(path)
}

function getRouteActiveState(path: string): boolean {
  return route.matched?.some((item: RouteLocationMatched) => item.path?.includes(path))
}
</script>

<style lang="scss" scoped>
.menu-container {
  @apply h-full;

  :deep(.el-button) {
    @apply border-none;
  }
}

.menu-root__active {
  @apply flex items-center h-full color-[var(--el-color-primary)] cursor-pointer;
}

.menu {
  @apply cursor-pointer;

  .menu-item {
    @apply p-8px;

    &:nth-child(n + 2) {
      @apply b-t-1 b-t-solid b-t-#dbdbdb;
    }
  }

  .menu-item__active {
    @apply color-[var(--el-color-primary)];
  }
}
</style>
