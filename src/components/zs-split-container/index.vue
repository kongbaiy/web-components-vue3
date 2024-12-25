<template>
  <div class="split-container">
    <div ref="firstSplitPaneRef" :style="firstSplitPaneStyle" class="split-pane">
      <slot name="1"></slot>
    </div>
    <div v-if="$slots['2']" ref="splitResizeRef" class="split-resize"></div>
    <div class="split-pane">
      <slot name="2"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMouse } from '@/components/hooks'

type TDirection = 'horizontal' | 'vertical'

interface IProps {
  direction?: TDirection
  slotNumber?: number
}

withDefaults(defineProps<IProps>(), {
  direction: 'horizontal',
  slotNumber: 2
})

const splitResizeRef = ref<HTMLElement>()
const firstSplitPaneRef = ref<HTMLElement>()
const { moveX } = useMouse(splitResizeRef, () => firstSplitPaneRef.value?.offsetWidth)

onMounted(() => {
  moveX.value = firstSplitPaneRef.value?.offsetWidth as unknown as number
})

const firstSplitPaneStyle = computed(() => {
  if (typeof firstSplitPaneRef.value?.offsetWidth === 'undefined') {
    return {
      flex: '0 0 auto'
    }
  }

  return {
    flex: `0 0 ${moveX.value}px`
  }
})
</script>

<style lang="scss" scoped>
.split-container {
  @apply of-hidden flex w-200px b-1 b-solid;
  .split-pane {
    @apply of-hidden;
    &:nth-child(n + 2) {
      @apply flex-1;
    }
  }
}

.split-resize {
  @apply w-4px bg-#ddd cursor-col-resize;
}
</style>
