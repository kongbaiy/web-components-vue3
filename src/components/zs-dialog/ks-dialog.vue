<template>
  <el-dialog v-model="model" class="ks-dialog" :="$attrs" :close-on-click-modal="false" draggable>
    <template #header>
      <slot name="header" />
    </template>

    <slot />

    <template v-if="showFooter" #footer>
      <slot name="footer">
        <el-button @click="model = false">
          {{ cancelButtonText || $t('cancel') }}
        </el-button>
        <el-button type="primary" :loading="confirmLoading" @click="emit('confirm')">
          {{ confirmButtonText || $t('confirm') }}
        </el-button>
      </slot>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
interface Props {
  showFooter?: boolean
  confirmLoading?: boolean
  cancelButtonText?: string
  confirmButtonText?: string
}

withDefaults(defineProps<Props>(), {
  showFooter: true
})

const emit = defineEmits<{
  confirm: []
}>()

const model = defineModel<boolean>('modelValue')
</script>

<style lang="scss">
.ks-dialog {
  --el-dialog-border-radius: 8px;
  --el-dialog-padding-primary: 0;
  --el-dialog-title-font-size: 16px;

  .el-dialog__header {
    position: relative;
    height: 60px;
    padding: 0 20px;
    line-height: 60px;
    background: linear-gradient(180deg, rgb(28 146 255 / 12%) 0%, rgb(235 245 255 / 12%) 100%);
    border-bottom: 1px solid #f5f5f5;
    border-top-left-radius: var(--el-dialog-border-radius);
    border-top-right-radius: var(--el-dialog-border-radius);

    &::after {
      position: absolute;
      top: 50%;
      right: 88px;
      display: block;
      width: 111px;
      height: 35px;
      content: '';
      transform: translateY(-50%);
    }
  }

  .el-dialog__title {
    font-weight: 500;
  }

  .el-dialog__body {
    padding: 16px 20px;
  }

  .el-dialog__footer {
    padding: 0 20px 20px;
  }
}
</style>
