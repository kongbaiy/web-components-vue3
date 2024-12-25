<template>
  <el-main class="container-main">
    <el-header class="container-header">影像中心</el-header>

    <el-main class="container-content">
      <RouterView />
    </el-main>

    <el-footer height="44px" class="container-footer">
      <div class="menu-box">
        <Menu />
      </div>
    </el-footer>
  </el-main>
</template>

<script lang="ts" setup>
import Menu from './menu.vue'
</script>

<style lang="scss" scoped>
.container-main {
  --base-border: #d9d9d9;
  @apply p-0 h-100vh bg-[rgb(247,250,252)];
}

.container-header {
  --el-header-height: 44px;
  @apply flex items-center b-b-1 b-b-solid b-[var(--base-border)] bg-white;
}

.container-content {
  --el-main-padding: 0;
  @apply p-8px h-[calc(100%-88px)] bg;
}

.container-footer {
  @apply flex justify-center;
}

.menu-box {
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  @apply of-hidden p-x-20px bg-white rd-22px;
  :deep(.el-button) {
    @apply rd-0 h-full;
  }
}

:deep(.el-scrollbar__view) {
  @apply h-full;
}
</style>
