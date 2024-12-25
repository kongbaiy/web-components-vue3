<template>
  <el-form ref="formRef" v-bind="$attrs" :class="getClassName(layout)">
    <slot />

    <div v-if="$slots.action" class="action">
      <slot name="action" />
    </div>

    <div v-else class="action">
      <el-button type="primary" @click="handleSubmit($attrs.model)">
        {{ $t('search') }}
      </el-button>

      <el-button @click="handleReset($attrs.model)">
        {{ $t('reset') }}
      </el-button>
    </div>
  </el-form>
</template>

<script lang="ts" setup>
import type { FormInstance } from 'element-plus'

type TLayout = 'actionEnd'

interface IResetFields {
  page?: string
}

interface IProps {
  layout?: TLayout
  resetFields?: IResetFields
}

defineOptions({
  inheritAttrs: false,
})
const props = withDefaults(defineProps<IProps>(), {
  layout: 'actionEnd',
  resetFields: () => ({
    page: 'page',
  }),
})

const emits = defineEmits(['submit', 'beforeReset'])
const formRef = ref()

function handleSubmit(formData: any) {
  const { resetFields } = props

  formData[resetFields.page as string] = 1
  emits('submit', formData)
}

function handleReset(formData: any) {
  emits('beforeReset')
  resetForm(formRef.value)
  handleSubmit(formData)
}

// 大小写转为 -
function convertToKebabCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

function getClassName(name: string | string[]) {
  const className = typeof name === 'string' ? [name] : name

  return className.map(item => convertToKebabCase(item)).join(' ')
}

function resetForm(formEl: FormInstance | undefined) {
  if (!formEl) return

  formEl.resetFields()
}
</script>

<style lang="scss" scoped>
.action-end {
  @apply flex flex-wrap;
}

.action {
  @apply flex-1 flex justify-end;
}
</style>
