<template>
  <el-dialog v-bind="$attrs" title="请进行安全验证" width="340px" @close="handleClose">
    <div v-loading="loading">
      <div
        :style="{
          backgroundImage: getBase64FullUrl(sliderVerifyInfo?.shadeImage)
        }"
        class="slider-verify-bg"
      >
        <el-icon :size="20" @click="getSliderVerifyInfo" class="cursor-pointer">
          <ep-refresh-left />
        </el-icon>
        <div
          :style="{
            top: `${sliderVerifyInfo.y}px`,
            transform: `translate3d(${moveX}px, 0px, 0px)`
          }"
          class="slider-verify-key"
        >
          <img :src="getImageBase64FullUrl(sliderVerifyInfo?.cutoutImage)" />
        </div>
      </div>

      <div
        ref="sliderVerifyContainer"
        :class="['slider-verify-container', getSliderVerifyStateClass(sliderVerifyState)]"
      >
        <p v-if="moveX === 0" class="slider-verify-title">向右滑动填充拼图</p>
        <div
          ref="sliderVerification"
          :style="{ transform: `translate3d(${moveX}px, 0px, 0px)` }"
          class="slider-verification"
        >
          <el-button v-if="sliderVerifyState !== 'error'" class="slider-verify-button__primary">
            <el-icon :size="20"><ep-right /></el-icon
          ></el-button>

          <el-button v-else type="danger" class="slider-verify-button__danger">
            <el-icon :size="20"><ep-closeBold /></el-icon
          ></el-button>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import { api } from '@/utils'

interface IProps {
  delay?: number
}

interface ICheckSliderVerify {
  charImage: string
  x: string | number
  y: string | number
}

type Mouse = TouchEvent | MouseEvent

type TSliderVerifyState = 'success' | 'error' | 'null'

const props = withDefaults(defineProps<IProps>(), {
  delay: 600
})
const emits = defineEmits(['next', 'update:modelValue'])
const attrs = useAttrs()

const sliderVerifyInfo = ref<any>({})
const sliderVerifyContainer = ref<HTMLDivElement>()
const sliderVerification = ref<HTMLDivElement>()
const startX = ref<number>(0)
const moveX = ref<number>(0)
const stopSliding = ref<boolean>()
const loading = ref<boolean>(false)
const sliderVerifyState = ref<TSliderVerifyState>('null')

watch(
  () => attrs.modelValue,
  (newValue: boolean) => {
    newValue && onShow()
    nextTick(onLoad)
  }
)

onBeforeUnmount(() => {
  sliderVerification.value?.removeEventListener('mousedown', handleMousedown)
  document.removeEventListener('mousemove', handleMousemove)
  document.removeEventListener('mouseup', handleMouseup)
})

function onShow() {
  getSliderVerifyInfo()
}

function onLoad() {
  sliderVerification.value?.addEventListener('mousedown', handleMousedown)
  document.addEventListener('mousemove', handleMousemove)
  document.addEventListener('mouseup', handleMouseup)
}

function handleMousedown(e: Mouse) {
  e.preventDefault()
  startX.value = (e as MouseEvent).clientX || (e as TouchEvent).changedTouches[0].clientX
}

function handleMousemove(e: Mouse) {
  e.preventDefault()

  const { offsetWidth: sliderBoundary } = sliderVerifyContainer.value || {}
  const { offsetWidth: sliderWidth } = sliderVerification.value || {}

  if (stopSliding.value || !startX.value || !sliderBoundary || !sliderWidth) return

  const clientX = (e as MouseEvent).clientX || (e as TouchEvent).changedTouches[0].clientX
  const sliderDistanceX = clientX - startX.value
  const sliderMaxDistanceX = sliderDistanceX + sliderWidth + 4

  if (sliderDistanceX > 0 && sliderMaxDistanceX < sliderBoundary) moveX.value = sliderDistanceX
}

function handleMouseup(e: Mouse) {
  e.preventDefault()

  const { offsetWidth: sliderWidth = 0 } = sliderVerification.value || {}

  if (stopSliding.value || !startX.value || startX.value < sliderWidth) return
  stopSliding.value = true

  const { charImage, y } = sliderVerifyInfo.value
  const x = moveX.value

  checkSliderVerify({
    charImage,
    x,
    y
  })
}

function handleClose() {
  emits('update:modelValue', false)
}

function getBase64FullUrl(base64Context: string) {
  if (!base64Context) return ''
  return `url(data:image/jpg;base64,${base64Context})`
}

function getImageBase64FullUrl(base64Context: string) {
  if (!base64Context) return ''
  return `data:image/jpg;base64,${base64Context}`
}

function getSliderVerifyStateClass(sate: TSliderVerifyState) {
  return `slider-verify__${sate}`
}

// 获取验证码图片信息
async function getSliderVerifyInfo() {
  try {
    loading.value = true
    const { data } = await api.get('/sso/captcha/verification/image')

    sliderVerifyInfo.value = data
  } finally {
    loading.value = false
    sliderVerifyState.value = 'null'
  }
}

// 检查验证是否正确
async function checkSliderVerify(params: ICheckSliderVerify) {
  try {
    const { data } = await api.post('/sso/captcha/verification/result', params)

    if (typeof data.result === 'boolean')
      sliderVerifyState.value = data.result ? 'success' : 'error'

    setTimeout(() => {
      startX.value = 0
      moveX.value = 0
      stopSliding.value = false

      if (data.result) {
        emits('next')
        emits('update:modelValue', false)
      } else getSliderVerifyInfo()
    }, props.delay)
  } catch (error) {
    sliderVerifyState.value = 'null'
    startX.value = 0
    moveX.value = 0
    stopSliding.value = false
  }
}
</script>

<style lang="scss" scoped>
.slider-verify-bg {
  @apply relative h-150px text-right bg-no-repeat;
}

.slider-verify-key {
  @apply absolute left-0;
}

.slider-verify-container {
  @apply relative of-hidden mt-20px h-40px b-1 b-solid b-#dcdfe6 bg-#F7F9FD;
}

.slider-verify-title {
  @apply flex items-center justify-center h-full text-sm;
}

.slider-verification {
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  @apply absolute top-0 left-0 flex items-center justify-center w-40px h-40px;
}

.slider-verify__error {
  @apply b-[var(--el-color-danger)];
}

.slider-verify-button__primary {
  @apply w-full h-full! rd-0! bg-white cursor-pointer hover:b-[var(--el-color-primary)] hover:bg-[var(--el-color-primary)] hover:text-white;
}

.slider-verify-button__danger {
  @apply w-full h-full! rd-0!;
}
</style>
