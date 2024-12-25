<template>
  <div ref="containerRef" :style="{ height }" class="scroll-intermittent">
    <div ref="scrollRef">
      <div ref="contentRef" class="content">
        <slot></slot>
      </div>
      <div ref="cloneContentRef"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  delay?: number
  height?: string
}

const props = withDefaults(defineProps<IProps>(), {
  delay: 5000
})

const containerRef = ref()
const contentRef = ref()
const scrollRef = ref()
const cloneContentRef = ref()
const activeIndex = ref<number>(1)

let interval: NodeJS.Timeout | undefined

onMounted(() => {
  if (containerRef.value) {
    start()
    containerRef.value.addEventListener('mouseenter', handleMouseEnter)
    containerRef.value.addEventListener('mouseleave', handleMouseleave)
  }
})

onBeforeUnmount(() => {
  clearInterval(interval)
  interval = null
  containerRef.value.removeEventListener('mouseenter', handleMouseEnter)
  containerRef.value.removeEventListener('mouseleave', handleMouseleave)
})

function handleMouseEnter() {
  clearInterval(interval)
  interval = null
}

function handleMouseleave() {
  start()
}

function start() {
  const scroll = scrollRef.value
  const content = contentRef.value
  const { offsetHeight } = content.children[0]
  const { length } = content.children

  cloneContentRef.value.innerHTML = content.innerHTML
  interval = setInterval(() => {
    if (activeIndex.value > length) activeIndex.value = 1

    setMoveUp(scroll, activeIndex.value * offsetHeight, length * offsetHeight)
    activeIndex.value += 1
  }, props.delay)
}

function setMoveUp(element: HTMLElement, offset: number, maxOffset: number) {
  element.setAttribute('style', `margin-top:-${offset}px;transition: all 400ms;`)

  if (offset === maxOffset) {
    // element.addEventListener('transitionend', () => {
    //   element.removeAttribute('style')
    // })
    // element.removeEventListener('transitionend', () => {})
    setTimeout(() => {
      element.removeAttribute('style')
    }, 600)
  }
}
</script>

<style lang="scss" scoped>
.scroll-intermittent {
  @apply relative of-hidden text-0;
}

.content {
  @apply text-0 of-hidden;
}
</style>
