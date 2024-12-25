<template>
  <div class="title-wrap">
    <p class="title">
      {{ text }}
    </p>
    <slot name="titleRight" />
  </div>
  <slot />
</template>

<script lang="ts" setup>
type TAlign = 'left' | 'right' | 'center'

interface IProps {
  text: string
  align?: TAlign
  background?: string
}

withDefaults(defineProps<IProps>(), {
  align: 'left'
})
</script>

<style lang="scss" scoped>
.title-wrap {
  @apply flex items-center justify-between;
}

.title {
  @apply my-3 text-sm text-#333 fw-600;
}
</style>
