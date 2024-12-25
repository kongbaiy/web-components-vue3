<template>
  <el-table ref="table" stripe show-overflow-tooltip :tooltip-options="tooltipOptions" :="$attrs">
    <slot />
    <template #empty>
      <zs-empty />
    </template>
  </el-table>
</template>

<script setup lang="ts">
import type { TooltipInstance } from 'element-plus'
import ZsEmpty from '../zs-empty/zs-empty.vue'

const table = ref()
const tooltipOptions: Partial<TooltipInstance> = {
  popperClass: 'ks-table-tooltip'
}

defineExpose({
  table
})
</script>

<style lang="scss" scoped>
.el-table {
  --el-table-text-color: var(--el-text-color-primary);
  --el-table-border-color: transparent;

  :deep(thead) {
    --el-table-header-text-color: var(--el-text-color-primary);

    th {
      font-weight: 600;
    }
  }

  :deep(th.el-table__cell) {
    --el-table-header-bg-color: #f0f7ff;

    border: none;
  }

  :deep(.el-table__inner-wrapper::before) {
    display: none;
  }

  :deep(.el-table__cell) {
    height: 48px;

    // border-bottom: none; 取消边框样式后表格内部会出现滚动条
  }

  // :deep(td .cell:empty::before) {
  //   content: "-";
  // }
}

:global(.ks-table-tooltip) {
  max-width: 320px;
}
</style>
