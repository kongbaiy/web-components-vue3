<template>
  <div class="layout">
    <div class="layout-header">
      <slot name="header"></slot>
    </div>
    <div class="layout-main">
      <div class="layout-main-left">
        <div class="layout-type" :class="[typeAlign && 'align-right']">
          <slot name="type"></slot>
        </div>
        <div class="layout-left-content">
          <el-scrollbar>
            <slot name="leftContent"></slot>
          </el-scrollbar>
        </div>
        <div class="layout-menu" :class="[menuAlign && 'align-right']">
          <slot name="menu"></slot>
        </div>
      </div>
      <div class="layout-main-right">
        <el-scrollbar>
          <slot name="rightContent"></slot>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
type TAling = 'left' | 'right'

interface IProps {
  typeAlign?: TAling
  menuAlign?: TAling
}

defineProps<IProps>()
</script>

<style lang="scss" scoped>
.layout {
  --base-color: rgb(239, 239, 245);
  @apply m-16px p-0 h-[calc(100vh-32px)] bg-white b-1 b-solid b-[var(--base-color)];

  .layout-top-border {
    @apply b-t-1 b-t-solid b-[var(--base-color)];
  }

  .layout-bottom-border {
    @apply b-b-1 b-b-solid b-[var(--base-color)];
  }

  .layout-header {
    @apply flex items-center p-x-2 h-40px;
    @extend .layout-bottom-border;
  }

  .layout-main {
    @apply flex h-[calc(100%-40px)];
  }

  .layout-main-left,
  .layout-main-right {
    @apply w-50% h-full;
  }

  .layout-main-left {
    @apply b-r-1 b-r-solid b-[var(--base-color)];
  }

  .layout-type {
    @apply h-40px;
    @extend .layout-bottom-border;
  }

  .layout-menu {
    @apply flex items-center of-hidden h-40px;
    @extend .layout-top-border;
  }

  .layout-left-content {
    @apply h-[calc(100%-80px)];
  }

  .company {
    @apply b-r-1 b-#ddd b-r-solid p-x-2 text-16px fw-600;
  }
}

.align-right {
  @apply justify-end;
}

:deep(.el-scrollbar__view) {
  @apply h-full;
}
</style>
