<template>
    <div :class="{ 'title-wrap': true, 'border': border }">
        <p :class="['title', className]">
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
    border?: boolean
    background?: string
    className?: string
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

.border {
    @apply b-b-1 b-b-solid b-[var(--el-border-color)];
}
</style>
