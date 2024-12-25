<template>
  <el-pagination
    v-if="isPagination"
    :="$attrs"
    class="justify-end py-4"
    background
    layout="total, prev, pager, next, jumper"
  />
</template>

<script setup lang="ts">
import type { PaginationProps } from 'element-plus'

interface Props {
  layout?: string
}

withDefaults(defineProps<Props>(), {
  layout: 'total, prev, pager, next, jumper'
})
const attrs = useAttrs() as PaginationProps

// 有点坑，pageSize 从 attrs 获取的不是驼峰式，而是用 - 分割的小写
// 后面可以写个把中划线改成驼峰式的函数
const pageSize = attrs.pageSize ?? (attrs as any)['page-size']

const isPagination = computed(() => (attrs.total ?? 0) > (pageSize ?? 0))
</script>
