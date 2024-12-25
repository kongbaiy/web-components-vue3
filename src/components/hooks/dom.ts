import { onBeforeMount, onMounted, ref, type Ref } from 'vue'

type Mouse = TouchEvent | MouseEvent

interface IScrollToBottomOptions {
    targetElement: HTMLElement
    offset?: number
}

export function useMouse(targetElement: Ref<HTMLElement>, startBase?: number | (() => number)) {
    const startX = ref<number>(0)
    const startY = ref<number>(0)
    const moveX = ref<number>(0)
    const moveY = ref<number>(0)
    const movedX = ref<number>(0)
    const movedY = ref<number>(0)
    const isTarget = ref<boolean>(false)
    let startBaseValue: number = 0

    onMounted(() => {
        targetElement.value?.addEventListener('mousedown', handleMousedown)
        document.addEventListener('mousemove', handleMousemove)
        document.addEventListener('mouseup', handleMouseup)
    })

    onBeforeMount(() => {
        targetElement.value?.removeEventListener('mousedown', handleMousedown)
        document.removeEventListener('mousemove', handleMousemove)
        document.removeEventListener('mouseup', handleMouseup)
    })

    function handleMousedown(e: Mouse) {
        e.preventDefault()

        isTarget.value = true
        startX.value = (e as MouseEvent).clientX || (e as TouchEvent).changedTouches[0].clientX
        startY.value = (e as MouseEvent).clientY || (e as TouchEvent).changedTouches[0].clientY

        if (startBase) startBaseValue = typeof startBase === 'function' ? startBase() : startBase
    }

    function handleMousemove(e: Mouse) {
        e.preventDefault()

        if (!isTarget.value) return

        const clientX = (e as MouseEvent).clientX
        const clientY = (e as MouseEvent).clientY

        moveX.value = clientX - startX.value + startBaseValue
        moveY.value = clientY - startY.value + startBaseValue
    }

    function handleMouseup(e: Mouse) {
        e.preventDefault()
        isTarget.value = false
        movedX.value = moveX.value
        movedY.value = moveY.value
    }

    return {
        moveX,
        moveY,
        movedX,
        movedY
    }
}


export function useScrollToBottomInit() {
    let timeout: NodeJS.Timeout | null

    return (options: IScrollToBottomOptions, callback: () => void) => {
        const { targetElement, offset = 40 } = options
        const { scrollTop, scrollHeight, clientHeight } = targetElement

        if (Number(scrollTop + clientHeight) >= Number(scrollHeight) - offset) {
            timeout && clearTimeout(timeout)
            timeout = setTimeout(() => {
                callback?.()
                timeout = null
            }, 300) as unknown as NodeJS.Timeout
        }
    }
}
